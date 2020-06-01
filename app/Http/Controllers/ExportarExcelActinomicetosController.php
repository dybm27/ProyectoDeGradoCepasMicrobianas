<?php

namespace App\Http\Controllers;

use App\Exports\ActinomicetosExport;
use App\Exports\BordesActinomicetosExport;
use App\Exports\ColorsActinomicetosExport;
use App\Exports\ConidioforosActinomicetosExport;
use App\Exports\FormasMacroActinomicetosExport;
use App\Exports\FormasMicroActinomicetosExport;
use App\Exports\MetodosActinomicetosExport;
use App\Exports\MiceliosActinomicetosExport;
use App\Exports\PigmentosActinomicetosExport;
use App\Exports\SuperficiesActinomicetosExport;
use App\Exports\TablaActinomicetosExport;
use App\Exports\TablaBordesActinomicetosExport;
use App\Exports\TablaColorsActinomicetosExport;
use App\Exports\TablaConidioforosActinomicetosExport;
use App\Exports\TablaFormasMacroActinomicetosExport;
use App\Exports\TablaFormasMicroActinomicetosExport;
use App\Exports\TablaMetodosActinomicetosExport;
use App\Exports\TablaMiceliosActinomicetosExport;
use App\Exports\TablaPigmentosActinomicetosExport;
use App\Exports\TablaSuperficiesActinomicetosExport;
use App\Exports\TablaTexturasActinomicetosExport;
use App\Exports\TablaTincionsActinomicetosExport;
use App\Exports\TexturasActinomicetosExport;
use App\Exports\TincionsActinomicetosExport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportarExcelActinomicetosController extends Controller
{
    public function actinomicetos()
    {
        return Excel::download(new ActinomicetosExport, 'actinomicetos.xlsx');
    }

    public function actinomicetosTabla(Request $request)
    {
        return Excel::download(new TablaActinomicetosExport($request->datos), 'tabla-actinomicetos.xlsx');
    }

    public function metodosActinomicetos()
    {
        return Excel::download(new MetodosActinomicetosExport, 'todas-actinomicetos.xlsx');
    }

    public function metodosActinomicetosTabla(Request $request)
    {
        return Excel::download(new TablaMetodosActinomicetosExport($request->datos), 'tabla-metodos-actinomicetos.xlsx');
    }

    public function formasMacro()
    {
        return Excel::download(new FormasMacroActinomicetosExport, 'formasMacro.xlsx');
    }

    public function formasMacroTabla(Request $request)
    {
        return Excel::download(new TablaFormasMacroActinomicetosExport($request->datos), 'tabla-formasMacro.xlsx');
    }

    public function formasMicro()
    {
        return Excel::download(new FormasMicroActinomicetosExport, 'formasMicro.xlsx');
    }

    public function formasMicroTabla(Request $request)
    {
        return Excel::download(new TablaFormasMicroActinomicetosExport($request->datos), 'tabla-formasMicro.xlsx');
    }

    public function bordes()
    {
        return Excel::download(new BordesActinomicetosExport, 'bordes.xlsx');
    }

    public function bordesTabla(Request $request)
    {
        return Excel::download(new TablaBordesActinomicetosExport($request->datos), 'tabla-bordes.xlsx');
    }

    public function texturas()
    {
        return Excel::download(new TexturasActinomicetosExport, 'texturas.xlsx');
    }

    public function texturasTabla(Request $request)
    {
        return Excel::download(new TablaTexturasActinomicetosExport($request->datos), 'tabla-texturas.xlsx');
    }

    public function pigmentos()
    {
        return Excel::download(new PigmentosActinomicetosExport, 'pigmentos.xlsx');
    }

    public function pigmentosTabla(Request $request)
    {
        return Excel::download(new TablaPigmentosActinomicetosExport($request->datos), 'tabla-pigmentos.xlsx');
    }

    public function superficies()
    {
        return Excel::download(new SuperficiesActinomicetosExport, 'superficies.xlsx');
    }

    public function superficiesTabla(Request $request)
    {
        return Excel::download(new TablaSuperficiesActinomicetosExport($request->datos), 'tabla-superficies.xlsx');
    }

    public function colors()
    {
        return Excel::download(new ColorsActinomicetosExport, 'colors.xlsx');
    }

    public function colorsTabla(Request $request)
    {
        return Excel::download(new TablaColorsActinomicetosExport($request->datos), 'tabla-colors.xlsx');
    }

    public function micelios()
    {
        return Excel::download(new MiceliosActinomicetosExport, 'micelios.xlsx');
    }

    public function miceliosTabla(Request $request)
    {
        return Excel::download(new TablaMiceliosActinomicetosExport($request->datos), 'tabla-micelios.xlsx');
    }

    public function conidioforos()
    {
        return Excel::download(new ConidioforosActinomicetosExport, 'conidioforos.xlsx');
    }

    public function conidioforosTabla(Request $request)
    {
        return Excel::download(new TablaConidioforosActinomicetosExport($request->datos), 'tabla-conidioforos.xlsx');
    }

    public function tincions()
    {
        return Excel::download(new TincionsActinomicetosExport, 'tincions.xlsx');
    }

    public function tincionsTabla(Request $request)
    {
        return Excel::download(new TablaTincionsActinomicetosExport($request->datos), 'tabla-tincions.xlsx');
    }
}
