<?php

namespace App\Http\Controllers;

use App\Exports\InvestigadoresExport;
use App\Exports\ObjetivosExport;
use App\Exports\ProyectosExport;
use App\Exports\PublicacionesExport;
use App\Exports\TablaInvestigadoresExport;
use App\Exports\TablaObjetivosExport;
use App\Exports\TablaProyectosExport;
use App\Exports\TablaPublicacionesExport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportarExcelSitioWebController extends Controller
{
    public function objetivos()
    {
        return Excel::download(new ObjetivosExport, 'objetivos.xlsx');
    }

    public function objetivosTabla(Request $request)
    {
        return Excel::download(new TablaObjetivosExport($request->datos), 'tabla-objetivos.xlsx');
    }

    public function investigadores()
    {
        return Excel::download(new InvestigadoresExport, 'investigadores.xlsx');
    }

    public function investigadoresTabla(Request $request)
    {
        return Excel::download(new TablaInvestigadoresExport($request->datos), 'tabla-investigadores.xlsx');
    }

    public function proyectos()
    {
        return Excel::download(new ProyectosExport, 'proyectos.xlsx');
    }

    public function proyectosTabla(Request $request)
    {
        return Excel::download(new TablaProyectosExport($request->datos), 'tabla-proyectos.xlsx');
    }

    public function publicaciones()
    {
        return Excel::download(new PublicacionesExport, 'publicaciones.xlsx');
    }

    public function publicacionesTabla(Request $request)
    {
        return Excel::download(new TablaPublicacionesExport($request->datos), 'tabla-publicaciones.xlsx');
    }
}
