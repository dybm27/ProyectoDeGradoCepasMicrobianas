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
    public function index()
    {
        return view('otra-info');
    }
    
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

    public function editarInfo(Request $request, $id)
    {
        switch ($request->tipo) {
            case "color":
                $tipo1 = ColorLevadura::find($id);
                $tipo2 = ColorLevadura::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado un Color con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Color en Levaduras: "
                    . $tipo1->nombre);
                break;
            case "textura":
                $tipo1 = TexturaLevadura::find($id);
                $tipo2 = TexturaLevadura::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrada una Textura con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Textura en Levaduras: "
                    . $tipo1->nombre);
                break;
            case "metodo_conser":
                $tipo1 = TipoMetodoConservacionLevadura::find($id);
                $tipo2 = TipoMetodoConservacionLevadura::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado un Tipo de Metodo con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Metodo de Conservación en Levaduras: "
                    . $tipo1->nombre);
                break;
        }

        return $tipo1;
    }

    public function eliminarInfo(Request $request, $id)
    {
        switch ($request->tipo) {
            case "color":
                $tipo = ColorLevadura::find($id);
                $tipo->delete();
                $this->crearSeguimiento("Eliminó un Tipo de Color en Levaduras: "
                    . $tipo->nombre);
                break;
            case "textura":
                $tipo = TexturaLevadura::find($id);
                $tipo->delete();
                $this->crearSeguimiento("Eliminó un Tipo de Textura en Levaduras: "
                    . $tipo->nombre);
                break;
            case "metodo_conser":
                $tipo = TipoMetodoConservacionLevadura::find($id);
                $tipo->delete();
                $this->crearSeguimiento("Eliminó un Tipo de Metodo de Conservación en Levaduras: "
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
