<?php

namespace Tests\Browser;

use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class EditarPerfilTest extends DuskTestCase
{
    protected  function setUp(): void
    {
        parent::setUp();

        $user = User::find(1);
        $user->session_id = null;
        $user->save();
    }

    /** @test */
    public function cambiar_nombre_error_perfil()
    {
        $this->browse(function (Browser $browser) {
            $browser->loginAs(User::find(1))->visit('/perfil')->pause(1000)
                ->driver->executeScript('window.scrollTo(0, 500);');

            $browser->press('@cambiar-nombre')->pause(1000)
                ->value('input[dusk=nombre]', '')->pause(1000)
                ->type("@nombre", "Dumar 212")->assertSee("El campo solo puede contener letras.")
                ->press("@button")->waitForText("Favor llenar correctamente los campos")
                ->assertSee("Favor llenar correctamente los campos")->pause(2000);
        });
    }

    /** @test */
    public function cambiar_nombre_perfil()
    {
        $this->browse(function (Browser $browser) {
            $browser->loginAs(User::find(1))->visit('/perfil')->pause(1000)
                ->driver->executeScript('window.scrollTo(0, 500);');

            $browser->press('@cambiar-nombre')->pause(1000)
                ->value('input[dusk=nombre]', '')->pause(1000)
                ->type("@nombre", "Dumar Basto M")->press("@button")
                ->waitForText("Accion realizada con exito!!")
                ->assertSee("Accion realizada con exito!!")->pause(2000);
        });
    }

    /** @test */
    public function cambiar_imagen_error_perfil()
    {
        $this->browse(function (Browser $browser) {
            $browser->loginAs(User::find(1))->visit('/perfil')->pause(1000)
                ->driver->executeScript('window.scrollTo(0, 500);');

            $browser->press('@cambiar-imagen')->pause(1000)->press("@button")
                ->assertSee("El campo es requerido.")->waitForText("Error!!")
                ->assertSee("Favor llenar correctamente los campos")->pause(2000);
        });
    }
    /** @test */
    public function cambiar_imagen_perfil()
    {
        $this->browse(function (Browser $browser) {
            $browser->loginAs(User::find(1))->visit('/perfil')->pause(1000)
                ->driver->executeScript('window.scrollTo(0, 500);');

            $browser->press('@cambiar-imagen')->pause(1000)
                ->attach("@imagen", public_path("/archivos-test/imagen-test-perfil.jpg"))
                ->press("@btn-croppie")->press("@button")
                ->waitForText("Accion realizada con exito!!")
                ->assertSee("Accion realizada con exito!!")->pause(2000);
        });
    }

    /** @test */
    public function cambiar_password_error_perfil()
    {
        $this->browse(function (Browser $browser) {
            $browser->loginAs(User::find(1))->visit('/perfil')->pause(1000)
                ->driver->executeScript('window.scrollTo(0, 500);');

            $browser->press('@cambiar-password')->pause(1000)->press("@button")
                ->assertSee("El campo es requerido.")->type("@password", "12345678")
                ->type("@password", "5678")->type("@password-reply", "5678")
                ->press("@button")->waitForText("Favor llenar correctamente los campos")
                ->assertSee("Favor llenar correctamente los campos")->pause(2000);
        });
    }
    
    /** @test */
    public function cambiar_password_perfil()
    {
        $this->browse(function (Browser $browser) {
            $browser->loginAs(User::find(1))->visit('/perfil')->pause(1000)
                ->driver->executeScript('window.scrollTo(0, 500);');

            $browser->press('@cambiar-password')->pause(1000)
                ->type("@password", "12345678")->pause(500)
                ->type("@password-reply", "12345678")->pause(500)
                ->press("@button")->waitForText("Accion realizada con exito!!")
                ->assertSee("Accion realizada con exito!!")->pause(2000);
        });
    }
}
