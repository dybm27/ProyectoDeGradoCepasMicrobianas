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

        $rules = [
            'fecha' => 'required',
            'numero_replicas' => 'bail|required|numeric|min:1|max:999999999'
        ];
        $messages = [
            'fecha.required' => 'Favor agregar la FECHA.',
            'numero_replicas.numeric' => 'Solo puede contener NUMEROS!!'
        ];
        $this->validate($request, $rules, $messages);

        $bacteria = Bacteria::where('cepa_id', $request->cepaId)->first();

        $imagen = $this->guardarImagen($request->file('imagen'), $bacteria->id);

        $fecha = Carbon::parse($request->fecha)->format('Y-m-d H:i:s');

        $metodoConserBacteria = new MetodoConserBacteria();
        $metodoConserBacteria->bacteria_id = $bacteria->id;
        $metodoConserBacteria->tipo_id = intval($request->tipo_metodo);
        $metodoConserBacteria->tipo_agar_id = intval($request->tipo_agar);
        $metodoConserBacteria->fecha = $fecha;
        $metodoConserBacteria->numero_replicas = intval($request->numero_replicas);
        $metodoConserBacteria->recuento_microgota = $request->recuento_microgota;
        $metodoConserBacteria->imagen = $imagen['ruta'];
        $metodoConserBacteria->descripcion = $request->descripcion;
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
        $rules = [
            'fecha' => 'required',
            'numero_replicas' => 'bail|numeric|required'
        ];
        $messages = [
            'fecha.required' => 'Favor agregar la FECHA.',
            'numero_replicas.numeric' => 'Solo puede contener NUMEROS!!'
        ];
        $this->validate($request, $rules, $messages);

        $metodoConserBacteria = MetodoConserBacteria::find($id);

        $file = $request->file('imagen');

        $fecha = Carbon::parse($request->fecha)->format('Y-m-d H:i:s');

        $metodoConserBacteria->tipo_id = intval($request->tipo_metodo);
        $metodoConserBacteria->tipo_agar_id = intval($request->tipo_agar);
        $metodoConserBacteria->fecha = $fecha;
        $metodoConserBacteria->numero_replicas = intval($request->numero_replicas);
        $metodoConserBacteria->recuento_microgota = $request->recuento_microgota;
        $metodoConserBacteria->descripcion = $request->descripcion;

        if (!empty($file)) {
            //eliminar imagen vieja
            Storage::disk('local')->delete($metodoConserBacteria->imagen);
            //agregar imagen nueva
            $imagen = $this->guardarImagen($file, $metodoConserBacteria->bacteria_id);

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

    public function guardarImagen($file, $id)
    {
        $time = time();
        $fileName = $file->getClientOriginalName();
        Storage::disk('local')->put('/public/bacterias/metodo_conser_img/' . $id . '/' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/bacterias/metodo_conser_img/' . $id . '/' . $time . '-' . $fileName;
        $rutaPublica = '/storage/bacterias/metodo_conser_img/' . $id . '/' . $time . '-' . $fileName;
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