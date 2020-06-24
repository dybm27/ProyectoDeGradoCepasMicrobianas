<?php

namespace App\Http\Controllers;

use App\Events\InvestigadorEvent;
use App\Investigador;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class InvestigadoresController extends Controller
{
    public function index()
    {
        return view('sitio-web.investigadores');
    }

    public function store(Request $request)
    {
        $this->validate(
            $request,
            ['email' => 'unique:investigadors,email'],
            ['email.unique' => 'Ya existe un investigador con ese Email']
        );
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
        $investigador1 = Investigador::where('email', $request->email)->first();
        if (is_null($investigador1) || $investigador->id == $investigador1->id) {
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
        } else {
            return response()->json([
                'errors' =>
                ['email' => ['Ya existe un investigador con ese Email']]
            ], 422);
        }
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
        $image_name = Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '.png';
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
