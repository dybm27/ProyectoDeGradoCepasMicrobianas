<?php

namespace App\Http\Controllers;

use App\Events\InvestigadorEvent;
use App\Investigador;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class InvestigadoresController extends Controller
{
    public function store(Request $request)
    {
        $rules = [
            'email' => 'required|unique:investigadors,email', 'nombres' => 'required',
            'apellidos' => 'required', 'nivel_estudio' => 'required', 'cargo' => 'required',
            'imagen' => 'required', 'publicar' => 'required'
        ];
        $this->validate($request, $rules);

        $imagen = $this->agregarImagen($request->imagen);
        $datos = [
            'nombres' => ucfirst($request->nombres), 'apellidos' => ucfirst($request->apellidos),
            'publicar' => $request->publicar, 'email' => $request->email,
            'nivel_estudio' => ucfirst($request->nivel_estudio), 'cargo' => ucfirst($request->cargo),
            'imagen' => $imagen['ruta'], 'imagenPublica' => $imagen['rutaPublica']
        ];
        $investigador =  Investigador::create($datos);
        broadcast(new InvestigadorEvent($investigador, 'agregar'))->toOthers();
        return $investigador;
    }

    public function update(Request $request, $id)
    {
        $investigador = Investigador::find($id);
        $rules = [
            'email' => 'required|unique:investigadors,email,' . $investigador->id,
            'nombres' => 'required', 'apellidos' => 'required',
            'nivel_estudio' => 'required', 'cargo' => 'required',
            'imagen' => 'required', 'publicar' => 'required'
        ];
        $this->validate($request, $rules);
        $datos = [];
        if ($request->imagen != $investigador->imagen) {
            //eliminar imagen vieja
            Storage::disk('local')->delete($investigador->imagen);
            //agregar imagen nueva
            $imagen = $this->agregarImagen($request->imagen);
            $datos += ['imagen' => $imagen['ruta'], 'imagenPublica' => $imagen['rutaPublica']];
        }
        $datos += [
            'nombres' => ucfirst($request->nombres), 'apellidos' => ucfirst($request->apellidos),
            'publicar' => $request->publicar, 'email' => $request->email,
            'nivel_estudio' => ucfirst($request->nivel_estudio), 'cargo' => ucfirst($request->cargo)
        ];
        $investigador->update($datos);
        broadcast(new InvestigadorEvent($investigador, 'editar'))->toOthers();
        return $investigador;
    }

    public function destroy($id)
    {
        $investigador = Investigador::find($id);
        Storage::disk('local')->delete($investigador->imagen);
        broadcast(new InvestigadorEvent($investigador, 'eliminar'))->toOthers();
        $investigador->delete();
        return $investigador;
    }

    public function agregarImagen($imagen)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name = Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '.jpg';
        Storage::disk('local')->put('/public/investigadores/' . $image_name, $data);
        $ruta = '/public/investigadores/' . $image_name;
        $rutaPublica = '/storage/investigadores/' . $image_name;
        return ['ruta' => $ruta, 'rutaPublica' => $rutaPublica];
    }

    public function publicar(Request $request, $id)
    {
        $investigador = Investigador::find($id);
        $investigador->update(['publicar' => $request->publicar]);
        broadcast(new InvestigadorEvent($investigador, 'editar'))->toOthers();
        return $investigador;
    }
}
