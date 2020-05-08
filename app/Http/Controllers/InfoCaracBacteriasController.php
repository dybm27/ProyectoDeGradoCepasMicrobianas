<?php

namespace App\Http\Controllers;

use App\BordeBacteria;
use App\ColorBacteria;
use App\DetalleOpticoBacteria;
use App\ElevacionBacteria;
use App\FormaCaractMacroBacteria;
use App\FormaCaractMicroBacteria;
use App\Seguimiento;
use App\SuperficieBacteria;
use App\TipoAgarBacteria;
use App\TipoMetodoConservacionBacteria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InfoCaracBacteriasController extends Controller
{
    public function agregarInfo(Request $request)
    {
        switch ($request->tipo) {
            case "forma_macro":
                $rules = [
                    'nombre' => 'bail|required|unique:forma_caract_macro_bacterias,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrada una Forma con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new FormaCaractMacroBacteria();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Forma Macroscópica en Bacterias: "
                    . $tipo->nombre);
                break;
            case "borde":
                $rules = [
                    'nombre' => 'bail|required|unique:borde_bacterias,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado un Borde con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new BordeBacteria();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Borde en Bacterias: "
                    . $tipo->nombre);
                break;
            case "detalle":
                $rules = [
                    'nombre' => 'bail|required|unique:detalle_optico_bacterias,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado un Detalle Optico con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);

                $tipo = new DetalleOpticoBacteria();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Detalle Opctico en Bacterias: "
                    . $tipo->nombre);
                break;
            case "elevacion":
                $rules = [
                    'nombre' => 'bail|required|unique:elevacion_bacterias,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrada una Elevacion con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new ElevacionBacteria();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Elevación en Bacterias: "
                    . $tipo->nombre);
                break;
            case "superficie":
                $rules = [
                    'nombre' => 'bail|required|unique:superficie_bacterias,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrada una Superficie con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new SuperficieBacteria();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Superficie en Bacterias: "
                    . $tipo->nombre);
                break;
            case "forma_micro":
                $rules = [
                    'nombre' => 'bail|required|unique:forma_caract_micro_bacterias,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrada una Forma con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new FormaCaractMicroBacteria();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Forma Microscópica en Bacterias: "
                    . $tipo->nombre);
                break;
            case "metodo_conser":
                $rules = [
                    'nombre' => 'bail|required|unique:tipo_metodo_conservacion_bacterias,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado un Tipo con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new TipoMetodoConservacionBacteria();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Metodo de Conservación en Bacterias: "
                    . $tipo->nombre);
                break;
            case "tipo_agar":
                $rules = [
                    'nombre' => 'bail|required|unique:tipo_agar_bacterias,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado un Tipo con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new TipoAgarBacteria();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Agar en Bacterias: "
                    . $tipo->nombre);
                break;
            case "color":
                $rules = [
                    'nombre' => 'bail|required|unique:color_bacterias,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado un Color con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new ColorBacteria();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Color en Bacterias: "
                    . $tipo->nombre);
                break;
        }

        return $tipo;
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
}
