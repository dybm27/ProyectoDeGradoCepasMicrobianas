<?php

namespace App\Http\Controllers;

use App\CaracBioquiHongo;
use App\HongoFilamentoso;
use App\Seguimiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class CaractBioquiHongoController extends Controller
{
    public function store(Request $request)
    {
        /*$rules = [
            'ordenamiento' => 'required'
        ];
        $this->validate($request, $rules);*/
        $hongo = HongoFilamentoso::where('cepa_id', $request->cepaId)->first();
        if (!empty($request->imagen1)) {
            $imagen1 = $this->guardarImagen($request->file('imagen1'), $hongo->id);
            $ruta1 = $imagen1['ruta'];
            $rutaPublica1 = $imagen1['rutaPublica'];
        } else {
            $ruta1 = $request->imagen1;
            $rutaPublica1 = $request->imagen1;
        }
        if (!empty($request->imagen2)) {
            $imagen2 = $this->guardarImagen($request->file('imagen2'), $hongo->id);
            $ruta2 = $imagen2['ruta'];
            $rutaPublica2 = $imagen2['rutaPublica'];
        } else {
            $ruta2 = $request->imagen2;
            $rutaPublica2 = $request->imagen2;
        }
        if (!empty($request->imagen3)) {
            $imagen3 = $this->guardarImagen($request->file('imagen3'), $hongo->id);
            $ruta3 = $imagen3['ruta'];
            $rutaPublica3 = $imagen3['rutaPublica'];
        } else {
            $ruta3 = $request->imagen3;
            $rutaPublica3 = $request->imagen3;
        }
        $caractBioquiHongo = new CaracBioquiHongo();
        $caractBioquiHongo->hongo_filamentoso_id = $hongo->id;
        $caractBioquiHongo->enzimas = ucfirst($request->enzimas);
        $caractBioquiHongo->azucares = ucfirst($request->azucares);

        $caractBioquiHongo->otras_caracteristicas = $request->otras_caract;
        $caractBioquiHongo->imagen1 = $ruta1;
        $caractBioquiHongo->imagenPublica1 = $rutaPublica1;
        $caractBioquiHongo->imagen2 = $ruta2;
        $caractBioquiHongo->imagenPublica2 = $rutaPublica2;
        $caractBioquiHongo->imagen3 = $ruta3;
        $caractBioquiHongo->imagenPublica3 = $rutaPublica3;
        $caractBioquiHongo->descripcion = $request->descripcion_imagenes;
        $caractBioquiHongo->save();

        $this->crearSeguimiento("Agregó la Característica Bioquíquimica a la Cepa: "
            . $hongo->cepa->codigo);

        return $caractBioquiHongo;
    }
    public function show($id)
    {
        //
    }
    public function update(Request $request, $id)
    {

        $caractBioquiHongo = CaracBioquiHongo::find($id);
        $caractBioquiHongo->enzimas = ucfirst($request->enzimas);
        $caractBioquiHongo->azucares = ucfirst($request->azucares);


        $caractBioquiHongo->otras_caracteristicas = $request->otras_caract;
        $caractBioquiHongo->descripcion = $request->descripcion_imagenes;
        $caractBioquiHongo->save();

        $this->crearSeguimiento("Editó la Característica Bioquíquimica de la Cepa: "
            . $caractBioquiHongo->hongoFilamentoso->cepa->codigo);

        return $caractBioquiHongo;
    }
    public function destroy($id)
    {
        $caractBioquiHongo = CaracBioquiHongo::find($id);
        //eliminar directorio
        Storage::deleteDirectory('/public/hongos/caract_bioqui_img/' . $caractBioquiHongo->hongo_filamentoso_id);
        $caractBioquiHongo->delete();

        $this->crearSeguimiento("Eliminó la Característica Bioquíquimica de la Cepa: "
            . $caractBioquiHongo->hongoFilamentoso->cepa->codigo);

        return $caractBioquiHongo;
    }
    public function agregarImagen(Request $request, $id)
    {
        $caractBioquiHongo = CaracBioquiHongo::find($id);
        $imagen = $this->guardarImagen($request->file('imagen'), $caractBioquiHongo->hongo_filamentoso_id);

        switch ($request->numero) {
            case 1:
                $caractBioquiHongo->imagen1 = $imagen['ruta'];
                $caractBioquiHongo->imagenPublica1 = $imagen['rutaPublica'];
                break;
            case 2:
                $caractBioquiHongo->imagen2 = $imagen['ruta'];
                $caractBioquiHongo->imagenPublica2 = $imagen['rutaPublica'];
                break;
            case 3:
                $caractBioquiHongo->imagen3 = $imagen['ruta'];
                $caractBioquiHongo->imagenPublica3 = $imagen['rutaPublica'];
                break;
        }
        $caractBioquiHongo->save();

        $this->crearSeguimiento("Agregó una imagen a la Característica Bioquíquimica de la Cepa: "
            . $caractBioquiHongo->hongoFilamentoso->cepa->codigo);

        return $caractBioquiHongo;
    }
    public function cambiarImagen(Request $request, $id)
    {
        $caractBioquiHongo = CaracBioquiHongo::find($id);

        $imagen = $this->guardarImagen($request->file('imagen'), $caractBioquiHongo->hongo_filamentoso_id);

        switch ($request->numero) {
            case 1:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractBioquiHongo->imagen1);
                $caractBioquiHongo->imagen1 = $imagen['ruta'];
                $caractBioquiHongo->imagenPublica1 = $imagen['rutaPublica'];
                break;
            case 2:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractBioquiHongo->imagen2);
                $caractBioquiHongo->imagen2 =  $imagen['ruta'];
                $caractBioquiHongo->imagenPublica2 = $imagen['rutaPublica'];
                break;
            case 3:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractBioquiHongo->imagen3);
                $caractBioquiHongo->imagen3 =  $imagen['ruta'];
                $caractBioquiHongo->imagenPublica3 = $imagen['rutaPublica'];
                break;
        }
        $caractBioquiHongo->save();

        $this->crearSeguimiento("Cambió una imagen a la Característica Bioquíquimica de la Cepa: "
            . $caractBioquiHongo->hongoFilamentoso->cepa->codigo);

        return $caractBioquiHongo;
    }
    public function elimarImagen(Request $request, $id)
    {
        $caractBioquiHongo = CaracBioquiHongo::find($id);
        switch ($request->numero) {
            case 1:
                Storage::disk('local')->delete($caractBioquiHongo->imagen1);
                $caractBioquiHongo->imagen1 = null;
                $caractBioquiHongo->imagenPublica1 = null;
                break;
            case 2:
                Storage::disk('local')->delete($caractBioquiHongo->imagen2);
                $caractBioquiHongo->imagen2 = null;
                $caractBioquiHongo->imagenPublica2 = null;
                break;
            case 3:
                Storage::disk('local')->delete($caractBioquiHongo->imagen3);
                $caractBioquiHongo->imagen3 = null;
                $caractBioquiHongo->imagenPublica3 = null;
                break;
        }
        $caractBioquiHongo->save();

        $this->crearSeguimiento("Eliminó una imagen a la Característica Bioquíquimica de la Cepa: "
            . $caractBioquiHongo->hongoFilamentoso->cepa->codigo);

        return $caractBioquiHongo;
    }

    public function guardarImagen($file, $id)
    {
        $time = time();
        $fileName = $file->getClientOriginalName();
        Storage::disk('local')->put('/public/hongos/caract_bioqui_img/' . $id . '/' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/hongos/caract_bioqui_img/' . $id . '/' . $time . '-' . $fileName;
        $rutaPublica = '/storage/hongos/caract_bioqui_img/' . $id . '/' . $time . '-' . $fileName;
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
}
