<?php

namespace Tests\Browser;

use App\Actinomiceto;
use App\Cepa;
use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class CaractActinomicetoTest extends DuskTestCase
{
    protected  function setUp(): void
    {
        parent::setUp();

        $bacteria = factory(Actinomiceto::class)->create();
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
    public function caract_macro_cepa_actinomiceto()
    {
        $cepa = Cepa::where("codigo", "0000")->first();
        $this->browse(function (Browser $browser) use ($cepa) {
            $browser->loginAs(User::find(1))->visit('/cepas')->pause(1000)
                ->assertSee('Administrar Cepas Microbianas')->pause(5000)
                ->press("@btn-caract-cepa-" . $cepa->id)->pause(2000)
                ->assertSee('Modificar Características')->press("@btn-agregar")
                ->driver->executeScript('window.scrollTo(0, 400);');

            $browser->type("@medio", "medio")->pause(500)
                ->type("@secrecion_geosminas", "secrecion_geosminas")->pause(500)
                ->driver->executeScript('window.scrollTo(0, 600);');

            $browser->attach("@imagen", public_path("/archivos-test/imagen-test.jpg"))
                ->pause(1000)->press("@btn-croppie")
                ->type("@otras_caract", "otras caracteristicas")->pause(500)
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
    public function caract_micro_cepa_actinomiceto()
    {
        $cepa = Cepa::where("codigo", "0000")->first();
        $this->browse(function (Browser $browser) use ($cepa) {
            $browser->loginAs(User::find(1))->visit('/cepas')->pause(1000)
                ->assertSee('Administrar Cepas Microbianas')->pause(5000)
                ->press("@btn-caract-cepa-" . $cepa->id)->pause(2000)
                ->assertSee('Modificar Características')
                ->press("@nav-caract-micro")->pause(2000)->press("@btn-agregar")
                ->driver->executeScript('window.scrollTo(0, 1000);');

            $browser->type("@forma_estructura_reproduccion", "forma_estructura_reproduccion")->pause(1000)
                ->attach("@imagen", public_path("/archivos-test/imagen-test.jpg"))
                ->pause(1000)->press("@btn-croppie-1")
                ->type("@otras_caract", "otras caracteristicas")
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

    // identi - bioqui
    /** @test */
    public function identi_bioqui_cepa_actinomiceto()
    {
        $cepa = Cepa::where("codigo", "0000")->first();
        $this->browse(function (Browser $browser) use ($cepa) {
            $browser->loginAs(User::find(1))->visit('/cepas')->pause(1000)
                ->assertSee('Administrar Cepas Microbianas')->pause(5000)
                ->press("@btn-caract-cepa-" . $cepa->id)->pause(2000)
                ->assertSee('Modificar Características')->press("@nav-identi-bioqui")->pause(2000)
                ->press("@btn-agregar")->type("@oxidasa", "oxidasa")->pause(500)
                ->type("@catalasa", "catalasa")->pause(500)->type("@citrato", "citrato")->pause(500)
                ->type("@nitratos", "nitratos")->pause(500)->type("@caseina", "caseina")->pause(500)
                ->type("@hidro_urea", "hidro_urea")->pause(500)
                ->driver->executeScript('window.scrollTo(0, 500);');

            $browser->type("@hidro_gelatina", "hidro_gelatina")->pause(500)
                ->type("@sensi_antibioticos", "sensi_antibioticos")->pause(500)
                ->type("@fer_manitol", "fer_manitol")->pause(500)->type("@fer_lactosa", "fer_lactosa")->pause(500)
                ->type("@fer_inositol", "fer_inositol")->pause(500)->type("@fer_sacarosa", "fer_sacarosa")->pause(500)
                ->attach("@imagen", public_path("/archivos-test/imagen-test.jpg"))
                ->type("@otras_caract", "otras caracteristicas")->pause(500)
                ->driver->executeScript('window.scrollTo(0, 1200);');

            $browser->press("@btn-croppie-1")->pause(500)->driver->executeScript('window.scrollTo(0, 700);');

            $browser->press("@btn-accion")->waitForText("Identificación Bioquímica agregada con exito!!")
                ->assertSee("Identificación Bioquímica agregada con exito!!")->pause(2000)->assertSee('Editar')
                ->press("@btn-accion")->waitForText("Identificación Bioquímica editada con exito!!")
                ->assertSee("Identificación Bioquímica editada con exito!!")->pause(2000)
                ->driver->executeScript('window.scrollTo(0, 0);');

            $browser->press("@btn-eliminar")->pause(2000)->press("@btn-eliminar-modal")
                ->waitForText("Identificación Bioquímica eliminadas con exito!!")
                ->assertSee("Identificación Bioquímica eliminadas con exito!!")->pause(2000);
        });
        $cepa->delete();
    }

    // otras - caract
    /** @test */
    public function otras_caract_cepa_actinomiceto()
    {
        $cepa = Cepa::where("codigo", "0000")->first();
        $this->browse(function (Browser $browser) use ($cepa) {
            $browser->loginAs(User::find(1))->visit('/cepas')->pause(1000)
                ->assertSee('Administrar Cepas Microbianas')->pause(5000)
                ->press("@btn-caract-cepa-" . $cepa->id)->pause(2000)
                ->assertSee('Modificar Características')->press("@nav-otras-caract")
                ->pause(2000)->press("@btn-agregar")
                ->type("@fijacion_nitrogeno", "fijacion_nitrogeno")->pause(500)
                ->type("@produccion_aia", "produccion_aia")->pause(500)
                ->type("@giberelinas", "giberelinas")->pause(500)
                ->type("@produccion_sideroforos", "produccion_sideroforos")->pause(500)
                ->driver->executeScript('window.scrollTo(0, 700);');

            $browser->type("@solubili_fosforo", "solubili_fosforo")->pause(500)
                ->type("@produccion_pha", "produccion_pha")->pause(500)
                ->type("@alta_produc_antibioticos", "alta_produc_antibioticos")->pause(500)
                ->type("@activi_enzimaticas", "activi_enzimaticas")->pause(500)
                ->type("@antagonismos", "antagonismos")->pause(500)
                ->type("@otras_caract", "otras_caract")->pause(500)
                ->attach("@imagen", public_path("/archivos-test/imagen-test.jpg"))
                ->driver->executeScript('window.scrollTo(0, 1200);');

            $browser->press("@btn-croppie-1")->pause(500)->driver->executeScript('window.scrollTo(0, 700);');

            $browser->press("@btn-accion")->waitForText("Características agregadas con exito!!")
                ->assertSee("Características agregadas con exito!!")->pause(2000)->assertSee('Editar')
                ->press("@btn-accion")->waitForText("Características editadas con exito!!")
                ->assertSee("Características editadas con exito!!")->pause(2000)
                ->driver->executeScript('window.scrollTo(0, 0);');

            $browser->press("@btn-eliminar")->pause(2000)->press("@btn-eliminar-modal")
                ->waitForText("Otras Características de Interés eliminadas con exito!!")
                ->assertSee("Otras Características de Interés eliminadas con exito!!")->pause(2000);
        });
        $cepa->delete();
    }
}
