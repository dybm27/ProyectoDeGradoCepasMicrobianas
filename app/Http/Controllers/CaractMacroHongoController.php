<?php

namespace App\Http\Controllers;

use App\CaracMacroHongo;
use App\HongoFilamentoso;
use App\Seguimiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class CaractMacroHongoController extends Controller
{
    public function store(Request $request)
    {
        $this->validarCampos($request);
        $hongo = HongoFilamentoso::where('cepa_id', $request->cepaId)->first();

        $imagen = $this->guardarImagen($request->imagen, $hongo->id);

        $caractMacroHongo = new CaracMacroHongo();
        $caractMacroHongo->hongo_filamentoso_id = $hongo->id;
        $caractMacroHongo->medio = ucfirst($request->medio);
        $caractMacroHongo->color_id = intval($request->color);
        $caractMacroHongo->textura_id = intval($request->textura);
        $caractMacroHongo->caracteristicas_reverso = $request->caracteristicas_reverso;
        $caractMacroHongo->imagen = $imagen['ruta'];
        $caractMacroHongo->imagenPublica = $imagen['rutaPublica'];
        $caractMacroHongo->save();

        $this->crearSeguimiento("Agregó la Característica Macroscópica a la Cepa: "
            . $hongo->cepa->codigo);

        return $caractMacroHongo;
    }
    public function show($id)
    {
        //
    }
    public function update(Request $request, $id)
    {
        $this->validarCampos($request);
        $caractMacroHongo = CaracMacroHongo::find($id);
        if ($request->imagen != $caractMacroHongo->imagen) {
            //eliminar imagen vieja
            Storage::disk('local')->delete($caractMacroHongo->imagen);
            //agregar imagen nueva
            $imagen = $this->guardarImagen($request->imagen, $caractMacroHongo->hongo_filamentoso_id);

            $caractMacroHongo->imagen = $imagen['ruta'];
            $caractMacroHongo->imagenPublica = $imagen['rutaPublica'];
        }
        $caractMacroHongo->medio =  ucfirst($request->medio);
        $caractMacroHongo->color_id = intval($request->color);
        $caractMacroHongo->textura_id = intval($request->textura);
        $caractMacroHongo->caracteristicas_reverso = $request->caracteristicas_reverso;
        $caractMacroHongo->save();

        $this->crearSeguimiento("Editó la Característica Macroscópica de la Cepa: "
            . $caractMacroHongo->hongoFilamentoso->cepa->codigo);

        return $caractMacroHongo;
    }
    public function destroy($id)
    {
        $caractMacroHongo = CaracMacroHongo::find($id);
        //eliminar imagen 
        Storage::disk('local')->delete($caractMacroHongo->imagen);
        $caractMacroHongo->delete();

        $this->crearSeguimiento("Eliminó la Característica Macroscópica de la Cepa: "
            . $caractMacroHongo->hongoFilamentoso->cepa->codigo);

        return $caractMacroHongo;
    }

    public function guardarImagen($imagen, $id)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name = Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '.png';
        Storage::disk('local')->put('/public/hongos/caract_macro_img/' . $id . '/' . $image_name, $data);
        $ruta = '/public/hongos/caract_macro_img/' . $id . '/' . $image_name;
        $rutaPublica = '/storage/hongos/caract_macro_img/' . $id . '/' . $image_name;
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
            'caracteristicas_reverso' => 'required', 'color' => 'required'
        ];
        $this->validate($request, $rules);
    }
}
