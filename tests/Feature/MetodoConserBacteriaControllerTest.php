<?php

namespace Tests\Feature;

use App\Bacteria;
use App\Events\RefrescarCalendarioEvent;
use App\MetodoConserBacteria;
use App\Permiso;
use App\Seguimiento;
use EspeciesSeeder;
use GenerosSeeder;
use GruposMicrobianosSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Event;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use Tests\TestCase;
use TiposMetodosConservacionBacteriasSeeder;

class MetodoConserBacteriaControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(TiposMetodosConservacionBacteriasSeeder::class);
        $this->seed(GruposMicrobianosSeeder::class);
        $this->seed(EspeciesSeeder::class);
        $this->seed(GenerosSeeder::class);
        $permiso = Permiso::where('nombre', 'caract-cepa')->first();
        $this->user->rol->permisos()->sync([$permiso->id]);
    }

    /** @test */
    public function validar_campos_metodo_conser_bacteria()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/bacteria/metodo-conser', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('fecha');
        $response->assertJsonValidationErrors('recuento_microgota');
        $response->assertJsonValidationErrors('tipo_metodo');
        $response->assertJsonValidationErrors('tipo_agar');
        $response->assertJsonValidationErrors('numero_replicas');
        $response->assertJsonValidationErrors('imagen');
    }

    /** @test */
    public function store_metodo_conser_bacteria()
    {
        Storage::fake('public');
        Event::fake();
        $bacteria = factory(Bacteria::class)->create();
        $fecha = Date('Y-m-d H:i:s');
        $response = $this->actingAs($this->user)
            ->postJson(
                '/cepas/bacteria/metodo-conser',
                [
                    'cepaId' => $bacteria->cepa_id, 'fecha' => $fecha,
                    'recuento_microgota' => 'asds', 'tipo_metodo' => 1,
                    'tipo_agar' => 1, 'numero_replicas' => 12,
                    'imagen' => $this->imagen
                ]
            );
        $response->assertStatus(201);
        Event::assertDispatched(RefrescarCalendarioEvent::class);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, MetodoConserBacteria::all());
        $caract = MetodoConserBacteria::first();
        Storage::assertExists($caract->imagen);
        $this->assertEquals($caract->fecha, $fecha);
        $this->assertEquals($caract->recuento_microgota, 'asds');
        $this->assertEquals($caract->tipo_id, 1);
        $this->assertEquals($caract->tipo_agar_id, 1);
        $this->assertEquals($caract->numero_replicas, 12);
    }

    /** @test */
    public function update_metodo_conser_bacteria()
    {
        Storage::fake('public');
        Event::fake();
        $caract = factory(MetodoConserBacteria::class)->create();
        $fecha = Date('Y-m-d H:i:s');
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/bacteria/metodo-conser/' . $caract->id,
                [
                    'fecha' => $fecha, 'recuento_microgota' => 'asds', 'tipo_metodo' => 1,
                    'tipo_agar' => 1, 'numero_replicas' => 12, 'imagen' => $this->imagen
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen);
        Event::assertDispatched(RefrescarCalendarioEvent::class);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, MetodoConserBacteria::all());
        $caract = $caract->fresh();
        Storage::assertExists($caract->imagen);
        $this->assertEquals($caract->fecha, $fecha);
        $this->assertEquals($caract->recuento_microgota, 'asds');
        $this->assertEquals($caract->tipo_id, 1);
        $this->assertEquals($caract->tipo_agar_id, 1);
        $this->assertEquals($caract->numero_replicas, 12);
    }

    /** @test */
    public function delete_metodo_conser_bacteria()
    {
        Storage::fake('public');
        Event::fake();
        $caract = factory(MetodoConserBacteria::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/cepas/bacteria/metodo-conser/' . $caract->id);
        $response->assertStatus(200);
        Event::assertDispatched(RefrescarCalendarioEvent::class);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(0, MetodoConserBacteria::all());
        Storage::assertMissing($caract->imagen);
    }
}
