<?php

namespace Tests\Feature;

use App\Actinomiceto;
use App\BordeActinomiceto;
use App\ColorActinomiceto;
use App\ConidioforoActinomiceto;
use App\Exports\ActinomicetosExport;
use App\Exports\BordesActinomicetosExport;
use App\Exports\ColorsActinomicetosExport;
use App\Exports\ConidioforosActinomicetosExport;
use App\Exports\FormasMacroActinomicetosExport;
use App\Exports\FormasMicroActinomicetosExport;
use App\Exports\MiceliosActinomicetosExport;
use App\Exports\PigmentosActinomicetosExport;
use App\Exports\SuperficiesActinomicetosExport;
use App\Exports\TablaActinomicetosExport;
use App\Exports\TablaBordesActinomicetosExport;
use App\Exports\TablaColorsActinomicetosExport;
use App\Exports\TablaConidioforosActinomicetosExport;
use App\Exports\TablaFormasMacroActinomicetosExport;
use App\Exports\TablaFormasMicroActinomicetosExport;
use App\Exports\TablaMiceliosActinomicetosExport;
use App\Exports\TablaPigmentosActinomicetosExport;
use App\Exports\TablaSuperficiesActinomicetosExport;
use App\Exports\TablaTexturasActinomicetosExport;
use App\Exports\TablaTincionsActinomicetosExport;
use App\Exports\TexturasActinomicetosExport;
use App\Exports\TincionsActinomicetosExport;
use App\FormaCaractMacroActinomiceto;
use App\FormaCaractMicroActinomiceto;
use App\MicelioActinomiceto;
use App\Permiso;
use App\PigmentoActinomiceto;
use App\SuperficieActinomiceto;
use App\TexturaActinomiceto;
use App\TincionGramActinomiceto;
use CaractMacroActinomicetoSeeder;
use CaractMicroActinomicetoSeeder;
use ClasesSeeder;
use EspeciesSeeder;
use GenerosSeeder;
use GruposMicrobianosSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Maatwebsite\Excel\Facades\Excel;
use OrdensSeeder;
use PhylumsSeeder;
use ReinosSeeder;
use Tests\TestCase;

class ExportarExcelActinomicetosControllerTest extends TestCase
{
    use RefreshDatabase;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(GruposMicrobianosSeeder::class);
        $this->seed(EspeciesSeeder::class);
        $this->seed(GenerosSeeder::class);
        $this->seed(ReinosSeeder::class);
        $this->seed(PhylumsSeeder::class);
        $this->seed(ClasesSeeder::class);
        $this->seed(OrdensSeeder::class);
        $this->seed(CaractMacroActinomicetoSeeder::class);
        $this->seed(CaractMicroActinomicetoSeeder::class);
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
    public function exportar_excel_actinomicetos()
    {
        Excel::fake();
        factory(Actinomiceto::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->get('/exportar/actinomicetos');
        $response->assertStatus(200);

        Excel::assertDownloaded('actinomicetos.xlsx', function (ActinomicetosExport $export) {
            return $export->view()->getData()['actinomicetos'] == Actinomiceto::all();
        });
    }

    /** @test */
    public function exportar_excel_colors_actinomicetos()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/colors-actinomiceto');
        $response->assertStatus(200);

        Excel::assertDownloaded('colors.xlsx', function (ColorsActinomicetosExport $export) {
            return $export->view()->getData()['tipos'] == ColorActinomiceto::all();
        });
    }

    /** @test */
    public function exportar_excel_texturas_actinomicetos()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/texturas-actinomiceto');
        $response->assertStatus(200);

        Excel::assertDownloaded('texturas.xlsx', function (TexturasActinomicetosExport $export) {
            return $export->view()->getData()['tipos'] == TexturaActinomiceto::all();
        });
    }

    /** @test */
    public function exportar_excel_formas_macro_actinomicetos()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/formas-macro-actinomiceto');
        $response->assertStatus(200);

        Excel::assertDownloaded('formasMacro.xlsx', function (FormasMacroActinomicetosExport $export) {
            return $export->view()->getData()['tipos'] == FormaCaractMacroActinomiceto::all();
        });
    }

    /** @test */
    public function exportar_excel_formas_micro_actinomicetos()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/formas-micro-actinomiceto');
        $response->assertStatus(200);

        Excel::assertDownloaded('formasMicro.xlsx', function (FormasMicroActinomicetosExport $export) {
            return $export->view()->getData()['tipos'] == FormaCaractMicroActinomiceto::all();
        });
    }

    /** @test */
    public function exportar_excel_bordes_actinomicetos()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/bordes-actinomiceto');
        $response->assertStatus(200);

        Excel::assertDownloaded('bordes.xlsx', function (BordesActinomicetosExport $export) {
            return $export->view()->getData()['tipos'] == BordeActinomiceto::all();
        });
    }

    /** @test */
    public function exportar_excel_pigmentos_actinomicetos()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/pigmentos-actinomiceto');
        $response->assertStatus(200);

        Excel::assertDownloaded('pigmentos.xlsx', function (PigmentosActinomicetosExport $export) {
            return $export->view()->getData()['tipos'] == PigmentoActinomiceto::all();
        });
    }

    /** @test */
    public function exportar_excel_tincions_actinomicetos()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/tincions-actinomiceto');
        $response->assertStatus(200);

        Excel::assertDownloaded('tincions.xlsx', function (TincionsActinomicetosExport $export) {
            return $export->view()->getData()['tipos'] == TincionGramActinomiceto::all();
        });
    }

    /** @test */
    public function exportar_excel_superficies_actinomicetos()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/superficies-actinomiceto');
        $response->assertStatus(200);

        Excel::assertDownloaded('superficies.xlsx', function (SuperficiesActinomicetosExport $export) {
            return $export->view()->getData()['tipos'] == SuperficieActinomiceto::all();
        });
    }

    /** @test */
    public function exportar_excel_micelios_actinomicetos()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/micelios-actinomiceto');
        $response->assertStatus(200);

        Excel::assertDownloaded('micelios.xlsx', function (MiceliosActinomicetosExport $export) {
            return $export->view()->getData()['tipos'] == MicelioActinomiceto::all();
        });
    }

    /** @test */
    public function exportar_excel_conidioforos_actinomicetos()
    {
        Excel::fake();
        $response = $this->actingAs($this->user)
            ->get('/exportar/conidioforos-actinomiceto');
        $response->assertStatus(200);

        Excel::assertDownloaded('conidioforos.xlsx', function (ConidioforosActinomicetosExport $export) {
            return $export->view()->getData()['tipos'] == ConidioforoActinomiceto::all();
        });
    }

    //-------------- Info Obtenida Tabla ----------------------------------

    /** @test */
    public function exportar_excel_tabla_actinomicetos()
    {
        Excel::fake();
        $datos = factory(Actinomiceto::class, 10)->create();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/actinomicetos', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-actinomicetos.xlsx', function (TablaActinomicetosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_colors_actinomicetos()
    {
        Excel::fake();
        $datos = ColorActinomiceto::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/colors-actinomiceto', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-colors.xlsx', function (TablaColorsActinomicetosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_texturas_actinomicetos()
    {
        Excel::fake();
        $datos = TexturaActinomiceto::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/texturas-actinomiceto', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-texturas.xlsx', function (TablaTexturasActinomicetosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_formas_macro_actinomicetos()
    {
        Excel::fake();
        $datos = FormaCaractMacroActinomiceto::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/formas-macro-actinomiceto', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-formasMacro.xlsx', function (TablaFormasMacroActinomicetosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_formas_micro_actinomicetos()
    {
        Excel::fake();
        $datos = FormaCaractMicroActinomiceto::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/formas-micro-actinomiceto', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-formasMicro.xlsx', function (TablaFormasMicroActinomicetosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_bordes_actinomicetos()
    {
        Excel::fake();
        $datos = BordeActinomiceto::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/bordes-actinomiceto', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-bordes.xlsx', function (TablaBordesActinomicetosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_pigmentos_actinomicetos()
    {
        Excel::fake();
        $datos = PigmentoActinomiceto::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/pigmentos-actinomiceto', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-pigmentos.xlsx', function (TablaPigmentosActinomicetosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_tincions_actinomicetos()
    {
        Excel::fake();
        $datos = TincionGramActinomiceto::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/tincions-actinomiceto', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-tincions.xlsx', function (TablaTincionsActinomicetosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_superficies_actinomicetos()
    {
        Excel::fake();
        $datos = SuperficieActinomiceto::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/superficies-actinomiceto', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-superficies.xlsx', function (TablaSuperficiesActinomicetosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_micelios_actinomicetos()
    {
        Excel::fake();
        $datos = MicelioActinomiceto::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/micelios-actinomiceto', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-micelios.xlsx', function (TablaMiceliosActinomicetosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }

    /** @test */
    public function exportar_excel_tabla_conidioforos_actinomicetos()
    {
        Excel::fake();
        $datos = ConidioforoActinomiceto::all();
        $response = $this->actingAs($this->user)
            ->post('/exportar/tabla/conidioforos-actinomiceto', ['datos' => $datos]);
        $response->assertStatus(200);
        Excel::assertDownloaded('tabla-conidioforos.xlsx', function (TablaConidioforosActinomicetosExport $export) use ($datos) {
            return $export->view()->getData()['datos'] == $datos;
        });
    }
}
