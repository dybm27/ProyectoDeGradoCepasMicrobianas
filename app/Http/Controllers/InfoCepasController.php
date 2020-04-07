<?php

namespace App\Http\Controllers;

use App\Clase;
use App\Division;
use App\Especie;
use App\Familia;
use App\Genero;
use App\Orden;
use App\Phylum;
use App\Reino;
use Illuminate\Http\Request;

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
                $tipo->nombre = $request->nombre;
                $tipo->grupo_microbiano_id = $request->grupo_microbiano;
                $tipo->save();
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
                $tipo->nombre = $request->nombre;
                $tipo->genero_id = $request->genero;
                $tipo->save();
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
                $tipo->nombre = $request->nombre;
                $tipo->save();
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
                $tipo->nombre = $request->nombre;
                $tipo->save();
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
                $tipo->nombre = $request->nombre;
                $tipo->save();
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
                $tipo->nombre = $request->nombre;
                $tipo->save();
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
                $tipo->nombre = $request->nombre;
                $tipo->save();
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
                $tipo->nombre = $request->nombre;
                $tipo->save();
                break;
        }

        return $tipo;
    }
}
