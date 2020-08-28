<?php

namespace Tests\Feature;

use App\User;
use App\Events\UsuarioEvent;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class PerfilControllerTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function cambiar_nombre_perfil()
    {
        Event::fake();
        Storage::fake();
        $response = $this->actingAs($this->user)
            ->putJson('/perfil/cambiar-nombre', ['nombre' => 'qweqwe']);
        $response->assertStatus(200);
        Event::assertDispatched(UsuarioEvent::class);
        $this->assertEquals($this->user->name, 'Qweqwe');
    }

    /** @test */
    public function cambiar_imagen_perfil()
    {
        $this->withoutExceptionHandling();
        Event::fake();
        Storage::fake();
        $imagen = UploadedFile::fake()->create('imagen.png', 2000);
        Storage::put('/public/usuarios/avatar_img/imagen.png', file_get_contents($imagen));
        $this->user->avatar = '/public/usuarios/avatar_img/imagen.png';
        $response = $this->actingAs($this->user)
            ->putJson('/perfil/cambiar-imagen', ['imagen' => $this->imagen]);
        $response->assertStatus(200);
        Storage::assertMissing('/public/usuarios/avatar_img/imagen.png');
        Event::assertDispatched(UsuarioEvent::class);
        Storage::assertExists($this->user->avatar);
    }

    /** @test */
    public function cambiar_contraseña_perfil()
    {
        Storage::fake();
        $response = $this->actingAs($this->user)
            ->putJson('/perfil/cambiar-contraseña/', ['pass' => '12345678']);
        $response->assertStatus(200);
        $this->assertEquals(true, Hash::check('12345678', $this->user->password));
    }
}
