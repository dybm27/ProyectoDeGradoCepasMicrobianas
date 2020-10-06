<?php

namespace Tests\Browser;

use App\Cepa;
use App\Levadura;
use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class CaractLevaduraTest extends DuskTestCase
{
    protected  function setUp(): void
    {
        parent::setUp();

        $bacteria = factory(Levadura::class)->create();
        $cepa = Cepa::where("codigo", $bacteria->cepa->codigo)->first();
        $cepa->codigo = "0000";
        $cepa->save();

        $user = User::find(1);
        $user->session_id = null;
        $user->lastActivityTime = null;
        $user->save();
    }

    // caract - macro
    /** @test */
    public function caract_macro_cepa_levadura()
    {
        $cepa = Cepa::where("codigo", "0000")->first();
        $this->browse(function (Browser $browser) use ($cepa) {
            $browser->loginAs(User::find(1))->visit('/cepas')->pause(1000)
                ->assertSee('Administrar Cepas Microbianas')->pause(5000)
                ->press("@btn-caract-cepa-" . $cepa->id)->pause(2000)
                ->assertSee('Modificar Características')->press("@btn-agregar")
                ->driver->executeScript('window.scrollTo(0, 700);');

            $browser->type("@medio", "medio")->pause(1000)
                ->attach("@imagen", public_path("/archivos-test/imagen-test.jpg"))->pause(1000)->press("@btn-croppie")
                ->type("@topografia_superficie", "topografia_superficie")->pause(500)
                ->type("@borde_colonia", "borde_colonia")->pause(500)
                ->press("@btn-accion")->waitForText("Medio agregado con exito!!")
                ->assertSee("Medio agregado con exito!!")->pause(2000)
                ->assertSee('Editar')->press("@btn-accion")
                ->waitForText("Medio editado con exito!!")
                ->assertSee("Medio editado con exito!!")->pause(2000)
                ->driver->executeScript('window.scrollTo(0, 0);');

            $browser->press("@btn-eliminar")->pause(2000)->press("@btn-eliminar-modal")
                ->waitForText("Característica Macroscópica eliminadas con exito!!")
                ->assertSee("Característica Macroscópica eliminadas con exito!!")->pause(2000);
        });
        $cepa->delete();
    }

    // caract - micro
    /** @test */
    public function caract_micro_cepa_levadura()
    {
        $cepa = Cepa::where("codigo", "0000")->first();
        $this->browse(function (Browser $browser) use ($cepa) {
            $browser->loginAs(User::find(1))->visit('/cepas')->pause(1000)
                ->assertSee('Administrar Cepas Microbianas')->pause(5000)
                ->press("@btn-caract-cepa-" . $cepa->id)->pause(2000)
                ->assertSee('Modificar Características')
                ->press("@nav-caract-micro")->pause(2000)->press("@btn-agregar")
                ->driver->executeScript('window.scrollTo(0, 1000);');

            $browser->attach("@imagen", public_path("/archivos-test/imagen-test.jpg"))
                ->pause(1000)->press("@btn-croppie-1")
                ->type("@otras_caract", "otras_caract")->pause(500)->press("@btn-accion")
                ->waitForText("Característica Microscópica agregada con exito!!")
                ->assertSee("Característica Microscópica agregada con exito!!")->pause(2000)
                ->assertSee('Editar')->press("@btn-accion")
                ->waitForText("Característica Microscópica editada con exito!!")
                ->assertSee("Característica Microscópica editada con exito!!")->pause(2000)
                ->driver->executeScript('window.scrollTo(0, 0);');

            $browser->press("@btn-eliminar")->pause(2000)->press("@btn-eliminar-modal")
                ->waitForText("Característica Microscópica eliminadas con exito!!")
                ->assertSee("Característica Microscópica eliminadas con exito!!")->pause(2000);
        });
        $cepa->delete();
    }

    // caract - bioqui
    /** @test */
    public function caract_bioqui_cepa_levadura()
    {
        $cepa = Cepa::where("codigo", "0000")->first();
        $this->browse(function (Browser $browser) use ($cepa) {
            $browser->loginAs(User::find(1))->visit('/cepas')->pause(1000)
                ->assertSee('Administrar Cepas Microbianas')->pause(5000)
                ->press("@btn-caract-cepa-" . $cepa->id)->pause(2000)
                ->assertSee('Modificar Características')->press("@nav-caract-bioqui")->pause(2000)
                ->press("@btn-agregar")->type("@ureasa", "ureasa")->pause(500)
                ->type("@fenol_oxidasa", "fenol_oxidasa")->pause(500)
                ->driver->executeScript('window.scrollTo(0, 500);');

            $browser->type("@produccion_acido", "produccion_acido")->pause(500)
                ->type("@termotolerancia_37", "termotolerancia_37")->pause(500)
                ->type("@termotolerancia_42", "termotolerancia_42")->pause(500)
                ->type("@nitratos", "nitratos")->pause(500)
                ->attach("@imagen", public_path("/archivos-test/imagen-test.jpg"))
                ->press("@btn-croppie-1")->driver->executeScript('window.scrollTo(0, 1000);');

            $browser->type("@otras_caract", "otras caracteristicas")->pause(500)->pause(500)->press("@btn-accion")
                ->waitForText("Característica Bioquímica agregada con exito!!")
                ->assertSee("Característica Bioquímica agregada con exito!!")->pause(2000)->assertSee('Editar')
                ->press("@btn-accion")->waitForText("Característica Bioquímica editada con exito!!")
                ->assertSee("Característica Bioquímica editada con exito!!")->pause(2000)
                ->driver->executeScript('window.scrollTo(0, 0);');

            $browser->press("@btn-eliminar")->pause(2000)->press("@btn-eliminar-modal")
                ->waitForText("Característica Bioquímica eliminadas con exito!!")
                ->assertSee("Característica Bioquímica eliminadas con exito!!")->pause(2000);
        });
        $cepa->delete();
    }

    // identi - molecu
    /** @test */
    public function identi_molecu_cepa_levadura()
    {
        $cepa = Cepa::where("codigo", "0000")->first();
        $this->browse(function (Browser $browser) use ($cepa) {
            $browser->loginAs(User::find(1))->visit('/cepas')->pause(1000)
                ->assertSee('Administrar Cepas Microbianas')->pause(5000)
                ->press("@btn-caract-cepa-" . $cepa->id)->pause(2000)
                ->assertSee('Modificar Características')->press("@nav-identi-molecu")
                ->pause(2000)->press("@btn-agregar")
                ->type("@nombre_forward", "nombre_forward")->pause(500)
                ->type("@nombre_reversed", "nombre_reversed")->pause(500)
                ->type("@secuencia_forward", "secuencia_forward")->pause(500)
                ->type("@secuencia_reversed", "secuencia_reversed")->pause(500)
                ->type("@producto_forward", "producto_forward")->pause(500)
                ->type("@producto_reversed", "producto_reversed")->pause(500)
                ->driver->executeScript('window.scrollTo(0, 700);');

            $browser->attach("@imagen1", public_path("/archivos-test/imagen-test.jpg"))
                ->attach("@imagen2", public_path("/archivos-test/imagen-test.jpg"))
                ->type("@condiciones_pcr", "condiciones_pcr")->pause(500)->type("@blast", "blast")->pause(500)
                ->type("@analisis_filogenetico", "analisis_filogenetico")->pause(500)
                ->type("@observaciones", "observaciones")->pause(500)
                ->driver->executeScript('window.scrollTo(0, 1200);');

            $browser->press("@btn-croppie")->pause(500)->press("@btn-croppie")->pause(500)
                ->driver->executeScript('window.scrollTo(0, 700);');

            $browser->press("@btn-accion")->waitForText("Identificación Molecular agregada con exito!!")
                ->assertSee("Identificación Molecular agregada con exito!!")->pause(2000)->assertSee('Editar')
                ->press("@btn-accion")->waitForText("Identificación Molecular editada con exito!!")
                ->assertSee("Identificación Molecular editada con exito!!")->pause(2000)
                ->driver->executeScript('window.scrollTo(0, 0);');

            $browser->press("@btn-eliminar")->pause(2000)->press("@btn-eliminar-modal")
                ->waitForText("Identificación Molecular eliminadas con exito!!")
                ->assertSee("Identificación Molecular eliminadas con exito!!")->pause(2000);
        });
        $cepa->delete();
    }
}
