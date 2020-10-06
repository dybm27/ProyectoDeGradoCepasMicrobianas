<?php

namespace Tests\Browser;

use App\Investigador;
use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class InvestigadorTest extends DuskTestCase
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
    public function agregar_investigador()
    {
        $this->browse(function (Browser $browser) {
            $browser->loginAs(User::find(1))->visit('/investigadores')->pause(1000)
                ->assertSee('Investigadores')->pause(4000)->press("@btn-agregar")
                ->pause(2000)->type("@nombres", "nombres")->pause(500)
                ->type("@apellidos", "apellidos")->pause(500)
                ->driver->executeScript('window.scrollTo(0, 500);');

            $browser->type("@email", "email@prueba.com")->pause(500)
                ->type("@nivel_estudio", "nivel estudio")->pause(500)->type("@cargo", "cargo")
                ->pause(500)->attach("@imagen", public_path("/archivos-test/imagen-test-perfil.jpg"))
                ->pause(1000)->press("@btn-croppie")->pause(500)->press("@publicar")->pause(500)
                ->press("@btn-accion")->waitForText("Investigador agregado con exito!!")
                ->assertSee("Investigador agregado con exito!!")->pause(2000);
        });
    }

    /** @test */
    public function editar_eliminar_investigador()
    {
        $investigador = Investigador::where("email", "email@prueba.com")->first();
        $this->browse(function (Browser $browser) use ($investigador) {
            $browser->loginAs(User::find(1))->visit('/investigadores')->pause(1000)
                ->assertSee('Investigadores')->pause(4000)->press("@btn-editar-" . $investigador->id)
                ->driver->executeScript('window.scrollTo(0, 500);');

            $browser->pause(500)->press("@btn-accion")->waitForText("Investigador editado con exito!!")
                ->assertSee("Investigador editado con exito!!")->pause(2000)
                ->press("@btn-eliminar-" . $investigador->id)->pause(2000)->press("@btn-eliminar-modal")
                ->waitForText("Investigador eliminado con exito!!")
                ->assertSee("Investigador eliminado con exito!!")->pause(2000);
        });
    }
}
