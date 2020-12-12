<?php

namespace Tests\Browser;

use App\Actinomiceto;
use App\Bacteria;
use App\CaracMacroBacteria;
use App\Cepa;
use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class CepaTest extends DuskTestCase
{
    protected  function setUp(): void
    {
        parent::setUp();

        $user = User::find(1);
        $user->session_id = null;
        $user->save();
    }

    /** @test */
    public function agregar_error_cepa()
    {
        $this->browse(function (Browser $browser) {
            $browser->loginAs(User::find(1))->visit('/cepas')->pause(1000)
                ->assertSee('Administrar Cepas Microbianas')->pause(2000)
                ->press("@btn-agregar-cepa")->pause(1000)
                ->driver->executeScript('window.scrollTo(0, 230);');

            $browser->press("@btn-form-cepa")->pause(2000)->type("@codigo-cepa", "B00");
        });
    }

    /** @test */
    public function agregar_cepaa()
    {
        $cepa = Cepa::where("codigo", "0000")->first();
        if ($cepa != null) {
            $cepa->delete();
        }
        $this->browse(function (Browser $browser) {
            $browser->loginAs(User::find(1))->visit('/cepas')->pause(1000)
                ->assertSee('Administrar Cepas Microbianas')->pause(2000)
                ->press("@btn-agregar-cepa")->pause(1000)
                ->driver->executeScript('window.scrollTo(0, 240);');

            $browser->type("@codigo-cepa", "0000")->pause(500)
                ->type("@estado-cepa", "viva")->pause(500)
                ->type("@otras-caract-cepa", "otras caracteristicas")->pause(500)
                ->check("@check-cepa")->pause(500)
                ->press("@btn-form-cepa")->pause(2000);
        });
    }

    /** @test */
    public function editar_cepa()
    {
        $cepa = Cepa::where("codigo", "0000")->first();
        $this->browse(function (Browser $browser) use ($cepa) {
            $browser->loginAs(User::find(1))->visit('/cepas')->pause(1000)
                ->assertSee('Administrar Cepas Microbianas')->pause(5000)
                ->press("@btn-editar-cepa-" . $cepa->id)->pause(1000)
                ->driver->executeScript('window.scrollTo(0, 200);');

            $browser->value('input[dusk=estado-cepa]', '')->pause(1000)
                ->type("@estado-cepa", "dead")->pause(500)
                ->press('@select-origen-cepa')->pause(500)
                ->press('@Compra')->pause(500)
                ->press('@select-origen-cepa')->pause(500)
                ->type("@otras-caract-cepa", "otras caracteristicas editar")->pause(500)
                ->check("@check-cepa")->pause(500)
                ->press("@btn-form-cepa")->pause(2000);
        });
    }

    /** @test */
    public function eliminar_cepa()
    {
        $cepa = Cepa::where("codigo", "0000")->first();
        $caract = factory(CaracMacroBacteria::class)->create(["bacteria_id" => $cepa->bacteria->id]);
        $this->browse(function (Browser $browser) use ($cepa) {
            $browser->loginAs(User::find(1))->visit('/cepas')->pause(1000)
                ->assertSee('Administrar Cepas Microbianas')->pause(5000)
                ->press("@btn-eliminar-cepa-" . $cepa->id)->pause(2000)
                ->press('@eliminar-cepa')->pause(2000)
                ->assertSee('La cepa cuenta con caracteristicas registradas, favor eliminarlas');
        });
        $caract->delete();
        $user = User::find(1);
        $user->session_id = null;
        $user->save();
        $this->browse(function (Browser $browser) use ($cepa) {
            $browser->loginAs(User::find(1))->visit('/cepas')->pause(1000)
                ->assertSee('Administrar Cepas Microbianas')->pause(5000)
                ->press("@btn-eliminar-cepa-" . $cepa->id)->pause(2000)
                ->press('@eliminar-cepa')->pause(2000);
        });
    }
}
