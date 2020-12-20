<?php

namespace App\Http\Controllers;

use App\Actividad;
use App\Events\ActividadEvent;
use App\Events\NoticiaEvent;
use App\Events\NovedadEvent;
use App\Events\RefrescarCalendarioEvent;
use App\Noticia;
use App\Novedad;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class PublicidadController extends Controller
{
    public $idPublicaion;

    public function store(Request $request)
    {
        switch ($request->tipo) {
            case 'noticia':
                $reglas = ['titulo' => 'required|unique:noticias,titulo'];
                break;
            case 'actividad':
                $reglas = [
                    'titulo' => 'required|unique:actividads,titulo',
                    'fecha' => 'required',  'lugar' => 'required'
                ];
                break;
            case 'novedad':
                $reglas = ['titulo' => 'required|unique:novedads,titulo'];
                break;
        }
        if (is_null($request->cuerpo)) {
            $reglas += ['link' => 'required'];
        }
        $reglas += ['imagen' => 'required', 'publicar' => 'required'];
        $this->validate($request, $reglas);

        if ($request->publicar == 1) {
            if (!$this->validarCheck($request->tipo, "agregar")) {
                return response(['errors' =>
                ['publicar' => ['No es posible publicar la ' . $request->tipo]]], 422);
            }
        }

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
        if (is_null($request->cuerpo)) {
            $publicidad->link = $request->link;
            $publicidad->cuerpo = null;
        } else {
            $publicidad->link = null;
            $publicidad->cuerpo = $request->cuerpo;
        }
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
                $reglas = ['titulo' => 'required|unique:noticias,titulo,' . $publicidad->id];
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
                $reglas = [
                    'titulo' => 'required|unique:actividads,titulo,' . $publicidad->id,
                    'fecha' => 'required',  'lugar' => 'required'
                ];
                $publicidad->lugar = $request->lugar;
                $publicidad->fecha = $request->fecha;
                $imagenRequest = $request->imagen;
                $imagenesEditor = implode(",", $request->imagenesEditor);
                $imagenesGuardadas = implode(",", $request->imagenesGuardadas);
                break;
            case 'novedad':
                $publicidad =  Novedad::find($id);
                $reglas = ['titulo' => 'required|unique:novedads,titulo,' . $publicidad->id];
                $imagenRequest = $request->imagen;
                $imagenesEditor = implode(",", $request->imagenesEditor);
                $imagenesGuardadas = implode(",", $request->imagenesGuardadas);
                break;
        }
        if (is_null($request->cuerpo)) {
            $reglas += ['link' => 'required'];
        }
        $reglas += ['imagen' => 'required', 'publicar' => 'required'];
        $this->validate($request, $reglas);


        $this->idPublicaion = $publicidad->id;
        if ($request->publicar == 1) {
            if (!$this->validarCheck($request->tipo, "editar")) {
                return response(['errors' =>
                ['publicar' => ['No es posible publicar la ' . $request->tipo]]], 422);
            }
        }

        if ($request->imagen != $publicidad->imagen) {
            Storage::disk('local')->delete($publicidad->imagen);
            $imagen = $this->guardarImagen($request->tipo, $imagenRequest);
            $publicidad->imagen = $imagen['ruta'];
            $publicidad->imagenPublica = $imagen['rutaPublica'];
        }
        $this->eliminarImagenes($imagenesEditor, $imagenesGuardadas);
        $publicidad->titulo = $request->titulo;
        if (is_null($request->cuerpo)) {
            $publicidad->link = $request->link;
            $publicidad->cuerpo = null;
        } else {
            $publicidad->link = null;
            $publicidad->cuerpo = $request->cuerpo;
        }
        $publicidad->publicar = $request->publicar;
        $publicidad->imagenesEditor = $imagenesEditor;
        $publicidad->save();
        $this->ejecutarEvento($request->tipo, $publicidad, 'editar');
        return $publicidad;
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
            Storage::disk('local')->put('/public/difusion/' . $tipo . '/' . $nombre, file_get_contents($imagen));
        } else {
            $imagen_array = explode(",", $imagen);
            $data = base64_decode($imagen_array[1]);
            $nombre = Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '.jpg';
            Storage::disk('local')->put('/public/difusion/' . $tipo . '/' . $nombre, $data);
        }
        $ruta = '/public/difusion/' . $tipo . '/' . $nombre;
        $rutaPublica = '/storage/difusion/' . $tipo . '/' . $nombre;
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
        $this->idPublicaion = $publicidad->id;
        if ($request->publicar == 1) {
            if (!$this->validarCheck($request->tipo, "editar")) {
                return response('No es posible publicar la ' . $request->tipo, 422);
            }
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

    public function ejecutarEvento($tipo, $publicidad, $tipoAccion)
    {
        switch ($tipo) {
            case 'noticia':
                broadcast(new NoticiaEvent($publicidad, $tipoAccion))->toOthers();
                break;
            case 'actividad':
                broadcast(new RefrescarCalendarioEvent())->toOthers();
                broadcast(new ActividadEvent($publicidad, $tipoAccion))->toOthers();
                break;
            case 'novedad':
                broadcast(new NovedadEvent($publicidad, $tipoAccion))->toOthers();
                break;
        }
    }

    public function validarCheck($tipo, $tipoAccion)
    {

        switch ($tipo) {
            case 'noticia':
                $publicaciones = Noticia::where('publicar', 1)->get();
                if ($publicaciones->count() < 5)  return true;
                if ($tipoAccion == 'agregar') return false;
                if ($this->findArray($publicaciones)) return true;
                break;
            case 'actividad':
                $publicaciones = Actividad::where('publicar', 1)->get();
                if ($publicaciones->count() < 7)  return true;
                if ($tipoAccion == 'agregar') return false;
                if ($this->findArray($publicaciones)) return true;
                break;
            case 'novedad':
                $publicaciones = Novedad::where('publicar', 1)->get();
                if ($publicaciones->count() < 7)  return true;
                if ($tipoAccion == 'agregar') return false;
                if ($this->findArray($publicaciones)) return true;
                break;
        }
        return false;
    }

    public function findArray($array)
    {
        foreach ($array as $item) {
            if ($item->id == $this->idPublicaion) {
                return true;
            }
        }
        return false;
    }
}
