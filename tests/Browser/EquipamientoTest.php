<?php

namespace Tests\Browser;

use App\Equipamiento;
use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class EquipamientoTest extends DuskTestCase
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
    public function agregar_equipamiento()
    {
        $this->browse(function (Browser $browser) {
            $browser->loginAs(User::find(1))->visit('/equipamientos')->pause(1000)
                ->assertSee('Equipamientos')->pause(4000)->press("@btn-agregar")
                ->pause(2000)->type("@nombre", "nombre")->pause(500)
                ->type("@funcion", "funcion")->pause(500)
                ->driver->executeScript('window.scrollTo(0, 500);');

            $browser->pause(500)->attach("@imagen", public_path("/archivos-test/imagen-test-perfil.jpg"))
                ->pause(1000)->press("@btn-croppie")->pause(500)->press("@publicar")->pause(500)
                ->type("@caracteristicas", "caracteristicas")->pause(500)
                ->press("@btn-accion")->waitForText("Equipamiento agregado con exito!!")
                ->assertSee("Equipamiento agregado con exito!!")->pause(2000);
        });
    }

    /** @test */
    public function editar_eliminar_equipamiento()
    {
        $equipamiento = Equipamiento::where("nombre", "nombre")->first();
        $this->browse(function (Browser $browser) use ($equipamiento) {
            $browser->loginAs(User::find(1))->visit('/equipamientos')->pause(1000)
                ->assertSee('Equipamientos')->pause(4000)->press("@btn-editar-" . $equipamiento->id)
                ->driver->executeScript('window.scrollTo(0, 500);');

            $browser->pause(500)->press("@btn-accion")->waitForText("Equipamiento editado con exito!!")
                ->assertSee("Equipamiento editado con exito!!")->pause(2000)
                ->press("@btn-eliminar-" . $equipamiento->id)->pause(2000)->press("@btn-eliminar-modal")
                ->waitForText("Equipamiento eliminado con exito!!")
                ->assertSee("Equipamiento eliminado con exito!!")->pause(2000);
        });
    }
}
