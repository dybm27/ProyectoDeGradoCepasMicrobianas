<?php

namespace Tests\Feature;

use App\CaracMacroLevadura;
use App\Levadura;
use App\Permiso;
use App\Seguimiento;
use CaractMacroLevaduraSeeder;
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

class CaractMacroLevaduraControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(CaractMacroLevaduraSeeder::class);
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
    public function validar_campos_caract_macro_levadura()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/levadura/caract-macro', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('medio');
        $response->assertJsonValidationErrors('textura');
        $response->assertJsonValidationErrors('borde_colonia');
        $response->assertJsonValidationErrors('topografia_superficie');
        $response->assertJsonValidationErrors('color');
        $response->assertJsonValidationErrors('imagen');
    }

    /** @test */
    public function store_caract_macro_levadura()
    {
        Storage::fake('public');
        $levadura = factory(Levadura::class)->create();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/cepas/levadura/caract-macro',
                [
                    'cepaId' => $levadura->cepa_id, 'medio' => 'qwew', 'textura' => 1,
                    'borde_colonia' => 'qwew', 'topografia_superficie' => 'qwew', 'color' => 1,
                    'imagen' => $this->imagen
                ]
            );
        $response->assertStatus(201);
        $caract = CaracMacroLevadura::first();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracMacroLevadura::all());
        Storage::assertExists($caract->imagen);
        $this->assertEquals($caract->medio, 'Qwew');
        $this->assertEquals($caract->textura_id, 1);
        $this->assertEquals($caract->topografia_superficie, 'qwew');
        $this->assertEquals($caract->borde_colonia, 'qwew');
        $this->assertEquals($caract->color_id, 1);
    }

    /** @test */
    public function update_caract_macro_levadura()
    {
        Storage::fake('public');
        $caract = factory(CaracMacroLevadura::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/levadura/caract-macro/' . $caract->id,
                [
                    'medio' => 'qwew', 'textura' => 2, 'borde_colonia' => 'qwew',
                    'topografia_superficie' => 'qwew', 'color' => 2, 'imagen' => $this->imagen
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracMacroLevadura::all());
        Storage::assertExists($caract->imagen);
        $this->assertEquals($caract->medio, 'Qwew');
        $this->assertEquals($caract->textura_id, 2);
        $this->assertEquals($caract->topografia_superficie, 'qwew');
        $this->assertEquals($caract->borde_colonia, 'qwew');
        $this->assertEquals($caract->color_id, 2);
    }

    /** @test */
    public function delete_caract_macro_levadura()
    {
        Storage::fake('public');
        $caract = factory(CaracMacroLevadura::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/cepas/levadura/caract-macro/' . $caract->id);
        $response->assertStatus(200);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(0, CaracMacroLevadura::all());
        Storage::assertMissing($caract->imagen);
    }
}
