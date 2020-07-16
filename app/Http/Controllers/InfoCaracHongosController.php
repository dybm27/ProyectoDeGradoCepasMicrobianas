<?php

namespace App\Http\Controllers;

use App\ColorHongo;
use App\ConidioforoHongo;
use App\EsporaAsexualHongo;
use App\EsporaSexualHongo;
use App\Seguimiento;
use App\TexturaHongo;
use App\TipoMetodoConservacionHongo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InfoCaracHongosController extends Controller
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
                    'nombre' => 'bail|required|unique:color_hongos,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado un color con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new ColorHongo();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Color en Hongos: "
                    . $tipo->nombre);
                break;
            case "textura":
                $rules = [
                    'nombre' => 'bail|required|unique:textura_hongos,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrada una Textura con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);

                $tipo = new TexturaHongo();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Textura en Hongos: "
                    . $tipo->nombre);
                break;
            case "conidioforo":
                $rules = [
                    'nombre' => 'bail|required|unique:conidioforo_hongos,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado un Conidioforo con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);

                $tipo = new ConidioforoHongo();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Conidioforo en Hongos: "
                    . $tipo->nombre);
                break;
            case "espora_asexual":
                $rules = [
                    'nombre' => 'bail|required|unique:espora_asexual_hongos,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrada una Espora Asexual con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new EsporaAsexualHongo();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Espora Asexual en Hongos: "
                    . $tipo->nombre);
                break;
            case "espora_sexual":
                $rules = [
                    'nombre' => 'bail|required|unique:espora_sexual_hongos,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrada una Espora Sexual con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new EsporaSexualHongo();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Espora Sexual en Hongos: "
                    . $tipo->nombre);
                break;
            case "metodo_conser":
                $rules = [
                    'nombre' => 'bail|required|unique:tipo_metodo_conservacion_hongos,nombre'
                ];
                $messages = [
                    'nombre.unique' => 'Ya se encuentra registrado un Tipo con ese nombre.'
                ];
                $this->validate($request, $rules, $messages);
                $tipo = new TipoMetodoConservacionHongo();
                $tipo->nombre = ucfirst($request->nombre);
                $tipo->save();
                $this->crearSeguimiento("Agregó un Tipo de Metodo de Conservación en Hongos: "
                    . $tipo->nombre);
                break;
        }

        return $tipo;
    }

    public function editarInfo(Request $request, $id)
    {
        switch ($request->tipo) {
            case "color":
                $tipo1 = ColorHongo::find($id);
                $tipo2 = ColorHongo::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado un Color con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Color en Hongos: "
                    . $tipo1->nombre);
                break;
            case "textura":
                $tipo1 = TexturaHongo::find($id);
                $tipo2 = TexturaHongo::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrada una Textura con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Textura en Hongos: "
                    . $tipo1->nombre);
                break;
            case "conidioforo":
                $tipo1 = ConidioforoHongo::find($id);
                $tipo2 = ConidioforoHongo::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado un Conidioforo con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Conidioforo en Hongos: "
                    . $tipo1->nombre);
                break;
            case "espora_asexual":
                $tipo1 = EsporaAsexualHongo::find($id);
                $tipo2 = EsporaAsexualHongo::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado un Espora Asexual con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Espora Asexual en Hongos: "
                    . $tipo1->nombre);
                break;
            case "espora_sexual":
                $tipo1 = EsporaSexualHongo::find($id);
                $tipo2 = EsporaSexualHongo::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado un Espora Sexual con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Espora Sexual en Hongos: "
                    . $tipo1->nombre);
                break;
            case "metodo_conser":
                $tipo1 = TipoMetodoConservacionHongo::find($id);
                $tipo2 = TipoMetodoConservacionHongo::where('nombre', $request->nombre)->first();
                if (!is_null($tipo2)) {
                    if ($tipo2->id != $tipo1->id) {
                        return response('Ya se encuentra registrado un Tipo de Metodo con ese nombre', 422);
                    }
                }
                $tipo1->nombre = ucfirst($request->nombre);
                $tipo1->save();
                $this->crearSeguimiento("Editó un Tipo de Metodo de Conservación en Hongos: "
                    . $tipo1->nombre);
                break;
        }

        return $tipo1;
    }

    public function eliminarInfo(Request $request, $id)
    {
        switch ($request->tipo) {
            case "color":
                $tipo = ColorHongo::find($id);
                $tipo->delete();
                $this->crearSeguimiento("Eliminó un Tipo de Color en Hongos: "
                    . $tipo->nombre);
                break;
            case "textura":
                $tipo = TexturaHongo::find($id);
                $tipo->delete();
                $this->crearSeguimiento("Eliminó un Tipo de Textura en Hongos: "
                    . $tipo->nombre);
                break;
            case "conidioforo":
                $tipo = ConidioforoHongo::find($id);
                $tipo->delete();
                $this->crearSeguimiento("Eliminó un Tipo de Conidioforo en Hongos: "
                    . $tipo->nombre);
                break;
            case "espora_asexual":
                $tipo = EsporaAsexualHongo::find($id);
                $tipo->delete();
                $this->crearSeguimiento("Eliminó un Tipo de Espora Asexual en Hongos: "
                    . $tipo->nombre);
                break;
            case "espora_sexual":
                $tipo = EsporaSexualHongo::find($id);
                $tipo->delete();
                $this->crearSeguimiento("Eliminó un Tipo de Espora Sexual en Hongos: "
                    . $tipo->nombre);
                break;
            case "metodo_conser":
                $tipo = TipoMetodoConservacionHongo::find($id);
                $tipo->delete();
                $this->crearSeguimiento("Eliminó un Tipo de Metodo de Conservación en Hongos: "
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
