<?php

namespace App\Http\Controllers;

use App\Bacteria;
use App\MetodoConserBacteria;
use App\Seguimiento;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class MetodoConserBacteriaController extends Controller
{

    public function store(Request $request)
    {
        $this->validarCampos($request);

        $bacteria = Bacteria::where('cepa_id', $request->cepaId)->first();

        $imagen = $this->guardarImagen($request->imagen, $bacteria->id);

        $fecha = Carbon::parse($request->fecha)->format('Y-m-d H:i:s');

        $metodoConserBacteria = new MetodoConserBacteria();
        $metodoConserBacteria->bacteria_id = $bacteria->id;
        $metodoConserBacteria->tipo_id = intval($request->tipo_metodo);
        $metodoConserBacteria->tipo_agar_id = intval($request->tipo_agar);
        $metodoConserBacteria->fecha = $fecha;
        $metodoConserBacteria->numero_replicas = intval($request->numero_replicas);
        $metodoConserBacteria->recuento_microgota = $request->recuento_microgota;
        $metodoConserBacteria->imagen = $imagen['ruta'];
        $metodoConserBacteria->imagenPublica =  $imagen['rutaPublica'];
        $metodoConserBacteria->save();

        $this->crearSeguimiento("Agregó un Método de Conservación a la Cepa: "
            . $bacteria->cepa->codigo);

        return $metodoConserBacteria;
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $this->validarCampos($request);
        $metodoConserBacteria = MetodoConserBacteria::find($id);

        $fecha = Carbon::parse($request->fecha)->format('Y-m-d H:i:s');

        $metodoConserBacteria->tipo_id = intval($request->tipo_metodo);
        $metodoConserBacteria->tipo_agar_id = intval($request->tipo_agar);
        $metodoConserBacteria->fecha = $fecha;
        $metodoConserBacteria->numero_replicas = intval($request->numero_replicas);
        $metodoConserBacteria->recuento_microgota = $request->recuento_microgota;

        if ($request->imagen != $metodoConserBacteria->imagen) {
            //eliminar imagen vieja
            Storage::disk('local')->delete($metodoConserBacteria->imagen);
            //agregar imagen nueva
            $imagen = $this->guardarImagen($request->imagen, $metodoConserBacteria->bacteria_id);

            $metodoConserBacteria->imagen =  $imagen['ruta'];
            $metodoConserBacteria->imagenPublica =  $imagen['rutaPublica'];
        }

        $metodoConserBacteria->save();

        $this->crearSeguimiento("Editó un Método de Conservación de la Cepa: "
            . $metodoConserBacteria->bacteria->cepa->codigo);

        return $metodoConserBacteria;
    }

    public function destroy($id)
    {
        $metodoConserBacteria = MetodoConserBacteria::find($id);
        //eliminar imagen 
        Storage::disk('local')->delete($metodoConserBacteria->imagen);
        $metodoConserBacteria->delete();

        $this->crearSeguimiento("Eliminó un Método de Conservación de la Cepa: "
            . $metodoConserBacteria->bacteria->cepa->codigo);

        return $metodoConserBacteria;
    }

    public function guardarImagen($imagen, $id)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name = Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '.png';
        Storage::disk('local')->put('/public/bacterias/metodo_conser_img/' . $id . '/' . $image_name, $data);
        $ruta = '/public/bacterias/metodo_conser_img/' . $id . '/' . $image_name;
        $rutaPublica = '/storage/bacterias/metodo_conser_img/' . $id . '/' . $image_name;
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
            'fecha' => 'required', 'recuento_microgota' => 'required',
            'tipo_metodo' => 'required', 'tipo_agar' => 'required',
            'numero_replicas' => 'bail|numeric|required'
        ];
        $this->validate($request, $rules);
    }
}
