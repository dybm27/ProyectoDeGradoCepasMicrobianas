<?php

namespace App\Http\Controllers;

use App\Bacteria;
use App\IdentiMolecuBacteria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class IdentiMolecuBacteriaController extends Controller
{
    public function store(Request $request)
    {
        $bacteria = Bacteria::where('cepa_id', $request->cepaId)->first();
        // img pcr
        $img_pcr = $this->guardarImagen($request->file('imagen_pcr'), $bacteria->id);
        // img secuencia
        $img_sec = $this->guardarImagen($request->file('imagen_sec'), $bacteria->id);

        $IdentiMolecuBacteria = new IdentiMolecuBacteria();
        $IdentiMolecuBacteria->bacteria_id = $bacteria->id;
        $IdentiMolecuBacteria->nombre_forward = $request->nombre_forward;
        $IdentiMolecuBacteria->nombre_reversed = $request->nombre_reversed;
        $IdentiMolecuBacteria->secuen_forward = $request->secuen_forward;
        $IdentiMolecuBacteria->secuen_reversed = $request->secuen_reversed;
        $IdentiMolecuBacteria->produc_forward = $request->produc_forward;
        $IdentiMolecuBacteria->produc_reversed = $request->produc_reversed;
        $IdentiMolecuBacteria->obser_secuenciacion = $request->obser_secuenciacion;
        $IdentiMolecuBacteria->img_pcr = $img_pcr['ruta'];
        $IdentiMolecuBacteria->img_pcrPublica = $img_pcr['rutaPublica'];
        $IdentiMolecuBacteria->img_secuen = $img_sec['ruta'];
        $IdentiMolecuBacteria->img_secuenPublica = $img_sec['rutaPublica'];
        $IdentiMolecuBacteria->save();

        return $IdentiMolecuBacteria;
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $imagen_pcr = $request->file('imagen_pcr');
        $imagen_sec = $request->file('imagen_sec');

        $IdentiMolecuBacteria = IdentiMolecuBacteria::find($id);

        if (!empty($imagen_pcr)) {
            Storage::disk('local')->delete($IdentiMolecuBacteria->img_pcr);
            $img_pcr = $this->guardarImagen($imagen_pcr, $IdentiMolecuBacteria->bacteria_id);
            $IdentiMolecuBacteria->img_pcr = $img_pcr['ruta'];
            $IdentiMolecuBacteria->img_pcrPublica = $img_pcr['rutaPublica'];
        }
        if (!empty($imagen_sec)) {
            Storage::disk('local')->delete($IdentiMolecuBacteria->img_secuen);
            $img_sec = $this->guardarImagen($imagen_sec, $IdentiMolecuBacteria->bacteria_id);
            $IdentiMolecuBacteria->img_secuen = $img_sec['ruta'];
            $IdentiMolecuBacteria->img_secuenPublica = $img_sec['rutaPublica'];
        }

        $IdentiMolecuBacteria->nombre_forward = $request->nombre_forward;
        $IdentiMolecuBacteria->nombre_reversed = $request->nombre_reversed;
        $IdentiMolecuBacteria->secuen_forward = $request->secuen_forward;
        $IdentiMolecuBacteria->secuen_reversed = $request->secuen_reversed;
        $IdentiMolecuBacteria->produc_forward = $request->produc_forward;
        $IdentiMolecuBacteria->produc_reversed = $request->produc_reversed;
        $IdentiMolecuBacteria->obser_secuenciacion = $request->obser_secuenciacion;
        $IdentiMolecuBacteria->save();

        return $IdentiMolecuBacteria;
    }

    public function destroy($id)
    {
        $IdentiMolecuBacteria = IdentiMolecuBacteria::find($id);
        //eliminar directorio
        Storage::deleteDirectory('/public/bacterias/identi_molecu_img/' . $IdentiMolecuBacteria->bacteria_id);
        $IdentiMolecuBacteria->delete();

        return $IdentiMolecuBacteria;
    }

    public function guardarImagen($file, $id)
    {
        $time = time();
        $fileName = $file->getClientOriginalName();
        Storage::disk('local')->put('/public/bacterias/identi_molecu_img/' . $id . '/' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/bacterias/identi_molecu_img/' . $id . '/' . $time . '-' . $fileName;
        $rutaPublica = '/storage/bacterias/identi_molecu_img/' . $id . '/' . $time . '-' . $fileName;
        return ['ruta' => $ruta, 'rutaPublica' => $rutaPublica];
    }
}
