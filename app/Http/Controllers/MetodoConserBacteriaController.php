<?php

namespace App\Http\Controllers;

use App\Bacteria;
use App\MetodoConserBacteria;
use Carbon\Carbon;
use Illuminate\Http\Request;
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

        $file = $request->file('imagen');
        //obtenemos el nombre de la imagen
        $fileName = $file->getClientOriginalName();
        $time = time();

        Storage::disk('local')->put('/public/bacterias/metodo_conser_img/' . $bacteria->id . '/' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/bacterias/metodo_conser_img/' . $bacteria->id . '/' . $time . '-' . $fileName;
        $rutaPublica = '/storage/bacterias/metodo_conser_img/' . $bacteria->id . '/' . $time . '-' . $fileName;

        $fecha = Carbon::createFromDate($request->fecha);

        $metodoConserBacteria = new MetodoConserBacteria();
        $metodoConserBacteria->bacteria_id = $bacteria->id;
        $metodoConserBacteria->tipo_id = intval($request->tipo_metodo);
        $metodoConserBacteria->tipo_agar_id = intval($request->tipo_agar);
        $metodoConserBacteria->fecha = $fecha;
        $metodoConserBacteria->numero_replicas = intval($request->numero_replicas);
        $metodoConserBacteria->recuento_microgota = $request->recuento_microgota;
        $metodoConserBacteria->imagen = $ruta;
        $metodoConserBacteria->descripcion = $request->descripcion;
        $metodoConserBacteria->imagenPublica = $rutaPublica;
        $metodoConserBacteria->save();

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

        $fecha = Carbon::createFromDate($request->fecha);

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
            $fileName = $file->getClientOriginalName();
            $time = time();
            Storage::disk('local')->put('/public/bacterias/metodo_conser_img/' . $metodoConserBacteria->bacteria_id . '/' . $time . '-' . $fileName, file_get_contents($file));
            $ruta = '/public/bacterias/metodo_conser_img/' . $metodoConserBacteria->bacteria_id . '/' . $time . '-' . $fileName;
            $rutaPublica = '/storage/bacterias/metodo_conser_img/' . $metodoConserBacteria->bacteria_id . '/' . $time . '-' . $fileName;

            $metodoConserBacteria->imagen = $ruta;
            $metodoConserBacteria->imagenPublica = $rutaPublica;
        }

        $metodoConserBacteria->save();

        return $metodoConserBacteria;
    }

    public function destroy($id)
    {
        $metodoConserBacteria = MetodoConserBacteria::find($id);
        //eliminar imagen 
        Storage::disk('local')->delete($metodoConserBacteria->imagen);
        $metodoConserBacteria->delete();

        return $metodoConserBacteria;
    }
}
