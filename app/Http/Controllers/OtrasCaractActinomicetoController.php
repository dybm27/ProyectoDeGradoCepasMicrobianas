<?php

namespace App\Http\Controllers;

use App\Actinomiceto;
use App\OtrasCaracActinomiceto;
use App\Seguimiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class OtrasCaractActinomicetoController extends Controller
{
    public function store(Request $request)
    {
        $this->validarCampos($request);
        $actinomiceto = Actinomiceto::where('cepa_id', $request->cepaId)->first();

        if (!is_null($request->imagen1)) {
            $imagen1 = $this->guardarImagen($request->imagen1, $actinomiceto->id, 1);
            $ruta1 = $imagen1['ruta'];
            $rutaPublica1 = $imagen1['rutaPublica'];
        } else {
            $ruta1 = $request->imagen1;
            $rutaPublica1 = $request->imagen1;
        }
        if (!is_null($request->imagen2)) {
            $imagen2 = $this->guardarImagen($request->imagen2, $actinomiceto->id, 2);
            $ruta2 = $imagen2['ruta'];
            $rutaPublica2 = $imagen2['rutaPublica'];
        } else {
            $ruta2 = $request->imagen2;
            $rutaPublica2 = $request->imagen2;
        }
        if (!is_null($request->imagen3)) {
            $imagen3 = $this->guardarImagen($request->imagen3, $actinomiceto->id, 3);
            $ruta3 = $imagen3['ruta'];
            $rutaPublica3 = $imagen3['rutaPublica'];
        } else {
            $ruta3 = $request->imagen3;
            $rutaPublica3 = $request->imagen3;
        }

        $otrasCaractActinomiceto = new OtrasCaracActinomiceto();
        $otrasCaractActinomiceto->actinomiceto_id = $actinomiceto->id;
        $otrasCaractActinomiceto->fijacion_nitrogeno = $request->fijacion_nitrogeno;
        $otrasCaractActinomiceto->produccion_aia = $request->produccion_aia;
        $otrasCaractActinomiceto->giberelinas = $request->giberelinas;
        $otrasCaractActinomiceto->solubili_fosforo = $request->solubili_fosforo;
        $otrasCaractActinomiceto->produccion_sideroforos = $request->produccion_sideroforos;
        $otrasCaractActinomiceto->antagonismos = $request->antagonismos;
        $otrasCaractActinomiceto->activi_enzimaticas = $request->activi_enzimaticas;
        $otrasCaractActinomiceto->alta_produc_antibioticos = $request->alta_produc_antibioticos;
        $otrasCaractActinomiceto->produccion_pha = $request->produccion_pha;
        $otrasCaractActinomiceto->otras_caract = $request->otras_caract;
        $otrasCaractActinomiceto->imagen1 = $ruta1;
        $otrasCaractActinomiceto->imagenPublica1 = $rutaPublica1;
        $otrasCaractActinomiceto->imagen2 = $ruta2;
        $otrasCaractActinomiceto->imagenPublica2 = $rutaPublica2;
        $otrasCaractActinomiceto->imagen3 = $ruta3;
        $otrasCaractActinomiceto->imagenPublica3 = $rutaPublica3;
        $otrasCaractActinomiceto->save();

        $this->crearSeguimiento("Agregó Otras Características de Interés a la Cepa: "
            . $actinomiceto->cepa->codigo);

        return $otrasCaractActinomiceto;
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $this->validarCampos($request);
        $otrasCaractActinomiceto = OtrasCaracActinomiceto::find($id);

        $otrasCaractActinomiceto->fijacion_nitrogeno = $request->fijacion_nitrogeno;
        $otrasCaractActinomiceto->produccion_aia = $request->produccion_aia;
        $otrasCaractActinomiceto->giberelinas = $request->giberelinas;
        $otrasCaractActinomiceto->solubili_fosforo = $request->solubili_fosforo;
        $otrasCaractActinomiceto->produccion_sideroforos = $request->produccion_sideroforos;
        $otrasCaractActinomiceto->antagonismos = $request->antagonismos;
        $otrasCaractActinomiceto->activi_enzimaticas = $request->activi_enzimaticas;
        $otrasCaractActinomiceto->alta_produc_antibioticos = $request->alta_produc_antibioticos;
        $otrasCaractActinomiceto->produccion_pha = $request->produccion_pha;
        $otrasCaractActinomiceto->otras_caract = $request->otras_caract;
        $otrasCaractActinomiceto->save();

        $this->crearSeguimiento("Editó Otras Características de Interés de la Cepa: "
            . $otrasCaractActinomiceto->actinomiceto->cepa->codigo);

        return $otrasCaractActinomiceto;
    }

    public function destroy($id)
    {
        $otrasCaractActinomiceto = OtrasCaracActinomiceto::find($id);
        //eliminar directorio
        Storage::deleteDirectory('/public/actinomicetos/otras_caract_img/' . $otrasCaractActinomiceto->actinomiceto_id);
        $otrasCaractActinomiceto->delete();

        $this->crearSeguimiento("Eliminó Otras Características de Interés de la Cepa: "
            . $otrasCaractActinomiceto->actinomiceto->cepa->codigo);

        return $otrasCaractActinomiceto;
    }
    public function agregarImagen(Request $request, $id)
    {
        $otrasCaractActinomiceto = OtrasCaracActinomiceto::find($id);

        $imagen = $this->guardarImagen($request->imagen, $otrasCaractActinomiceto->actinomiceto_id, $request->numero);

        switch ($request->numero) {
            case 1:
                $otrasCaractActinomiceto->imagen1 =  $imagen['ruta'];
                $otrasCaractActinomiceto->imagenPublica1 =  $imagen['rutaPublica'];
                break;
            case 2:
                $otrasCaractActinomiceto->imagen2 =  $imagen['ruta'];
                $otrasCaractActinomiceto->imagenPublica2 =  $imagen['rutaPublica'];
                break;
            case 3:
                $otrasCaractActinomiceto->imagen3 =  $imagen['ruta'];
                $otrasCaractActinomiceto->imagenPublica3 =  $imagen['rutaPublica'];
                break;
        }
        $otrasCaractActinomiceto->save();

        $this->crearSeguimiento("Agregó una imagen a Otras Características de Interés de la Cepa: "
            . $otrasCaractActinomiceto->actinomiceto->cepa->codigo);

        return $otrasCaractActinomiceto;
    }
    public function cambiarImagen(Request $request, $id)
    {
        $otrasCaractActinomiceto = OtrasCaracActinomiceto::find($id);

        $imagen = $this->guardarImagen($request->imagen, $otrasCaractActinomiceto->actinomiceto_id, $request->numero);


        switch ($request->numero) {
            case 1:
                //eliminar imagen vieja
                Storage::disk('local')->delete($otrasCaractActinomiceto->imagen1);

                $otrasCaractActinomiceto->imagen1 = $imagen['ruta'];
                $otrasCaractActinomiceto->imagenPublica1 = $imagen['rutaPublica'];
                break;
            case 2:
                //eliminar imagen vieja
                Storage::disk('local')->delete($otrasCaractActinomiceto->imagen2);

                $otrasCaractActinomiceto->imagen2 = $imagen['ruta'];
                $otrasCaractActinomiceto->imagenPublica2 = $imagen['rutaPublica'];
                break;
            case 3:
                //eliminar imagen vieja
                Storage::disk('local')->delete($otrasCaractActinomiceto->imagen3);

                $otrasCaractActinomiceto->imagen3 = $imagen['ruta'];
                $otrasCaractActinomiceto->imagenPublica3 = $imagen['rutaPublica'];
                break;
        }
        $otrasCaractActinomiceto->save();

        $this->crearSeguimiento("Cambió una imagen a Otras Características de Interés de la Cepa: "
            . $otrasCaractActinomiceto->actinomiceto->cepa->codigo);

        return $otrasCaractActinomiceto;
    }

    public function elimarImagen(Request $request, $id)
    {
        $otrasCaractActinomiceto = OtrasCaracActinomiceto::find($id);
        switch ($request->numero) {
            case 1:
                Storage::disk('local')->delete($otrasCaractActinomiceto->imagen1);
                $otrasCaractActinomiceto->imagen1 = null;
                $otrasCaractActinomiceto->imagenPublica1 = null;
                break;
            case 2:
                Storage::disk('local')->delete($otrasCaractActinomiceto->imagen2);
                $otrasCaractActinomiceto->imagen2 = null;
                $otrasCaractActinomiceto->imagenPublica2 = null;
                break;
            case 3:
                Storage::disk('local')->delete($otrasCaractActinomiceto->imagen3);
                $otrasCaractActinomiceto->imagen3 = null;
                $otrasCaractActinomiceto->imagenPublica3 = null;
                break;
        }
        $otrasCaractActinomiceto->save();

        $this->crearSeguimiento("Eliminó una imagen a Otras Características de Interés de la Cepa: "
            . $otrasCaractActinomiceto->actinomiceto->cepa->codigo);

        return $otrasCaractActinomiceto;
    }

    public function guardarImagen($imagen, $id, $num)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name = $num . '-' . Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '.png';
        Storage::disk('local')->put('/public/actinomicetos/otras_caract_img/' . $id . '/' . $image_name, $data);
        $ruta = '/public/actinomicetos/otras_caract_img/' . $id . '/' . $image_name;
        $rutaPublica = '/storage/actinomicetos/otras_caract_img/' . $id . '/' . $image_name;
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

    public function validarCampos($request)
    {
        $rules = [
            'fijacion_nitrogeno' => 'required', 'produccion_aia' => 'required',
            'giberelinas' => 'required', 'solubili_fosforo' => 'required',
            'produccion_sideroforos' => 'required', 'antagonismos' => 'required',
            'activi_enzimaticas' => 'required', 'produccion_pha' => 'required',
            'alta_produc_antibioticos' => 'required'
        ];
        $this->validate($request, $rules);
    }
}
