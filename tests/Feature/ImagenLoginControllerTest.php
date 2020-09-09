<?php

namespace Tests\Feature;

use App\Events\ImagenesLoginEvent;
use App\ImagenLogin;
use App\Permiso;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Storage;
use ImgLoginSeeder;
use Tests\TestCase;

class ImagenLoginControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(ImgLoginSeeder::class);

        $permiso = Permiso::where('nombre', 'editar-imglogin')->first();
        $this->user->rol->permisos()->sync($permiso->id);
    }

    /** @test */
    public function verificar_validacion_de_campos_imagen_login()
    {
        $response = $this->actingAs($this->user)
            ->putJson('/login/imagen/1', []);

        $response->assertStatus(422);

        $response->assertJsonValidationErrors('titulo');
        $response->assertJsonValidationErrors('descripcion');
        $response->assertJsonValidationErrors('imagen');
        $response->assertJsonValidationErrors('mostrar');
    }

    /** @test */
    public function validacion_de_campo_mostrar_imagen_login()
    {
        $response = $this->actingAs($this->user)
            ->putJson('/login/imagen/1', [
                'titulo' => 'qweqwe', 'descripcion' => 'qweqwe', 'imagen' => 'qweqwe', 'mostrar' => 0
            ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors('mostrar');
        $mensaje = $response->decodeResponseJson()['errors']['mostrar'][0];
        $this->assertEquals("Debe haber minimo una imagen para mostrar.", $mensaje);
    }

    /** @test */
    public function update_imagen_login()
    {
        Storage::fake();
        Event::fake();
        $imgLogin = ImagenLogin::first();
        $imagen = UploadedFile::fake()->create('imagen.jpg');
        $response = $this->actingAs($this->user)->put('/login/imagen/' . $imgLogin->id, [
            'titulo' => 'qweqwe', 'descripcion' => 'qweqwe', 'imagen' => $imagen, 'mostrar' => 1
        ]);
        $response->assertStatus(200);
        Event::assertDispatched(ImagenesLoginEvent::class);
        $imgLogin = $imgLogin->fresh();
        $this->assertEquals($imgLogin->titulo, 'qweqwe');
        $this->assertEquals($imgLogin->descripcion, 'qweqwe');
        $this->assertEquals($imgLogin->mostrar, 1);
        Storage::assertExists($imgLogin->imagen);
    }
}
