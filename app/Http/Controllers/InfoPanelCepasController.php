<?php

namespace App\Http\Controllers;

use App\Actinomiceto;
use App\Bacteria;
use App\Cepa;
use App\Clase;
use App\Division;
use App\Especie;
use App\Familia;
use App\Genero;
use App\GrupoMicrobiano;
use App\HongoFilamentoso;
use App\Levadura;
use App\Orden;
use App\Phylum;
use App\Reino;
use Illuminate\Http\Request;

class InfoPanelCepasController extends Controller
{
    public function cepas()
    {
        return Cepa::with(['bacteria', 'hongo', 'actinomiceto', 'levadura'])->get();
    }

    public function cepasTabla(Request $request)
    {
        $cepas = Cepa::join('generos', 'cepas.genero_id', '=', 'generos.id')
            ->join('especies', 'cepas.especie_id', '=', 'especies.id')
            ->join('grupo_microbianos', 'cepas.grupo_microbiano_id', '=', 'grupo_microbianos.id');

        $query = $cepas->select(
            'cepas.*',
            'generos.nombre As nombre_genero',
            'especies.nombre As nombre_especie',
            'grupo_microbianos.nombre As nombre_grupo'
        )->with([
            //'bacteria',
            'hongo.orden', 'hongo.phylum', 'hongo.familia', 'hongo.clase',
            'actinomiceto.orden', 'actinomiceto.phylum', 'actinomiceto.reino', 'actinomiceto.clase',
            'levadura.orden', 'levadura.division', 'levadura.familia', 'levadura.clase'
        ]);

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $query = $query->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $query = $query->where(function ($query) use ($value) {
                return $query->where('cepas.codigo', 'like', $value)
                    ->orWhere('generos.nombre', 'like', $value)
                    ->orWhere('especies.nombre', 'like', $value)
                    ->orWhere('grupo_microbianos.nombre', 'like', $value)
                    ->orWhere('cepas.estado', 'like', $value)
                    ->orWhere('cepas.origen', 'like', $value)
                    ->orWhere('cepas.id', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $query->paginate($perPage);

        return $pagination;
    }

    public function obtenerCepa(Request $request)
    {
        $cepa = Cepa::where('id', $request->id)->first();
        switch ($cepa->grupo_microbiano_id) {
            case 1:
                $query = Bacteria::where('cepa_id', $request->id)
                    ->with(['cepa'])->first();
                break;
            case 2:
                $query = HongoFilamentoso::where('cepa_id', $request->id)
                    ->with(['cepa'])->first();
                break;
            case 3:
                $query = Levadura::where('cepa_id', $request->id)
                    ->with(['cepa'])->first();
                break;
            case 4:
                $query = Actinomiceto::where('cepa_id', $request->id)
                    ->with(['cepa'])->first();
                break;
        }
        return $query;
    }

    public function obtenerCaracteristicasCepa(Request $request)
    {
        $cepa = Cepa::where('id', $request->id)->where('slug', $request->slug)->first();
        if (empty($cepa)) {
            return 'No Existe';
        }
        switch ($cepa->grupo_microbiano_id) {
            case 1:
                $query = Bacteria::where('cepa_id', $cepa->id)
                    ->with([
                        'cepa', 'caractMacroscopicas', 'caractMicroscopica', 'caractBioquimica',
                        'caractFisiologica', 'identMolecular', 'metodosConservacion'
                    ])
                    ->first();
                break;
            case 2:
                $query = HongoFilamentoso::where('cepa_id', $cepa->id)
                    ->with([
                        'cepa', 'caractMacroscopicas', 'caractMicroscopica',
                        'caractBioquimica', 'identMolecular', 'metodosConservacion'
                    ])
                    ->first();
                break;
            case 3:
                $query = Levadura::where('cepa_id', $cepa->id)
                    ->with([
                        'cepa', 'caractMacroscopicas', 'caractMicroscopica',
                        'caractBioquimica', 'identMolecular', 'metodosConservacion'
                    ])
                    ->first();
                break;
            case 4:
                $query = Actinomiceto::where('cepa_id', $cepa->id)
                    ->with([
                        'cepa', 'caractMacroscopicas', 'caractMicroscopica', 'identBioquimica',
                        'otrasCaracteristicas'/*, 'caractMolecular', 'metodosConservacion'*/
                    ])->first();
                break;
        }
        return $query;
    }

    public function infoTipos()
    {
        $gmicrobianos = GrupoMicrobiano::all();
        $generos = Genero::all();
        $especies = Especie::all();
        $phylums = Phylum::all();
        $ordens = Orden::all();
        $reinos = Reino::all();
        $divisiones = Division::all();
        $clases = Clase::all();
        $familias = Familia::all();
        $array = [
            'gmicrobianos' => $gmicrobianos, 'generos' => $generos,
            'especies' => $especies, 'phylums' => $phylums,
            'ordens' => $ordens, 'reinos' => $reinos,
            'divisiones' => $divisiones, 'clases' => $clases, 'familias' => $familias
        ];
        return $array;
    }

    public function generos(Request $request)
    {
        $generos = Genero::join(
            'grupo_microbianos',
            'generos.grupo_microbiano_id',
            '=',
            'grupo_microbianos.id'
        )
            ->select(
                'generos.*',
                'grupo_microbianos.nombre As nombre_grupo'
            );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $generos = $generos->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $generos = $generos->where(function ($generos) use ($value) {
                return $generos->orWhere('generos.nombre', 'like', $value)
                    ->orWhere('grupo_microbianos.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $generos->paginate($perPage);

        return $pagination;
    }

    public function especies(Request $request)
    {
        $especies = Especie::join('generos', 'especies.genero_id', '=', 'generos.id')
            ->select(
                'especies.*',
                'generos.nombre As nombre_genero'
            );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $especies = $especies->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $especies = $especies->where(function ($especies) use ($value) {
                return $especies->orWhere('especies.nombre', 'like', $value)
                    ->orWhere('generos.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $especies->paginate($perPage);

        return $pagination;
    }

    public function ordens(Request $request)
    {
        $ordens = Orden::select(
            'ordens.nombre',
            'ordens.id'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $ordens = $ordens->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $ordens = $ordens->where(function ($ordens) use ($value) {
                return $ordens->orWhere('ordens.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $ordens->paginate($perPage);

        return $pagination;
    }

    public function phylums(Request $request)
    {
        $phylums = Phylum::select(
            'phylums.nombre',
            'phylums.id'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $phylums = $phylums->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $phylums = $phylums->where(function ($phylums) use ($value) {
                return $phylums->orWhere('phylums.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $phylums->paginate($perPage);

        return $pagination;
    }

    public function clases(Request $request)
    {
        $clases = Clase::select(
            'clases.nombre',
            'clases.id'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $clases = $clases->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $clases = $clases->where(function ($clases) use ($value) {
                return $clases->orWhere('clases.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $clases->paginate($perPage);

        return $pagination;
    }

    public function familias(Request $request)
    {
        $familias = Familia::select(
            'familias.nombre',
            'familias.id'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $familias = $familias->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $familias = $familias->where(function ($familias) use ($value) {
                return $familias->orWhere('familias.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $familias->paginate($perPage);

        return $pagination;
    }

    public function divisions(Request $request)
    {
        $divisions = Division::select(
            'divisions.nombre',
            'divisions.id'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $divisions = $divisions->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $divisions = $divisions->where(function ($divisions) use ($value) {
                return $divisions->orWhere('divisions.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $divisions->paginate($perPage);

        return $pagination;
    }

    public function reinos(Request $request)
    {
        $reinos = Reino::select(
            'reinos.nombre',
            'reinos.id'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $reinos = $reinos->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $reinos = $reinos->where(function ($reinos) use ($value) {
                return $reinos->orWhere('reinos.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $reinos->paginate($perPage);

        return $pagination;
    }
}
