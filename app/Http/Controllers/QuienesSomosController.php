<?php

namespace App\Http\Controllers;

use App\Mision;
use App\Objetivo;
use App\Vision;
use Illuminate\Http\Request;

class QuienesSomosController extends Controller
{
    public function index()
    {
        return view('sitio-web.quienes-somos');
    }

    public function cambiarVision(Request $request)
    {
        $vision = Vision::find(1);
        $vision->texto = ucfirst($request->texto);
        $vision->save();

        return $vision;
    }
    public function cambiarMision(Request $request)
    {
        $mision = Mision::find(1);
        $mision->texto = ucfirst($request->texto);
        $mision->save();

        return $mision;
    }
    public function agregarObjetivo(Request $request)
    {
        $rules = [
            'texto' => 'required|unique:objetivos,texto'
        ];
        $mensajes = [
            'texto.unique' => 'El objetivo ya existe'
        ];
        $this->validate($request, $rules, $mensajes);
        $objetivo = new Objetivo();
        $objetivo->texto = ucfirst($request->texto);
        $objetivo->save();

        return $objetivo;
    }
    public function editarObjetivo(Request $request, $id)
    {
        $objetivo1 = Objetivo::find($id);
        $objetivo2 = Objetivo::where('texto', $request->texto)->first();

        if (!is_null($objetivo2)) {
            if ($objetivo2->id != $objetivo1->id) {
                return response('El objetivo ya existe', 422);
            }
        }
        $objetivo1->texto = ucfirst($request->texto);
        $objetivo1->save();

        return $objetivo1;
    }
    public function eliminarObjetivo($id)
    {
        $objetivo = Objetivo::find($id);
        $objetivo->delete();

        return $objetivo;
    }
}
