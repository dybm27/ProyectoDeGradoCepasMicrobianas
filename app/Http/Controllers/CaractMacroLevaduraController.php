<?php

namespace App\Http\Controllers;

use App\CaracMacroLevadura;
use App\Levadura;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CaractMacroLevaduraController extends Controller
{
    public function store(Request $request)
    {
        $rules = [
            'medio' => 'required',
        ];
        $messages = [
            //'color.regex' => 'El color solo puede contener letras.'
        ];
        $this->validate($request, $rules, $messages);

        $levadura = Levadura::where('cepa_id', $request->cepaId)->first();

        $file = $request->file('imagen');
        //obtenemos el nombre de la imagen
        $fileName = $file->getClientOriginalName();
        $time = time();

        Storage::disk('local')->put('/public/levaduras/caract_macro_img/' . $levadura->id . '/' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/levaduras/caract_macro_img/' . $levadura->id . '/' . $time . '-' . $fileName;
        $rutaPublica = '/storage/levaduras/caract_macro_img/' . $levadura->id . '/' . $time . '-' . $fileName;

        $caractMacroLevadura = new CaracMacroLevadura();
        $caractMacroLevadura->levadura_id = $levadura->id;
        $caractMacroLevadura->medio = $request->medio;
        $caractMacroLevadura->textura_id = intval($request->textura);
        $caractMacroLevadura->topografia_superficie = $request->topografia_superficie;
        $caractMacroLevadura->borde_colonia = $request->borde_colonia;
        $caractMacroLevadura->color_id = intval($request->color);
        $caractMacroLevadura->imagen = $ruta;
        $caractMacroLevadura->imagenPublica = $rutaPublica;
        $caractMacroLevadura->descripcion = $request->imagen_descripcion;
        $caractMacroLevadura->save();

        return $caractMacroLevadura;
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $rules = [
            'medio' => 'required',
            // 'color' => 'bail|required|regex:/^[\pL\s\-]+$/u'
        ];
        $messages = [
            //   'color.regex' => 'El color solo puede contener letras.'
        ];
        $this->validate($request, $rules, $messages);

        $caractMacroLevadura = CaracMacroLevadura::find($id);

        $file = $request->file('imagen');

        if (!empty($file)) {
            //eliminar imagen vieja
            Storage::disk('local')->delete($caractMacroLevadura->imagen);
            //agregar imagen nueva
            $fileName = $file->getClientOriginalName();
            $time = time();
            Storage::disk('local')->put('/public/levaduras/caract_macro_img/' . $caractMacroLevadura->levadura_id . '/' . $time . '-' . $fileName, file_get_contents($file));
            $ruta = '/public/levaduras/caract_macro_img/' . $caractMacroLevadura->levadura_id . '/' . $time . '-' . $fileName;
            $rutaPublica = '/storage/levaduras/caract_macro_img/' . $caractMacroLevadura->levadura_id . '/' . $time . '-' . $fileName;

            $caractMacroLevadura->imagen = $ruta;
            $caractMacroLevadura->imagenPublica = $rutaPublica;
        }

        $caractMacroLevadura->medio = $request->medio;
        $caractMacroLevadura->textura_id = intval($request->textura);
        $caractMacroLevadura->topografia_superficie = $request->topografia_superficie;
        $caractMacroLevadura->borde_colonia = $request->borde_colonia;
        $caractMacroLevadura->color_id = intval($request->color);
        $caractMacroLevadura->descripcion = $request->imagen_descripcion;


        $caractMacroLevadura->save();

        return $caractMacroLevadura;
    }

    public function destroy($id)
    {
        $caractMacroLevadura = CaracMacroLevadura::find($id);
        //eliminar imagen 
        Storage::disk('local')->delete($caractMacroLevadura->imagen);
        $caractMacroLevadura->delete();

        return $caractMacroLevadura;
    }
}
