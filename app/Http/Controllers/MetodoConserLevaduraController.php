<?php

namespace App\Http\Controllers;

use App\Cepa;
use App\Levadura;
use App\MetodoConserLevadura;
use App\TipoMetodoConservacionLevadura;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MetodoConserLevaduraController extends Controller
{
    public function store(Request $request)
    {
        if ($request->numero_pases == null) {
            $rules = [
                'fecha' => 'required',
                'numero_replicas' => 'bail|numeric|min:1|max:999999999'
            ];
        } else {
            $rules = [
                'fecha' => 'required',
                'numero_pases' => 'bail|numeric|min:1|max:999999999'
            ];
        }

        $messages = [
            'fecha.required' => 'Favor agregar la FECHA.',
            'numero_replicas.numeric' => 'Solo puede contener NUMEROS!!',
            'numero_pases.numeric' => 'Solo puede contener NUMEROS!!'
        ];
        $this->validate($request, $rules, $messages);

        $levadura = Levadura::where('cepa_id', $request->cepaId)->first();

        $imagen = $this->guardarImagen($request->file('imagen'), $levadura->id);

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
        $metodoConserLevadura->descripcion = $request->descripcion;
        $metodoConserLevadura->imagenPublica =  $imagen['rutaPublica'];
        $metodoConserLevadura->save();

        return $metodoConserLevadura;
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        if ($request->numero_pases == null) {
            $rules = [
                'fecha' => 'required',
                'numero_replicas' => 'bail|numeric|min:1|max:999999999'
            ];
        } else {
            $rules = [
                'fecha' => 'required',
                'numero_pases' => 'bail|numeric|min:1|max:999999999'
            ];
        }

        $messages = [
            'fecha.required' => 'Favor agregar la FECHA.',
            'numero_replicas.numeric' => 'Solo puede contener NUMEROS!!',
            'numero_pases.numeric' => 'Solo puede contener NUMEROS!!'
        ];
        $this->validate($request, $rules, $messages);

        $metodoConserLevadura = MetodoConserLevadura::find($id);

        $file = $request->file('imagen');

        $fecha = Carbon::parse($request->fecha)->format('Y-m-d H:i:s');

        $metodoConserLevadura->tipo_id = intval($request->tipo_metodo);
        $metodoConserLevadura->fecha = $fecha;
        $metodoConserLevadura->numero_replicas = intval($request->numero_replicas);
        $metodoConserLevadura->numero_pases = intval($request->numero_pases);
        $metodoConserLevadura->recuento_microgota = $request->recuento_microgota;
        $metodoConserLevadura->medio_cultivo = $request->medio_cultivo;
        $metodoConserLevadura->observaciones = $request->observaciones;
        $metodoConserLevadura->descripcion = $request->descripcion;

        if (!empty($file)) {
            //eliminar imagen vieja
            Storage::disk('local')->delete($metodoConserLevadura->imagen);
            //agregar imagen nueva
            $imagen = $this->guardarImagen($file, $metodoConserLevadura->levadura_id);

            $metodoConserLevadura->imagen =  $imagen['ruta'];
            $metodoConserLevadura->imagenPublica =  $imagen['rutaPublica'];
        }

        $metodoConserLevadura->save();

        return $metodoConserLevadura;
    }

    public function destroy($id)
    {
        $metodoConserLevadura = metodoConserLevadura::find($id);
        //eliminar imagen 
        Storage::disk('local')->delete($metodoConserLevadura->imagen);
        $metodoConserLevadura->delete();

        return $metodoConserLevadura;
    }

    public function guardarImagen($file, $id)
    {
        $time = time();
        $fileName = $file->getClientOriginalName();
        Storage::disk('local')->put('/public/levaduras/metodo_conser_img/' . $id . '/' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/levaduras/metodo_conser_img/' . $id . '/' . $time . '-' . $fileName;
        $rutaPublica = '/storage/levaduras/metodo_conser_img/' . $id . '/' . $time . '-' . $fileName;
        return ['ruta' => $ruta, 'rutaPublica' => $rutaPublica];
    }
}
