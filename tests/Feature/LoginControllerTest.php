<?php

namespace Tests\Feature;

use AdminSeeder;
use App\ImagenLogin;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use ImgLoginSeeder;
use PermisosSeeder;
use RolesSeeder;
use Tests\TestCase;

class LoginControllerTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function mostrar_form_login()
    {
        $this->seed(ImgLoginSeeder::class);

        $response =  $this->get('/');
        $response->assertOk();
        $response->assertViewIs('login');
        $imagenes = ImagenLogin::where('mostrar', 1)->get();
        $this->assertCount(1, $imagenes);
        $response->assertViewHas('imagenes', $imagenes);
    }

    /** @test */
    public function validar_campos_form_login()
    {
        $response = $this->post(route('login'), []);

        $response->assertStatus(302);
        $response->assertRedirect('/');
        $response->assertSessionHasErrors('email');
        $this->assertGuest();
    }

    /** @test */
    public function validar_autenticacion()
    {
        $this->seed(PermisosSeeder::class);
        $this->seed(RolesSeeder::class);
        $this->seed(AdminSeeder::class);

        $user = User::first();
        
        $response = $this->post('/login', [
            'email' => $user->email,
            'password' => '12345678',
        ]);

        $response->assertRedirect('/perfil');
        $this->assertAuthenticatedAs($user);
    }
}
