<?php

namespace App\Http\Controllers;

use App\Exports\SeguimientosExport;
use App\Exports\TablaSeguimientosExport;
use App\Exports\TablaUsuariosExport;
use App\Exports\UsuariosExport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportarExcelUsuariosController extends Controller
{
    public function usuarios()
    {
        return Excel::download(new UsuariosExport, 'usuarios.xlsx');
    }

    public function usuariosTabla(Request $request)
    {
        return Excel::download(new TablaUsuariosExport($request->datos), 'tabla-usuarios.xlsx');
    }

    public function seguimientos()
    {
        return Excel::download(new SeguimientosExport, 'segumientos.xlsx');
    }

    public function seguimientosTabla(Request $request)
    {
        return Excel::download(new TablaSeguimientosExport($request->datos), 'tabla-segumientos.xlsx');
    }
}
