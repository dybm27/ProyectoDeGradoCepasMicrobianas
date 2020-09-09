<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CambiarPassVerificarEmail extends TestCase
{
    /** @test */
    public function showLinkRequestForm()
    {
        $this->seed(ImgLoginSeeder::class);

        $response =  $this->get('/contraseña/from-restablecer');
        $response->assertOk();
        $response->assertViewIs('resetPass');
        $imagenes = ImagenLogin::where('mostrar', 1)->get();
        $this->assertCount(1, $imagenes);
        $response->assertViewHas('imagenes', $imagenes);
    }
    /** @test */
    public function sendResetLinkEmail_validarEmail1()
    {
        $response =  $this->post('/contraseña/enviar-email');
        $response->assertStatus(422);
        $response->assertSessionHasErrors(['email']);
    }

}
