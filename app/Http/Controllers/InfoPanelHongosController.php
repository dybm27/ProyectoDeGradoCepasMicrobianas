<?php

namespace App\Http\Controllers;

use App\ColorHongo;
use App\ConidioforoHongo;
use App\EsporaAsexualHongo;
use App\EsporaSexualHongo;
use App\HongoFilamentoso;
use App\MetodoConserHongo;
use App\TexturaHongo;
use App\TipoMetodoConservacionHongo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InfoPanelHongosController extends Controller
{
    public function hongos(Request $request)
    {
        $cepas = DB::table('cepas')
            ->join('hongo_filamentosos', 'cepas.id', '=', 'hongo_filamentosos.cepa_id')
            ->join('generos', 'cepas.genero_id', '=', 'generos.id')
            ->join('especies', 'cepas.especie_id', '=', 'especies.id')
            ->join('clases', 'hongo_filamentosos.clase_id', '=', 'clases.id')
            ->join('ordens', 'hongo_filamentosos.orden_id', '=', 'ordens.id')
            ->join('familias', 'hongo_filamentosos.familia_id', '=', 'familias.id')
            ->join('phylums', 'hongo_filamentosos.phylum_id', '=', 'phylums.id');

        $query = $cepas->select(
            'cepas.*',
            'generos.nombre As nombre_genero',
            'especies.nombre As nombre_especie',
            'clases.nombre As nombre_clase',
            'ordens.nombre As nombre_orden',
            'familias.nombre As nombre_familia',
            'phylums.nombre As nombre_phylum'
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
                    ->orWhere('phylums.nombre', 'like', $value)
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
        $cepa = HongoFilamentoso::where('cepa_id',  $request->id)->first();
        $metodos = MetodoConserHongo::where('hongo_filamentoso_id',  $cepa->id)
            ->join(
                'tipo_metodo_conservacion_hongos',
                'metodo_conser_hongos.tipo_id',
                '=',
                'tipo_metodo_conservacion_hongos.id'
            );

        $query = $metodos->select(
            'metodo_conser_hongos.*',
            '.nombre As nombre_tipo_metodo'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $query = $query->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $query = $query->where('metodo_conser_hongos.id', 'like', $value)
                ->orWhere('metodo_conser_hongos.fecha', 'like', $value)
                ->orWhere('metodo_conser_hongos.numero_replicas', 'like', $value)
                ->orWhere('metodo_conser_hongos.recuento_microgota', 'like', $value)
                ->orWhere('metodo_conser_hongos.medio_cultivo', 'like', $value)
                ->orWhere('metodo_conser_hongos.numero_pases', 'like', $value)
                ->orWhere('tipo_metodo_conservacion_hongos.nombre', 'like', $value);
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $query->paginate($perPage);

        return $pagination;
    }

    public function texturas(Request $request)
    {
        $tipo = TexturaHongo::select(
            'textura_hongos.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $tipo = $tipo->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $tipo = $tipo->where(function ($tipo) use ($value) {
                return $tipo->orWhere('textura_hongos.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $tipo->paginate($perPage);

        return $pagination;
    }

    public function colors(Request $request)
    {
        $tipo = ColorHongo::select(
            'color_hongos.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $tipo = $tipo->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $tipo = $tipo->where(function ($tipo) use ($value) {
                return $tipo->orWhere('color_hongos.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $tipo->paginate($perPage);

        return $pagination;
    }

    public function conidioforos(Request $request)
    {
        $tipo = ConidioforoHongo::select(
            'conidioforo_hongos.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $tipo = $tipo->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $tipo = $tipo->where(function ($tipo) use ($value) {
                return $tipo->orWhere('conidioforo_hongos.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $tipo->paginate($perPage);

        return $pagination;
    }

    public function esporasAsexual(Request $request)
    {
        $tipo = EsporaAsexualHongo::select(
            'espora_asexual_hongos.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $tipo = $tipo->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $tipo = $tipo->where(function ($tipo) use ($value) {
                return $tipo->orWhere('espora_asexual_hongos.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $tipo->paginate($perPage);

        return $pagination;
    }

    public function esporasSexual(Request $request)
    {
        $tipo = EsporaSexualHongo::select(
            'espora_sexual_hongos.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $tipo = $tipo->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $tipo = $tipo->where(function ($tipo) use ($value) {
                return $tipo->orWhere('espora_sexual_hongos.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $tipo->paginate($perPage);

        return $pagination;
    }

    public function tiposMetodos(Request $request)
    {
        $tipo = TipoMetodoConservacionHongo::select(
            'tipo_metodo_conservacion_hongos.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $tipo = $tipo->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $tipo = $tipo->where(function ($tipo) use ($value) {
                return $tipo->orWhere('tipo_metodo_conservacion_hongos.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $tipo->paginate($perPage);

        return $pagination;
    }

    public function infoCaract()
    {
        $colores =  ColorHongo::all();
        $texturas = TexturaHongo::all();
        $conidioforos = ConidioforoHongo::all();
        $esporasAsexuales = EsporaAsexualHongo::all();
        $esporasSexuales = EsporaSexualHongo::all();
        $tipo_metodo = TipoMetodoConservacionHongo::all();

        $array = [
            'caract_macro' => [
                'colores' => $colores, 'texturas' => $texturas,
            ],
            'caract_micro' => [
                'conidioforos' => $conidioforos, 'esporas_asexuales' => $esporasAsexuales,
                'esporas_sexuales' => $esporasSexuales
            ],
            'metodo_conser' => [
                'tipo_metodo' => $tipo_metodo,
            ]
        ];
        return $array;
    }
}
