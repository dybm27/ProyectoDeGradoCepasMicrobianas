<?php

namespace Tests\Feature;

use App\Especie;
use App\ColorBacteria;
use App\Events\CepasInfoEvent;
use App\Genero;
use App\Phylum;
use App\Division;
use App\Permiso;
use App\Orden;
use App\Clase;
use App\Familia;
use App\Reino;
use ClasesSeeder;
use DivisionesSeeder;
use EspeciesSeeder;
use FamiliasSeeder;
use GenerosSeeder;
use GruposMicrobianosSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Event;
use OrdensSeeder;
use PhylumsSeeder;
use ReinosSeeder;
use Tests\TestCase;

class InfoCepaControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();
        $this->seed(GruposMicrobianosSeeder::class);
        $this->seed(GenerosSeeder::class);
        $this->seed(EspeciesSeeder::class);
        $this->seed(FamiliasSeeder::class);
        $this->seed(OrdensSeeder::class);
        $this->seed(ReinosSeeder::class);
        $this->seed(PhylumsSeeder::class);
        $this->seed(DivisionesSeeder::class);
        $this->seed(ClasesSeeder::class);
        $permiso1 = Permiso::where('nombre', 'agregar-otra')->first();
        $permiso2 = Permiso::where('nombre', 'editar-otra')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-otra')->first();
        $this->user->rol->permisos()->sync($permiso1->id, $permiso2->id, $permiso3->id);
    }

    /** @test */
    public function validacion_de_campo_tipo_agregar_info_cepas()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-cepas/agregar', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('tipo');
    }

    /** @test */
    public function validacion_de_campo_tipo_editar_info_cepas()
    {
        $response = $this->actingAs($this->user)
            ->putJson('/info-cepas/editar/1', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('tipo');
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function validacion_de_campo_tipo_eliminar_info_cepas()
    {
        $response = $this->actingAs($this->user)
            ->deleteJson('/info-cepas/eliminar/1', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('tipo');
    }

    //----------- genero ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_genero_cepas()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-cepas/agregar', ['tipo' => 'genero']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
        $response->assertJsonValidationErrors('grupo_microbiano');
    }

    /** @test */
    public function agregar_genero_cepas()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-cepas/agregar',
                ['tipo' => 'genero', 'nombre' => 'qweqwe', 'grupo_microbiano' => 1]
            );
        $response->assertStatus(201);
        Event::assertDispatched(CepasInfoEvent::class);
        $tipo = Genero::latest('id')->first();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_genero_cepas()
    {
        Event::fake();
        $tipo = Genero::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-cepas/editar/' . $tipo->id,
                ['tipo' => 'genero', 'nombre' => 'qweqwe', 'grupo_microbiano' => 1]
            );
        $response->assertOk();
        Event::assertDispatched(CepasInfoEvent::class);
        $tipo = $tipo->fresh();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_genero_cepas()
    {
        Event::fake();
        $tipo = factory(Genero::class)->create();
        $cantidad = Genero::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-cepas/eliminar/' . $tipo->id,
                ['tipo' => 'genero']
            );
        $response->assertOk();
        Event::assertDispatched(CepasInfoEvent::class);
        $this->assertCount($cantidad - 1, Genero::all());
    }

    //----------- especie ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_especie_cepas()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-cepas/agregar', ['tipo' => 'especie']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
        $response->assertJsonValidationErrors('genero');
    }

    /** @test */
    public function agregar_especie_cepas()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-cepas/agregar',
                ['tipo' => 'especie', 'nombre' => 'qweqwe', 'genero' => 1]
            );
        $response->assertStatus(201);
        Event::assertDispatched(CepasInfoEvent::class);
        $tipo = Especie::latest('id')->first();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_especie_cepas()
    {
        Event::fake();
        $tipo = Especie::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-cepas/editar/' . $tipo->id,
                ['tipo' => 'especie', 'nombre' => 'qweqwe', 'genero' => 1]
            );
        $response->assertOk();
        Event::assertDispatched(CepasInfoEvent::class);
        $tipo = $tipo->fresh();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_especie_cepas()
    {
        Event::fake();
        $tipo = factory(Especie::class)->create();
        $cantidad = Especie::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-cepas/eliminar/' . $tipo->id,
                ['tipo' => 'especie']
            );
        $response->assertOk();
        Event::assertDispatched(CepasInfoEvent::class);
        $this->assertCount($cantidad - 1, Especie::all());
    }

    //----------- familia ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_familia_cepas()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-cepas/agregar', ['tipo' => 'familia']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_familia_cepas()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-cepas/agregar',
                ['tipo' => 'familia', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(CepasInfoEvent::class);
        $tipo = Familia::latest('id')->first();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_familia_cepas()
    {
        Event::fake();
        $tipo = Familia::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-cepas/editar/' . $tipo->id,
                ['tipo' => 'familia', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(CepasInfoEvent::class);
        $tipo = $tipo->fresh();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_familia_cepas()
    {
        Event::fake();
        $tipo = Familia::first();
        $cantidad = Familia::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-cepas/eliminar/' . $tipo->id,
                ['tipo' => 'familia']
            );
        $response->assertOk();
        Event::assertDispatched(CepasInfoEvent::class);
        $this->assertCount($cantidad - 1, Familia::all());
    }

    //----------- orden ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_orden_cepas()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-cepas/agregar', ['tipo' => 'orden']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_orden_cepas()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-cepas/agregar',
                ['tipo' => 'orden', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(CepasInfoEvent::class);
        $tipo = Orden::latest('id')->first();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_orden_cepas()
    {
        Event::fake();
        $tipo = Orden::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-cepas/editar/' . $tipo->id,
                ['tipo' => 'orden', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(CepasInfoEvent::class);
        $tipo = $tipo->fresh();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_orden_cepas()
    {
        Event::fake();
        $tipo = Orden::first();
        $cantidad = Orden::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-cepas/eliminar/' . $tipo->id,
                ['tipo' => 'orden']
            );
        $response->assertOk();
        Event::assertDispatched(CepasInfoEvent::class);
        $this->assertCount($cantidad - 1, Orden::all());
    }

    //----------- clase ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_clase_cepas()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-cepas/agregar', ['tipo' => 'clase']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_clase_cepas()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-cepas/agregar',
                ['tipo' => 'clase', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(CepasInfoEvent::class);
        $forma = Clase::latest('id')->first();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_clase_cepas()
    {
        Event::fake();
        $forma = Clase::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-cepas/editar/' . $forma->id,
                ['tipo' => 'clase', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(CepasInfoEvent::class);
        $forma = $forma->fresh();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_clase_cepas()
    {
        Event::fake();
        $forma = Clase::first();
        $cantidad = Clase::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-cepas/eliminar/' . $forma->id,
                ['tipo' => 'clase']
            );
        $response->assertOk();
        Event::assertDispatched(CepasInfoEvent::class);
        $this->assertCount($cantidad - 1, Clase::all());
    }

    //----------- phylum ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_phylum_cepas()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-cepas/agregar', ['tipo' => 'phylum']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_phylum_cepas()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-cepas/agregar',
                ['tipo' => 'phylum', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(CepasInfoEvent::class);
        $forma = Phylum::latest('id')->first();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_phylum_cepas()
    {
        Event::fake();
        $forma = Phylum::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-cepas/editar/' . $forma->id,
                ['tipo' => 'phylum', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(CepasInfoEvent::class);
        $forma = $forma->fresh();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_phylum_cepas()
    {
        Event::fake();
        $forma = Phylum::first();
        $cantidad = Phylum::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-cepas/eliminar/' . $forma->id,
                ['tipo' => 'phylum']
            );
        $response->assertOk();
        Event::assertDispatched(CepasInfoEvent::class);
        $this->assertCount($cantidad - 1, Phylum::all());
    }

    //----------- reino ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_reino_cepas()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-cepas/agregar', ['tipo' => 'reino']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_reino_cepas()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-cepas/agregar',
                ['tipo' => 'reino', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(CepasInfoEvent::class);
        $forma = Reino::latest('id')->first();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_reino_cepas()
    {
        Event::fake();
        $forma = Reino::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-cepas/editar/' . $forma->id,
                ['tipo' => 'reino', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(CepasInfoEvent::class);
        $forma = $forma->fresh();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_reino_cepas()
    {
        Event::fake();
        $forma = Reino::first();
        $cantidad = Reino::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-cepas/eliminar/' . $forma->id,
                ['tipo' => 'reino']
            );
        $response->assertOk();
        Event::assertDispatched(CepasInfoEvent::class);
        $this->assertCount($cantidad - 1, Reino::all());
    }

    //----------- division ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_division_cepas()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-cepas/agregar', ['tipo' => 'division']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_division_cepas()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-cepas/agregar',
                ['tipo' => 'division', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(CepasInfoEvent::class);
        $forma = Division::latest('id')->first();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_division_cepas()
    {
        Event::fake();
        $forma = Division::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-cepas/editar/' . $forma->id,
                ['tipo' => 'division', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(CepasInfoEvent::class);
        $forma = $forma->fresh();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_division_cepas()
    {
        Event::fake();
        $forma = Division::first();
        $cantidad = Division::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-cepas/eliminar/' . $forma->id,
                ['tipo' => 'division']
            );
        $response->assertOk();
        Event::assertDispatched(CepasInfoEvent::class);
        $this->assertCount($cantidad - 1, Division::all());
    }
}
