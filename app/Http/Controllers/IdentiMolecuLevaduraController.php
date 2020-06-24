<?php

namespace App\Http\Controllers;

use App\IdentiMolecuLevadura;
use App\Levadura;
use App\Seguimiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class IdentiMolecuLevaduraController extends Controller
{
    public function store(Request $request)
    {
        $levadura = Levadura::where('cepa_id', $request->cepaId)->first();

        $imagen_pcr = $this->guardarImagen($request->imagen_pcr, $levadura->id, 'pcr');

        $imagen_blast = $this->guardarImagen($request->imagen_blast, $levadura->id, 'blast');

        $IdentiMolecuLevadura = new IdentiMolecuLevadura();
        $IdentiMolecuLevadura->levadura_id = $levadura->id;
        $IdentiMolecuLevadura->nombre_forward = $request->nombre_forward;
        $IdentiMolecuLevadura->nombre_reversed = $request->nombre_reversed;
        $IdentiMolecuLevadura->secuencia_forward = $request->secuencia_forward;
        $IdentiMolecuLevadura->secuencia_reversed = $request->secuencia_reversed;
        $IdentiMolecuLevadura->producto_forward = $request->producto_forward;
        $IdentiMolecuLevadura->producto_reversed = $request->producto_reversed;
        $IdentiMolecuLevadura->condiciones_pcr = $request->condiciones_pcr;
        $IdentiMolecuLevadura->blast = $request->blast;
        $IdentiMolecuLevadura->analisis_filogenetico = $request->analisis_filogenetico;
        $IdentiMolecuLevadura->observaciones = $request->observaciones;
        $IdentiMolecuLevadura->imagen_pcr = $imagen_pcr['ruta'];
        $IdentiMolecuLevadura->imagen_pcrPublica = $imagen_pcr['rutaPublica'];
        $IdentiMolecuLevadura->imagen_blast = $imagen_blast['ruta'];
        $IdentiMolecuLevadura->imagen_blastPublica = $imagen_blast['rutaPublica'];
        $IdentiMolecuLevadura->save();

        $this->crearSeguimiento("Agregó la Identificación Molecular a la Cepa: "
            . $levadura->cepa->codigo);

        return $IdentiMolecuLevadura;
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $IdentiMolecuLevadura = IdentiMolecuLevadura::find($id);

        if ($request->imagen_pcr != $IdentiMolecuLevadura->imagen_pcr) {
            Storage::disk('local')->delete($IdentiMolecuLevadura->imagen_pcr);
            $imagen_pcr = $this->guardarImagen($request->imagen_pcr, $IdentiMolecuLevadura->levadura_id, 'pcr');
            $IdentiMolecuLevadura->imagen_pcr = $imagen_pcr['ruta'];
            $IdentiMolecuLevadura->imagen_pcrPublica = $imagen_pcr['rutaPublica'];
        }
        if ($request->imagen_blast != $IdentiMolecuLevadura->imagen_blast) {
            Storage::disk('local')->delete($IdentiMolecuLevadura->imagen_blast);
            $imagen_blast = $this->guardarImagen($request->imagen_blast, $IdentiMolecuLevadura->levadura_id, 'blast');
            $IdentiMolecuLevadura->imagen_blast = $imagen_blast['ruta'];
            $IdentiMolecuLevadura->imagen_blastPublica = $imagen_blast['rutaPublica'];
        }

        $IdentiMolecuLevadura->nombre_forward = $request->nombre_forward;
        $IdentiMolecuLevadura->nombre_reversed = $request->nombre_reversed;
        $IdentiMolecuLevadura->secuencia_forward = $request->secuencia_forward;
        $IdentiMolecuLevadura->secuencia_reversed = $request->secuencia_reversed;
        $IdentiMolecuLevadura->producto_forward = $request->producto_forward;
        $IdentiMolecuLevadura->producto_reversed = $request->producto_reversed;
        $IdentiMolecuLevadura->condiciones_pcr = $request->condiciones_pcr;
        $IdentiMolecuLevadura->blast = $request->blast;
        $IdentiMolecuLevadura->analisis_filogenetico = $request->analisis_filogenetico;
        $IdentiMolecuLevadura->observaciones = $request->observaciones;
        $IdentiMolecuLevadura->save();

        $this->crearSeguimiento("Editó la Identificación Molecular de la Cepa: "
            . $IdentiMolecuLevadura->levadura->cepa->codigo);

        return $IdentiMolecuLevadura;
    }

    public function destroy($id)
    {
        $IdentiMolecuLevadura = IdentiMolecuLevadura::find($id);
        //eliminar directorio
        Storage::deleteDirectory('/public/levaduras/identi_molecu_img/' . $IdentiMolecuLevadura->levadura_id);
        $IdentiMolecuLevadura->delete();

        $this->crearSeguimiento("Eliminó la Identificación Molecular de la Cepa: "
            . $IdentiMolecuLevadura->levadura->cepa->codigo);

        return $IdentiMolecuLevadura;
    }

    public function guardarImagen($imagen, $id, $tipo)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name = $tipo . '-' . Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '.png';
        Storage::disk('local')->put('/public/levaduras/identi_molecu_img/' . $id . '/' . $image_name, $data);
        $ruta = '/public/levaduras/identi_molecu_img/' . $id . '/' . $image_name;
        $rutaPublica = '/storage/levaduras/identi_molecu_img/' . $id . '/' . $image_name;
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
