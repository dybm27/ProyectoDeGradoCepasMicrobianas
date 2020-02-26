<?php

namespace App\Http\Controllers;

use App\Actinomiceto;
use App\Bacteria;
use App\Cepa;
use App\HongoFilamentoso;
use App\Levadura;
use Illuminate\Http\Request;

class CepaController extends Controller
{

    public function index()
    {
        return view('cepa.index');
    }
    public function agregarCaract($id)
    {
        return view('cepa.index');
    }

    public function bacterias()
    {
        return view('cepa.bacterias');
    }

    public function levaduras()
    {
        return view('cepa.levaduras');
    }

    public function hongos()
    {
        return view('cepa.hongos');
    }

    public function actinomicetos()
    {
        return view('cepa.actinomicetos');
    }

    public function store(Request $request)
    {
        //-- bail (si una de las reglas de validacion es negativa, deja de ejecutar las siguientes)
        //-- alpha (solo caracteres alfabeticos)
        $this->validate($request, [
            'codigo' => 'bail|required|min:4|unique:cepas,codigo',
            'estado' => 'bail|required|alpha',
            'origen' => 'bail|required|alpha',
            'publicar' => 'required'
        ]);
        $cepa = new Cepa();
        $cepa->codigo = $request->codigo;
        $cepa->grupo_microbiano_id = $request->grupo_microbiano;
        $cepa->genero_id = $request->genero;
        $cepa->especie_id = $request->especie;
        $cepa->estado = $request->estado;
        $cepa->origen = $request->origen;
        $cepa->publicar = $request->publicar;
        $cepa->otras_caract = $request->otras_caracteristicas;
        $cepa->save();

        switch ($request->grupo_microbiano) {
            case 1:
                $bacteria = new Bacteria();
                $bacteria->cepa_id = $cepa->id;
                $bacteria->save();
                break;
            case 2:
                $hongo = new HongoFilamentoso();
                $hongo->cepa_id = $cepa->id;
                $hongo->clase_id = $request->clase;
                $hongo->orden_id = $request->orden;
                $hongo->familia_id = $request->familia;
                $hongo->phylum_id = $request->phylum;
                $hongo->save();
                break;
            case 3:
                $levadura = new Levadura();
                $levadura->cepa_id = $cepa->id;
                $levadura->division_id = $request->division;
                $levadura->clase_id = $request->clase;
                $levadura->orden_id = $request->orden;
                $levadura->familia_id = $request->familia;
                $levadura->save();
                break;
            case 4:
                $actinomiceto = new Actinomiceto();
                $actinomiceto->cepa_id = $cepa->id;
                $actinomiceto->phylum_id = $request->phylum;
                $actinomiceto->clase_id = $request->clase;
                $actinomiceto->orden_id = $request->orden;
                $actinomiceto->reino_id = $request->reino;
                $actinomiceto->save();
                break;
        }

        return $cepa;
    }

    public function update(Request $request, $id)
    {
        $nota = Cepa::find($id);
        $nota->nombre = $request->nombre;
        $nota->descripcion = $request->descripcion;
        $nota->save();
        return $nota;
    }

    public function destroy($id)
    {
        $nota = Cepa::find($id);
        $nota->delete();
    }
}
