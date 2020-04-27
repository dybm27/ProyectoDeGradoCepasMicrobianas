<?php

namespace App\Http\Controllers;

use App\ColorLevadura;
use App\TexturaLevadura;
use Illuminate\Http\Request;

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
                break;
        }

        return $tipo;
    }
}
