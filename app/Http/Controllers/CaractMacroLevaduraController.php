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
        //obtenemos el nombre de la imagen
        $imagen = $this->guardarImagen($request->file('imagen'), $levadura->id);

        $caractMacroLevadura = new CaracMacroLevadura();
        $caractMacroLevadura->levadura_id = $levadura->id;
        $caractMacroLevadura->medio = $request->medio;
        $caractMacroLevadura->textura_id = intval($request->textura);
        $caractMacroLevadura->topografia_superficie = $request->topografia_superficie;
        $caractMacroLevadura->borde_colonia = $request->borde_colonia;
        $caractMacroLevadura->color_id = intval($request->color);
        $caractMacroLevadura->imagen = $imagen['ruta'];
        $caractMacroLevadura->imagenPublica = $imagen['rutaPublica'];
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
            $imagen = $this->guardarImagen($file, $caractMacroLevadura->levadura_id);

            $caractMacroLevadura->imagen = $imagen['ruta'];
            $caractMacroLevadura->imagenPublica = $imagen['rutaPublica'];
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

    public function guardarImagen($file, $id)
    {
        $time = time();
        $fileName = $file->getClientOriginalName();
        Storage::disk('local')->put('/public/levaduras/caract_macro_img/' . $id . '/' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/levaduras/caract_macro_img/' . $id . '/' . $time . '-' . $fileName;
        $rutaPublica = '/storage/levaduras/caract_macro_img/' . $id . '/' . $time . '-' . $fileName;
        return ['ruta' => $ruta, 'rutaPublica' => $rutaPublica];
    }
}
