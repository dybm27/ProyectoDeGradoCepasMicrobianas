<?php

namespace Tests\Feature;

use App\Rol;
use App\Events\RolEvent;
use App\Permiso;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Storage;
use SitioWebSeeder;
use Tests\TestCase;

class RolControllerTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function validar_campo_nombre_rol()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/rol/agregar', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function validar_nombre_unique_rol()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/rol/agregar', ["nombre" => "Super Administrador"]);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
        $this->assertEquals(
            $response->decodeResponseJson()['errors']['nombre'][0],
            'Ya se encuentra registrado un Rol con ese nombre.'
        );
    }

    /** @test */
    public function store_rol()
    {
        $this->withoutExceptionHandling();
        Event::fake();
        $cantidad = Rol::all()->count();
        $response = $this->actingAs($this->user)
            ->postJson('/rol/agregar', ['nombre' => 'qweqwe']);
        $response->assertStatus(201);
        Event::assertDispatched(RolEvent::class);
        $rol = Rol::latest('id')->first();
        $this->assertEquals($rol->nombre, 'Qweqwe');
        $this->assertCount($cantidad + 1, Rol::all());
    }

    /** @test */
    public function update_rol()
    {
        Event::fake();
        $rol = Rol::first();
        $response = $this->actingAs($this->user)
            ->putJson('/rol/editar/' .  $rol->id, ['nombre' => 'qweqwe']);
        $response->assertStatus(200);
        Event::assertDispatched(RolEvent::class);
        $rol = $rol->fresh();
        $this->assertEquals($rol->nombre, 'Qweqwe');
    }

    /** @test */
    public function verificar_delete_rol()
    {
        Event::fake();
        $rol = Rol::first();
        $response = $this->actingAs($this->user)
            ->deleteJson('/rol/eliminar/' .  $rol->id);
        $response->assertStatus(200);
        $this->assertEquals($response->getContent(), 'negativo');
    }

    /** @test */
    public function delete_rol()
    {
        Event::fake();
        $cantidad = Rol::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson('/rol/eliminar/2');
        $response->assertStatus(200);
        Event::assertDispatched(RolEvent::class);
        $this->assertCount($cantidad - 1, Rol::all());
    }
}
