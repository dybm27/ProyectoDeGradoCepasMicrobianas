<?php

namespace App\Http\Controllers;

use App\CaracMicroLevadura;
use App\Levadura;
use App\Seguimiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class CaractMicroLevaduraController extends Controller
{
    public function store(Request $request)
    {
        $this->validarCampos($request);
        $levadura = Levadura::where('cepa_id', $request->cepaId)->first();


        if (!is_null($request->imagen1)) {
            $imagen1 = $this->guardarImagen($request->imagen1, $levadura->id, 1);
            $ruta1 = $imagen1['ruta'];
            $rutaPublica1 = $imagen1['rutaPublica'];
        } else {
            $ruta1 = $request->imagen1;
            $rutaPublica1 = $request->imagen1;
        }
        if (!is_null($request->imagen2)) {
            $imagen2 = $this->guardarImagen($request->imagen2, $levadura->id, 2);
            $ruta2 = $imagen2['ruta'];
            $rutaPublica2 = $imagen2['rutaPublica'];
        } else {
            $ruta2 = $request->imagen2;
            $rutaPublica2 = $request->imagen2;
        }
        if (!is_null($request->imagen3)) {
            $imagen3 = $this->guardarImagen($request->imagen3, $levadura->id, 3);
            $ruta3 = $imagen3['ruta'];
            $rutaPublica3 = $imagen3['rutaPublica'];
        } else {
            $ruta3 = $request->imagen3;
            $rutaPublica3 = $request->imagen3;
        }


        $caractMicroLevadura = new CaracMicroLevadura();
        $caractMicroLevadura->levadura_id = $levadura->id;
        $caractMicroLevadura->hifas = $request->hifas;
        $caractMicroLevadura->capsula = $request->capsula;
        $caractMicroLevadura->pseudohifas = $request->pseudohifas;
        $caractMicroLevadura->balistoconidias = $request->balistoconidias;
        $caractMicroLevadura->produccion_tubo_germinativo = $request->produccion_tubo_germinativo;
        $caractMicroLevadura->blastoconidias = $request->blastoconidias;
        $caractMicroLevadura->produccion_clamidosporas = $request->produccion_clamidosporas;
        $caractMicroLevadura->artroconidias = $request->artroconidias;
        $caractMicroLevadura->induccion_filamentizacion = $request->induccion_filamentizacion;
        $caractMicroLevadura->formacion_asco_y_ascosporas = $request->formacion_asco_y_ascosporas;
        $caractMicroLevadura->otras_caract = $request->otras_caract;
        $caractMicroLevadura->imagen1 = $ruta1;
        $caractMicroLevadura->imagenPublica1 = $rutaPublica1;
        $caractMicroLevadura->imagen2 = $ruta2;
        $caractMicroLevadura->imagenPublica2 = $rutaPublica2;
        $caractMicroLevadura->imagen3 = $ruta3;
        $caractMicroLevadura->imagenPublica3 = $rutaPublica3;
        $caractMicroLevadura->save();

        $this->crearSeguimiento("Agregó la Característica Microscópica a la Cepa: "
            . $levadura->cepa->codigo);

        return $caractMicroLevadura;
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $this->validarCampos($request);
        $caractMicroLevadura = CaracMicroLevadura::find($id);

        $caractMicroLevadura->hifas = $request->hifas;
        $caractMicroLevadura->capsula = $request->capsula;
        $caractMicroLevadura->pseudohifas = $request->pseudohifas;
        $caractMicroLevadura->balistoconidias = $request->balistoconidias;
        $caractMicroLevadura->produccion_tubo_germinativo = $request->produccion_tubo_germinativo;
        $caractMicroLevadura->blastoconidias = $request->blastoconidias;
        $caractMicroLevadura->produccion_clamidosporas = $request->produccion_clamidosporas;
        $caractMicroLevadura->artroconidias = $request->artroconidias;
        $caractMicroLevadura->induccion_filamentizacion = $request->induccion_filamentizacion;
        $caractMicroLevadura->formacion_asco_y_ascosporas = $request->formacion_asco_y_ascosporas;
        $caractMicroLevadura->otras_caract = $request->otras_caract;
        $caractMicroLevadura->save();

        $this->crearSeguimiento("Editó la Característica Microscópica de la Cepa: "
            . $caractMicroLevadura->levadura->cepa->codigo);

        return $caractMicroLevadura;
    }

    public function destroy($id)
    {
        $caractMicroLevadura = CaracMicroLevadura::find($id);
        //eliminar directorio
        Storage::deleteDirectory('/public/levaduras/caract_micro_img/' . $caractMicroLevadura->levadura_id);
        $caractMicroLevadura->delete();

        $this->crearSeguimiento("Eliminó la Característica Microscópica de la Cepa: "
            . $caractMicroLevadura->levadura->cepa->codigo);

        return $caractMicroLevadura;
    }
    public function agregarImagen(Request $request, $id)
    {
        $caractMicroLevadura = CaracMicroLevadura::find($id);

        $imagen = $this->guardarImagen($request->imagen, $caractMicroLevadura->levadura_id, $request->numero);

        switch ($request->numero) {
            case 1:
                $caractMicroLevadura->imagen1 = $imagen['ruta'];
                $caractMicroLevadura->imagenPublica1 = $imagen['rutaPublica'];
                break;
            case 2:
                $caractMicroLevadura->imagen2 = $imagen['ruta'];
                $caractMicroLevadura->imagenPublica2 = $imagen['rutaPublica'];
                break;
            case 3:
                $caractMicroLevadura->imagen3 = $imagen['ruta'];
                $caractMicroLevadura->imagenPublica3 = $imagen['rutaPublica'];
                break;
        }
        $caractMicroLevadura->save();

        $this->crearSeguimiento("Agregó una imagen a la Característica Microscópica de la Cepa: "
            . $caractMicroLevadura->levadura->cepa->codigo);

        return $caractMicroLevadura;
    }
    public function cambiarImagen(Request $request, $id)
    {
        $caractMicroLevadura = CaracMicrolevadura::find($id);

        $imagen = $this->guardarImagen($request->imagen, $caractMicroLevadura->levadura_id, $request->numero);

        switch ($request->numero) {
            case 1:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractMicroLevadura->imagen1);

                $caractMicroLevadura->imagen1 = $imagen['ruta'];
                $caractMicroLevadura->imagenPublica1 = $imagen['rutaPublica'];
                break;
            case 2:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractMicroLevadura->imagen2);

                $caractMicroLevadura->imagen2 = $imagen['ruta'];
                $caractMicroLevadura->imagenPublica2 = $imagen['rutaPublica'];
                break;
            case 3:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractMicroLevadura->imagen3);

                $caractMicroLevadura->imagen3 = $imagen['ruta'];
                $caractMicroLevadura->imagenPublica3 = $imagen['rutaPublica'];
                break;
        }
        $caractMicroLevadura->save();

        $this->crearSeguimiento("Cambió una imagen a la Característica Microscópica de la Cepa: "
            . $caractMicroLevadura->levadura->cepa->codigo);

        return $caractMicroLevadura;
    }

    public function elimarImagen(Request $request, $id)
    {
        $caractMicroLevadura = CaracMicrolevadura::find($id);
        switch ($request->numero) {
            case 1:
                Storage::disk('local')->delete($caractMicroLevadura->imagen1);
                $caractMicroLevadura->imagen1 = null;
                $caractMicroLevadura->imagenPublica1 = null;
                break;
            case 2:
                Storage::disk('local')->delete($caractMicroLevadura->imagen2);
                $caractMicroLevadura->imagen2 = null;
                $caractMicroLevadura->imagenPublica2 = null;
                break;
            case 3:
                Storage::disk('local')->delete($caractMicroLevadura->imagen3);
                $caractMicroLevadura->imagen3 = null;
                $caractMicroLevadura->imagenPublica3 = null;
                break;
        }
        $caractMicroLevadura->save();

        $this->crearSeguimiento("Eliminó una imagen a la Característica Microscópica de la Cepa: "
            . $caractMicroLevadura->levadura->cepa->codigo);

        return $caractMicroLevadura;
    }

    public function guardarImagen($imagen, $id, $num)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name = $num . '-' . Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '.jpg';
        Storage::disk('local')->put('/public/levaduras/caract_micro_img/' . $id . '/' . $image_name, $data);
        $ruta = '/public/levaduras/caract_micro_img/' . $id . '/' . $image_name;
        $rutaPublica = '/storage/levaduras/caract_micro_img/' . $id . '/' . $image_name;
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
            'hifas' => 'required', 'capsula' => 'required',
            'pseudohifas' => 'required', 'balistoconidias' => 'required',
            'produccion_tubo_germinativo' => 'required', 'blastoconidias' => 'required',
            'produccion_clamidosporas' => 'required', 'induccion_filamentizacion' => 'required',
            'artroconidias' => 'required', 'formacion_asco_y_ascosporas' => 'required'
        ];
        $this->validate($request, $rules);
    }
}
