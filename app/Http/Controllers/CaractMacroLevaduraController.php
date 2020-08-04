<?php

namespace App\Http\Controllers;

use App\CaracMacroLevadura;
use App\Levadura;
use App\Seguimiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class CaractMacroLevaduraController extends Controller
{
    public function store(Request $request)
    {
        $this->validarCampos($request);
        $levadura = Levadura::where('cepa_id', $request->cepaId)->first();
        //obtenemos el nombre de la imagen
        $imagen = $this->guardarImagen($request->imagen, $levadura->id);

        $caractMacroLevadura = new CaracMacroLevadura();
        $caractMacroLevadura->levadura_id = $levadura->id;
        $caractMacroLevadura->medio = $request->medio;
        $caractMacroLevadura->textura_id = intval($request->textura);
        $caractMacroLevadura->topografia_superficie = $request->topografia_superficie;
        $caractMacroLevadura->borde_colonia = $request->borde_colonia;
        $caractMacroLevadura->color_id = intval($request->color);
        $caractMacroLevadura->imagen = $imagen['ruta'];
        $caractMacroLevadura->imagenPublica = $imagen['rutaPublica'];
        $caractMacroLevadura->save();

        $this->crearSeguimiento("Agregó la Característica Macroscópica a la Cepa: "
            . $levadura->cepa->codigo);

        return $caractMacroLevadura;
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $this->validarCampos($request);
        $caractMacroLevadura = CaracMacroLevadura::find($id);

        if ($request->imagen != $caractMacroLevadura->imagen) {
            //eliminar imagen vieja
            Storage::disk('local')->delete($caractMacroLevadura->imagen);
            //agregar imagen nueva
            $imagen = $this->guardarImagen($request->imagen, $caractMacroLevadura->levadura_id);

            $caractMacroLevadura->imagen = $imagen['ruta'];
            $caractMacroLevadura->imagenPublica = $imagen['rutaPublica'];
        }

        $caractMacroLevadura->medio = $request->medio;
        $caractMacroLevadura->textura_id = intval($request->textura);
        $caractMacroLevadura->topografia_superficie = $request->topografia_superficie;
        $caractMacroLevadura->borde_colonia = $request->borde_colonia;
        $caractMacroLevadura->color_id = intval($request->color);

        $this->crearSeguimiento("Editó la Característica Macroscópica de la Cepa: "
            . $caractMacroLevadura->levadura->cepa->codigo);

        $caractMacroLevadura->save();

        return $caractMacroLevadura;
    }

    public function destroy($id)
    {
        $caractMacroLevadura = CaracMacroLevadura::find($id);
        //eliminar imagen 
        Storage::disk('local')->delete($caractMacroLevadura->imagen);
        $caractMacroLevadura->delete();

        $this->crearSeguimiento("Eliminó la Característica Macroscópica de la Cepa: "
            . $caractMacroLevadura->levadura->cepa->codigo);

        return $caractMacroLevadura;
    }

    public function guardarImagen($imagen, $id)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name = Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '.png';
        Storage::disk('local')->put('/public/levaduras/caract_macro_img/' . $id . '/' . $image_name, $data);
        $ruta = '/public/levaduras/caract_macro_img/' . $id . '/' . $image_name;
        $rutaPublica = '/storage/levaduras/caract_macro_img/' . $id . '/' . $image_name;
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
            'medio' => 'required', 'textura' => 'required',
            'borde_colonia' => 'required', 'color' => 'required',
            'topografia_superficie' => 'required'
        ];
        $this->validate($request, $rules);
    }
}
