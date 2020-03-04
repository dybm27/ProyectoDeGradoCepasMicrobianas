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
        $rules = [
            'medio' => 'bail|required|regex:/^[\pL\s\-]+$/u',
            'color' => 'bail|required|regex:/^[\pL\s\-]+$/u'
        ];
        $messages = [
            'medio.regex' => 'El medio solo puede contener letras.',
            'color.regex' => 'El color solo puede contener letras.'
        ];
        $this->validate($request, $rules, $messages);

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
        $rules = [
            'medio' => 'bail|required|regex:/^[\pL\s\-]+$/u',
            'color' => 'bail|required|regex:/^[\pL\s\-]+$/u'
        ];
        $messages = [
            'medio.regex' => 'El medio solo puede contener letras.',
            'color.regex' => 'El color solo puede contener letras.'
        ];
        $this->validate($request, $rules, $messages);

        $caractMacroBacteria = CaracMacroBacteria::find($id);

        $file = $request->file('imagen');

        if (!empty($file)) {
            //eliminar imagen vieja
            Storage::disk('local')->delete($caractMacroBacteria->imagen);
            //agregar imagen nueva
            $fileName = $file->getClientOriginalName();
            $time = time();
            Storage::disk('local')->put('/public/caract_macro_bacterias_img/' . $caractMacroBacteria->bacteria_id . '-' . $time . '-' . $fileName, file_get_contents($file));
            $ruta = '/public/caract_macro_bacterias_img/' . $caractMacroBacteria->bacteria_id . '-' . $time . '-' . $fileName;
            $rutaPublica = '/storage/caract_macro_bacterias_img/' . $caractMacroBacteria->bacteria_id . '-' . $time . '-' . $fileName;

            $caractMacroBacteria->imagen = $ruta;
            $caractMacroBacteria->imagenPublica = $rutaPublica;
        }

        if ($request->otras_caract == 'null') {
            $caractMacroBacteria->otras_caract = null;
        } else {
            $caractMacroBacteria->otras_caract = $request->otras_caract;
        }
        if ($request->imagen_descripcion == 'null') {
            $caractMacroBacteria->descripcion = null;
        } else {
            $caractMacroBacteria->descripcion = $request->imagen_descripcion;
        }
        $caractMacroBacteria->medio = $request->medio;
        $caractMacroBacteria->forma_id = $request->forma;
        $caractMacroBacteria->consistencia_id = $request->consistencia;
        $caractMacroBacteria->elevacion_id = $request->elevacion;
        $caractMacroBacteria->borde_id = $request->borde;
        $caractMacroBacteria->detalleoptico_id = $request->detalle_optico;
        $caractMacroBacteria->superficie_id = $request->superficie;
        $caractMacroBacteria->tamano = $request->tamaño;
        $caractMacroBacteria->color = $request->color;


        $caractMacroBacteria->save();

        return $caractMacroBacteria;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $caractMacroBacteria = CaracMacroBacteria::find($id);
        //eliminar imagen 
        Storage::disk('local')->delete($caractMacroBacteria->imagen);
        $caractMacroBacteria->delete();

        return $caractMacroBacteria;
    }
}
