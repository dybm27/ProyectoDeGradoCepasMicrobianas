<?php

use App\Actinomiceto;
use App\Bacteria;
use App\Borde;
use App\CaracMacroBacteria;
use App\Cepa;
use App\Clase;
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
use App\Orden;
use App\Phylum;
use App\Reino;
use App\Superficie;
use App\TipoAgar;
use App\TipoMetodoConservacionBacteria;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Psy\Util\Str;

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
    $cepas = Cepa::leftJoin('generos', 'cepas.genero_id', '=', 'generos.id')
        ->leftJoin('especies', 'cepas.especie_id', '=', 'especies.id')
        ->leftJoin('grupo_microbianos', 'cepas.grupo_microbiano_id', '=', 'grupo_microbianos.id');

    $query = $cepas->select(
        'cepas.*',
        'generos.nombre As nombre_genero',
        'especies.nombre As nombre_especie',
        'grupo_microbianos.nombre As nombre_grupo'
    );

    if ($request->filled('sort')) {
        $sort = explode('|', $request->sort);
        $query = $query->orderBy($sort[0], $sort[1]);
    }

    if ($request->filled('filter')) {
        $value = "%{$request->filter}%";
        $query = $query->where('cepas.codigo', 'like', $value)
            ->orWhere('generos.nombre', 'like', $value)
            ->orWhere('especies.nombre', 'like', $value)
            ->orWhere('grupo_microbianos.nombre', 'like', $value)
            ->orWhere('cepas.estado', 'like', $value)
            ->orWhere('cepas.origen', 'like', $value);
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
    $cepas = Cepa::leftJoin('generos', 'cepas.genero_id', '=', 'generos.id')
        ->leftJoin('especies', 'cepas.especie_id', '=', 'especies.id')
        ->leftJoin('grupo_microbianos', 'cepas.grupo_microbiano_id', '=', 'grupo_microbianos.id');

    $query = $cepas->select(
        'cepas.*',
        'generos.nombre As nombre_genero',
        'especies.nombre As nombre_especie',
        'grupo_microbianos.nombre As nombre_grupo'
    );

    if ($request->filled('sort')) {
        $sort = explode('|', $request->sort);
        $query = $query->orderBy($sort[0], $sort[1]);
    }

    if ($request->filled('filter')) {
        $value = "%{$request->filter}%";
        $query = $query->where('cepas.codigo', 'like', $value)
            ->orWhere('generos.nombre', 'like', $value)
            ->orWhere('especies.nombre', 'like', $value)
            ->orWhere('grupo_microbianos.nombre', 'like', $value)
            ->orWhere('cepas.estado', 'like', $value)
            ->orWhere('cepas.origen', 'like', $value);
    }

    $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

    $pagination = $query->paginate($perPage);

    return $pagination;
});

Route::get('cepas-bacterias', function () {
    $cepas = Cepa::where('grupo_microbiano_id', 1)->get();
    $gmicrobianos = GrupoMicrobiano::all();
    $generos = Genero::all();
    $especies = Especie::all();
    foreach ($cepas as $cepa) {
        foreach ($gmicrobianos as $gm) {
            if ($cepa->grupo_microbiano_id == $gm->id) {
                Arr::add($cepa, 'g_microbiano', $gm->nombre);
            }
        }
        foreach ($generos as $g) {
            if ($cepa->genero_id == $g->id) {
                Arr::add($cepa, 'gene_ro', $g->nombre);
            }
        }
        foreach ($especies as $e) {
            if ($cepa->especie_id == $e->id) {
                Arr::add($cepa, 'espe_cie', $e->nombre);
            }
        }
    }
    return $cepas;
});

Route::get('cepas-hongos', function () {
    $cepas = Cepa::where('grupo_microbiano_id', 2)->get();
    $gmicrobianos = GrupoMicrobiano::all();
    $generos = Genero::all();
    $especies = Especie::all();
    foreach ($cepas as $cepa) {
        foreach ($gmicrobianos as $gm) {
            if ($cepa->grupo_microbiano_id == $gm->id) {
                Arr::add($cepa, 'g_microbiano', $gm->nombre);
            }
        }
        foreach ($generos as $g) {
            if ($cepa->genero_id == $g->id) {
                Arr::add($cepa, 'gene_ro', $g->nombre);
            }
        }
        foreach ($especies as $e) {
            if ($cepa->especie_id == $e->id) {
                Arr::add($cepa, 'espe_cie', $e->nombre);
            }
        }
    }
    return $cepas;
});

Route::get('cepas-levaduras', function () {
    $cepas = Cepa::where('grupo_microbiano_id', 3)->get();
    $gmicrobianos = GrupoMicrobiano::all();
    $generos = Genero::all();
    $especies = Especie::all();
    foreach ($cepas as $cepa) {
        foreach ($gmicrobianos as $gm) {
            if ($cepa->grupo_microbiano_id == $gm->id) {
                Arr::add($cepa, 'g_microbiano', $gm->nombre);
            }
        }
        foreach ($generos as $g) {
            if ($cepa->genero_id == $g->id) {
                Arr::add($cepa, 'gene_ro', $g->nombre);
            }
        }
        foreach ($especies as $e) {
            if ($cepa->especie_id == $e->id) {
                Arr::add($cepa, 'espe_cie', $e->nombre);
            }
        }
    }
    return $cepas;
});

Route::get('cepas-actinomicetos', function () {
    $cepas = Cepa::where('grupo_microbiano_id', 4)->get();
    $gmicrobianos = GrupoMicrobiano::all();
    $generos = Genero::all();
    $especies = Especie::all();
    foreach ($cepas as $cepa) {
        foreach ($gmicrobianos as $gm) {
            if ($cepa->grupo_microbiano_id == $gm->id) {
                Arr::add($cepa, 'g_microbiano', $gm->nombre);
            }
        }
        foreach ($generos as $g) {
            if ($cepa->genero_id == $g->id) {
                Arr::add($cepa, 'gene_ro', $g->nombre);
            }
        }
        foreach ($especies as $e) {
            if ($cepa->especie_id == $e->id) {
                Arr::add($cepa, 'espe_cie', $e->nombre);
            }
        }
    }
    return $cepas;
});


Route::get('bacterias', function () {
    $bacterias = Bacteria::all();
    return $bacterias;
});

Route::get('hongos', function () {
    $hongos = HongoFilamentoso::all();
    $clases = Clase::all();
    $ordens = Orden::all();
    $familias = Familia::all();
    $phylums = Phylum::all();
    foreach ($hongos as $hongo) {
        foreach ($clases as $c) {
            if ($hongo->clase_id == $c->id) {
                Arr::add($hongo, 'cla_se', $c->nombre);
            }
        }
        foreach ($ordens as $o) {
            if ($hongo->orden_id == $o->id) {
                Arr::add($hongo, 'or_den', $o->nombre);
            }
        }
        foreach ($familias as $f) {
            if ($hongo->familia_id == $f->id) {
                Arr::add($hongo, 'fami_lia', $f->nombre);
            }
        }
        foreach ($phylums as $p) {
            if ($hongo->phylum_id == $p->id) {
                Arr::add($hongo, 'phy_lum', $p->nombre);
            }
        }
    }
    return $hongos;
});

Route::get('levaduras', function () {
    $levaduras = Levadura::all();
    $clases = Clase::all();
    $ordens = Orden::all();
    $familias = Familia::all();
    $divisions = Division::all();
    foreach ($levaduras as $levadura) {
        foreach ($clases as $c) {
            if ($levadura->clase_id == $c->id) {
                Arr::add($levadura, 'cla_se', $c->nombre);
            }
        }
        foreach ($ordens as $o) {
            if ($levadura->orden_id == $o->id) {
                Arr::add($levadura, 'or_den', $o->nombre);
            }
        }
        foreach ($familias as $f) {
            if ($levadura->familia_id == $f->id) {
                Arr::add($levadura, 'fami_lia', $f->nombre);
            }
        }
        foreach ($divisions as $d) {
            if ($levadura->division_id == $d->id) {
                Arr::add($levadura, 'divi_sion', $d->nombre);
            }
        }
    }
    return $levaduras;
});

Route::get('actinomicetos', function () {
    $actinomicetos = Actinomiceto::all();
    $clases = Clase::all();
    $ordens = Orden::all();
    $phylums = Phylum::all();
    $reinos = Reino::all();
    foreach ($actinomicetos as $actinomiceto) {
        foreach ($clases as $c) {
            if ($actinomiceto->clase_id == $c->id) {
                Arr::add($actinomiceto, 'cla_se', $c->nombre);
            }
        }
        foreach ($ordens as $o) {
            if ($actinomiceto->orden_id == $o->id) {
                Arr::add($actinomiceto, 'or_den', $o->nombre);
            }
        }
        foreach ($phylums as $p) {
            if ($actinomiceto->phylum_id == $p->id) {
                Arr::add($actinomiceto, 'phy_lum', $p->nombre);
            }
        }
        foreach ($reinos as $r) {
            if ($actinomiceto->reino_id == $r->id) {
                Arr::add($actinomiceto, 'rei_no', $r->nombre);
            }
        }
    }
    return $actinomicetos;
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
    $formas_micros = FormaCaractMicro::all();
    $tipo_metodo = TipoMetodoConservacionBacteria::all();
    $tipo_agar = TipoAgar::all();
    $array = [
        'caract_macro' => [
            'formas_macros' => $formas_macros, 'bordes' => $bordes,
            'elevacions' => $elevacions, 'detalle_opticos' => $detalle_opticos,
            'superficies' => $superficies,
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
