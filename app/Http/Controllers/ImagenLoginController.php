<?php

namespace App\Http\Controllers;

use App\ImagenLogin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImagenLoginController extends Controller
{
    public function index()
    {
        return view('imagenesLogin');
    }

    public function store(Request $request)
    {
        $rutas = $this->guardarImagen($request->file('imagen'));
        $imagen = new ImagenLogin();
        $imagen->titulo = $request->titulo;
        $imagen->descripcion = $request->descripcion;
        $imagen->imagen = $rutas['ruta'];
        $imagen->imagenPublica = $rutas['rutaPublica'];
        $imagen->save();

        return $imagen;
    }

    public function update(Request $request, $id)
    {
        $imagen = ImagenLogin::find($id);
        if (!empty($request->file('imagen'))) {
            Storage::disk('local')->delete($imagen->imagen);
            //agregar imagen nueva
            $rutas = $this->guardarImagen($request->file('imagen'));
            $imagen->imagen = $rutas['ruta'];
            $imagen->imagenPublica = $rutas['rutaPublica'];
        }
        $imagen->titulo = $request->titulo;
        $imagen->descripcion = $request->descripcion;
        $imagen->save();

        return $imagen;
    }

    public function destroy($id)
    {
        $imagen = ImagenLogin::find($id);
        Storage::disk('local')->delete($imagen->imagen);
        $imagen->delete();
        return $imagen;
    }

    public function guardarImagen($file)
    {
        $time = time();
        $fileName = $file->getClientOriginalName();
        Storage::disk('local')->put('/public/login_img/' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/login_img/' . $time . '-' . $fileName;
        $rutaPublica = '/storage/login_img/' . $time . '-' . $fileName;
        return ['ruta' => $ruta, 'rutaPublica' => $rutaPublica];
    }

    public function imagenes()
    {
        return ImagenLogin::all();
    }
}
