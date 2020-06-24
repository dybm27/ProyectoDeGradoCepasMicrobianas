<?php

namespace App\Http\Controllers;

use App\Actividad;
use App\Events\ActividadEvent;
use App\Events\NoticiaEvent;
use App\Events\NovedadEvent;
use App\Events\Prueba;
use App\Noticia;
use App\Novedad;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class PublicidadController extends Controller
{
    public function index()
    {
        return view('sitio-web.publicidad');
    }

    public function store(Request $request)
    {
        switch ($request->tipo) {
            case 'noticia':
                $reglas = ['titulo' => 'unique:noticias,titulo'];
                $mensajes = ['titulo.unique' => 'Ya existe una noticia con ese titulo'];
                break;
            case 'actividad':
                $reglas = ['titulo' => 'unique:actividads,titulo', 'fecha' => 'required'];
                $mensajes = [
                    'titulo.unique' => 'Ya existe una actividad con ese titulo',
                    'fecha.required' => 'Favor colocar la fecha!'
                ];
                break;
            case 'novedad':
                $reglas = ['titulo' => 'unique:novedads,titulo'];
                $mensajes = ['titulo.unique' => 'Ya existe una novedad con ese titulo'];
                break;
        }
        $this->validate($request, $reglas, $mensajes);

        switch ($request->tipo) {
            case 'noticia':
                $imagen = $this->guardarImagen($request->tipo, $request->file('imagen'));
                $publicidad = new Noticia();
                $imagenesEditor = $request->imagenesEditor;
                $imagenesGuardadas = $request->imagenesGuardadas;
                break;
            case 'actividad':
                $imagen = $this->guardarImagen($request->tipo, $request->imagen);
                $publicidad = new Actividad();
                $publicidad->lugar = $request->lugar;
                $publicidad->fecha = $request->fecha;
                $imagenesEditor = implode(",", $request->imagenesEditor);
                $imagenesGuardadas = implode(",", $request->imagenesGuardadas);
                break;
            case 'novedad':
                $imagen = $this->guardarImagen($request->tipo, $request->imagen);
                $publicidad = new Novedad();
                $imagenesEditor = implode(",", $request->imagenesEditor);
                $imagenesGuardadas = implode(",", $request->imagenesGuardadas);
                break;
        }
        $this->eliminarImagenes($imagenesEditor, $imagenesGuardadas);
        $publicidad->titulo = $request->titulo;
        $publicidad->link = $request->link;
        $publicidad->cuerpo = $request->cuerpo;
        $publicidad->publicar = $request->publicar;
        $publicidad->imagenesEditor = $imagenesEditor;
        $publicidad->imagen = $imagen['ruta'];
        $publicidad->imagenPublica = $imagen['rutaPublica'];
        $publicidad->save();
        $this->ejecutarEvento($request->tipo, $publicidad, 'agregar');
        return $publicidad;
    }

    public function update(Request $request, $id)
    {
        switch ($request->tipo) {
            case 'noticia':
                $publicidad = Noticia::find($id);
                $publicidad1 = Noticia::where('titulo', $request->titulo)->first();
                $imagenRequest = $request->file('imagen');
                if (is_array($request->imagenesEditor)) {
                    $imagenesEditor = implode(",", $request->imagenesEditor);
                    $imagenesGuardadas = implode(",", $request->imagenesGuardadas);
                } else {
                    $imagenesEditor = $request->imagenesEditor;
                    $imagenesGuardadas = $request->imagenesGuardadas;
                }
                break;
            case 'actividad':
                $publicidad =  Actividad::find($id);
                $publicidad1 = Actividad::where('titulo', $request->titulo)->first();
                $publicidad->lugar = $request->lugar;
                $publicidad->fecha = $request->fecha;
                $imagenRequest = $request->imagen;
                $imagenesEditor = implode(",", $request->imagenesEditor);
                $imagenesGuardadas = implode(",", $request->imagenesGuardadas);
                break;
            case 'novedad':
                $publicidad =  Novedad::find($id);
                $publicidad1 = Novedad::where('titulo', $request->titulo)->first();
                $imagenRequest = $request->imagen;
                $imagenesEditor = implode(",", $request->imagenesEditor);
                $imagenesGuardadas = implode(",", $request->imagenesGuardadas);
                break;
        }

        if (is_null($publicidad1) || $publicidad->id == $publicidad1->id) {
            if ($request->imagen != $publicidad->imagen) {
                Storage::disk('local')->delete($publicidad->imagen);
                $imagen = $this->guardarImagen($request->tipo, $imagenRequest);
                $publicidad->imagen = $imagen['ruta'];
                $publicidad->imagenPublica = $imagen['rutaPublica'];
            }
            $this->eliminarImagenes($imagenesEditor, $imagenesGuardadas);
            $publicidad->titulo = $request->titulo;
            $publicidad->link = $request->link;
            $publicidad->cuerpo = $request->cuerpo;
            $publicidad->publicar = $request->publicar;
            $publicidad->imagenesEditor = $imagenesEditor;
            $publicidad->save();
            $this->ejecutarEvento($request->tipo, $publicidad, 'editar');
            return $publicidad;
        } else {
            return response()->json([
                'errors' =>
                ['titulo' => ['Ya existe un registro con ese titulo']]
            ], 422);
        }
    }

    public function destroy(Request $request, $id)
    {
        switch ($request->tipo) {
            case 'noticia':
                $publicidad = Noticia::find($id);
                break;
            case 'actividad':
                $publicidad =  Actividad::find($id);
                break;
            case 'novedad':
                $publicidad =  Novedad::find($id);
                break;
        }
        Storage::delete($publicidad->imagen);
        $this->eliminarImagenesEditor($publicidad->imagenesEditor);
        $this->ejecutarEvento($request->tipo, $publicidad, 'eliminar');
        $publicidad->delete();
        return $publicidad;
    }

    public function guardarImagen($tipo, $imagen)
    {
        if ($tipo == 'noticia') {
            $nombre = Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '-' . $imagen->getClientOriginalName();
            Storage::put('/public/publicidad/' . $tipo . '/' . $nombre, file_get_contents($imagen));
        } else {
            $imagen_array = explode(",", $imagen);
            $data = base64_decode($imagen_array[1]);
            $nombre = Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '.png';
            Storage::put('/public/publicidad/' . $tipo . '/' . $nombre, $data);
        }
        $ruta = '/public/publicidad/' . $tipo . '/' . $nombre;
        $rutaPublica = '/storage/publicidad/' . $tipo . '/' . $nombre;
        return ['ruta' => $ruta, 'rutaPublica' => $rutaPublica];
    }

    public function publicar(Request $request, $id)
    {
        switch ($request->tipo) {
            case 'noticia':
                $publicidad = Noticia::find($id);
                break;
            case 'actividad':
                $publicidad =  Actividad::find($id);
                break;
            case 'novedad':
                $publicidad =  Novedad::find($id);
                break;
        }
        $publicidad->publicar = $request->publicar;
        $publicidad->save();
        $this->ejecutarEvento($request->tipo, $publicidad, 'editar');
        return $publicidad;
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

    public function ejecutarEvento($tipoDocumento, $publicidad, $tipoAccion)
    {
        switch ($tipoDocumento) {
            case 'noticia':
                //event(new Prueba('hola mores'));
                broadcast(new NoticiaEvent($publicidad, $tipoAccion))->toOthers();
                break;
            case 'actividad':
                broadcast(new ActividadEvent($publicidad, $tipoAccion))->toOthers();
                break;
            case 'novedad':
                broadcast(new NovedadEvent($publicidad, $tipoAccion))->toOthers();
                break;
        }
    }
}
