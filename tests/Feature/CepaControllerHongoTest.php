<?php

namespace Tests\Feature;

use App\CaracBioquiHongo;
use App\CaracMacroHongo;
use App\CaracMicroHongo;
use App\Cepa;
use App\Events\CepasEvent;
use App\HongoFilamentoso;
use App\IdentiMolecuHongo;
use App\MetodoConserHongo;
use App\Seguimiento;
use CaractMacroHongoSeeder;
use CaractMicroHongoSeeder;
use ClasesSeeder;
use EspeciesSeeder;
use FamiliasSeeder;
use GenerosSeeder;
use GruposMicrobianosSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Event;
use OrdensSeeder;
use PhylumsSeeder;
use Tests\TestCase;
use TiposMetodosConservacionHLSeeder;

class CepaControllerHongoTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(GruposMicrobianosSeeder::class);
        $this->seed(EspeciesSeeder::class);
        $this->seed(GenerosSeeder::class);
        $this->seed(FamiliasSeeder::class);
        $this->seed(PhylumsSeeder::class);
        $this->seed(ClasesSeeder::class);
        $this->seed(OrdensSeeder::class);
    }

    // --------------------- Hongos ----------------------
    /** @test */
    public function verificar_validacion_de_campos_hongos()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/agregar', ['grupo_microbiano' => 2]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors('codigo');
        $response->assertJsonValidationErrors('estado');
        $response->assertJsonValidationErrors('origen');
        $response->assertJsonValidationErrors('genero');
        $response->assertJsonValidationErrors('especie');
        $response->assertJsonValidationErrors('clase');
        $response->assertJsonValidationErrors('orden');
        $response->assertJsonValidationErrors('familia');
        $response->assertJsonValidationErrors('phylum');
    }
    /** @test */
    public function agregar_cepa_hongo()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/agregar', [
                'grupo_microbiano' => 2, 'codigo' => 'qwer', 'estado' => 'dead',
                'origen' => 'desconocido', 'genero' => 1,  'especie' => 1,  'publicar' => 1,
                'clase' => 1,  'orden' => 1, 'familia' => 1,  'phylum' => 1,
            ]);
        $response->assertStatus(201);
        Event::assertDispatched(CepasEvent::class);

        $this->assertCount(1, Cepa::all());
        $this->assertCount(1, HongoFilamentoso::all());
        $this->assertCount(1, Seguimiento::all());
        $cepa = Cepa::first();
        $this->assertEquals($cepa->grupo_microbiano_id, 2);
        $this->assertEquals($cepa->genero_id, 1);
        $this->assertEquals($cepa->especie_id, 1);
        $this->assertEquals($cepa->hongo->clase_id, 1);
        $this->assertEquals($cepa->hongo->orden_id, 1);
        $this->assertEquals($cepa->hongo->familia_id, 1);
        $this->assertEquals($cepa->hongo->phylum_id, 1);
        $this->assertEquals($cepa->codigo, 'qwer');
        $this->assertEquals($cepa->estado, 'dead');
        $this->assertEquals($cepa->origen, 'desconocido');
        $this->assertEquals($cepa->publicar, 1);
    }
    /** @test */
    public function editar_cepa_hongo()
    {
        Event::fake();
        $hongo = factory(HongoFilamentoso::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson('/cepas/editar/' . $hongo->cepa_id, [
                'grupo_microbiano' => 2, 'codigo' => 'qwer', 'estado' => 'dead',
                'origen' => 'desconocido', 'genero' => $hongo->cepa->genero_id,
                'especie' => $hongo->cepa->especie_id,  'publicar' => 1,
                'clase' => 2,  'orden' => 2, 'familia' => 2,  'phylum' => 2,
            ]);
        $response->assertStatus(200);
        Event::assertDispatched(CepasEvent::class);

        $this->assertCount(1, Cepa::all());
        $this->assertCount(1, HongoFilamentoso::all());
        $this->assertCount(1, Seguimiento::all());
        $hongo = $hongo->fresh();
        $this->assertEquals($hongo->cepa->grupo_microbiano_id, 2);
        $this->assertEquals($hongo->clase_id, 2);
        $this->assertEquals($hongo->orden_id, 2);
        $this->assertEquals($hongo->familia_id, 2);
        $this->assertEquals($hongo->phylum_id, 2);
        $this->assertEquals($hongo->cepa->codigo, 'qwer');
        $this->assertEquals($hongo->cepa->estado, 'dead');
        $this->assertEquals($hongo->cepa->origen, 'desconocido');
        $this->assertEquals($hongo->cepa->publicar, 1);
    }
    /** @test */
    public function eliminar_cepa_hongo()
    {
        Event::fake();
        $hongo = factory(HongoFilamentoso::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/cepas/eliminar/' . $hongo->cepa_id);
        $response->assertStatus(200);
        Event::assertDispatched(CepasEvent::class);

        $this->assertCount(0, Cepa::all());
        $this->assertCount(0, HongoFilamentoso::all());
        $this->assertCount(1, Seguimiento::all());
    }

    /** @test */
    public function imprimir_cepa_hongo()
    {
        $this->seed(CaractMacroHongoSeeder::class);
        $this->seed(CaractMicroHongoSeeder::class);
        $this->seed(TiposMetodosConservacionHLSeeder::class);
        $hongo = factory(HongoFilamentoso::class)->create();
        factory(CaracMacroHongo::class)->create(['hongo_filamentoso_id' => 1]);
        factory(CaracMicroHongo::class)->create(['hongo_filamentoso_id' => 1]);
        factory(CaracBioquiHongo::class)->create(['hongo_filamentoso_id' => 1]);
        factory(IdentiMolecuHongo::class)->create(['hongo_filamentoso_id' => 1]);
        factory(MetodoConserHongo::class)->create(['hongo_filamentoso_id' => 1]);
        $response = $this->actingAs($this->user)
            ->get('/cepas/imprimir/' . $hongo->cepa_id);
        $response->assertStatus(200);
    }
}
