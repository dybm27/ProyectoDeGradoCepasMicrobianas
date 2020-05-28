<?php

namespace App\Http\Controllers;

use App\Exports\ActinomicetosExport;
use App\Exports\BacteriasExport;
use App\Exports\CepasExport;
use App\Exports\HongosExport;
use App\Exports\LevadurasExport;
use App\Exports\MetodosActinomicetosExport;
use App\Exports\MetodosBacteriasExport;
use App\Exports\MetodosHongosExport;
use App\Exports\MetodosLevadurasExport;
use App\Exports\SeguimientosExport;
use App\Exports\TablaActinomicetosExport;
use App\Exports\TablaBacteriasExport;
use App\Exports\TablaCepasExport;
use App\Exports\TablaHongosExport;
use App\Exports\TablaLevadurasExport;
use App\Exports\TablaMetodosActinomicetosExport;
use App\Exports\TablaMetodosBacteriasExport;
use App\Exports\TablaMetodosHongosExport;
use App\Exports\TablaMetodosLevadurasExport;
use App\Exports\TablaSeguimientosExport;
use App\Exports\TablaUsuariosExport;
use App\Exports\UsuariosExport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportarExcelController extends Controller
{
    public function exportarCepas()
    {
        return Excel::download(new CepasExport, 'cepas.xlsx');
    }

    public function exportarCepasTabla(Request $request)
    {
        return Excel::download(new TablaCepasExport($request->datos), 'tabla-cepas.xlsx');
    }


    public function exportarBacterias()
    {
        return Excel::download(new BacteriasExport, 'bacterias.xlsx');
    }

    public function exportarBacteriasTabla(Request $request)
    {
        return Excel::download(new TablaBacteriasExport($request->datos), 'tabla-bacterias.xlsx');
    }

    public function exportarHongos()
    {
        return Excel::download(new HongosExport, 'hongos.xlsx');
    }

    public function exportarHongosTabla(Request $request)
    {
        return Excel::download(new TablaHongosExport($request->datos), 'tabla-hongos.xlsx');
    }

    public function exportarLevaduras()
    {
        return Excel::download(new LevadurasExport, 'levaduras.xlsx');
    }

    public function exportarLevadurasTabla(Request $request)
    {
        return Excel::download(new TablaLevadurasExport($request->datos), 'tabla-levaduras.xlsx');
    }

    public function exportarActinomicetos()
    {
        return Excel::download(new ActinomicetosExport, 'actinomicetos.xlsx');
    }

    public function exportarActinomicetosTabla(Request $request)
    {
        return Excel::download(new TablaActinomicetosExport($request->datos), 'tabla-actinomicetos.xlsx');
    }

    public function exportarMetodosBacterias()
    {
        return Excel::download(new MetodosBacteriasExport, 'metodos-bacterias.xlsx');
    }

    public function exportarMetodosBacteriasTabla(Request $request)
    {
        return Excel::download(new TablaMetodosBacteriasExport($request->datos), 'tabla-metodos-bacterias.xlsx');
    }

    public function exportarMetodosHongos()
    {
        return Excel::download(new MetodosHongosExport, 'todas-hongos.xlsx');
    }

    public function exportarMetodosHongosTabla(Request $request)
    {
        return Excel::download(new TablaMetodosHongosExport($request->datos), 'tabla-metodos-hongos.xlsx');
    }

    public function exportarMetodosLevaduras()
    {
        return Excel::download(new MetodosLevadurasExport, 'todas-levaduras.xlsx');
    }

    public function exportarMetodosLevadurasTabla(Request $request)
    {
        return Excel::download(new TablaMetodosLevadurasExport($request->datos), 'tabla-metodos-levaduras.xlsx');
    }

    public function exportarMetodosActinomicetos()
    {
        return Excel::download(new MetodosActinomicetosExport, 'todas-actinomicetos.xlsx');
    }

    public function exportarMetodosActinomicetosTabla(Request $request)
    {
        return Excel::download(new TablaMetodosActinomicetosExport($request->datos), 'tabla-metodos-actinomicetos.xlsx');
    }

    public function exportarUsuarios()
    {
        return Excel::download(new UsuariosExport, 'usuarios.xlsx');
    }

    public function exportarUsuariosTabla(Request $request)
    {
        return Excel::download(new TablaUsuariosExport($request->datos), 'tabla-usuarios.xlsx');
    }

    public function exportarSeguimientos()
    {
        return Excel::download(new SeguimientosExport, 'segumientos.xlsx');
    }

    public function exportarSeguimientosTabla(Request $request)
    {
        return Excel::download(new TablaSeguimientosExport($request->datos), 'tabla-segumientos.xlsx');
    }
}
