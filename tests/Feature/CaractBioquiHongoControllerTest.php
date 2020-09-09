<?php

namespace Tests\Feature;

use App\CaracBioquiHongo;
use App\HongoFilamentoso;
use App\Permiso;
use App\Seguimiento;
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

class CaractBioquiHongoControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

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
    public function validar_campos_caract_bioqui_hongo()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/hongo/caract-bioqui', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('enzimas');
        $response->assertJsonValidationErrors('azucares');
    }

    /** @test */
    public function store_caract_bioqui_hongo()
    {
        Storage::fake('public');
        $hongo = factory(HongoFilamentoso::class)->create();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/cepas/hongo/caract-bioqui',
                [
                    'cepaId' => $hongo->cepa_id, 'enzimas' => 'asdasd', 'azucares' => 'asdasd',
                    'otras_caract' => 'asdasd', 'imagen1' => $this->imagen,
                    'imagen2' => $this->imagen, 'imagen3' => $this->imagen
                ]
            );
        $response->assertStatus(201);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracBioquiHongo::all());
        $caract = CaracBioquiHongo::first();
        $this->assertEquals($caract->enzimas, 'Asdasd');
        $this->assertEquals($caract->azucares, 'Asdasd');
        $this->assertEquals($caract->otras_caracteristicas, 'asdasd');
        Storage::assertExists($caract->imagen1);
        Storage::assertExists($caract->imagen2);
        Storage::assertExists($caract->imagen3);
    }

    /** @test */
    public function update_caract_bioqui_hongo()
    {
        $caract = factory(CaracBioquiHongo::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/hongo/caract-bioqui/' . $caract->id,
                [
                    'enzimas' => 'asdasd', 'azucares' => 'asdasd',
                    'otras_caract' => 'asdasd',
                ]
            );
        $response->assertStatus(200);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracBioquiHongo::all());
        $this->assertEquals($caract->enzimas, 'Asdasd');
        $this->assertEquals($caract->azucares, 'Asdasd');
        $this->assertEquals($caract->otras_caracteristicas, 'asdasd');
    }

    /** @test */
    public function delete_caract_bioqui_hongo()
    {
        Storage::fake('public');
        $caract = factory(CaracBioquiHongo::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/cepas/hongo/caract-bioqui/' . $caract->id);
        $response->assertStatus(200);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(0, CaracBioquiHongo::all());
        Storage::assertMissing($caract->imagen1);
        Storage::assertMissing($caract->imagen2);
        Storage::assertMissing($caract->imagen3);
    }

    /** @test */
    public function agregar_cambiar_eliminar_imagen_caract_bioqui_hongo()
    {
        $this->withoutMiddleware();
        Storage::fake('public');
        $caract = factory(CaracBioquiHongo::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/hongo/caract-bioqui/agregar-imagen/' . $caract->id,
                [
                    'imagen' =>  $this->imagen, 'numero' => 1
                ]
            );
        $response->assertStatus(200);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracBioquiHongo::all());
        Storage::assertExists($caract->imagen1);

        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/hongo/caract-bioqui/cambiar-imagen/' . $caract->id,
                [
                    'imagen' =>  $this->imagen, 'numero' => 1
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen1);
        $caract = $caract->fresh();
        $this->assertCount(2, Seguimiento::all());
        $this->assertCount(1, CaracBioquiHongo::all());
        Storage::assertExists($caract->imagen1);

        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/hongo/caract-bioqui/eliminar-imagen/' . $caract->id,
                [
                    'numero' => 1
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen1);
        $caract = $caract->fresh();
        $this->assertCount(3, Seguimiento::all());
        $this->assertCount(1, CaracBioquiHongo::all());
        $this->assertEquals(null, $caract->imagen1);
    }
}
