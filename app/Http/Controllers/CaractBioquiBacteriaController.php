<?php

namespace App\Http\Controllers;

use App\Bacteria;
use App\CaracBioquiBacteria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CaractBioquiBacteriaController extends Controller
{
    public function store(Request $request)
    {
        /*$rules = [
            'ordenamiento' => 'required'
        ];
        $this->validate($request, $rules);*/

        $bacteria = Bacteria::where('cepa_id', $request->cepaId)->first();


        if (!empty($request->imagen1)) {
            $imagen1 = $this->guardarImagen($request->file('imagen1'), $bacteria->id);
            $ruta1 = $imagen1['ruta'];
            $rutaPublica1 = $imagen1['rutaPublica'];
        } else {
            $ruta1 = $request->imagen1;
            $rutaPublica1 = $request->imagen1;
        }
        if (!empty($request->imagen2)) {
            $imagen2 = $this->guardarImagen($request->file('imagen2'), $bacteria->id);
            $ruta2 = $imagen2['ruta'];
            $rutaPublica2 = $imagen2['rutaPublica'];
        } else {
            $ruta2 = $request->imagen2;
            $rutaPublica2 = $request->imagen2;
        }
        if (!empty($request->imagen3)) {
            $imagen3 = $this->guardarImagen($request->file('imagen3'), $bacteria->id);
            $ruta3 = $imagen3['ruta'];
            $rutaPublica3 = $imagen3['rutaPublica'];
        } else {
            $ruta3 = $request->imagen3;
            $rutaPublica3 = $request->imagen3;
        }


        $caractBioquiBacteria = new CaracBioquiBacteria();
        $caractBioquiBacteria->bacteria_id = $bacteria->id;
        $caractBioquiBacteria->oxidasa = $request->oxidasa;
        $caractBioquiBacteria->catalasa = $request->catalasa;
        $caractBioquiBacteria->atrato = $request->atrato;
        $caractBioquiBacteria->tsi = $request->tsi;
        $caractBioquiBacteria->lia = $request->lia;
        $caractBioquiBacteria->sim = $request->sim;
        $caractBioquiBacteria->rm = $request->rm;
        $caractBioquiBacteria->vp = $request->vp;
        $caractBioquiBacteria->nitrato = $request->nitrato;
        $caractBioquiBacteria->caldo_urea = $request->caldo_urea;
        $caractBioquiBacteria->of = $request->of;
        $caractBioquiBacteria->glucosa = $request->glucosa;
        $caractBioquiBacteria->lactosa = $request->lactosa;
        $caractBioquiBacteria->manitol = $request->manitol;
        $caractBioquiBacteria->xilosa = $request->xilosa;
        $caractBioquiBacteria->arabinosa = $request->arabinosa;
        $caractBioquiBacteria->sacarosa = $request->sacarosa;
        $caractBioquiBacteria->otros_azucares = $request->otros_azucares;
        $caractBioquiBacteria->almidon = $request->almidon;
        $caractBioquiBacteria->lecitinasa = $request->lecitinasa;
        $caractBioquiBacteria->lipasa = $request->lipasa;
        $caractBioquiBacteria->otras_enzimas = $request->otras_enzimas;
        $caractBioquiBacteria->hidro_caseina = $request->hidro_caseina;
        $caractBioquiBacteria->hidro_gelatina = $request->hidro_gelatina;
        $caractBioquiBacteria->hidro_urea = $request->hidro_urea;
        $caractBioquiBacteria->creci_nacl = $request->creci_nacl;
        $caractBioquiBacteria->creci_dif_temp = $request->creci_dif_temp;
        $caractBioquiBacteria->otras_caract = $request->otras_caract;
        $caractBioquiBacteria->imagen1 = $ruta1;
        $caractBioquiBacteria->imagenPublica1 = $rutaPublica1;
        $caractBioquiBacteria->imagen2 = $ruta2;
        $caractBioquiBacteria->imagenPublica2 = $rutaPublica2;
        $caractBioquiBacteria->imagen3 = $ruta3;
        $caractBioquiBacteria->imagenPublica3 = $rutaPublica3;
        $caractBioquiBacteria->descripcion = $request->imagenes_descripcion;
        $caractBioquiBacteria->save();

        return $caractBioquiBacteria;
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $caractBioquiBacteria = CaracBioquiBacteria::find($id);

        $caractBioquiBacteria->oxidasa = $request->oxidasa;
        $caractBioquiBacteria->catalasa = $request->catalasa;
        $caractBioquiBacteria->atrato = $request->atrato;
        $caractBioquiBacteria->tsi = $request->tsi;
        $caractBioquiBacteria->lia = $request->lia;
        $caractBioquiBacteria->sim = $request->sim;
        $caractBioquiBacteria->rm = $request->rm;
        $caractBioquiBacteria->vp = $request->vp;
        $caractBioquiBacteria->nitrato = $request->nitrato;
        $caractBioquiBacteria->caldo_urea = $request->caldo_urea;
        $caractBioquiBacteria->of = $request->of;
        $caractBioquiBacteria->glucosa = $request->glucosa;
        $caractBioquiBacteria->lactosa = $request->lactosa;
        $caractBioquiBacteria->manitol = $request->manitol;
        $caractBioquiBacteria->xilosa = $request->xilosa;
        $caractBioquiBacteria->arabinosa = $request->arabinosa;
        $caractBioquiBacteria->sacarosa = $request->sacarosa;
        $caractBioquiBacteria->otros_azucares = $request->otros_azucares;
        $caractBioquiBacteria->almidon = $request->almidon;
        $caractBioquiBacteria->lecitinasa = $request->lecitinasa;
        $caractBioquiBacteria->lipasa = $request->lipasa;
        $caractBioquiBacteria->otras_enzimas = $request->otras_enzimas;
        $caractBioquiBacteria->hidro_caseina = $request->hidro_caseina;
        $caractBioquiBacteria->hidro_gelatina = $request->hidro_gelatina;
        $caractBioquiBacteria->hidro_urea = $request->hidro_urea;
        $caractBioquiBacteria->creci_nacl = $request->creci_nacl;
        $caractBioquiBacteria->creci_dif_temp = $request->creci_dif_temp;
        $caractBioquiBacteria->otras_caract = $request->otras_caract;
        $caractBioquiBacteria->descripcion = $request->descripcion_imagenes;
        $caractBioquiBacteria->save();

        return $caractBioquiBacteria;
    }

    public function destroy($id)
    {
        $caractBioquiBacteria = CaracBioquiBacteria::find($id);
        //eliminar directorio
        Storage::deleteDirectory('/public/bacterias/caract_bioqui_img/' . $caractBioquiBacteria->bacteria_id);
        $caractBioquiBacteria->delete();

        return $caractBioquiBacteria;
    }
    public function agregarImagen(Request $request, $id)
    {
        $caractBioquiBacteria = CaracBioquiBacteria::find($id);

        $imagen = $this->guardarImagen($request->file('imagen'), $caractBioquiBacteria->bacteria_id);

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
        return $caractBioquiBacteria;
    }
    public function cambiarImagen(Request $request, $id)
    {
        $caractBioquiBacteria = CaracBioquiBacteria::find($id);

        $imagen = $this->guardarImagen($request->file('imagen'), $caractBioquiBacteria->bacteria_id);


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
        return $caractBioquiBacteria;
    }

    public function guardarImagen($file, $id)
    {
        $time = time();
        $fileName = $file->getClientOriginalName();
        Storage::disk('local')->put('/public/bacterias/caract_bioqui_img/' . $id . '/' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/bacterias/caract_bioqui_img/' . $id . '/' . $time . '-' . $fileName;
        $rutaPublica = '/storage/bacterias/caract_bioqui_img/' . $id . '/' . $time . '-' . $fileName;
        return ['ruta' => $ruta, 'rutaPublica' => $rutaPublica];
    }
}
