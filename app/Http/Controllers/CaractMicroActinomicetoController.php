<?php

namespace App\Http\Controllers;

use App\Actinomiceto;
use App\CaracMicroActinomiceto;
use App\Seguimiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class CaractMicroActinomicetoController extends Controller
{
    public function store(Request $request)
    {
        $actinomiceto = Actinomiceto::where('cepa_id', $request->cepaId)->first();


        if (!is_null($request->imagen1)) {
            $imagen1 = $this->guardarImagen($request->imagen1, $actinomiceto->id, 1);
            $ruta1 =  $imagen1['ruta'];
            $rutaPublica1 =  $imagen1['rutaPublica'];
        } else {
            $ruta1 = $request->imagen1;
            $rutaPublica1 = $request->imagen1;
        }
        if (!is_null($request->imagen2)) {
            $imagen2 = $this->guardarImagen($request->imagen2, $actinomiceto->id, 2);
            $ruta2 =  $imagen2['ruta'];
            $rutaPublica2 =  $imagen2['rutaPublica'];
        } else {
            $ruta2 = $request->imagen2;
            $rutaPublica2 = $request->imagen2;
        }
        if (!is_null($request->imagen3)) {
            $imagen3 = $this->guardarImagen($request->imagen3, $actinomiceto->id, 3);
            $ruta3 =  $imagen3['ruta'];
            $rutaPublica3 =  $imagen3['rutaPublica'];
        } else {
            $ruta3 = $request->imagen3;
            $rutaPublica3 = $request->imagen3;
        }

        $caractMicroActinomiceto = new CaracMicroActinomiceto();
        $caractMicroActinomiceto->actinomiceto_id = $actinomiceto->id;
        $caractMicroActinomiceto->tinciongram_id = intval($request->tincion);
        $caractMicroActinomiceto->forma_id = intval($request->forma);
        $caractMicroActinomiceto->micelio_id = intval($request->micelio);
        $caractMicroActinomiceto->conidioforo_id = intval($request->conidioforo);
        $caractMicroActinomiceto->forma_estructura_reproduccion = $request->forma_estructura_reproduccion;
        $caractMicroActinomiceto->otras_caract = $request->otras_caract;
        $caractMicroActinomiceto->imagen1 = $ruta1;
        $caractMicroActinomiceto->imagenPublica1 = $rutaPublica1;
        $caractMicroActinomiceto->imagen2 = $ruta2;
        $caractMicroActinomiceto->imagenPublica2 = $rutaPublica2;
        $caractMicroActinomiceto->imagen3 = $ruta3;
        $caractMicroActinomiceto->imagenPublica3 = $rutaPublica3;
        $caractMicroActinomiceto->save();

        $this->crearSeguimiento("Agregó la Característica Microscópica a la Cepa: "
            . $actinomiceto->cepa->codigo);

        return $caractMicroActinomiceto;
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $caractMicroActinomiceto = CaracMicroActinomiceto::find($id);
        $caractMicroActinomiceto->tinciongram_id = intval($request->tincion);
        $caractMicroActinomiceto->forma_id = intval($request->forma);
        $caractMicroActinomiceto->micelio_id = intval($request->micelio);
        $caractMicroActinomiceto->conidioforo_id = intval($request->conidioforo);
        $caractMicroActinomiceto->forma_estructura_reproduccion = $request->forma_estructura_reproduccion;
        $caractMicroActinomiceto->otras_caract = $request->otras_caract;
        $caractMicroActinomiceto->save();

        $this->crearSeguimiento("Editó la Característica Microscópica de la Cepa: "
            . $caractMicroActinomiceto->actinomiceto->cepa->codigo);

        return $caractMicroActinomiceto;
    }

    public function destroy($id)
    {
        $caractMicroActinomiceto = CaracMicroActinomiceto::find($id);
        //eliminar directorio
        Storage::deleteDirectory('/public/actinomicetos/caract_micro_img/' . $caractMicroActinomiceto->actinomiceto_id);
        $caractMicroActinomiceto->delete();

        $this->crearSeguimiento("Eliminó la Característica Microscópica de la Cepa: "
            . $caractMicroActinomiceto->actinomiceto->cepa->codigo);

        return $caractMicroActinomiceto;
    }

    public function agregarImagen(Request $request, $id)
    {
        $caractMicroActinomiceto = CaracMicroActinomiceto::find($id);

        $imagen = $this->guardarImagen($request->imagen, $caractMicroActinomiceto->actinomiceto_id, $request->numero);

        switch ($request->numero) {
            case 1:
                $caractMicroActinomiceto->imagen1 = $imagen['ruta'];
                $caractMicroActinomiceto->imagenPublica1 = $imagen['rutaPublica'];
                break;
            case 2:
                $caractMicroActinomiceto->imagen2 = $imagen['ruta'];
                $caractMicroActinomiceto->imagenPublica2 = $imagen['rutaPublica'];
                break;
            case 3:
                $caractMicroActinomiceto->imagen3 = $imagen['ruta'];
                $caractMicroActinomiceto->imagenPublica3 = $imagen['rutaPublica'];
                break;
        }
        $caractMicroActinomiceto->save();

        $this->crearSeguimiento("Agregó una imagen a la Característica Microscópica de la Cepa: "
            . $caractMicroActinomiceto->actinomiceto->cepa->codigo);

        return $caractMicroActinomiceto;
    }
    public function cambiarImagen(Request $request, $id)
    {
        $caractMicroActinomiceto = CaracMicroActinomiceto::find($id);

        $imagen = $this->guardarImagen($request->imagen, $caractMicroActinomiceto->actinomiceto_id, $request->numero);

        switch ($request->numero) {
            case 1:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractMicroActinomiceto->imagen1);

                $caractMicroActinomiceto->imagen1 =  $imagen['ruta'];
                $caractMicroActinomiceto->imagenPublica1 = $imagen['rutaPublica'];
                break;
            case 2:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractMicroActinomiceto->imagen2);

                $caractMicroActinomiceto->imagen2 =  $imagen['ruta'];
                $caractMicroActinomiceto->imagenPublica2 = $imagen['rutaPublica'];
                break;
            case 3:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractMicroActinomiceto->imagen3);

                $caractMicroActinomiceto->imagen3 =  $imagen['ruta'];
                $caractMicroActinomiceto->imagenPublica3 = $imagen['rutaPublica'];
                break;
        }
        $caractMicroActinomiceto->save();

        $this->crearSeguimiento("Cambió una imagen a la Característica Microscópica de la Cepa: "
            . $caractMicroActinomiceto->actinomiceto->cepa->codigo);

        return $caractMicroActinomiceto;
    }

    public function elimarImagen(Request $request, $id)
    {
        $caractMicroActinomiceto = CaracMicroActinomiceto::find($id);
        switch ($request->numero) {
            case 1:
                Storage::disk('local')->delete($caractMicroActinomiceto->imagen1);
                $caractMicroActinomiceto->imagen1 = null;
                $caractMicroActinomiceto->imagenPublica1 = null;
                break;
            case 2:
                Storage::disk('local')->delete($caractMicroActinomiceto->imagen2);
                $caractMicroActinomiceto->imagen2 = null;
                $caractMicroActinomiceto->imagenPublica2 = null;
                break;
            case 3:
                Storage::disk('local')->delete($caractMicroActinomiceto->imagen3);
                $caractMicroActinomiceto->imagen3 = null;
                $caractMicroActinomiceto->imagenPublica3 = null;
                break;
        }
        $caractMicroActinomiceto->save();

        $this->crearSeguimiento("Eliminó una imagen a la Característica Microscópica de la Cepa: "
            . $caractMicroActinomiceto->actinomiceto->cepa->codigo);

        return $caractMicroActinomiceto;
    }

    public function guardarImagen($imagen, $id, $num)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name = $num . '-' . Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '.png';
        Storage::disk('local')->put('/public/actinomicetos/caract_micro_img/' . $id . '/' . $image_name, $data);
        $ruta = '/public/actinomicetos/caract_micro_img/' . $id . '/' . $image_name;
        $rutaPublica = '/storage/actinomicetos/caract_micro_img/' . $id . '/' . $image_name;
        return ['ruta' => $ruta, 'rutaPublica' => $rutaPublica];
    }

    public function crearSeguimiento($accion)
    {
        $seguimiento = new Seguimiento();
        $seguimiento->nombre_responsable = Auth::user()->name;
        $seguimiento->email_responsable = Auth::user()->email;
        $seguimiento->tipo_user = Auth::user()->tipouser->nombre;
        $seguimiento->accion = $accion;
        $seguimiento->save();
    }
}
