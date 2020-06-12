<?php

namespace App\Http\Controllers;

use App\Investigador;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class InvestigadoresController extends Controller
{
    public function index()
    {
        return view('sitio-web.investigadores');
    }

    public function store(Request $request)
    {
        $reglas = [
            'email' => 'unique:investigadors,email'
        ];
        $mensajes = ['email.unique' => 'Ya existe un investigador con ese email'];
        $this->validate($request, $reglas, $mensajes);

        $imagen = $this->agregarImagen($request->imagen);

        $investigador = new Investigador();
        $investigador->nombres = ucfirst($request->nombres);
        $investigador->apellidos = ucfirst($request->nombres);
        $investigador->publicar = $request->publicar;
        $investigador->email = $request->email;
        $investigador->nivel_estudio = ucfirst($request->nivel_estudio);
        $investigador->cargo = ucfirst($request->cargo);
        $investigador->imagen = $imagen['ruta'];
        $investigador->imagenPublica = $imagen['rutaPublica'];
        $investigador->save();

        return $investigador;
    }

    public function update(Request $request, $id)
    {
        $investigador = Investigador::find($id);
        $investigador1 = Investigador::where('email', $request->email)->first();

        if (!is_null($investigador1)) {
            if ($investigador1->id != $investigador->id) {
                return response('Ya existe un investigador con ese email', 422);
            }
        }

        if ($request->imagen != $investigador->imagen) {
            //eliminar imagen vieja
            Storage::disk('local')->delete($investigador->imagen);
            //agregar imagen nueva
            $imagen = $this->agregarImagen($request->imagen);

            $investigador->imagen = $imagen['ruta'];
            $investigador->imagenPublica = $imagen['rutaPublica'];
        }

        $investigador->nombres = ucfirst($request->nombres);
        $investigador->apellidos = ucfirst($request->nombres);
        $investigador->email = $request->email;
        $investigador->nivel_estudio = ucfirst($request->nivel_estudio);
        $investigador->publicar = $request->publicar;
        $investigador->cargo = ucfirst($request->cargo);
        $investigador->save();

        return $investigador;
    }

    public function destroy($id)
    {
        $investigador = Investigador::find($id);
        Storage::disk('local')->delete($investigador->imagen);
        $investigador->delete();
        return $investigador;
    }

    public function agregarImagen($imagen)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name = time() . '.png';
        Storage::disk('local')->put('/public/investigadores/' . $image_name, $data);
        $ruta = '/public/investigadores/' . $image_name;
        $rutaPublica = '/storage/investigadores/' . $image_name;
        return ['ruta' => $ruta, 'rutaPublica' => $rutaPublica];
    }
}
