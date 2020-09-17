<?php

namespace Tests\Browser;

use App\Cepa;
use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class CepaTest extends DuskTestCase
{
    /** @test */
    public function agregar_error_cepa()
    {
        $this->browse(function (Browser $browser) {
            $browser->loginAs(User::find(1))
                ->visit('/cepas')
                ->pause(1000)
                ->assertSee('Administrar Cepas Microbianas')
                ->pause(2000)
                ->press("@btn-agregar-cepa")
                ->pause(1000)
                ->driver->executeScript('window.scrollTo(0, 230);');

            $browser->press("@btn-form-cepa")
                ->pause(1000)
                ->screenshot("agregar_error_cepa_1")
                ->pause(4000)
                ->type("@codigo-cepa", "B00")
                ->screenshot("agregar_error_cepa_2")
                ->press('@cerrar-sesion');
        });
    }

    /** @test */
    public function agregar_cepa()
    {
        $cepa = Cepa::where("codigo", "B001")->first();
        if ($cepa != null) {
            $cepa->delete();
        }
        $this->browse(function (Browser $browser) {
            $browser->loginAs(User::find(1))
                ->visit('/cepas')
                ->pause(1000)
                ->assertSee('Administrar Cepas Microbianas')
                ->pause(2000)
                ->press("@btn-agregar-cepa")
                ->pause(1000)
                ->driver->executeScript('window.scrollTo(0, 240);');

            $browser->screenshot("agregar_cepa_1")
                ->type("@codigo-cepa", "B001")
                ->pause(500)
                ->type("@estado-cepa", "viva")
                ->pause(500)
                ->type("@otras-caract-cepa", "otras caracteristicas")
                ->pause(500)
                ->check("@check-cepa")
                ->pause(500)
                ->screenshot("agregar_cepa_2")
                ->press("@btn-form-cepa")
                ->pause(4000)
                ->screenshot("agregar_cepa_3")
                ->pause(1000)
                ->press('@cerrar-sesion');
        });
    }


    /** @test */
    public function editar_cepa()
    {
        $cepa = Cepa::where("codigo", "B001")->first();
        $this->browse(function (Browser $browser) use ($cepa) {
            $browser->loginAs(User::find(1))
                ->visit('/cepas')
                ->pause(1000)
                ->assertSee('Administrar Cepas Microbianas')
                ->pause(5000)
                ->press("@btn-editar-cepa-" . $cepa->id)
                ->pause(1000)
                ->driver->executeScript('window.scrollTo(0, 240);');

            $browser->press('@cerrar-sesion');
            /*    ->type("@codigo-cepa", "B001")
                 ->pause(500)
                 ->type("@estado-cepa", "viva")
                 ->pause(500)
                 ->type("@otras-caract-cepa", "otras caracteristicas")
                 ->pause(500)
                 ->check("@check-cepa")
                 ->pause(500)
                 ->screenshot("agregar_cepa_2")
                 ->press("@btn-form-cepa")
                 ->pause(4000)
                 ->screenshot("agregar_cepa_3")
                 ->pause(1000)
                 ->press('@cerrar-sesion');*/
        });
    }
}
