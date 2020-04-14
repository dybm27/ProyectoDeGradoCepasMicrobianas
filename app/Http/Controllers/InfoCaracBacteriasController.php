<?php

namespace App\Http\Controllers;

use App\Borde;
use App\ColorBacteria;
use App\DetalleOptico;
use App\Elevacion;
use App\FormaCaractMacro;
use App\FormaCaractMicro;
use App\Superficie;
use App\TipoAgar;
use App\TipoMetodoConservacionBacteria;
use Illuminate\Http\Request;

class InfoCaracBacteriasController extends Controller
{
    public function agregarInfo(Request $request)
    {
        switch ($request->tipo) {
            case "forma_macro":
                $rules = [
                    'nombre' => 'bail|required|unique:forma_caract_macros,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrada una Forma con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new FormaCaractMacro();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                break;
            case "borde":
                $rules = [
                    'nombre' => 'bail|required|unique:bordes,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado un Borde con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);

                $tipo = new Borde();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                break;
            case "detalle":
                $rules = [
                    'nombre' => 'bail|required|unique:detalle_opticos,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado un Detalle Optico con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);

                $tipo = new DetalleOptico();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                break;
            case "elevacion":
                $rules = [
                    'nombre' => 'bail|required|unique:elevacions,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrada una Elevacion con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new Elevacion();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                break;
            case "superficie":
                $rules = [
                    'nombre' => 'bail|required|unique:superficies,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrada una Superficie con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new Superficie();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                break;
            case "forma_micro":
                $rules = [
                    'nombre' => 'bail|required|unique:forma_caract_micros,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrada una Forma con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new FormaCaractMicro();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
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
                break;
            case "tipo_agar":
                $rules = [
                    'nombre' => 'bail|required|unique:tipo_agars,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado un Tipo con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new TipoAgar();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
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
                break;
        }

        return $tipo;
    }
}
