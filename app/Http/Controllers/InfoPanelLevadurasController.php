<?php

namespace App\Http\Controllers;

use App\ColorLevadura;
use App\Levadura;
use App\MetodoConserLevadura;
use App\TexturaLevadura;
use App\TipoMetodoConservacionLevadura;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InfoPanelLevadurasController extends Controller
{
    public function levaduras(Request $request)
    {
        $cepas = DB::table('cepas')->join('levaduras', 'cepas.id', '=', 'levaduras.cepa_id')
            ->join('generos', 'cepas.genero_id', '=', 'generos.id')
            ->join('especies', 'cepas.especie_id', '=', 'especies.id')
            ->join('clases', 'levaduras.clase_id', '=', 'clases.id')
            ->join('ordens', 'levaduras.orden_id', '=', 'ordens.id')
            ->join('familias', 'levaduras.familia_id', '=', 'familias.id')
            ->join('divisions', 'levaduras.division_id', '=', 'divisions.id');

        $query = $cepas->select(
            'cepas.*',
            'generos.nombre As nombre_genero',
            'especies.nombre As nombre_especie',
            'clases.nombre As nombre_clase',
            'ordens.nombre As nombre_orden',
            'familias.nombre As nombre_familia',
            'divisions.nombre As nombre_division'
        );

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
                    ->orWhere('clases.nombre', 'like', $value)
                    ->orWhere('familias.nombre', 'like', $value)
                    ->orWhere('ordens.nombre', 'like', $value)
                    ->orWhere('divisions.nombre', 'like', $value)
                    ->orWhere('cepas.estado', 'like', $value)
                    ->orWhere('cepas.origen', 'like', $value)
                    ->orWhere('cepas.id', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $query->paginate($perPage);

        return $pagination;
    }

    public function metodos(Request $request)
    {
        $cepa = Levadura::where('cepa_id',  $request->id)->first();
        $metodos = MetodoConserLevadura::where('levadura_id',  $cepa->id)
            ->join(
                'tipo_metodo_conservacion_levaduras',
                'metodo_conser_levaduras.tipo_id',
                '=',
                'tipo_metodo_conservacion_levaduras.id'
            );

        $query = $metodos->select(
            'metodo_conser_levaduras.*',
            '.nombre As nombre_tipo_metodo'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $query = $query->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $query = $query->where('metodo_conser_levaduras.id', 'like', $value)
                ->orWhere('metodo_conser_levaduras.fecha', 'like', $value)
                ->orWhere('metodo_conser_levaduras.numero_replicas', 'like', $value)
                ->orWhere('metodo_conser_levaduras.recuento_microgota', 'like', $value)
                ->orWhere('metodo_conser_levaduras.medio_cultivo', 'like', $value)
                ->orWhere('metodo_conser_levaduras.numero_pases', 'like', $value)
                ->orWhere('tipo_metodo_conservacion_levaduras.nombre', 'like', $value);
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $query->paginate($perPage);

        return $pagination;
    }

    public function texturas(Request $request)
    {
        $tipo = TexturaLevadura::select(
            'textura_levaduras.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $tipo = $tipo->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $tipo = $tipo->where(function ($tipo) use ($value) {
                return $tipo->orWhere('textura_levaduras.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $tipo->paginate($perPage);

        return $pagination;
    }

    public function colors(Request $request)
    {
        $tipo = ColorLevadura::select(
            'color_levaduras.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $tipo = $tipo->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $tipo = $tipo->where(function ($tipo) use ($value) {
                return $tipo->orWhere('color_levaduras.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $tipo->paginate($perPage);

        return $pagination;
    }

    public function tiposMetodos(Request $request)
    {
        $tipo = TipoMetodoConservacionLevadura::select(
            'tipo_metodo_conservacion_levaduras.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $tipo = $tipo->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $tipo = $tipo->where(function ($tipo) use ($value) {
                return $tipo->orWhere('tipo_metodo_conservacion_levaduras.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $tipo->paginate($perPage);

        return $pagination;
    }

    public function infoCaract()
    {
        $colors = ColorLevadura::all();
        $texturas = TexturaLevadura::all();
        $tipo_metodo = TipoMetodoConservacionLevadura::all();
        $array = [
            'caract_macro' => [
                'colors' => $colors, 'texturas' => $texturas,
            ],

            'metodo_conser' => [
                'tipo_metodo' => $tipo_metodo,
            ]
        ];
        return $array;
    }
}
