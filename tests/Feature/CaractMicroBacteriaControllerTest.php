<?php

namespace Tests\Feature;

use App\Bacteria;
use App\CaracMicroBacteria;
use App\Permiso;
use App\Seguimiento;
use CaractMicroBacteriaSeeder;
use EspeciesSeeder;
use GenerosSeeder;
use GruposMicrobianosSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class CaractMicroBacteriaControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(CaractMicroBacteriaSeeder::class);
        $this->seed(GruposMicrobianosSeeder::class);
        $this->seed(EspeciesSeeder::class);
        $this->seed(GenerosSeeder::class);
        $permiso = Permiso::where('nombre', 'caract-cepa')->first();
        $this->user->rol->permisos()->sync([$permiso->id]);
    }

    /** @test */
    public function validar_campos_caract_micro_bacteria()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/bacteria/caract-micro', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('ordenamiento');
        $response->assertJsonValidationErrors('forma');
        $response->assertJsonValidationErrors('tincion_gram');
        $response->assertJsonValidationErrors('tincion_esporas');
        $response->assertJsonValidationErrors('tincion_capsula');
    }

    /** @test */
    public function store_caract_micro_bacteria()
    {
        Storage::fake('public');
        $bacteria = factory(Bacteria::class)->create();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/cepas/bacteria/caract-micro',
                [
                    'cepaId' => $bacteria->cepa_id, 'ubicacion_esporas' => 'asdasd', 'forma' => 1,
                    'ordenamiento' => 'asdasd', 'tincion_gram' => 'asdasd',
                    'tincion_esporas' => 'asdasd', 'tincion_capsula' => 'asdasd',
                    'otras_caract' => 'asdasd', 'imagen1' => $this->imagen,
                    'imagen2' => $this->imagen, 'imagen3' => $this->imagen
                ]
            );
        $response->assertStatus(201);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracMicroBacteria::all());
        $caract = CaracMicroBacteria::first();
        $this->assertEquals($caract->ubicacion_esporas, 'asdasd');
        $this->assertEquals($caract->forma_id, 1);
        $this->assertEquals($caract->ordenamiento, 'Asdasd');
        $this->assertEquals($caract->tincion_capsula, 'asdasd');
        $this->assertEquals($caract->tincion_gram, 'asdasd');
        $this->assertEquals($caract->tincion_esporas, 'asdasd');
        $this->assertEquals($caract->otras_caract, 'asdasd');
        Storage::assertExists($caract->imagen1);
        Storage::assertExists($caract->imagen2);
        Storage::assertExists($caract->imagen3);
    }

    /** @test */
    public function update_caract_micro_bacteria()
    {
        $caract = factory(CaracMicroBacteria::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/bacteria/caract-micro/' . $caract->id,
                [
                    'ubicacion_esporas' => 'asdasd', 'forma' => 1,
                    'ordenamiento' => 'asdasd', 'tincion_gram' => 'asdasd',
                    'tincion_esporas' => 'Ausencia', 'tincion_capsula' => 'asdasd',
                    'otras_caract' => 'asdasd'
                ]
            );
        $response->assertStatus(200);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracMicroBacteria::all());
        $this->assertEquals($caract->forma_id, 1);
        $this->assertEquals($caract->ordenamiento, 'Asdasd');
        $this->assertEquals($caract->tincion_capsula, 'asdasd');
        $this->assertEquals($caract->tincion_gram, 'asdasd');
        $this->assertEquals($caract->tincion_esporas, 'Ausencia');
        $this->assertEquals($caract->ubicacion_esporas, null);
        $this->assertEquals($caract->otras_caract, 'asdasd');
    }

    /** @test */
    public function delete_caract_micro_bacteria()
    {
        Storage::fake('public');
        $caract = factory(CaracMicroBacteria::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/cepas/bacteria/caract-micro/' . $caract->id);
        $response->assertStatus(200);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(0, CaracMicroBacteria::all());
        Storage::assertMissing($caract->imagen1);
        Storage::assertMissing($caract->imagen2);
        Storage::assertMissing($caract->imagen3);
    }

    /** @test */
    public function agregar_cambiar_eliminar_imagen_caract_micro_bacteria()
    {  
        $this->withoutMiddleware();
        Storage::fake('public');
        $caract = factory(CaracMicroBacteria::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/bacteria/caract-micro/agregar-imagen/' . $caract->id,
                [
                    'imagen' =>  $this->imagen, 'numero' => 1
                ]
            );
        $response->assertStatus(200);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracMicroBacteria::all());
        Storage::assertExists($caract->imagen1);

        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/bacteria/caract-micro/cambiar-imagen/' . $caract->id,
                [
                    'imagen' =>  $this->imagen, 'numero' => 1
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen1);
        $caract = $caract->fresh();
        $this->assertCount(2, Seguimiento::all());
        $this->assertCount(1, CaracMicroBacteria::all());
        Storage::assertExists($caract->imagen1);

        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/bacteria/caract-micro/eliminar-imagen/' . $caract->id,
                [
                    'numero' => 1
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen1);
        $caract = $caract->fresh();
        $this->assertCount(3, Seguimiento::all());
        $this->assertCount(1, CaracMicroBacteria::all());
        $this->assertEquals(null, $caract->imagen1);
    }
}
