<?php

namespace Tests\Feature;

use App\Evento;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use Tests\TestCase;

class CalendarioTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function validar_campos_evento()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/eventos/agregar', []);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors('titulo');
        $response->assertJsonValidationErrors('fecha');
        $response->assertJsonValidationErrors('descripcion');
    }

    /** @test */
    public function store_evento()
    {
        $fecha = Date('Y-m-d H:i:s');
        $response = $this->actingAs($this->user)
            ->postJson('/eventos/agregar', [
                'titulo' => 'qweqew', 'fecha' => $fecha,
                'color' => 'asdasd', 'descripcion' => 'asdasd'
            ]);
        $response->assertStatus(201);
        $this->assertCount(1, Evento::all());
        $evento = Evento::first();
        $this->assertEquals($evento->titulo, 'qweqew');
        $this->assertEquals($evento->fecha, $fecha);
        $this->assertEquals($evento->descripcion, 'asdasd');
    }

    /** @test */
    public function update_evento()
    {
        $evento = factory(Evento::class)->create();
        $fecha = Date('Y-m-d H:i:s');
        $response = $this->actingAs($this->user)
            ->putJson('/eventos/editar/' . $evento->id, [
                'titulo' => 'qweqew', 'fecha' =>  $fecha,
                'color' => 'asdasd', 'descripcion' => 'asdasd'
            ]);
        $response->assertStatus(200);
        $this->assertCount(1, Evento::all());
        $evento = $evento->fresh();
        $this->assertEquals($evento->titulo, 'qweqew');
        $this->assertEquals($evento->fecha,  $fecha);
        $this->assertEquals($evento->descripcion, 'asdasd');
    }

    /** @test */
    public function delete_evento()
    {
        $evento = factory(Evento::class)->create();
        $response = $this->actingAs($this->user)
            ->deleteJson('/eventos/eliminar/' . $evento->id);
        $response->assertStatus(200);
        $this->assertCount(0, Evento::all());
    }
}
