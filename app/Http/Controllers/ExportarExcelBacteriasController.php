<?php

namespace App\Http\Controllers;

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
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportarExcelBacteriasController extends Controller
{
    public function bacterias()
    {
        return Excel::download(new BacteriasExport, 'bacterias.xlsx');
    }

    public function bacteriasTabla(Request $request)
    {
        return Excel::download(new TablaBacteriasExport($request->datos), 'tabla-bacterias.xlsx');
    }

    public function metodosBacterias()
    {
        return Excel::download(new MetodosBacteriasExport, 'metodos-bacterias.xlsx');
    }

    public function metodosBacteriasTabla(Request $request)
    {
        return Excel::download(new TablaMetodosBacteriasExport($request->datos), 'tabla-metodos-bacterias.xlsx');
    }

    public function formasMacro()
    {
        return Excel::download(new FormasMacroBacteriasExport, 'formasMacro.xlsx');
    }

    public function formasMacroTabla(Request $request)
    {
        return Excel::download(new TablaFormasMacroBacteriasExport($request->datos), 'tabla-formasMacro.xlsx');
    }

    public function formasMicro()
    {
        return Excel::download(new FormasMicroBacteriasExport, 'formasMicro.xlsx');
    }

    public function formasMicroTabla(Request $request)
    {
        return Excel::download(new TablaFormasMicroBacteriasExport($request->datos), 'tabla-formasMicro.xlsx');
    }

    public function bordes()
    {
        return Excel::download(new BordesBacteriasExport, 'bordes.xlsx');
    }

    public function bordesTabla(Request $request)
    {
        return Excel::download(new TablaBordesBacteriasExport($request->datos), 'tabla-bordes.xlsx');
    }

    public function detalles()
    {
        return Excel::download(new DetallesBacteriasExport, 'detalles.xlsx');
    }

    public function detallesTabla(Request $request)
    {
        return Excel::download(new TablaDetallesBacteriasExport($request->datos), 'tabla-detalles.xlsx');
    }

    public function elevacions()
    {
        return Excel::download(new ElevacionsBacteriasExport, 'elevacions.xlsx');
    }

    public function elevacionsTabla(Request $request)
    {
        return Excel::download(new TablaElevacionsBacteriasExport($request->datos), 'tabla-elevacions.xlsx');
    }

    public function superficies()
    {
        return Excel::download(new SuperficiesBacteriasExport, 'superficies.xlsx');
    }

    public function superficiesTabla(Request $request)
    {
        return Excel::download(new TablaSuperficiesBacteriasExport($request->datos), 'tabla-superficies.xlsx');
    }

    public function colors()
    {
        return Excel::download(new ColorsBacteriasExport, 'colors.xlsx');
    }

    public function colorsTabla(Request $request)
    {
        return Excel::download(new TablaColorsBacteriasExport($request->datos), 'tabla-colors.xlsx');
    }

    public function tiposMetodos()
    {
        return Excel::download(new TiposMetodosBacteriasExport, 'tiposMetodos.xlsx');
    }

    public function tiposMetodosTabla(Request $request)
    {
        return Excel::download(new TablaTiposMetodosBacteriasExport($request->datos), 'tabla-tiposMetodos.xlsx');
    }

    public function tiposAgars()
    {
        return Excel::download(new TiposAgarsBacteriasExport, 'tiposAgars.xlsx');
    }

    public function tiposAgarsTabla(Request $request)
    {
        return Excel::download(new TablaTiposAgarsBacteriasExport($request->datos), 'tabla-tiposAgars.xlsx');
    }
}
