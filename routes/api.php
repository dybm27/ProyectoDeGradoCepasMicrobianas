<?php

use App\Actinomiceto;
use App\Bacteria;
use App\BordeActinomiceto;
use App\BordeBacteria;
use App\Cepa;
use App\Clase;
use App\ColorActinomiceto;
use App\ColorBacteria;
use App\ColorHongo;
use App\ColorLevadura;
use App\ConidioforoActinomiceto;
use App\ConidioforoHongo;
use App\DetalleOpticoBacteria;
use App\Division;
use App\ElevacionBacteria;
use App\Especie;
use App\EsporaAsexualHongo;
use App\EsporaSexualHongo;
use App\Evento;
use App\Familia;
use App\FormaCaractMacroActinomiceto;
use App\FormaCaractMacroBacteria;
use App\FormaCaractMicroActinomiceto;
use App\FormaCaractMicroBacteria;
use App\Genero;
use App\GrupoMicrobiano;
use App\HongoFilamentoso;
use App\Levadura;
use App\MetodoConserBacteria;
use App\MetodoConserHongo;
use App\MetodoConserLevadura;
use App\MicelioActinomiceto;
use App\Orden;
use App\Phylum;
use App\PigmentoActinomiceto;
use App\Reino;
use App\Seguimiento;
use App\SuperficieActinomiceto;
use App\SuperficieBacteria;
use App\TexturaActinomiceto;
use App\TexturaHongo;
use App\TexturaLevadura;
use App\TincionGramActinomiceto;
use App\TipoAgarBacteria;
use App\TipoMetodoConservacionBacteria;
use App\TipoMetodoConservacionHongo;
use App\TipoMetodoConservacionLevadura;
use App\TipoUser;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//----------------------- urls tablas cepas  -------------------------------------
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
Route::get('cepas-bacterias', function (Request $request) {
    $cepas = DB::table('cepas')
        ->join('bacterias', 'cepas.id', '=', 'bacterias.cepa_id')
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
Route::get('cepas-hongos', function (Request $request) {

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
});
Route::get('cepas-levaduras', function (Request $request) {

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
});
Route::get('cepas-actinomicetos', function (Request $request) {

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
});
//------------------------------------------------------------------------------------


//----------------------- cepa -------------------------------------
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
//------------------------------------------------------------------------------------


//--------------------- caracteristicas cepas -------------------------------------
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
                    'cepa', 'caractMacroscopicas', 'caractMicroscopicas', 'identBioquimica',
                    'otrasCaracteristicas'/*, 'caractMolecular', 'metodoConservacion'*/
                ])->first();
            break;
    }
    return $query;
});
//------------------------------------------------------------------------------------

//----------- urls tablas metodos de conservacion -------------------------------------
Route::get('cepa/bacteria/metodos-conser/{id}', function (Request $request) {
    $cepa = Bacteria::where('cepa_id',  $request->id)->first();
    $metodos = MetodoConserBacteria::where('bacteria_id',  $cepa->id)
        ->join(
            'tipo_metodo_conservacion_bacterias',
            'metodo_conser_bacterias.tipo_id',
            '=',
            'tipo_metodo_conservacion_bacterias.id'
        )->join(
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
Route::get('cepa/levadura/metodos-conser/{id}', function (Request $request) {
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
});
Route::get('cepa/hongo/metodos-conser/{id}', function (Request $request) {
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
});
//-----------------------------------------------------------------------------------



//----------------------- info cepas y caracts  -------------------------------------
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
});
Route::get('info-caract-levaduras', function () {
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
});
Route::get('info-caract-hongos', function () {
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
});
Route::get('info-caract-actinomicetos', function () {
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
});
//-----------------------------------------------------------------------------------

//-------------------------url eventos metodos------------------------------
Route::get('eventos-metodos', function (Request $request) {
    $eventosBacterias = DB::table('cepas')
        ->join('bacterias', 'cepas.id', '=', 'bacterias.cepa_id')
        ->join('grupo_microbianos', 'cepas.grupo_microbiano_id', '=', 'grupo_microbianos.id')
        ->join('generos', 'cepas.genero_id', '=', 'generos.id')
        ->join('especies', 'cepas.especie_id', '=', 'especies.id')
        ->join(
            'metodo_conser_bacterias',
            'bacterias.id',
            '=',
            'metodo_conser_bacterias.bacteria_id'
        )
        ->join(
            'tipo_metodo_conservacion_bacterias',
            'tipo_metodo_conservacion_bacterias.id',
            '=',
            'metodo_conser_bacterias.tipo_id'
        )->select(
            'tipo_metodo_conservacion_bacterias.nombre As title',
            'generos.nombre As genero',
            'especies.nombre As especie',
            'cepas.codigo',
            'grupo_microbianos.nombre As grupo_microbiano',
            'metodo_conser_bacterias.fecha As start'
        )->where('metodo_conser_bacterias.fecha', '>=', $request->start)
        ->where('metodo_conser_bacterias.fecha', '<=', $request->end);

    $eventosLevaduras = DB::table('cepas')
        ->join('levaduras', 'cepas.id', '=', 'levaduras.cepa_id')
        ->join('grupo_microbianos', 'cepas.grupo_microbiano_id', '=', 'grupo_microbianos.id')
        ->join('generos', 'cepas.genero_id', '=', 'generos.id')
        ->join('especies', 'cepas.especie_id', '=', 'especies.id')
        ->join(
            'metodo_conser_levaduras',
            'levaduras.id',
            '=',
            'metodo_conser_levaduras.levadura_id'
        )->join(
            'tipo_metodo_conservacion_levaduras',
            'tipo_metodo_conservacion_levaduras.id',
            '=',
            'metodo_conser_levaduras.tipo_id'
        )->select(
            'tipo_metodo_conservacion_levaduras.nombre As title',
            'generos.nombre As genero',
            'especies.nombre As especie',
            'cepas.codigo',
            'grupo_microbianos.nombre As grupo_microbiano',
            'metodo_conser_levaduras.fecha As start'
        )->where('metodo_conser_levaduras.fecha', '>=', $request->start)
        ->where('metodo_conser_levaduras.fecha', '<=', $request->end)
        ->union($eventosBacterias);

    $eventosHongos = DB::table('cepas')
        ->join('hongo_filamentosos', 'cepas.id', '=', 'hongo_filamentosos.cepa_id')
        ->join('grupo_microbianos', 'cepas.grupo_microbiano_id', '=', 'grupo_microbianos.id')
        ->join('generos', 'cepas.genero_id', '=', 'generos.id')
        ->join('especies', 'cepas.especie_id', '=', 'especies.id')
        ->join(
            'metodo_conser_hongos',
            'hongo_filamentosos.id',
            '=',
            'metodo_conser_hongos.hongo_filamentoso_id'
        )->join(
            'tipo_metodo_conservacion_hongos',
            'tipo_metodo_conservacion_hongos.id',
            '=',
            'metodo_conser_hongos.tipo_id'
        )->select(
            'tipo_metodo_conservacion_hongos.nombre As title',
            'generos.nombre As genero',
            'especies.nombre As especie',
            'cepas.codigo',
            'grupo_microbianos.nombre As grupo_microbiano',
            'metodo_conser_hongos.fecha As start'
        )->where('metodo_conser_hongos.fecha', '>=', $request->start)
        ->where('metodo_conser_hongos.fecha', '<=', $request->end)
        ->union($eventosLevaduras)->get();

    return $eventosHongos;
});
//-----------------------------------------------------------------------------------

//-------------------------url eventos ------------------------------
Route::get('eventos', function (Request $request) {
    $eventos = Evento::join('users', 'users.id', '=', "eventos.autor")
        ->where('eventos.fecha', '>=', $request->start)
        ->where('eventos.fecha', '<=', $request->end)->select(
            'eventos.id',
            'eventos.autor As idAutor',
            'users.name As autor',
            'eventos.fecha As start',
            'eventos.titulo As title',
            'eventos.color',
            'eventos.descripcion'
        )->get();

    return $eventos;
});
//-----------------------------------------------------------------------------------

//------------------------ consultar evento ------------------------------


//-----------------------------------------------------------------------------------

//------------------------- url tabla usuarios -------------------------------------
Route::get('usuarios', function (Request $request) {
    $cepas = User::where('tipouser_id', '!=', 1)
        ->join('tipo_users', 'users.tipouser_id', '=', 'tipo_users.id');

    $query = $cepas->select(
        'users.*',
        'tipo_users.nombre As tipo_user'
    );

    if ($request->filled('sort')) {
        $sort = explode('|', $request->sort);
        $query = $query->orderBy($sort[0], $sort[1]);
    }

    if ($request->filled('filter')) {
        $value = "%{$request->filter}%";
        $query = $query->where(function ($query) use ($value) {
            return $query->where('users.name', 'like', $value)
                ->orWhere('users.email', 'like', $value)
                ->orWhere('tipo_users.nombre', 'like', $value)
                ->orWhere('users.id', 'like', $value);
        });
    }

    $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

    $pagination = $query->paginate($perPage);

    return $pagination;
});
//--------------------------------------------------------------------------------------------

//--------------------------- TIPOS_USERS Y USERS -----------------------------------------
Route::get('tipos-users', function () {
    $tipos_users = TipoUser::all();
    return $tipos_users;
});
Route::get('users', function () {
    $user = User::all();
    return $user;
});
//--------------------------------------------------------------------------------------------

//------------------------- url tabla seguimiento -------------------------------------
Route::get('seguimientos', function (Request $request) {
    $seguimientos = Seguimiento::select(
        'Seguimientos.*',
    );

    if ($request->filled('sort')) {
        $sort = explode('|', $request->sort);
        $seguimientos = $seguimientos->orderBy($sort[0], $sort[1]);
    }

    if ($request->filled('filter')) {
        $value = "%{$request->filter}%";
        $seguimientos = $seguimientos->where(function ($query) use ($value) {
            return $query->where('Seguimientos.nombre_responsable', 'like', $value)
                ->orWhere('Seguimientos.email_responsable', 'like', $value)
                ->orWhere('Seguimientos.tipo_user', 'like', $value)
                ->orWhere('Seguimientos.accion', 'like', $value)
                ->orWhere('Seguimientos.created_at', 'like', $value)
                ->orWhere('Seguimientos.id', 'like', $value);
        });
    }

    $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

    $pagination = $seguimientos->paginate($perPage);

    return $pagination;
});
//--------------------------------------------------------------------------------------------
