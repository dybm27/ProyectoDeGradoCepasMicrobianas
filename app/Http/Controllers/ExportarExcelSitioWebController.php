<?php

namespace App\Http\Controllers;

use App\Exports\ActividadesExport;
use App\Exports\EquipamientosExport;
use App\Exports\InvestigadoresExport;
use App\Exports\NoticiasExport;
use App\Exports\NovedadesExport;
use App\Exports\ObjetivosExport;
use App\Exports\ProyectosExport;
use App\Exports\PublicacionesExport;
use App\Exports\TablaActividadesExport;
use App\Exports\TablaEquipamientosExport;
use App\Exports\TablaInvestigadoresExport;
use App\Exports\TablaNoticiasExport;
use App\Exports\TablaNovedadesExport;
use App\Exports\TablaObjetivosExport;
use App\Exports\TablaProyectosExport;
use App\Exports\TablaPublicacionesExport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportarExcelSitioWebController extends Controller
{
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

    public function equipamientos()
    {
        return Excel::download(new EquipamientosExport, 'equipamientos.xlsx');
    }

    public function equipamientosTabla(Request $request)
    {
        return Excel::download(new TablaEquipamientosExport($request->datos), 'tabla-equipamientos.xlsx');
    }

    public function noticias()
    {
        return Excel::download(new NoticiasExport, 'noticias.xlsx');
    }

    public function noticiasTabla(Request $request)
    {
        return Excel::download(new TablaNoticiasExport($request->datos), 'tabla-noticias.xlsx');
    }

    public function novedades()
    {
        return Excel::download(new NovedadesExport, 'novedades.xlsx');
    }

    public function novedadesTabla(Request $request)
    {
        return Excel::download(new TablaNovedadesExport($request->datos), 'tabla-novedades.xlsx');
    }

    public function actividades()
    {
        return Excel::download(new ActividadesExport, 'actividades.xlsx');
    }

    public function actividadesTabla(Request $request)
    {
        return Excel::download(new TablaActividadesExport($request->datos), 'tabla-actividades.xlsx');
    }
}
