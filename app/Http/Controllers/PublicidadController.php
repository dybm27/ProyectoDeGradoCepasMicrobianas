<?php

namespace App\Http\Controllers;

use App\Actividad;
use App\Noticia;
use App\Novedad;
use Illuminate\Http\Request;
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
                $reglas = ['titulo' => 'unique:actividads,titulo'];
                $mensajes = ['titulo.unique' => 'Ya existe una actividad con ese titulo'];
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
                break;
            case 'actividad':
                $imagen = $this->guardarImagen($request->tipo, $request->imagen);
                $publicidad = new Actividad();
                $publicidad->lugar = $request->lugar;
                $publicidad->fecha = $request->fecha;
                break;
            case 'novedad':
                $imagen = $this->guardarImagen($request->tipo, $request->imagen);
                $publicidad = new Novedad();
                break;
        }
        $publicidad->titulo = $request->titulo;
        $publicidad->link = $request->link;
        $publicidad->cuerpo = $request->cuerpo;
        $publicidad->publicar = $request->publicar;
        $publicidad->imagen = $imagen['ruta'];
        $publicidad->imagenPublica = $imagen['rutaPublica'];
        $publicidad->save();

        return $publicidad;
    }

    public function update(Request $request, $id)
    { }

    public function destroy(Request $request, $id)
    { }

    public function guardarImagen($tipo, $imagen)
    {
        if ($tipo == 'noticia') {
            $nombre = time() . '-' . $imagen->getClientOriginalName();
            Storage::put('/public/publicidad/' . $tipo . '/' . $nombre, file_get_contents($imagen));
        } else {
            $imagen_array = explode(",", $imagen);
            $data = base64_decode($imagen_array[1]);
            $nombre = time() . '.png';
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
        return $publicidad;
    }

    public function uploadImagen(Request $request)
    {
        if ($request->hasFile('upload')) {
            $file = $request->file('upload');
            $fileName =  time() . '-' . $file->getClientOriginalName();

            Storage::put('/public/publicidad/imagenes/' . $fileName, file_get_contents($file));

            $url = asset('/storage/publicidad/imagenes/' . $fileName);
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
}
