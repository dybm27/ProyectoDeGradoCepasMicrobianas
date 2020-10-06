<?php

namespace Tests\Feature;

use App\TexturaLevadura;
use App\ColorLevadura;
use App\Events\LevadurasInfoEvent;
use App\Permiso;
use App\TipoMetodoConservacionLevadura;
use CaractMacroLevaduraSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Event;
use Tests\TestCase;
use TiposMetodosConservacionHLSeeder;

class InfoCaracLevaduraControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(CaractMacroLevaduraSeeder::class);
        $this->seed(TiposMetodosConservacionHLSeeder::class);
        $permiso1 = Permiso::where('nombre', 'agregar-otra')->first();
        $permiso2 = Permiso::where('nombre', 'editar-otra')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-otra')->first();
        $this->user->rol->permisos()->sync($permiso1->id, $permiso2->id, $permiso3->id);
    }

    /** @test */
    public function validacion_de_campo_tipo_agregar_info_levaduras()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-levaduras/agregar', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('tipo');
    }

    /** @test */
    public function validacion_de_campo_tipo_editar_info_levaduras()
    {
        $response = $this->actingAs($this->user)
            ->putJson('/info-caract-levaduras/editar/1', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('tipo');
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function validacion_de_campo_tipo_eliminar_info_levaduras()
    {
        $response = $this->actingAs($this->user)
            ->deleteJson('/info-caract-levaduras/eliminar/1', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('tipo');
    }

    //----------- textura ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_textura_levaduras()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-levaduras/agregar', ['tipo' => 'textura']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_textura_levaduras()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-levaduras/agregar',
                ['tipo' => 'textura', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(LevadurasInfoEvent::class);
        $tipo = TexturaLevadura::latest('id')->first();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_textura_levaduras()
    {
        Event::fake();
        $tipo = TexturaLevadura::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-levaduras/editar/' . $tipo->id,
                ['tipo' => 'textura', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(LevadurasInfoEvent::class);
        $tipo = $tipo->fresh();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_textura_levaduras()
    {
        Event::fake();
        $tipo = TexturaLevadura::first();
        $cantidad = TexturaLevadura::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-levaduras/eliminar/' . $tipo->id,
                ['tipo' => 'textura']
            );
        $response->assertOk();
        Event::assertDispatched(LevadurasInfoEvent::class);
        $this->assertCount($cantidad - 1, TexturaLevadura::all());
    }

    //----------- tipo metodo ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_tipo_metodo_levaduras()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-levaduras/agregar', ['tipo' => 'tipo_metodo']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_tipo_metodo_levaduras()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-levaduras/agregar',
                ['tipo' => 'tipo_metodo', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(LevadurasInfoEvent::class);
        $forma = TipoMetodoConservacionLevadura::latest('id')->first();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_tipo_metodo_levaduras()
    {
        Event::fake();
        $forma = TipoMetodoConservacionLevadura::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-levaduras/editar/' . $forma->id,
                ['tipo' => 'tipo_metodo', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(LevadurasInfoEvent::class);
        $forma = $forma->fresh();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_tipo_metodo_levaduras()
    {
        Event::fake();
        $forma = TipoMetodoConservacionLevadura::first();
        $cantidad = TipoMetodoConservacionLevadura::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-levaduras/eliminar/' . $forma->id,
                ['tipo' => 'tipo_metodo']
            );
        $response->assertOk();
        Event::assertDispatched(LevadurasInfoEvent::class);
        $this->assertCount($cantidad - 1, TipoMetodoConservacionLevadura::all());
    }

    //----------- color ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_color_levaduras()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-levaduras/agregar', ['tipo' => 'color']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_color_levaduras()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-levaduras/agregar',
                ['tipo' => 'color', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(LevadurasInfoEvent::class);
        $forma = ColorLevadura::latest('id')->first();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_color_levaduras()
    {
        Event::fake();
        $forma = ColorLevadura::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-levaduras/editar/' . $forma->id,
                ['tipo' => 'color', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(LevadurasInfoEvent::class);
        $forma = $forma->fresh();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_color_levaduras()
    {
        Event::fake();
        $forma = ColorLevadura::first();
        $cantidad = ColorLevadura::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-levaduras/eliminar/' . $forma->id,
                ['tipo' => 'color']
            );
        $response->assertOk();
        Event::assertDispatched(LevadurasInfoEvent::class);
        $this->assertCount($cantidad - 1, ColorLevadura::all());
    }
}
