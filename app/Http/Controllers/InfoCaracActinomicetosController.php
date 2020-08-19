<?php

namespace App\Http\Controllers;

use App\BordeActinomiceto;
use App\ColorActinomiceto;
use App\ConidioforoActinomiceto;
use App\Events\ActinomicetosInfoEvent;
use App\FormaCaractMacroActinomiceto;
use App\FormaCaractMicroActinomiceto;
use App\MicelioActinomiceto;
use App\PigmentoActinomiceto;
use App\Seguimiento;
use App\SuperficieActinomiceto;
use App\TexturaActinomiceto;
use App\TincionGramActinomiceto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InfoCaracActinomicetosController extends Controller
{
    public function agregarInfo(Request $request)
    {
        switch ($request->tipo) {
            case "forma_macro":
                $rules = [
                    'nombre' => 'bail|required|unique:forma_caract_macro_actinomicetos,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrada una Forma con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new FormaCaractMacroActinomiceto();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Forma Macroscópica en Actinomicetos: "
                    . $tipo->nombre);
                break;
            case "borde":
                $rules = [
                    'nombre' => 'bail|required|unique:borde_actinomicetos,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado un Borde con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new BordeActinomiceto();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Borde en Actinomicetos: "
                    . $tipo->nombre);
                break;
            case "textura":
                $rules = [
                    'nombre' => 'bail|required|unique:textura_actinomicetos,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrada una Textura con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);

                $tipo = new TexturaActinomiceto();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de textura en Actinomicetos: "
                    . $tipo->nombre);
                break;
            case "pigmento":
                $rules = [
                    'nombre' => 'bail|required|unique:pigmento_actinomicetos,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado un Pigmento con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new PigmentoActinomiceto();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Pigmento en Actinomicetos: "
                    . $tipo->nombre);
                break;
            case "superficie":
                $rules = [
                    'nombre' => 'bail|required|unique:superficie_actinomicetos,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrada una Superficie con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new SuperficieActinomiceto();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Superficie en Actinomicetos: "
                    . $tipo->nombre);
                break;
            case "forma_micro":
                $rules = [
                    'nombre' => 'bail|required|unique:forma_caract_micro_actinomicetos,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrada una Forma con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new FormaCaractMicroActinomiceto();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Forma Microscópica en Actinomicetos: "
                    . $tipo->nombre);
                break;
            case "tincion":
                $rules = [
                    'nombre' => 'bail|required|unique:tincion_gram_actinomicetos,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrada una TincionGram con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new TincionGramActinomiceto();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de TincionGram en Actinomicetos: "
                    . $tipo->nombre);
                break;
            case "micelio":
                $rules = [
                    'nombre' => 'bail|required|unique:micelio_actinomicetos,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado un Micelio con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new MicelioActinomiceto();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Micelio en actinomicetos: "
                    . $tipo->nombre);
                break;
            case "conidioforo":
                $rules = [
                    'nombre' => 'bail|required|unique:conidioforo_actinomicetos,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado un Conidioforo con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new ConidioforoActinomiceto();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Conidioforo en actinomicetos: "
                    . $tipo->nombre);
                break;
            case "color":
                $rules = [
                    'nombre' => 'bail|required|unique:color_actinomicetos,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado un Color con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new ColorActinomiceto();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Color en Actinomicetos: "
                    . $tipo->nombre);
                break;
        }
        broadcast(new ActinomicetosInfoEvent($tipo, $request->tipo, 'agregar'))->toOthers();
        return $tipo;
    }

    public function EditarInfo(Request $request, $id)
    {
        switch ($request->tipo) {
            case "forma_macro":
                $tipo1 = FormaCaractMacroActinomiceto::find($id);
                $tipo2 = FormaCaractMacroActinomiceto::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado una Forma con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Forma Macroscópica en Actinomicetos: "
                    . $tipo1->nombre);
                break;
            case "borde":
                $tipo1 = BordeActinomiceto::find($id);
                $tipo2 = BordeActinomiceto::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado un Borde con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Borde en Actinomicetos: "
                    . $tipo1->nombre);
                break;
            case "textura":
                $tipo1 = TexturaActinomiceto::find($id);
                $tipo2 = TexturaActinomiceto::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrada una textura con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de textura en Actinomicetos: "
                    . $tipo1->nombre);
                break;
            case "pigmento":
                $tipo1 = PigmentoActinomiceto::find($id);
                $tipo2 = PigmentoActinomiceto::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado un Pigmento con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Pigmento en Actinomicetos: "
                    . $tipo1->nombre);
                break;
            case "superficie":
                $tipo1 = SuperficieActinomiceto::find($id);
                $tipo2 = SuperficieActinomiceto::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado una Superficie con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Superficie en Actinomicetos: "
                    . $tipo1->nombre);
                break;
            case "forma_micro":
                $tipo1 = FormaCaractMicroActinomiceto::find($id);
                $tipo2 = FormaCaractMicroActinomiceto::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrada una Forma con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Forma Microscópica en Actinomicetos: "
                    . $tipo1->nombre);
                break;
            case "tincion":
                $tipo1 = TincionGramActinomiceto::find($id);
                $tipo2 = TincionGramActinomiceto::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrada una TincionGram con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de TincionGram en Actinomicetos: "
                    . $tipo1->nombre);
                break;
            case "micelio":
                $tipo1 = MicelioActinomiceto::find($id);
                $tipo2 = MicelioActinomiceto::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado un Micelio con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Micelio en actinomicetos: "
                    . $tipo1->nombre);
                break;
            case "conidioforo":
                $tipo1 = ConidioforoActinomiceto::find($id);
                $tipo2 = ConidioforoActinomiceto::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado un Conidioforo con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Conidioforo en actinomicetos: "
                    . $tipo1->nombre);
                break;
            case "color":
                $tipo1 = ColorActinomiceto::find($id);
                $tipo2 = ColorActinomiceto::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado un Color con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Color en Actinomicetos: "
                    . $tipo1->nombre);
                break;
        }
        broadcast(new ActinomicetosInfoEvent($tipo1, $request->tipo, 'editar'))->toOthers();
        return $tipo1;
    }

    public function eliminarInfo(Request $request, $id)
    {
        switch ($request->tipo) {
            case "forma_macro":
                $tipo = FormaCaractMacroActinomiceto::find($id);
                if ($this->validarEliminar($tipo, 'macro')) {
                    return 'macro';
                } else {
                    broadcast(new ActinomicetosInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Forma Macroscópica en Actinomicetos: "
                        . $tipo->nombre);
                }
                break;
            case "borde":
                $tipo = BordeActinomiceto::find($id);
                if ($this->validarEliminar($tipo, 'macro')) {
                    return 'macro';
                } else {
                    broadcast(new ActinomicetosInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Borde en Actinomicetos: "
                        . $tipo->nombre);
                }
                break;
            case "textura":
                $tipo = TexturaActinomiceto::find($id);
                if ($this->validarEliminar($tipo, 'macro')) {
                    return 'macro';
                } else {
                    broadcast(new ActinomicetosInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de textura en Actinomicetos: "
                        . $tipo->nombre);
                }
                break;
            case "pigmento":
                $tipo = PigmentoActinomiceto::find($id);
                if ($this->validarEliminar($tipo, 'macro')) {
                    return 'macro';
                } else {
                    broadcast(new ActinomicetosInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Pigmento en Actinomicetos: "
                        . $tipo->nombre);
                }
                break;
            case "superficie":
                $tipo = SuperficieActinomiceto::find($id);
                if ($this->validarEliminar($tipo, 'macro')) {
                    return 'macro';
                } else {
                    broadcast(new ActinomicetosInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Superficie en Actinomicetos: "
                        . $tipo->nombre);
                }
                break;
            case "forma_micro":
                $tipo = FormaCaractMicroActinomiceto::find($id);
                if ($this->validarEliminar($tipo, 'micro')) {
                    return 'micro';
                } else {
                    broadcast(new ActinomicetosInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Forma Microscópica en Actinomicetos: "
                        . $tipo->nombre);
                }
                break;
            case "tincion":
                $tipo = TincionGramActinomiceto::find($id);
                if ($this->validarEliminar($tipo, 'micro')) {
                    return 'micro';
                } else {
                    broadcast(new ActinomicetosInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de TincionGram en Actinomicetos: "
                        . $tipo->nombre);
                }
                break;
            case "micelio":
                $tipo = MicelioActinomiceto::find($id);
                if ($this->validarEliminar($tipo, 'micro')) {
                    return 'micro';
                } else {
                    broadcast(new ActinomicetosInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Micelio en actinomicetos: "
                        . $tipo->nombre);
                }
                break;
            case "conidioforo":
                $tipo = ConidioforoActinomiceto::find($id);
                if ($this->validarEliminar($tipo, 'micro')) {
                    return 'micro';
                } else {
                    broadcast(new ActinomicetosInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Conidioforo en actinomicetos: "
                        . $tipo->nombre);
                }
                break;
            case "color":
                $tipo = ColorActinomiceto::find($id);
                if ($this->validarEliminar($tipo, 'macro')) {
                    return 'macro';
                } else {
                    broadcast(new ActinomicetosInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Color en Actinomicetos: "
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
        $seguimiento->rol = Auth::user()->rol->nombre;
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
        }
        return $res;
    }
}
