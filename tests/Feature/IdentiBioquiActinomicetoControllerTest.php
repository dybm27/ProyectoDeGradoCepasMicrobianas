<?php

namespace Tests\Feature;

use App\Actinomiceto;
use App\IdentBioquiActinomiceto;
use App\Permiso;
use App\Seguimiento;
use ClasesSeeder;
use EspeciesSeeder;
use GenerosSeeder;
use GruposMicrobianosSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Storage;
use OrdensSeeder;
use PhylumsSeeder;
use ReinosSeeder;
use Tests\TestCase;

class IdentiBioquiActinomicetoControllerTest extends TestCase
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
        $permiso = Permiso::where('nombre', 'caract-cepa')->first();
        $this->user->rol->permisos()->sync([$permiso->id]);
    }

    /** @test */
    public function validar_campos_identi_bioqui_actinomiceto()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/actinomiceto/identi-bioqui', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('oxidasa');
        $response->assertJsonValidationErrors('fer_lactosa');
        $response->assertJsonValidationErrors('catalasa');
        $response->assertJsonValidationErrors('fer_inositol');
        $response->assertJsonValidationErrors('citrato');
        $response->assertJsonValidationErrors('fer_sacarosa');
        $response->assertJsonValidationErrors('caseina');
        $response->assertJsonValidationErrors('nitrato');
        $response->assertJsonValidationErrors('sensi_antibioticos');
        $response->assertJsonValidationErrors('hidro_gelatina');
        $response->assertJsonValidationErrors('fer_manitol');
        $response->assertJsonValidationErrors('hidro_urea');
    }

    /** @test */
    public function store_identi_bioqui_actinomiceto()
    {
        Storage::fake('public');
        $actinomiceto = factory(Actinomiceto::class)->create();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/cepas/actinomiceto/identi-bioqui',
                [
                    'cepaId' => $actinomiceto->cepa_id,  'oxidasa' => 'asdasd', 'fer_lactosa' => 'asdasd',
                    'catalasa' => 'asdasd', 'fer_inositol' => 'asdasd', 'citrato' => 'asdasd',
                    'fer_sacarosa' => 'asdasd', 'caseina' => 'asdasd', 'nitrato' => 'asdasd',
                    'sensi_antibioticos' => 'asdasd', 'hidro_gelatina' => 'asdasd',
                    'fer_manitol' => 'asdasd', 'hidro_urea' => 'asdasd', 'otras_caract' => 'asdasd',
                    'imagen1' => $this->imagen, 'imagen2' => $this->imagen, 'imagen3' => $this->imagen,
                ]
            );
        $response->assertStatus(201);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, IdentBioquiActinomiceto::all());
        $caract = IdentBioquiActinomiceto::first();
        $this->assertEquals($caract->oxidasa, 'asdasd');
        $this->assertEquals($caract->fer_lactosa, 'asdasd');
        $this->assertEquals($caract->catalasa, 'asdasd');
        $this->assertEquals($caract->fer_inositol, 'asdasd');
        $this->assertEquals($caract->citrato, 'asdasd');
        $this->assertEquals($caract->fer_sacarosa, 'asdasd');
        $this->assertEquals($caract->caseina, 'asdasd');
        $this->assertEquals($caract->nitrato, 'asdasd');
        $this->assertEquals($caract->sensi_antibioticos, 'asdasd');
        $this->assertEquals($caract->hidro_gelatina, 'asdasd');
        $this->assertEquals($caract->fer_manitol, 'asdasd');
        $this->assertEquals($caract->hidro_urea, 'asdasd');
        $this->assertEquals($caract->otras_caract, 'asdasd');
        Storage::assertExists($caract->imagen1);
        Storage::assertExists($caract->imagen2);
        Storage::assertExists($caract->imagen3);
    }

    /** @test */
    public function update_identi_bioqui_actinomiceto()
    {
        $caract = factory(IdentBioquiActinomiceto::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/actinomiceto/identi-bioqui/' . $caract->id,
                [
                    'oxidasa' => 'asdasd', 'fer_lactosa' => 'asdasd',
                    'catalasa' => 'asdasd', 'fer_inositol' => 'asdasd', 'citrato' => 'asdasd',
                    'fer_sacarosa' => 'asdasd', 'caseina' => 'asdasd', 'nitrato' => 'asdasd',
                    'sensi_antibioticos' => 'asdasd', 'hidro_gelatina' => 'asdasd',
                    'fer_manitol' => 'asdasd', 'hidro_urea' => 'asdasd', 'otras_caract' => 'asdasd'
                ]
            );
        $response->assertStatus(200);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, IdentBioquiActinomiceto::all());

        $this->assertEquals($caract->oxidasa, 'asdasd');
        $this->assertEquals($caract->fer_lactosa, 'asdasd');
        $this->assertEquals($caract->catalasa, 'asdasd');
        $this->assertEquals($caract->fer_inositol, 'asdasd');
        $this->assertEquals($caract->citrato, 'asdasd');
        $this->assertEquals($caract->fer_sacarosa, 'asdasd');
        $this->assertEquals($caract->caseina, 'asdasd');
        $this->assertEquals($caract->nitrato, 'asdasd');
        $this->assertEquals($caract->sensi_antibioticos, 'asdasd');
        $this->assertEquals($caract->hidro_gelatina, 'asdasd');
        $this->assertEquals($caract->fer_manitol, 'asdasd');
        $this->assertEquals($caract->hidro_urea, 'asdasd');
        $this->assertEquals($caract->otras_caract, 'asdasd');
    }

    /** @test */
    public function delete_identi_bioqui_actinomiceto()
    {
        Storage::fake('public');
        $caract = factory(IdentBioquiActinomiceto::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/cepas/actinomiceto/identi-bioqui/' . $caract->id);
        $response->assertStatus(200);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(0, IdentBioquiActinomiceto::all());
        Storage::assertMissing($caract->imagen1);
        Storage::assertMissing($caract->imagen2);
        Storage::assertMissing($caract->imagen3);
    }

    /** @test */
    public function agregar_cambiar_eliminar_imagen_identi_bioqui_actinomiceto()
    {
        $this->withoutMiddleware();
        Storage::fake('public');
        $caract = factory(IdentBioquiActinomiceto::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/actinomiceto/identi-bioqui/agregar-imagen/' . $caract->id,
                [
                    'imagen' =>  $this->imagen, 'numero' => 1
                ]
            );
        $response->assertStatus(200);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, IdentBioquiActinomiceto::all());
        Storage::assertExists($caract->imagen1);

        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/actinomiceto/identi-bioqui/cambiar-imagen/' . $caract->id,
                [
                    'imagen' =>  $this->imagen, 'numero' => 1
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen1);
        $caract = $caract->fresh();
        $this->assertCount(2, Seguimiento::all());
        $this->assertCount(1, IdentBioquiActinomiceto::all());
        Storage::assertExists($caract->imagen1);

        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/actinomiceto/identi-bioqui/eliminar-imagen/' . $caract->id,
                [
                    'numero' => 1
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen1);
        $caract = $caract->fresh();
        $this->assertCount(3, Seguimiento::all());
        $this->assertCount(1, IdentBioquiActinomiceto::all());
        $this->assertEquals(null, $caract->imagen1);
    }
}
