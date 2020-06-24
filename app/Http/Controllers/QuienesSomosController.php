<?php

namespace App\Http\Controllers;

use App\Mision;
use App\Objetivo;
use App\QuienesSomos;
use App\Vision;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class QuienesSomosController extends Controller
{
    public function index()
    {
        return view('sitio-web.quienes-somos');
    }

    public function cambiarMision(Request $request)
    {
        $vision = QuienesSomos::where('quienes_somos_tipos_id', 1)->first();
        $vision->cuerpo = $request->cuerpo;
        $imagenesEditor = implode(",", $request->imagenesEditor);
        $imagenesGuardadas = implode(",", $request->imagenesGuardadas);
        $this->eliminarImagenes($imagenesEditor, $imagenesGuardadas);
        $vision->imagenesEditor = $imagenesEditor;
        $vision->save();

        return $vision;
    }
    public function cambiarVision(Request $request)
    {
        $mision = QuienesSomos::where('quienes_somos_tipos_id', 2)->first();
        $mision->cuerpo = $request->cuerpo;
        $imagenesEditor = implode(",", $request->imagenesEditor);
        $imagenesGuardadas = implode(",", $request->imagenesGuardadas);
        $this->eliminarImagenes($imagenesEditor, $imagenesGuardadas);
        $mision->imagenesEditor = $imagenesEditor;
        $mision->save();

        return $mision;
    }
    public function cambiarObjetivos(Request $request)
    {
        $objetivos = QuienesSomos::where('quienes_somos_tipos_id', 3)->first();
        $objetivos->cuerpo = $request->cuerpo;
        $imagenesEditor = implode(",", $request->imagenesEditor);
        $imagenesGuardadas = implode(",", $request->imagenesGuardadas);
        $this->eliminarImagenes($imagenesEditor, $imagenesGuardadas);
        $objetivos->imagenesEditor = $imagenesEditor;
        $objetivos->save();

        return $objetivos;
    }

    public function eliminarImagenes($imagenesEditor, $imagenesGuardadas)
    {
        $array1 = explode(",", $imagenesEditor);
        $array2 = explode(",", $imagenesGuardadas);
        $resultados = array_diff($array2, $array1);
        foreach ($resultados as  $resultado) {
            Storage::delete('/public' . $resultado);
        };
    }

    public function eliminarImagenesEditor($imagenesEditor)
    {
        $array = explode(",", $imagenesEditor);
        foreach ($array as  $resultado) {
            Storage::delete('/public' . $resultado);
        };
    }
}
