<?php

namespace App\Http\Controllers;

use App\CaracMicroHongo;
use App\HongoFilamentoso;
use App\Seguimiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class CaractMicroHongoController extends Controller
{
    public function store(Request $request)
    {
        $this->validarCampos($request);
        $hongo = HongoFilamentoso::where('cepa_id', $request->cepaId)->first();

        if (!is_null($request->imagen1)) {
            $imagen1 = $this->guardarImagen($request->imagen1, $hongo->id, 1);
            $ruta1 =  $imagen1['ruta'];
            $rutaPublica1 =  $imagen1['rutaPublica'];
        } else {
            $ruta1 = $request->imagen1;
            $rutaPublica1 = $request->imagen1;
        }
        if (!is_null($request->imagen2)) {
            $imagen2 = $this->guardarImagen($request->imagen2, $hongo->id, 2);
            $ruta2 =  $imagen2['ruta'];
            $rutaPublica2 =  $imagen2['rutaPublica'];
        } else {
            $ruta2 = $request->imagen2;
            $rutaPublica2 = $request->imagen2;
        }
        if (!is_null($request->imagen3)) {
            $imagen3 = $this->guardarImagen($request->imagen3, $hongo->id, 3);
            $ruta3 =  $imagen3['ruta'];
            $rutaPublica3 =  $imagen3['rutaPublica'];
        } else {
            $ruta3 = $request->imagen3;
            $rutaPublica3 = $request->imagen3;
        }


        $caractMicroHongo = new CaracMicroHongo();
        $caractMicroHongo->hongo_filamentoso_id = $hongo->id;
        $caractMicroHongo->conidioforo_id = intval($request->conidioforo);
        $caractMicroHongo->fialides = $request->fialides;
        $caractMicroHongo->fialides_forma = $request->fialides_forma;
        $caractMicroHongo->fialides_otra_caracteristica = $request->fialides_otra_caracteristica;
        $caractMicroHongo->vesicula = $request->vesicula;
        $caractMicroHongo->espora_asexual_id = intval($request->espora_asexual);
        $caractMicroHongo->esporas_asexuales_conidios_tamano = $request->esporas_asexuales_conidios_tamano;
        $caractMicroHongo->esporas_asexuales_conidios_color = $request->esporas_asexuales_conidios_color;
        $caractMicroHongo->esporas_asexuales_conidios_forma = $request->esporas_asexuales_conidios_forma;
        $caractMicroHongo->esporas_asexuales_conidios_otras = $request->esporas_asexuales_conidios_otras;
        $caractMicroHongo->espora_sexual_id = intval($request->espora_sexual);
        $caractMicroHongo->otras_estructuras = $request->otras_estructuras;


        $caractMicroHongo->imagen1 = $ruta1;
        $caractMicroHongo->imagenPublica1 = $rutaPublica1;
        $caractMicroHongo->imagen2 = $ruta2;
        $caractMicroHongo->imagenPublica2 = $rutaPublica2;
        $caractMicroHongo->imagen3 = $ruta3;
        $caractMicroHongo->imagenPublica3 = $rutaPublica3;
        $caractMicroHongo->save();

        $this->crearSeguimiento("Agregó la Característica Microscópica a la Cepa: "
            . $hongo->cepa->codigo);

        return $caractMicroHongo;
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $this->validarCampos($request);
        $caractMicroHongo = CaracMicroHongo::find($id);
        $caractMicroHongo->conidioforo_id = intval($request->conidioforo);
        $caractMicroHongo->fialides = $request->fialides;
        $caractMicroHongo->fialides_forma = $request->fialides_forma;
        $caractMicroHongo->fialides_otra_caracteristica = $request->fialides_otra_caracteristica;
        $caractMicroHongo->vesicula = $request->vesicula;
        $caractMicroHongo->espora_asexual_id = intval($request->espora_asexual);
        $caractMicroHongo->esporas_asexuales_conidios_tamano = $request->esporas_asexuales_conidios_tamano;
        $caractMicroHongo->esporas_asexuales_conidios_color = $request->esporas_asexuales_conidios_color;
        $caractMicroHongo->esporas_asexuales_conidios_forma = $request->esporas_asexuales_conidios_forma;
        $caractMicroHongo->esporas_asexuales_conidios_otras = $request->esporas_asexuales_conidios_otras;
        $caractMicroHongo->espora_sexual_id = intval($request->espora_sexual);
        $caractMicroHongo->otras_estructuras = $request->otras_estructuras;
        $caractMicroHongo->save();

        $this->crearSeguimiento("Editó la Característica Microscópica de la Cepa: "
            . $caractMicroHongo->hongoFilamentoso->cepa->codigo);

        return $caractMicroHongo;
    }

    public function destroy($id)
    {
        $caractMicroHongo = CaracMicroHongo::find($id);
        //eliminar directorio
        Storage::deleteDirectory('/public/hongos/caract_micro_img/' . $caractMicroHongo->hongo_filamentoso_id);
        $caractMicroHongo->delete();

        $this->crearSeguimiento("Eliminó la Característica Microscópica de la Cepa: "
            . $caractMicroHongo->hongoFilamentoso->cepa->codigo);

        return $caractMicroHongo;
    }
    public function agregarImagen(Request $request, $id)
    {
        $caractMicroHongo = CaracMicroHongo::find($id);

        $imagen = $this->guardarImagen($request->imagen, $caractMicroHongo->hongo_filamentoso_id, $request->numero);

        switch ($request->numero) {
            case 1:
                $caractMicroHongo->imagen1 = $imagen['ruta'];
                $caractMicroHongo->imagenPublica1 = $imagen['rutaPublica'];
                break;
            case 2:
                $caractMicroHongo->imagen2 = $imagen['ruta'];
                $caractMicroHongo->imagenPublica2 = $imagen['rutaPublica'];
                break;
            case 3:
                $caractMicroHongo->imagen3 = $imagen['ruta'];
                $caractMicroHongo->imagenPublica3 = $imagen['rutaPublica'];
                break;
        }
        $caractMicroHongo->save();

        $this->crearSeguimiento("Agregó una imagen a la Característica Microscópica de la Cepa: "
            . $caractMicroHongo->hongoFilamentoso->cepa->codigo);

        return $caractMicroHongo;
    }
    public function cambiarImagen(Request $request, $id)
    {
        $caractMicroHongo = CaracMicroHongo::find($id);

        $imagen = $this->guardarImagen($request->imagen, $caractMicroHongo->hongo_filamentoso_id, $request->numero);

        switch ($request->numero) {
            case 1:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractMicroHongo->imagen1);

                $caractMicroHongo->imagen1 =  $imagen['ruta'];
                $caractMicroHongo->imagenPublica1 = $imagen['rutaPublica'];
                break;
            case 2:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractMicroHongo->imagen2);

                $caractMicroHongo->imagen2 =  $imagen['ruta'];
                $caractMicroHongo->imagenPublica2 = $imagen['rutaPublica'];
                break;
            case 3:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractMicroHongo->imagen3);

                $caractMicroHongo->imagen3 =  $imagen['ruta'];
                $caractMicroHongo->imagenPublica3 = $imagen['rutaPublica'];
                break;
        }
        $caractMicroHongo->save();

        $this->crearSeguimiento("Cambió una imagen a la Característica Microscópica de la Cepa: "
            . $caractMicroHongo->hongoFilamentoso->cepa->codigo);

        return $caractMicroHongo;
    }

    public function elimarImagen(Request $request, $id)
    {
        $caractMicroHongo = CaracMicroHongo::find($id);
        switch ($request->numero) {
            case 1:
                Storage::disk('local')->delete($caractMicroHongo->imagen1);
                $caractMicroHongo->imagen1 = null;
                $caractMicroHongo->imagenPublica1 = null;
                break;
            case 2:
                Storage::disk('local')->delete($caractMicroHongo->imagen2);
                $caractMicroHongo->imagen2 = null;
                $caractMicroHongo->imagenPublica2 = null;
                break;
            case 3:
                Storage::disk('local')->delete($caractMicroHongo->imagen3);
                $caractMicroHongo->imagen3 = null;
                $caractMicroHongo->imagenPublica3 = null;
                break;
        }
        $caractMicroHongo->save();

        $this->crearSeguimiento("Eliminó una imagen a la Característica Microscópica de la Cepa: "
            . $caractMicroHongo->hongoFilamentoso->cepa->codigo);

        return $caractMicroHongo;
    }

    public function guardarImagen($imagen, $id, $num)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name = $num . '-' . Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '.png';
        Storage::disk('local')->put('/public/hongos/caract_micro_img/' . $id . '/' . $image_name, $data);
        $ruta = '/public/hongos/caract_micro_img/' . $id . '/' . $image_name;
        $rutaPublica = '/storage/hongos/caract_micro_img/' . $id . '/' . $image_name;
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
            'fialides' => 'required', 'vesicula' => 'required',
            'espora_asexual' => 'required', 'conidioforo' => 'required',
            'espora_sexual' => 'required'
        ];
        if ($request->fialides == 'Presencia') {
            $rules += ['fialides_forma' => 'required'];
        }
        if ($request->espora_asexual == 2) {
            $rules += [
                'esporas_asexuales_conidios_tamano' => 'required',
                'esporas_asexuales_conidios_color' => 'required',
                'esporas_asexuales_conidios_forma' => 'required'
            ];
        }
        $this->validate($request, $rules);
    }
}
