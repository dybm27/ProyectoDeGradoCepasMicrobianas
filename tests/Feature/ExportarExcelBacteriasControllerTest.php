<?php

namespace Tests\Feature;

use App\Bacteria;
use App\BordeBacteria;
use App\ColorBacteria;
use App\DetalleOpticoBacteria;
use App\ElevacionBacteria;
use App\Exports\BacteriasExport;
use App\Exports\BordesBacteriasExport;
use App\Exports\ColorsBacteriasExport;
use App\Exports\DetallesBacteriasExport;
use App\Exports\ElevacionsBacteriasExport;
use App\Exports\FormasMacroBacteriasExport;
use App\Exports\FormasMicroBacteriasExport;
use App\Exports\MetodosBacteriasExport;
use App\Exports\SuperficiesBacteriasExport;
use App\Exports\TablaBacteriasExport;
use App\Exports\TablaBordesBacteriasExport;
use App\Exports\TablaColorsBacteriasExport;
use App\Exports\TablaDetallesBacteriasExport;
use App\Exports\TablaElevacionsBacteriasExport;
use App\Exports\TablaFormasMacroBacteriasExport;
use App\Exports\TablaFormasMicroBacteriasExport;
use App\Exports\TablaMetodosBacteriasExport;
use App\Exports\TablaSuperficiesBacteriasExport;
use App\Exports\TablaTiposAgarsBacteriasExport;
use App\Exports\TablaTiposMetodosBacteriasExport;
use App\Exports\TiposAgarsBacteriasExport;
use App\Exports\TiposMetodosBacteriasExport;
use App\FormaCaractMacroBacteria;
use App\FormaCaractMicroBacteria;
use App\MetodoConserBacteria;
use App\Permiso;
use App\SuperficieBacteria;
use App\TipoAgarBacteria;
use App\TipoMetodoConservacionBacteria;
use CaractMacroBacteriaSeeder;
use CaractMicroBacteriaSeeder;
use EspeciesSeeder;
use GenerosSeeder;
use GruposMicrobianosSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Maatwebsite\Excel\Facades\Excel;
use Tests\TestCase;
use TiposMetodosConservacionBacteriasSeeder;

class ExportarExcelBacteriasControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(GruposMicrobianosSeeder::class);
        $this->seed(EspeciesSeeder::class);
        $this->seed(GenerosSeeder::class);
        $this->seed(CaractMacroBacteriaSeeder::class);
        $this->seed(CaractMicroBacteriaSeeder::class);
        $this->seed(TiposMetodosConservacionBacteriasSeeder::class);
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
    public function exportar_excel_metodos_bacterias()
    {
        Excel::fake();
        factory(MetodoConserBacteria::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->get('/exportar/metodos-bacterias');
        $response->assertStatus(200);

        Excel::assertDownloaded('metodos-bacterias.xlsx', function (MetodosBacteriasExport $export) {
            return $export->view()->getData()['metodosBacterias'] == MetodoConserBacteria::all();
        });
    }

    /** @test */
    public function exportar_excel_bacterias()
    {
        Excel::fake();
        factory(Bacteria::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->get('/exportar/bacterias');
        $response->assertStatus(200);

        Excel::assertDownloaded('bacterias.xlsx', function (BacteriasExport $export) {
            return $export->view()->getData()['bacterias'] == Bacteria::all();
        });
    }

    /** @test */
    public function exportar_excel_colors_bacterias()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/colors-bacteria');
        $response->assertStatus(200);

        Excel::assertDownloaded('colors.xlsx', function (ColorsBacteriasExport $export) {
            return $export->view()->getData()['tipos'] == ColorBacteria::all();
        });
    }

    /** @test */
    public function exportar_excel_detalles_bacterias()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/detalles-bacteria');
        $response->assertStatus(200);

        Excel::assertDownloaded('detalles.xlsx', function (DetallesBacteriasExport $export) {
            return $export->view()->getData()['tipos'] == DetalleOpticoBacteria::all();
        });
    }

    /** @test */
    public function exportar_excel_formas_macro_bacterias()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/formas-macro-bacteria');
        $response->assertStatus(200);

        Excel::assertDownloaded('formasMacro.xlsx', function (FormasMacroBacteriasExport $export) {
            return $export->view()->getData()['tipos'] == FormaCaractMacroBacteria::all();
        });
    }

    /** @test */
    public function exportar_excel_formas_micro_bacterias()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/formas-micro-bacteria');
        $response->assertStatus(200);

        Excel::assertDownloaded('formasMicro.xlsx', function (FormasMicroBacteriasExport $export) {
            return $export->view()->getData()['tipos'] == FormaCaractMicroBacteria::all();
        });
    }

    /** @test */
    public function exportar_excel_bordes_bacterias()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/bordes-bacteria');
        $response->assertStatus(200);

        Excel::assertDownloaded('bordes.xlsx', function (BordesBacteriasExport $export) {
            return $export->view()->getData()['tipos'] == BordeBacteria::all();
        });
    }

    /** @test */
    public function exportar_excel_elevacions_bacterias()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/elevacions-bacteria');
        $response->assertStatus(200);

        Excel::assertDownloaded('elevacions.xlsx', function (ElevacionsBacteriasExport $export) {
            return $export->view()->getData()['tipos'] == ElevacionBacteria::all();
        });
    }

    /** @test */
    public function exportar_excel_tipos_metodos_bacterias()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/tipos-metodos-bacteria');
        $response->assertStatus(200);

        Excel::assertDownloaded('tiposMetodos.xlsx', function (TiposMetodosBacteriasExport $export) {
            return $export->view()->getData()['tipos'] == TipoMetodoConservacionBacteria::all();
        });
    }

    /** @test */
    public function exportar_excel_superficies_bacterias()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/superficies-bacteria');
        $response->assertStatus(200);

        Excel::assertDownloaded('superficies.xlsx', function (SuperficiesBacteriasExport $export) {
            return $export->view()->getData()['tipos'] == SuperficieBacteria::all();
        });
    }

    /** @test */
    public function exportar_excel_tipos_agars_bacterias()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/tipos-agars-bacteria');
        $response->assertStatus(200);

        Excel::assertDownloaded('tiposAgars.xlsx', function (TiposAgarsBacteriasExport $export) {
            return $export->view()->getData()['tipos'] == TipoAgarBacteria::all();
        });
    }

    //-------------- Info Obtenida Tabla ----------------------------------

    /** @test */
    public function exportar_excel_tabla_metodos_bacterias()
    {
        Excel::fake();
        $datos =  factory(MetodoConserBacteria::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/metodos-bacterias', ['datos' => $datos]);
        $response->assertStatus(200);

        Excel::assertDownloaded('tabla-metodos-bacterias.xlsx', function (TablaMetodosBacteriasExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_bacterias()
    {
        Excel::fake();
        $datos = factory(Bacteria::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/bacterias', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-bacterias.xlsx', function (TablaBacteriasExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_colors_bacterias()
    {
        Excel::fake();
        $datos = ColorBacteria::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/colors-bacteria', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-colors.xlsx', function (TablaColorsBacteriasExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_detalles_bacterias()
    {
        Excel::fake();
        $datos = DetalleOpticoBacteria::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/detalles-bacteria', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-detalles.xlsx', function (TablaDetallesBacteriasExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_formas_macro_bacterias()
    {
        Excel::fake();
        $datos = FormaCaractMacroBacteria::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/formas-macro-bacteria', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-formasMacro.xlsx', function (TablaFormasMacroBacteriasExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_formas_micro_bacterias()
    {
        Excel::fake();
        $datos = FormaCaractMicroBacteria::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/formas-micro-bacteria', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-formasMicro.xlsx', function (TablaFormasMicroBacteriasExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_bordes_bacterias()
    {
        Excel::fake();
        $datos = BordeBacteria::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/bordes-bacteria', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-bordes.xlsx', function (TablaBordesBacteriasExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_elevacions_bacterias()
    {
        Excel::fake();
        $datos = ElevacionBacteria::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/elevacions-bacteria', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-elevacions.xlsx', function (TablaElevacionsBacteriasExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_tipos_metodos_bacterias()
    {
        Excel::fake();
        $datos = TipoMetodoConservacionBacteria::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/tipos-metodos-bacteria', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-tiposMetodos.xlsx', function (TablaTiposMetodosBacteriasExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_superficies_bacterias()
    {
        Excel::fake();
        $datos = SuperficieBacteria::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/superficies-bacteria', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-superficies.xlsx', function (TablaSuperficiesBacteriasExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_tipos_agars_bacterias()
    {
        Excel::fake();
        $datos = TipoAgarBacteria::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/tipos-agars-bacteria', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-tiposAgars.xlsx', function (TablaTiposAgarsBacteriasExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }
}
