<?php

namespace Tests\Browser;

use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class UsuarioTest extends DuskTestCase
{
    protected  function setUp(): void
    {
        parent::setUp();

        $user = User::find(1);
        $user->session_id = null;
        $user->lastActivityTime = null;
        $user->save();
    }

    /** @test */
    public function agregar_usuario()
    {
        $this->browse(function (Browser $browser) {
            $browser->loginAs(User::find(1))->visit('/usuarios')->pause(1000)
                ->assertSee('Administrar Usuarios')->pause(4000)->press("@btn-agregar")
                ->pause(2000)->type("@nombre", "aaaaaaaaaa")->pause(500)
                ->attach("@imagen", public_path("/archivos-test/imagen-test-perfil.jpg"))->pause(1000)
                ->driver->executeScript('window.scrollTo(0, 400);');

            $browser->press("@btn-croppie")->type("@email", "email@prueba.com")->pause(500)
                ->type("@pass1", "12345678")->pause(500)->type("@pass2", "12345678")->pause(500)
                ->press("@btn-accion")->waitForText("Usuario agregado con exito!!")
                ->assertSee("Usuario agregado con exito!!")->pause(2000);
        });
    }

    /** @test */
    public function editar_eliminar_usuario()
    {
        $usuario = User::where("email", "email@prueba.com")->first();
        $this->browse(function (Browser $browser) use ($usuario) {
            $browser->loginAs(User::find(1))->visit('/usuarios')->pause(1000)
                ->assertSee('Administrar Usuarios')->pause(4000)->press("@btn-editar-" . $usuario->id)
                ->driver->executeScript('window.scrollTo(0, 400);');

            $browser->pause(500)->press("@btn-accion")->waitForText("Usuario editado con exito!!")
                ->assertSee("Usuario editado con exito!!")->pause(2000)
                ->press("@btn-eliminar-" . $usuario->id)->pause(2000)->press("@btn-eliminar-modal")
                ->waitForText("Usuario eliminado con exito!!")
                ->assertSee("Usuario eliminado con exito!!")->pause(2000);
        });
    }
}
