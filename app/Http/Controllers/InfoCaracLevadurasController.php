<?php

namespace App\Http\Controllers;

use App\ColorLevadura;
use App\Seguimiento;
use App\TexturaLevadura;
use App\TipoMetodoConservacionLevadura;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InfoCaracLevadurasController extends Controller
{
    public function agregarInfo(Request $request)
    {
        switch ($request->tipo) {
            case "color":
                $rules = [
                    'nombre' => 'bail|required|unique:color_levaduras,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado un Color con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new ColorLevadura();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Color en Levaduras: "
                    . $tipo->nombre);
                break;
            case "textura":
                $rules = [
                    'nombre' => 'bail|required|unique:textura_levaduras,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrada una Textura con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new TexturaLevadura();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Textura en Levaduras: "
                    . $tipo->nombre);
                break;
            case "metodo_conser":
                $rules = [
                    'nombre' => 'bail|required|unique:tipo_metodo_conservacion_levaduras,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado un Tipo con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new TipoMetodoConservacionLevadura();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Metodo de Conservación en Levaduras: "
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
