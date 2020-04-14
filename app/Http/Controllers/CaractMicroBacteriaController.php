<?php

namespace App\Http\Controllers;

use App\Bacteria;
use App\CaracMicroBacteria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CaractMicroBacteriaController extends Controller
{
    public function store(Request $request)
    {
        $rules = [
            'ordenamiento' => 'required'
        ];
        $this->validate($request, $rules);

        $bacteria = Bacteria::where('cepa_id', $request->cepaId)->first();


        if (!empty($request->imagen1)) {
            $file1 = $request->file('imagen1');
            $fileName1 = $file1->getClientOriginalName();
            $time1 = time();

            Storage::disk('local')->put('/public/bacterias/caract_micro_img/' . $bacteria->id . '/' . $time1 . '-' . $fileName1, file_get_contents($file1));
            $ruta1 = '/public/bacterias/caract_micro_img/' . $bacteria->id . '/' . $time1 . '-' . $fileName1;
            $rutaPublica1 = '/storage/bacterias/caract_micro_img/' . $bacteria->id . '/' . $time1 . '-' . $fileName1;
        } else {
            $ruta1 = $request->imagen1;
            $rutaPublica1 = $request->imagen1;
        }
        if (!empty($request->imagen2)) {
            $file2 = $request->file('imagen2');
            $fileName2 = $file2->getClientOriginalName();
            $time2 = time();

            Storage::disk('local')->put('/public/bacterias/caract_micro_img/' . $bacteria->id . '/' . $time2 . '-' . $fileName2, file_get_contents($file2));
            $ruta2 = '/public/bacterias/caract_micro_img/' . $bacteria->id . '/' . $time2 . '-' . $fileName2;
            $rutaPublica2 = '/storage/bacterias/caract_micro_img/' . $bacteria->id . '/' . $time2 . '-' . $fileName2;
        } else {
            $ruta2 = $request->imagen2;
            $rutaPublica2 = $request->imagen2;
        }
        if (!empty($request->imagen3)) {
            $file3 = $request->file('imagen3');
            $fileName3 = $file3->getClientOriginalName();
            $time3 = time();

            Storage::disk('local')->put('/public/bacterias/caract_micro_img/' . $bacteria->id . '/' . $time3 . '-' . $fileName3, file_get_contents($file3));
            $ruta3 = '/public/bacterias/caract_micro_img/' . $bacteria->id . '/' . $time3 . '-' . $fileName3;
            $rutaPublica3 = '/storage/bacterias/caract_micro_img/' . $bacteria->id . '/' . $time3 . '-' . $fileName3;
        } else {
            $ruta3 = $request->imagen3;
            $rutaPublica3 = $request->imagen3;
        }


        $caractMicroBacteria = new CaracMicroBacteria();
        $caractMicroBacteria->bacteria_id = $bacteria->id;
        $caractMicroBacteria->forma_id = intval($request->forma);
        $caractMicroBacteria->ordenamiento = $request->ordenamiento;
        $caractMicroBacteria->tincion_gram = $request->tincion_gram;
        $caractMicroBacteria->tincion_esporas = $request->tincion_esporas;
        $caractMicroBacteria->ubicacion_esporas = $request->ubicacion_esporas;
        $caractMicroBacteria->tincion_capsula = $request->tincion_capsula;
        $caractMicroBacteria->otras_caract = $request->otras_caract;
        $caractMicroBacteria->imagen1 = $ruta1;
        $caractMicroBacteria->imagenPublica1 = $rutaPublica1;
        $caractMicroBacteria->imagen2 = $ruta2;
        $caractMicroBacteria->imagenPublica2 = $rutaPublica2;
        $caractMicroBacteria->imagen3 = $ruta3;
        $caractMicroBacteria->imagenPublica3 = $rutaPublica3;
        $caractMicroBacteria->descripcion = $request->imagenes_descripcion;
        $caractMicroBacteria->save();

        return $caractMicroBacteria;
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $rules = [
            'ordenamiento' => 'required'
        ];
        $this->validate($request, $rules);

        $caractMicroBacteria = CaracMicroBacteria::find($id);

        $caractMicroBacteria->forma_id = intval($request->forma);
        $caractMicroBacteria->ordenamiento = $request->ordenamiento;
        $caractMicroBacteria->tincion_gram = $request->tincion_gram;
        $caractMicroBacteria->tincion_esporas = $request->tincion_esporas;
        if ($request->tincion_esporas == "presencia") {
            $caractMicroBacteria->ubicacion_esporas = $request->ubicacion_esporas;
        } else {
            $caractMicroBacteria->ubicacion_esporas = null;
        }
        $caractMicroBacteria->tincion_capsula = $request->tincion_capsula;
        $caractMicroBacteria->otras_caract = $request->otras_caracteristicas;
        $caractMicroBacteria->descripcion = $request->descripcion_imagenes;
        $caractMicroBacteria->save();

        return $caractMicroBacteria;
    }

    public function destroy($id)
    {
        $caractMicroBacteria = CaracMicroBacteria::find($id);
        //eliminar directorio
        Storage::deleteDirectory('/public/bacterias/caract_micro_img/' . $caractMicroBacteria->bacteria_id);
        $caractMicroBacteria->delete();

        return $caractMicroBacteria;
    }
    public function agregarImagen(Request $request, $id)
    {
        $caractMicroBacteria = CaracMicroBacteria::find($id);

        $file = $request->file('imagen');
        $fileName = $file->getClientOriginalName();
        $time = time();

        Storage::disk('local')->put('/public/bacterias/caract_micro_img/' . $caractMicroBacteria->bacteria_id . '/' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/bacterias/caract_micro_img/' . $caractMicroBacteria->bacteria_id . '/' . $time . '-' . $fileName;
        $rutaPublica = '/storage/bacterias/caract_micro_img/' . $caractMicroBacteria->bacteria_id . '/' . $time . '-' . $fileName;

        switch ($request->numero) {
            case 1:
                $caractMicroBacteria->imagen1 = $ruta;
                $caractMicroBacteria->imagenPublica1 = $rutaPublica;
                break;
            case 2:
                $caractMicroBacteria->imagen2 = $ruta;
                $caractMicroBacteria->imagenPublica2 = $rutaPublica;
                break;
            case 3:
                $caractMicroBacteria->imagen3 = $ruta;
                $caractMicroBacteria->imagenPublica3 = $rutaPublica;
                break;
        }
        $caractMicroBacteria->save();
        return $caractMicroBacteria;
    }
    public function cambiarImagen(Request $request, $id)
    {
        $caractMicroBacteria = CaracMicroBacteria::find($id);

        $file = $request->file('imagen');
        $fileName = $file->getClientOriginalName();
        $time = time();
        //agregar imagen nueva
        Storage::disk('local')->put('/public/bacterias/caract_micro_img/' . $caractMicroBacteria->bacteria_id . '/' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/bacterias/caract_micro_img/' . $caractMicroBacteria->bacteria_id . '/' . $time . '-' . $fileName;
        $rutaPublica = '/storage/bacterias/caract_micro_img/' . $caractMicroBacteria->bacteria_id . '/' . $time . '-' . $fileName;

        switch ($request->numero) {
            case 1:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractMicroBacteria->imagen1);

                $caractMicroBacteria->imagen1 = $ruta;
                $caractMicroBacteria->imagenPublica1 = $rutaPublica;
                break;
            case 2:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractMicroBacteria->imagen2);

                $caractMicroBacteria->imagen2 = $ruta;
                $caractMicroBacteria->imagenPublica2 = $rutaPublica;
                break;
            case 3:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractMicroBacteria->imagen3);

                $caractMicroBacteria->imagen3 = $ruta;
                $caractMicroBacteria->imagenPublica3 = $rutaPublica;
                break;
        }
        $caractMicroBacteria->save();
        return $caractMicroBacteria;
    }

    public function elimarImagen(Request $request, $id)
    {
        $caractMicroBacteria = CaracMicroBacteria::find($id);
        switch ($request->numero) {
            case 1:
                Storage::disk('local')->delete($caractMicroBacteria->imagen1);
                $caractMicroBacteria->imagen1 = null;
                $caractMicroBacteria->imagenPublica1 = null;
                break;
            case 2:
                Storage::disk('local')->delete($caractMicroBacteria->imagen2);
                $caractMicroBacteria->imagen2 = null;
                $caractMicroBacteria->imagenPublica2 = null;
                break;
            case 3:
                Storage::disk('local')->delete($caractMicroBacteria->imagen3);
                $caractMicroBacteria->imagen3 = null;
                $caractMicroBacteria->imagenPublica3 = null;
                break;
        }
        $caractMicroBacteria->save();
        return $caractMicroBacteria;
    }
}
