<?php

namespace Tests\Feature;

use App\Documento;
use App\Events\ProyectoEvent;
use App\Permiso;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Storage;
use SitioWebSeeder;
use Tests\TestCase;

class DocumentoControllerProyectoTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(SitioWebSeeder::class);

        $permiso1 = Permiso::where('nombre', 'agregar-proyecto')->first();
        $permiso2 = Permiso::where('nombre', 'editar-proyecto')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-proyecto')->first();
        $this->user->rol->permisos()->sync([$permiso1->id, $permiso2->id, $permiso3->id]);
    }

    /** @test */
    public function validar_campos_proyecto_documento()
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
    public function store_proyecto_documento()
    {
        Event::fake();
        Storage::fake();
        $archivo = UploadedFile::fake()->create('document.pdf', 20000, 'application/pdf');
        $response = $this->actingAs($this->user)
            ->postJson('/documentos', [
                'nombre_documento' => 'qweqwe', 'nombre_autor' => 'qweqwe',
                'descripcion' => 'qweqwe',  'imagen' => $this->imagen,
                'archivo' => $archivo, 'tipo' => 'proyecto', 'publicar' => 1
            ]);
        $response->assertStatus(201);
        Event::assertDispatched(ProyectoEvent::class);
        $this->assertCount(1, Documento::all());
        $proyecto = Documento::first();
        $this->assertEquals($proyecto->nombre_documento, 'qweqwe');
        $this->assertEquals($proyecto->nombre_autor, 'qweqwe');
        $this->assertEquals($proyecto->descripcion, 'qweqwe');
        $this->assertEquals($proyecto->tipo_documento_id, 1);
        $this->assertEquals($proyecto->publicar, 1);
        Storage::assertExists($proyecto->imagen);
        Storage::assertExists($proyecto->ruta);
    }

    /** @test */
    public function update_proyecto_documento()
    {
        $this->withoutExceptionHandling();
        Event::fake();
        Storage::fake();
        $archivo = UploadedFile::fake()->create('document.pdf', 20000, 'application/pdf');
        Storage::put('/public/documentos/1/archivos/qweqwe.pdf', $archivo);
        $proyecto = factory(Documento::class)->create(['tipo_documento_id' => 1]);
        $response = $this->actingAs($this->user)
            ->putJson('/documentos/' . $proyecto->id, [
                'nombre_documento' => 'asdads', 'nombre_autor' => 'qweqwe',
                'descripcion' => 'qweqwe',  'imagen' => $this->imagen, 'publicar' => 1
            ]);
        $response->assertStatus(200);
        Storage::assertMissing($proyecto->imagen);
        Event::assertDispatched(ProyectoEvent::class);
        $this->assertCount(1, Documento::all());
        $proyecto = $proyecto->fresh();
        $this->assertEquals($proyecto->nombre_documento, 'asdads');
        $this->assertEquals($proyecto->nombre_autor, 'qweqwe');
        $this->assertEquals($proyecto->descripcion, 'qweqwe');
        $this->assertEquals($proyecto->tipo_documento_id, 1);
        $this->assertEquals($proyecto->publicar, 1);
        Storage::assertExists($proyecto->imagen);
        Storage::assertExists($proyecto->ruta);
    }

    /** @test */
    public function delete_proyecto_documento()
    {
        Event::fake();
        Storage::fake();
        $proyecto = factory(Documento::class)->create(['tipo_documento_id' => 1]);
        $response = $this->actingAs($this->user)
            ->deleteJson('/documentos/' . $proyecto->id);
        $response->assertStatus(200);
        Event::assertDispatched(ProyectoEvent::class);
        $this->assertCount(0, Documento::all());
        Storage::assertMissing($proyecto->imagen);
        Storage::assertMissing($proyecto->ruta);
    }

    /** @test */
    public function publicar_proyecto_documento()
    {
        Event::fake();
        $proyecto = factory(Documento::class)->create(['tipo_documento_id' => 1]);
        $response = $this->actingAs($this->user)
            ->putJson('/documentos/publicar/' . $proyecto->id, ['publicar' => 1]);
        $response->assertStatus(200);
        $proyecto = $proyecto->fresh();
        Event::assertDispatched(ProyectoEvent::class);
        $this->assertCount(1, Documento::all());
        $this->assertEquals($proyecto->publicar, 1);
    }
}
