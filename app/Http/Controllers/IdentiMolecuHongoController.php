<?php

namespace App\Http\Controllers;

use App\HongoFilamentoso;
use App\IdentiMolecuHongo;
use App\Seguimiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class IdentiMolecuHongoController extends Controller
{
    public function store(Request $request)
    {
        $hongo = HongoFilamentoso::where('cepa_id', $request->cepaId)->first();
        // img pcr
        $imagen_pcr = $this->guardarImagen($request->imagen_pcr, $hongo->id, 'pcr');

        $imagen_blast = $this->guardarImagen($request->imagen_blast, $hongo->id, 'blast');

        $IdentiMolecuHongo = new IdentiMolecuHongo();
        $IdentiMolecuHongo->hongo_filamentoso_id = $hongo->id;
        $IdentiMolecuHongo->nombre_forward = $request->nombre_forward;
        $IdentiMolecuHongo->nombre_reversed = $request->nombre_reversed;
        $IdentiMolecuHongo->secuencia_forward = $request->secuencia_forward;
        $IdentiMolecuHongo->secuencia_reversed = $request->secuencia_reversed;
        $IdentiMolecuHongo->producto_forward = $request->producto_forward;
        $IdentiMolecuHongo->producto_reversed = $request->producto_reversed;

        $IdentiMolecuHongo->condiciones_pcr = $request->condiciones_pcr;
        $IdentiMolecuHongo->blast = $request->blast;
        $IdentiMolecuHongo->analisis_filogenetico = $request->analisis_filogenetico;
        $IdentiMolecuHongo->observaciones = $request->observaciones;

        $IdentiMolecuHongo->imagen_pcr = $imagen_pcr['ruta'];
        $IdentiMolecuHongo->imagen_pcrPublica = $imagen_pcr['rutaPublica'];
        $IdentiMolecuHongo->imagen_blast = $imagen_blast['ruta'];
        $IdentiMolecuHongo->imagen_blastPublica = $imagen_blast['rutaPublica'];
        $IdentiMolecuHongo->save();

        $this->crearSeguimiento("Agregó la Identificación Molecular a la Cepa: "
            . $hongo->cepa->codigo);

        return $IdentiMolecuHongo;
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $IdentiMolecuHongo = IdentiMolecuHongo::find($id);

        if ($request->imagen_pcr != $IdentiMolecuHongo->imagen_pcr) {
            Storage::disk('local')->delete($IdentiMolecuHongo->imagen_pcr);
            $imagen_pcr = $this->guardarImagen($request->imagen_pcr, $IdentiMolecuHongo->bateria_id, 'pcr');
            $IdentiMolecuHongo->imagen_pcr = $imagen_pcr['ruta'];
            $IdentiMolecuHongo->imagen_pcrPublica = $imagen_pcr['rutaPublica'];
        }
        if ($request->imagen_blast != $IdentiMolecuHongo->imagen_blast) {
            Storage::disk('local')->delete($IdentiMolecuHongo->imagen_blast);
            $imagen_blast = $this->guardarImagen($request->imagen_blast, $IdentiMolecuHongo->hongo_filamentoso_id, 'blast');
            $IdentiMolecuHongo->imagen_blast = $imagen_blast['ruta'];
            $IdentiMolecuHongo->imagen_blastPublica = $imagen_blast['rutaPublica'];
        }

        $IdentiMolecuHongo->nombre_forward = $request->nombre_forward;
        $IdentiMolecuHongo->nombre_reversed = $request->nombre_reversed;
        $IdentiMolecuHongo->secuencia_forward = $request->secuencia_forward;
        $IdentiMolecuHongo->secuencia_reversed = $request->secuencia_reversed;
        $IdentiMolecuHongo->producto_forward = $request->producto_forward;
        $IdentiMolecuHongo->producto_reversed = $request->producto_reversed;

        $IdentiMolecuHongo->condiciones_pcr = $request->condiciones_pcr;
        $IdentiMolecuHongo->blast = $request->blast;
        $IdentiMolecuHongo->analisis_filogenetico = $request->analisis_filogenetico;
        $IdentiMolecuHongo->observaciones = $request->observaciones;

        $IdentiMolecuHongo->save();

        $this->crearSeguimiento("Editó la Identificación Molecular de la Cepa: "
            . $IdentiMolecuHongo->hongoFilamentoso->cepa->codigo);

        return $IdentiMolecuHongo;
    }

    public function destroy($id)
    {
        $IdentiMolecuHongo = IdentiMolecuHongo::find($id);
        //eliminar directorio
        Storage::deleteDirectory('/public/hongos/identi_molecu_img/' . $IdentiMolecuHongo->hongo_filamentoso_id);
        $IdentiMolecuHongo->delete();

        $this->crearSeguimiento("Eliminó la Identificación Molecular de la Cepa: "
            . $IdentiMolecuHongo->hongoFilamentoso->cepa->codigo);

        return $IdentiMolecuHongo;
    }

    public function guardarImagen($imagen, $id, $tipo)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name = $tipo . '-' . Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '.png';
        Storage::disk('local')->put('/public/hongos/identi_molecu_img/' . $id . '/' . $image_name, $data);
        $ruta = '/public/hongos/identi_molecu_img/' . $id . '/' . $image_name;
        $rutaPublica = '/storage/hongos/identi_molecu_img/' . $id . '/' . $image_name;
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
