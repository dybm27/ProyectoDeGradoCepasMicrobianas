<?php

namespace Tests\Feature;

use App\Events\QuienesSomosEvent;
use App\Permiso;
use App\QuienesSomos;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Storage;
use SitioWebSeeder;
use Tests\TestCase;

class QuienesSomosControllerTest extends TestCase
{
    use RefreshDatabase;
    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(SitioWebSeeder::class);
    }

    /** @test */
    public function validar_cuerpo_vision()
    {
        $permiso = Permiso::where('nombre', 'editar-vision')->first();
        $this->user->rol->permisos()->sync([$permiso->id]);
        $response = $this->actingAs($this->user)
            ->putJson('/quienes-somos/vision/cambiar', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('cuerpo');
    }

    /** @test */
    public function validar_cuerpo_mision()
    {
        $permiso = Permiso::where('nombre', 'editar-mision')->first();
        $this->user->rol->permisos()->sync([$permiso->id]);
        $response = $this->actingAs($this->user)
            ->putJson('/quienes-somos/mision/cambiar', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('cuerpo');
    }

    /** @test */
    public function validar_cuerpo_objetivos()
    {
        $permiso = Permiso::where('nombre', 'editar-objetivos')->first();
        $this->user->rol->permisos()->sync([$permiso->id]);
        $response = $this->actingAs($this->user)
            ->putJson('/quienes-somos/objetivos/cambiar', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('cuerpo');
    }

    /** @test */
    public function update_mision()
    {
        $permiso = Permiso::where('nombre', 'editar-mision')->first();
        $this->user->rol->permisos()->sync([$permiso->id]);

        Event::fake();
        Storage::fake();
        $response = $this->actingAs($this->user)
            ->putJson('/quienes-somos/mision/cambiar', [
                'cuerpo' => 'mision', 'imagenesEditor' => [], 'imagenesGuardadas' => []
            ]);
        $response->assertStatus(200);
        Event::assertDispatched(QuienesSomosEvent::class);
        $this->assertCount(3, QuienesSomos::all());
        $this->assertEquals(QuienesSomos::where('quienes_somos_tipos_id', 1)->first()->cuerpo, 'mision');
    }

    /** @test */
    public function update_vision()
    {
        $permiso = Permiso::where('nombre', 'editar-vision')->first();
        $this->user->rol->permisos()->sync([$permiso->id]);

        Event::fake();
        Storage::fake();
        $response = $this->actingAs($this->user)
            ->putJson('/quienes-somos/vision/cambiar', [
                'cuerpo' => 'vision', 'imagenesEditor' => [], 'imagenesGuardadas' => []
            ]);
        $response->assertStatus(200);
        Event::assertDispatched(QuienesSomosEvent::class);
        $this->assertCount(3, QuienesSomos::all());
        $this->assertEquals(QuienesSomos::where('quienes_somos_tipos_id', 2)->first()->cuerpo, 'vision');
    }

    /** @test */
    public function update_objetivos()
    {
        $permiso = Permiso::where('nombre', 'editar-objetivos')->first();
        $this->user->rol->permisos()->sync([$permiso->id]);

        Event::fake();
        Storage::fake();
        $response = $this->actingAs($this->user)
            ->putJson('/quienes-somos/objetivos/cambiar', [
                'cuerpo' => 'objetivos', 'imagenesEditor' => [], 'imagenesGuardadas' => []
            ]);
        $response->assertStatus(200);
        Event::assertDispatched(QuienesSomosEvent::class);
        $this->assertCount(3, QuienesSomos::all());
        $this->assertEquals(QuienesSomos::where('quienes_somos_tipos_id', 3)->first()->cuerpo, 'objetivos');
    }
}
