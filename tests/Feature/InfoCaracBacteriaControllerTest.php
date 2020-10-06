<?php

namespace Tests\Feature;

use App\BordeBacteria;
use App\ColorBacteria;
use App\Events\BacteriasInfoEvent;
use App\FormaCaractMacroBacteria;
use App\FormaCaractMicroBacteria;
use App\TipoAgarBacteria;
use App\Permiso;
use App\ElevacionBacteria;
use App\SuperficieBacteria;
use App\DetalleOpticoBacteria;
use App\TipoMetodoConservacionBacteria;
use CaractMacroBacteriaSeeder;
use CaractMicroBacteriaSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Event;
use Tests\TestCase;
use TiposMetodosConservacionBacteriasSeeder;

class InfoCaracBacteriaControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(CaractMacroBacteriaSeeder::class);
        $this->seed(CaractMicroBacteriaSeeder::class);
        $this->seed(TiposMetodosConservacionBacteriasSeeder::class);
        $permiso1 = Permiso::where('nombre', 'agregar-otra')->first();
        $permiso2 = Permiso::where('nombre', 'editar-otra')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-otra')->first();
        $this->user->rol->permisos()->sync($permiso1->id, $permiso2->id, $permiso3->id);
    }

    /** @test */
    public function validacion_de_campo_tipo_agregar_info_bacterias()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-bacterias/agregar', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('tipo');
    }

    /** @test */
    public function validacion_de_campo_tipo_editar_info_bacterias()
    {
        $response = $this->actingAs($this->user)
            ->putJson('/info-caract-bacterias/editar/1', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('tipo');
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function validacion_de_campo_tipo_eliminar_info_bacterias()
    {
        $response = $this->actingAs($this->user)
            ->deleteJson('/info-caract-bacterias/eliminar/1', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('tipo');
    }

    //----------- forma macro ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_forma_macro_bacterias()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-bacterias/agregar', ['tipo' => 'forma_macro']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_forma_macro_bacterias()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-bacterias/agregar',
                ['tipo' => 'forma_macro', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(BacteriasInfoEvent::class);
        $tipo = FormaCaractMacroBacteria::latest('id')->first();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_forma_macro_bacterias()
    {
        Event::fake();
        $tipo = FormaCaractMacroBacteria::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-bacterias/editar/' . $tipo->id,
                ['tipo' => 'forma_macro', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(BacteriasInfoEvent::class);
        $tipo = $tipo->fresh();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_forma_macro_bacterias()
    {
        Event::fake();
        $tipo = FormaCaractMacroBacteria::first();
        $cantidad = FormaCaractMacroBacteria::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-bacterias/eliminar/' . $tipo->id,
                ['tipo' => 'forma_macro']
            );
        $response->assertOk();
        Event::assertDispatched(BacteriasInfoEvent::class);
        $this->assertCount($cantidad - 1, FormaCaractMacroBacteria::all());
    }

    //----------- borde ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_borde_bacterias()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-bacterias/agregar', ['tipo' => 'borde']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_borde_bacterias()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-bacterias/agregar',
                ['tipo' => 'borde', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(BacteriasInfoEvent::class);
        $tipo = BordeBacteria::latest('id')->first();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_borde_bacterias()
    {
        Event::fake();
        $tipo = BordeBacteria::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-bacterias/editar/' . $tipo->id,
                ['tipo' => 'borde', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(BacteriasInfoEvent::class);
        $tipo = $tipo->fresh();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_borde_bacterias()
    {
        Event::fake();
        $tipo = BordeBacteria::first();
        $cantidad = BordeBacteria::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-bacterias/eliminar/' . $tipo->id,
                ['tipo' => 'borde']
            );
        $response->assertOk();
        Event::assertDispatched(BacteriasInfoEvent::class);
        $this->assertCount($cantidad - 1, BordeBacteria::all());
    }

    //----------- detalle ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_detalle_bacterias()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-bacterias/agregar', ['tipo' => 'detalle']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_detalle_bacterias()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-bacterias/agregar',
                ['tipo' => 'detalle', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(BacteriasInfoEvent::class);
        $tipo = DetalleOpticoBacteria::latest('id')->first();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_detalle_bacterias()
    {
        Event::fake();
        $tipo = DetalleOpticoBacteria::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-bacterias/editar/' . $tipo->id,
                ['tipo' => 'detalle', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(BacteriasInfoEvent::class);
        $tipo = $tipo->fresh();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_detalle_bacterias()
    {
        Event::fake();
        $tipo = DetalleOpticoBacteria::first();
        $cantidad = DetalleOpticoBacteria::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-bacterias/eliminar/' . $tipo->id,
                ['tipo' => 'detalle']
            );
        $response->assertOk();
        Event::assertDispatched(BacteriasInfoEvent::class);
        $this->assertCount($cantidad - 1, DetalleOpticoBacteria::all());
    }

    //----------- elevacion ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_elevacion_bacterias()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-bacterias/agregar', ['tipo' => 'elevacion']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_elevacion_bacterias()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-bacterias/agregar',
                ['tipo' => 'elevacion', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(BacteriasInfoEvent::class);
        $tipo = ElevacionBacteria::latest('id')->first();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_elevacion_bacterias()
    {
        Event::fake();
        $tipo = ElevacionBacteria::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-bacterias/editar/' . $tipo->id,
                ['tipo' => 'elevacion', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(BacteriasInfoEvent::class);
        $tipo = $tipo->fresh();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_elevacion_bacterias()
    {
        Event::fake();
        $tipo = ElevacionBacteria::first();
        $cantidad = ElevacionBacteria::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-bacterias/eliminar/' . $tipo->id,
                ['tipo' => 'elevacion']
            );
        $response->assertOk();
        Event::assertDispatched(BacteriasInfoEvent::class);
        $this->assertCount($cantidad - 1, ElevacionBacteria::all());
    }

    //----------- superficie ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_superficie_bacterias()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-bacterias/agregar', ['tipo' => 'superficie']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_superficie_bacterias()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-bacterias/agregar',
                ['tipo' => 'superficie', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(BacteriasInfoEvent::class);
        $forma = SuperficieBacteria::latest('id')->first();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_superficie_bacterias()
    {
        Event::fake();
        $forma = SuperficieBacteria::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-bacterias/editar/' . $forma->id,
                ['tipo' => 'superficie', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(BacteriasInfoEvent::class);
        $forma = $forma->fresh();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_superficie_bacterias()
    {
        Event::fake();
        $forma = SuperficieBacteria::first();
        $cantidad = SuperficieBacteria::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-bacterias/eliminar/' . $forma->id,
                ['tipo' => 'superficie']
            );
        $response->assertOk();
        Event::assertDispatched(BacteriasInfoEvent::class);
        $this->assertCount($cantidad - 1, SuperficieBacteria::all());
    }

    //----------- forma micro ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_forma_micro_bacterias()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-bacterias/agregar', ['tipo' => 'forma_micro']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_forma_micro_bacterias()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-bacterias/agregar',
                ['tipo' => 'forma_micro', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(BacteriasInfoEvent::class);
        $forma = FormaCaractMicroBacteria::latest('id')->first();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_forma_micro_bacterias()
    {
        Event::fake();
        $forma = FormaCaractMicroBacteria::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-bacterias/editar/' . $forma->id,
                ['tipo' => 'forma_micro', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(BacteriasInfoEvent::class);
        $forma = $forma->fresh();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_forma_micro_bacterias()
    {
        Event::fake();
        $forma = FormaCaractMicroBacteria::first();
        $cantidad = FormaCaractMicroBacteria::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-bacterias/eliminar/' . $forma->id,
                ['tipo' => 'forma_micro']
            );
        $response->assertOk();
        Event::assertDispatched(BacteriasInfoEvent::class);
        $this->assertCount($cantidad - 1, FormaCaractMicroBacteria::all());
    }

    //----------- tipo metodo ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_tipo_metodo_bacterias()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-bacterias/agregar', ['tipo' => 'tipo_metodo']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_tipo_metodo_bacterias()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-bacterias/agregar',
                ['tipo' => 'tipo_metodo', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(BacteriasInfoEvent::class);
        $forma = TipoMetodoConservacionBacteria::latest('id')->first();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_tipo_metodo_bacterias()
    {
        Event::fake();
        $forma = TipoMetodoConservacionBacteria::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-bacterias/editar/' . $forma->id,
                ['tipo' => 'tipo_metodo', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(BacteriasInfoEvent::class);
        $forma = $forma->fresh();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_tipo_metodo_bacterias()
    {
        Event::fake();
        $forma = TipoMetodoConservacionBacteria::first();
        $cantidad = TipoMetodoConservacionBacteria::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-bacterias/eliminar/' . $forma->id,
                ['tipo' => 'tipo_metodo']
            );
        $response->assertOk();
        Event::assertDispatched(BacteriasInfoEvent::class);
        $this->assertCount($cantidad - 1, TipoMetodoConservacionBacteria::all());
    }

    //----------- tipo agar ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_tipo_agar_bacterias()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-bacterias/agregar', ['tipo' => 'tipo_agar']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_tipo_agar_bacterias()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-bacterias/agregar',
                ['tipo' => 'tipo_agar', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(BacteriasInfoEvent::class);
        $forma = TipoAgarBacteria::latest('id')->first();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_tipo_agar_bacterias()
    {
        Event::fake();
        $forma = TipoAgarBacteria::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-bacterias/editar/' . $forma->id,
                ['tipo' => 'tipo_agar', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(BacteriasInfoEvent::class);
        $forma = $forma->fresh();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_tipo_agar_bacterias()
    {
        $this->withoutExceptionHandling();
        Event::fake();
        $forma = TipoAgarBacteria::first();
        $cantidad = TipoAgarBacteria::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-bacterias/eliminar/' . $forma->id,
                ['tipo' => 'tipo_agar']
            );
        $response->assertOk();
        Event::assertDispatched(BacteriasInfoEvent::class);
        $this->assertCount($cantidad - 1, TipoAgarBacteria::all());
    }

    //----------- color ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_color_bacterias()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-bacterias/agregar', ['tipo' => 'color']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_color_bacterias()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-bacterias/agregar',
                ['tipo' => 'color', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(BacteriasInfoEvent::class);
        $forma = ColorBacteria::latest('id')->first();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_color_bacterias()
    {
        Event::fake();
        $forma = ColorBacteria::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-bacterias/editar/' . $forma->id,
                ['tipo' => 'color', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(BacteriasInfoEvent::class);
        $forma = $forma->fresh();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_color_bacterias()
    {
        Event::fake();
        $forma = ColorBacteria::first();
        $cantidad = ColorBacteria::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-bacterias/eliminar/' . $forma->id,
                ['tipo' => 'color']
            );
        $response->assertOk();
        Event::assertDispatched(BacteriasInfoEvent::class);
        $this->assertCount($cantidad - 1, ColorBacteria::all());
    }
}
