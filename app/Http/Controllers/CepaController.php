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
        //-- regex:/^[\pL\s\-]+$/u (Acepta letras y espacios)
        $rules = [
            'codigo' => 'bail|required|min:4|unique:cepas,codigo',
            'estado' => 'bail|required|regex:/^[\pL\s\-]+$/u',
            'origen' => 'bail|required|regex:/^[\pL\s\-]+$/u'
        ];
        $messages = [
            'codigo.min' => 'El codigo debe tener minimo :min caracteres.',
            'codigo.unique' => 'El codigo ya se encuentra registrado.',
            'estado.regex' => 'El estado solo puede contener letras.',
            'origen.regex' => 'El origen solo puede contener letras.'
        ];
        $this->validate($request, $rules, $messages);

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
        $rules = [
            'codigo' => 'bail|required|min:4',
            'estado' => 'bail|required|regex:/^[\pL\s\-]+$/u',
            'origen' => 'bail|required|regex:/^[\pL\s\-]+$/u'
        ];
        $messages = [
            'codigo.min' => 'El codigo debe tener minimo :min caracteres.',
            'estado.regex' => 'El estado solo puede contener letras.',
            'origen.regex' => 'El origen solo puede contener letras.'
        ];
        $this->validate($request, $rules, $messages);

        $cepa = Cepa::find($id);
        $cepa2 = Cepa::where('codigo', $request->codigo)->first();

        if (empty($cepa2) || $cepa->id == $cepa2->id) {
            $cepa->codigo = $request->codigo;
            $cepa->grupo_microbiano_id = $request->grupo_microbiano;
            $cepa->genero_id = $request->genero;
            $cepa->especie_id = $request->especie;
            $cepa->estado = $request->estado;
            $cepa->origen = $request->origen;
            $cepa->publicar = $request->publicar;
            $cepa->otras_caract = $request->otras_caracteristicas;
            $cepa->save();
        } else {
            return response()->json([
                'errors' =>
                ['codigo' => ['El codigo ya se encuentra registrado']]
            ], 422);
        }

        switch ($cepa->grupo_microbiano_id) {
            case 1:
                break;
            case 2:
                $hongo = HongoFilamentoso::where('cepa_id', $cepa->id)->first();
                $hongo->clase_id = $request->clase;
                $hongo->orden_id = $request->orden;
                $hongo->familia_id = $request->familia;
                $hongo->phylum_id = $request->phylum;
                $hongo->save();
                break;
            case 3:
                $levadura = Levadura::where('cepa_id', $cepa->id)->first();
                $levadura->division_id = $request->division;
                $levadura->clase_id = $request->clase;
                $levadura->orden_id = $request->orden;
                $levadura->familia_id = $request->familia;
                $levadura->save();
                break;
            case 4:
                $actinomiceto = Actinomiceto::where('cepa_id', $cepa->id)->first();
                $actinomiceto->phylum_id = $request->phylum;
                $actinomiceto->clase_id = $request->clase;
                $actinomiceto->orden_id = $request->orden;
                $actinomiceto->reino_id = $request->reino;
                $actinomiceto->save();
                break;
        }
        $cepa->save();
        return $cepa;
    }

    public function destroy($id)
    {
        $nota = Cepa::find($id);
        $nota->delete();
    }
}
