<?php

namespace Tests\Feature;

use App\Documento;
use App\Events\PublicacionEvent;
use App\Permiso;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Storage;
use SitioWebSeeder;
use Tests\TestCase;

class DocumentoControllerPublicacionTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(SitioWebSeeder::class);

        $permiso1 = Permiso::where('nombre', 'agregar-publicacion')->first();
        $permiso2 = Permiso::where('nombre', 'editar-publicacion')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-publicacion')->first();
        $this->user->rol->permisos()->sync([$permiso1->id, $permiso2->id, $permiso3->id]);
    }

    /** @test */
    public function validar_campos_publicacion_documento()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/documentos', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre_documento');
        $response->assertJsonValidationErrors('nombre_autor');
        $response->assertJsonValidationErrors('descripcion');
        $response->assertJsonValidationErrors('imagen');
        $response->assertJsonValidationErrors('archivo');
        $response->assertJsonValidationErrors('tipo');
    }

    /** @test */
    public function store_publicacion_documento()
    {
        Event::fake();
        Storage::fake();
        $archivo = UploadedFile::fake()->create('document.pdf', 20000, 'application/pdf');
        $response = $this->actingAs($this->user)
            ->postJson('/documentos', [
                'nombre_documento' => 'qweqwe', 'nombre_autor' => 'qweqwe',
                'descripcion' => 'qweqwe',  'imagen' => $this->imagen,
                'archivo' => $archivo, 'tipo' => 'publicacion', 'publicar' => 1
            ]);
        $response->assertStatus(201);
        Event::assertDispatched(PublicacionEvent::class);
        $this->assertCount(1, Documento::all());
        $publicacion = Documento::first();
        $this->assertEquals($publicacion->nombre_documento, 'qweqwe');
        $this->assertEquals($publicacion->nombre_autor, 'qweqwe');
        $this->assertEquals($publicacion->descripcion, 'qweqwe');
        $this->assertEquals($publicacion->tipo_documento_id, 2);
        $this->assertEquals($publicacion->publicar, 1);
        Storage::assertExists($publicacion->imagen);
        Storage::assertExists($publicacion->ruta);
    }

    /** @test */
    public function update_publicacion_documento()
    {
        $this->withoutExceptionHandling();
        Event::fake();
        Storage::fake();
        $archivo = UploadedFile::fake()->create('document.pdf', 20000, 'application/pdf');
        Storage::put('/public/documentos/2/archivos/qweqwe.pdf', $archivo);
        $publicacion = factory(Documento::class)->create(['tipo_documento_id' => 2]);
        $response = $this->actingAs($this->user)
            ->putJson('/documentos/' . $publicacion->id, [
                'nombre_documento' => 'asdads', 'nombre_autor' => 'qweqwe',
                'descripcion' => 'qweqwe',  'imagen' => $this->imagen, 'publicar' => 1
            ]);
        $response->assertStatus(200);
        Storage::assertMissing($publicacion->imagen);
        Event::assertDispatched(PublicacionEvent::class);
        $this->assertCount(1, Documento::all());
        $publicacion = $publicacion->fresh();
        $this->assertEquals($publicacion->nombre_documento, 'asdads');
        $this->assertEquals($publicacion->nombre_autor, 'qweqwe');
        $this->assertEquals($publicacion->descripcion, 'qweqwe');
        $this->assertEquals($publicacion->tipo_documento_id, 2);
        $this->assertEquals($publicacion->publicar, 1);
        Storage::assertExists($publicacion->imagen);
        Storage::assertExists($publicacion->ruta);
    }

    /** @test */
    public function delete_publicacion_documento()
    {
        Event::fake();
        Storage::fake();
        $publicacion = factory(Documento::class)->create(['tipo_documento_id' => 2]);
        $response = $this->actingAs($this->user)
            ->deleteJson('/documentos/' . $publicacion->id);
        $response->assertStatus(200);
        Event::assertDispatched(PublicacionEvent::class);
        $this->assertCount(0, Documento::all());
        Storage::assertMissing($publicacion->imagen);
        Storage::assertMissing($publicacion->ruta);
    }

    /** @test */
    public function publicar_publicacion_documento()
    {
        Event::fake();
        $publicacion = factory(Documento::class)->create(['tipo_documento_id' => 2]);
        $response = $this->actingAs($this->user)
            ->putJson('/documentos/publicar/' . $publicacion->id, ['publicar' => 1]);
        $response->assertStatus(200);
        $publicacion = $publicacion->fresh();
        Event::assertDispatched(PublicacionEvent::class);
        $this->assertCount(1, Documento::all());
        $this->assertEquals($publicacion->publicar, 1);
    }
}
