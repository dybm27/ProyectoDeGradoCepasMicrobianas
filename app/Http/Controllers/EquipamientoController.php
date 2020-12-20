<?php

namespace App\Http\Controllers;

use App\Equipamiento;
use App\Events\EquipamientoEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class EquipamientoController extends Controller
{
    public function store(Request $request)
    {
        $rules = [
            'nombre' => 'required|unique:equipamientos,nombre',
            'caracteristicas' => 'required', 'funcion' => 'required',
            'imagen' => 'required'
        ];
        $messages = [
            'nombre.unique' => 'Ya se encuentra registrado un equipo con ese nombre.'
        ];
        $this->validate($request, $rules, $messages);
        $imagen = $this->agregarImagen($request->imagen);

        $equipo = new Equipamiento();
        $equipo->nombre = $request->nombre;
        $equipo->caracteristicas = $request->caracteristicas;
        $equipo->funcion = $request->funcion;
        $equipo->publicar = $request->publicar;
        $equipo->imagen = $imagen['ruta'];
        $equipo->imagenPublica = $imagen['rutaPublica'];
        $equipo->save();
        broadcast(new EquipamientoEvent($equipo, 'agregar'))->toOthers();
        return $equipo;
    }

    public function update(Request $request, $id)
    {
        $equipo = Equipamiento::find($id);
        $rules = [
            'nombre' => 'required|unique:equipamientos,nombre,' . $equipo->id,
            'caracteristicas' => 'required', 'funcion' => 'required',
        ];
        $messages = [
            'nombre.unique' => 'Ya se encuentra registrado un equipo con ese nombre.'
        ];
        $this->validate($request, $rules, $messages);

        if ($request->imagen != $equipo->imagen) {
            Storage::delete($equipo->imagen);
            $imagen = $this->agregarImagen($request->imagen);
            $equipo->imagen = $imagen['ruta'];
            $equipo->imagenPublica = $imagen['rutaPublica'];
        }

        $equipo->nombre = $request->nombre;
        $equipo->caracteristicas = $request->caracteristicas;
        $equipo->funcion = $request->funcion;
        $equipo->publicar = $request->publicar;
        $equipo->save();
        broadcast(new EquipamientoEvent($equipo, 'editar'))->toOthers();
        return $equipo;
    }

    public function destroy($id)
    {
        $equipo = Equipamiento::find($id);
        Storage::delete($equipo->imagen);
        broadcast(new EquipamientoEvent($equipo, 'eliminar'))->toOthers();
        $equipo->delete();
        return $equipo;
    }

    public function agregarImagen($imagen)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name = Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '.jpg';
        Storage::disk('local')->put('/public/equipos/' . $image_name, $data);
        $ruta = '/public/equipos/' . $image_name;
        $rutaPublica = '/storage/equipos/' . $image_name;
        return ['ruta' => $ruta, 'rutaPublica' => $rutaPublica];
    }


    public function publicar(Request $request, $id)
    {
        $equipo = Equipamiento::find($id);
        $equipo->publicar = $request->publicar;
        $equipo->save();
        broadcast(new EquipamientoEvent($equipo, 'editar'))->toOthers();
        return $equipo;
    }
}
