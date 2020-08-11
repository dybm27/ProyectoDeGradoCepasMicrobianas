<?php

namespace App\Http\Controllers;

use App\Events\UsuarioEvent;
use App\Seguimiento;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class UsuarioController extends Controller
{
    public function store(Request $request)
    {
        $rules = [
            'email' => 'required|unique:users,email', 'nombre' => 'required',
            'pass' => 'required', 'rol' => 'required'
        ];
        $this->validate($request, $rules);

        $imagen = $this->guardarImagen($request->imagen);

        $usuario = new User();
        $usuario->name = ucfirst($request->nombre);
        $usuario->email = $request->email;
        $usuario->rol_id = intval($request->rol);
        $usuario->password = Hash::make($request->pass);
        $usuario->avatar = $imagen['ruta'];
        $usuario->avatarPublico = $imagen['rutaPublica'];
        $usuario->save();
        broadcast(new UsuarioEvent($usuario, 'agregar'))->toOthers();
        $this->crearSeguimiento("Creó un usuario: " . $usuario->email);

        return $usuario;
    }
    public function show(Request $request)
    { }

    public function update(Request $request, $id)
    {
        $usuario = User::find($id);
        $rules = [
            'email' => 'required|unique:users,email,' . $usuario->id,
            'nombre' => 'required', 'rol' => 'required'
        ];
        $this->validate($request, $rules);

        if (!is_null($request->imagen)) {
            Storage::disk('local')->delete($usuario->avatar);
            $imagen = $this->guardarImagen($request->imagen);
            $usuario->avatar = $imagen['ruta'];
            $usuario->avatarPublico = $imagen['rutaPublica'];
        }
        $usuario->name = ucfirst($request->nombre);
        $usuario->email = $request->email;
        $usuario->rol_id = intval($request->rol);
        if (!is_null($request->pass)) {
            $usuario->password = Hash::make($request->pass);
        }
        $usuario->save();
        broadcast(new UsuarioEvent($usuario, 'editar'))->toOthers();
        $this->crearSeguimiento("Editó un usuario: " . $usuario->email);

        return $usuario;
    }

    public function destroy($id)
    {
        $usuario = User::find($id);
        if ($this->verificarEliminar($usuario)) {
            Storage::disk('local')->delete($usuario->avatar);
            broadcast(new UsuarioEvent($usuario, 'eliminar'))->toOthers();
            $usuario->delete();
            $this->crearSeguimiento("Eliminó un usuario: " . $usuario->email);
            return $usuario;
        } else {
            return 'negativo';
        }
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
        $seguimiento->rol = Auth::user()->rol->nombre;
        $seguimiento->accion = $accion;
        $seguimiento->save();
    }

    public function verificarEliminar($usuario)
    {
        if (is_null($usuario->session_id)) {
            return true;
        }
        return false;
    }

    /* public function eliminarDatosTablaSeguimineto()
    {
        $fechaActual = date('Y-m-d H:m:s');
        $fechaBorrado = date("Y-m-d H:m:s", strtotime($fechaActual . "- 30 days"));
        $datos = Seguimiento::where('created_at', '<=', $fechaBorrado)->delete();
        return $datos;
    } */
}
