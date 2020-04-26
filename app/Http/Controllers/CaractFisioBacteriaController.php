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
        $caractFisioBacteria = CaracFisioBacteria::find($id);

        $caractFisioBacteria->acido_indolacetico = $request->acido_indolacetico;
        $caractFisioBacteria->fosforo = $request->fosforo;
        $caractFisioBacteria->sideroforos = $request->sideroforos;
        $caractFisioBacteria->nitrogeno = $request->nitrogeno;
        $caractFisioBacteria->otras_caract = $request->otras_caract;
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

        $imagen = $this->guardarImagen($request->file('imagen'), $caractFisioBacteria->bacteria_id);

        switch ($request->numero) {
            case 1:
                $caractFisioBacteria->imagen1 = $imagen['ruta'];
                $caractFisioBacteria->imagenPublica1 =  $imagen['rutaPublica'];
                break;
            case 2:
                $caractFisioBacteria->imagen2 =  $imagen['ruta'];
                $caractFisioBacteria->imagenPublica2 = $imagen['rutaPublica'];
                break;
            case 3:
                $caractFisioBacteria->imagen3 =  $imagen['ruta'];
                $caractFisioBacteria->imagenPublica3 =  $imagen['rutaPublica'];
                break;
        }
        $caractFisioBacteria->save();
        return $caractFisioBacteria;
    }
    public function cambiarImagen(Request $request, $id)
    {
        $caractFisioBacteria = CaracFisioBacteria::find($id);

        $imagen = $this->guardarImagen($request->file('imagen'), $caractFisioBacteria->bacteria_id);

        switch ($request->numero) {
            case 1:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractFisioBacteria->imagen1);

                $caractFisioBacteria->imagen1 = $imagen['ruta'];
                $caractFisioBacteria->imagenPublica1 = $imagen['rutaPublica'];
                break;
            case 2:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractFisioBacteria->imagen2);

                $caractFisioBacteria->imagen2 = $imagen['ruta'];
                $caractFisioBacteria->imagenPublica2 = $imagen['rutaPublica'];
                break;
            case 3:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractFisioBacteria->imagen3);

                $caractFisioBacteria->imagen3 = $imagen['ruta'];
                $caractFisioBacteria->imagenPublica3 = $imagen['rutaPublica'];
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

    public function guardarImagen($file, $id)
    {
        $time = time();
        $fileName = $file->getClientOriginalName();
        Storage::disk('local')->put('/public/bacterias/caract_fisio_img/' . $id . '/' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/bacterias/caract_fisio_img/' . $id . '/' . $time . '-' . $fileName;
        $rutaPublica = '/storage/bacterias/caract_fisio_img/' . $id . '/' . $time . '-' . $fileName;
        return ['ruta' => $ruta, 'rutaPublica' => $rutaPublica];
    }
}
