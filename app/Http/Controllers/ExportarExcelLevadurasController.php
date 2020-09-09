<?php

namespace App\Http\Controllers;

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
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportarExcelLevadurasController extends Controller
{
    public function levaduras()
    {
        return Excel::download(new LevadurasExport, 'levaduras.xlsx');
    }

    public function levadurasTabla(Request $request)
    {
        return Excel::download(new TablaLevadurasExport($request->datos), 'tabla-levaduras.xlsx');
    }

    public function metodosLevaduras()
    {
        return Excel::download(new MetodosLevadurasExport, 'metodos-levaduras.xlsx');
    }

    public function metodosLevadurasTabla(Request $request)
    {
        return Excel::download(new TablaMetodosLevadurasExport($request->datos), 'tabla-metodos-levaduras.xlsx');
    }

    public function texturas()
    {
        return Excel::download(new TexturasLevadurasExport, 'texturas.xlsx');
    }

    public function texturasTabla(Request $request)
    {
        return Excel::download(new TablaTexturasLevadurasExport($request->datos), 'tabla-texturas.xlsx');
    }

    public function colors()
    {
        return Excel::download(new ColorsLevadurasExport, 'colors.xlsx');
    }

    public function colorsTabla(Request $request)
    {
        return Excel::download(new TablaColorsLevadurasExport($request->datos), 'tabla-colors.xlsx');
    }

    public function tiposMetodos()
    {
        return Excel::download(new TiposMetodosLevadurasExport, 'tiposMetodos.xlsx');
    }

    public function tiposMetodosTabla(Request $request)
    {
        return Excel::download(new TablaTiposMetodosLevadurasExport($request->datos), 'tabla-tiposMetodos.xlsx');
    }
}
