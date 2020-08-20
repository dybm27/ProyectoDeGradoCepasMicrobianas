<?php

namespace Tests\Feature;

use App\IdentiMolecuLevadura;
use App\Levadura;
use App\Permiso;
use App\Seguimiento;
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

class IdentiMolecuLevaduraControllerTest extends TestCase
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
    public function validar_campos_identi_molecu_levadura()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/levadura/identi-molecu', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre_forward');
        $response->assertJsonValidationErrors('producto_forward');
        $response->assertJsonValidationErrors('nombre_reversed');
        $response->assertJsonValidationErrors('producto_reversed');
        $response->assertJsonValidationErrors('secuencia_forward');
        $response->assertJsonValidationErrors('condiciones_pcr');
        $response->assertJsonValidationErrors('secuencia_reversed');
        $response->assertJsonValidationErrors('blast');
        $response->assertJsonValidationErrors('analisis_filogenetico');
        $response->assertJsonValidationErrors('imagen1');
        $response->assertJsonValidationErrors('imagen2');
    }

    /** @test */
    public function store_identi_molecu_levadura()
    {
        Storage::fake('public');
        $levadura = factory(Levadura::class)->create();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/cepas/levadura/identi-molecu',
                [
                    'cepaId' => $levadura->cepa_id,  'nombre_forward' => 'asdasd',
                    'producto_forward' => 'asdasd', 'secuencia_reversed' => 'asdasd',
                    'producto_reversed' => 'asdasd', 'secuencia_forward' => 'asdasd',
                    'blast' => 'asdasd', 'nombre_reversed' => 'asdasd', 'analisis_filogenetico' => 'asdasd',
                    'condiciones_pcr' => 'asdasd', 'imagen1' => $this->imagen, 'imagen2' => $this->imagen,
                    'observaciones' => 'asdasd'
                ]
            );
        $response->assertStatus(201);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, IdentiMolecuLevadura::all());
        $caract = IdentiMolecuLevadura::first();
        $this->assertEquals($caract->nombre_forward, 'asdasd');
        $this->assertEquals($caract->producto_forward, 'asdasd');
        $this->assertEquals($caract->nombre_reversed, 'asdasd');
        $this->assertEquals($caract->producto_reversed, 'asdasd');
        $this->assertEquals($caract->secuencia_forward, 'asdasd');
        $this->assertEquals($caract->condiciones_pcr, 'asdasd');
        $this->assertEquals($caract->secuencia_reversed, 'asdasd');
        $this->assertEquals($caract->blast, 'asdasd');
        $this->assertEquals($caract->analisis_filogenetico, 'asdasd');
        $this->assertEquals($caract->observaciones, 'asdasd');
        Storage::assertExists($caract->imagen_pcr);
        Storage::assertExists($caract->imagen_blast);
    }

    /** @test */
    public function update_identi_molecu_levadura()
    {
        $caract = factory(IdentiMolecuLevadura::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/levadura/identi-molecu/' . $caract->id,
                [
                    'nombre_forward' => 'asdasd', 'producto_forward' => 'asdasd',
                    'secuencia_reversed' => 'asdasd', 'producto_reversed' => 'asdasd',
                    'secuencia_forward' => 'asdasd', 'blast' => 'asdasd',
                    'nombre_reversed' => 'asdasd', 'analisis_filogenetico' => 'asdasd',
                    'condiciones_pcr' => 'asdasd', 'imagen1' => $this->imagen, 'imagen2' => $this->imagen,
                    'observaciones' => 'asdasd'
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen_pcr);
        Storage::assertMissing($caract->imagen_blast);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, IdentiMolecuLevadura::all());
        $this->assertEquals($caract->nombre_forward, 'asdasd');
        $this->assertEquals($caract->producto_forward, 'asdasd');
        $this->assertEquals($caract->nombre_reversed, 'asdasd');
        $this->assertEquals($caract->producto_reversed, 'asdasd');
        $this->assertEquals($caract->secuencia_forward, 'asdasd');
        $this->assertEquals($caract->condiciones_pcr, 'asdasd');
        $this->assertEquals($caract->secuencia_reversed, 'asdasd');
        $this->assertEquals($caract->blast, 'asdasd');
        $this->assertEquals($caract->analisis_filogenetico, 'asdasd');
        $this->assertEquals($caract->observaciones, 'asdasd');
        Storage::assertExists($caract->imagen_pcr);
        Storage::assertExists($caract->imagen_blast);
    }

    /** @test */
    public function delete_identi_molecu_levadura()
    {
        Storage::fake('public');
        $caract = factory(IdentiMolecuLevadura::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/cepas/levadura/identi-molecu/' . $caract->id);
        $response->assertStatus(200);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(0, IdentiMolecuLevadura::all());
        Storage::assertMissing($caract->imagen_pcr);
        Storage::assertMissing($caract->imagen_blast);
    }
}
