<?php

namespace App\Http\Controllers;

use App\Actinomiceto;
use App\Bacteria;
use App\Cepa;
use App\DetalleOpticoBacteria;
use App\HongoFilamentoso;
use App\Levadura;
use App\Seguimiento;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PDF;

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

        $this->crearSeguimiento("Agregó la Cepa: " . $cepa->codigo);

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
            $codigo = $cepa->codigo;
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

        $this->crearSeguimiento("Editó la Cepa: " . $codigo);

        return $cepa;
    }

    public function destroy($id)
    {
        $cepa = Cepa::find($id);
        if ($this->validarEliminar($cepa)) {
            return 'negativo';
        } else {
            $cepa->delete();
            $this->crearSeguimiento("Eliminó la Cepa: " . $cepa->codigo);
            return $cepa;
        }
    }

    public function validarEliminar($cepa)
    {
        $res = false;
        switch ($cepa->grupo_microbiano_id) {
            case 1:
                $bacteria = Bacteria::where('cepa_id', $cepa->id)->first();
                if (
                    count($bacteria->caractMacroscopicas) > 0 || $bacteria->caractMicroscopica != null
                    || $bacteria->caractBioquimica != null || $bacteria->caractFisiologica != null
                    || $bacteria->identMolecular != null || count($bacteria->metodosConservacion) > 0
                ) {
                    $res = true;
                }
                break;
            case 2:
                $hongo = HongoFilamentoso::where('cepa_id', $cepa->id)->first();
                if (
                    count($hongo->caractMacroscopicas) > 0 || $hongo->caractMicroscopica != null
                    || $hongo->caractBioquimica != null || $hongo->identMolecular != null
                    ||  count($hongo->metodosConservacion) > 0
                ) {
                    $res = true;
                }
                break;
            case 3:
                $levadura = Levadura::where('cepa_id', $cepa->id)->first();
                if (
                    count($levadura->caractMacroscopicas) > 0 || $levadura->caractMicroscopica != null
                    || $levadura->caractBioquimica != null || $levadura->identMolecular != null
                    || count($levadura->metodosConservacion) > 0
                ) {
                    $res = true;
                }
                break;
            case 4:
                $actinomiceto = Actinomiceto::where('cepa_id', $cepa->id)->first();
                if (
                    count($actinomiceto->caractMacroscopicas) > 0 || $actinomiceto->caractMicroscopica != null
                    || $actinomiceto->identBioquimica != null || $actinomiceto->otrasCaracteristicas != null
                ) {
                    $res = true;
                }
                break;
        }
        return $res;
    }

    public function crearSeguimiento($accion)
    {
        $seguimiento = new Seguimiento();
        $seguimiento->nombre_responsable = Auth::user()->name;
        $seguimiento->email_responsable = Auth::user()->email;
        $seguimiento->tipo_user = Auth::user()->tipouser->nombre;
        $seguimiento->accion = $accion;
        $seguimiento->save();
    }

    public function imprimirPDF(Request $request, $id)
    {
        $imprimir = $request->imprimir;
        $fecha = Carbon::now()->format('Y-m-d');
        $cepa = Cepa::find($id);
        switch ($cepa->grupo_microbiano_id) {
            case 1:
                $cantidad = $this->cantidadCaractMacros($cepa->bacteria->caractMacroscopicas);
                $pdf = PDF::loadView('imprimirVistaVer.grupos.bacteria', compact('cepa', 'fecha', 'cantidad', 'imprimir'));
                return $pdf->stream();
                break;
            case 2:
                $cantidad = $this->cantidadCaractMacros($cepa->hongo->caractMacroscopicas);
                $pdf = PDF::loadView('imprimirVistaVer.grupos.hongo', compact('cepa', 'fecha', 'cantidad', 'imprimir'));
                return $pdf->stream();
                break;
            case 3:
                $cantidad = $this->cantidadCaractMacros($cepa->levadura->caractMacroscopicas);
                $pdf = PDF::loadView('imprimirVistaVer.grupos.levadura', compact('cepa', 'fecha', 'cantidad', 'imprimir'));
                return $pdf->stream();
                break;
            case 4:
                $cantidad = $this->cantidadCaractMacros($cepa->actinomiceto->caractMacroscopicas);
                $pdf = PDF::loadView('imprimirVistaVer.grupos.actinomiceto', compact('cepa', 'fecha', 'cantidad', 'imprimir'));
                return $pdf->stream();
                break;
        }
    }

    public function cantidadCaractMacros($caracts)
    {
        $numero = 0;
        foreach ($caracts as $caract) {
            $numero++;
        }
        return $numero;
    }
}
