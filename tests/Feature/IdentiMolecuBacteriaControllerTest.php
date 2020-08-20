<?php

namespace Tests\Feature;

use App\Bacteria;
use App\IdentiMolecuBacteria;
use App\Permiso;
use App\Seguimiento;
use EspeciesSeeder;
use GenerosSeeder;
use GruposMicrobianosSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class IdentiMolecuBacteriaControllerTest extends TestCase
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
    public function validar_campos_identi_molecu_bacteria()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/bacteria/identi-molecu', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre_forward');
        $response->assertJsonValidationErrors('produc_forward');
        $response->assertJsonValidationErrors('nombre_reversed');
        $response->assertJsonValidationErrors('produc_reversed');
        $response->assertJsonValidationErrors('secuen_forward');
        $response->assertJsonValidationErrors('obser_secuenciacion');
        $response->assertJsonValidationErrors('secuen_reversed');
        $response->assertJsonValidationErrors('imagen1');
        $response->assertJsonValidationErrors('imagen2');
    }

    /** @test */
    public function store_identi_molecu_bacteria()
    {
        Storage::fake('public');
        $bacteria = factory(Bacteria::class)->create();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/cepas/bacteria/identi-molecu',
                [
                    'cepaId' => $bacteria->cepa_id,  'nombre_forward' => 'asdasd',
                    'produc_forward' => 'asdasd', 'nombre_reversed' => 'asdasd',
                    'produc_reversed' => 'asdasd', 'secuen_forward' => 'asdasd',
                    'obser_secuenciacion' => 'asdasd', 'secuen_reversed' => 'asdasd',
                    'imagen1' => $this->imagen, 'imagen2' => $this->imagen
                ]
            );
        $response->assertStatus(201);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, IdentiMolecuBacteria::all());
        $caract = IdentiMolecuBacteria::first();
        $this->assertEquals($caract->nombre_forward, 'asdasd');
        $this->assertEquals($caract->produc_forward, 'asdasd');
        $this->assertEquals($caract->nombre_reversed, 'asdasd');
        $this->assertEquals($caract->produc_reversed, 'asdasd');
        $this->assertEquals($caract->secuen_forward, 'asdasd');
        $this->assertEquals($caract->obser_secuenciacion, 'Asdasd');
        Storage::assertExists($caract->img_pcr);
        Storage::assertExists($caract->img_secuen);
    }

    /** @test */
    public function update_identi_molecu_bacteria()
    {
        $caract = factory(IdentiMolecuBacteria::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/bacteria/identi-molecu/' . $caract->id,
                [
                    'nombre_forward' => 'asdasd', 'produc_forward' => 'asdasd',
                    'nombre_reversed' => 'asdasd', 'produc_reversed' => 'asdasd',
                    'secuen_forward' => 'asdasd', 'obser_secuenciacion' => 'asdasd',
                    'secuen_reversed' => 'asdasd', 'imagen1' => $this->imagen, 'imagen2' => $this->imagen
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->img_pcr);
        Storage::assertMissing($caract->img_secuen);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, IdentiMolecuBacteria::all());
        $this->assertEquals($caract->nombre_forward, 'asdasd');
        $this->assertEquals($caract->produc_forward, 'asdasd');
        $this->assertEquals($caract->nombre_reversed, 'asdasd');
        $this->assertEquals($caract->produc_reversed, 'asdasd');
        $this->assertEquals($caract->secuen_forward, 'asdasd');
        $this->assertEquals($caract->obser_secuenciacion, 'Asdasd');
        Storage::assertExists($caract->img_pcr);
        Storage::assertExists($caract->img_secuen);
    }

    /** @test */
    public function delete_identi_molecu_bacteria()
    {
        Storage::fake('public');
        $caract = factory(IdentiMolecuBacteria::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/cepas/bacteria/identi-molecu/' . $caract->id);
        $response->assertStatus(200);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(0, IdentiMolecuBacteria::all());
        Storage::assertMissing($caract->img_pcr);
        Storage::assertMissing($caract->img_secuen);
    }
}
