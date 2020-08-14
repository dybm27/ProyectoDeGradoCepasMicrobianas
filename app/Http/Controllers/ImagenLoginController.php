<?php

namespace App\Http\Controllers;

use App\Events\ImagenesLoginEvent;
use App\ImagenLogin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ImagenLoginController extends Controller
{
    public function update(Request $request, $id)
    {
        $this->validarCampos($request);
        if ($this->verificarMostrar($request->mostrar)) {
            $imagen = ImagenLogin::find($id);
            if ($request->hasFile('imagen')) {
                Storage::disk('local')->delete($imagen->imagen);
                //agregar imagen nueva
                $rutas = $this->guardarImagen($request->file('imagen'));
                $imagen->imagen = $rutas['ruta'];
                $imagen->imagenPublica = $rutas['rutaPublica'];
            }
            $imagen->titulo = $request->titulo;
            $imagen->descripcion = $request->descripcion;
            $imagen->mostrar = $request->mostrar;
            $imagen->save();
            broadcast(new ImagenesLoginEvent($imagen))->toOthers();
            return $imagen;
        } else {
            return response(['errors' => ['mostrar' => 'Debe haber minimo una imagen para mostrar.']], 422);
        }
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

    public function verificarMostrar($mostrar)
    {
        $imagenesMostrar = ImagenLogin::where('mostrar', 1)->count();
        if (!$mostrar && $imagenesMostrar <= 1) {
            return false;
        }
        return true;
    }

    public function validarCampos($request)
    {
        $rules = [
            'titulo' => 'required', 'descripcion' => 'required'
        ];
        $this->validate($request, $rules);
    }
}
