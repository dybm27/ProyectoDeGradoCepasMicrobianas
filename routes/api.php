<?php

use App\Actinomiceto;
use App\Bacteria;
use App\Borde;
use App\CaracMacroBacteria;
use App\Cepa;
use App\Clase;
use App\ColorBacteria;
use App\ColorLevadura;
use App\Consistencia;
use App\DetalleOptico;
use App\Division;
use App\Elevacion;
use App\Especie;
use App\Familia;
use App\FormaCaractMacro;
use App\FormaCaractMicro;
use App\Genero;
use App\GrupoMicrobiano;
use App\HongoFilamentoso;
use App\Levadura;
use App\MetodoConserBacteria;
use App\Orden;
use App\Phylum;
use App\Reino;
use App\Superficie;
use App\TexturaLevadura;
use App\TipoAgar;
use App\TipoMetodoConservacionBacteria;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Psy\Util\Str;
use SebastianBergmann\CodeCoverage\Node\Builder;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

// url tabla cepas
Route::get('cepas', function (Request $request) {
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
});

//url tabla cepas-bacterias
Route::get('cepas-bacterias', function (Request $request) {
    $cepas = DB::table('cepas')->where('cepas.grupo_microbiano_id', 1)
        ->join('generos', 'cepas.genero_id', '=', 'generos.id')
        ->join('especies', 'cepas.especie_id', '=', 'especies.id');

    $query = $cepas->select(
        'cepas.*',
        'generos.nombre As nombre_genero',
        'especies.nombre As nombre_especie',
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
});

// url tabla cepas-hongos
Route::get('cepas-hongos', function (Request $request) {

    $cepas = DB::table('cepas')->where('cepas.grupo_microbiano_id', 2)
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
});

// url tabla cepas-levaduras
Route::get('cepas-levaduras', function (Request $request) {

    $cepas = DB::table('cepas')->where('cepas.grupo_microbiano_id', 3)
        ->join('levaduras', 'cepas.id', '=', 'levaduras.cepa_id')
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
});

// url tabla cepas-actinomicetos
Route::get('cepas-actinomicetos', function (Request $request) {

    $cepas = DB::table('cepas')->where('cepas.grupo_microbiano_id', 4)
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
});

Route::get('cepa/{id}', function (Request $request) {
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
});

Route::get('cepa/agregar-editar-caract/{id}', function (Request $request) {
    $cepa = Cepa::where('id', $request->id)->first();
    switch ($cepa->grupo_microbiano_id) {
        case 1:
            $query = Bacteria::where('cepa_id', $request->id)
                ->with([
                    'cepa', 'caractMacroscopicas', 'caractMicroscopicas', 'caractBioquimica',
                    'caractFisiologica', 'identMolecular', 'metodoConservacion'
                ])
                ->first();
            break;
        case 2:
            $query = HongoFilamentoso::where('cepa_id', $request->id)
                ->with([
                    'cepa', 'caractMacroscopicas', 'caractMicroscopicas',
                    'caractBioquimica', 'identMolecular', 'metodoConservacion'
                ])
                ->first();
            break;
        case 3:
            $query = Levadura::where('cepa_id', $request->id)
                ->with([
                    'cepa', 'caractMacroscopicas', 'caractMicroscopicas',
                    'caractBioquimica', 'identMolecular', 'metodoConservacion'
                ])
                ->first();
            break;
        case 4:
            $query = Actinomiceto::where('cepa_id', $request->id)
                ->with([
                    'cepa'/*, 'caractMacroscopicas', 'caractMicroscopicas', 'caractBioquimica',
                    'caractFisiologica', 'identMolecular', 'metodoConservacion'*/
                ])->first();
            break;
    }
    return $query;
});

Route::get('cepa/bacteria/metodos-conser/{id}', function (Request $request) {
    $metodos = MetodoConserBacteria::where('bacteria_id',  $request->id)
        ->leftJoin(
            'tipo_metodo_conservacion_bacterias',
            'metodo_conser_bacterias.tipo_id',
            '=',
            'tipo_metodo_conservacion_bacterias.id'
        )->leftJoin(
            'tipo_agars',
            'metodo_conser_bacterias.tipo_agar_id',
            '=',
            'tipo_agars.id'
        );

    $query = $metodos->select(
        'metodo_conser_bacterias.*',
        'tipo_metodo_conservacion_bacterias.nombre As nombre_tipo_metodo',
        'tipo_agars.nombre As nombre_tipo_agar'
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
            ->orWhere('tipo_agars.nombre', 'like', $value);
    }

    $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

    $pagination = $query->paginate($perPage);

    return $pagination;
});

Route::get('info-tipos-cepas', function () {
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
});

Route::get('info-caract-bacterias', function () {
    $formas_macros = FormaCaractMacro::all();
    $bordes = Borde::all();
    $elevacions = Elevacion::all();
    $detalle_opticos = DetalleOptico::all();
    $superficies = Superficie::all();
    $colors = ColorBacteria::all();
    $formas_micros = FormaCaractMicro::all();
    $tipo_metodo = TipoMetodoConservacionBacteria::all();
    $tipo_agar = TipoAgar::where('id', '!=', 1)->get();
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
});

Route::get('info-caract-levaduras', function () {
    $colors = ColorLevadura::all();
    $texturas = TexturaLevadura::all();
    $array = [
        'caract_macro' => [
            'colors' => $colors, 'texturas' => $texturas,
        ],
        /*  'caract_micro' => [
            'formas_micros' => $formas_micros
        ],
        'metodo_conser' => [
            'tipo_metodo' => $tipo_metodo,
            'tipo_agar' => $tipo_agar
        ]*/
    ];
    return $array;
});
