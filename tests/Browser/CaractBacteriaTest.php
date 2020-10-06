<?php

namespace Tests\Browser;

use App\Bacteria;
use App\Cepa;
use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class CaractBacteriaTest extends DuskTestCase
{
    protected  function setUp(): void
    {
        parent::setUp();

        $bacteria = factory(Bacteria::class)->create();
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
    public function caract_macro_cepa_bacteria()
    {
        $cepa = Cepa::where("codigo", "0000")->first();
        $this->browse(function (Browser $browser) use ($cepa) {
            $browser->loginAs(User::find(1))->visit('/cepas')->pause(1000)
                ->assertSee('Administrar Cepas Microbianas')->pause(5000)
                ->press("@btn-caract-cepa-" . $cepa->id)->pause(2000)
                ->assertSee('Modificar Características')->press("@btn-agregar")
                ->driver->executeScript('window.scrollTo(0, 400);');

            $browser->type("@medio", "medio 1")->pause(1000)
                ->attach("@imagen", public_path("/archivos-test/imagen-test.jpg"))
                ->pause(1000)->press("@btn-croppie")
                ->driver->executeScript('window.scrollTo(0, 600);');

            $browser->type("@otras_caract", "otras caracteristicas")->pause(500)
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
    public function caract_micro_cepa_bacteria()
    {
        $cepa = Cepa::where("codigo", "0000")->first();
        $this->browse(function (Browser $browser) use ($cepa) {
            $browser->loginAs(User::find(1))->visit('/cepas')->pause(1000)
                ->assertSee('Administrar Cepas Microbianas')->pause(5000)
                ->press("@btn-caract-cepa-" . $cepa->id)->pause(2000)
                ->assertSee('Modificar Características')
                ->press("@nav-caract-micro")->pause(2000)->press("@btn-agregar")
                ->driver->executeScript('window.scrollTo(0, 400);');

            $browser->type("@ordenamiento", "ordenamiento")->pause(1000)
                ->attach("@imagen", public_path("/archivos-test/imagen-test.jpg"))
                ->pause(1000)->press("@btn-croppie-1")
                ->driver->executeScript('window.scrollTo(0, 600);');

            $browser->type("@otras_caract", "otras caracteristicas")
                ->pause(500)->press("@btn-accion")
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
    public function caract_bioqui_cepa_bacteria()
    {
        $cepa = Cepa::where("codigo", "0000")->first();
        $this->browse(function (Browser $browser) use ($cepa) {
            $browser->loginAs(User::find(1))->visit('/cepas')->pause(1000)
                ->assertSee('Administrar Cepas Microbianas')->pause(5000)
                ->press("@btn-caract-cepa-" . $cepa->id)->pause(2000)
                ->assertSee('Modificar Características')->press("@nav-caract-bioqui")->pause(2000)
                ->press("@btn-agregar")->type("@oxidasa", "oxidasa")->pause(500)
                ->type("@catalasa", "catalasa")->pause(500)->type("@lia", "lia")->pause(500)->type("@sim", "sim")->pause(500)
                ->type("@citrato", "citrato")->pause(500)->type("@tsi", "tsi")->pause(500)
                ->type("@rm", "rm")->pause(500)->type("@vp", "vp")->pause(500)
                ->driver->executeScript('window.scrollTo(0, 500);');

            $browser->type("@glucosa", "glucosa")->pause(500)->type("@lactosa", "lactosa")->pause(500)
                ->type("@nitrato", "nitrato")->pause(500)->type("@caldo_urea", "caldo_urea")->pause(500)
                ->type("@manitol", "manitol")->pause(500)->type("@xilosa", "xilosa")->pause(500)
                ->type("@of", "of")->pause(500)->type("@almidon", "almidon")->pause(500)
                ->type("@arabinosa", "arabinosa")->pause(500)->type("@sacarosa", "sacarosa")->pause(500)
                ->type("@lecitinasa", "lecitinasa")->pause(500)->type("@lipasa", "lipasa")->pause(500)
                ->type("@hidro_caseina", "hidro_caseina")->pause(500)->type("@hidro_gelatina", "hidro_gelatina")->pause(500)
                ->type("@hidro_urea", "hidro_urea")->pause(500)->type("@creci_dif_temp", "creci_dif_temp")->pause(500)
                ->driver->executeScript('window.scrollTo(0, 700);');

            $browser->type("@creci_nacl", "creci_nacl")->pause(500)
                ->type("@otras_caract", "otras caracteristicas")->pause(500)
                ->attach("@imagen", public_path("/archivos-test/imagen-test.jpg"))
                ->driver->executeScript('window.scrollTo(0, 1500);');

            $browser->press("@btn-croppie-1")->pause(500)->driver->executeScript('window.scrollTo(0, 700);');

            $browser->press("@btn-accion")->waitForText("Características Bioquímicas agregadas con exito!!")
                ->assertSee("Características Bioquímicas agregadas con exito!!")->pause(2000)->assertSee('Editar')
                ->press("@btn-accion")->waitForText("Características Bioquímicas editadas con exito!!")
                ->assertSee("Características Bioquímicas editadas con exito!!")->pause(2000)
                ->driver->executeScript('window.scrollTo(0, 0);');

            $browser->press("@btn-eliminar")->pause(2000)->press("@btn-eliminar-modal")
                ->waitForText("Característica Bioquímica eliminadas con exito!!")
                ->assertSee("Característica Bioquímica eliminadas con exito!!")->pause(2000);
        });
        $cepa->delete();
    }

    // caract - fisio
    /** @test */
    public function caract_fisio_cepa_bacteria()
    {
        $cepa = Cepa::where("codigo", "0000")->first();
        $this->browse(function (Browser $browser) use ($cepa) {
            $browser->loginAs(User::find(1))->visit('/cepas')->pause(1000)
                ->assertSee('Administrar Cepas Microbianas')->pause(5000)
                ->press("@btn-caract-cepa-" . $cepa->id)->pause(2000)
                ->assertSee('Modificar Características')->press("@nav-caract-fisio")->pause(2000)
                ->press("@btn-agregar")->type("@acido_indolacetico", "acido_indolacetico")->pause(500)
                ->type("@fosforo", "fosforo")->pause(500)
                ->driver->executeScript('window.scrollTo(0, 1000);');

            $browser->type("@sideroforos", "sideroforos")->pause(500)
                ->type("@nitrogeno", "nitrogeno")->pause(500)
                ->attach("@imagen", public_path("/archivos-test/imagen-test.jpg"))
                ->type("@otras_caract", "otras caracteristicas")->pause(500)
                ->press("@btn-croppie-1")->pause(500)->press("@btn-accion")
                ->waitForText("Características Fisiológicas agregada con exito!!")
                ->assertSee("Características Fisiológicas agregada con exito!!")->pause(2000)
                ->assertSee('Editar')->press("@btn-accion")
                ->waitForText("Característica Microscópica editada con exito!!")
                ->assertSee("Característica Microscópica editada con exito!!")->pause(2000)
                ->driver->executeScript('window.scrollTo(0, 0);');

            $browser->press("@btn-eliminar")->pause(2000)->press("@btn-eliminar-modal")
                ->waitForText("Característica Fisiológica eliminadas con exito!!")
                ->assertSee("Característica Fisiológica eliminadas con exito!!")->pause(2000);
        });
        $cepa->delete();
    }

    // identi - molecu
    /** @test */
    public function identi_molecu_cepa_bacteria()
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
                ->type("@secuen_forward", "secuen_forward")->pause(500)
                ->type("@secuen_reversed", "secuen_reversed")->pause(500)
                ->type("@produc_forward", "produc_forward")->pause(500)
                ->type("@produc_reversed", "produc_reversed")->pause(500)
                ->driver->executeScript('window.scrollTo(0, 700);');

            $browser->type("@obser_secuenciacion", "obser_secuenciacion")->pause(500)
                ->attach("@imagen1", public_path("/archivos-test/imagen-test.jpg"))
                ->attach("@imagen2", public_path("/archivos-test/imagen-test.jpg"))
                ->driver->executeScript('window.scrollTo(0, 1500);');

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
