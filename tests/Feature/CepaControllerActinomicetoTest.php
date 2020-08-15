<?php

namespace Tests\Feature;

use App\Actinomiceto;
use App\Cepa;
use App\Events\CepasEvent;
use App\Seguimiento;
use ClasesSeeder;
use EspeciesSeeder;
use GenerosSeeder;
use GruposMicrobianosSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Event;
use OrdensSeeder;
use PhylumsSeeder;
use ReinosSeeder;
use Tests\TestCase;

class CepaControllerActinomicetoTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(GruposMicrobianosSeeder::class);
        $this->seed(EspeciesSeeder::class);
        $this->seed(GenerosSeeder::class);
        $this->seed(ReinosSeeder::class);
        $this->seed(PhylumsSeeder::class);
        $this->seed(ClasesSeeder::class);
        $this->seed(OrdensSeeder::class);
    }

    // --------------------- Actinomicetos ----------------------
    /** @test */
    public function verificar_validacion_de_campos_actinomicetos()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/agregar', ['grupo_microbiano' => 4]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors('codigo');
        $response->assertJsonValidationErrors('estado');
        $response->assertJsonValidationErrors('origen');
        $response->assertJsonValidationErrors('genero');
        $response->assertJsonValidationErrors('especie');
        $response->assertJsonValidationErrors('clase');
        $response->assertJsonValidationErrors('orden');
        $response->assertJsonValidationErrors('reino');
        $response->assertJsonValidationErrors('phylum');
    }
    /** @test */
    public function agregar_cepa_actinomiceto()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/agregar', [
                'grupo_microbiano' => 4, 'codigo' => 'qwer3', 'estado' => 'dead',
                'origen' => 'desconocido', 'genero' => 1,  'especie' => 1,  'publicar' => 1,
                'clase' => 1,  'orden' => 1, 'reino' => 1,  'phylum' => 1,
            ]);
        $response->assertStatus(201);
        Event::assertDispatched(CepasEvent::class);

        $this->assertCount(1, Cepa::all());
        $this->assertCount(1, Actinomiceto::all());
        $this->assertCount(1, Seguimiento::all());
        $cepa = Cepa::first();
        $actinomiceto = Actinomiceto::first();
        $this->assertEquals($cepa->grupo_microbiano_id, 4);
        $this->assertEquals($cepa->genero_id, 1);
        $this->assertEquals($cepa->especie_id, 1);
        $this->assertEquals($actinomiceto->clase_id, 1);
        $this->assertEquals($actinomiceto->orden_id, 1);
        $this->assertEquals($actinomiceto->reino_id, 1);
        $this->assertEquals($actinomiceto->phylum_id, 1);
        $this->assertEquals($cepa->codigo, 'qwer3');
        $this->assertEquals($cepa->estado, 'dead');
        $this->assertEquals($cepa->origen, 'desconocido');
        $this->assertEquals($cepa->publicar, 1);
    }
    /** @test */
    public function editar_cepa_actinomiceto()
    {
        Event::fake();
        $actinomiceto = factory(Actinomiceto::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson('/cepas/editar/' . $actinomiceto->cepa_id, [
                'grupo_microbiano' => 4, 'codigo' => 'qwer3', 'estado' => 'dead',
                'origen' => 'desconocido', 'genero' => $actinomiceto->cepa->genero_id,
                'especie' => $actinomiceto->cepa->especie_id, 'publicar' => 1,
                'clase' => 2,  'orden' => 2, 'reino' => 2,  'phylum' => 2,
            ]);
        $response->assertStatus(200);
        Event::assertDispatched(CepasEvent::class);

        $this->assertCount(1, Cepa::all());
        $this->assertCount(1, Actinomiceto::all());
        $this->assertCount(1, Seguimiento::all());

        $actinomiceto = $actinomiceto->fresh();
        $this->assertEquals($actinomiceto->cepa->grupo_microbiano_id, 4);
        $this->assertEquals($actinomiceto->clase_id, 2);
        $this->assertEquals($actinomiceto->orden_id, 2);
        $this->assertEquals($actinomiceto->reino_id, 2);
        $this->assertEquals($actinomiceto->phylum_id, 2);
        $this->assertEquals($actinomiceto->cepa->codigo, 'qwer3');
        $this->assertEquals($actinomiceto->cepa->estado, 'dead');
        $this->assertEquals($actinomiceto->cepa->origen, 'desconocido');
        $this->assertEquals($actinomiceto->cepa->publicar, 1);
    }
    /** @test */
    public function eliminar_cepa_actinomiceto()
    {
        Event::fake();
        $actinomiceto = factory(Actinomiceto::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/cepas/eliminar/' . $actinomiceto->cepa_id);
        $response->assertStatus(200);
        Event::assertDispatched(CepasEvent::class);

        $this->assertCount(0, Cepa::all());
        $this->assertCount(0, Actinomiceto::all());
        $this->assertCount(1, Seguimiento::all());
    }
}
