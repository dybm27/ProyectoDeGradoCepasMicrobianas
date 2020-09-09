<?php

namespace App\Http\Controllers;

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
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportarExcelHongosController extends Controller
{
    public function hongos()
    {
        return Excel::download(new HongosExport, 'hongos.xlsx');
    }

    public function hongosTabla(Request $request)
    {
        return Excel::download(new TablaHongosExport($request->datos), 'tabla-hongos.xlsx');
    }

    public function metodosHongos()
    {
        return Excel::download(new MetodosHongosExport, 'metodos-hongos.xlsx');
    }

    public function metodosHongosTabla(Request $request)
    {
        return Excel::download(new TablaMetodosHongosExport($request->datos), 'tabla-metodos-hongos.xlsx');
    }

    public function texturas()
    {
        return Excel::download(new TexturasHongosExport, 'texturas.xlsx');
    }

    public function texturasTabla(Request $request)
    {
        return Excel::download(new TablaTexturasHongosExport($request->datos), 'tabla-texturas.xlsx');
    }

    public function colors()
    {
        return Excel::download(new ColorsHongosExport, 'colors.xlsx');
    }

    public function colorsTabla(Request $request)
    {
        return Excel::download(new TablaColorsHongosExport($request->datos), 'tabla-colors.xlsx');
    }

    public function conidioforos()
    {
        return Excel::download(new ConidioforosHongosExport, 'conidioforos.xlsx');
    }

    public function conidioforosTabla(Request $request)
    {
        return Excel::download(new TablaConidioforosHongosExport($request->datos), 'tabla-conidioforos.xlsx');
    }

    public function esporasAsexual()
    {
        return Excel::download(new EsporasAsexualHongosExport, 'esporasAsexual.xlsx');
    }

    public function esporasAsexualTabla(Request $request)
    {
        return Excel::download(new TablaEsporasAsexualHongosExport($request->datos), 'tabla-esporasAsexual.xlsx');
    }

    public function esporasSexual()
    {
        return Excel::download(new EsporasSexualHongosExport, 'esporasSexual.xlsx');
    }

    public function esporasSexualTabla(Request $request)
    {
        return Excel::download(new TablaEsporasSexualHongosExport($request->datos), 'tabla-esporasSexual.xlsx');
    }

    public function tiposMetodos()
    {
        return Excel::download(new TiposMetodosHongosExport, 'tiposMetodos.xlsx');
    }

    public function tiposMetodosTabla(Request $request)
    {
        return Excel::download(new TablaTiposMetodosHongosExport($request->datos), 'tabla-tiposMetodos.xlsx');
    }
}
