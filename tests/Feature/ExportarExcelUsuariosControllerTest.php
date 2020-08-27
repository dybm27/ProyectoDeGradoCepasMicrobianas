<?php

namespace Tests\Feature;

use App\Actividad;
use App\Documento;
use App\Equipamiento;
use App\Exports\ActividadesExport;
use App\Exports\EquipamientosExport;
use App\Exports\UsuariosExport;
use App\Exports\NoticiasExport;
use App\Exports\NovedadesExport;
use App\Exports\SeguimientosExport;
use App\Exports\PublicacionesExport;
use App\Exports\TablaActividadesExport;
use App\Exports\TablaEquipamientosExport;
use App\Exports\TablaUsuariosExport;
use App\Exports\TablaNoticiasExport;
use App\Exports\TablaNovedadesExport;
use App\Exports\TablaSeguimientosExport;
use App\Exports\TablaPublicacionesExport;
use App\Investigador;
use App\Noticia;
use App\Novedad;
use App\Permiso;
use App\Seguimiento;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Maatwebsite\Excel\Facades\Excel;
use SitioWebSeeder;
use Tests\TestCase;

class ExportarExcelUsuariosControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $permiso1 = Permiso::where('nombre', 'agregar-usuario')->first();
        $permiso2 = Permiso::where('nombre', 'editar-usuario')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-usuario')->first();
        $this->user->rol->permisos()->sync([
            $permiso1->id, $permiso2->id, $permiso3->id
        ]);
    }

    //-------------- Info BaseDatos ----------------------------------

    /** @test */
    public function exportar_excel_usuarios()
    {
        Excel::fake();
        factory(User::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->get('/exportar/usuarios');
        $response->assertStatus(200);

        Excel::assertDownloaded('usuarios.xlsx', function (UsuariosExport $export) {
            return $export->view()->getData()['usuarios'] == User::all();
        });
    }

    /** @test */
    public function exportar_excel_seguimientos()
    {
        Excel::fake();
        factory(Seguimiento::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->get('/exportar/seguimientos');
        $response->assertStatus(200);

        Excel::assertDownloaded('seguimientos.xlsx', function (SeguimientosExport $export) {
            return $export->view()->getData()['seguimientos'] == Seguimiento::all();
        });
    }

    //-------------- Info Obtenida Tabla ----------------------------------

    /** @test */
    public function exportar_excel_tabla_usuarios()
    {
        Excel::fake();
        $datos =  factory(User::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/usuarios', ['datos' => $datos]);
        $response->assertStatus(200);

        Excel::assertDownloaded('tabla-usuarios.xlsx', function (TablaUsuariosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_seguimientos()
    {
        Excel::fake();
        $datos = factory(Seguimiento::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/seguimientos', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-seguimientos.xlsx', function (TablaSeguimientosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }
}
