<?php

namespace Tests\Feature;

use App\Actinomiceto;
use App\Bacteria;
use App\Cepa;
use App\Events\CepasEvent;
use App\HongoFilamentoso;
use App\Levadura;
use App\Permiso;
use App\Seguimiento;
use ClasesSeeder;
use DivisionesSeeder;
use EspeciesSeeder;
use FamiliasSeeder;
use GenerosSeeder;
use GruposMicrobianosSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Event;
use OrdensSeeder;
use PhylumsSeeder;
use ReinosSeeder;
use Tests\TestCase;

class CepaControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(GruposMicrobianosSeeder::class);
        $this->seed(EspeciesSeeder::class);
        $this->seed(GenerosSeeder::class);
        $this->seed(FamiliasSeeder::class);
        $this->seed(ReinosSeeder::class);
        $this->seed(PhylumsSeeder::class);
        $this->seed(ClasesSeeder::class);
        $this->seed(OrdensSeeder::class);
        $this->seed(DivisionesSeeder::class);

        $permiso = Permiso::where('nombre', 'editar-cepa')->first();
        $this->user->rol->permisos()->sync([$permiso->id]);
    }

    /** @test */
    public function cambiar_publicar_cepa()
    {
        Event::fake();
        $cepa = factory(Cepa::class)->create();
        $response = $this->actingAs($this->user)
            ->putJson('/cepas/publicar/' . $cepa->id, [
                'publicar' => 0
            ]);
        $response->assertStatus(200);
        Event::assertDispatched(CepasEvent::class);

        $cepa = $cepa->fresh();
        $this->assertCount(1, Cepa::all());
        $this->assertEquals($cepa->publicar, 0);
    }
}
