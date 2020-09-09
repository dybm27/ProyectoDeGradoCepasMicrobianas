<?php

namespace Tests\Feature;

use App\Cepa;
use App\Clase;
use App\Division;
use App\Especie;
use App\Exports\CepasExport;
use App\Exports\ClasesExport;
use App\Exports\DivisionsExport;
use App\Exports\EspeciesExport;
use App\Exports\FamiliasExport;
use App\Exports\GenerosExport;
use App\Exports\OrdensExport;
use App\Exports\PhylumsExport;
use App\Exports\ReinosExport;
use App\Exports\TablaCepasExport;
use App\Exports\TablaClasesExport;
use App\Exports\TablaDivisionsExport;
use App\Exports\TablaEspeciesExport;
use App\Exports\TablaFamiliasExport;
use App\Exports\TablaGenerosExport;
use App\Exports\TablaOrdensExport;
use App\Exports\TablaPhylumsExport;
use App\Exports\TablaReinosExport;
use App\Familia;
use App\Genero;
use App\Orden;
use App\Permiso;
use App\Phylum;
use App\Reino;
use ClasesSeeder;
use DivisionesSeeder;
use EspeciesSeeder;
use FamiliasSeeder;
use GenerosSeeder;
use GruposMicrobianosSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Maatwebsite\Excel\Facades\Excel;
use OrdensSeeder;
use PhylumsSeeder;
use ReinosSeeder;
use Tests\TestCase;

class ExportarExcelCepasControllerTest extends TestCase
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
        $permiso1 = Permiso::where('nombre', 'agregar-cepa')->first();
        $permiso2 = Permiso::where('nombre', 'editar-cepa')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-cepa')->first();
        $permiso4 = Permiso::where('nombre', 'ver-cepa')->first();
        $permiso5 = Permiso::where('nombre', 'caract-cepa')->first();
        $permiso6 = Permiso::where('nombre', 'agregar-otra')->first();
        $permiso7 = Permiso::where('nombre', 'editar-otra')->first();
        $permiso8 = Permiso::where('nombre', 'eliminar-otra')->first();
        $this->user->rol->permisos()->sync([
            $permiso1->id, $permiso2->id, $permiso3->id, $permiso4->id, $permiso5->id,
            $permiso6->id, $permiso7->id, $permiso8->id
        ]);
    }

    //-------------- Info BaseDatos ----------------------------------

    /** @test */
    public function exportar_excel_cepas()
    {
        Excel::fake();
        factory(Cepa::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->get('/exportar/cepas');
        $response->assertStatus(200);

        Excel::assertDownloaded('cepas.xlsx', function (CepasExport $export) {
            return $export->view()->getData()['cepas'] == Cepa::all();
        });
    }

    /** @test */
    public function exportar_excel_generos_cepas()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/generos');
        $response->assertStatus(200);

        Excel::assertDownloaded('generos.xlsx', function (GenerosExport $export) {
            return $export->view()->getData()['tipos'] == Genero::all();
        });
    }

    /** @test */
    public function exportar_excel_especies_cepas()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/especies');
        $response->assertStatus(200);

        Excel::assertDownloaded('especies.xlsx', function (EspeciesExport $export) {
            return $export->view()->getData()['tipos'] == Especie::all();
        });
    }

    /** @test */
    public function exportar_excel_familias_cepas()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/familias');
        $response->assertStatus(200);

        Excel::assertDownloaded('familias.xlsx', function (FamiliasExport $export) {
            return $export->view()->getData()['tipos'] == Familia::all();
        });
    }

    /** @test */
    public function exportar_excel_divisions_cepas()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/divisions');
        $response->assertStatus(200);

        Excel::assertDownloaded('divisions.xlsx', function (DivisionsExport $export) {
            return $export->view()->getData()['tipos'] == Division::all();
        });
    }

    /** @test */
    public function exportar_excel_reinos_cepas()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/reinos');
        $response->assertStatus(200);

        Excel::assertDownloaded('reinos.xlsx', function (ReinosExport $export) {
            return $export->view()->getData()['tipos'] == Reino::all();
        });
    }

    /** @test */
    public function exportar_excel_clases_cepas()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/clases');
        $response->assertStatus(200);

        Excel::assertDownloaded('clases.xlsx', function (ClasesExport $export) {
            return $export->view()->getData()['tipos'] == Clase::all();
        });
    }

    /** @test */
    public function exportar_excel_phylums_cepas()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/phylums');
        $response->assertStatus(200);

        Excel::assertDownloaded('phylums.xlsx', function (PhylumsExport $export) {
            return $export->view()->getData()['tipos'] == Phylum::all();
        });
    }

    /** @test */
    public function exportar_excel_ordens_cepas()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/ordens');
        $response->assertStatus(200);

        Excel::assertDownloaded('ordens.xlsx', function (OrdensExport $export) {
            return $export->view()->getData()['tipos'] == Orden::all();
        });
    }

    //-------------- Info Obtenida Tabla ----------------------------------

    /** @test */
    public function exportar_excel_tabla_cepas()
    {
        Excel::fake();
        $datos = factory(Cepa::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/cepas', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-cepas.xlsx', function (TablaCepasExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_generos_cepas()
    {
        Excel::fake();
        $datos = Genero::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/generos', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-generos.xlsx', function (TablaGenerosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_especies_cepas()
    {
        Excel::fake();
        $datos = Especie::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/especies', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-especies.xlsx', function (TablaEspeciesExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_familias_cepas()
    {
        Excel::fake();
        $datos = Familia::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/familias', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-familias.xlsx', function (TablaFamiliasExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_divisions_cepas()
    {
        Excel::fake();
        $datos = Division::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/divisions', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-divisions.xlsx', function (TablaDivisionsExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_reinos_cepas()
    {
        Excel::fake();
        $datos = Reino::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/reinos', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-reinos.xlsx', function (TablaReinosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_clases_cepas()
    {
        Excel::fake();
        $datos = Clase::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/clases', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-clases.xlsx', function (TablaClasesExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_phylums_cepas()
    {
        Excel::fake();
        $datos = Phylum::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/phylums', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-phylums.xlsx', function (TablaPhylumsExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_ordens_cepas()
    {
        Excel::fake();
        $datos = Orden::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/ordens', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-ordens.xlsx', function (TablaOrdensExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }
}
