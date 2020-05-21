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
            $imagen1 = $this->guardarImagen($request->file('imagen1'), $bacteria->id);
            $ruta1 =  $imagen1['ruta'];
            $rutaPublica1 =  $imagen1['rutaPublica'];
        } else {
            $ruta1 = $request->imagen1;
            $rutaPublica1 = $request->imagen1;
        }
        if (!empty($request->imagen2)) {
            $imagen2 = $this->guardarImagen($request->file('imagen2'), $bacteria->id);
            $ruta2 =  $imagen2['ruta'];
            $rutaPublica2 =  $imagen2['rutaPublica'];
        } else {
            $ruta2 = $request->imagen2;
            $rutaPublica2 = $request->imagen2;
        }
        if (!empty($request->imagen3)) {
            $imagen3 = $this->guardarImagen($request->file('imagen3'), $bacteria->id);
            $ruta3 =  $imagen3['ruta'];
            $rutaPublica3 =  $imagen3['rutaPublica'];
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
        $caractMicroBacteria->otras_caract = $request->otras_caract;
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

        $imagen = $this->guardarImagen($request->file('imagen'), $caractMicroBacteria->bacteria_id);

        switch ($request->numero) {
            case 1:
                $caractMicroBacteria->imagen1 = $imagen['ruta'];
                $caractMicroBacteria->imagenPublica1 = $imagen['rutaPublica'];
                break;
            case 2:
                $caractMicroBacteria->imagen2 = $imagen['ruta'];
                $caractMicroBacteria->imagenPublica2 = $imagen['rutaPublica'];
                break;
            case 3:
                $caractMicroBacteria->imagen3 = $imagen['ruta'];
                $caractMicroBacteria->imagenPublica3 = $imagen['rutaPublica'];
                break;
        }
        $caractMicroBacteria->save();
        return $caractMicroBacteria;
    }
    public function cambiarImagen(Request $request, $id)
    {
        $caractMicroBacteria = CaracMicroBacteria::find($id);

        $imagen = $this->guardarImagen($request->file('imagen'), $caractMicroBacteria->bacteria_id);

        switch ($request->numero) {
            case 1:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractMicroBacteria->imagen1);

                $caractMicroBacteria->imagen1 =  $imagen['ruta'];
                $caractMicroBacteria->imagenPublica1 = $imagen['rutaPublica'];
                break;
            case 2:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractMicroBacteria->imagen2);

                $caractMicroBacteria->imagen2 =  $imagen['ruta'];
                $caractMicroBacteria->imagenPublica2 = $imagen['rutaPublica'];
                break;
            case 3:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractMicroBacteria->imagen3);

                $caractMicroBacteria->imagen3 =  $imagen['ruta'];
                $caractMicroBacteria->imagenPublica3 = $imagen['rutaPublica'];
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

    public function guardarImagen($file, $id)
    {
        $time = time();
        $fileName = $file->getClientOriginalName();
        Storage::disk('local')->put('/public/bacterias/caract_micro_img/' . $id . '/' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/bacterias/caract_micro_img/' . $id . '/' . $time . '-' . $fileName;
        $rutaPublica = '/storage/bacterias/caract_micro_img/' . $id . '/' . $time . '-' . $fileName;
        return ['ruta' => $ruta, 'rutaPublica' => $rutaPublica];
    }
}
