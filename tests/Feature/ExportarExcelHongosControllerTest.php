<?php

namespace Tests\Feature;

use App\ColorHongo;
use App\ConidioforoHongo;
use App\EsporaAsexualHongo;
use App\EsporaSexualHongo;
use App\Exports\ColorsHongosExport;
use App\Exports\ConidioforosHongosExport;
use App\Exports\EsporasAsexualHongosExport;
use App\Exports\EsporasSexualHongosExport;
use App\Exports\HongosExport;
use App\Exports\MetodosHongosExport;
use App\Exports\TablaColorsHongosExport;
use App\Exports\TablaConidioforosHongosExport;
use App\Exports\TablaEsporasAsexualHongosExport;
use App\Exports\TablaEsporasSexualHongosExport;
use App\Exports\TablaHongosExport;
use App\Exports\TablaMetodosHongosExport;
use App\Exports\TablaTexturasHongosExport;
use App\Exports\TablaTiposMetodosHongosExport;
use App\Exports\TexturasHongosExport;
use App\Exports\TiposMetodosHongosExport;
use App\HongoFilamentoso;
use App\MetodoConserHongo;
use App\Permiso;
use App\TexturaHongo;
use App\TipoMetodoConservacionHongo;
use CaractMacroHongoSeeder;
use CaractMicroHongoSeeder;
use ClasesSeeder;
use EspeciesSeeder;
use FamiliasSeeder;
use GenerosSeeder;
use GruposMicrobianosSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Maatwebsite\Excel\Facades\Excel;
use OrdensSeeder;
use PhylumsSeeder;
use Tests\TestCase;
use TiposMetodosConservacionHLSeeder;

class ExportarExcelHongosControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(GruposMicrobianosSeeder::class);
        $this->seed(EspeciesSeeder::class);
        $this->seed(GenerosSeeder::class);
        $this->seed(FamiliasSeeder::class);
        $this->seed(PhylumsSeeder::class);
        $this->seed(ClasesSeeder::class);
        $this->seed(OrdensSeeder::class);
        $this->seed(CaractMacroHongoSeeder::class);
        $this->seed(CaractMicroHongoSeeder::class);        
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
    public function exportar_excel_metodos_hongos()
    {
        Excel::fake();
        factory(MetodoConserHongo::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->get('/exportar/metodos-hongos');
        $response->assertStatus(200);

        Excel::assertDownloaded('metodos-hongos.xlsx', function (MetodosHongosExport $export) {
            return $export->view()->getData()['metodosHongos'] == MetodoConserHongo::all();
        });
    }

    /** @test */
    public function exportar_excel_hongos()
    {
        Excel::fake();
        factory(HongoFilamentoso::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->get('/exportar/hongos');
        $response->assertStatus(200);

        Excel::assertDownloaded('hongos.xlsx', function (HongosExport $export) {
            return $export->view()->getData()['hongos'] == HongoFilamentoso::all();
        });
    }

    /** @test */
    public function exportar_excel_colors_hongos()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/colors-hongo');
        $response->assertStatus(200);

        Excel::assertDownloaded('colors.xlsx', function (ColorsHongosExport $export) {
            return $export->view()->getData()['tipos'] == ColorHongo::all();
        });
    }

    /** @test */
    public function exportar_excel_texturas_hongos()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/texturas-hongo');
        $response->assertStatus(200);

        Excel::assertDownloaded('texturas.xlsx', function (TexturasHongosExport $export) {
            return $export->view()->getData()['tipos'] == TexturaHongo::all();
        });
    }

    /** @test */
    public function exportar_excel_conidioforos_hongos()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/conidioforos-hongo');
        $response->assertStatus(200);

        Excel::assertDownloaded('conidioforos.xlsx', function (ConidioforosHongosExport $export) {
            return $export->view()->getData()['tipos'] == ConidioforoHongo::all();
        });
    }

    /** @test */
    public function exportar_excel_esporas_asexual_hongos()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/esporasA-hongo');
        $response->assertStatus(200);

        Excel::assertDownloaded('esporasAsexual.xlsx', function (EsporasAsexualHongosExport $export) {
            return $export->view()->getData()['tipos'] == EsporaAsexualHongo::all();
        });
    }

    /** @test */
    public function exportar_excel_esporas_sexual_hongos()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/esporasS-hongo');
        $response->assertStatus(200);

        Excel::assertDownloaded('esporasSexual.xlsx', function (EsporasSexualHongosExport $export) {
            return $export->view()->getData()['tipos'] == EsporaSexualHongo::all();
        });
    }

    /** @test */
    public function exportar_excel_tipos_metodos_hongos()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/tipos-metodos-hongo');
        $response->assertStatus(200);

        Excel::assertDownloaded('tiposMetodos.xlsx', function (TiposMetodosHongosExport $export) {
            return $export->view()->getData()['tipos'] == TipoMetodoConservacionHongo::all();
        });
    }

    //-------------- Info Obtenida Tabla ----------------------------------

    /** @test */
    public function exportar_excel_tabla_metodos_hongos()
    {
        Excel::fake();
        $datos =  factory(MetodoConserHongo::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/metodos-hongos', ['datos' => $datos]);
        $response->assertStatus(200);

        Excel::assertDownloaded('tabla-metodos-hongos.xlsx', function (TablaMetodosHongosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_hongos()
    {
        Excel::fake();
        $datos = factory(HongoFilamentoso::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/hongos', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-hongos.xlsx', function (TablaHongosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_colors_hongos()
    {
        Excel::fake();
        $datos = ColorHongo::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/colors-hongo', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-colors.xlsx', function (TablaColorsHongosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_texturas_hongos()
    {
        Excel::fake();
        $datos = TexturaHongo::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/texturas-hongo', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-texturas.xlsx', function (TablaTexturasHongosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_conidioforos_hongos()
    {
        Excel::fake();
        $datos = ConidioforoHongo::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/conidioforos-hongo', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-conidioforos.xlsx', function (TablaConidioforosHongosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_esporas_asexual_hongos()
    {
        Excel::fake();
        $datos = EsporaAsexualHongo::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/esporasA-hongo', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-esporasAsexual.xlsx', function (TablaEsporasAsexualHongosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_esporasS_hongos()
    {
        Excel::fake();
        $datos = EsporaSexualHongo::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/esporasS-hongo', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-esporasSexual.xlsx', function (TablaEsporasSexualHongosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_tipos_metodos_hongos()
    {
        Excel::fake();
        $datos = TipoMetodoConservacionHongo::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/tipos-metodos-hongo', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-tiposMetodos.xlsx', function (TablaTiposMetodosHongosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }
}
