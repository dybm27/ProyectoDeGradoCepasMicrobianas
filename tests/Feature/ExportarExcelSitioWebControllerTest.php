<?php

namespace Tests\Feature;

use App\Actividad;
use App\Documento;
use App\Equipamiento;
use App\Exports\ActividadesExport;
use App\Exports\EquipamientosExport;
use App\Exports\InvestigadoresExport;
use App\Exports\NoticiasExport;
use App\Exports\NovedadesExport;
use App\Exports\ProyectosExport;
use App\Exports\PublicacionesExport;
use App\Exports\TablaActividadesExport;
use App\Exports\TablaEquipamientosExport;
use App\Exports\TablaInvestigadoresExport;
use App\Exports\TablaNoticiasExport;
use App\Exports\TablaNovedadesExport;
use App\Exports\TablaProyectosExport;
use App\Exports\TablaPublicacionesExport;
use App\Investigador;
use App\Noticia;
use App\Novedad;
use App\Permiso;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Maatwebsite\Excel\Facades\Excel;
use SitioWebSeeder;
use Tests\TestCase;

class ExportarExcelSitioWebControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(SitioWebSeeder::class);
    }

    //-------------- Info BaseDatos ----------------------------------

    /** @test */
    public function exportar_excel_investigadores()
    {
        $permiso1 = Permiso::where('nombre', 'agregar-investigador')->first();
        $permiso2 = Permiso::where('nombre', 'editar-investigador')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-investigador')->first();
        $this->user->rol->permisos()->sync([
            $permiso1->id, $permiso2->id, $permiso3->id
        ]);
        Excel::fake();
        factory(Investigador::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->get('/exportar/investigadores');
        $response->assertStatus(200);

        Excel::assertDownloaded('investigadores.xlsx', function (InvestigadoresExport $export) {
            return $export->view()->getData()['investigadores'] == Investigador::all();
        });
    }

    /** @test */
    public function exportar_excel_proyectos()
    {
        $permiso1 = Permiso::where('nombre', 'agregar-proyecto')->first();
        $permiso2 = Permiso::where('nombre', 'editar-proyecto')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-proyecto')->first();
        $this->user->rol->permisos()->sync([
            $permiso1->id, $permiso2->id, $permiso3->id
        ]);
        Excel::fake();
        factory(Documento::class, 10)->create(['tipo_documento_id' => 1]);
        $response = $this->actingAs($this->user)
            ->get('/exportar/proyectos');
        $response->assertStatus(200);

        Excel::assertDownloaded('proyectos.xlsx', function (ProyectosExport $export) {
            return $export->view()->getData()['documentos'] == Documento::where('tipo_documento_id', 1)->get();
        });
    }

    /** @test */
    public function exportar_excel_publicaciones()
    {
        $permiso1 = Permiso::where('nombre', 'agregar-publicacion')->first();
        $permiso2 = Permiso::where('nombre', 'editar-publicacion')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-publicacion')->first();
        $this->user->rol->permisos()->sync([
            $permiso1->id, $permiso2->id, $permiso3->id
        ]);
        Excel::fake();
        factory(Documento::class, 10)->create(['tipo_documento_id' => 2]);
        $response = $this->actingAs($this->user)
            ->get('/exportar/publicaciones');
        $response->assertStatus(200);

        Excel::assertDownloaded('publicaciones.xlsx', function (PublicacionesExport $export) {
            return $export->view()->getData()['documentos'] == Documento::where('tipo_documento_id', 2)->get();
        });
    }

    /** @test */
    public function exportar_excel_equipamientos()
    {
        $permiso1 = Permiso::where('nombre', 'agregar-equipamiento')->first();
        $permiso2 = Permiso::where('nombre', 'editar-equipamiento')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-equipamiento')->first();
        $this->user->rol->permisos()->sync([
            $permiso1->id, $permiso2->id, $permiso3->id
        ]);
        Excel::fake();
        factory(Equipamiento::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->get('/exportar/equipamientos');
        $response->assertStatus(200);

        Excel::assertDownloaded('equipamientos.xlsx', function (EquipamientosExport $export) {
            return $export->view()->getData()['equipamientos'] == Equipamiento::all();
        });
    }

    /** @test */
    public function exportar_excel_noticias()
    {
        $permiso1 = Permiso::where('nombre', 'agregar-noticia')->first();
        $permiso2 = Permiso::where('nombre', 'editar-noticia')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-noticia')->first();
        $this->user->rol->permisos()->sync([
            $permiso1->id, $permiso2->id, $permiso3->id
        ]);
        Excel::fake();
        factory(Noticia::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->get('/exportar/noticias');
        $response->assertStatus(200);

        Excel::assertDownloaded('noticias.xlsx', function (NoticiasExport $export) {
            return $export->view()->getData()['noticias'] == Noticia::all();
        });
    }

    /** @test */
    public function exportar_excel_novedades()
    {
        $permiso1 = Permiso::where('nombre', 'agregar-novedad')->first();
        $permiso2 = Permiso::where('nombre', 'editar-novedad')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-novedad')->first();
        $this->user->rol->permisos()->sync([
            $permiso1->id, $permiso2->id, $permiso3->id
        ]);
        Excel::fake();
        factory(Novedad::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->get('/exportar/novedades');
        $response->assertStatus(200);

        Excel::assertDownloaded('novedades.xlsx', function (NovedadesExport $export) {
            return $export->view()->getData()['novedades'] == Novedad::all();
        });
    }

    /** @test */
    public function exportar_excel_actividades()
    {
        $permiso1 = Permiso::where('nombre', 'agregar-actividad')->first();
        $permiso2 = Permiso::where('nombre', 'editar-actividad')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-actividad')->first();
        $this->user->rol->permisos()->sync([
            $permiso1->id, $permiso2->id, $permiso3->id
        ]);
        Excel::fake();
        factory(Actividad::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->get('/exportar/actividades');
        $response->assertStatus(200);

        Excel::assertDownloaded('actividades.xlsx', function (ActividadesExport $export) {
            return $export->view()->getData()['actividades'] == Actividad::all();
        });
    }

    //-------------- Info Obtenida Tabla ----------------------------------

    /** @test */
    public function exportar_excel_tabla_investigadores()
    {
        $permiso1 = Permiso::where('nombre', 'agregar-investigador')->first();
        $permiso2 = Permiso::where('nombre', 'editar-investigador')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-investigador')->first();
        $this->user->rol->permisos()->sync([
            $permiso1->id, $permiso2->id, $permiso3->id
        ]);
        Excel::fake();
        $datos =  factory(Investigador::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/investigadores', ['datos' => $datos]);
        $response->assertStatus(200);

        Excel::assertDownloaded('tabla-investigadores.xlsx', function (TablaInvestigadoresExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_proyectos()
    {
        $permiso1 = Permiso::where('nombre', 'agregar-proyecto')->first();
        $permiso2 = Permiso::where('nombre', 'editar-proyecto')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-proyecto')->first();
        $this->user->rol->permisos()->sync([
            $permiso1->id, $permiso2->id, $permiso3->id
        ]);
        Excel::fake();
        $datos = factory(Documento::class, 10)->create(['tipo_documento_id' => 1]);
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/proyectos', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-proyectos.xlsx', function (TablaProyectosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_publicaciones()
    {
        $permiso1 = Permiso::where('nombre', 'agregar-publicacion')->first();
        $permiso2 = Permiso::where('nombre', 'editar-publicacion')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-publicacion')->first();
        $this->user->rol->permisos()->sync([
            $permiso1->id, $permiso2->id, $permiso3->id
        ]);
        Excel::fake();
        $datos = factory(Documento::class, 10)->create(['tipo_documento_id' => 2]);
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/publicaciones', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-publicaciones.xlsx', function (TablaPublicacionesExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_equipamientos()
    {
        $permiso1 = Permiso::where('nombre', 'agregar-equipamiento')->first();
        $permiso2 = Permiso::where('nombre', 'editar-equipamiento')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-equipamiento')->first();
        $this->user->rol->permisos()->sync([
            $permiso1->id, $permiso2->id, $permiso3->id
        ]);
        Excel::fake();
        $datos = factory(Equipamiento::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/equipamientos', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-equipamientos.xlsx', function (TablaEquipamientosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_noticias()
    {
        $permiso1 = Permiso::where('nombre', 'agregar-noticia')->first();
        $permiso2 = Permiso::where('nombre', 'editar-noticia')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-noticia')->first();
        $this->user->rol->permisos()->sync([
            $permiso1->id, $permiso2->id, $permiso3->id
        ]);
        Excel::fake();
        $datos = factory(Noticia::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/noticias', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-noticias.xlsx', function (TablaNoticiasExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_novedades()
    {
        $permiso1 = Permiso::where('nombre', 'agregar-novedad')->first();
        $permiso2 = Permiso::where('nombre', 'editar-novedad')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-novedad')->first();
        $this->user->rol->permisos()->sync([
            $permiso1->id, $permiso2->id, $permiso3->id
        ]);
        Excel::fake();
        $datos = factory(Novedad::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/novedades', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-novedades.xlsx', function (TablaNovedadesExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_actividades()
    {
        $permiso1 = Permiso::where('nombre', 'agregar-actividad')->first();
        $permiso2 = Permiso::where('nombre', 'editar-actividad')->first();
        $permiso3 = Permiso::where('nombre', 'eliminar-actividad')->first();
        $this->user->rol->permisos()->sync([
            $permiso1->id, $permiso2->id, $permiso3->id
        ]);
        Excel::fake();
        $datos = factory(Actividad::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/actividades', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-actividades.xlsx', function (TablaActividadesExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }
}
