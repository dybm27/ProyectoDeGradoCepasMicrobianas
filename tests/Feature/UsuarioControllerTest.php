<?php

namespace Tests\Feature;

use App\Events\UsuarioEvent;
use App\Notifications\VerifyEmailNotification;
use App\Permiso;
use App\Seguimiento;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class UsuarioControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $permiso1 = Permiso::where('nombre', 'agregar-usuario')->first();
        $permiso2 = Permiso::where('nombre', 'editar-usuario')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-usuario')->first();
        $this->user->rol->permisos()->sync([$permiso1->id, $permiso2->id, $permiso3->id]);
    }

    /** @test */
    public function validar_campos_usuario()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/usuario/agregar', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('email');
        $response->assertJsonValidationErrors('nombre');
        $response->assertJsonValidationErrors('pass');
        $response->assertJsonValidationErrors('rol');
        $response->assertJsonValidationErrors('imagen');
    }

    /** @test */
    public function store_usuario()
    {
        $this->withoutExceptionHandling();
        Event::fake();
        Storage::fake();
        Notification::fake();
        $cant = User::all()->count();
        $response = $this->actingAs($this->user)
            ->postJson('/usuario/agregar', [
                'email' => 'asdasd', 'nombre' => 'asdasd',
                'pass' => 'asdasd', 'rol' => 2, 'imagen' => $this->imagen
            ]);
        $response->assertStatus(201);
        Event::assertDispatched(UsuarioEvent::class);
        $usuario = User::latest('id')->first();
        Storage::assertExists($usuario->avatar);
        $this->assertCount(1, Seguimiento::all());
        $this->assertEquals($usuario->name, 'Asdasd');
        $this->assertEquals($usuario->email, 'asdasd');
        $this->assertEquals($usuario->rol_id, 2);
        $this->assertEquals(true, Hash::check('asdasd', $usuario->password));
        $this->assertCount($cant + 1, User::all());
        Notification::assertSentTo(
            [$usuario],
            VerifyEmailNotification::class
        );
    }

    /** @test */
    public function verificar_update_usuario()
    {
        $response = $this->actingAs($this->user)
            ->putJson('/usuario/editar/' . $this->user->id, [
                'email' => 'asdasd', 'nombre' => 'asdasd',
                'pass' => 'asdasd', 'rol' => 2, 'imagen' => $this->imagen
            ]);
        $response->assertStatus(200);
        $this->assertEquals($response->getContent(), 'negativo');
    }

    /** @test */
    public function update_usuario()
    {
        Notification::fake();
        Event::fake();
        Storage::fake();
        $imagen = UploadedFile::fake()->create('imagen.jpg', 21000);
        Storage::put('/public/usuarios/avatar_img/imagen.jpg', file_get_contents($imagen));
        $usuario = User::first();
        $usuario->avatar = '/public/usuarios/avatar_img/imagen.jpg';
        $usuario->save();

        $response = $this->actingAs($this->user)
            ->putJson('/usuario/editar/' . $usuario->id, [
                'email' => 'asdasd', 'nombre' => 'asdasd',
                'pass' => 'asdasd', 'rol' => 2, 'imagen' => $this->imagen
            ]);
        $response->assertStatus(200);
        Storage::assertMissing($this->user->avatar);
        Event::assertDispatched(UsuarioEvent::class);
        $usuario = $usuario->fresh();
        Storage::assertExists($usuario->avatar);
        $this->assertCount(1, Seguimiento::all());
        $this->assertEquals($usuario->name, 'Asdasd');
        $this->assertEquals($usuario->email, 'asdasd');
        $this->assertEquals($usuario->rol_id, 2);
        $this->assertEquals(true, Hash::check('asdasd', $usuario->password));
        Notification::assertSentTo(
            [$usuario],
            VerifyEmailNotification::class
        );
    }

    /** @test */
    public function verificar_destroy_usuario()
    {
        $response = $this->actingAs($this->user)
            ->deleteJson('/usuario/eliminar/' . $this->user->id);
        $response->assertStatus(200);
        $this->assertEquals($response->getContent(), 'negativo');
    }

    /** @test */
    public function destroy_usuario()
    {
        Event::fake();
        Storage::fake();
        $cant = User::all()->count();
        $imagen = UploadedFile::fake()->create('imagen.jpg', 21000);
        Storage::put('/public/usuarios/avatar_img/imagen.jpg', file_get_contents($imagen));
        $usuario = User::first();
        $usuario->avatar = '/public/usuarios/avatar_img/imagen.jpg';
        $usuario->save();
        $response = $this->actingAs($this->user)
            ->deleteJson('/usuario/eliminar/' . $usuario->id);
        $response->assertStatus(200);
        Storage::assertMissing($usuario->avatar);
        Event::assertDispatched(UsuarioEvent::class);
        $this->assertCount(1, Seguimiento::all());
        $this->assertCount($cant - 1, User::all());
    }
}
