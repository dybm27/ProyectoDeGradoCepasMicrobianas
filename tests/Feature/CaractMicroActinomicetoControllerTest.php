<?php

namespace Tests\Feature;

use App\Actinomiceto;
use App\CaracMicroActinomiceto;
use App\Permiso;
use App\Seguimiento;
use CaractMicroActinomicetoSeeder;
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

class CaractMicroActinomicetoControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(CaractMicroActinomicetoSeeder::class);
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
    public function validar_campos_caract_micro_actinomiceto()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/actinomiceto/caract-micro', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('tincion');
        $response->assertJsonValidationErrors('forma');
        $response->assertJsonValidationErrors('micelio');
        $response->assertJsonValidationErrors('conidioforo');
        $response->assertJsonValidationErrors('forma_estructura_reproduccion');
    }

    /** @test */
    public function store_caract_micro_actinomiceto()
    {
        Storage::fake('public');
        $actinomiceto = factory(Actinomiceto::class)->create();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/cepas/actinomiceto/caract-micro',
                [
                    'cepaId' => $actinomiceto->cepa_id, 'tincion' => 1, 'forma' => 1,
                    'micelio' => 1, 'conidioforo' => 1, 'forma_estructura_reproduccion' => 'asdasd',
                    'otras_caract' => 'asdasd', 'imagen1' => $this->imagen, 'imagen2' => $this->imagen,
                    'imagen3' => $this->imagen
                ]
            );
        $response->assertStatus(201);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracMicroActinomiceto::all());
        $caract = CaracMicroActinomiceto::first();
        $this->assertEquals($caract->tinciongram_id, 1);
        $this->assertEquals($caract->forma_id, 1);
        $this->assertEquals($caract->micelio_id, 1);
        $this->assertEquals($caract->conidioforo_id, 1);
        $this->assertEquals($caract->forma_estructura_reproduccion, 'asdasd');
        $this->assertEquals($caract->otras_caract, 'asdasd');
        Storage::assertExists($caract->imagen1);
        Storage::assertExists($caract->imagen2);
        Storage::assertExists($caract->imagen3);
    }

    /** @test */
    public function update_caract_micro_actinomiceto()
    {
        $caract = factory(CaracMicroActinomiceto::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/actinomiceto/caract-micro/' . $caract->id,
                [
                    'tincion' => 2, 'forma' => 2, 'micelio' => 2, 'conidioforo' => 2,
                    'forma_estructura_reproduccion' => 'asdasd', 'otras_caract' => 'asdasd'
                ]
            );
        $response->assertStatus(200);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracMicroActinomiceto::all());
        $this->assertEquals($caract->tinciongram_id, 2);
        $this->assertEquals($caract->forma_id, 2);
        $this->assertEquals($caract->micelio_id, 2);
        $this->assertEquals($caract->conidioforo_id, 2);
        $this->assertEquals($caract->forma_estructura_reproduccion, 'asdasd');
        $this->assertEquals($caract->otras_caract, 'asdasd');
    }

    /** @test */
    public function delete_caract_micro_actinomiceto()
    {
        Storage::fake('public');
        $caract = factory(CaracMicroActinomiceto::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/cepas/actinomiceto/caract-micro/' . $caract->id);
        $response->assertStatus(200);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(0, CaracMicroActinomiceto::all());
        Storage::assertMissing($caract->imagen1);
        Storage::assertMissing($caract->imagen2);
        Storage::assertMissing($caract->imagen3);
    }

    /** @test */
    public function agregar_cambiar_eliminar_imagen_caract_micro_actinomiceto()
    {
        $this->withoutMiddleware();
        Storage::fake('public');
        $caract = factory(CaracMicroActinomiceto::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/actinomiceto/caract-micro/agregar-imagen/' . $caract->id,
                [
                    'imagen' =>  $this->imagen, 'numero' => 1
                ]
            );
        $response->assertStatus(200);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracMicroActinomiceto::all());
        Storage::assertExists($caract->imagen1);

        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/actinomiceto/caract-micro/cambiar-imagen/' . $caract->id,
                [
                    'imagen' =>  $this->imagen, 'numero' => 1
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen1);
        $caract = $caract->fresh();
        $this->assertCount(2, Seguimiento::all());
        $this->assertCount(1, CaracMicroActinomiceto::all());
        Storage::assertExists($caract->imagen1);

        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/actinomiceto/caract-micro/eliminar-imagen/' . $caract->id,
                [
                    'numero' => 1
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen1);
        $caract = $caract->fresh();
        $this->assertCount(3, Seguimiento::all());
        $this->assertCount(1, CaracMicroActinomiceto::all());
        $this->assertEquals(null, $caract->imagen1);
    }
}
