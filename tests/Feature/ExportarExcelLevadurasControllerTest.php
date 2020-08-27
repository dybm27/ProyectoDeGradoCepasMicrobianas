<?php

namespace Tests\Feature;

use App\ColorLevadura;
use App\Exports\ColorsLevadurasExport;
use App\Exports\LevadurasExport;
use App\Exports\MetodosLevadurasExport;
use App\Exports\TablaColorsLevadurasExport;
use App\Exports\TablaLevadurasExport;
use App\Exports\TablaMetodosLevadurasExport;
use App\Exports\TablaTexturasLevadurasExport;
use App\Exports\TablaTiposMetodosLevadurasExport;
use App\Exports\TexturasLevadurasExport;
use App\Exports\TiposMetodosLevadurasExport;
use App\Levadura;
use App\MetodoConserLevadura;
use App\Permiso;
use App\TexturaLevadura;
use App\TipoMetodoConservacionLevadura;
use CaractMacroLevaduraSeeder;
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
use Tests\TestCase;
use TiposMetodosConservacionHLSeeder;

class ExportarExcelLevadurasControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(GruposMicrobianosSeeder::class);
        $this->seed(EspeciesSeeder::class);
        $this->seed(GenerosSeeder::class);
        $this->seed(FamiliasSeeder::class);
        $this->seed(ClasesSeeder::class);
        $this->seed(OrdensSeeder::class);
        $this->seed(DivisionesSeeder::class);
        $this->seed(CaractMacroLevaduraSeeder::class);
        $this->seed(TiposMetodosConservacionHLSeeder::class);
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
    public function exportar_excel_metodos_levaduras()
    {
        Excel::fake();
        factory(MetodoConserLevadura::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->get('/exportar/metodos-levaduras');
        $response->assertStatus(200);

        Excel::assertDownloaded('metodos-levaduras.xlsx', function (MetodosLevadurasExport $export) {
            return $export->view()->getData()['metodosLevaduras'] == MetodoConserLevadura::all();
        });
    }

    /** @test */
    public function exportar_excel_levaduras()
    {
        Excel::fake();
        factory(Levadura::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->get('/exportar/levaduras');
        $response->assertStatus(200);

        Excel::assertDownloaded('levaduras.xlsx', function (LevadurasExport $export) {
            return $export->view()->getData()['levaduras'] == Levadura::all();
        });
    }

    /** @test */
    public function exportar_excel_colors_levaduras()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/colors-levadura');
        $response->assertStatus(200);

        Excel::assertDownloaded('colors.xlsx', function (ColorsLevadurasExport $export) {
            return $export->view()->getData()['tipos'] == ColorLevadura::all();
        });
    }

    /** @test */
    public function exportar_excel_texturas_levaduras()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/texturas-levadura');
        $response->assertStatus(200);

        Excel::assertDownloaded('texturas.xlsx', function (TexturasLevadurasExport $export) {
            return $export->view()->getData()['tipos'] == TexturaLevadura::all();
        });
    }
    
    /** @test */
    public function exportar_excel_tipos_metodos_levaduras()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/tipos-metodos-levadura');
        $response->assertStatus(200);

        Excel::assertDownloaded('tiposMetodos.xlsx', function (TiposMetodosLevadurasExport $export) {
            return $export->view()->getData()['tipos'] == TipoMetodoConservacionLevadura::all();
        });
    }

    //-------------- Info Obtenida Tabla ----------------------------------

    /** @test */
    public function exportar_excel_tabla_metodos_levaduras()
    {
        Excel::fake();
        $datos =  factory(MetodoConserlevadura::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/metodos-levaduras', ['datos' => $datos]);
        $response->assertStatus(200);

        Excel::assertDownloaded('tabla-metodos-levaduras.xlsx', function (TablaMetodosLevadurasExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_levaduras()
    {
        Excel::fake();
        $datos = factory(Levadura::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/levaduras', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-levaduras.xlsx', function (TablaLevadurasExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_colors_levaduras()
    {
        Excel::fake();
        $datos = Colorlevadura::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/colors-levadura', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-colors.xlsx', function (TablaColorsLevadurasExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_texturas_levaduras()
    {
        Excel::fake();
        $datos = Texturalevadura::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/texturas-levadura', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-texturas.xlsx', function (TablaTexturasLevadurasExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_tipos_metodos_levaduras()
    {
        Excel::fake();
        $datos = TipoMetodoConservacionLevadura::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/tipos-metodos-levadura', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-tiposMetodos.xlsx', function (TablaTiposMetodosLevadurasExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }
}
