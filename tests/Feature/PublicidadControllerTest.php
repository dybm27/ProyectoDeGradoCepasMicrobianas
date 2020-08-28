<?php

namespace Tests\Feature;

use App\Actividad;
use App\Events\ActividadEvent;
use App\Noticia;
use App\Events\NoticiaEvent;
use App\Events\NovedadEvent;
use App\Novedad;
use App\Permiso;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class PublicidadControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $permiso1 = Permiso::where('nombre', 'agregar-noticia')->first();
        $permiso2 = Permiso::where('nombre', 'editar-noticia')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-noticia')->first();
        $permiso1 = Permiso::where('nombre', 'agregar-novedad')->first();
        $permiso2 = Permiso::where('nombre', 'editar-novedad')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-novedad')->first();
        $permiso1 = Permiso::where('nombre', 'agregar-actividad')->first();
        $permiso2 = Permiso::where('nombre', 'editar-actividad')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-actividad')->first();
        $this->user->rol->permisos()->sync([$permiso1->id, $permiso2->id, $permiso3->id]);
    }

    //---------------- noticia -------------------------

    /** @test */
    public function validar_campos_noticia_publicidad()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/publicidad', ['tipo' => 'noticia']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('titulo');
        $response->assertJsonValidationErrors('link');
        $response->assertJsonValidationErrors('publicar');
        $response->assertJsonValidationErrors('imagen');
    }


    /** @test */
    public function validar_publicar_noticia_publicidad()
    {
        Event::fake();
        factory(Noticia::class, 5)->create(['publicar' => 1]);
        $response = $this->actingAs($this->user)
            ->postJson('/publicidad', [
                'titulo' => 'qweqwe', 'link' => 'qweqwe', 'imagen' => 'qweqwe', 'publicar' => 1,
                'tipo' => 'noticia', 'imagenesEditor' => '', 'imagenesGuardadas' => ''
            ]);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('publicar');
        $mensaje = $response->decodeResponseJson()['errors']['publicar'][0];
        $this->assertEquals("No es posible publicar la noticia", $mensaje);
    }

    /** @test */
    public function store_noticia_publicidad()
    {
        Event::fake();
        Storage::fake();
        $imagen = UploadedFile::fake()->create('imagen.jpg', 2000);
        $response = $this->actingAs($this->user)
            ->postJson('/publicidad', [
                'titulo' => 'qweqwe', 'link' => 'qweqwe', 'imagen' => $imagen, 'publicar' => 1,
                'tipo' => 'noticia', 'imagenesEditor' => '', 'imagenesGuardadas' => ''
            ]);
        $response->assertStatus(201);
        Event::assertDispatched(NoticiaEvent::class);
        $this->assertCount(1, Noticia::all());
        $noticia = Noticia::first();
        $this->assertEquals($noticia->titulo, 'qweqwe');
        $this->assertEquals($noticia->link, 'qweqwe');
        $this->assertEquals($noticia->publicar, 1);
        Storage::assertExists($noticia->imagen);
    }

    /** @test */
    public function update_noticia_publicidad()
    {
        Event::fake();
        Storage::fake();
        $noticia = factory(Noticia::class)->create();
        $imagen = UploadedFile::fake()->create('imagen.png', 2000);
        Storage::put('/public/publicidad/noticia/imagen.png', file_get_contents($imagen));
        $noticia->imagen = '/public/publicidad/noticia/imagen.png';
        $noticia->save();
        $response = $this->actingAs($this->user)
            ->putJson('/publicidad/' . $noticia->id, [
                'titulo' => 'qweqwe', 'link' => 'qweqwe', 'imagen' => $imagen, 'publicar' => 1,
                'tipo' => 'noticia', 'imagenesEditor' => '', 'imagenesGuardadas' => ''
            ]);
        $response->assertStatus(200);
        Storage::assertMissing($noticia->imagen);
        Event::assertDispatched(NoticiaEvent::class);
        $this->assertCount(1, Noticia::all());
        $noticia = $noticia->fresh();
        $this->assertEquals($noticia->titulo, 'qweqwe');
        $this->assertEquals($noticia->link, 'qweqwe');
        $this->assertEquals($noticia->publicar, 1);
        Storage::assertExists($noticia->imagen);
    }

    /** @test */
    public function delete_noticia_publicidad()
    {
        Event::fake();
        Storage::fake();
        $noticia = factory(Noticia::class)->create();
        $imagen = UploadedFile::fake()->create('imagen.png', 2000);
        Storage::put('/public/publicidad/noticia/imagen.png', file_get_contents($imagen));
        $noticia->imagen = '/public/publicidad/noticia/imagen.png';
        $noticia->save();
        $response = $this->actingAs($this->user)
            ->deleteJson('/publicidad/' . $noticia->id, ['tipo' => 'noticia']);
        $response->assertStatus(200);
        Event::assertDispatched(NoticiaEvent::class);
        $this->assertCount(0, Noticia::all());
        Storage::assertMissing($noticia->imagen);
    }

    /** @test */
    public function publicar_noticia_publicidad()
    {
        Event::fake();
        $noticia = factory(Noticia::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson('/publicidad/publicar/' . $noticia->id, ['publicar' => 1, 'tipo' => 'noticia']);
        $response->assertStatus(200);
        $noticia = $noticia->fresh();
        Event::assertDispatched(NoticiaEvent::class);
        $this->assertCount(1, Noticia::all());
        $this->assertEquals($noticia->publicar, 1);
    }

    //---------------- novedad -------------------------

    /** @test */
    public function validar_campos_novedad_publicidad()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/publicidad', ['tipo' => 'novedad']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('titulo');
        $response->assertJsonValidationErrors('link');
        $response->assertJsonValidationErrors('publicar');
        $response->assertJsonValidationErrors('imagen');
    }


    /** @test */
    public function validar_publicar_novedad_publicidad()
    {
        Event::fake();
        factory(Novedad::class, 7)->create(['publicar' => 1]);
        $response = $this->actingAs($this->user)
            ->postJson('/publicidad', [
                'titulo' => 'qweqwe', 'link' => 'qweqwe', 'imagen' => 'qweqwe', 'publicar' => 1,
                'tipo' => 'novedad', 'imagenesEditor' => [], 'imagenesGuardadas' => []
            ]);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('publicar');
        $mensaje = $response->decodeResponseJson()['errors']['publicar'][0];
        $this->assertEquals("No es posible publicar la novedad", $mensaje);
    }

    /** @test */
    public function store_novedad_publicidad()
    {
        Event::fake();
        Storage::fake();
        $response = $this->actingAs($this->user)
            ->postJson('/publicidad', [
                'titulo' => 'qweqwe', 'link' => 'qweqwe', 'imagen' => $this->imagen, 'publicar' => 1,
                'tipo' => 'novedad', 'imagenesEditor' => [], 'imagenesGuardadas' => []
            ]);
        $response->assertStatus(201);
        Event::assertDispatched(NovedadEvent::class);
        $this->assertCount(1, Novedad::all());
        $novedad = Novedad::first();
        $this->assertEquals($novedad->titulo, 'qweqwe');
        $this->assertEquals($novedad->link, 'qweqwe');
        $this->assertEquals($novedad->publicar, 1);
        Storage::assertExists($novedad->imagen);
    }

    /** @test */
    public function update_novedad_publicidad()
    {
        $this->withoutExceptionHandling();
        Event::fake();
        Storage::fake();
        $novedad = factory(Novedad::class)->create();
        $imagen = UploadedFile::fake()->create('imagen.png', 2000);
        Storage::put('/public/publicidad/novedad/imagen.png', file_get_contents($imagen));
        $novedad->imagen = '/public/publicidad/novedad/imagen.png';
        $novedad->save();
        $response = $this->actingAs($this->user)
            ->putJson('/publicidad/' . $novedad->id, [
                'titulo' => 'qweqwe', 'link' => 'qweqwe', 'imagen' => $this->imagen, 'publicar' => 1,
                'tipo' => 'novedad', 'imagenesEditor' => [], 'imagenesGuardadas' => []
            ]);
        $response->assertStatus(200);
        Storage::assertMissing($novedad->imagen);
        Event::assertDispatched(NovedadEvent::class);
        $this->assertCount(1, Novedad::all());
        $novedad = $novedad->fresh();
        $this->assertEquals($novedad->titulo, 'qweqwe');
        $this->assertEquals($novedad->link, 'qweqwe');
        $this->assertEquals($novedad->publicar, 1);
        Storage::assertExists($novedad->imagen);
    }

    /** @test */
    public function delete_novedad_publicidad()
    {
        Event::fake();
        Storage::fake();
        $novedad = factory(Novedad::class)->create();
        $imagen = UploadedFile::fake()->create('imagen.png', 2000);
        Storage::put('/public/publicidad/novedad/imagen.png', file_get_contents($imagen));
        $novedad->imagen = '/public/publicidad/novedad/imagen.png';
        $novedad->save();
        $response = $this->actingAs($this->user)
            ->deleteJson('/publicidad/' . $novedad->id, ['tipo' => 'novedad']);
        $response->assertStatus(200);
        Event::assertDispatched(NovedadEvent::class);
        $this->assertCount(0, Novedad::all());
        Storage::assertMissing($novedad->imagen);
    }

    /** @test */
    public function publicar_novedad_publicidad()
    {
        Event::fake();
        $novedad = factory(Novedad::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson('/publicidad/publicar/' . $novedad->id, ['publicar' => 1, 'tipo' => 'novedad']);
        $response->assertStatus(200);
        $novedad = $novedad->fresh();
        Event::assertDispatched(NovedadEvent::class);
        $this->assertCount(1, Novedad::all());
        $this->assertEquals($novedad->publicar, 1);
    }

    //---------------- actividad -------------------------

    /** @test */
    public function validar_campos_actividad_publicidad()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/publicidad', ['tipo' => 'actividad']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('titulo');
        $response->assertJsonValidationErrors('link');
        $response->assertJsonValidationErrors('fecha');
        $response->assertJsonValidationErrors('lugar');
        $response->assertJsonValidationErrors('publicar');
        $response->assertJsonValidationErrors('imagen');
    }


    /** @test */
    public function validar_publicar_actividad_publicidad()
    {
        Event::fake();
        factory(Actividad::class, 7)->create(['publicar' => 1]);
        $response = $this->actingAs($this->user)
            ->postJson('/publicidad', [
                'titulo' => 'qweqwe', 'link' => 'qweqwe', 'imagen' => 'qweqwe', 'publicar' => 1,
                'tipo' => 'actividad', 'fecha' => 'qweqwe', 'lugar' => 'qweqwe', 'imagenesEditor' => [],
                'imagenesGuardadas' => []
            ]);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('publicar');
        $mensaje = $response->decodeResponseJson()['errors']['publicar'][0];
        $this->assertEquals("No es posible publicar la actividad", $mensaje);
    }

    /** @test */
    public function store_actividad_publicidad()
    {
        Event::fake();
        Storage::fake();
        $response = $this->actingAs($this->user)
            ->postJson('/publicidad', [
                'titulo' => 'qweqwe', 'link' => 'qweqwe', 'imagen' => $this->imagen, 'publicar' => 1,
                'tipo' => 'actividad', 'fecha' => 'qweqwe', 'lugar' => 'qweqwe', 'imagenesEditor' => [],
                'imagenesGuardadas' => []
            ]);
        $response->assertStatus(201);
        Event::assertDispatched(ActividadEvent::class);
        $this->assertCount(1, Actividad::all());
        $actividad = Actividad::first();
        $this->assertEquals($actividad->titulo, 'qweqwe');
        $this->assertEquals($actividad->link, 'qweqwe');
        $this->assertEquals($actividad->fecha, 'qweqwe');
        $this->assertEquals($actividad->lugar, 'qweqwe');
        $this->assertEquals($actividad->publicar, 1);
        Storage::assertExists($actividad->imagen);
    }

    /** @test */
    public function update_actividad_publicidad()
    {
        Event::fake();
        Storage::fake();
        $actividad = factory(Actividad::class)->create();
        $imagen = UploadedFile::fake()->create('imagen.png', 2000);
        Storage::put('/public/publicidad/actividad/imagen.png', file_get_contents($imagen));
        $actividad->imagen = '/public/publicidad/actividad/imagen.png';
        $actividad->save();
        $response = $this->actingAs($this->user)
            ->putJson('/publicidad/' . $actividad->id, [
                'titulo' => 'qweqwe', 'link' => 'qweqwe', 'imagen' => $this->imagen, 'publicar' => 1,
                'tipo' => 'actividad', 'fecha' => 'qweqwe', 'lugar' => 'qweqwe', 'imagenesEditor' => [],
                'imagenesGuardadas' => []
            ]);
        $response->assertStatus(200);
        Storage::assertMissing($actividad->imagen);
        Event::assertDispatched(ActividadEvent::class);
        $this->assertCount(1, Actividad::all());
        $actividad = $actividad->fresh();
        $this->assertEquals($actividad->titulo, 'qweqwe');
        $this->assertEquals($actividad->link, 'qweqwe');
        $this->assertEquals($actividad->fecha, 'qweqwe');
        $this->assertEquals($actividad->lugar, 'qweqwe');
        $this->assertEquals($actividad->publicar, 1);
        Storage::assertExists($actividad->imagen);
    }

    /** @test */
    public function delete_actividad_publicidad()
    {
        Event::fake();
        Storage::fake();
        $actividad = factory(Actividad::class)->create();
        $imagen = UploadedFile::fake()->create('imagen.png', 2000);
        Storage::put('/public/publicidad/actividad/imagen.png', file_get_contents($imagen));
        $actividad->imagen = '/public/publicidad/actividad/imagen.png';
        $actividad->save();
        $response = $this->actingAs($this->user)
            ->deleteJson('/publicidad/' . $actividad->id, ['tipo' => 'actividad']);
        $response->assertStatus(200);
        Event::assertDispatched(ActividadEvent::class);
        $this->assertCount(0, Actividad::all());
        Storage::assertMissing($actividad->imagen);
    }

    /** @test */
    public function publicar_actividad_publicidad()
    {
        Event::fake();
        $actividad = factory(Actividad::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson('/publicidad/publicar/' . $actividad->id, ['publicar' => 1, 'tipo' => 'actividad']);
        $response->assertStatus(200);
        $actividad = $actividad->fresh();
        Event::assertDispatched(ActividadEvent::class);
        $this->assertCount(1, Actividad::all());
        $this->assertEquals($actividad->publicar, 1);
    }
}
