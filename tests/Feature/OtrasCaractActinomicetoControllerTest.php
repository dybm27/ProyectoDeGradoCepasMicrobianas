<?php

namespace Tests\Feature;

use App\Actinomiceto;
use App\OtrasCaracActinomiceto;
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

class OtrasCaractActinomicetoControllerTest extends TestCase
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
    public function validar_campos_otras_caract_actinomiceto()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/actinomiceto/otras-caract', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('fijacion_nitrogeno');
        $response->assertJsonValidationErrors('produccion_aia');
        $response->assertJsonValidationErrors('giberelinas');
        $response->assertJsonValidationErrors('solubili_fosforo');
        $response->assertJsonValidationErrors('produccion_sideroforos');
        $response->assertJsonValidationErrors('antagonismos');
        $response->assertJsonValidationErrors('activi_enzimaticas');
        $response->assertJsonValidationErrors('produccion_pha');
        $response->assertJsonValidationErrors('alta_produc_antibioticos');
    }

    /** @test */
    public function store_otras_caract_actinomiceto()
    {
        Storage::fake('public');
        $actinomiceto = factory(Actinomiceto::class)->create();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/cepas/actinomiceto/otras-caract',
                [
                    'cepaId' => $actinomiceto->cepa_id, 'fijacion_nitrogeno' => 'asdasd', 'produccion_aia' => 'asdasd',
                    'giberelinas' => 'asdasd', 'solubili_fosforo' => 'asdasd', 'produccion_sideroforos' => 'asdasd',
                    'antagonismos' => 'asdasd', 'activi_enzimaticas' => 'asdasd', 'alta_produc_antibioticos' => 'asdasd',
                    'produccion_pha' => 'asdasd', 'otras_caract' => 'asdasd', 'imagen1' => $this->imagen,
                    'imagen2' => $this->imagen, 'imagen3' => $this->imagen
                ]
            );
        $response->assertStatus(201);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, OtrasCaracActinomiceto::all());
        $caract = OtrasCaracActinomiceto::first();
        $this->assertEquals($caract->fijacion_nitrogeno, 'asdasd');
        $this->assertEquals($caract->produccion_aia, 'asdasd');
        $this->assertEquals($caract->giberelinas, 'asdasd');
        $this->assertEquals($caract->solubili_fosforo, 'asdasd');
        $this->assertEquals($caract->produccion_sideroforos, 'asdasd');
        $this->assertEquals($caract->antagonismos, 'asdasd');
        $this->assertEquals($caract->activi_enzimaticas, 'asdasd');
        $this->assertEquals($caract->produccion_pha, 'asdasd');
        $this->assertEquals($caract->alta_produc_antibioticos, 'asdasd');
        $this->assertEquals($caract->otras_caract, 'asdasd');
        Storage::assertExists($caract->imagen1);
        Storage::assertExists($caract->imagen2);
        Storage::assertExists($caract->imagen3);
    }

    /** @test */
    public function update_otras_caract_actinomiceto()
    {
        $caract = factory(OtrasCaracActinomiceto::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/actinomiceto/otras-caract/' . $caract->id,
                [
                    'fijacion_nitrogeno' => 'asdasd', 'produccion_aia' => 'asdasd',
                    'giberelinas' => 'asdasd', 'solubili_fosforo' => 'asdasd', 'produccion_sideroforos' => 'asdasd',
                    'antagonismos' => 'asdasd', 'activi_enzimaticas' => 'asdasd', 'alta_produc_antibioticos' => 'asdasd',
                    'produccion_pha' => 'asdasd', 'otras_caract' => 'asdasd'
                ]
            );
        $response->assertStatus(200);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, OtrasCaracActinomiceto::all());
        $this->assertEquals($caract->fijacion_nitrogeno, 'asdasd');
        $this->assertEquals($caract->produccion_aia, 'asdasd');
        $this->assertEquals($caract->giberelinas, 'asdasd');
        $this->assertEquals($caract->solubili_fosforo, 'asdasd');
        $this->assertEquals($caract->produccion_sideroforos, 'asdasd');
        $this->assertEquals($caract->antagonismos, 'asdasd');
        $this->assertEquals($caract->activi_enzimaticas, 'asdasd');
        $this->assertEquals($caract->produccion_pha, 'asdasd');
        $this->assertEquals($caract->alta_produc_antibioticos, 'asdasd');
        $this->assertEquals($caract->otras_caract, 'asdasd');
    }

    /** @test */
    public function delete_otras_caract_actinomiceto()
    {
        Storage::fake('public');
        $caract = factory(OtrasCaracActinomiceto::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/cepas/actinomiceto/otras-caract/' . $caract->id);
        $response->assertStatus(200);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(0, OtrasCaracActinomiceto::all());
        Storage::assertMissing($caract->imagen1);
        Storage::assertMissing($caract->imagen2);
        Storage::assertMissing($caract->imagen3);
    }

    /** @test */
    public function agregar_cambiar_eliminar_imagen_otras_caract_actinomiceto()
    {
        $this->withoutMiddleware();
        Storage::fake('public');
        $caract = factory(OtrasCaracActinomiceto::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/actinomiceto/otras-caract/agregar-imagen/' . $caract->id,
                [
                    'imagen' =>  $this->imagen, 'numero' => 1
                ]
            );
        $response->assertStatus(200);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, OtrasCaracActinomiceto::all());
        Storage::assertExists($caract->imagen1);

        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/actinomiceto/otras-caract/cambiar-imagen/' . $caract->id,
                [
                    'imagen' =>  $this->imagen, 'numero' => 1
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen1);
        $caract = $caract->fresh();
        $this->assertCount(2, Seguimiento::all());
        $this->assertCount(1, OtrasCaracActinomiceto::all());
        Storage::assertExists($caract->imagen1);

        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/actinomiceto/otras-caract/eliminar-imagen/' . $caract->id,
                [
                    'numero' => 1
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen1);
        $caract = $caract->fresh();
        $this->assertCount(3, Seguimiento::all());
        $this->assertCount(1, OtrasCaracActinomiceto::all());
        $this->assertEquals(null, $caract->imagen1);
    }
}
