<?php

namespace Tests\Feature;

use App\Investigador;
use App\Events\InvestigadorEvent;
use App\Permiso;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Storage;
use SitioWebSeeder;
use Tests\TestCase;

class InvestigadoresControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(SitioWebSeeder::class);

        $permiso1 = Permiso::where('nombre', 'agregar-investigador')->first();
        $permiso2 = Permiso::where('nombre', 'editar-investigador')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-investigador')->first();
        $this->user->rol->permisos()->sync([$permiso1->id, $permiso2->id, $permiso3->id]);
    }

    /** @test */
    public function validar_campos_investigador()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/investigadores', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('email');
        $response->assertJsonValidationErrors('nombres');
        $response->assertJsonValidationErrors('apellidos');
        $response->assertJsonValidationErrors('nivel_estudio');
        $response->assertJsonValidationErrors('cargo');
        $response->assertJsonValidationErrors('publicar');
        $response->assertJsonValidationErrors('imagen');
    }

    /** @test */
    public function store_investigador()
    {
        Event::fake();
        Storage::fake();
        $response = $this->actingAs($this->user)
            ->postJson('/investigadores', [
                'email' => 'qweqwe', 'nombres' => 'qweqwe', 'apellidos' => 'qweqwe',
                'nivel_estudio' => 'qweqwe', 'cargo' => 'qweqwe', 'imagen' => $this->imagen,
                'publicar' => 1
            ]);
        $response->assertStatus(201);
        Event::assertDispatched(InvestigadorEvent::class);
        $this->assertCount(1, Investigador::all());
        $investigador = Investigador::first();
        $this->assertEquals($investigador->email, 'qweqwe');
        $this->assertEquals($investigador->nombres, 'Qweqwe');
        $this->assertEquals($investigador->apellidos, 'Qweqwe');
        $this->assertEquals($investigador->nivel_estudio, 'Qweqwe');
        $this->assertEquals($investigador->cargo, 'Qweqwe');
        $this->assertEquals($investigador->publicar, 1);
        Storage::assertExists($investigador->imagen);
    }

    /** @test */
    public function update_investigador()
    {
        Event::fake();
        Storage::fake();
        $imagen = UploadedFile::fake()->create('imagen.jpg', 2000);
        $investigador = factory(Investigador::class)->create();
        Storage::put('/public/investigadores/' . $investigador->nombres . '.jpg', file_get_contents($imagen));
        $investigador->imagen = '/public/investigadores/' . $investigador->nombres . '.jpg';
        $investigador->save();
        $response = $this->actingAs($this->user)
            ->putJson('/investigadores/' . $investigador->id, [
                'email' => 'qweqwe', 'nombres' => 'qweqwe', 'apellidos' => 'qweqwe',
                'nivel_estudio' => 'qweqwe', 'cargo' => 'qweqwe', 'imagen' => $this->imagen,
                'publicar' => 1
            ]);
        $response->assertStatus(200);
        Storage::assertMissing($investigador->imagen);
        Event::assertDispatched(InvestigadorEvent::class);
        $this->assertCount(1, Investigador::all());
        $investigador = $investigador->fresh();
        $this->assertEquals($investigador->email, 'qweqwe');
        $this->assertEquals($investigador->nombres, 'Qweqwe');
        $this->assertEquals($investigador->apellidos, 'Qweqwe');
        $this->assertEquals($investigador->nivel_estudio, 'Qweqwe');
        $this->assertEquals($investigador->cargo, 'Qweqwe');
        $this->assertEquals($investigador->publicar, 1);
        Storage::assertExists($investigador->imagen);
    }

    /** @test */
    public function delete_investigador()
    {
        Event::fake();
        Storage::fake();
        $imagen = UploadedFile::fake()->create('imagen.jpg', 2000);
        $investigador = factory(Investigador::class)->create();
        Storage::put('/public/investigadores/' . $investigador->nombres . '.jpg', file_get_contents($imagen));
        $investigador->imagen = '/public/investigadores/' . $investigador->nombres . '.jpg';
        $investigador->save();
        $response = $this->actingAs($this->user)
            ->deleteJson('/investigadores/' . $investigador->id);
        $response->assertStatus(200);
        Event::assertDispatched(InvestigadorEvent::class);
        $this->assertCount(0, Investigador::all());
        Storage::assertMissing($investigador->imagen);
    }

    /** @test */
    public function publicar_investigador()
    {
        Event::fake();
        $investigador = factory(Investigador::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson('/investigadores/publicar/' . $investigador->id, ['publicar' => 1]);
        $response->assertStatus(200);
        $investigador = $investigador->fresh();
        Event::assertDispatched(InvestigadorEvent::class);
        $this->assertCount(1, Investigador::all());
        $this->assertEquals($investigador->publicar, 1);
    }
}
