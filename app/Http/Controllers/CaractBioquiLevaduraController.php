<?php

namespace App\Http\Controllers;

use App\CaracBioquiLevadura;
use App\Levadura;
use App\Seguimiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class caractBioquiLevaduraController extends Controller
{
    public function store(Request $request)
    {
        $levadura = Levadura::where('cepa_id', $request->cepaId)->first();


        if (!empty($request->imagen1)) {
            $imagen1 = $this->guardarImagen($request->file('imagen1'), $levadura->id);
            $ruta1 = $imagen1['ruta'];
            $rutaPublica1 = $imagen1['rutaPublica'];
        } else {
            $ruta1 = $request->imagen1;
            $rutaPublica1 = $request->imagen1;
        }
        if (!empty($request->imagen2)) {
            $imagen2 = $this->guardarImagen($request->file('imagen2'), $levadura->id);
            $ruta2 = $imagen2['ruta'];
            $rutaPublica2 = $imagen2['rutaPublica'];
        } else {
            $ruta2 = $request->imagen2;
            $rutaPublica2 = $request->imagen2;
        }
        if (!empty($request->imagen3)) {
            $imagen3 = $this->guardarImagen($request->file('imagen3'), $levadura->id);
            $ruta3 = $imagen3['ruta'];
            $rutaPublica3 = $imagen3['rutaPublica'];
        } else {
            $ruta3 = $request->imagen3;
            $rutaPublica3 = $request->imagen3;
        }

        $caractBioquiLevadura = new CaracBioquiLevadura();
        $caractBioquiLevadura->levadura_id = $levadura->id;
        $caractBioquiLevadura->crecimiento = $request->crecimiento;
        $caractBioquiLevadura->ureasa = ucfirst($request->ureasa);
        $caractBioquiLevadura->fenol_oxidasa = ucfirst($request->fenol_oxidasa);
        $caractBioquiLevadura->produccion_acido = ucfirst($request->produccion_acido);
        $caractBioquiLevadura->termotolerancia_37 = $request->termotolerancia_37;
        $caractBioquiLevadura->termotolerancia_42 = $request->termotolerancia_42;
        $caractBioquiLevadura->termotolerancia_45 = $request->termotolerancia_45;
        $caractBioquiLevadura->termotolerancia_otra = $request->termotolerancia_otra;
        $caractBioquiLevadura->nitratos = ucfirst($request->nitratos);
        $caractBioquiLevadura->otras_caract = $request->otras_caract;
        $caractBioquiLevadura->imagen1 = $ruta1;
        $caractBioquiLevadura->imagenPublica1 = $rutaPublica1;
        $caractBioquiLevadura->imagen2 = $ruta2;
        $caractBioquiLevadura->imagenPublica2 = $rutaPublica2;
        $caractBioquiLevadura->imagen3 = $ruta3;
        $caractBioquiLevadura->imagenPublica3 = $rutaPublica3;
        $caractBioquiLevadura->descripcion = $request->descripcion_imagenes;
        $caractBioquiLevadura->save();

        $this->crearSeguimiento("Agregó la Característica Bioquíquimica a la Cepa: "
            . $levadura->cepa->codigo);

        return $caractBioquiLevadura;
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

        $caractBioquiLevadura = CaracBioquiLevadura::find($id);

        $caractBioquiLevadura->crecimiento = $request->crecimiento;
        $caractBioquiLevadura->ureasa = ucfirst($request->ureasa);
        $caractBioquiLevadura->fenol_oxidasa = ucfirst($request->fenol_oxidasa);
        $caractBioquiLevadura->produccion_acido = ucfirst($request->produccion_acido);
        $caractBioquiLevadura->termotolerancia_37 = $request->termotolerancia_37;
        $caractBioquiLevadura->termotolerancia_42 = $request->termotolerancia_42;
        $caractBioquiLevadura->termotolerancia_45 = $request->termotolerancia_45;
        $caractBioquiLevadura->termotolerancia_otra = $request->termotolerancia_otra;
        $caractBioquiLevadura->nitratos = ucfirst($request->nitratos);
        $caractBioquiLevadura->otras_caract = $request->otras_caract;
        $caractBioquiLevadura->descripcion = $request->descripcion_imagenes;
        $caractBioquiLevadura->save();

        $this->crearSeguimiento("Editó la Característica Bioquíquimica de la Cepa: "
            . $caractBioquiLevadura->levadura->cepa->codigo);

        return $caractBioquiLevadura;
    }

    public function destroy($id)
    {
        $caractBioquiLevadura = CaracBioquiLevadura::find($id);
        //eliminar directorio
        Storage::deleteDirectory('/public/levaduras/caract_bioqui_img/' . $caractBioquiLevadura->levadura_id);
        $caractBioquiLevadura->delete();

        $this->crearSeguimiento("Eliminó la Característica Bioquíquimica de la Cepa: "
            . $caractBioquiLevadura->levadura->cepa->codigo);

        return $caractBioquiLevadura;
    }
    public function agregarImagen(Request $request, $id)
    {
        $caractBioquiLevadura = CaracBioquiLevadura::find($id);

        $imagen = $this->guardarImagen($request->file('imagen'), $caractBioquiLevadura->levadura_id);

        switch ($request->numero) {
            case 1:
                $caractBioquiLevadura->imagen1 = $imagen['ruta'];
                $caractBioquiLevadura->imagenPublica1 = $imagen['rutaPublica'];
                break;
            case 2:
                $caractBioquiLevadura->imagen2 = $imagen['ruta'];
                $caractBioquiLevadura->imagenPublica2 = $imagen['rutaPublica'];
                break;
            case 3:
                $caractBioquiLevadura->imagen3 = $imagen['ruta'];
                $caractBioquiLevadura->imagenPublica3 = $imagen['rutaPublica'];
                break;
        }
        $caractBioquiLevadura->save();

        $this->crearSeguimiento("Agregó una imagen a la Característica Bioquíquimica de la Cepa: "
            . $caractBioquiLevadura->levadura->cepa->codigo);

        return $caractBioquiLevadura;
    }
    public function cambiarImagen(Request $request, $id)
    {
        $caractBioquiLevadura = CaracBioquiLevadura::find($id);

        $imagen = $this->guardarImagen($request->file('imagen'), $caractBioquiLevadura->levadura_id);

        switch ($request->numero) {
            case 1:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractBioquiLevadura->imagen1);

                $caractBioquiLevadura->imagen1 = $imagen['ruta'];
                $caractBioquiLevadura->imagenPublica1 = $imagen['rutaPublica'];
                break;
            case 2:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractBioquiLevadura->imagen2);

                $caractBioquiLevadura->imagen2 = $imagen['ruta'];
                $caractBioquiLevadura->imagenPublica2 = $imagen['rutaPublica'];
                break;
            case 3:
                //eliminar imagen vieja
                Storage::disk('local')->delete($caractBioquiLevadura->imagen3);

                $caractBioquiLevadura->imagen3 = $imagen['ruta'];
                $caractBioquiLevadura->imagenPublica3 = $imagen['rutaPublica'];
                break;
        }
        $caractBioquiLevadura->save();

        $this->crearSeguimiento("Cambió una imagen a la Característica Bioquíquimica de la Cepa: "
            . $caractBioquiLevadura->levadura->cepa->codigo);

        return $caractBioquiLevadura;
    }

    public function elimarImagen(Request $request, $id)
    {
        $caractBioquiLevadura = CaracBioquiLevadura::find($id);
        switch ($request->numero) {
            case 1:
                Storage::disk('local')->delete($caractBioquiLevadura->imagen1);
                $caractBioquiLevadura->imagen1 = null;
                $caractBioquiLevadura->imagenPublica1 = null;
                break;
            case 2:
                Storage::disk('local')->delete($caractBioquiLevadura->imagen2);
                $caractBioquiLevadura->imagen2 = null;
                $caractBioquiLevadura->imagenPublica2 = null;
                break;
            case 3:
                Storage::disk('local')->delete($caractBioquiLevadura->imagen3);
                $caractBioquiLevadura->imagen3 = null;
                $caractBioquiLevadura->imagenPublica3 = null;
                break;
        }
        $caractBioquiLevadura->save();

        $this->crearSeguimiento("Eliminó una imagen a la Característica Bioquíquimica de la Cepa: "
            . $caractBioquiLevadura->levadura->cepa->codigo);

        return $caractBioquiLevadura;
    }

    public function guardarImagen($file, $id)
    {
        $time = time();
        $fileName = $file->getClientOriginalName();
        Storage::disk('local')->put('/public/levaduras/caract_bioqui_img/' . $id . '/' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/levaduras/caract_bioqui_img/' . $id . '/' . $time . '-' . $fileName;
        $rutaPublica = '/storage/levaduras/caract_bioqui_img/' . $id . '/' . $time . '-' . $fileName;
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
