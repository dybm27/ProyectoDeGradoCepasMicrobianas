<?php

namespace Tests\Browser;

use App\ColorHongo;
use App\ColorLevadura;
use App\FormaCaractMacroBacteria;
use App\Genero;
use App\TexturaActinomiceto;
use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class OtraInfoTest extends DuskTestCase
{
    protected  function setUp(): void
    {
        parent::setUp();

        $user = User::find(1);
        $user->session_id = null;
        $user->lastActivityTime = null;
        $user->save();
    }

    // cepas
    /** @test */
    public function otra_info_agregar_cepas()
    {
        $this->browse(function (Browser $browser) {
            $browser->loginAs(User::find(1))->visit('/otra-info')->pause(1000)
                ->assertSee('Administrar Otra Información')->pause(4000)->assertSee('Cepas')->pause(1000)
                ->press("@btn-agregar")->pause(2000)->type("@nombre", "000000")->pause(500)
                ->press("@btn-accion-modal")->waitForText("Genero agregado/a con exito")
                ->assertSee("Genero agregado/a con exito")->pause(2000);
        });
    }

    /** @test */
    public function otra_info_editar_eliminar_cepas()
    {
        $genero = Genero::where("nombre", "000000")->first();
        $this->browse(function (Browser $browser) use ($genero) {
            $browser->loginAs(User::find(1))->visit('/otra-info')->pause(1000)
                ->assertSee('Administrar Otra Información')->pause(4000)->assertSee('Cepas')->pause(1000)
                ->press("@btn-mostrar")->pause(2000)
                ->press("@btn-editar-" . $genero->id)->pause(2000)
                ->assertSee('Editar Genero')->press("@btn-accion-modal")
                ->waitForText("Genero editado/a con exito!!")->assertSee("Genero editado/a con exito!!");

            $browser->pause(2000)->press("@btn-eliminar-" . $genero->id)->pause(2000)
                ->assertSee('Eliminar Genero')->press("@btn-accion-modal")
                ->waitForText("Genero eliminado/a con exito!!")
                ->assertSee("Genero eliminado/a con exito!!")->pause(2000);
        });
    }

    // bacterias
    /** @test */
    public function otra_info_agregar_bacterias()
    {
        $this->browse(function (Browser $browser) {
            $browser->loginAs(User::find(1))->visit('/otra-info')->pause(1000)
                ->assertSee('Administrar Otra Información')->pause(4000)->press("@nav-bacterias")->pause(4000)
                ->assertSee('Bacterias')->pause(1000)->press("@btn-mostrar-1")->pause(2000)
                ->press("@btn-agregar")->pause(2000)->type("@nombre", "000000")->pause(500)
                ->press("@btn-accion-modal")->waitForText("Forma_macro agregado/a con exito")
                ->assertSee("Forma_macro agregado/a con exito")->pause(2000);
        });
    }

    /** @test */
    public function otra_info_editar_eliminar_bacterias()
    {
        $forma = FormaCaractMacroBacteria::where("nombre", "000000")->first();
        $this->browse(function (Browser $browser) use ($forma) {
            $browser->loginAs(User::find(1))->visit('/otra-info')->pause(1000)
                ->assertSee('Administrar Otra Información')->pause(4000)->press("@nav-bacterias")->pause(4000)
                ->assertSee('Bacterias')->pause(1000)->press("@btn-mostrar-1")->pause(500)
                ->press("@btn-mostrar")->pause(2000)->press("@btn-editar-" . $forma->id)->pause(2000)
                ->assertSee('Editar Forma_macro')->press("@btn-accion-modal")
                ->waitForText("Forma_macro editado/a con exito!!")
                ->assertSee("Forma_macro editado/a con exito!!")->pause(2000);

            $browser->pause(2000)->press("@btn-eliminar-" . $forma->id)->pause(2000)
                ->assertSee('Eliminar Forma_macro')->press("@btn-accion-modal")
                ->waitForText("Forma_macro eliminado/a con exito!!")
                ->assertSee("Forma_macro eliminado/a con exito!!")->pause(2000);
        });
    }

    // hongos
    /** @test */
    public function otra_info_agregar_hongos()
    {
        $this->browse(function (Browser $browser) {
            $browser->loginAs(User::find(1))->visit('/otra-info')->pause(1000)
                ->assertSee('Administrar Otra Información')->pause(4000)->press("@nav-hongos")->pause(4000)
                ->assertSee('Hongos')->pause(1000)->press("@btn-mostrar-1")->pause(2000)
                ->press("@btn-agregar")->pause(2000)->type("@nombre", "000000")->pause(500)
                ->press("@btn-accion-modal")->waitForText("Color agregado/a con exito")
                ->assertSee("Color agregado/a con exito")->pause(2000);
        });
    }

    /** @test */
    public function otra_info_editar_eliminar_hongos()
    {
        $color = ColorHongo::where("nombre", "000000")->first();
        $this->browse(function (Browser $browser) use ($color) {
            $browser->loginAs(User::find(1))->visit('/otra-info')->pause(1000)
                ->assertSee('Administrar Otra Información')->pause(4000)->press("@nav-hongos")->pause(4000)
                ->assertSee('Hongos')->pause(1000)->press("@btn-mostrar-1")->pause(500)
                ->press("@btn-mostrar")->pause(2000)->press("@btn-editar-" . $color->id)->pause(2000)
                ->assertSee('Editar Color')->press("@btn-accion-modal")
                ->waitForText("Color editado/a con exito!!")
                ->assertSee("Color editado/a con exito!!")->pause(2000);

            $browser->pause(2000)->press("@btn-eliminar-" . $color->id)->pause(2000)
                ->assertSee('Eliminar Color')->press("@btn-accion-modal")
                ->waitForText("Color eliminado/a con exito!!")
                ->assertSee("Color eliminado/a con exito!!")->pause(2000);
        });
    }

    // levaduras
    /** @test */
    public function otra_info_agregar_levaduras()
    {
        $this->browse(function (Browser $browser) {
            $browser->loginAs(User::find(1))->visit('/otra-info')->pause(1000)
                ->assertSee('Administrar Otra Información')->pause(4000)->press("@nav-levaduras")->pause(4000)
                ->assertSee('Levaduras')->pause(1000)->press("@btn-mostrar-1")->pause(2000)
                ->press("@btn-agregar")->pause(2000)->type("@nombre", "000000")->pause(500)
                ->press("@btn-accion-modal")->waitForText("Color agregado/a con exito")
                ->assertSee("Color agregado/a con exito")->pause(2000);
        });
    }

    /** @test */
    public function otra_info_editar_eliminar_levaduras()
    {
        $color = ColorLevadura::where("nombre", "000000")->first();
        $this->browse(function (Browser $browser) use ($color) {
            $browser->loginAs(User::find(1))->visit('/otra-info')->pause(1000)
                ->assertSee('Administrar Otra Información')->pause(4000)->press("@nav-levaduras")->pause(4000)
                ->assertSee('Levaduras')->pause(1000)->press("@btn-mostrar-1")->pause(500)
                ->press("@btn-mostrar")->pause(2000)->press("@btn-editar-" . $color->id)->pause(2000)
                ->assertSee('Editar Color')->press("@btn-accion-modal")
                ->waitForText("Color editado/a con exito!!")
                ->assertSee("Color editado/a con exito!!")->pause(2000);

            $browser->pause(2000)->press("@btn-eliminar-" . $color->id)->pause(2000)
                ->assertSee('Eliminar Color')->press("@btn-accion-modal")
                ->waitForText("Color eliminado/a con exito!!")
                ->assertSee("Color eliminado/a con exito!!")->pause(2000);
        });
    }

    // actinomicetos
    /** @test */
    public function otra_info_agregar_actinomicetos()
    {
        $this->browse(function (Browser $browser) {
            $browser->loginAs(User::find(1))->visit('/otra-info')->pause(1000)
                ->assertSee('Administrar Otra Información')->pause(4000)->press("@nav-actinomicetos")->pause(4000)
                ->assertSee('Actinomicetos')->pause(1000)->press("@btn-mostrar-1")->pause(2000)
                ->press("@btn-agregar")->pause(2000)->type("@nombre", "000000")->pause(500)
                ->press("@btn-accion-modal")->waitForText("Textura agregado/a con exito")
                ->assertSee("Textura agregado/a con exito")->pause(2000);
        });
    }

    /** @test */
    public function otra_info_editar_eliminar_actinomicetos()
    {
        $textura = TexturaActinomiceto::where("nombre", "000000")->first();
        $this->browse(function (Browser $browser) use ($textura) {
            $browser->loginAs(User::find(1))->visit('/otra-info')->pause(1000)
                ->assertSee('Administrar Otra Información')->pause(4000)->press("@nav-actinomicetos")->pause(4000)
                ->assertSee('Actinomicetos')->pause(1000)->press("@btn-mostrar-1")->pause(500)
                ->press("@btn-mostrar")->pause(2000)->press("@btn-editar-" . $textura->id)->pause(2000)
                ->assertSee('Editar Textura')->press("@btn-accion-modal")
                ->waitForText("Textura editado/a con exito!!")
                ->assertSee("Textura editado/a con exito!!")->pause(2000);

            $browser->pause(2000)->press("@btn-eliminar-" . $textura->id)->pause(2000)
                ->assertSee('Eliminar Textura')->press("@btn-accion-modal")
                ->waitForText("Textura eliminado/a con exito!!")
                ->assertSee("Textura eliminado/a con exito!!")->pause(2000);
        });
    }
}
