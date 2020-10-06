<?php

namespace Tests\Feature;

use App\BordeActinomiceto;
use App\ColorActinomiceto;
use App\ConidioforoActinomiceto;
use App\Events\ActinomicetosInfoEvent;
use App\Events\ImagenesLoginEvent;
use App\FormaCaractMacroActinomiceto;
use App\FormaCaractMicroActinomiceto;
use App\ImagenLogin;
use App\MicelioActinomiceto;
use App\Permiso;
use App\PigmentoActinomiceto;
use App\SuperficieActinomiceto;
use App\TexturaActinomiceto;
use App\TincionGramActinomiceto;
use CaractMacroActinomicetoSeeder;
use CaractMicroActinomicetoSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Storage;
use ImgLoginSeeder;
use Tests\TestCase;

class InfoCaracActinomicetoControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(CaractMacroActinomicetoSeeder::class);
        $this->seed(CaractMicroActinomicetoSeeder::class);
        $permiso1 = Permiso::where('nombre', 'agregar-otra')->first();
        $permiso2 = Permiso::where('nombre', 'editar-otra')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-otra')->first();
        $this->user->rol->permisos()->sync($permiso1->id, $permiso2->id, $permiso3->id);
    }

    /** @test */
    public function validacion_de_campo_tipo_agregar_info_actinomicetos()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-actinomicetos/agregar', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('tipo');
    }

    /** @test */
    public function validacion_de_campo_tipo_editar_info_actinomicetos()
    {
        $response = $this->actingAs($this->user)
            ->putJson('/info-caract-actinomicetos/editar/1', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('tipo');
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function validacion_de_campo_tipo_eliminar_info_actinomicetos()
    {
        $response = $this->actingAs($this->user)
            ->deleteJson('/info-caract-actinomicetos/eliminar/1', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('tipo');
    }

    //----------- forma macro ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_forma_macro_actinomicetos()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-actinomicetos/agregar', ['tipo' => 'forma_macro']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_forma_macro_actinomicetos()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-actinomicetos/agregar',
                ['tipo' => 'forma_macro', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $tipo = FormaCaractMacroActinomiceto::latest('id')->first();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_forma_macro_actinomicetos()
    {
        Event::fake();
        $tipo = FormaCaractMacroActinomiceto::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-actinomicetos/editar/' . $tipo->id,
                ['tipo' => 'forma_macro', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $tipo = $tipo->fresh();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_forma_macro_actinomicetos()
    {
        Event::fake();
        $tipo = FormaCaractMacroActinomiceto::first();
        $cantidad = FormaCaractMacroActinomiceto::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-actinomicetos/eliminar/' . $tipo->id,
                ['tipo' => 'forma_macro']
            );
        $response->assertOk();
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $this->assertCount($cantidad - 1, FormaCaractMacroActinomiceto::all());
    }

    //----------- borde ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_borde_actinomicetos()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-actinomicetos/agregar', ['tipo' => 'borde']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_borde_actinomicetos()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-actinomicetos/agregar',
                ['tipo' => 'borde', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $tipo = BordeActinomiceto::latest('id')->first();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_borde_actinomicetos()
    {
        Event::fake();
        $tipo = BordeActinomiceto::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-actinomicetos/editar/' . $tipo->id,
                ['tipo' => 'borde', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $tipo = $tipo->fresh();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_borde_actinomicetos()
    {
        Event::fake();
        $tipo = BordeActinomiceto::first();
        $cantidad = BordeActinomiceto::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-actinomicetos/eliminar/' . $tipo->id,
                ['tipo' => 'borde']
            );
        $response->assertOk();
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $this->assertCount($cantidad - 1, BordeActinomiceto::all());
    }

    //----------- textura ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_textura_actinomicetos()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-actinomicetos/agregar', ['tipo' => 'textura']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_textura_actinomicetos()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-actinomicetos/agregar',
                ['tipo' => 'textura', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $tipo = TexturaActinomiceto::latest('id')->first();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_textura_actinomicetos()
    {
        Event::fake();
        $tipo = TexturaActinomiceto::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-actinomicetos/editar/' . $tipo->id,
                ['tipo' => 'textura', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $tipo = $tipo->fresh();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_textura_actinomicetos()
    {
        Event::fake();
        $tipo = TexturaActinomiceto::first();
        $cantidad = TexturaActinomiceto::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-actinomicetos/eliminar/' . $tipo->id,
                ['tipo' => 'textura']
            );
        $response->assertOk();
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $this->assertCount($cantidad - 1, TexturaActinomiceto::all());
    }

    //----------- pigmento ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_pigmento_actinomicetos()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-actinomicetos/agregar', ['tipo' => 'pigmento']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_pigmento_actinomicetos()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-actinomicetos/agregar',
                ['tipo' => 'pigmento', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $tipo = PigmentoActinomiceto::latest('id')->first();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_pigmento_actinomicetos()
    {
        Event::fake();
        $tipo = PigmentoActinomiceto::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-actinomicetos/editar/' . $tipo->id,
                ['tipo' => 'pigmento', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $tipo = $tipo->fresh();
        $this->assertEquals($tipo->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_pigmento_actinomicetos()
    {
        Event::fake();
        $tipo = PigmentoActinomiceto::first();
        $cantidad = PigmentoActinomiceto::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-actinomicetos/eliminar/' . $tipo->id,
                ['tipo' => 'pigmento']
            );
        $response->assertOk();
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $this->assertCount($cantidad - 1, PigmentoActinomiceto::all());
    }

    //----------- superficie ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_superficie_actinomicetos()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-actinomicetos/agregar', ['tipo' => 'superficie']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_superficie_actinomicetos()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-actinomicetos/agregar',
                ['tipo' => 'superficie', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $forma = SuperficieActinomiceto::latest('id')->first();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_superficie_actinomicetos()
    {
        Event::fake();
        $forma = SuperficieActinomiceto::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-actinomicetos/editar/' . $forma->id,
                ['tipo' => 'superficie', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $forma = $forma->fresh();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_superficie_actinomicetos()
    {
        Event::fake();
        $forma = SuperficieActinomiceto::first();
        $cantidad = SuperficieActinomiceto::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-actinomicetos/eliminar/' . $forma->id,
                ['tipo' => 'superficie']
            );
        $response->assertOk();
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $this->assertCount($cantidad - 1, SuperficieActinomiceto::all());
    }

    //----------- forma micro ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_forma_micro_actinomicetos()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-actinomicetos/agregar', ['tipo' => 'forma_micro']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_forma_micro_actinomicetos()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-actinomicetos/agregar',
                ['tipo' => 'forma_micro', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $forma = FormaCaractMicroActinomiceto::latest('id')->first();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_forma_micro_actinomicetos()
    {
        Event::fake();
        $forma = FormaCaractMicroActinomiceto::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-actinomicetos/editar/' . $forma->id,
                ['tipo' => 'forma_micro', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $forma = $forma->fresh();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_forma_micro_actinomicetos()
    {
        Event::fake();
        $forma = FormaCaractMicroActinomiceto::first();
        $cantidad = FormaCaractMicroActinomiceto::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-actinomicetos/eliminar/' . $forma->id,
                ['tipo' => 'forma_micro']
            );
        $response->assertOk();
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $this->assertCount($cantidad - 1, FormaCaractMicroActinomiceto::all());
    }

    //----------- tincion ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_tincion_actinomicetos()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-actinomicetos/agregar', ['tipo' => 'tincion']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_tincion_actinomicetos()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-actinomicetos/agregar',
                ['tipo' => 'tincion', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $forma = TincionGramActinomiceto::latest('id')->first();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_tincion_actinomicetos()
    {
        Event::fake();
        $forma = TincionGramActinomiceto::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-actinomicetos/editar/' . $forma->id,
                ['tipo' => 'tincion', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $forma = $forma->fresh();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_tincion_actinomicetos()
    {
        Event::fake();
        $forma = TincionGramActinomiceto::first();
        $cantidad = TincionGramActinomiceto::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-actinomicetos/eliminar/' . $forma->id,
                ['tipo' => 'tincion']
            );
        $response->assertOk();
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $this->assertCount($cantidad - 1, TincionGramActinomiceto::all());
    }

    //----------- micelio ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_micelio_actinomicetos()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-actinomicetos/agregar', ['tipo' => 'micelio']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_micelio_actinomicetos()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-actinomicetos/agregar',
                ['tipo' => 'micelio', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $forma = MicelioActinomiceto::latest('id')->first();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_micelio_actinomicetos()
    {
        Event::fake();
        $forma = MicelioActinomiceto::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-actinomicetos/editar/' . $forma->id,
                ['tipo' => 'micelio', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $forma = $forma->fresh();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_micelio_actinomicetos()
    {
        Event::fake();
        $forma = MicelioActinomiceto::first();
        $cantidad = MicelioActinomiceto::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-actinomicetos/eliminar/' . $forma->id,
                ['tipo' => 'micelio']
            );
        $response->assertOk();
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $this->assertCount($cantidad - 1, MicelioActinomiceto::all());
    }

    //----------- conidioforo ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_conidioforo_actinomicetos()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-actinomicetos/agregar', ['tipo' => 'conidioforo']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_conidioforo_actinomicetos()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-actinomicetos/agregar',
                ['tipo' => 'conidioforo', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $forma = ConidioforoActinomiceto::latest('id')->first();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_conidioforo_actinomicetos()
    {
        Event::fake();
        $forma = ConidioforoActinomiceto::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-actinomicetos/editar/' . $forma->id,
                ['tipo' => 'conidioforo', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $forma = $forma->fresh();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_conidioforo_actinomicetos()
    {
        Event::fake();
        $forma = ConidioforoActinomiceto::first();
        $cantidad = ConidioforoActinomiceto::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-actinomicetos/eliminar/' . $forma->id,
                ['tipo' => 'conidioforo']
            );
        $response->assertOk();
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $this->assertCount($cantidad - 1, ConidioforoActinomiceto::all());
    } 
    
    //----------- color ------------------------

    /** @test */
    public function validacion_de_campo_nombre_agregar_color_actinomicetos()
    {
        $response = $this->actingAs($this->user)
            ->postJson('/info-caract-actinomicetos/agregar', ['tipo' => 'color']);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors('nombre');
    }

    /** @test */
    public function agregar_color_actinomicetos()
    {
        Event::fake();
        $response = $this->actingAs($this->user)
            ->postJson(
                '/info-caract-actinomicetos/agregar',
                ['tipo' => 'color', 'nombre' => 'qweqwe']
            );
        $response->assertStatus(201);
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $forma = ColorActinomiceto::latest('id')->first();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function editar_color_actinomicetos()
    {
        Event::fake();
        $forma = ColorActinomiceto::first();
        $response = $this->actingAs($this->user)
            ->putJson(
                '/info-caract-actinomicetos/editar/' . $forma->id,
                ['tipo' => 'color', 'nombre' => 'qweqwe']
            );
        $response->assertOk();
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $forma = $forma->fresh();
        $this->assertEquals($forma->nombre, 'Qweqwe');
    }

    /** @test */
    public function eliminar_color_actinomicetos()
    {
        Event::fake();
        $forma = ColorActinomiceto::first();
        $cantidad = ColorActinomiceto::all()->count();
        $response = $this->actingAs($this->user)
            ->deleteJson(
                '/info-caract-actinomicetos/eliminar/' . $forma->id,
                ['tipo' => 'color']
            );
        $response->assertOk();
        Event::assertDispatched(ActinomicetosInfoEvent::class);
        $this->assertCount($cantidad - 1, ColorActinomiceto::all());
    }
}
