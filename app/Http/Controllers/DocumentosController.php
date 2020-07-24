<?php

namespace App\Http\Controllers;

use App\Documento;
use App\Events\ProyectoEvent;
use App\Events\PublicacionEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class DocumentosController extends Controller
{
    public function index()
    {
        return view('sitio-web.documentos');
    }

    public function store(Request $request)
    {
        $rules = [
            'nombre_documento' => 'required|unique:documentos,nombre_documento',
            'nombre_autor' => 'required', 'descripcion' => 'required',
            'imagen' => 'required', 'archivo' => 'required'
        ];
        $messages = [
            'nombre_documento.unique' => 'Ya se encuentra registrado un documento con ese nombre.'
        ];
        $this->validate($request, $rules, $messages);
        $documento = new Documento();

        switch ($request->tipo) {
            case 'proyecto':
                $documento->tipo_documento_id = 1;
                break;
            case 'publicacion':
                $documento->tipo_documento_id = 2;
                break;
        }

        $imagen = $this->guardarImagen($documento->tipo_documento_id, $request->imagen);
        $archivo = $this->guardarArchivo($documento->tipo_documento_id, $request->file('archivo'), $request->nombre_documento . '.pdf');

        $documento->nombre_documento = $request->nombre_documento;
        $documento->nombre_autor = $request->nombre_autor;
        $documento->descripcion = $request->descripcion;
        $documento->publicar = $request->publicar;
        $documento->ruta = $archivo['ruta'];
        $documento->rutaPublica = $archivo['rutaPublica'];
        $documento->imagen = $imagen['ruta'];
        $documento->imagenPublica = $imagen['rutaPublica'];
        $documento->save();
        switch ($documento->tipo_documento_id) {
            case 1:
                broadcast(new ProyectoEvent($documento, 'agregar'))->toOthers();
                break;
            case 2:
                broadcast(new PublicacionEvent($documento, 'agregar'))->toOthers();
                break;
        }
        return $documento;
    }

    public function update(Request $request, $id)
    {
        $documento = Documento::find($id);
        $rules = [
            'nombre_documento' => 'required|unique:documentos,nombre_documento,' . $documento->id,
            'nombre_autor' => 'required', 'descripcion' => 'required'
        ];
        $messages = [
            'nombre_documento.unique' => 'Ya se encuentra registrado un documento con ese nombre.'
        ];
        $this->validate($request, $rules, $messages);

        if ($documento->nombre_documento != $request->nombre_documento) {
            $archivo = $this->moverArchivo($documento->tipo_documento_id, $documento->nombre_documento, $request->nombre_documento);
            $documento->ruta = $archivo['ruta'];
            $documento->rutaPublica = $archivo['rutaPublica'];
            $documento->nombre_documento = $request->nombre_documento;
        }

        if ($request->imagen != $documento->imagen) {
            Storage::disk('local')->delete($documento->imagen);
            $imagen = $this->guardarImagen($documento->tipo_documento_id, $request->imagen);
            $documento->imagen = $imagen['ruta'];
            $documento->imagenPublica = $imagen['rutaPublica'];
        }
        $documento->nombre_autor = $request->nombre_autor;
        $documento->descripcion = $request->descripcion;
        $documento->publicar = $request->publicar;
        $documento->save();
        switch ($documento->tipo_documento_id) {
            case 1:
                broadcast(new ProyectoEvent($documento, 'editar'))->toOthers();
                break;
            case 2:
                broadcast(new PublicacionEvent($documento, 'editar'))->toOthers();
                break;
        }
        return $documento;
    }

    public function destroy(Request $request, $id)
    {

        $documento = Documento::find($id);
        Storage::disk('local')->delete($documento->ruta);
        Storage::disk('local')->delete($documento->imagen);
        switch ($documento->tipo_documento_id) {
            case 1:
                broadcast(new ProyectoEvent($documento, 'eliminar'))->toOthers();
                break;
            case 2:
                broadcast(new PublicacionEvent($documento, 'eliminar'))->toOthers();
                break;
        }
        $documento->delete();
        return $documento;
    }

    public function guardarImagen($tipo, $imagen)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name =  Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '.png';
        Storage::put('/public/documentos/' . $tipo . '/imagenes/' . $image_name, $data);
        $ruta = '/public/documentos/' . $tipo . '/imagenes/' . $image_name;
        $rutaPublica = '/storage/documentos/' . $tipo . '/imagenes/' . $image_name;
        return ['ruta' => $ruta, 'rutaPublica' => $rutaPublica];
    }

    public function guardarArchivo($tipo, $file, $nombre_documento)
    {
        Storage::disk('public')->put('/documentos/' . $tipo . '/archivos/' . $nombre_documento, file_get_contents($file));
        $ruta = '/public/documentos/' . $tipo . '/archivos/' . $nombre_documento;
        $rutaPublica = '/storage/documentos/' . $tipo . '/archivos/' . $nombre_documento;
        return ['ruta' => $ruta, 'rutaPublica' => $rutaPublica];
    }

    public function moverArchivo($tipo, $nombre_documento, $nombre_documentoNuevo)
    {
        Storage::move('/public/documentos/' . $tipo . '/archivos/' . $nombre_documento . '.pdf', '/public/documentos/' . $tipo . '/archivos/' . $nombre_documentoNuevo . '.pdf');
        $ruta = '/public/documentos/' . $tipo . '/archivos/' . $nombre_documentoNuevo . '.pdf';
        $rutaPublica = '/storage/documentos/' . $tipo . '/archivos/' . $nombre_documentoNuevo . '.pdf';
        return ['ruta' => $ruta, 'rutaPublica' => $rutaPublica];
    }

    public function publicar(Request $request, $id)
    {
        $documento = Documento::find($id);
        $documento->publicar = $request->publicar;
        $documento->save();
        switch ($documento->tipo_documento_id) {
            case 1:
                broadcast(new ProyectoEvent($documento, 'editar'))->toOthers();
                break;
            case 2:
                broadcast(new PublicacionEvent($documento, 'editar'))->toOthers();
                break;
        }
        return $documento;
    }
}
