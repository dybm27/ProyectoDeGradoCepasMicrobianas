<?php

namespace App\Http\Controllers;

use App\Events\UsuarioEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;

class PerfilController extends Controller
{
    /**public function __construct()
    {
        $this->middleware('auth');
    }
     */
    public function cambiarNombre(Request $request)
    {
        $usuario = $request->user();
        $usuario->name = ucfirst($request->nombre);
        $usuario->save();
        broadcast(new UsuarioEvent($usuario, 'editar'))->toOthers();
        return $usuario;
    }

    public function cambiarImagen(Request $request)
    {
        $usuario = $request->user();
        Storage::disk('local')->delete($usuario->avatar);
        $imagen = $this->guardarImagen($request->imagen);
        $usuario->avatar = $imagen['ruta'];
        $usuario->avatarPublico = $imagen['rutaPublica'];
        $usuario->save();
        broadcast(new UsuarioEvent($usuario, 'editar'))->toOthers();
        return $usuario;
    }

    public function cambiarContraseña(Request $request)
    {
        $usuario = $request->user();
        $usuario->password = Hash::make($request->pass);
        $usuario->save();
        return $usuario;
    }

    public function guardarImagen($imagen)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name = Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '.png';
        Storage::disk('local')->put('/public/usuarios/avatar_img/' . $image_name, $data);
        $ruta = '/public/usuarios/avatar_img/' . $image_name;
        $rutaPublica = '/storage/usuarios/avatar_img/' . $image_name;
        return ['ruta' => $ruta, 'rutaPublica' => $rutaPublica];
    }
}
