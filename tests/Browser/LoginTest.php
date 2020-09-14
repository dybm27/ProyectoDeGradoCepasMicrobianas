<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use ImgLoginSeeder;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class LoginTest extends DuskTestCase
{

    /** @test */
    public function iniciar_sesion_error()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                ->assertSee('Bienvenido!!.. Por favor, inicia sesión con tu cuenta.');

            $browser->waitForText('Bienvenido!!.. Por favor, inicia sesión con tu cuenta.')
                ->type('email', 'email_erroneo@gmail.com')
                ->type('password', '12345678')
                ->screenshot('ingresando_datos_erroneos_login')
                ->press('Iniciar Sesión')
                ->assertPathIs('/')
                ->assertSee('Estas credenciales no coinciden con nuestros registros.')
                ->screenshot('ingresando_datos_erroneos_login_error');
        });
    }

    /** @test */
    public function iniciar_sesion_success()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                ->assertSee('Bienvenido!!.. Por favor, inicia sesión con tu cuenta.');

            $browser->waitForText('Bienvenido!!.. Por favor, inicia sesión con tu cuenta.')
                ->type('email', 'majumba.ufps@gmail.com')
                ->type('password', '12345678')
                ->screenshot('ingresando_datos_login')
                ->press('Iniciar Sesión')
                ->assertPathIs('/perfil')
                ->pause(2000)
                ->screenshot('redirect_vista_perfil');
        });
    }
}
