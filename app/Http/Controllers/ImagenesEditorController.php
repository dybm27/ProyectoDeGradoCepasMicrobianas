<?php

namespace App\Http\Controllers;

use App\Actividad;
use App\Noticia;
use App\Novedad;
use App\QuienesSomos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ImagenesEditorController extends Controller
{
    public function uploadImagen(Request $request)
    {
        if ($request->hasFile('upload')) {
            $file = $request->file('upload');
            $fileName = Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '-' . $file->getClientOriginalName();

            Storage::disk('local')->put('/public/editor/imagenes/' . $fileName, file_get_contents($file));

            $url = asset('/storage/editor/imagenes/' . $fileName);
            return response()->json([
                "uploaded" => true,
                'url' => $url
            ]);
        }
        return response()->json([
            "uploaded" => false,
            'url' => 'error Bro'
        ]);
    }

    public function eliminarImagenesDelStorage()
    {
        $arrayImagenes = [];
        $noticias = Noticia::all('imagenesEditor');
        $actividades = Actividad::all('imagenesEditor');
        $novedades = Novedad::all('imagenesEditor');
        $mision = QuienesSomos::where('quienes_somos_tipos_id', 1)->select('imagenesEditor')->first();
        $vision = QuienesSomos::where('quienes_somos_tipos_id', 2)->select('imagenesEditor')->first();
        $objetivos = QuienesSomos::where('quienes_somos_tipos_id', 3)->select('imagenesEditor')->first();
        foreach ($noticias as  $noticia) {
            $arrayImagenesNoticias = explode(",", $noticia->imagenesEditor);
            foreach ($arrayImagenesNoticias as  $imagen) {
                array_push($arrayImagenes, 'public' . $imagen);
            }
        }
        foreach ($actividades as  $actividad) {
            $arrayImagenesActividades = explode(",", $actividad->imagenesEditor);
            foreach ($arrayImagenesActividades as  $imagen) {
                array_push($arrayImagenes, 'public' .  $imagen);
            }
        }
        foreach ($novedades as  $novedad) {
            $arrayImagenesNovedades = explode(",", $novedad->imagenesEditor);
            foreach ($arrayImagenesNovedades as  $imagen) {
                array_push($arrayImagenes, 'public' .  $imagen);
            }
        }
        $arrayImagenesMision = explode(",", $mision->imagenesEditor);
        foreach ($arrayImagenesMision as  $imagen) {
            array_push($arrayImagenes, 'public' . $imagen);
        }
        $arrayImagenesVision = explode(",", $vision->imagenesEditor);
        foreach ($arrayImagenesVision as  $imagen) {
            array_push($arrayImagenes, 'public' .  $imagen);
        }
        $arrayImagenesObjetivos = explode(",", $objetivos->imagenesEditor);
        foreach ($arrayImagenesObjetivos as  $imagen) {
            array_push($arrayImagenes, 'public' .  $imagen);
        }
        $files = Storage::files('/public/editor/imagenes');
        $resultados = array_diff($files, $arrayImagenes);

        foreach ($resultados as  $resultado) {
            Storage::delete($resultado);
        };
        return $resultados;
    }
}
