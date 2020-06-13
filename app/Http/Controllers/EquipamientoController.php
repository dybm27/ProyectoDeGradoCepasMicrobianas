<?php

namespace App\Http\Controllers;

use App\Equipamiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class EquipamientoController extends Controller
{
    public function index()
    {
        return view('sitio-web.equipamientos');
    }

    public function store(Request $request)
    {
        $imagen = $this->agregarImagen($request->imagen);

        $equipo = new Equipamiento();
        $equipo->nombre = $request->nombre;
        $equipo->caracteristicas = $request->caracteristicas;
        $equipo->funcion = $request->funcion;
        $equipo->publicar = $request->publicar;
        $equipo->imagen = $imagen['ruta'];
        $equipo->imagenPublica = $imagen['rutaPublica'];
        $equipo->save();

        return $equipo;
    }

    public function update(Request $request, $id)
    {
        $equipo = Equipamiento::find($id);

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

        return $equipo;
    }

    public function destroy($id)
    {
        $equipo = Equipamiento::find($id);
        Storage::delete($equipo->imagen);
        $equipo->delete();
        return $equipo;
    }

    public function agregarImagen($imagen)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name = time() . '.png';
        Storage::disk('local')->put('/public/equipos/' . $image_name, $data);
        $ruta = '/public/equipos/' . $image_name;
        $rutaPublica = '/storage/equipos/' . $image_name;
        return ['ruta' => $ruta, 'rutaPublica' => $rutaPublica];
    }
}
