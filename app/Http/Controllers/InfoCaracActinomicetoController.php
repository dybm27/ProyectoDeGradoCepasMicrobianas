<?php

namespace App\Http\Controllers;

use App\BordeActinomiceto;
use App\ColorActinomiceto;
use App\ConidioforoActinomiceto;
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

class InfoCaracActinomicetoController extends Controller
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
