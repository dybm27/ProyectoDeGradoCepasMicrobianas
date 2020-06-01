<?php

namespace App\Http\Controllers;

use App\Exports\CepasExport;
use App\Exports\ClasesExport;
use App\Exports\DivisionsExport;
use App\Exports\EspeciesExport;
use App\Exports\FamiliasExport;
use App\Exports\GenerosExport;
use App\Exports\OrdensExport;
use App\Exports\PhylumsExport;
use App\Exports\ReinosExport;
use App\Exports\TablaCepasExport;
use App\Exports\TablaClasesExport;
use App\Exports\TablaDivisionsExport;
use App\Exports\TablaEspeciesExport;
use App\Exports\TablaFamiliasExport;
use App\Exports\TablaGenerosExport;
use App\Exports\TablaOrdensExport;
use App\Exports\TablaPhylumsExport;
use App\Exports\TablaReinosExport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportarExcelCepasController extends Controller
{
    public function cepas()
    {
        return Excel::download(new CepasExport, 'cepas.xlsx');
    }

    public function cepasTabla(Request $request)
    {
        return Excel::download(new TablaCepasExport($request->datos), 'tabla-cepas.xlsx');
    }

    public function generos()
    {
        return Excel::download(new GenerosExport, 'generos.xlsx');
    }

    public function generosTabla(Request $request)
    {
        return Excel::download(new TablaGenerosExport($request->datos), 'tabla-generos.xlsx');
    }

    public function especies()
    {
        return Excel::download(new EspeciesExport, 'especies.xlsx');
    }

    public function especiesTabla(Request $request)
    {
        return Excel::download(new TablaEspeciesExport($request->datos), 'tabla-especies.xlsx');
    }

    public function ordens()
    {
        return Excel::download(new OrdensExport, 'ordens.xlsx');
    }

    public function ordensTabla(Request $request)
    {
        return Excel::download(new TablaOrdensExport($request->datos), 'tabla-ordens.xlsx');
    }

    public function phylums()
    {
        return Excel::download(new PhylumsExport, 'phylums.xlsx');
    }

    public function phylumsTabla(Request $request)
    {
        return Excel::download(new TablaPhylumsExport($request->datos), 'tabla-phylums.xlsx');
    }

    public function clases()
    {
        return Excel::download(new ClasesExport, 'clases.xlsx');
    }

    public function clasesTabla(Request $request)
    {
        return Excel::download(new TablaClasesExport($request->datos), 'tabla-clases.xlsx');
    }

    public function familias()
    {
        return Excel::download(new FamiliasExport, 'familias.xlsx');
    }

    public function familiasTabla(Request $request)
    {
        return Excel::download(new TablaFamiliasExport($request->datos), 'tabla-familias.xlsx');
    }

    public function divisions()
    {
        return Excel::download(new DivisionsExport, 'divisions.xlsx');
    }

    public function divisionsTabla(Request $request)
    {
        return Excel::download(new TablaDivisionsExport($request->datos), 'tabla-divisions.xlsx');
    }

    public function reinos()
    {
        return Excel::download(new ReinosExport, 'reinos.xlsx');
    }

    public function reinosTabla(Request $request)
    {
        return Excel::download(new TablaReinosExport($request->datos), 'tabla-reinos.xlsx');
    }
}
