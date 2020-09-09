<?php

namespace Tests\Feature;

use App\CaracMicroLevadura;
use App\Levadura;
use App\Permiso;
use App\Seguimiento;
use CaractMicroBacteriaSeeder;
use ClasesSeeder;
use DivisionesSeeder;
use EspeciesSeeder;
use FamiliasSeeder;
use GenerosSeeder;
use GruposMicrobianosSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Storage;
use OrdensSeeder;
use Tests\TestCase;

class CaractMicroLevaduraControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(GruposMicrobianosSeeder::class);
        $this->seed(EspeciesSeeder::class);
        $this->seed(GenerosSeeder::class);
        $this->seed(FamiliasSeeder::class);
        $this->seed(ClasesSeeder::class);
        $this->seed(OrdensSeeder::class);
        $this->seed(DivisionesSeeder::class);
        $permiso = Permiso::where('nombre', 'caract-cepa')->first();
        $this->user->rol->permisos()->sync([$permiso->id]);
    }

    /** @test */
    public function validar_campos_caract_micro_levadura()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/levadura/caract-micro', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('hifas');
        $response->assertJsonValidationErrors('capsula');
        $response->assertJsonValidationErrors('pseudohifas');
        $response->assertJsonValidationErrors('balistoconidias');
        $response->assertJsonValidationErrors('produccion_tubo_germinativo');
        $response->assertJsonValidationErrors('blastoconidias');
        $response->assertJsonValidationErrors('produccion_clamidosporas');
        $response->assertJsonValidationErrors('induccion_filamentizacion');
        $response->assertJsonValidationErrors('artroconidias');
        $response->assertJsonValidationErrors('formacion_asco_y_ascosporas');
    }

    /** @test */
    public function store_caract_micro_levadura()
    {
        Storage::fake('public');
        $levadura = factory(Levadura::class)->create();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/cepas/levadura/caract-micro',
                [
                    'cepaId' => $levadura->cepa_id, 'hifas' => 'asdasd', 'capsula' => 'asdasd',
                    'pseudohifas' => 'asdasd', 'balistoconidias' => 'asdasd',
                    'produccion_tubo_germinativo' => 'asdasd', 'blastoconidias' => 'asdasd',
                    'produccion_clamidosporas' => 'asdasd', 'induccion_filamentizacion' => 'asdasd',
                    'artroconidias' => 'asdasd', 'formacion_asco_y_ascosporas' => 'asdasd',
                    'otras_caract' => 'asdasd', 'imagen1' => $this->imagen,
                    'imagen2' => $this->imagen, 'imagen3' => $this->imagen
                ]
            );
        $response->assertStatus(201);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracMicroLevadura::all());
        $caract = CaracMicroLevadura::first();
        $this->assertEquals($caract->hifas, 'asdasd');
        $this->assertEquals($caract->capsula, 'asdasd');
        $this->assertEquals($caract->pseudohifas, 'asdasd');
        $this->assertEquals($caract->balistoconidias, 'asdasd');
        $this->assertEquals($caract->produccion_tubo_germinativo, 'asdasd');
        $this->assertEquals($caract->blastoconidias, 'asdasd');
        $this->assertEquals($caract->produccion_clamidosporas, 'asdasd');
        $this->assertEquals($caract->induccion_filamentizacion, 'asdasd');
        $this->assertEquals($caract->artroconidias, 'asdasd');
        $this->assertEquals($caract->formacion_asco_y_ascosporas, 'asdasd');
        $this->assertEquals($caract->otras_caract, 'asdasd');
        Storage::assertExists($caract->imagen1);
        Storage::assertExists($caract->imagen2);
        Storage::assertExists($caract->imagen3);
    }

    /** @test */
    public function update_caract_micro_levadura()
    {
        $caract = factory(CaracMicroLevadura::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/levadura/caract-micro/' . $caract->id,
                [
                    'hifas' => 'asdasd', 'capsula' => 'asdasd', 'pseudohifas' => 'asdasd',
                    'balistoconidias' => 'asdasd', 'produccion_tubo_germinativo' => 'asdasd',
                    'blastoconidias' => 'asdasd', 'produccion_clamidosporas' => 'asdasd',
                    'induccion_filamentizacion' => 'asdasd', 'artroconidias' => 'asdasd',
                    'formacion_asco_y_ascosporas' => 'asdasd', 'otras_caract' => 'asdasd'
                ]
            );
        $response->assertStatus(200);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracMicroLevadura::all());
        $this->assertEquals($caract->hifas, 'asdasd');
        $this->assertEquals($caract->capsula, 'asdasd');
        $this->assertEquals($caract->pseudohifas, 'asdasd');
        $this->assertEquals($caract->balistoconidias, 'asdasd');
        $this->assertEquals($caract->produccion_tubo_germinativo, 'asdasd');
        $this->assertEquals($caract->blastoconidias, 'asdasd');
        $this->assertEquals($caract->produccion_clamidosporas, 'asdasd');
        $this->assertEquals($caract->induccion_filamentizacion, 'asdasd');
        $this->assertEquals($caract->artroconidias, 'asdasd');
        $this->assertEquals($caract->formacion_asco_y_ascosporas, 'asdasd');
        $this->assertEquals($caract->otras_caract, 'asdasd');
    }

    /** @test */
    public function delete_caract_micro_levadura()
    {
        Storage::fake('public');
        $caract = factory(CaracMicroLevadura::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/cepas/levadura/caract-micro/' . $caract->id);
        $response->assertStatus(200);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(0, CaracMicroLevadura::all());
        Storage::assertMissing($caract->imagen1);
        Storage::assertMissing($caract->imagen2);
        Storage::assertMissing($caract->imagen3);
    }

    /** @test */
    public function agregar_cambiar_eliminar_imagen_caract_micro_levadura()
    {  // 'image' => $file = UploadedFile::fake()->image('image.jpg', 1, 1)
        $this->withoutMiddleware();
        Storage::fake('public');
        $caract = factory(CaracMicroLevadura::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/levadura/caract-micro/agregar-imagen/' . $caract->id,
                [
                    'imagen' =>  $this->imagen, 'numero' => 1
                ]
            );
        $response->assertStatus(200);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracMicroLevadura::all());
        Storage::assertExists($caract->imagen1);

        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/levadura/caract-micro/cambiar-imagen/' . $caract->id,
                [
                    'imagen' =>  $this->imagen, 'numero' => 1
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen1);
        $caract = $caract->fresh();
        $this->assertCount(2, Seguimiento::all());
        $this->assertCount(1, CaracMicroLevadura::all());
        Storage::assertExists($caract->imagen1);

        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/levadura/caract-micro/eliminar-imagen/' . $caract->id,
                [
                    'numero' => 1
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen1);
        $caract = $caract->fresh();
        $this->assertCount(3, Seguimiento::all());
        $this->assertCount(1, CaracMicroLevadura::all());
        $this->assertEquals(null, $caract->imagen1);
    }
}
