<?php

namespace Tests\Feature;

use App\Bacteria;
use App\CaracFisioBacteria;
use App\Permiso;
use App\Seguimiento;
use EspeciesSeeder;
use GenerosSeeder;
use GruposMicrobianosSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class CaractFisioBacteriaControllerTest extends TestCase
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
    public function validar_campos_caract_fisio_bacteria()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/bacteria/caract-fisio', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('acido_indolacetico');
        $response->assertJsonValidationErrors('fosforo');
        $response->assertJsonValidationErrors('sideroforos');
        $response->assertJsonValidationErrors('nitrogeno');
    }

    /** @test */
    public function store_caract_fisio_bacteria()
    {
        Storage::fake('public');
        $bacteria = factory(Bacteria::class)->create();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/cepas/bacteria/caract-fisio',
                [
                    'cepaId' => $bacteria->cepa_id, 'acido_indolacetico' => 'asdasd',
                    'fosforo' => 'asdasd', 'sideroforos' => 'asdasd', 'nitrogeno' => 'asdasd',
                    'otras_caract' => 'asdasd', 'imagen1' => $this->imagen, 'imagen2' => $this->imagen,
                    'imagen3' => $this->imagen,
                ]
            );
        $response->assertStatus(201);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracFisioBacteria::all());
        $caract = CaracFisioBacteria::first();
        $this->assertEquals($caract->acido_indolacetico, 'Asdasd');
        $this->assertEquals($caract->fosforo, 'Asdasd');
        $this->assertEquals($caract->sideroforos, 'Asdasd');
        $this->assertEquals($caract->nitrogeno, 'Asdasd');
        $this->assertEquals($caract->otras_caract, 'asdasd');
        Storage::assertExists($caract->imagen1);
        Storage::assertExists($caract->imagen2);
        Storage::assertExists($caract->imagen3);
    }

    /** @test */
    public function update_caract_fisio_bacteria()
    {
        $caract = factory(CaracFisioBacteria::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/bacteria/caract-fisio/' . $caract->id,
                [
                    'acido_indolacetico' => 'asdasd', 'fosforo' => 'asdasd',
                    'sideroforos' => 'asdasd', 'nitrogeno' => 'asdasd',
                    'otras_caract' => 'asdasd'
                ]
            );
        $response->assertStatus(200);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracFisioBacteria::all());
        $this->assertEquals($caract->acido_indolacetico, 'Asdasd');
        $this->assertEquals($caract->fosforo, 'Asdasd');
        $this->assertEquals($caract->sideroforos, 'Asdasd');
        $this->assertEquals($caract->nitrogeno, 'Asdasd');
        $this->assertEquals($caract->otras_caract, 'asdasd');
    }

    /** @test */
    public function delete_caract_fisio_bacteria()
    {
        Storage::fake('public');
        $caract = factory(CaracFisioBacteria::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/cepas/bacteria/caract-fisio/' . $caract->id);
        $response->assertStatus(200);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(0, CaracFisioBacteria::all());
        Storage::assertMissing($caract->imagen1);
        Storage::assertMissing($caract->imagen2);
        Storage::assertMissing($caract->imagen3);
    }

    /** @test */
    public function agregar_cambiar_eliminar_imagen_caract_fisio_bacteria()
    {
        $this->withoutMiddleware();
        Storage::fake('public');
        $caract = factory(CaracFisioBacteria::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/bacteria/caract-fisio/agregar-imagen/' . $caract->id,
                [
                    'imagen' =>  $this->imagen, 'numero' => 1
                ]
            );
        $response->assertStatus(200);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracFisioBacteria::all());
        Storage::assertExists($caract->imagen1);

        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/bacteria/caract-fisio/cambiar-imagen/' . $caract->id,
                [
                    'imagen' =>  $this->imagen, 'numero' => 1
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen1);
        $caract = $caract->fresh();
        $this->assertCount(2, Seguimiento::all());
        $this->assertCount(1, CaracFisioBacteria::all());
        Storage::assertExists($caract->imagen1);

        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/bacteria/caract-fisio/eliminar-imagen/' . $caract->id,
                [
                    'numero' => 1
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen1);
        $caract = $caract->fresh();
        $this->assertCount(3, Seguimiento::all());
        $this->assertCount(1, CaracFisioBacteria::all());
        $this->assertEquals(null, $caract->imagen1);
    }
}
