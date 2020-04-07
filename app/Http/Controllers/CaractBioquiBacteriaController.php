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
            $file1 = $request->file('imagen1');
            $fileName1 = $file1->getClientOriginalName();
            $time1 = time();

            Storage::disk('local')->put('/public/bacterias/caract_bioqui_img/' . $bacteria->id . '/' . $time1 . '-' . $fileName1, file_get_contents($file1));
            $ruta1 = '/public/bacterias/caract_bioqui_img/' . $bacteria->id . '/' . $time1 . '-' . $fileName1;
            $rutaPublica1 = '/storage/bacterias/caract_bioqui_img/' . $bacteria->id . '/' . $time1 . '-' . $fileName1;
        } else {
            $ruta1 = $request->imagen1;
            $rutaPublica1 = $request->imagen1;
        }
        if (!empty($request->imagen2)) {
            $file2 = $request->file('imagen2');
            $fileName2 = $file2->getClientOriginalName();
            $time2 = time();

            Storage::disk('local')->put('/public/bacterias/caract_bioqui_img/' . $bacteria->id . '/' . $time2 . '-' . $fileName2, file_get_contents($file2));
            $ruta2 = '/public/bacterias/caract_bioqui_img/' . $bacteria->id . '/' . $time2 . '-' . $fileName2;
            $rutaPublica2 = '/storage/bacterias/caract_bioqui_img/' . $bacteria->id . '/' . $time2 . '-' . $fileName2;
        } else {
            $ruta2 = $request->imagen2;
            $rutaPublica2 = $request->imagen2;
        }
        if (!empty($request->imagen3)) {
            $file3 = $request->file('imagen3');
            $fileName3 = $file3->getClientOriginalName();
            $time3 = time();

            Storage::disk('local')->put('/public/bacterias/caract_bioqui_img/' . $bacteria->id . '/' . $time3 . '-' . $fileName3, file_get_contents($file3));
            $ruta3 = '/public/bacterias/caract_bioqui_img/' . $bacteria->id . '/' . $time3 . '-' . $fileName3;
            $rutaPublica3 = '/storage/bacterias/caract_bioqui_img/' . $bacteria->id . '/' . $time3 . '-' . $fileName3;
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
       /* $rules = [
            'ordenamiento' => 'required'
        ];
        $this->validate($request, $rules);*/

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
        $caractBioquiBacteria->otras_caract = $request->otras_caracteristicas;
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

        $file = $request->file('imagen');
        $fileName = $file->getClientOriginalName();
        $time = time();

        Storage::disk('local')->put('/public/bacterias/caract_bioqui_img/' . $caractBioquiBacteria->bacteria_id . '/' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/bacterias/caract_bioqui_img/' . $caractBioquiBacteria->bacteria_id . '/' . $time . '-' . $fileName;
        $rutaPublica = '/storage/bacterias/caract_bioqui_img/' . $caractBioquiBacteria->bacteria_id . '/' . $time . '-' . $fileName;

        switch ($request->numero) {
            case 1:
                $caractBioquiBacteria->imagen1 = $ruta;
                $caractBioquiBacteria->imagenPublica1 = $rutaPublica;
                break;
            case 2:
                $caractBioquiBacteria->imagen2 = $ruta;
                $caractBioquiBacteria->imagenPublica2 = $rutaPublica;
                break;
            case 3:
                $caractBioquiBacteria->imagen3 = $ruta;
                $caractBioquiBacteria->imagenPublica3 = $rutaPublica;
                break;
        }
        $caractBioquiBacteria->save();
        return $caractBioquiBacteria;
    }
    public function cambiarImagen(Request $request, $id)
    {
        $caractBioquiBacteria = CaracBioquiBacteria::find($id);

        $file = $request->file('imagen');
        $fileName = $file->getClientOriginalName();
        $time = time();
        //agregar imagen nueva
        Storage::disk('local')->put('/public/bacterias/caract_bioqui_img/' . $caractBioquiBacteria->bacteria_id . '/' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/bacterias/caract_bioqui_img/' . $caractBioquiBacteria->bacteria_id . '/' . $time . '-' . $fileName;
        $rutaPublica = '/storage/bacterias/caract_bioqui_img/' . $caractBioquiBacteria->bacteria_id . '/' . $time . '-' . $fileName;

        switch ($request->numero) {
            case 1:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractBioquiBacteria->imagen1);

                $caractBioquiBacteria->imagen1 = $ruta;
                $caractBioquiBacteria->imagenPublica1 = $rutaPublica;
                break;
            case 2:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractBioquiBacteria->imagen2);

                $caractBioquiBacteria->imagen2 = $ruta;
                $caractBioquiBacteria->imagenPublica2 = $rutaPublica;
                break;
            case 3:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractBioquiBacteria->imagen3);

                $caractBioquiBacteria->imagen3 = $ruta;
                $caractBioquiBacteria->imagenPublica3 = $rutaPublica;
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
}
