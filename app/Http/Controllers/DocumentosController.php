<?php

namespace App\Http\Controllers;

use App\Proyecto;
use App\Publicacion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DocumentosController extends Controller
{
    public function index()
    {
        return view('sitio-web.documentos');
    }

    public function store(Request $request)
    {
        $imagen = $this->guardarImagen($request->imagen);
        $archivo = $this->guardarArchivo($request->file('archivo'), $request->nombre . '.pdf');

        switch ($request->tipo) {
            case 'proyecto':
                $documento = new Proyecto();
                break;
            case 'publicacion':
                $documento = new Publicacion();
                break;
        }
        $documento->nombre = $request->nombre;
        $documento->descripcion = $request->descripcion;
        $documento->publicar = $request->publicar;
        $documento->ruta = $archivo['ruta'];
        $documento->rutaPublica = $archivo['rutaPublica'];
        $documento->imagen = $imagen['ruta'];
        $documento->imagenPublica = $imagen['rutaPublica'];
        $documento->save();

        return $documento;
    }

    public function update(Request $request, $id)
    {
        switch ($request->tipo) {
            case 'proyecto':
                $documento = Proyecto::find($id);
                $documento2 = Proyecto::where('nombre', $request->nombre)->first();
                break;
            case 'publicacion':
                $documento = Publicacion::find($id);
                $documento2 = Publicacion::where('nombre', $request->nombre)->first();
                break;
        }


        if (is_null($documento2)) {
            $archivo = $this->moverArchivo($documento->nombre, $request->nombre);
            $documento->ruta = $archivo['ruta'];
            $documento->rutaPublica = $archivo['rutaPublica'];
            $documento->nombre = $request->nombre;
        }

        if ($request->imagen != $documento->imagen) {
            Storage::disk('local')->delete($documento->imagen);
            $imagen = $this->guardarImagen($request->imagen);
            $documento->imagen = $imagen['ruta'];
            $documento->imagenPublica = $imagen['rutaPublica'];
        }
        $documento->descripcion = $request->descripcion;
        $documento->publicar = $request->publicar;
        $documento->save();

        return $documento;
    }

    public function destroy(Request $request, $id)
    {
        switch ($request->tipo) {
            case 'proyecto':
                $documento = Proyecto::find($id);
                break;
            case 'publicacion':
                $documento = Publicacion::find($id);
                break;
        }
        Storage::disk('local')->delete($documento->ruta);
        Storage::disk('local')->delete($documento->imagen);
        $documento->delete();
        return $documento;
    }

    public function guardarImagen($imagen)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name = time() . '.png';
        Storage::put('/public/proyectos/imagenes/' . $image_name, $data);
        $ruta = '/public/proyectos/imagenes/' . $image_name;
        $rutaPublica = '/storage/proyectos/imagenes/' . $image_name;
        return ['ruta' => $ruta, 'rutaPublica' => $rutaPublica];
    }

    public function guardarArchivo($file, $nombre)
    {
        Storage::disk('public')->put('/proyectos/archivos/' . $nombre, file_get_contents($file));
        $ruta = '/public/proyectos/archivos/' . $nombre;
        $rutaPublica = '/storage/proyectos/archivos/' . $nombre;
        return ['ruta' => $ruta, 'rutaPublica' => $rutaPublica];
    }

    public function moverArchivo($nombre, $nombreNuevo)
    {
        Storage::move('/public/proyectos/archivos/' . $nombre . '.pdf', '/public/proyectos/archivos/' . $nombreNuevo . '.pdf');
        $ruta = '/public/proyectos/archivos/' . $nombreNuevo . '.pdf';
        $rutaPublica = '/storage/proyectos/archivos/' . $nombreNuevo . '.pdf';
        return ['ruta' => $ruta, 'rutaPublica' => $rutaPublica];
    }
}
