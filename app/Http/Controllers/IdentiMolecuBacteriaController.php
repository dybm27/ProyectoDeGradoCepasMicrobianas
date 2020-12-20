<?php

namespace App\Http\Controllers;

use App\Bacteria;
use App\IdentiMolecuBacteria;
use App\Seguimiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class IdentiMolecuBacteriaController extends Controller
{
    public function store(Request $request)
    {
        $this->validarCampos($request);
        $bacteria = Bacteria::where('cepa_id', $request->cepaId)->first();
        // img pcr
        $img_pcr = $this->guardarImagen($request->imagen1, $bacteria->id, 'pcr');
        // img secuencia
        $img_sec = $this->guardarImagen($request->imagen2, $bacteria->id, 'sec');

        $IdentiMolecuBacteria = new IdentiMolecuBacteria();
        $IdentiMolecuBacteria->bacteria_id = $bacteria->id;
        $IdentiMolecuBacteria->nombre_forward = $request->nombre_forward;
        $IdentiMolecuBacteria->nombre_reversed = $request->nombre_reversed;
        $IdentiMolecuBacteria->secuen_forward = $request->secuen_forward;
        $IdentiMolecuBacteria->secuen_reversed = $request->secuen_reversed;
        $IdentiMolecuBacteria->produc_forward = $request->produc_forward;
        $IdentiMolecuBacteria->produc_reversed = $request->produc_reversed;
        $IdentiMolecuBacteria->obser_secuenciacion = ucfirst($request->obser_secuenciacion);
        $IdentiMolecuBacteria->img_pcr = $img_pcr['ruta'];
        $IdentiMolecuBacteria->img_pcrPublica = $img_pcr['rutaPublica'];
        $IdentiMolecuBacteria->img_secuen = $img_sec['ruta'];
        $IdentiMolecuBacteria->img_secuenPublica = $img_sec['rutaPublica'];
        $IdentiMolecuBacteria->save();

        $this->crearSeguimiento("Agregó la Identificación Molecular a la Cepa: "
            . $bacteria->cepa->codigo);

        return $IdentiMolecuBacteria;
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $this->validarCampos($request);
        $IdentiMolecuBacteria = IdentiMolecuBacteria::find($id);

        if ($request->imagen1 != $IdentiMolecuBacteria->img_pcr) {
            Storage::disk('local')->delete($IdentiMolecuBacteria->img_pcr);
            $img_pcr = $this->guardarImagen($request->imagen1, $IdentiMolecuBacteria->bacteria_id, 'pcr');
            $IdentiMolecuBacteria->img_pcr = $img_pcr['ruta'];
            $IdentiMolecuBacteria->img_pcrPublica = $img_pcr['rutaPublica'];
        }
        if ($request->imagen2 != $IdentiMolecuBacteria->img_secuen) {
            Storage::disk('local')->delete($IdentiMolecuBacteria->img_secuen);
            $img_sec = $this->guardarImagen($request->imagen2, $IdentiMolecuBacteria->bacteria_id, 'sec');
            $IdentiMolecuBacteria->img_secuen = $img_sec['ruta'];
            $IdentiMolecuBacteria->img_secuenPublica = $img_sec['rutaPublica'];
        }

        $IdentiMolecuBacteria->nombre_forward = $request->nombre_forward;
        $IdentiMolecuBacteria->nombre_reversed = $request->nombre_reversed;
        $IdentiMolecuBacteria->secuen_forward = $request->secuen_forward;
        $IdentiMolecuBacteria->secuen_reversed = $request->secuen_reversed;
        $IdentiMolecuBacteria->produc_forward = $request->produc_forward;
        $IdentiMolecuBacteria->produc_reversed = $request->produc_reversed;
        $IdentiMolecuBacteria->obser_secuenciacion = ucfirst($request->obser_secuenciacion);
        $IdentiMolecuBacteria->save();

        $this->crearSeguimiento("Editó la Identificación Molecular de la Cepa: "
            . $IdentiMolecuBacteria->bacteria->cepa->codigo);

        return $IdentiMolecuBacteria;
    }

    public function destroy($id)
    {
        $IdentiMolecuBacteria = IdentiMolecuBacteria::find($id);
        //eliminar directorio
        Storage::deleteDirectory('/public/bacterias/identi_molecu_img/' . $IdentiMolecuBacteria->bacteria_id);
        $IdentiMolecuBacteria->delete();

        $this->crearSeguimiento("Eliminó la Identificación Molecular de la Cepa: "
            . $IdentiMolecuBacteria->bacteria->cepa->codigo);

        return $IdentiMolecuBacteria;
    }

    public function guardarImagen($imagen, $id, $tipo)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name = $tipo . '-' . Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '.jpg';
        Storage::disk('local')->put('/public/bacterias/identi_molecu_img/' . $id . '/' . $image_name, $data);
        $ruta = '/public/bacterias/identi_molecu_img/' . $id . '/' . $image_name;
        $rutaPublica = '/storage/bacterias/identi_molecu_img/' . $id . '/' . $image_name;
        return ['ruta' => $ruta, 'rutaPublica' => $rutaPublica];
    }

    public function crearSeguimiento($accion)
    {
        $seguimiento = new Seguimiento();
        $seguimiento->nombre_responsable = Auth::user()->name;
        $seguimiento->email_responsable = Auth::user()->email;
        $seguimiento->rol = Auth::user()->rol->nombre;
        $seguimiento->accion = $accion;
        $seguimiento->save();
    }

    public function validarCampos($request)
    {
        $rules = [
            'nombre_forward' => 'required', 'produc_forward' => 'required',
            'nombre_reversed' => 'required', 'produc_reversed' => 'required',
            'secuen_forward' => 'required', 'obser_secuenciacion' => 'required',
            'secuen_reversed' => 'required', 'imagen1' => 'required',
            'imagen2' => 'required'
        ];
        $this->validate($request, $rules);
    }
}
