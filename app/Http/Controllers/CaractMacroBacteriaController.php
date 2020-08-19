<?php

namespace App\Http\Controllers;

use App\Bacteria;
use App\CaracMacroBacteria;
use App\Seguimiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class CaractMacroBacteriaController extends Controller
{
    public function store(Request $request)
    {
        $this->validarCampos($request);
        $bacteria = Bacteria::where('cepa_id', $request->cepaId)->first();

        $imagen = $this->guardarImagen($request->imagen, $bacteria->id);

        $caractMacroBacteria = new CaracMacroBacteria();
        $caractMacroBacteria->bacteria_id = $bacteria->id;
        $caractMacroBacteria->medio = ucfirst($request->medio);
        $caractMacroBacteria->forma_id = intval($request->forma);
        $caractMacroBacteria->elevacion_id = intval($request->elevacion);
        $caractMacroBacteria->borde_id = intval($request->borde);
        $caractMacroBacteria->detalleoptico_id = intval($request->detalle_optico);
        $caractMacroBacteria->superficie_id = intval($request->superficie);
        $caractMacroBacteria->tamano = $request->tamaño;
        $caractMacroBacteria->color_id = intval($request->color);
        $caractMacroBacteria->otras_caract = $request->otras_caract;
        $caractMacroBacteria->imagen = $imagen['ruta'];
        $caractMacroBacteria->imagenPublica = $imagen['rutaPublica'];
        $caractMacroBacteria->save();

        $this->crearSeguimiento("Agregó la Característica Macroscópica a la Cepa: "
            . $bacteria->cepa->codigo);

        return $caractMacroBacteria;
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $this->validarCampos($request);
        $caractMacroBacteria = CaracMacroBacteria::find($id);

        if ($request->imagen != $caractMacroBacteria->imagen) {
            //eliminar imagen vieja
            Storage::disk('local')->delete($caractMacroBacteria->imagen);
            //agregar imagen nueva
            $imagen = $this->guardarImagen($request->imagen, $caractMacroBacteria->bacteria_id);

            $caractMacroBacteria->imagen = $imagen['ruta'];
            $caractMacroBacteria->imagenPublica = $imagen['rutaPublica'];
        }

        $caractMacroBacteria->medio = ucfirst($request->medio);
        $caractMacroBacteria->forma_id = intval($request->forma);
        $caractMacroBacteria->elevacion_id = intval($request->elevacion);
        $caractMacroBacteria->borde_id = intval($request->borde);
        $caractMacroBacteria->detalleoptico_id = intval($request->detalle_optico);
        $caractMacroBacteria->superficie_id = intval($request->superficie);
        $caractMacroBacteria->tamano = $request->tamaño;
        $caractMacroBacteria->color_id = intval($request->color);
        $caractMacroBacteria->otras_caract = $request->otras_caract;

        $caractMacroBacteria->save();

        $this->crearSeguimiento("Editó la Característica Macroscópica de la Cepa: "
            . $caractMacroBacteria->bacteria->cepa->codigo);

        return $caractMacroBacteria;
    }

    public function destroy($id)
    {
        $caractMacroBacteria = CaracMacroBacteria::find($id);
        //eliminar imagen 
        Storage::disk('local')->delete($caractMacroBacteria->imagen);
        $caractMacroBacteria->delete();

        $this->crearSeguimiento("Eliminó la Característica Macroscópica de la Cepa: "
            . $caractMacroBacteria->bacteria->cepa->codigo);

        return $caractMacroBacteria;
    }

    public function guardarImagen($imagen, $id)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name =  Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '.png';
        Storage::disk('local')->put('/public/bacterias/caract_macro_img/' . $id . '/' . $image_name, $data);
        $ruta = '/public/bacterias/caract_macro_img/' . $id . '/' . $image_name;
        $rutaPublica = '/storage/bacterias/caract_macro_img/' . $id . '/' . $image_name;
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

    public function validarCampos($request)
    {
        $rules = [
            'medio' => 'required', 'forma' => 'required',
            'elevacion' => 'required', 'borde' => 'required',
            'detalle_optico' => 'required', 'superficie' => 'required',
            'tamaño' => 'required', 'color' => 'required', 'imagen' => 'required'
        ];
        $this->validate($request, $rules);
    }
}
