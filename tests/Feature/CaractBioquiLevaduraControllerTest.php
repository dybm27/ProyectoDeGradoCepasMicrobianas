<?php

namespace Tests\Feature;

use App\CaracBioquiLevadura;
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

class CaractBioquiLevaduraControllerTest extends TestCase
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
    public function validar_campos_caract_bioqui_levadura()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/levadura/caract-bioqui', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('crecimiento');
        $response->assertJsonValidationErrors('ureasa');
        $response->assertJsonValidationErrors('fenol_oxidasa');
        $response->assertJsonValidationErrors('nitratos');
        $response->assertJsonValidationErrors('produccion_acido');
    }

    /** @test */
    public function store_caract_bioqui_levadura()
    {
        Storage::fake('public');
        $levadura = factory(Levadura::class)->create();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/cepas/levadura/caract-bioqui',
                [
                    'cepaId' => $levadura->cepa_id,  'crecimiento' => 'asdasd', 'ureasa' => 'asdasd',
                    'fenol_oxidasa' => 'asdasd', 'nitratos' => 'asdasd', 'produccion_acido' => 'asdasd',
                    'termotolerancia_37' => 'asdasd', 'termotolerancia_42' => 'asdasd',
                    'termotolerancia_45' => 'asdasd', 'termotolerancia_otra' => 'asdasd',
                    'otras_caract' => 'asdasd', 'imagen1' => $this->imagen, 'imagen2' => $this->imagen,
                    'imagen3' => $this->imagen
                ]
            );
        $response->assertStatus(201);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracBioquiLevadura::all());
        $caract = CaracBioquiLevadura::first();
        $this->assertEquals($caract->crecimiento, 'asdasd');
        $this->assertEquals($caract->ureasa, 'Asdasd');
        $this->assertEquals($caract->fenol_oxidasa, 'Asdasd');
        $this->assertEquals($caract->nitratos, 'Asdasd');
        $this->assertEquals($caract->produccion_acido, 'Asdasd');
        $this->assertEquals($caract->termotolerancia_37, 'asdasd');
        $this->assertEquals($caract->termotolerancia_42, 'asdasd');
        $this->assertEquals($caract->termotolerancia_45, 'asdasd');
        $this->assertEquals($caract->termotolerancia_otra, 'asdasd');
        $this->assertEquals($caract->otras_caract, 'asdasd');
        Storage::assertExists($caract->imagen1);
        Storage::assertExists($caract->imagen2);
        Storage::assertExists($caract->imagen3);
    }

    /** @test */
    public function update_caract_bioqui_levadura()
    {
        $caract = factory(CaracBioquiLevadura::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/levadura/caract-bioqui/' . $caract->id,
                [
                    'crecimiento' => 'asdasd', 'ureasa' => 'asdasd', 'fenol_oxidasa' => 'asdasd',
                    'nitratos' => 'asdasd', 'produccion_acido' => 'asdasd',
                    'termotolerancia_37' => 'asdasd', 'termotolerancia_42' => 'asdasd',
                    'termotolerancia_45' => 'asdasd', 'termotolerancia_otra' => 'asdasd',
                    'otras_caract' => 'asdasd',
                ]
            );
        $response->assertStatus(200);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracBioquiLevadura::all());
        $this->assertEquals($caract->crecimiento, 'asdasd');
        $this->assertEquals($caract->ureasa, 'Asdasd');
        $this->assertEquals($caract->fenol_oxidasa, 'Asdasd');
        $this->assertEquals($caract->nitratos, 'Asdasd');
        $this->assertEquals($caract->produccion_acido, 'Asdasd');
        $this->assertEquals($caract->termotolerancia_37, 'asdasd');
        $this->assertEquals($caract->termotolerancia_42, 'asdasd');
        $this->assertEquals($caract->termotolerancia_45, 'asdasd');
        $this->assertEquals($caract->termotolerancia_otra, 'asdasd');
        $this->assertEquals($caract->otras_caract, 'asdasd');
    }

    /** @test */
    public function delete_caract_bioqui_levadura()
    {
        Storage::fake('public');
        $caract = factory(CaracBioquiLevadura::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/cepas/levadura/caract-bioqui/' . $caract->id);
        $response->assertStatus(200);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(0, CaracBioquiLevadura::all());
        Storage::assertMissing($caract->imagen1);
        Storage::assertMissing($caract->imagen2);
        Storage::assertMissing($caract->imagen3);
    }

    /** @test */
    public function agregar_cambiar_eliminar_imagen_caract_bioqui_levadura()
    {
        $this->withoutMiddleware();
        Storage::fake('public');
        $caract = factory(CaracBioquiLevadura::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/levadura/caract-bioqui/agregar-imagen/' . $caract->id,
                [
                    'imagen' =>  $this->imagen, 'numero' => 1
                ]
            );
        $response->assertStatus(200);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracBioquiLevadura::all());
        Storage::assertExists($caract->imagen1);

        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/levadura/caract-bioqui/cambiar-imagen/' . $caract->id,
                [
                    'imagen' =>  $this->imagen, 'numero' => 1
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen1);
        $caract = $caract->fresh();
        $this->assertCount(2, Seguimiento::all());
        $this->assertCount(1, CaracBioquiLevadura::all());
        Storage::assertExists($caract->imagen1);

        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/levadura/caract-bioqui/eliminar-imagen/' . $caract->id,
                [
                    'numero' => 1
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen1);
        $caract = $caract->fresh();
        $this->assertCount(3, Seguimiento::all());
        $this->assertCount(1, CaracBioquiLevadura::all());
        $this->assertEquals(null, $caract->imagen1);
    }
}
