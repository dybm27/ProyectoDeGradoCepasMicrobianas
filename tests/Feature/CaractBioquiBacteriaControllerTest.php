<?php

namespace Tests\Feature;

use App\Bacteria;
use App\CaracBioquiBacteria;
use App\Permiso;
use App\Seguimiento;
use EspeciesSeeder;
use GenerosSeeder;
use GruposMicrobianosSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class CaractBioquiBacteriaControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(GruposMicrobianosSeeder::class);
        $this->seed(EspeciesSeeder::class);
        $this->seed(GenerosSeeder::class);
        $permiso = Permiso::where('nombre', 'caract-cepa')->first();
        $this->user->rol->permisos()->sync([$permiso->id]);
    }

    /** @test */
    public function validar_campos_caract_bioqui_bacteria()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/bacteria/caract-bioqui', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('oxidasa');
        $response->assertJsonValidationErrors('catalasa');
        $response->assertJsonValidationErrors('citrato');
        $response->assertJsonValidationErrors('tsi');
        $response->assertJsonValidationErrors('lia');
        $response->assertJsonValidationErrors('vp');
        $response->assertJsonValidationErrors('sim');
        $response->assertJsonValidationErrors('nitrato');
        $response->assertJsonValidationErrors('rm');
        $response->assertJsonValidationErrors('caldo_urea');
        $response->assertJsonValidationErrors('of');
        $response->assertJsonValidationErrors('glucosa');
        $response->assertJsonValidationErrors('lactosa');
        $response->assertJsonValidationErrors('lecitinasa');
        $response->assertJsonValidationErrors('manitol');
        $response->assertJsonValidationErrors('lipasa');
        $response->assertJsonValidationErrors('xilosa');
        $response->assertJsonValidationErrors('hidro_caseina');
        $response->assertJsonValidationErrors('arabinosa');
        $response->assertJsonValidationErrors('hidro_gelatina');
        $response->assertJsonValidationErrors('sacarosa');
        $response->assertJsonValidationErrors('hidro_urea');
        $response->assertJsonValidationErrors('almidon');
        $response->assertJsonValidationErrors('creci_nacl');
        $response->assertJsonValidationErrors('creci_dif_temp');
    }

    /** @test */
    public function store_caract_bioqui_bacteria()
    {
        Storage::fake('public');
        $bacteria = factory(Bacteria::class)->create();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/cepas/bacteria/caract-bioqui',
                [
                    'cepaId' => $bacteria->cepa_id, 'oxidasa' => 'asdasd', 'catalasa' => 'asdasd',
                    'citrato' => 'asdasd', 'tsi' => 'asdasd', 'lia' => 'asdasd', 'vp' => 'asdasd',
                    'sim' => 'asdasd', 'nitrato' => 'asdasd', 'rm' => 'asdasd', 'caldo_urea' => 'asdasd',
                    'of' => 'asdasd', 'glucosa' => 'asdasd', 'lactosa' => 'asdasd', 'lecitinasa' => 'asdasd',
                    'manitol' => 'asdasd', 'lipasa' => 'asdasd', 'xilosa' => 'asdasd', 'hidro_caseina' => 'asdasd',
                    'arabinosa' => 'asdasd', 'hidro_gelatina' => 'asdasd', 'sacarosa' => 'asdasd',
                    'hidro_urea' => 'asdasd', 'almidon' => 'asdasd', 'creci_nacl' => 'asdasd',
                    'creci_dif_temp' => 'asdasd', 'otras_caract' => 'asdasd', 'imagen1' => $this->imagen,
                    'imagen2' => $this->imagen, 'imagen3' => $this->imagen, 'otros_azucares' => 'asdasd',
                    'otras_enzimas' => 'asdasd'
                ]
            );
        $response->assertStatus(201);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracBioquiBacteria::all());
        $caract = CaracBioquiBacteria::first();
        $this->assertEquals($caract->oxidasa, 'Asdasd');
        $this->assertEquals($caract->catalasa, 'Asdasd');
        $this->assertEquals($caract->citrato, 'Asdasd');
        $this->assertEquals($caract->tsi, 'Asdasd');
        $this->assertEquals($caract->lia, 'Asdasd');
        $this->assertEquals($caract->vp, 'Asdasd');
        $this->assertEquals($caract->sim, 'Asdasd');
        $this->assertEquals($caract->nitrato, 'Asdasd');
        $this->assertEquals($caract->rm, 'Asdasd');
        $this->assertEquals($caract->caldo_urea, 'Asdasd');
        $this->assertEquals($caract->of, 'Asdasd');
        $this->assertEquals($caract->glucosa, 'Asdasd');
        $this->assertEquals($caract->lactosa, 'Asdasd');
        $this->assertEquals($caract->lecitinasa, 'Asdasd');
        $this->assertEquals($caract->manitol, 'Asdasd');
        $this->assertEquals($caract->lipasa, 'Asdasd');
        $this->assertEquals($caract->xilosa, 'Asdasd');
        $this->assertEquals($caract->hidro_caseina, 'Asdasd');
        $this->assertEquals($caract->arabinosa, 'Asdasd');
        $this->assertEquals($caract->hidro_gelatina, 'Asdasd');
        $this->assertEquals($caract->sacarosa, 'Asdasd');
        $this->assertEquals($caract->hidro_urea, 'Asdasd');
        $this->assertEquals($caract->almidon, 'Asdasd');
        $this->assertEquals($caract->creci_nacl, 'Asdasd');
        $this->assertEquals($caract->creci_dif_temp, 'Asdasd');
        $this->assertEquals($caract->otras_caract, 'asdasd');
        $this->assertEquals($caract->otros_azucares, 'asdasd');
        $this->assertEquals($caract->otras_enzimas, 'asdasd');
        Storage::assertExists($caract->imagen1);
        Storage::assertExists($caract->imagen2);
        Storage::assertExists($caract->imagen3);
    }

    /** @test */
    public function update_caract_bioqui_bacteria()
    {
        $caract = factory(CaracBioquiBacteria::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/bacteria/caract-bioqui/' . $caract->id,
                [
                    'oxidasa' => 'asdasd', 'catalasa' => 'asdasd', 'citrato' => 'asdasd', 'tsi' => 'asdasd',
                    'lia' => 'asdasd', 'vp' => 'asdasd', 'sim' => 'asdasd', 'nitrato' => 'asdasd',
                    'rm' => 'asdasd', 'caldo_urea' => 'asdasd', 'of' => 'asdasd', 'glucosa' => 'asdasd',
                    'lactosa' => 'asdasd', 'lecitinasa' => 'asdasd', 'manitol' => 'asdasd', 'lipasa' => 'asdasd',
                    'xilosa' => 'asdasd', 'hidro_caseina' => 'asdasd', 'arabinosa' => 'asdasd',
                    'hidro_gelatina' => 'asdasd', 'sacarosa' => 'asdasd', 'hidro_urea' => 'asdasd',
                    'almidon' => 'asdasd', 'creci_nacl' => 'asdasd', 'creci_dif_temp' => 'asdasd',
                    'otras_caract' => 'asdasd', 'otros_azucares' => 'asdasd', 'otras_enzimas' => 'asdasd'
                ]
            );
        $response->assertStatus(200);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracBioquiBacteria::all());
        $this->assertEquals($caract->oxidasa, 'Asdasd');
        $this->assertEquals($caract->catalasa, 'Asdasd');
        $this->assertEquals($caract->citrato, 'Asdasd');
        $this->assertEquals($caract->tsi, 'Asdasd');
        $this->assertEquals($caract->lia, 'Asdasd');
        $this->assertEquals($caract->vp, 'Asdasd');
        $this->assertEquals($caract->sim, 'Asdasd');
        $this->assertEquals($caract->nitrato, 'Asdasd');
        $this->assertEquals($caract->rm, 'Asdasd');
        $this->assertEquals($caract->caldo_urea, 'Asdasd');
        $this->assertEquals($caract->of, 'Asdasd');
        $this->assertEquals($caract->glucosa, 'Asdasd');
        $this->assertEquals($caract->lactosa, 'Asdasd');
        $this->assertEquals($caract->lecitinasa, 'Asdasd');
        $this->assertEquals($caract->manitol, 'Asdasd');
        $this->assertEquals($caract->lipasa, 'Asdasd');
        $this->assertEquals($caract->xilosa, 'Asdasd');
        $this->assertEquals($caract->hidro_caseina, 'Asdasd');
        $this->assertEquals($caract->arabinosa, 'Asdasd');
        $this->assertEquals($caract->hidro_gelatina, 'Asdasd');
        $this->assertEquals($caract->sacarosa, 'Asdasd');
        $this->assertEquals($caract->hidro_urea, 'Asdasd');
        $this->assertEquals($caract->almidon, 'Asdasd');
        $this->assertEquals($caract->creci_nacl, 'Asdasd');
        $this->assertEquals($caract->creci_dif_temp, 'Asdasd');
        $this->assertEquals($caract->otras_caract, 'asdasd');
        $this->assertEquals($caract->otros_azucares, 'asdasd');
        $this->assertEquals($caract->otras_enzimas, 'asdasd');
    }

    /** @test */
    public function delete_caract_bioqui_bacteria()
    {
        Storage::fake('public');
        $caract = factory(CaracBioquiBacteria::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/cepas/bacteria/caract-bioqui/' . $caract->id);
        $response->assertStatus(200);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(0, CaracBioquiBacteria::all());
        Storage::assertMissing($caract->imagen1);
        Storage::assertMissing($caract->imagen2);
        Storage::assertMissing($caract->imagen3);
    }

    /** @test */
    public function agregar_cambiar_eliminar_imagen_caract_bioqui_bacteria()
    {
        $this->withoutMiddleware();
        Storage::fake('public');
        $caract = factory(CaracBioquiBacteria::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/bacteria/caract-bioqui/agregar-imagen/' . $caract->id,
                [
                    'imagen' =>  $this->imagen, 'numero' => 1
                ]
            );
        $response->assertStatus(200);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracBioquiBacteria::all());
        Storage::assertExists($caract->imagen1);

        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/bacteria/caract-bioqui/cambiar-imagen/' . $caract->id,
                [
                    'imagen' =>  $this->imagen, 'numero' => 1
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen1);
        $caract = $caract->fresh();
        $this->assertCount(2, Seguimiento::all());
        $this->assertCount(1, CaracBioquiBacteria::all());
        Storage::assertExists($caract->imagen1);

        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/bacteria/caract-bioqui/eliminar-imagen/' . $caract->id,
                [
                    'numero' => 1
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen1);
        $caract = $caract->fresh();
        $this->assertCount(3, Seguimiento::all());
        $this->assertCount(1, CaracBioquiBacteria::all());
        $this->assertEquals(null, $caract->imagen1);
    }
}
