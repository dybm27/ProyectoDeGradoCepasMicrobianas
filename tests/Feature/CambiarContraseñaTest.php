<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CambiarContraseñaTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function validar_email()
    {
        $response = $this->post('contraseña/enviar-email', []);
        $response->assertStatus(302);
        $response->assertSessionHasErrors(['email' => 'El campo email es obligatorio.']);

        $response = $this->post('contraseña/enviar-email', ['email' => 'asdas']);
        $response->assertStatus(302);
        $response->assertSessionHasErrors(['email' => 'El campo email debe ser una dirección de correo válida.']);

        $response = $this->post('contraseña/enviar-email', ['email' => 'asd@qwe.com']);
        $response->assertStatus(302);
        $response->assertSessionHasErrors(['email' => 'No se ha encontrado un usuario con esa dirección de correo.']);
    }

    /** @test */
    public function enviar_email()
    {
        $response = $this->post('contraseña/enviar-email', ['email' => 'rafa@gmail.com']);
        $response->assertStatus(302);
        $response->assertSessionHas('status', '¡Recordatorio de contraseña enviado!');
    }
}
