<?php

namespace App\Http\Controllers;

use App\Actinomiceto;
use App\IdentBioquiActinomiceto;
use App\Seguimiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class IdentiBioquiActinomicetoController extends Controller
{
    public function store(Request $request)
    {
        $actinomiceto = Actinomiceto::where('cepa_id', $request->cepaId)->first();

        if (!empty($request->imagen1)) {
            $imagen1 = $this->guardarImagen($request->file('imagen1'), $actinomiceto->id);
            $ruta1 = $imagen1['ruta'];
            $rutaPublica1 = $imagen1['rutaPublica'];
        } else {
            $ruta1 = $request->imagen1;
            $rutaPublica1 = $request->imagen1;
        }
        if (!empty($request->imagen2)) {
            $imagen2 = $this->guardarImagen($request->file('imagen2'), $actinomiceto->id);
            $ruta2 = $imagen2['ruta'];
            $rutaPublica2 = $imagen2['rutaPublica'];
        } else {
            $ruta2 = $request->imagen2;
            $rutaPublica2 = $request->imagen2;
        }
        if (!empty($request->imagen3)) {
            $imagen3 = $this->guardarImagen($request->file('imagen3'), $actinomiceto->id);
            $ruta3 = $imagen3['ruta'];
            $rutaPublica3 = $imagen3['rutaPublica'];
        } else {
            $ruta3 = $request->imagen3;
            $rutaPublica3 = $request->imagen3;
        }

        $identiBioquiActinomiceto = new IdentBioquiActinomiceto();
        $identiBioquiActinomiceto->actinomiceto_id = $actinomiceto->id;
        $identiBioquiActinomiceto->oxidasa = $request->oxidasa;
        $identiBioquiActinomiceto->catalasa = $request->catalasa;
        $identiBioquiActinomiceto->citrato = $request->citrato;
        $identiBioquiActinomiceto->caseina = $request->caseina;
        $identiBioquiActinomiceto->sensi_antibioticos = $request->sensi_antibioticos;
        $identiBioquiActinomiceto->fer_manitol = $request->fer_manitol;
        $identiBioquiActinomiceto->fer_lactosa = $request->fer_lactosa;
        $identiBioquiActinomiceto->fer_inositol = $request->fer_inositol;
        $identiBioquiActinomiceto->nitrato = $request->nitrato;
        $identiBioquiActinomiceto->fer_sacarosa = $request->fer_sacarosa;
        $identiBioquiActinomiceto->hidro_gelatina = $request->hidro_gelatina;
        $identiBioquiActinomiceto->hidro_urea = $request->hidro_urea;
        $identiBioquiActinomiceto->otras_caract = $request->otras_caract;
        $identiBioquiActinomiceto->imagen1 = $ruta1;
        $identiBioquiActinomiceto->imagenPublica1 = $rutaPublica1;
        $identiBioquiActinomiceto->imagen2 = $ruta2;
        $identiBioquiActinomiceto->imagenPublica2 = $rutaPublica2;
        $identiBioquiActinomiceto->imagen3 = $ruta3;
        $identiBioquiActinomiceto->imagenPublica3 = $rutaPublica3;
        $identiBioquiActinomiceto->descripcion = $request->descripcion_imagenes;
        $identiBioquiActinomiceto->save();

        $this->crearSeguimiento("Agregó la Identificación Bioquíquimica a la Cepa: "
            . $actinomiceto->cepa->codigo);

        return $identiBioquiActinomiceto;
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $identiBioquiActinomiceto = IdentBioquiActinomiceto::find($id);

        $identiBioquiActinomiceto->oxidasa = $request->oxidasa;
        $identiBioquiActinomiceto->catalasa = $request->catalasa;
        $identiBioquiActinomiceto->citrato = $request->citrato;
        $identiBioquiActinomiceto->caseina = $request->caseina;
        $identiBioquiActinomiceto->sensi_antibioticos = $request->sensi_antibioticos;
        $identiBioquiActinomiceto->fer_manitol = $request->fer_manitol;
        $identiBioquiActinomiceto->fer_lactosa = $request->fer_lactosa;
        $identiBioquiActinomiceto->fer_inositol = $request->fer_inositol;
        $identiBioquiActinomiceto->nitrato = $request->nitrato;
        $identiBioquiActinomiceto->fer_sacarosa = $request->fer_sacarosa;
        $identiBioquiActinomiceto->hidro_gelatina = $request->hidro_gelatina;
        $identiBioquiActinomiceto->hidro_urea = $request->hidro_urea;
        $identiBioquiActinomiceto->otras_caract = $request->otras_caract;
        $identiBioquiActinomiceto->descripcion = $request->descripcion_imagenes;
        $identiBioquiActinomiceto->save();

        $this->crearSeguimiento("Editó la Identificación Bioquíquimica de la Cepa: "
            . $identiBioquiActinomiceto->actinomiceto->cepa->codigo);

        return $identiBioquiActinomiceto;
    }

    public function destroy($id)
    {
        $identiBioquiActinomiceto = IdentBioquiActinomiceto::find($id);
        //eliminar directorio
        Storage::deleteDirectory('/public/actinomicetos/identi_bioqui_img/' . $identiBioquiActinomiceto->actinomiceto_id);
        $identiBioquiActinomiceto->delete();

        $this->crearSeguimiento("Eliminó la Identificación Bioquíquimica de la Cepa: "
            . $identiBioquiActinomiceto->actinomiceto->cepa->codigo);

        return $identiBioquiActinomiceto;
    }
    public function agregarImagen(Request $request, $id)
    {
        $identiBioquiActinomiceto = IdentBioquiActinomiceto::find($id);

        $imagen = $this->guardarImagen($request->file('imagen'), $identiBioquiActinomiceto->actinomiceto_id);

        switch ($request->numero) {
            case 1:
                $identiBioquiActinomiceto->imagen1 =  $imagen['ruta'];
                $identiBioquiActinomiceto->imagenPublica1 =  $imagen['rutaPublica'];
                break;
            case 2:
                $identiBioquiActinomiceto->imagen2 =  $imagen['ruta'];
                $identiBioquiActinomiceto->imagenPublica2 =  $imagen['rutaPublica'];
                break;
            case 3:
                $identiBioquiActinomiceto->imagen3 =  $imagen['ruta'];
                $identiBioquiActinomiceto->imagenPublica3 =  $imagen['rutaPublica'];
                break;
        }
        $identiBioquiActinomiceto->save();

        $this->crearSeguimiento("Agregó una imagen a la Identificación Bioquíquimica de la Cepa: "
            . $identiBioquiActinomiceto->actinomiceto->cepa->codigo);

        return $identiBioquiActinomiceto;
    }
    public function cambiarImagen(Request $request, $id)
    {
        $identiBioquiActinomiceto = IdentBioquiActinomiceto::find($id);

        $imagen = $this->guardarImagen($request->file('imagen'), $identiBioquiActinomiceto->actinomiceto_id);


        switch ($request->numero) {
            case 1:
                //eliminar imagen vieja
                Storage::disk('local')->delete($identiBioquiActinomiceto->imagen1);

                $identiBioquiActinomiceto->imagen1 = $imagen['ruta'];
                $identiBioquiActinomiceto->imagenPublica1 = $imagen['rutaPublica'];
                break;
            case 2:
                //eliminar imagen vieja
                Storage::disk('local')->delete($identiBioquiActinomiceto->imagen2);

                $identiBioquiActinomiceto->imagen2 = $imagen['ruta'];
                $identiBioquiActinomiceto->imagenPublica2 = $imagen['rutaPublica'];
                break;
            case 3:
                //eliminar imagen vieja
                Storage::disk('local')->delete($identiBioquiActinomiceto->imagen3);

                $identiBioquiActinomiceto->imagen3 = $imagen['ruta'];
                $identiBioquiActinomiceto->imagenPublica3 = $imagen['rutaPublica'];
                break;
        }
        $identiBioquiActinomiceto->save();

        $this->crearSeguimiento("Cambió una imagen a la Identificación Bioquíquimica de la Cepa: "
            . $identiBioquiActinomiceto->actinomiceto->cepa->codigo);

        return $identiBioquiActinomiceto;
    }

    public function elimarImagen(Request $request, $id)
    {
        $identiBioquiActinomiceto = IdentBioquiActinomiceto::find($id);
        switch ($request->numero) {
            case 1:
                Storage::disk('local')->delete($identiBioquiActinomiceto->imagen1);
                $identiBioquiActinomiceto->imagen1 = null;
                $identiBioquiActinomiceto->imagenPublica1 = null;
                break;
            case 2:
                Storage::disk('local')->delete($identiBioquiActinomiceto->imagen2);
                $identiBioquiActinomiceto->imagen2 = null;
                $identiBioquiActinomiceto->imagenPublica2 = null;
                break;
            case 3:
                Storage::disk('local')->delete($identiBioquiActinomiceto->imagen3);
                $identiBioquiActinomiceto->imagen3 = null;
                $identiBioquiActinomiceto->imagenPublica3 = null;
                break;
        }
        $identiBioquiActinomiceto->save();

        $this->crearSeguimiento("Eliminó una imagen a la Identificación Bioquíquimica de la Cepa: "
            . $identiBioquiActinomiceto->actinomiceto->cepa->codigo);

        return $identiBioquiActinomiceto;
    }

    public function guardarImagen($file, $id)
    {
        $time = time();
        $fileName = $file->getClientOriginalName();
        Storage::disk('local')->put('/public/actinomicetos/identi_bioqui_img/' . $id . '/' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/actinomicetos/identi_bioqui_img/' . $id . '/' . $time . '-' . $fileName;
        $rutaPublica = '/storage/actinomicetos/identi_bioqui_img/' . $id . '/' . $time . '-' . $fileName;
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
