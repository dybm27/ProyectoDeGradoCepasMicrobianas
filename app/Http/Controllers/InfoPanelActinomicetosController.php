<?php

namespace App\Http\Controllers;

use App\BordeActinomiceto;
use App\Cepa;
use App\ColorActinomiceto;
use App\ConidioforoActinomiceto;
use App\FormaCaractMacroActinomiceto;
use App\FormaCaractMicroActinomiceto;
use App\MicelioActinomiceto;
use App\PigmentoActinomiceto;
use App\SuperficieActinomiceto;
use App\TexturaActinomiceto;
use App\TincionGramActinomiceto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InfoPanelActinomicetosController extends Controller
{
    public function actinomicetosTabla(Request $request)
    {
        $cepas = DB::table('cepas')
            ->join('actinomicetos', 'cepas.id', '=', 'actinomicetos.cepa_id')
            ->join('generos', 'cepas.genero_id', '=', 'generos.id')
            ->join('especies', 'cepas.especie_id', '=', 'especies.id')
            ->join('clases', 'actinomicetos.clase_id', '=', 'clases.id')
            ->join('ordens', 'actinomicetos.orden_id', '=', 'ordens.id')
            ->join('phylums', 'actinomicetos.phylum_id', '=', 'phylums.id')
            ->join('reinos', 'actinomicetos.reino_id', '=', 'reinos.id');

        $query = $cepas->select(
            'cepas.*',
            'generos.nombre As nombre_genero',
            'especies.nombre As nombre_especie',
            'clases.nombre As nombre_clase',
            'ordens.nombre As nombre_orden',
            'phylums.nombre As nombre_phylum',
            'reinos.nombre As nombre_reino'
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
                    ->orWhere('phylums.nombre', 'like', $value)
                    ->orWhere('ordens.nombre', 'like', $value)
                    ->orWhere('reinos.nombre', 'like', $value)
                    ->orWhere('cepas.estado', 'like', $value)
                    ->orWhere('cepas.origen', 'like', $value)
                    ->orWhere('cepas.id', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $query->paginate($perPage);

        return $pagination;
    }

    public function texturas(Request $request)
    {
        $tipo = TexturaActinomiceto::select(
            'textura_actinomicetos.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $tipo = $tipo->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $tipo = $tipo->where(function ($tipo) use ($value) {
                return $tipo->orWhere('textura_actinomicetos.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $tipo->paginate($perPage);

        return $pagination;
    }

    public function colors(Request $request)
    {
        $tipo = ColorActinomiceto::select(
            'color_actinomicetos.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $tipo = $tipo->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $tipo = $tipo->where(function ($tipo) use ($value) {
                return $tipo->orWhere('color_actinomicetos.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $tipo->paginate($perPage);

        return $pagination;
    }

    public function formasMacro(Request $request)
    {
        $tipo = FormaCaractMacroActinomiceto::select(
            'forma_caract_macro_actinomicetos.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $tipo = $tipo->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $tipo = $tipo->where(function ($tipo) use ($value) {
                return $tipo->orWhere('forma_caract_macro_actinomicetos.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $tipo->paginate($perPage);

        return $pagination;
    }

    public function formasMicro(Request $request)
    {
        $tipo = FormaCaractMicroActinomiceto::select(
            'forma_caract_micro_actinomicetos.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $tipo = $tipo->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $tipo = $tipo->where(function ($tipo) use ($value) {
                return $tipo->orWhere('forma_caract_micro_actinomicetos.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $tipo->paginate($perPage);

        return $pagination;
    }

    public function superficies(Request $request)
    {
        $tipo = SuperficieActinomiceto::select(
            'superficie_actinomicetos.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $tipo = $tipo->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $tipo = $tipo->where(function ($tipo) use ($value) {
                return $tipo->orWhere('superficie_actinomicetos.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $tipo->paginate($perPage);

        return $pagination;
    }

    public function bordes(Request $request)
    {
        $tipo = BordeActinomiceto::select(
            'borde_actinomicetos.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $tipo = $tipo->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $tipo = $tipo->where(function ($tipo) use ($value) {
                return $tipo->orWhere('borde_actinomicetos.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $tipo->paginate($perPage);

        return $pagination;
    }

    public function pigmentos(Request $request)
    {
        $tipo = PigmentoActinomiceto::select(
            'pigmento_actinomicetos.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $tipo = $tipo->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $tipo = $tipo->where(function ($tipo) use ($value) {
                return $tipo->orWhere('textura_actinomicetos.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $tipo->paginate($perPage);

        return $pagination;
    }

    public function tincions(Request $request)
    {
        $tipo = TincionGramActinomiceto::select(
            'tincion_gram_actinomicetos.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $tipo = $tipo->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $tipo = $tipo->where(function ($tipo) use ($value) {
                return $tipo->orWhere('tincion_gram_actinomicetos.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $tipo->paginate($perPage);

        return $pagination;
    }

    public function micelios(Request $request)
    {
        $tipo = MicelioActinomiceto::select(
            'micelio_actinomicetos.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $tipo = $tipo->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $tipo = $tipo->where(function ($tipo) use ($value) {
                return $tipo->orWhere('micelio_actinomicetos.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $tipo->paginate($perPage);

        return $pagination;
    }

    public function conidioforos(Request $request)
    {
        $tipo = ConidioforoActinomiceto::select(
            'conidioforo_actinomicetos.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $tipo = $tipo->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $tipo = $tipo->where(function ($tipo) use ($value) {
                return $tipo->orWhere('conidioforo_actinomicetos.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $tipo->paginate($perPage);

        return $pagination;
    }

    public function infoCaract()
    {
        $formas_macros = FormaCaractMacroActinomiceto::all();
        $bordes = BordeActinomiceto::all();
        $texturas = TexturaActinomiceto::all();
        $pigmentos = PigmentoActinomiceto::all();
        $superficies = SuperficieActinomiceto::all();
        $colors = ColorActinomiceto::all();
        $formas_micros = FormaCaractMicroActinomiceto::all();
        $tincions = TincionGramActinomiceto::all();
        $micelios = MicelioActinomiceto::all();
        $conidioforos = ConidioforoActinomiceto::all();

        $array = [
            'caract_macro' => [
                'formas_macros' => $formas_macros, 'bordes' => $bordes,
                'texturas' => $texturas, 'pigmentos' => $pigmentos,
                'superficies' => $superficies, 'colors' => $colors,
            ],
            'caract_micro' => [
                'formas_micros' => $formas_micros, 'tincions' => $tincions,
                'micelios' => $micelios, 'conidioforos' => $conidioforos,
            ]
        ];
        return $array;
    }
}
