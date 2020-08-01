<?php

namespace App\Http\Controllers;

use App\Bacteria;
use App\CaracFisioBacteria;
use App\Seguimiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class CaractFisioBacteriaController extends Controller
{
    public function store(Request $request)
    {
        $this->validarCampos($request);
        $bacteria = Bacteria::where('cepa_id', $request->cepaId)->first();
        if (!is_null($request->imagen1)) {
            $imagen1 = $this->guardarImagen($request->imagen1, $bacteria->id, 1);
            $ruta1 =  $imagen1['ruta'];
            $rutaPublica1 =  $imagen1['rutaPublica'];
        } else {
            $ruta1 = $request->imagen1;
            $rutaPublica1 = $request->imagen1;
        }
        if (!is_null($request->imagen2)) {
            $imagen2 = $this->guardarImagen($request->imagen2, $bacteria->id, 2);
            $ruta2 =  $imagen2['ruta'];
            $rutaPublica2 =  $imagen2['rutaPublica'];
        } else {
            $ruta2 = $request->imagen2;
            $rutaPublica2 = $request->imagen2;
        }
        if (!is_null($request->imagen3)) {
            $imagen3 = $this->guardarImagen($request->imagen3, $bacteria->id, 3);
            $ruta3 =  $imagen3['ruta'];
            $rutaPublica3 =  $imagen3['rutaPublica'];
        } else {
            $ruta3 = $request->imagen3;
            $rutaPublica3 = $request->imagen3;
        }


        $caractFisioBacteria = new CaracFisioBacteria();
        $caractFisioBacteria->bacteria_id = $bacteria->id;
        $caractFisioBacteria->acido_indolacetico = ucfirst($request->acido_indolacetico);
        $caractFisioBacteria->fosforo = ucfirst($request->fosforo);
        $caractFisioBacteria->sideroforos = ucfirst($request->sideroforos);
        $caractFisioBacteria->nitrogeno = ucfirst($request->nitrogeno);
        $caractFisioBacteria->otras_caract = $request->otras_caract;
        $caractFisioBacteria->imagen1 = $ruta1;
        $caractFisioBacteria->imagenPublica1 = $rutaPublica1;
        $caractFisioBacteria->imagen2 = $ruta2;
        $caractFisioBacteria->imagenPublica2 = $rutaPublica2;
        $caractFisioBacteria->imagen3 = $ruta3;
        $caractFisioBacteria->imagenPublica3 = $rutaPublica3;
        $caractFisioBacteria->save();

        $this->crearSeguimiento("Agregó la Característica Fisiológica a la Cepa: "
            . $bacteria->cepa->codigo);

        return $caractFisioBacteria;
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $this->validarCampos($request);
        $caractFisioBacteria = CaracFisioBacteria::find($id);

        $caractFisioBacteria->acido_indolacetico = ucfirst($request->acido_indolacetico);
        $caractFisioBacteria->fosforo = ucfirst($request->fosforo);
        $caractFisioBacteria->sideroforos = ucfirst($request->sideroforos);
        $caractFisioBacteria->nitrogeno = ucfirst($request->nitrogeno);
        $caractFisioBacteria->otras_caract = $request->otras_caract;
        $caractFisioBacteria->save();

        $this->crearSeguimiento("Editó la Característica Fisiológica de la Cepa: "
            . $caractFisioBacteria->bacteria->cepa->codigo);

        return $caractFisioBacteria;
    }

    public function destroy($id)
    {
        $caractFisioBacteria = CaracFisioBacteria::find($id);
        //eliminar directorio
        Storage::deleteDirectory('/public/bacterias/caract_fisio_img/' . $caractFisioBacteria->bacteria_id);
        $caractFisioBacteria->delete();

        $this->crearSeguimiento("Eliminó la Característica Fisiológica de la Cepa: "
            . $caractFisioBacteria->bacteria->cepa->codigo);

        return $caractFisioBacteria;
    }
    public function agregarImagen(Request $request, $id)
    {
        $caractFisioBacteria = CaracFisioBacteria::find($id);

        $imagen = $this->guardarImagen($request->imagen, $caractFisioBacteria->bacteria_id, $request->numero);

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

        $this->crearSeguimiento("Agregó una imagen a la Característica Fisiológica de la Cepa: "
            . $caractFisioBacteria->bacteria->cepa->codigo);

        return $caractFisioBacteria;
    }
    public function cambiarImagen(Request $request, $id)
    {
        $caractFisioBacteria = CaracFisioBacteria::find($id);

        $imagen = $this->guardarImagen($request->imagen, $caractFisioBacteria->bacteria_id, $request->numero);

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

        $this->crearSeguimiento("Cambió una imagen a la Característica Fisiológica de la Cepa: "
            . $caractFisioBacteria->bacteria->cepa->codigo);

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

        $this->crearSeguimiento("Eliminó una imagen a la Característica Fisiológica de la Cepa: "
            . $caractFisioBacteria->bacteria->cepa->codigo);

        return $caractFisioBacteria;
    }

    public function guardarImagen($imagen, $id, $num)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name = $num . '-' . Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '.png';
        Storage::disk('local')->put('/public/bacterias/caract_fisio_img/' . $id . '/' . $image_name, $data);
        $ruta = '/public/bacterias/caract_fisio_img/' . $id . '/' . $image_name;
        $rutaPublica = '/storage/bacterias/caract_fisio_img/' . $id . '/' . $image_name;
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
            'acido_indolacetico' => 'required', 'fosforo' => 'required',
            'sideroforos' => 'required', 'nitrogeno' => 'required'
        ];
        $this->validate($request, $rules);
    }
}
