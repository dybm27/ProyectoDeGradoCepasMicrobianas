<?php

namespace Tests\Feature;

use App\Bacteria;
use App\CaracMacroBacteria;
use App\Permiso;
use App\Seguimiento;
use CaractMacroBacteriaSeeder;
use EspeciesSeeder;
use GenerosSeeder;
use GruposMicrobianosSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class CaractMacroBacteriaControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(CaractMacroBacteriaSeeder::class);
        $this->seed(GruposMicrobianosSeeder::class);
        $this->seed(EspeciesSeeder::class);
        $this->seed(GenerosSeeder::class);
        $permiso = Permiso::where('nombre', 'caract-cepa')->first();
        $this->user->rol->permisos()->sync([$permiso->id]);
    }

    /** @test */
    public function validar_campos_caract_macro_bacteria()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/bacteria/caract-macro', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('medio');
        $response->assertJsonValidationErrors('forma');
        $response->assertJsonValidationErrors('elevacion');
        $response->assertJsonValidationErrors('borde');
        $response->assertJsonValidationErrors('detalle_optico');
        $response->assertJsonValidationErrors('superficie');
        $response->assertJsonValidationErrors('tamaño');
        $response->assertJsonValidationErrors('color');
        $response->assertJsonValidationErrors('imagen');
    }

    /** @test */
    public function store_caract_macro_bacteria()
    {
        Storage::fake('public');
        $bacteria = factory(Bacteria::class)->create();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/cepas/bacteria/caract-macro',
                [
                    'cepaId' => $bacteria->cepa_id, 'medio' => 'qwew', 'forma' => 1,
                    'elevacion' => 1, 'borde' => 1, 'detalle_optico' => 1, 'superficie' => 1,
                    'tamaño' => 'aasd', 'color' => 1, 'imagen' => $this->imagen, 'otras_caract' => 'aasd'
                ]
            );
        $response->assertStatus(201);
        $caract = CaracMacroBacteria::first();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracMacroBacteria::all());
        Storage::assertExists($caract->imagen);
        $this->assertEquals($caract->medio, 'Qwew');
        $this->assertEquals($caract->forma_id, 1);
        $this->assertEquals($caract->elevacion_id, 1);
        $this->assertEquals($caract->borde_id, 1);
        $this->assertEquals($caract->detalleoptico_id, 1);
        $this->assertEquals($caract->superficie_id, 1);
        $this->assertEquals($caract->color_id, 1);
        $this->assertEquals($caract->tamano, 'aasd');
        $this->assertEquals($caract->otras_caract, 'aasd');
    }

    /** @test */
    public function update_caract_macro_bacteria()
    {
        Storage::fake('public');
        $caract = factory(CaracMacroBacteria::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/bacteria/caract-macro/' . $caract->id,
                [
                    'medio' => 'asds', 'forma' => 2, 'elevacion' => 2, 'borde' => 2,
                    'detalle_optico' => 2, 'superficie' => 2, 'tamaño' => 'asdasd',
                    'color' => 2, 'imagen' => $this->imagen, 'otras_caract' => 'asdasd'
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracMacroBacteria::all());
        Storage::assertExists($caract->imagen);
        $this->assertEquals($caract->medio, 'Asds');
        $this->assertEquals($caract->forma_id, 2);
        $this->assertEquals($caract->elevacion_id, 2);
        $this->assertEquals($caract->borde_id, 2);
        $this->assertEquals($caract->detalleoptico_id, 2);
        $this->assertEquals($caract->superficie_id, 2);
        $this->assertEquals($caract->color_id, 2);
        $this->assertEquals($caract->tamano, 'asdasd');
        $this->assertEquals($caract->otras_caract, 'asdasd');
    }

    /** @test */
    public function delete_caract_macro_bacteria()
    {
        Storage::fake('public');
        $caract = factory(CaracMacroBacteria::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/cepas/bacteria/caract-macro/' . $caract->id);
        $response->assertStatus(200);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(0, CaracMacroBacteria::all());
        Storage::assertMissing($caract->imagen);
    }
}
