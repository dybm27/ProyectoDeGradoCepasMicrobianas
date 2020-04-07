<?php

namespace App\Http\Controllers;

use App\Bacteria;
use App\CaracFisioBacteria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CaractFisioBacteriaController extends Controller
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

            Storage::disk('local')->put('/public/bacterias/caract_fisio_img/' . $bacteria->id . '/' . $time1 . '-' . $fileName1, file_get_contents($file1));
            $ruta1 = '/public/bacterias/caract_fisio_img/' . $bacteria->id . '/' . $time1 . '-' . $fileName1;
            $rutaPublica1 = '/storage/bacterias/caract_fisio_img/' . $bacteria->id . '/' . $time1 . '-' . $fileName1;
        } else {
            $ruta1 = $request->imagen1;
            $rutaPublica1 = $request->imagen1;
        }
        if (!empty($request->imagen2)) {
            $file2 = $request->file('imagen2');
            $fileName2 = $file2->getClientOriginalName();
            $time2 = time();

            Storage::disk('local')->put('/public/bacterias/caract_fisio_img/' . $bacteria->id . '/' . $time2 . '-' . $fileName2, file_get_contents($file2));
            $ruta2 = '/public/bacterias/caract_fisio_img/' . $bacteria->id . '/' . $time2 . '-' . $fileName2;
            $rutaPublica2 = '/storage/bacterias/caract_fisio_img/' . $bacteria->id . '/' . $time2 . '-' . $fileName2;
        } else {
            $ruta2 = $request->imagen2;
            $rutaPublica2 = $request->imagen2;
        }
        if (!empty($request->imagen3)) {
            $file3 = $request->file('imagen3');
            $fileName3 = $file3->getClientOriginalName();
            $time3 = time();

            Storage::disk('local')->put('/public/bacterias/caract_fisio_img/' . $bacteria->id . '/' . $time3 . '-' . $fileName3, file_get_contents($file3));
            $ruta3 = '/public/bacterias/caract_fisio_img/' . $bacteria->id . '/' . $time3 . '-' . $fileName3;
            $rutaPublica3 = '/storage/bacterias/caract_fisio_img/' . $bacteria->id . '/' . $time3 . '-' . $fileName3;
        } else {
            $ruta3 = $request->imagen3;
            $rutaPublica3 = $request->imagen3;
        }


        $caractFisioBacteria = new CaracFisioBacteria();
        $caractFisioBacteria->bacteria_id = $bacteria->id;
        $caractFisioBacteria->acido_indolacetico = $request->acido_indolacetico;
        $caractFisioBacteria->fosforo = $request->fosforo;
        $caractFisioBacteria->sideroforos = $request->sideroforos;
        $caractFisioBacteria->nitrogeno = $request->nitrogeno;
        $caractFisioBacteria->otras_caract = $request->otras_caract;
        $caractFisioBacteria->imagen1 = $ruta1;
        $caractFisioBacteria->imagenPublica1 = $rutaPublica1;
        $caractFisioBacteria->imagen2 = $ruta2;
        $caractFisioBacteria->imagenPublica2 = $rutaPublica2;
        $caractFisioBacteria->imagen3 = $ruta3;
        $caractFisioBacteria->imagenPublica3 = $rutaPublica3;
        $caractFisioBacteria->descripcion = $request->imagenes_descripcion;
        $caractFisioBacteria->save();

        return $caractFisioBacteria;
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

        $caractFisioBacteria = CaracFisioBacteria::find($id);

        $caractFisioBacteria->acido_indolacetico = $request->acido_indolacetico;
        $caractFisioBacteria->fosforo = $request->fosforo;
        $caractFisioBacteria->sideroforos = $request->sideroforos;
        $caractFisioBacteria->nitrogeno = $request->nitrogeno;
        $caractFisioBacteria->otras_caract = $request->otras_caracteristicas;
        $caractFisioBacteria->descripcion = $request->descripcion_imagenes;
        $caractFisioBacteria->save();

        return $caractFisioBacteria;
    }

    public function destroy($id)
    {
        $caractFisioBacteria = CaracFisioBacteria::find($id);
        //eliminar directorio
        Storage::deleteDirectory('/public/bacterias/caract_fisio_img/' . $caractFisioBacteria->bacteria_id);
        $caractFisioBacteria->delete();

        return $caractFisioBacteria;
    }
    public function agregarImagen(Request $request, $id)
    {
        $caractFisioBacteria = CaracFisioBacteria::find($id);

        $file = $request->file('imagen');
        $fileName = $file->getClientOriginalName();
        $time = time();

        Storage::disk('local')->put('/public/bacterias/caract_fisio_img/' . $caractFisioBacteria->bacteria_id . '/' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/bacterias/caract_fisio_img/' . $caractFisioBacteria->bacteria_id . '/' . $time . '-' . $fileName;
        $rutaPublica = '/storage/bacterias/caract_fisio_img/' . $caractFisioBacteria->bacteria_id . '/' . $time . '-' . $fileName;

        switch ($request->numero) {
            case 1:
                $caractFisioBacteria->imagen1 = $ruta;
                $caractFisioBacteria->imagenPublica1 = $rutaPublica;
                break;
            case 2:
                $caractFisioBacteria->imagen2 = $ruta;
                $caractFisioBacteria->imagenPublica2 = $rutaPublica;
                break;
            case 3:
                $caractFisioBacteria->imagen3 = $ruta;
                $caractFisioBacteria->imagenPublica3 = $rutaPublica;
                break;
        }
        $caractFisioBacteria->save();
        return $caractFisioBacteria;
    }
    public function cambiarImagen(Request $request, $id)
    {
        $caractFisioBacteria = CaracFisioBacteria::find($id);

        $file = $request->file('imagen');
        $fileName = $file->getClientOriginalName();
        $time = time();
        //agregar imagen nueva
        Storage::disk('local')->put('/public/bacterias/caract_fisio_img/' . $caractFisioBacteria->bacteria_id . '/' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/bacterias/caract_fisio_img/' . $caractFisioBacteria->bacteria_id . '/' . $time . '-' . $fileName;
        $rutaPublica = '/storage/bacterias/caract_fisio_img/' . $caractFisioBacteria->bacteria_id . '/' . $time . '-' . $fileName;

        switch ($request->numero) {
            case 1:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractFisioBacteria->imagen1);

                $caractFisioBacteria->imagen1 = $ruta;
                $caractFisioBacteria->imagenPublica1 = $rutaPublica;
                break;
            case 2:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractFisioBacteria->imagen2);

                $caractFisioBacteria->imagen2 = $ruta;
                $caractFisioBacteria->imagenPublica2 = $rutaPublica;
                break;
            case 3:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractFisioBacteria->imagen3);

                $caractFisioBacteria->imagen3 = $ruta;
                $caractFisioBacteria->imagenPublica3 = $rutaPublica;
                break;
        }
        $caractFisioBacteria->save();
        return $caractFisioBacteria;
    }

    public function elimarImagen(Request $request, $id)
    {
        $caractFisioBacteria = CaracFisioBacteria::find($id);
        switch ($request->numero) {
            case 1:
                Storage::disk('local')->delete($caractFisioBacteria->imagen1);
                $caractFisioBacteria->imagen1 = null;
                $caractFisioBacteria->imagenPublica1 = null;
                break;
            case 2:
                Storage::disk('local')->delete($caractFisioBacteria->imagen2);
                $caractFisioBacteria->imagen2 = null;
                $caractFisioBacteria->imagenPublica2 = null;
                break;
            case 3:
                Storage::disk('local')->delete($caractFisioBacteria->imagen3);
                $caractFisioBacteria->imagen3 = null;
                $caractFisioBacteria->imagenPublica3 = null;
                break;
        }
        $caractFisioBacteria->save();
        return $caractFisioBacteria;
    }
}
