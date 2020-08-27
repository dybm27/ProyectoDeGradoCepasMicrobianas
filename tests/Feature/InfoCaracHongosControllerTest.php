<?php

namespace Tests\Feature;

use App\TexturaHongo;
use App\ColorHongo;
use App\Events\HongosInfoEvent;
use App\Permiso;
use App\EsporaAsexualHongo;
use App\EsporaSexualHongo;
use App\ConidioforoHongo;
use App\TipoMetodoConservacionHongo;
use CaractMacroHongoSeeder;
use CaractMicroHongoSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Event;
use Tests\TestCase;
use TiposMetodosConservacionHLSeeder;

class InfoCaracHongosControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(CaractMacroHongoSeeder::class);
        $this->seed(CaractMicroHongoSeeder::class);
        $this->seed(TiposMetodosConservacionHLSeeder::class);
        $permiso1 = Permiso::where('nombre', 'agregar-otra')->first();
        $permiso2 = Permiso::where('nombre', 'editar-otra')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-otra')->first();
        $this->user->rol->permisos()->sync($permiso1->id, $permiso2->id, $permiso3->id);
    }

    /** @test */
    public function validacion_de_campo_tipo_agregar_info_hongos()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-hongos/agregar', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('tipo');
    }

    /** @test */
    public function validacion_de_campo_tipo_editar_info_hongos()
    {
        $response = $this->actingAs($this->user)
            ->putJson('/info-caract-hongos/editar/1', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('tipo');
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function validacion_de_campo_tipo_eliminar_info_hongos()
    {
        $response = $this->actingAs($this->user)
            ->deleteJson('/info-caract-hongos/eliminar/1', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('tipo');
    }

    //----------- textura ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_textura_hongos()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-hongos/agregar', ['tipo' => 'textura']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_textura_hongos()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-hongos/agregar',
                ['tipo' => 'textura', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(HongosInfoEvent::class);
        $tipo = TexturaHongo::latest('id')->first();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_textura_hongos()
    {
        Event::fake();
        $tipo = TexturaHongo::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-hongos/editar/' . $tipo->id,
                ['tipo' => 'textura', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(HongosInfoEvent::class);
        $tipo = $tipo->fresh();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_textura_hongos()
    {
        Event::fake();
        $tipo = TexturaHongo::first();
        $cantidad = TexturaHongo::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-hongos/eliminar/' . $tipo->id,
                ['tipo' => 'textura']
            );
        $response->assertOk();
        Event::assertDispatched(HongosInfoEvent::class);
        $this->assertCount($cantidad - 1, TexturaHongo::all());
    }

    //----------- conidioforo ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_conidioforo_hongos()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-hongos/agregar', ['tipo' => 'conidioforo']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_conidioforo_hongos()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-hongos/agregar',
                ['tipo' => 'conidioforo', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(HongosInfoEvent::class);
        $tipo = ConidioforoHongo::latest('id')->first();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_conidioforo_hongos()
    {
        Event::fake();
        $tipo = ConidioforoHongo::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-hongos/editar/' . $tipo->id,
                ['tipo' => 'conidioforo', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(HongosInfoEvent::class);
        $tipo = $tipo->fresh();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_conidioforo_hongos()
    {
        Event::fake();
        $tipo = ConidioforoHongo::first();
        $cantidad = ConidioforoHongo::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-hongos/eliminar/' . $tipo->id,
                ['tipo' => 'conidioforo']
            );
        $response->assertOk();
        Event::assertDispatched(HongosInfoEvent::class);
        $this->assertCount($cantidad - 1, ConidioforoHongo::all());
    }

    //----------- espora asexual ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_espora_asexual_hongos()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-hongos/agregar', ['tipo' => 'esporaA']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_espora_asexual_hongos()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-hongos/agregar',
                ['tipo' => 'esporaA', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(HongosInfoEvent::class);
        $tipo = EsporaAsexualHongo::latest('id')->first();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_espora_asexual_hongos()
    {
        Event::fake();
        $tipo = EsporaAsexualHongo::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-hongos/editar/' . $tipo->id,
                ['tipo' => 'esporaA', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(HongosInfoEvent::class);
        $tipo = $tipo->fresh();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_espora_asexual_hongos()
    {
        Event::fake();
        $tipo = EsporaAsexualHongo::first();
        $cantidad = EsporaAsexualHongo::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-hongos/eliminar/' . $tipo->id,
                ['tipo' => 'esporaA']
            );
        $response->assertOk();
        Event::assertDispatched(HongosInfoEvent::class);
        $this->assertCount($cantidad - 1, EsporaAsexualHongo::all());
    }

    //----------- espora sexual ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_espora_sexual_hongos()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-hongos/agregar', ['tipo' => 'esporaS']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_espora_sexual_hongos()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-hongos/agregar',
                ['tipo' => 'esporaS', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(HongosInfoEvent::class);
        $forma = EsporaSexualHongo::latest('id')->first();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_espora_sexual_hongos()
    {
        Event::fake();
        $forma = EsporaSexualHongo::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-hongos/editar/' . $forma->id,
                ['tipo' => 'esporaS', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(HongosInfoEvent::class);
        $forma = $forma->fresh();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_espora_sexual_hongos()
    {
        Event::fake();
        $forma = EsporaSexualHongo::first();
        $cantidad = EsporaSexualHongo::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-hongos/eliminar/' . $forma->id,
                ['tipo' => 'esporaS']
            );
        $response->assertOk();
        Event::assertDispatched(HongosInfoEvent::class);
        $this->assertCount($cantidad - 1, EsporaSexualHongo::all());
    }

    //----------- tipo metodo ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_tipo_metodo_hongos()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-hongos/agregar', ['tipo' => 'tipo_metodo']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_tipo_metodo_hongos()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-hongos/agregar',
                ['tipo' => 'tipo_metodo', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(HongosInfoEvent::class);
        $forma = TipoMetodoConservacionHongo::latest('id')->first();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_tipo_metodo_hongos()
    {
        Event::fake();
        $forma = TipoMetodoConservacionHongo::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-hongos/editar/' . $forma->id,
                ['tipo' => 'tipo_metodo', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(HongosInfoEvent::class);
        $forma = $forma->fresh();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_tipo_metodo_hongos()
    {
        Event::fake();
        $forma = TipoMetodoConservacionHongo::first();
        $cantidad = TipoMetodoConservacionHongo::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-hongos/eliminar/' . $forma->id,
                ['tipo' => 'tipo_metodo']
            );
        $response->assertOk();
        Event::assertDispatched(HongosInfoEvent::class);
        $this->assertCount($cantidad - 1, TipoMetodoConservacionHongo::all());
    }

    //----------- color ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_color_hongos()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-hongos/agregar', ['tipo' => 'color']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_color_hongos()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-hongos/agregar',
                ['tipo' => 'color', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(HongosInfoEvent::class);
        $forma = ColorHongo::latest('id')->first();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_color_hongos()
    {
        Event::fake();
        $forma = ColorHongo::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-hongos/editar/' . $forma->id,
                ['tipo' => 'color', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(HongosInfoEvent::class);
        $forma = $forma->fresh();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_color_hongos()
    {
        Event::fake();
        $forma = ColorHongo::first();
        $cantidad = ColorHongo::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-hongos/eliminar/' . $forma->id,
                ['tipo' => 'color']
            );
        $response->assertOk();
        Event::assertDispatched(HongosInfoEvent::class);
        $this->assertCount($cantidad - 1, ColorHongo::all());
    }
}
