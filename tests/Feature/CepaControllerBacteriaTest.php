<?php

namespace Tests\Feature;

use App\Bacteria;
use App\Cepa;
use App\Events\CepasEvent;
use App\Seguimiento;
use EspeciesSeeder;
use GenerosSeeder;
use GruposMicrobianosSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Event;
use Tests\TestCase;

class CepaControllerBacteriaTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(GruposMicrobianosSeeder::class);
        $this->seed(EspeciesSeeder::class);
        $this->seed(GenerosSeeder::class);
    }
    
    // --------------------- Bacterias ----------------------
    /** @test */
    public function verificar_validacion_de_campos_bacterias()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/agregar', ['grupo_microbiano' => 1]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors('codigo');
        $response->assertJsonValidationErrors('estado');
        $response->assertJsonValidationErrors('origen');
        $response->assertJsonValidationErrors('genero');
        $response->assertJsonValidationErrors('especie');
    }
    /** @test */
    public function agregar_cepa_bacteria()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/agregar', [
                'grupo_microbiano' => 1, 'codigo' => 'qwer', 'estado' => 'dead',
                'origen' => 'desconocido', 'genero' => 1,  'especie' => 1,  'publicar' => 1
            ]);
        $response->assertStatus(201);
        Event::assertDispatched(CepasEvent::class);

        $this->assertCount(1, Cepa::all());
        $this->assertCount(1, Bacteria::all());
        $this->assertCount(1, Seguimiento::all());
        $cepa = Cepa::first();
        $this->assertEquals($cepa->grupo_microbiano_id, 1);
        $this->assertEquals($cepa->genero_id, 1);
        $this->assertEquals($cepa->especie_id, 1);
        $this->assertEquals($cepa->codigo, 'qwer');
        $this->assertEquals($cepa->estado, 'dead');
        $this->assertEquals($cepa->origen, 'desconocido');
        $this->assertEquals($cepa->publicar, 1);
    }
    /** @test */
    public function editar_cepa_bacteria()
    {
        Event::fake();
        $bacteria = factory(Bacteria::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson('/cepas/editar/' . $bacteria->cepa_id, [
                'grupo_microbiano' => 1, 'codigo' => 'qwer', 'estado' => 'dead',
                'origen' => 'desconocido', 'genero' => $bacteria->cepa->genero_id,
                'especie' =>  $bacteria->cepa->especie_id, 'publicar' => 1
            ]);
        $response->assertStatus(200);
        Event::assertDispatched(CepasEvent::class);

        $this->assertCount(1, Cepa::all());
        $this->assertCount(1, Bacteria::all());
        $this->assertCount(1, Seguimiento::all());

        $bacteria = $bacteria->fresh();
        $this->assertEquals($bacteria->cepa->grupo_microbiano_id, 1);
        $this->assertEquals($bacteria->cepa->codigo, 'qwer');
        $this->assertEquals($bacteria->cepa->estado, 'dead');
        $this->assertEquals($bacteria->cepa->origen, 'desconocido');
        $this->assertEquals($bacteria->cepa->publicar, 1);
    }
    /** @test */
    public function validar_eliminar_cepa_bacteria()
    {
        Event::fake();
        $bacteria = factory(Bacteria::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/cepas/eliminar/' . $bacteria->cepa_id);
        $response->assertStatus(200);
        Event::assertDispatched(CepasEvent::class);

        $this->assertCount(0, Cepa::all());
        $this->assertCount(0, Bacteria::all());
        $this->assertCount(1, Seguimiento::all());
    }
    /** @test */
    public function eliminar_cepa_bacteria()
    {
        Event::fake();
        $bacteria = factory(Bacteria::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/cepas/eliminar/' . $bacteria->cepa_id);
        $response->assertStatus(200);
        Event::assertDispatched(CepasEvent::class);

        $this->assertCount(0, Cepa::all());
        $this->assertCount(0, Bacteria::all());
        $this->assertCount(1, Seguimiento::all());
    }
}
