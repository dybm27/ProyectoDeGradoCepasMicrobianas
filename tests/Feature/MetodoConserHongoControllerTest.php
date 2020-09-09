<?php

namespace Tests\Feature;

use App\Events\RefrescarCalendarioEvent;
use App\HongoFilamentoso;
use App\MetodoConserHongo;
use App\Permiso;
use App\Seguimiento;
use ClasesSeeder;
use EspeciesSeeder;
use FamiliasSeeder;
use GenerosSeeder;
use GruposMicrobianosSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Event;
use OrdensSeeder;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use PhylumsSeeder;
use Tests\TestCase;
use TiposMetodosConservacionHLSeeder;

class MetodoConserHongoControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(TiposMetodosConservacionHLSeeder::class);
        $this->seed(GruposMicrobianosSeeder::class);
        $this->seed(EspeciesSeeder::class);
        $this->seed(GenerosSeeder::class);
        $this->seed(FamiliasSeeder::class);
        $this->seed(PhylumsSeeder::class);
        $this->seed(ClasesSeeder::class);
        $this->seed(OrdensSeeder::class);
        $permiso = Permiso::where('nombre', 'caract-cepa')->first();
        $this->user->rol->permisos()->sync([$permiso->id]);
    }

    /** @test */
    public function validar_campos_metodo_conser_hongo1()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/hongo/metodo-conser', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('fecha');
        $response->assertJsonValidationErrors('tipo_metodo');
        $response->assertJsonValidationErrors('recuento_microgota');
        $response->assertJsonValidationErrors('imagen');
    }

    /** @test */
    public function validar_campos_metodo_conser_hongo2()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/hongo/metodo-conser', ['tipo_metodo' => 2]);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('fecha');
        $response->assertJsonValidationErrors('imagen');
        $response->assertJsonValidationErrors('medio_cultivo');
        $response->assertJsonValidationErrors('numero_replicas');
    }

    /** @test */
    public function store_metodo_conser_hongo()
    {
        Storage::fake('public');
        Event::fake();
        $hongo = factory(HongoFilamentoso::class)->create();
        $fecha = Date('Y-m-d H:i:s');
        $response = $this->actingAs($this->user)
            ->postJson(
                '/cepas/hongo/metodo-conser',
                [
                    'cepaId' => $hongo->cepa_id, 'fecha' => $fecha,
                    'recuento_microgota' => 'asds', 'tipo_metodo' => 1,
                    'numero_pases' => 12, 'numero_replicas' => 12, 'medio_cultivo' => 'asds',
                    'imagen' => $this->imagen, 'observaciones' => 'asds'
                ]
            );
        $response->assertStatus(201);
        Event::assertDispatched(RefrescarCalendarioEvent::class);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, MetodoConserHongo::all());
        $caract = MetodoConserHongo::first();
        Storage::assertExists($caract->imagen);
        $this->assertEquals($caract->fecha, $fecha);
        $this->assertEquals($caract->recuento_microgota, 'asds');
        $this->assertEquals($caract->medio_cultivo, 'asds');
        $this->assertEquals($caract->observaciones, 'asds');
        $this->assertEquals($caract->tipo_id, 1);
        $this->assertEquals($caract->numero_pases, 12);
        $this->assertEquals($caract->numero_replicas, 12);
    }

    /** @test */
    public function update_metodo_conser_hongo()
    {
        Storage::fake('public');
        Event::fake();
        $caract = factory(MetodoConserHongo::class)->create();
        $fecha = Date('Y-m-d H:i:s');
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/hongo/metodo-conser/' . $caract->id,
                [
                    'fecha' => $fecha, 'recuento_microgota' => 'asds', 'tipo_metodo' => 1,
                    'numero_pases' => 12, 'numero_replicas' => 12, 'medio_cultivo' => 'asds',
                    'imagen' => $this->imagen, 'observaciones' => 'asds'
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen);
        Event::assertDispatched(RefrescarCalendarioEvent::class);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, MetodoConserHongo::all());
        $caract = $caract->fresh();
        Storage::assertExists($caract->imagen);
        $this->assertEquals($caract->fecha, $fecha);
        $this->assertEquals($caract->recuento_microgota, 'asds');
        $this->assertEquals($caract->medio_cultivo, 'asds');
        $this->assertEquals($caract->observaciones, 'asds');
        $this->assertEquals($caract->tipo_id, 1);
        $this->assertEquals($caract->numero_pases, 12);
        $this->assertEquals($caract->numero_replicas, 12);
    }

    /** @test */
    public function delete_metodo_conser_hongo()
    {
        Storage::fake('public');
        Event::fake();
        $caract = factory(MetodoConserHongo::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/cepas/hongo/metodo-conser/' . $caract->id);
        $response->assertStatus(200);
        Event::assertDispatched(RefrescarCalendarioEvent::class);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(0, MetodoConserHongo::all());
        Storage::assertMissing($caract->imagen);
    }
}
