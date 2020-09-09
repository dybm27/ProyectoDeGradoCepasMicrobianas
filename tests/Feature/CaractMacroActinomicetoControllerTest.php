<?php

namespace Tests\Feature;

use App\Actinomiceto;
use App\CaracMacroActinomiceto;
use App\Permiso;
use App\Seguimiento;
use CaractMacroActinomicetoSeeder;
use ClasesSeeder;
use EspeciesSeeder;
use GenerosSeeder;
use GruposMicrobianosSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Storage;
use OrdensSeeder;
use PhylumsSeeder;
use ReinosSeeder;
use Tests\TestCase;

class CaractMacroActinomicetoControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(CaractMacroActinomicetoSeeder::class);
        $this->seed(GruposMicrobianosSeeder::class);
        $this->seed(EspeciesSeeder::class);
        $this->seed(GenerosSeeder::class);
        $this->seed(ReinosSeeder::class);
        $this->seed(PhylumsSeeder::class);
        $this->seed(ClasesSeeder::class);
        $this->seed(OrdensSeeder::class);
        $permiso = Permiso::where('nombre', 'caract-cepa')->first();
        $this->user->rol->permisos()->sync([$permiso->id]);
    }

    /** @test */
    public function validar_campos_caract_macro_actinomiceto()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/cepas/actinomiceto/caract-macro', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('medio');
        $response->assertJsonValidationErrors('forma');
        $response->assertJsonValidationErrors('textura');
        $response->assertJsonValidationErrors('borde');
        $response->assertJsonValidationErrors('pigmento');
        $response->assertJsonValidationErrors('superficie');
        $response->assertJsonValidationErrors('secrecion_geosminas');
        $response->assertJsonValidationErrors('color');
        $response->assertJsonValidationErrors('imagen');
    }

    /** @test */
    public function store_caract_macro_actinomiceto()
    {
        Storage::fake('public');
        $actinomiceto = factory(Actinomiceto::class)->create();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/cepas/actinomiceto/caract-macro',
                [
                    'cepaId' => $actinomiceto->cepa_id, 'medio' => 'qwew', 'forma' => 1,
                    'textura' => 1, 'borde' => 1, 'pigmento' => 1, 'superficie' => 1,
                    'secrecion_geosminas' => 'aasd', 'color' => 1, 'imagen' => $this->imagen,
                    'otras_caract' => 'aasd'
                ]
            );
        $response->assertStatus(201);
        $caract = CaracMacroActinomiceto::first();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracMacroActinomiceto::all());
        Storage::assertExists($caract->imagen);
        $this->assertEquals($caract->medio, 'Qwew');
        $this->assertEquals($caract->forma_id, 1);
        $this->assertEquals($caract->textura_id, 1);
        $this->assertEquals($caract->borde_id, 1);
        $this->assertEquals($caract->pigmento_id, 1);
        $this->assertEquals($caract->superficie_id, 1);
        $this->assertEquals($caract->secrecion_geosminas, 'Aasd');
        $this->assertEquals($caract->otras_caract, 'aasd');
    }

    /** @test */
    public function update_caract_macro_actinomiceto()
    {
        Storage::fake('public');
        $caract = factory(CaracMacroActinomiceto::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/cepas/actinomiceto/caract-macro/' . $caract->id,
                [
                    'medio' => 'qwew', 'forma' => 2, 'textura' => 2, 'borde' => 2,
                    'pigmento' => 2, 'superficie' => 2, 'secrecion_geosminas' => 'aasd',
                    'color' => 2, 'imagen' => $this->imagen, 'otras_caract' => 'aasd'
                ]
            );
        $response->assertStatus(200);
        Storage::assertMissing($caract->imagen);
        $caract = $caract->fresh();
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(1, CaracMacroActinomiceto::all());
        Storage::assertExists($caract->imagen);
        $this->assertEquals($caract->medio, 'Qwew');
        $this->assertEquals($caract->forma_id, 2);
        $this->assertEquals($caract->textura_id, 2);
        $this->assertEquals($caract->borde_id, 2);
        $this->assertEquals($caract->pigmento_id, 2);
        $this->assertEquals($caract->superficie_id, 2);
        $this->assertEquals($caract->secrecion_geosminas, 'Aasd');
        $this->assertEquals($caract->otras_caract, 'aasd');
    }

    /** @test */
    public function delete_caract_macro_actinomiceto()
    {
        Storage::fake('public');
        $caract = factory(CaracMacroActinomiceto::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/cepas/actinomiceto/caract-macro/' . $caract->id);
        $response->assertStatus(200);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount(0, CaracMacroActinomiceto::all());
        Storage::assertMissing($caract->imagen);
    }
}
