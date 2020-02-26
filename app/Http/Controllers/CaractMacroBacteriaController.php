<?php

namespace App\Http\Controllers;

use App\Bacteria;
use App\CaracMacroBacteria;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CaractMacroBacteriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return $request->all();
        $bacteria = Bacteria::where('cepa_id', $request->cepaId)->first();
        $file = $request->file('imagen');
        //obtenemos el nombre de la imagen
        $fileName = $file->getClientOriginalName();
        $time = time();

        Storage::disk('local')->put('/public/caract_macro_bacterias_img/' . $bacteria->id . '-' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/caract_macro_bacterias_img/' . $bacteria->id . '-' . $time . '-' . $fileName;
        $rutaPublica = '/storage/caract_macro_bacterias_img/' . $bacteria->id . '-' . $time . '-' . $fileName;

        $caractMacroBacteria = new CaracMacroBacteria();
        $caractMacroBacteria->bacteria_id = $bacteria->id;
        $caractMacroBacteria->medio = $request->medio;
        $caractMacroBacteria->forma_id = $request->forma;
        $caractMacroBacteria->consistencia_id = $request->consistencia;
        $caractMacroBacteria->elevacion_id = $request->elevacion;
        $caractMacroBacteria->borde_id = $request->borde;
        $caractMacroBacteria->detalleoptico_id = $request->detalle_optico;
        $caractMacroBacteria->superficie_id = $request->superficie;
        $caractMacroBacteria->tamano = $request->tamaño;
        $caractMacroBacteria->color = $request->color;
        $caractMacroBacteria->otras_caract = $request->otras_caract;
        $caractMacroBacteria->imagen = $ruta;
        $caractMacroBacteria->imagenPublica = $rutaPublica;
        $caractMacroBacteria->descripcion = $request->imagen_descripcion;
        $caractMacroBacteria->save();

        return $caractMacroBacteria;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        return $request->all();

        return $id;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
