<?php

namespace App\Http\Controllers;

use App\Seguimiento;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class UsuarioController extends Controller
{
    public function index()
    {
        return view('usuarios');
    }

    public function store(Request $request)
    {
        $rules = [
            'email' => 'required|unique:users,email'
        ];
        $this->validate($request, $rules);

        $imagen = $this->guardarImagen($request->imagen);

        $usuario = new User();
        $usuario->name = ucfirst($request->nombre);
        $usuario->email = $request->email;
        $usuario->tipouser_id = intval($request->tipo_user);
        $usuario->password = Hash::make($request->pass);
        $usuario->avatar = $imagen['ruta'];
        $usuario->avatarPublico = $imagen['rutaPublica'];
        $usuario->save();

        $this->crearSeguimiento("Creó un usuario: " . $usuario->email);

        return $usuario;
    }
    public function show(Request $request)
    { }

    public function update(Request $request, $id)
    {
        $usuario = User::find($id);
        if ($request->imagen != $usuario->avatar) {
            Storage::disk('local')->delete($usuario->avatar);
            $imagen = $this->guardarImagen($request->imagen);
            $usuario->avatar = $imagen['ruta'];
            $usuario->avatarPublico = $imagen['rutaPublica'];
        }
        $usuario->name = ucfirst($request->nombre);
        $usuario->email = $request->email;
        $usuario->tipouser_id = intval($request->tipo_user);
        if (!is_null($request->pass)) {
            $usuario->password = Hash::make($request->pass);
        }
        $usuario->save();

        $this->crearSeguimiento("Editó un usuario: " . $usuario->email);

        return $usuario;
    }

    public function destroy($id)
    {
        $usuario = User::find($id);
        Storage::disk('local')->delete($usuario->avatar);
        $usuario->delete();

        $this->crearSeguimiento("Eliminó un usuario: " . $usuario->email);

        return $usuario;
    }

    public function guardarImagen($imagen)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name =  Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '.png';
        Storage::disk('local')->put('/public/usuarios/avatar_img/' . $image_name, $data);
        $ruta = '/public/usuarios/avatar_img/' . $image_name;
        $rutaPublica = '/storage/usuarios/avatar_img/' . $image_name;
        return ['ruta' => $ruta, 'rutaPublica' => $rutaPublica];
    }

    public function crearSeguimiento($accion)
    {
        $seguimiento = new Seguimiento();
        $seguimiento->nombre_responsable = Auth::user()->name;
        $seguimiento->email_responsable = Auth::user()->email;
        $seguimiento->tipo_user = Auth::user()->tipouser->nombre;
        $seguimiento->accion = $accion;
        $seguimiento->save();
    }

    public function borrarSessionId()
    {
        Auth::user()->session_id = null;
        Auth::user()->save();
    }
}
