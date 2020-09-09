<?php

namespace Tests\Feature;

use App\CaracMacroHongo;
use App\HongoFilamentoso;
use App\Permiso;
use App\Seguimiento;
use CaractMacroHongoSeeder;
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

class CaractMacroHongoControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(CaractMacroHongoSeeder::class);
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
    public function validar_campos_caract_macro_hongo()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/hongo/caract-macro', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('medio');
        $response->assertJsonValidationErrors('textura');
        $response->assertJsonValidationErrors('caracteristicas_reverso');
        $response->assertJsonValidationErrors('color');
        $response->assertJsonValidationErrors('imagen');
    }

    /** @test */
    public function store_caract_macro_hongo()
    {
        Storage::fake('public');
        $hongo = factory(HongoFilamentoso::class)->create();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/cepas/hongo/caract-macro',
                [
                    'cepaId' => $hongo->cepa_id, 'medio' => 'qwew', 'textura' => 1,
                    'caracteristicas_reverso' => 'qwew', 'color' => 1, 'imagen' => $this->imagen
                ]
            );
        $response->assertStatus(201);
        $caract = CaracMacroHongo::first();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracMacroHongo::all());
        Storage::assertExists($caract->imagen);
        $this->assertEquals($caract->medio, 'Qwew');
        $this->assertEquals($caract->textura_id, 1);
        $this->assertEquals($caract->caracteristicas_reverso, 'qwew');
        $this->assertEquals($caract->color_id, 1);
    }

    /** @test */
    public function update_caract_macro_hongo()
    {
        Storage::fake('public');
        $caract = factory(CaracMacroHongo::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/hongo/caract-macro/' . $caract->id,
                [
                    'medio' => 'qwew', 'textura' => 2, 'caracteristicas_reverso' => 'qwew',
                    'color' => 2, 'imagen' => $this->imagen
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracMacroHongo::all());
        Storage::assertExists($caract->imagen);
        $this->assertEquals($caract->medio, 'Qwew');
        $this->assertEquals($caract->textura_id, 2);
        $this->assertEquals($caract->caracteristicas_reverso, 'qwew');
        $this->assertEquals($caract->color_id, 2);
    }

    /** @test */
    public function delete_caract_macro_hongo()
    {
        Storage::fake('public');
        $caract = factory(CaracMacroHongo::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/cepas/hongo/caract-macro/' . $caract->id);
        $response->assertStatus(200);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(0, CaracMacroHongo::all());
        Storage::assertMissing($caract->imagen);
    }
}
