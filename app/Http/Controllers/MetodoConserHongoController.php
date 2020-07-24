<?php

namespace App\Http\Controllers;

use App\HongoFilamentoso;
use App\MetodoConserHongo;
use App\Seguimiento;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class MetodoConserHongoController extends Controller
{
    public function store(Request $request)
    {
        $this->validarCampos($request);

        $hongo_filamentoso = HongoFilamentoso::where('cepa_id', $request->cepaId)->first();

        $imagen = $this->guardarImagen($request->imagen, $hongo_filamentoso->id);

        $fecha = Carbon::parse($request->fecha)->format('Y-m-d H:i:s');

        $MetodoConserHongo = new MetodoConserHongo();
        $MetodoConserHongo->hongo_filamentoso_id = $hongo_filamentoso->id;
        $MetodoConserHongo->tipo_id = intval($request->tipo_metodo);
        $MetodoConserHongo->fecha = $fecha;
        $MetodoConserHongo->numero_replicas = intval($request->numero_replicas);
        $MetodoConserHongo->numero_pases = intval($request->numero_pases);
        $MetodoConserHongo->recuento_microgota = $request->recuento_microgota;
        $MetodoConserHongo->medio_cultivo = $request->medio_cultivo;
        $MetodoConserHongo->observaciones = $request->observaciones;
        $MetodoConserHongo->imagen = $imagen['ruta'];
        $MetodoConserHongo->imagenPublica =  $imagen['rutaPublica'];
        $MetodoConserHongo->save();

        $this->crearSeguimiento("Agregó un Método de Conservación a la Cepa: "
            . $hongo_filamentoso->cepa->codigo);

        return $MetodoConserHongo;
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $this->validarCampos($request);

        $MetodoConserHongo = MetodoConserHongo::find($id);

        $fecha = Carbon::parse($request->fecha)->format('Y-m-d H:i:s');

        $MetodoConserHongo->tipo_id = intval($request->tipo_metodo);
        $MetodoConserHongo->fecha = $fecha;
        $MetodoConserHongo->numero_replicas = intval($request->numero_replicas);
        $MetodoConserHongo->numero_pases = intval($request->numero_pases);
        $MetodoConserHongo->recuento_microgota = $request->recuento_microgota;
        $MetodoConserHongo->medio_cultivo = $request->medio_cultivo;
        $MetodoConserHongo->observaciones = $request->observaciones;

        if ($request->imagen != $MetodoConserHongo->imagen) {
            //eliminar imagen vieja
            Storage::disk('local')->delete($MetodoConserHongo->imagen);
            //agregar imagen nueva
            $imagen = $this->guardarImagen($request->imagen, $MetodoConserHongo->hongo_filamentoso_id);

            $MetodoConserHongo->imagen =  $imagen['ruta'];
            $MetodoConserHongo->imagenPublica =  $imagen['rutaPublica'];
        }

        $MetodoConserHongo->save();

        $this->crearSeguimiento("Editó un Método de Conservación de la Cepa: "
            . $MetodoConserHongo->hongoFilamentoso->cepa->codigo);

        return $MetodoConserHongo;
    }

    public function destroy($id)
    {
        $MetodoConserHongo = MetodoConserHongo::find($id);
        //eliminar imagen 
        Storage::disk('local')->delete($MetodoConserHongo->imagen);
        $MetodoConserHongo->delete();

        $this->crearSeguimiento("Eliminó un Método de Conservación de la Cepa: "
            . $MetodoConserHongo->hongoFilamentoso->cepa->codigo);

        return $MetodoConserHongo;
    }

    public function guardarImagen($imagen, $id)
    {
        $imagen_array = explode(",", $imagen);
        $data = base64_decode($imagen_array[1]);
        $image_name =  Auth::user()->id . '-' . rand(Auth::user()->id, 1000) . '-' . time() . '.png';
        Storage::disk('local')->put('/public/hongos/metodo_conser_img/' . $id . '/' . $image_name, $data);
        $ruta = '/public/hongos/metodo_conser_img/' . $id . '/' . $image_name;
        $rutaPublica = '/storage/hongos/metodo_conser_img/' . $id . '/' . $image_name;
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
