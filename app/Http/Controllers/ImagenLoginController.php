<?php

namespace App\Http\Controllers;

use App\Events\ImagenLoginEvent;
use App\ImagenLogin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ImagenLoginController extends Controller
{
    public function index()
    {
        return view('imagenesLogin');
    }

    public function update(Request $request, $id)
    {
        $imagen = ImagenLogin::find($id);
        $datos = [];
        if (!empty($request->file('imagen'))) {
            Storage::disk('local')->delete($imagen->imagen);
            //agregar imagen nueva
            $rutas = $this->guardarImagen($request->file('imagen'));
            $datos += ['imagen' => $rutas['ruta'], 'imagenPublica' => $rutas['rutaPublica']];
        }
        $datos += [
            'titulo' => $request->titulo, 'descripcion' => $request->descripcion,
            'mostrar' =>  $request->mostrar
        ];
        $imagen->update($datos);
        broadcast(new ImagenesLoginEvent($imagen))->toOthers();
        return $imagen;
    }

    public function guardarImagen($file)
    {
        $time = time();
        $fileName =  Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . $file->getClientOriginalName();
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
