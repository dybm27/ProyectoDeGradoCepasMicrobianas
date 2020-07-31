<?php

namespace App\Http\Controllers;

use App\Bacteria;
use App\BordeBacteria;
use App\Cepa;
use App\ColorBacteria;
use App\DetalleOpticoBacteria;
use App\ElevacionBacteria;
use App\FormaCaractMacroBacteria;
use App\FormaCaractMicroBacteria;
use App\MetodoConserBacteria;
use App\SuperficieBacteria;
use App\TipoAgarBacteria;
use App\TipoMetodoConservacionBacteria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InfoPanelBacteriasController extends Controller
{
    public function bacteriasTabla(Request $request)
    {
        $cepas = DB::table('cepas')
            ->join('bacterias', 'cepas.id', '=', 'bacterias.cepa_id')
            ->join('generos', 'cepas.genero_id', '=', 'generos.id')
            ->join('especies', 'cepas.especie_id', '=', 'especies.id');

        $query = $cepas->select(
            'cepas.*',
            'generos.nombre As nombre_genero',
            'especies.nombre As nombre_especie'
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
                    ->orWhere('cepas.estado', 'like', $value)
                    ->orWhere('cepas.origen', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $query->paginate($perPage);

        return $pagination;
    }

    public function metodos(Request $request)
    {
        $cepa = Bacteria::where('cepa_id',  $request->id)->first();
        $metodos = MetodoConserBacteria::where('bacteria_id',  $cepa->id)
            ->join(
                'tipo_metodo_conservacion_bacterias',
                'metodo_conser_bacterias.tipo_id',
                '=',
                'tipo_metodo_conservacion_bacterias.id'
            )->join(
                'tipo_agar_bacterias',
                'metodo_conser_bacterias.tipo_agar_id',
                '=',
                'tipo_agar_bacterias.id'
            );

        $query = $metodos->select(
            'metodo_conser_bacterias.*',
            'tipo_metodo_conservacion_bacterias.nombre As nombre_tipo_metodo',
            'tipo_agar_bacterias.nombre As nombre_tipo_agar'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $query = $query->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $query = $query->where('metodo_conser_bacterias.id', 'like', $value)
                ->orWhere('metodo_conser_bacterias.fecha', 'like', $value)
                ->orWhere('metodo_conser_bacterias.numero_replicas', 'like', $value)
                ->orWhere('metodo_conser_bacterias.recuento_microgota', 'like', $value)
                ->orWhere('tipo_metodo_conservacion_bacterias.nombre', 'like', $value)
                ->orWhere('tipo_agar_bacterias.nombre', 'like', $value);
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $query->paginate($perPage);

        return $pagination;
    }

    public function formasMacro(Request $request)
    {
        $formas = FormaCaractMacroBacteria::select(
            'forma_caract_macro_bacterias.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $formas = $formas->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $formas = $formas->where(function ($formas) use ($value) {
                return $formas->orWhere('forma_caract_macro_bacterias.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $formas->paginate($perPage);

        return $pagination;
    }
    public function formasMicro(Request $request)
    {
        $formas = FormaCaractMicroBacteria::select(
            'forma_caract_micro_bacterias.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $formas = $formas->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $formas = $formas->where(function ($formas) use ($value) {
                return $formas->orWhere('forma_caract_micro_bacterias.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $formas->paginate($perPage);

        return $pagination;
    }
    public function bordes(Request $request)
    {
        $bordes = BordeBacteria::select(
            'borde_bacterias.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $bordes = $bordes->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $bordes = $bordes->where(function ($bordes) use ($value) {
                return $bordes->orWhere('borde_bacterias.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $bordes->paginate($perPage);

        return $pagination;
    }
    public function detalles(Request $request)
    {
        $detalles = DetalleOpticoBacteria::select(
            'detalle_optico_bacterias.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $detalles = $detalles->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $detalles = $detalles->where(function ($detalles) use ($value) {
                return $detalles->orWhere('detalle_optico_bacterias.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $detalles->paginate($perPage);

        return $pagination;
    }
    public function elevacions(Request $request)
    {
        $elevacions = ElevacionBacteria::select(
            'elevacion_bacterias.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $elevacions = $elevacions->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $elevacions = $elevacions->where(function ($elevacions) use ($value) {
                return $elevacions->orWhere('elevacion_bacterias.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $elevacions->paginate($perPage);

        return $pagination;
    }
    public function superficies(Request $request)
    {
        $superficies = SuperficieBacteria::select(
            'superficie_bacterias.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $superficies = $superficies->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $superficies = $superficies->where(function ($superficies) use ($value) {
                return $superficies->orWhere('superficie_bacterias.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $superficies->paginate($perPage);

        return $pagination;
    }
    public function colors(Request $request)
    {
        $colors = ColorBacteria::select(
            'color_bacterias.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $colors = $colors->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $colors = $colors->where(function ($colors) use ($value) {
                return $colors->orWhere('color_bacterias.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $colors->paginate($perPage);

        return $pagination;
    }
    public function tiposMetodos(Request $request)
    {
        $tipos = TipoMetodoConservacionBacteria::select(
            'tipo_metodo_conservacion_bacterias.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $tipos = $tipos->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $tipos = $tipos->where(function ($tipos) use ($value) {
                return $tipos->orWhere('tipo_metodo_conservacion_bacterias.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $tipos->paginate($perPage);

        return $pagination;
    }
    public function tiposAgars(Request $request)
    {
        $tipos = TipoAgarBacteria::where('id', '!=', 1)->select(
            'tipo_agar_bacterias.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $tipos = $tipos->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $tipos = $tipos->where(function ($tipos) use ($value) {
                return $tipos->orWhere('tipo_agar_bacterias.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $tipos->paginate($perPage);

        return $pagination;
    }

    public function infoCaract()
    {
        $formas_macros = FormaCaractMacroBacteria::all();
        $bordes = BordeBacteria::all();
        $elevacions = ElevacionBacteria::all();
        $detalle_opticos = DetalleOpticoBacteria::all();
        $superficies = SuperficieBacteria::all();
        $colors = ColorBacteria::all();
        $formas_micros = FormaCaractMicroBacteria::all();
        $tipo_metodo = TipoMetodoConservacionBacteria::all();
        $tipo_agar = TipoAgarBacteria::where('id', '!=', 1)->get();
        $array = [
            'caract_macro' => [
                'formas_macros' => $formas_macros, 'bordes' => $bordes,
                'elevacions' => $elevacions, 'detalle_opticos' => $detalle_opticos,
                'superficies' => $superficies, 'colors' => $colors,
            ],
            'caract_micro' => [
                'formas_micros' => $formas_micros
            ],
            'metodo_conser' => [
                'tipo_metodo' => $tipo_metodo,
                'tipo_agar' => $tipo_agar
            ]
        ];
        return $array;
    }
}
