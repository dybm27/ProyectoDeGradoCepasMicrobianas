<?php

namespace App\Http\Controllers;

use App\Actinomiceto;
use App\CaracMacroActinomiceto;
use App\Seguimiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class CaractMacroActinomicetoController extends Controller
{
    public function store(Request $request)
    {
        $this->validarCampos($request);
        $actinomiceto = Actinomiceto::where('cepa_id', $request->cepaId)->first();

        $imagen = $this->guardarImagen($request->imagen, $actinomiceto->id);

        $caractMacroActinomiceto = new CaracMacroActinomiceto();
        $caractMacroActinomiceto->actinomiceto_id = $actinomiceto->id;
        $caractMacroActinomiceto->medio = ucfirst($request->medio);
        $caractMacroActinomiceto->forma_id = intval($request->forma);
        $caractMacroActinomiceto->textura_id = intval($request->textura);
        $caractMacroActinomiceto->borde_id = intval($request->borde);
        $caractMacroActinomiceto->pigmento_id = intval($request->pigmento);
        $caractMacroActinomiceto->superficie_id = intval($request->superficie);
        $caractMacroActinomiceto->secrecion_geosminas = ucfirst($request->secrecion_geosminas);
        $caractMacroActinomiceto->color_id = intval($request->color);
        $caractMacroActinomiceto->otras_caract = $request->otras_caract;
        $caractMacroActinomiceto->imagen = $imagen['ruta'];
        $caractMacroActinomiceto->imagenPublica = $imagen['rutaPublica'];
        $caractMacroActinomiceto->save();

        $this->crearSeguimiento("Agregó la Característica Macroscópica a la Cepa: "
            . $actinomiceto->cepa->codigo);

        return $caractMacroActinomiceto;
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $this->validarCampos($request);
        $caractMacroActinomiceto = CaracMacroActinomiceto::find($id);

        if ($request->imagen != $caractMacroActinomiceto->imagen) {
            //eliminar imagen vieja
            Storage::disk('local')->delete($caractMacroActinomiceto->imagen);
            //agregar imagen nueva
            $imagen = $this->guardarImagen($request->imagen, $caractMacroActinomiceto->actinomiceto_id);

            $caractMacroActinomiceto->imagen = $imagen['ruta'];
            $caractMacroActinomiceto->imagenPublica = $imagen['rutaPublica'];
        }

        $caractMacroActinomiceto->medio = ucfirst($request->medio);
        $caractMacroActinomiceto->forma_id = intval($request->forma);
        $caractMacroActinomiceto->textura_id = intval($request->textura);
        $caractMacroActinomiceto->borde_id = intval($request->borde);
        $caractMacroActinomiceto->pigmento_id = intval($request->pigmento);
        $caractMacroActinomiceto->superficie_id = intval($request->superficie);
        $caractMacroActinomiceto->secrecion_geosminas = ucfirst($request->secrecion_geosminas);
        $caractMacroActinomiceto->color_id = intval($request->color);
        $caractMacroActinomiceto->otras_caract = $request->otras_caract;

        $caractMacroActinomiceto->save();

        $this->crearSeguimiento("Editó la Característica Macroscópica de la Cepa: "
            . $caractMacroActinomiceto->actinomiceto->cepa->codigo);

        return $caractMacroActinomiceto;
    }

    public function destroy($id)
    {
        $caractMacroActinomiceto = CaracMacroActinomiceto::find($id);
        //eliminar imagen 
        Storage::disk('local')->delete($caractMacroActinomiceto->imagen);
        $caractMacroActinomiceto->delete();

        $this->crearSeguimiento("Eliminó la Característica Macroscópica de la Cepa: "
            . $caractMacroActinomiceto->actinomiceto->cepa->codigo);

        return $caractMacroActinomiceto;
    }

    public function guardarImagen($imagen, $id)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name =  Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '.png';
        Storage::disk('local')->put('/public/actinomicetos/caract_macro_img/' . $id . '/' . $image_name, $data);
        $ruta = '/public/actinomicetos/caract_macro_img/' . $id . '/' . $image_name;
        $rutaPublica = '/storage/actinomicetos/caract_macro_img/' . $id . '/' . $image_name;
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
            'textura' => 'required', 'borde' => 'required',
            'pigmento' => 'required', 'secrecion_geosminas' => 'required',
            'superficie' => 'required', 'color' => 'required', 'imagen' => 'required'
        ];
        $this->validate($request, $rules);
    }
}
