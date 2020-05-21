<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class PerfilController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }


    public function index()
    {
        return view('perfil');
    }

    public function cambiarNombre(Request $request)
    {
        $usuario = $request->user();
        $usuario->name = ucfirst($request->nombre);
        $usuario->save();
        return $usuario;
    }

    public function cambiarImagen(Request $request)
    {
        $usuario = $request->user();
        Storage::disk('local')->delete($usuario->avatar);
        $imagen = $this->guardarImagen($request->file('imagen'));
        $usuario->avatar = $imagen['ruta'];
        $usuario->avatarPublico = $imagen['rutaPublica'];
        $usuario->save();
        return $usuario;
    }

    public function cambiarContraseña(Request $request)
    {
        $usuario = $request->user();
        $usuario->password = Hash::make($request->pass);
        $usuario->save();
        return $usuario;
    }

    
    public function guardarImagen($file)
    {
        $time = time();
        $fileName = $file->getClientOriginalName();
        Storage::disk('local')->put('/public/usuarios/avatar_img/' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/usuarios/avatar_img/' . $time . '-' . $fileName;
        $rutaPublica = '/storage/usuarios/avatar_img/' . $time . '-' . $fileName;
        return ['ruta' => $ruta, 'rutaPublica' => $rutaPublica];
    }

}
