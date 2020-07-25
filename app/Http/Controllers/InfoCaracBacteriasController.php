<?php

namespace App\Http\Controllers;

use App\BordeBacteria;
use App\ColorBacteria;
use App\DetalleOpticoBacteria;
use App\ElevacionBacteria;
use App\Events\BacteriasInfoEvent;
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
    public function index()
    {
        return view('otra-info');
    }

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
            case "tipo_metodo":
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
        broadcast(new BacteriasInfoEvent($tipo, $request->tipo, 'agregar'))->toOthers();
        return $tipo;
    }

    public function editarInfo(Request $request, $id)
    {
        switch ($request->tipo) {
            case "forma_macro":
                $tipo1 = FormaCaractMacroBacteria::find($id);
                $tipo2 = FormaCaractMacroBacteria::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrada una Forma con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Forma Macroscópica en Bacterias: "
                    . $tipo1->nombre);
                break;
            case "borde":
                $tipo1 = BordeBacteria::find($id);
                $tipo2 = BordeBacteria::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado un Borde con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Borde en Bacterias: "
                    . $tipo1->nombre);
                break;
            case "detalle":
                $tipo1 = DetalleOpticoBacteria::find($id);
                $tipo2 = DetalleOpticoBacteria::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado un Detalle Opctico con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Detalle Opctico en Bacterias: "
                    . $tipo1->nombre);
                break;
            case "elevacion":
                $tipo1 = ElevacionBacteria::find($id);
                $tipo2 = ElevacionBacteria::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrada una Elevación con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Elevación en Bacterias: "
                    . $tipo1->nombre);
                break;
            case "superficie":
                $tipo1 = SuperficieBacteria::find($id);
                $tipo2 = SuperficieBacteria::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrada una Superficie con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Superficie en Bacterias: "
                    . $tipo1->nombre);
                break;
            case "forma_micro":
                $tipo1 = FormaCaractMicroBacteria::find($id);
                $tipo2 = FormaCaractMicroBacteria::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrada una Forma con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Forma Microscópica en Bacterias: "
                    . $tipo1->nombre);
                break;
            case "tipo_metodo":
                $tipo1 = TipoMetodoConservacionBacteria::find($id);
                $tipo2 = TipoMetodoConservacionBacteria::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado un Tipo de Metodo con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Metodo de Conservación en Bacterias: "
                    . $tipo1->nombre);
                break;
            case "tipo_agar":
                $tipo1 = TipoAgarBacteria::find($id);
                $tipo2 = TipoAgarBacteria::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado un Tipo de Agar con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Agar en Bacterias: "
                    . $tipo1->nombre);
                break;
            case "color":
                $tipo1 = ColorBacteria::find($id);
                $tipo2 = ColorBacteria::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado un Color con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Color en Bacterias: "
                    . $tipo1->nombre);
                break;
        }
        broadcast(new BacteriasInfoEvent($tipo1, $request->tipo, 'editar'))->toOthers();
        return $tipo1;
    }

    public function eliminarInfo(Request $request, $id)
    {
        switch ($request->tipo) {
            case "forma_macro":
                $tipo = FormaCaractMacroBacteria::find($id);
                if ($this->validarEliminar($tipo, 'macro')) {
                    return 'macro';
                } else {
                    broadcast(new BacteriasInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Forma Macroscópica en Bacterias: "
                        . $tipo->nombre);
                }
                break;
            case "borde":
                $tipo = BordeBacteria::find($id);
                if ($this->validarEliminar($tipo, 'macro')) {
                    return 'macro';
                } else {
                    broadcast(new BacteriasInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Borde en Bacterias: "
                        . $tipo->nombre);
                }
                break;
            case "detalle":
                $tipo = DetalleOpticoBacteria::find($id);
                if ($this->validarEliminar($tipo, 'macro')) {
                    return 'macro';
                } else {
                    broadcast(new BacteriasInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Detalle Opctico en Bacterias: "
                        . $tipo->nombre);
                }
                break;
            case "elevacion":
                $tipo = ElevacionBacteria::find($id);
                if ($this->validarEliminar($tipo, 'macro')) {
                    return 'macro';
                } else {
                    broadcast(new BacteriasInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Elevación en Bacterias: "
                        . $tipo->nombre);
                }
                break;
            case "superficie":
                $tipo = SuperficieBacteria::find($id);
                if ($this->validarEliminar($tipo, 'macro')) {
                    return 'macro';
                } else {
                    broadcast(new BacteriasInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Superficie en Bacterias: "
                        . $tipo->nombre);
                }
                break;
            case "forma_micro":
                $tipo = FormaCaractMicroBacteria::find($id);
                if ($this->validarEliminar($tipo, 'micro')) {
                    return 'micro';
                } else {
                    broadcast(new BacteriasInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Forma Microscópica en Bacterias: "
                        . $tipo->nombre);
                }
                break;
            case "tipo_metodo":
                $tipo = TipoMetodoConservacionBacteria::find($id);
                if ($this->validarEliminar($tipo, 'metodo')) {
                    return 'metodo';
                } else {
                    broadcast(new BacteriasInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Metodo de Conservación en Bacterias: "
                        . $tipo->nombre);
                }
                break;
            case "tipo_agar":
                $tipo = TipoAgarBacteria::find($id);
                if ($this->validarEliminar($tipo, 'metodo')) {
                    return 'metodo';
                } else {
                    broadcast(new BacteriasInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Agar en Bacterias: "
                        . $tipo->nombre);
                }
                break;
            case "color":
                $tipo = ColorBacteria::find($id);
                if ($this->validarEliminar($tipo, 'macro')) {
                    return 'macro';
                } else {
                    broadcast(new BacteriasInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Color en Bacterias: "
                        . $tipo->nombre);
                }
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

    public function validarEliminar($tipoCaract, $tipo)
    {
        $res = false;
        switch ($tipo) {
            case "macro":
                if (
                    count($tipoCaract->caractMacros) > 0
                ) {
                    $res = true;
                }
                break;
            case "micro":
                if (
                    count($tipoCaract->caractMicros) > 0
                ) {
                    $res = true;
                }
                break;
            case "metodo":
                if (
                    count($tipoCaract->metodosConservacion) > 0
                ) {
                    $res = true;
                }
                break;
        }
        return $res;
    }
}
