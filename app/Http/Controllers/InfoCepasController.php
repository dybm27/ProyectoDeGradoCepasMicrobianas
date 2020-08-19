<?php

namespace App\Http\Controllers;

use App\Clase;
use App\Division;
use App\Especie;
use App\Events\CepasInfoEvent;
use App\Familia;
use App\Genero;
use App\Orden;
use App\Phylum;
use App\Reino;
use App\Seguimiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InfoCepasController extends Controller
{
    public function agregarInfo(Request $request)
    {
        switch ($request->tipo) {
            case "genero":
                $rules = [
                    'nombre' => 'bail|required|unique:generos,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado un Genero con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new Genero();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->grupo_microbiano_id = $request->grupo_microbiano;
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Genero: " . $tipo->nombre);
                break;
            case "especie":
                $rules = [
                    'nombre' => 'bail|required|unique:especies,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado una Especie con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);

                $tipo = new Especie();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->genero_id = $request->genero;
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Especie: " . $tipo->nombre);
                break;
            case "familia":
                $rules = [
                    'nombre' => 'bail|required|unique:familias,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrada una Familia con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new Familia();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Familia: " . $tipo->nombre);
                break;
            case "orden":
                $rules = [
                    'nombre' => 'bail|required|unique:ordens,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado un Orden con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new Orden();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Orden: " . $tipo->nombre);
                break;
            case "clase":
                $rules = [
                    'nombre' => 'bail|required|unique:clases,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrada una Clase con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new Clase();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Clase: " . $tipo->nombre);
                break;
            case "phylum":
                $rules = [
                    'nombre' => 'bail|required|unique:phylums,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado un Phylum con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new Phylum();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Phylum: " . $tipo->nombre);
                break;
            case "reino":
                $rules = [
                    'nombre' => 'bail|required|unique:reinos,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado un Reino con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new Reino();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Reino: " . $tipo->nombre);
                break;
            case "division":
                $rules = [
                    'nombre' => 'bail|required|unique:divisions,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado una Division con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new Division();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Division: " . $tipo->nombre);
                break;
        }
        broadcast(new CepasInfoEvent($tipo, $request->tipo, 'agregar'))->toOthers();
        return $tipo;
    }

    public function editarInfo(Request $request, $id)
    {
        switch ($request->tipo) {
            case "genero":
                $tipo1 = Genero::find($id);
                $tipo2 = Genero::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado un Genero con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->grupo_microbiano_id = $request->grupo_microbiano;
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Genero: " . $tipo1->nombre);
                break;
            case "especie":
                $tipo1 = Especie::find($id);
                $tipo2 = Especie::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado una Especie con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->genero_id = $request->genero;
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Especie: " . $tipo1->nombre);
                break;
            case "familia":
                $tipo1 = Familia::find($id);
                $tipo2 = Familia::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado una Familia con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Familia: " . $tipo1->nombre);
                break;
            case "orden":
                $tipo1 = Orden::find($id);
                $tipo2 = Orden::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado un Orden con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Orden: " . $tipo1->nombre);
                break;
            case "clase":
                $tipo1 = Clase::find($id);
                $tipo2 = Clase::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado una Clase con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Clase: " . $tipo1->nombre);
                break;
            case "phylum":
                $tipo1 = Phylum::find($id);
                $tipo2 = Phylum::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado un Phylum con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Phylum: " . $tipo1->nombre);
                break;
            case "reino":
                $tipo1 = Reino::find($id);
                $tipo2 = Reino::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado un Reino con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Reino: " . $tipo1->nombre);
                break;
            case "division":
                $tipo1 = Division::find($id);
                $tipo2 = Division::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado una Division con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Division: " . $tipo1->nombre);
                break;
        }
        broadcast(new CepasInfoEvent($tipo1, $request->tipo, 'editar'))->toOthers();
        return $tipo1;
    }

    public function eliminarInfo(Request $request, $id)
    {
        switch ($request->tipo) {
            case "genero":
                $tipo = Genero::find($id);
                if ($this->validarEliminar($tipo, $request->tipo)) {
                    return 'negativo1';
                } else {
                    broadcast(new CepasInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Genero: " . $tipo->nombre);
                }
                break;
            case "especie":
                $tipo = Especie::find($id);
                if ($this->validarEliminar($tipo, $request->tipo)) {
                    return 'negativo';
                } else {
                    broadcast(new CepasInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Especie: " . $tipo->nombre);
                }
                break;
            case "familia":
                $tipo = Familia::find($id);
                if ($this->validarEliminar($tipo, $request->tipo)) {
                    return 'negativo';
                } else {
                    broadcast(new CepasInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Familia: " . $tipo->nombre);
                }
                break;
            case "orden":
                $tipo = Orden::find($id);
                if ($this->validarEliminar($tipo, $request->tipo)) {
                    return 'negativo';
                } else {
                    broadcast(new CepasInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Orden: " . $tipo->nombre);
                }
                break;
            case "clase":
                $tipo = Clase::find($id);
                if ($this->validarEliminar($tipo, $request->tipo)) {
                    return 'negativo';
                } else {
                    broadcast(new CepasInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Clase: " . $tipo->nombre);
                }
                break;
            case "phylum":
                $tipo = Phylum::find($id);
                if ($this->validarEliminar($tipo, $request->tipo)) {
                    return 'negativo';
                } else {
                    broadcast(new CepasInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Phylum: " . $tipo->nombre);
                }
                break;
            case "reino":
                $tipo = Reino::find($id);
                if ($this->validarEliminar($tipo, $request->tipo)) {
                    return 'negativo';
                } else {
                    broadcast(new CepasInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Reino: " . $tipo->nombre);
                }
                break;
            case "division":
                $tipo =  Division::find($id);
                if ($this->validarEliminar($tipo, $request->tipo)) {
                    return 'negativo';
                } else {
                    broadcast(new CepasInfoEvent($tipo, $request->tipo, 'eliminar'))->toOthers();
                    $tipo->delete();
                    $this->crearSeguimiento("Eliminó un Tipo de Division: " . $tipo->nombre);
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
            case "genero":
                if (
                    count($tipoCaract->cepas) > 0 || count($tipoCaract->especies) > 0
                ) {
                    $res = true;
                }
                break;
            case "especie":
                if (
                    count($tipoCaract->cepas) > 0
                ) {
                    $res = true;
                }
                break;
            case "familia":
                if (
                    count($tipoCaract->hongos) > 0 || count($tipoCaract->levaduras) > 0
                ) {
                    $res = true;
                }
                break;
            case "orden":
                if (
                    count($tipoCaract->hongos) > 0 || count($tipoCaract->levaduras) > 0
                    || count($tipoCaract->actinomicetos) > 0
                ) {
                    $res = true;
                }
                break;
            case "clase":
                if (
                    count($tipoCaract->hongos) > 0 || count($tipoCaract->levaduras) > 0
                    || count($tipoCaract->actinomicetos) > 0
                ) {
                    $res = true;
                }
                break;
            case "phylum":
                if (
                    count($tipoCaract->hongos) > 0 || count($tipoCaract->actinomicetos) > 0
                ) {
                    $res = true;
                }
                break;
            case "reino":
                if (
                    count($tipoCaract->actinomicetos) > 0
                ) {
                    $res = true;
                }
                break;
            case "division":
                if (
                    count($tipoCaract->levaduras) > 0
                ) {
                    $res = true;
                }
                break;
        }
        return $res;
    }
}
