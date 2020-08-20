<?php

namespace Tests\Feature;

use App\CaracMicroHongo;
use App\HongoFilamentoso;
use App\Permiso;
use App\Seguimiento;
use CaractMicroHongoSeeder;
use ClasesSeeder;
use EspeciesSeeder;
use FamiliasSeeder;
use GenerosSeeder;
use GruposMicrobianosSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Storage;
use OrdensSeeder;
use PhylumsSeeder;
use Tests\TestCase;

class CaractMicroHongoControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(CaractMicroHongoSeeder::class);
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
    public function validar_campos_caract_micro_hongo_1()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/hongo/caract-micro', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('fialides');
        $response->assertJsonValidationErrors('vesicula');
        $response->assertJsonValidationErrors('espora_asexual');
        $response->assertJsonValidationErrors('conidioforo');
        $response->assertJsonValidationErrors('espora_sexual');
    }

    /** @test */
    public function validar_campos_caract_micro_hongo_2()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/hongo/caract-micro', ['fialides' => 'Presencia', 'espora_asexual' => 2]);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('fialides_forma');
        $response->assertJsonValidationErrors('vesicula');
        $response->assertJsonValidationErrors('esporas_asexuales_conidios_tamano');
        $response->assertJsonValidationErrors('esporas_asexuales_conidios_color');
        $response->assertJsonValidationErrors('esporas_asexuales_conidios_forma');
        $response->assertJsonValidationErrors('conidioforo');
        $response->assertJsonValidationErrors('espora_sexual');
    }

    /** @test */
    public function store_caract_micro_hongo()
    {
        Storage::fake('public');
        $hongo = factory(HongoFilamentoso::class)->create();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/cepas/hongo/caract-micro',
                [
                    'cepaId' => $hongo->cepa_id, 'conidioforo' => 1, 'fialides' => 'asdasd',
                    'fialides_forma' => 'asdasd', 'fialides_otra_caracteristica' => 'asdasd',
                    'vesicula' => 'asdasd', 'espora_asexual' => 1, 'esporas_asexuales_conidios_tamano' => 'asdasd',
                    'esporas_asexuales_conidios_color' => 'asdasd', 'esporas_asexuales_conidios_forma' => 'asdasd',
                    'esporas_asexuales_conidios_otras' => 'asdasd', 'espora_sexual' => 1,
                    'otras_estructuras' => 'asdasd', 'imagen1' => $this->imagen,
                    'imagen2' => $this->imagen, 'imagen3' => $this->imagen
                ]
            );
        $response->assertStatus(201);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracMicroHongo::all());
        $caract = CaracMicroHongo::first();
        $this->assertEquals($caract->fialides, 'asdasd');
        $this->assertEquals($caract->espora_asexual_id, 1);
        $this->assertEquals($caract->conidioforo_id, 1);
        $this->assertEquals($caract->fialides_otra_caracteristica, 'asdasd');
        $this->assertEquals($caract->espora_sexual_id, 1);
        $this->assertEquals($caract->fialides_forma, 'asdasd');
        $this->assertEquals($caract->vesicula, 'asdasd');
        $this->assertEquals($caract->esporas_asexuales_conidios_tamano, 'asdasd');
        $this->assertEquals($caract->esporas_asexuales_conidios_color, 'asdasd');
        $this->assertEquals($caract->esporas_asexuales_conidios_forma, 'asdasd');
        Storage::assertExists($caract->imagen1);
        Storage::assertExists($caract->imagen2);
        Storage::assertExists($caract->imagen3);
    }

    /** @test */
    public function update_caract_micro_hongo()
    {
        $caract = factory(CaracMicroHongo::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/hongo/caract-micro/' . $caract->id,
                [
                    'conidioforo' => 2, 'fialides' => 'asdasd', 'fialides_forma' => 'asdasd',
                    'fialides_otra_caracteristica' => 'asdasd',  'vesicula' => 'asdasd',
                    'espora_asexual' => 2, 'esporas_asexuales_conidios_tamano' => 'asdasd',
                    'esporas_asexuales_conidios_color' => 'asdasd', 'esporas_asexuales_conidios_forma' => 'asdasd',
                    'esporas_asexuales_conidios_otras' => 'asdasd', 'espora_sexual' => 2,
                    'otras_estructuras' => 'asdasd',
                ]
            );
        $response->assertStatus(200);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracMicroHongo::all());
        $this->assertEquals($caract->fialides, 'asdasd');
        $this->assertEquals($caract->espora_asexual_id, 2);
        $this->assertEquals($caract->conidioforo_id, 2);
        $this->assertEquals($caract->fialides_otra_caracteristica, 'asdasd');
        $this->assertEquals($caract->espora_sexual_id, 2);
        $this->assertEquals($caract->fialides_forma, 'asdasd');
        $this->assertEquals($caract->vesicula, 'asdasd');
        $this->assertEquals($caract->esporas_asexuales_conidios_tamano, 'asdasd');
        $this->assertEquals($caract->esporas_asexuales_conidios_color, 'asdasd');
        $this->assertEquals($caract->esporas_asexuales_conidios_forma, 'asdasd');
    }

    /** @test */
    public function delete_caract_micro_hongo()
    {
        Storage::fake('public');
        $caract = factory(CaracMicroHongo::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/cepas/hongo/caract-micro/' . $caract->id);
        $response->assertStatus(200);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(0, CaracMicroHongo::all());
        Storage::assertMissing($caract->imagen1);
        Storage::assertMissing($caract->imagen2);
        Storage::assertMissing($caract->imagen3);
    }

    /** @test */
    public function agregar_cambiar_eliminar_imagen_caract_micro_hongo()
    {
        $this->withoutMiddleware();
        Storage::fake('public');
        $caract = factory(CaracMicroHongo::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/hongo/caract-micro/agregar-imagen/' . $caract->id,
                [
                    'imagen' =>  $this->imagen, 'numero' => 1
                ]
            );
        $response->assertStatus(200);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracMicroHongo::all());
        Storage::assertExists($caract->imagen1);

        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/hongo/caract-micro/cambiar-imagen/' . $caract->id,
                [
                    'imagen' =>  $this->imagen, 'numero' => 1
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen1);
        $caract = $caract->fresh();
        $this->assertCount(2, Seguimiento::all());
        $this->assertCount(1, CaracMicroHongo::all());
        Storage::assertExists($caract->imagen1);

        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/hongo/caract-micro/eliminar-imagen/' . $caract->id,
                [
                    'numero' => 1
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen1);
        $caract = $caract->fresh();
        $this->assertCount(3, Seguimiento::all());
        $this->assertCount(1, CaracMicroHongo::all());
        $this->assertEquals(null, $caract->imagen1);
    }
}
