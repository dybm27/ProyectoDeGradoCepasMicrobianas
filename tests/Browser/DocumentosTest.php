<?php

namespace Tests\Browser;

use App\Documento;
use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class DocumentosTest extends DuskTestCase
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
    public function agregar_proyecto()
    {
        $this->browse(function (Browser $browser) {
            $browser->loginAs(User::find(1))->visit('/documentos')->pause(1000)
                ->assertSee('Documentos')->pause(4000)->press("@btn-agregar")
                ->pause(2000)->type("@nombre_documento", "nombre documento")->pause(500)
                ->type("@nombre_autor", "nombre autor")->pause(500)
                ->driver->executeScript('window.scrollTo(0, 500);');

            $browser->attach("@archivo", public_path("/archivos-test/archivo-test.pdf"))
                ->attach("@imagen", public_path("/archivos-test/imagen-test-perfil.jpg"))
                ->pause(1000)->press("@btn-croppie")->pause(500)->type("@descripcion", "descripcion")
                ->pause(500)->press("@publicar")->pause(500)->press("@btn-accion")
                ->waitForText("Proyecto agregado con exito!!")
                ->assertSee("Proyecto agregado con exito!!")->pause(2000);
        });
    }

    /** @test */
    public function editar_eliminar_proyecto()
    {
        $proyecto = Documento::where("tipo_documento_id", 1)
            ->where("nombre_documento", "nombre documento")->first();
        $this->browse(function (Browser $browser) use ($proyecto) {
            $browser->loginAs(User::find(1))->visit('/documentos')->pause(1000)
                ->assertSee('Documentos')->pause(4000)->press("@btn-editar-" . $proyecto->id)
                ->driver->executeScript('window.scrollTo(0, 500);');

            $browser->pause(500)->press("@btn-accion")->waitForText("Proyecto editado con exito!!")
                ->assertSee("Proyecto editado con exito!!")->pause(2000)
                ->press("@btn-eliminar-" . $proyecto->id)->pause(2000)->press("@btn-eliminar-modal")
                ->waitForText("Proyecto eliminado con exito!!")
                ->assertSee("Proyecto eliminado con exito!!")->pause(2000);
        });
    }


    /** @test */
    public function agregar_publicacion()
    {
        $this->browse(function (Browser $browser) {
            $browser->loginAs(User::find(1))->visit('/documentos')->pause(1000)
                ->assertSee('Documentos')->pause(2000)->press("@nav-publicaciones")->pause(2000)
                ->press("@btn-agregar")->pause(2000)->type("@nombre_documento", "nombre documento")
                ->pause(500)->type("@nombre_autor", "nombre autor")->pause(500)
                ->driver->executeScript('window.scrollTo(0, 500);');

            $browser->attach("@archivo", public_path("/archivos-test/archivo-test.pdf"))
                ->attach("@imagen", public_path("/archivos-test/imagen-test-perfil.jpg"))
                ->pause(1000)->press("@btn-croppie")->pause(500)->type("@descripcion", "descripcion")
                ->pause(500)->press("@publicar")->pause(500)->press("@btn-accion")
                ->waitForText("Publicacion agregada con exito!!")
                ->assertSee("Publicacion agregada con exito!!")->pause(2000);
        });
    }

    /** @test */
    public function editar_eliminar_publicacion()
    {
        $publicacion = Documento::where("tipo_documento_id", 2)
            ->where("nombre_documento", "nombre documento")->first();
        $this->browse(function (Browser $browser) use ($publicacion) {
            $browser->loginAs(User::find(1))->visit('/documentos')->pause(1000)
                ->assertSee('Documentos')->pause(2000)->press("@nav-publicaciones")
                ->pause(2000)->press("@btn-editar-" . $publicacion->id)
                ->driver->executeScript('window.scrollTo(0, 500);');

            $browser->pause(500)->press("@btn-accion")->waitForText("Publicacion editada con exito!!")
                ->assertSee("Publicacion editada con exito!!")->pause(2000)
                ->press("@btn-eliminar-" . $publicacion->id)->pause(2000)->press("@btn-eliminar-modal")
                ->waitForText("Publicacion eliminado con exito!!")
                ->assertSee("Publicacion eliminado con exito!!")->pause(2000);
        });
    }
}
