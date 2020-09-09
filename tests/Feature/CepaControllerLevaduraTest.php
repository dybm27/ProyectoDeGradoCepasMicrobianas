<?php

namespace Tests\Feature;

use App\CaracBioquiLevadura;
use App\CaracMacroLevadura;
use App\CaracMicroLevadura;
use App\Cepa;
use App\Events\CepasEvent;
use App\IdentiMolecuLevadura;
use App\Levadura;
use App\MetodoConserLevadura;
use App\Permiso;
use App\Seguimiento;
use CaractMacroLevaduraSeeder;
use ClasesSeeder;
use DivisionesSeeder;
use EspeciesSeeder;
use FamiliasSeeder;
use GenerosSeeder;
use GruposMicrobianosSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Event;
use OrdensSeeder;
use Tests\TestCase;
use TiposMetodosConservacionHLSeeder;

class CepaControllerLevaduraTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(GruposMicrobianosSeeder::class);
        $this->seed(EspeciesSeeder::class);
        $this->seed(GenerosSeeder::class);
        $this->seed(FamiliasSeeder::class);
        $this->seed(ClasesSeeder::class);
        $this->seed(OrdensSeeder::class);
        $this->seed(DivisionesSeeder::class);

        $permiso1 = Permiso::where('nombre', 'agregar-cepa')->first();
        $permiso2 = Permiso::where('nombre', 'editar-cepa')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-cepa')->first();
        $this->user->rol->permisos()->sync([$permiso1->id,$permiso2->id,$permiso3->id]);
    }

    // --------------------- Levaduras ----------------------
    /** @test */
    public function verificar_validacion_de_campos_levaduras()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/agregar', ['grupo_microbiano' => 3]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors('codigo');
        $response->assertJsonValidationErrors('estado');
        $response->assertJsonValidationErrors('origen');
        $response->assertJsonValidationErrors('genero');
        $response->assertJsonValidationErrors('especie');
        $response->assertJsonValidationErrors('clase');
        $response->assertJsonValidationErrors('orden');
        $response->assertJsonValidationErrors('familia');
        $response->assertJsonValidationErrors('division');
    }
    /** @test */
    public function agregar_cepa_levadura()
    {
        Event::fake([CepaObserve::class,CepasEvent::class]);
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/agregar', [
                'grupo_microbiano' => 3, 'codigo' => 'qwer', 'estado' => 'dead',
                'origen' => 'desconocido', 'genero' => 1,  'especie' => 1,  'publicar' => 1,
                'clase' => 1,  'orden' => 1, 'familia' => 1,  'division' => 1,
            ]);
        $response->assertStatus(201);
        Event::assertDispatched(CepasEvent::class);

        $this->assertCount(1, Cepa::all());
        $this->assertCount(1, Levadura::all());
        $this->assertCount(1, Seguimiento::all());
        $cepa = Cepa::first();
        $levadura = Levadura::first();
        $this->assertEquals($cepa->grupo_microbiano_id, 3);
        $this->assertEquals($cepa->genero_id, 1);
        $this->assertEquals($cepa->especie_id, 1);
        $this->assertEquals($levadura->clase_id, 1);
        $this->assertEquals($levadura->orden_id, 1);
        $this->assertEquals($levadura->familia_id, 1);
        $this->assertEquals($levadura->division_id, 1);
        $this->assertEquals($cepa->codigo, 'qwer');
        $this->assertEquals($cepa->estado, 'dead');
        $this->assertEquals($cepa->origen, 'desconocido');
        $this->assertEquals($cepa->publicar, 1);
    }
    /** @test */
    public function editar_cepa_levadura()
    {
        Event::fake();
        $levadura = factory(Levadura::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson('/cepas/editar/' . $levadura->cepa_id, [
                'grupo_microbiano' => 3, 'codigo' => 'qwer', 'estado' => 'dead',
                'origen' => 'desconocido', 'genero' => $levadura->cepa->genero_id,
                'especie' => $levadura->cepa->especie_id,  'publicar' => 1,
                'clase' => 2,  'orden' => 2, 'familia' => 2,  'division' => 2,
            ]);
        $response->assertStatus(200);
        Event::assertDispatched(CepasEvent::class);

        $this->assertCount(1, Cepa::all());
        $this->assertCount(1, Levadura::all());
        $this->assertCount(1, Seguimiento::all());

        $levadura = $levadura->fresh();
        $this->assertEquals($levadura->cepa->grupo_microbiano_id, 3);
        $this->assertEquals($levadura->clase_id, 2);
        $this->assertEquals($levadura->orden_id, 2);
        $this->assertEquals($levadura->familia_id, 2);
        $this->assertEquals($levadura->division_id, 2);
        $this->assertEquals($levadura->cepa->codigo, 'qwer');
        $this->assertEquals($levadura->cepa->estado, 'dead');
        $this->assertEquals($levadura->cepa->origen, 'desconocido');
        $this->assertEquals($levadura->cepa->publicar, 1);
    }
    /** @test */
    public function eliminar_cepa_levadura()
    {
        Event::fake();
        $levadura = factory(Levadura::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/cepas/eliminar/' . $levadura->cepa_id);
        $response->assertStatus(200);
        Event::assertDispatched(CepasEvent::class);

        $this->assertCount(0, Cepa::all());
        $this->assertCount(0, Levadura::all());
        $this->assertCount(1, Seguimiento::all());
    }

    /** @test */
    public function imprimir_cepa_levadura()
    {
        $this->seed(CaractMacroLevaduraSeeder::class);
        $this->seed(TiposMetodosConservacionHLSeeder::class);
        $levadura = factory(Levadura::class)->create();
        factory(CaracMacroLevadura::class)->create(['levadura_id' => 1]);
        factory(CaracMicroLevadura::class)->create(['levadura_id' => 1]);
        factory(CaracBioquiLevadura::class)->create(['levadura_id' => 1]);
        factory(IdentiMolecuLevadura::class)->create(['levadura_id' => 1]);
        factory(MetodoConserLevadura::class)->create(['levadura_id' => 1]);
        $response = $this->actingAs($this->user)
            ->get('/cepas/imprimir/' . $levadura->cepa_id);
        $response->assertStatus(200);
    }
}
