<?php

namespace App\Http\Controllers;

use App\Bacteria;
use App\CaracBioquiBacteria;
use App\Seguimiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class CaractBioquiBacteriaController extends Controller
{
    public function store(Request $request)
    {
        $this->validarCampos($request);
        $bacteria = Bacteria::where('cepa_id', $request->cepaId)->first();

        if (!is_null($request->imagen1)) {
            $imagen1 = $this->guardarImagen($request->imagen1, $bacteria->id, 1);
            $ruta1 = $imagen1['ruta'];
            $rutaPublica1 = $imagen1['rutaPublica'];
        } else {
            $ruta1 = $request->imagen1;
            $rutaPublica1 = $request->imagen1;
        }
        if (!is_null($request->imagen2)) {
            $imagen2 = $this->guardarImagen($request->imagen2, $bacteria->id, 2);
            $ruta2 = $imagen2['ruta'];
            $rutaPublica2 = $imagen2['rutaPublica'];
        } else {
            $ruta2 = $request->imagen2;
            $rutaPublica2 = $request->imagen2;
        }
        if (!is_null($request->imagen3)) {
            $imagen3 = $this->guardarImagen($request->imagen3, $bacteria->id, 3);
            $ruta3 = $imagen3['ruta'];
            $rutaPublica3 = $imagen3['rutaPublica'];
        } else {
            $ruta3 = $request->imagen3;
            $rutaPublica3 = $request->imagen3;
        }

        $caractBioquiBacteria = new CaracBioquiBacteria();
        $caractBioquiBacteria->bacteria_id = $bacteria->id;
        $caractBioquiBacteria->oxidasa = ucfirst($request->oxidasa);
        $caractBioquiBacteria->catalasa = ucfirst($request->catalasa);
        $caractBioquiBacteria->citrato = ucfirst($request->citrato);
        $caractBioquiBacteria->tsi = ucfirst($request->tsi);
        $caractBioquiBacteria->lia = ucfirst($request->lia);
        $caractBioquiBacteria->sim = ucfirst($request->sim);
        $caractBioquiBacteria->rm = ucfirst($request->rm);
        $caractBioquiBacteria->vp = ucfirst($request->vp);
        $caractBioquiBacteria->nitrato = ucfirst($request->nitrato);
        $caractBioquiBacteria->caldo_urea = ucfirst($request->caldo_urea);
        $caractBioquiBacteria->of = ucfirst($request->of);
        $caractBioquiBacteria->glucosa = ucfirst($request->glucosa);
        $caractBioquiBacteria->lactosa = ucfirst($request->lactosa);
        $caractBioquiBacteria->manitol = ucfirst($request->manitol);
        $caractBioquiBacteria->xilosa = ucfirst($request->xilosa);
        $caractBioquiBacteria->arabinosa = ucfirst($request->arabinosa);
        $caractBioquiBacteria->sacarosa = ucfirst($request->sacarosa);
        $caractBioquiBacteria->otros_azucares = $request->otros_azucares;
        $caractBioquiBacteria->almidon = ucfirst($request->almidon);
        $caractBioquiBacteria->lecitinasa = ucfirst($request->lecitinasa);
        $caractBioquiBacteria->lipasa = ucfirst($request->lipasa);
        $caractBioquiBacteria->otras_enzimas = $request->otras_enzimas;
        $caractBioquiBacteria->hidro_caseina = ucfirst($request->hidro_caseina);
        $caractBioquiBacteria->hidro_gelatina = ucfirst($request->hidro_gelatina);
        $caractBioquiBacteria->hidro_urea = ucfirst($request->hidro_urea);
        $caractBioquiBacteria->creci_nacl = ucfirst($request->creci_nacl);
        $caractBioquiBacteria->creci_dif_temp = ucfirst($request->creci_dif_temp);
        $caractBioquiBacteria->otras_caract = $request->otras_caract;
        $caractBioquiBacteria->imagen1 = $ruta1;
        $caractBioquiBacteria->imagenPublica1 = $rutaPublica1;
        $caractBioquiBacteria->imagen2 = $ruta2;
        $caractBioquiBacteria->imagenPublica2 = $rutaPublica2;
        $caractBioquiBacteria->imagen3 = $ruta3;
        $caractBioquiBacteria->imagenPublica3 = $rutaPublica3;
        $caractBioquiBacteria->save();

        $this->crearSeguimiento("Agregó la Característica Bioquíquimica a la Cepa: "
            . $bacteria->cepa->codigo);

        return $caractBioquiBacteria;
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $this->validarCampos($request);
        $caractBioquiBacteria = CaracBioquiBacteria::find($id);

        $caractBioquiBacteria->oxidasa = ucfirst($request->oxidasa);
        $caractBioquiBacteria->catalasa = ucfirst($request->catalasa);
        $caractBioquiBacteria->citrato = ucfirst($request->citrato);
        $caractBioquiBacteria->tsi = ucfirst($request->tsi);
        $caractBioquiBacteria->lia = ucfirst($request->lia);
        $caractBioquiBacteria->sim = ucfirst($request->sim);
        $caractBioquiBacteria->rm = ucfirst($request->rm);
        $caractBioquiBacteria->vp = ucfirst($request->vp);
        $caractBioquiBacteria->nitrato = ucfirst($request->nitrato);
        $caractBioquiBacteria->caldo_urea = ucfirst($request->caldo_urea);
        $caractBioquiBacteria->of = ucfirst($request->of);
        $caractBioquiBacteria->glucosa = ucfirst($request->glucosa);
        $caractBioquiBacteria->lactosa = ucfirst($request->lactosa);
        $caractBioquiBacteria->manitol = ucfirst($request->manitol);
        $caractBioquiBacteria->xilosa = ucfirst($request->xilosa);
        $caractBioquiBacteria->arabinosa = ucfirst($request->arabinosa);
        $caractBioquiBacteria->sacarosa = ucfirst($request->sacarosa);
        $caractBioquiBacteria->otros_azucares = $request->otros_azucares;
        $caractBioquiBacteria->almidon = ucfirst($request->almidon);
        $caractBioquiBacteria->lecitinasa = ucfirst($request->lecitinasa);
        $caractBioquiBacteria->lipasa = ucfirst($request->lipasa);
        $caractBioquiBacteria->otras_enzimas = $request->otras_enzimas;
        $caractBioquiBacteria->hidro_caseina = ucfirst($request->hidro_caseina);
        $caractBioquiBacteria->hidro_gelatina = ucfirst($request->hidro_gelatina);
        $caractBioquiBacteria->hidro_urea = ucfirst($request->hidro_urea);
        $caractBioquiBacteria->creci_nacl = ucfirst($request->creci_nacl);
        $caractBioquiBacteria->creci_dif_temp = ucfirst($request->creci_dif_temp);
        $caractBioquiBacteria->otras_caract = $request->otras_caract;
        $caractBioquiBacteria->save();

        $this->crearSeguimiento("Editó la Característica Bioquíquimica de la Cepa: "
            . $caractBioquiBacteria->bacteria->cepa->codigo);

        return $caractBioquiBacteria;
    }

    public function destroy($id)
    {
        $caractBioquiBacteria = CaracBioquiBacteria::find($id);
        //eliminar directorio
        Storage::deleteDirectory('/public/bacterias/caract_bioqui_img/' . $caractBioquiBacteria->bacteria_id);
        $caractBioquiBacteria->delete();

        $this->crearSeguimiento("Eliminó la Característica Bioquíquimica de la Cepa: "
            . $caractBioquiBacteria->bacteria->cepa->codigo);

        return $caractBioquiBacteria;
    }
    public function agregarImagen(Request $request, $id)
    {
        $caractBioquiBacteria = CaracBioquiBacteria::find($id);

        $imagen = $this->guardarImagen($request->imagen, $caractBioquiBacteria->bacteria_id, $request->numero);

        switch ($request->numero) {
            case 1:
                $caractBioquiBacteria->imagen1 =  $imagen['ruta'];
                $caractBioquiBacteria->imagenPublica1 =  $imagen['rutaPublica'];
                break;
            case 2:
                $caractBioquiBacteria->imagen2 =  $imagen['ruta'];
                $caractBioquiBacteria->imagenPublica2 =  $imagen['rutaPublica'];
                break;
            case 3:
                $caractBioquiBacteria->imagen3 =  $imagen['ruta'];
                $caractBioquiBacteria->imagenPublica3 =  $imagen['rutaPublica'];
                break;
        }
        $caractBioquiBacteria->save();

        $this->crearSeguimiento("Agregó una imagen a la Característica Bioquíquimica de la Cepa: "
            . $caractBioquiBacteria->bacteria->cepa->codigo);

        return $caractBioquiBacteria;
    }
    public function cambiarImagen(Request $request, $id)
    {
        $caractBioquiBacteria = CaracBioquiBacteria::find($id);

        $imagen = $this->guardarImagen($request->imagen, $caractBioquiBacteria->bacteria_id, $request->numero);


        switch ($request->numero) {
            case 1:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractBioquiBacteria->imagen1);

                $caractBioquiBacteria->imagen1 = $imagen['ruta'];
                $caractBioquiBacteria->imagenPublica1 = $imagen['rutaPublica'];
                break;
            case 2:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractBioquiBacteria->imagen2);

                $caractBioquiBacteria->imagen2 = $imagen['ruta'];
                $caractBioquiBacteria->imagenPublica2 = $imagen['rutaPublica'];
                break;
            case 3:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractBioquiBacteria->imagen3);

                $caractBioquiBacteria->imagen3 = $imagen['ruta'];
                $caractBioquiBacteria->imagenPublica3 = $imagen['rutaPublica'];
                break;
        }
        $caractBioquiBacteria->save();

        $this->crearSeguimiento("Cambió una imagen a la Característica Bioquíquimica de la Cepa: "
            . $caractBioquiBacteria->bacteria->cepa->codigo);

        return $caractBioquiBacteria;
    }

    public function elimarImagen(Request $request, $id)
    {
        $caractBioquiBacteria = CaracBioquiBacteria::find($id);
        switch ($request->numero) {
            case 1:
                Storage::disk('local')->delete($caractBioquiBacteria->imagen1);
                $caractBioquiBacteria->imagen1 = null;
                $caractBioquiBacteria->imagenPublica1 = null;
                break;
            case 2:
                Storage::disk('local')->delete($caractBioquiBacteria->imagen2);
                $caractBioquiBacteria->imagen2 = null;
                $caractBioquiBacteria->imagenPublica2 = null;
                break;
            case 3:
                Storage::disk('local')->delete($caractBioquiBacteria->imagen3);
                $caractBioquiBacteria->imagen3 = null;
                $caractBioquiBacteria->imagenPublica3 = null;
                break;
        }
        $caractBioquiBacteria->save();

        $this->crearSeguimiento("Eliminó una imagen a la Característica Bioquíquimica de la Cepa: "
            . $caractBioquiBacteria->bacteria->cepa->codigo);

        return $caractBioquiBacteria;
    }

    public function guardarImagen($imagen, $id, $num)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name = $num . '-' . Auth::user()->id . '-' . rand(Auth::user()->id, 1000) .  '-' . time() . '.png';
        Storage::disk('local')->put('/public/bacterias/caract_bioqui_img/' . $id . '/' .  $image_name, $data);
        $ruta = '/public/bacterias/caract_bioqui_img/' . $id . '/' .  $image_name;
        $rutaPublica = '/storage/bacterias/caract_bioqui_img/' . $id . '/' .  $image_name;
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
            'oxidasa' => 'required', 'catalasa' => 'required',
            'citrato' => 'required', 'tsi' => 'required',
            'lia' => 'required', 'vp' => 'required',
            'sim' => 'required', 'nitrato' => 'required',
            'rm' => 'required', 'caldo_urea' => 'required',
            'of' => 'required', 'glucosa' => 'required',
            'lactosa' => 'required', 'lecitinasa' => 'required',
            'manitol' => 'required', 'lipasa' => 'required',
            'xilosa' => 'required', 'hidro_caseina' => 'required',
            'arabinosa' => 'required', 'hidro_gelatina' => 'required',
            'sacarosa' => 'required', 'hidro_urea' => 'required',
            'almidon' => 'required', 'creci_nacl' => 'required', 'creci_dif_temp' => 'required'
        ];
        $this->validate($request, $rules);
    }
}
