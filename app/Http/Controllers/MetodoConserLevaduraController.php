<?php

namespace App\Http\Controllers;

use App\Levadura;
use App\MetodoConserLevadura;
use App\Seguimiento;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class MetodoConserLevaduraController extends Controller
{
    public function store(Request $request)
    {
        $this->validarCampos($request);

        $levadura = Levadura::where('cepa_id', $request->cepaId)->first();

        $imagen = $this->guardarImagen($request->imagen, $levadura->id);

        $fecha = Carbon::parse($request->fecha)->format('Y-m-d H:i:s');

        $metodoConserLevadura = new MetodoConserLevadura();
        $metodoConserLevadura->levadura_id = $levadura->id;
        $metodoConserLevadura->tipo_id = intval($request->tipo_metodo);
        $metodoConserLevadura->fecha = $fecha;
        $metodoConserLevadura->numero_replicas = intval($request->numero_replicas);
        $metodoConserLevadura->numero_pases = intval($request->numero_pases);
        $metodoConserLevadura->recuento_microgota = $request->recuento_microgota;
        $metodoConserLevadura->medio_cultivo = $request->medio_cultivo;
        $metodoConserLevadura->observaciones = $request->observaciones;
        $metodoConserLevadura->imagen = $imagen['ruta'];
        $metodoConserLevadura->imagenPublica =  $imagen['rutaPublica'];
        $metodoConserLevadura->save();

        $this->crearSeguimiento("Agregó un Método de Conservación a la Cepa: "
            . $levadura->cepa->codigo);

        return $metodoConserLevadura;
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $this->validarCampos($request);

        $metodoConserLevadura = MetodoConserLevadura::find($id);

        $fecha = Carbon::parse($request->fecha)->format('Y-m-d H:i:s');

        $metodoConserLevadura->tipo_id = intval($request->tipo_metodo);
        $metodoConserLevadura->fecha = $fecha;
        $metodoConserLevadura->numero_replicas = intval($request->numero_replicas);
        $metodoConserLevadura->numero_pases = intval($request->numero_pases);
        $metodoConserLevadura->recuento_microgota = $request->recuento_microgota;
        $metodoConserLevadura->medio_cultivo = $request->medio_cultivo;
        $metodoConserLevadura->observaciones = $request->observaciones;

        if ($request->imagen != $metodoConserLevadura->imagen) {
            //eliminar imagen vieja
            Storage::disk('local')->delete($metodoConserLevadura->imagen);
            //agregar imagen nueva
            $imagen = $this->guardarImagen($request->imagen, $metodoConserLevadura->levadura_id);

            $metodoConserLevadura->imagen =  $imagen['ruta'];
            $metodoConserLevadura->imagenPublica =  $imagen['rutaPublica'];
        }

        $metodoConserLevadura->save();

        $this->crearSeguimiento("Editó un Método de Conservación de la Cepa: "
            . $metodoConserLevadura->levadura->cepa->codigo);

        return $metodoConserLevadura;
    }

    public function destroy($id)
    {
        $metodoConserLevadura = MetodoConserLevadura::find($id);
        //eliminar imagen 
        Storage::disk('local')->delete($metodoConserLevadura->imagen);
        $metodoConserLevadura->delete();

        $this->crearSeguimiento("Eliminó un Método de Conservación de la Cepa: "
            . $metodoConserLevadura->levadura->cepa->codigo);

        return $metodoConserLevadura;
    }

    public function guardarImagen($imagen, $id)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name =  Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '.png';
        Storage::disk('local')->put('/public/levaduras/metodo_conser_img/' . $id . '/' . $image_name, $data);
        $ruta = '/public/levaduras/metodo_conser_img/' . $id . '/' . $image_name;
        $rutaPublica = '/storage/levaduras/metodo_conser_img/' . $id . '/' . $image_name;
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
        $rules = ['fecha' => 'required', 'tipo_metodo' => 'required'];
        if ($request->tipo_metodo == 2 || $request->tipo_metodo == 3) {
            $rules += ['medio_cultivo' => 'required'];
        } else {
            $rules += ['recuento_microgota' => 'required'];
        }
        if ($request->tipo_metodo != 3) {
            $rules += ['numero_replicas' => 'bail|numeric|min:1|max:999999999'];
        } else {
            $rules  += ['numero_pases' => 'bail|numeric|min:1|max:999999999'];
        }
        $this->validate($request, $rules);
    }
}
