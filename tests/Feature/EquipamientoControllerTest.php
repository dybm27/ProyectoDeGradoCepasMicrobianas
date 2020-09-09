<?php

namespace Tests\Feature;

use App\Equipamiento;
use App\Events\EquipamientoEvent;
use App\Permiso;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Storage;
use SitioWebSeeder;
use Tests\TestCase;

class EquipamientoControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(SitioWebSeeder::class);

        $permiso1 = Permiso::where('nombre', 'agregar-equipamiento')->first();
        $permiso2 = Permiso::where('nombre', 'editar-equipamiento')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-equipamiento')->first();
        $this->user->rol->permisos()->sync([$permiso1->id, $permiso2->id, $permiso3->id]);
    }

    /** @test */
    public function validar_campos_equipamiento()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/equipamientos', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
        $response->assertJsonValidationErrors('caracteristicas');
        $response->assertJsonValidationErrors('funcion');
        $response->assertJsonValidationErrors('imagen');
    }

    /** @test */
    public function store_equipamiento()
    {
        Event::fake();
        Storage::fake();
        $response = $this->actingAs($this->user)
            ->postJson('/equipamientos', [
                'nombre' => 'qweqwe', 'caracteristicas' => 'qweqwe',
                'funcion' => 'qweqwe',  'imagen' => $this->imagen, 'publicar' => 1
            ]);
        $response->assertStatus(201);
        Event::assertDispatched(EquipamientoEvent::class);
        $this->assertCount(1, Equipamiento::all());
        $equipamiento = Equipamiento::first();
        $this->assertEquals($equipamiento->nombre, 'qweqwe');
        $this->assertEquals($equipamiento->caracteristicas, 'qweqwe');
        $this->assertEquals($equipamiento->funcion, 'qweqwe');
        $this->assertEquals($equipamiento->publicar, 1);
        Storage::assertExists($equipamiento->imagen);
    }

    /** @test */
    public function update_equipamiento()
    {
        Event::fake();
        Storage::fake();
        $equipamiento = factory(Equipamiento::class)->create();
        $imagen = UploadedFile::fake()->create('imagen.jpg', 2000);
        Storage::put('/public/equipos/imagen.jpg', file_get_contents($imagen));
        $equipamiento->imagen = '/public/equipos/imagen.jpg';
        $equipamiento->save();
        $response = $this->actingAs($this->user)
            ->putJson('/equipamientos/' . $equipamiento->id, [
                'nombre' => 'qweqwe', 'caracteristicas' => 'qweqwe',
                'funcion' => 'qweqwe',  'imagen' => $this->imagen, 'publicar' => 1
            ]);
        $response->assertStatus(200);
        Storage::assertMissing($equipamiento->imagen);
        Event::assertDispatched(EquipamientoEvent::class);
        $this->assertCount(1, Equipamiento::all());
        $equipamiento = $equipamiento->fresh();
        $this->assertEquals($equipamiento->nombre, 'qweqwe');
        $this->assertEquals($equipamiento->caracteristicas, 'qweqwe');
        $this->assertEquals($equipamiento->funcion, 'qweqwe');
        $this->assertEquals($equipamiento->publicar, 1);
        Storage::assertExists($equipamiento->imagen);
    }

    /** @test */
    public function delete_equipamiento()
    {
        Event::fake();
        Storage::fake();
        $equipamiento = factory(Equipamiento::class)->create();
        $imagen = UploadedFile::fake()->create('imagen.jpg', 2000);
        Storage::put('/public/equipos/imagen.jpg', file_get_contents($imagen));
        $equipamiento->imagen = '/public/equipos/imagen.jpg';
        $equipamiento->save();
        $response = $this->actingAs($this->user)
            ->deleteJson('/equipamientos/' . $equipamiento->id);
        $response->assertStatus(200);
        Event::assertDispatched(EquipamientoEvent::class);
        $this->assertCount(0, Equipamiento::all());
        Storage::assertMissing($equipamiento->imagen);
    }

    /** @test */
    public function publicar_equipamiento()
    {
        Event::fake();
        $equipamiento = factory(Equipamiento::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson('/equipamientos/publicar/' . $equipamiento->id, ['publicar' => 1]);
        $response->assertStatus(200);
        $equipamiento = $equipamiento->fresh();
        Event::assertDispatched(EquipamientoEvent::class);
        $this->assertCount(1, Equipamiento::all());
        $this->assertEquals($equipamiento->publicar, 1);
    }
}
