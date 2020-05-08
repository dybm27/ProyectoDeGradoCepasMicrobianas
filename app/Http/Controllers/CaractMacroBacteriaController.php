<?php

namespace App\Http\Controllers;

use App\Bacteria;
use App\CaracMacroBacteria;
use App\Seguimiento;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class CaractMacroBacteriaController extends Controller
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

        $bacteria = Bacteria::where('cepa_id', $request->cepaId)->first();


        //obtenemos el nombre de la imagen
        $imagen = $this->guardarImagen($request->file('imagen'), $bacteria->id);

        $caractMacroBacteria = new CaracMacroBacteria();
        $caractMacroBacteria->bacteria_id = $bacteria->id;
        $caractMacroBacteria->medio = $request->medio;
        $caractMacroBacteria->forma_id = intval($request->forma);
        $caractMacroBacteria->elevacion_id = intval($request->elevacion);
        $caractMacroBacteria->borde_id = intval($request->borde);
        $caractMacroBacteria->detalleoptico_id = intval($request->detalle_optico);
        $caractMacroBacteria->superficie_id = intval($request->superficie);
        $caractMacroBacteria->tamano = $request->tamaño;
        $caractMacroBacteria->color_id = intval($request->color);
        $caractMacroBacteria->otras_caract = $request->otras_caract;
        $caractMacroBacteria->imagen = $imagen['ruta'];
        $caractMacroBacteria->imagenPublica = $imagen['rutaPublica'];
        $caractMacroBacteria->descripcion = $request->imagen_descripcion;
        $caractMacroBacteria->save();

        $this->crearSeguimiento("Agregó la Característica Macroscópica a la Cepa: "
            . $bacteria->cepa->codigo);

        return $caractMacroBacteria;
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

        $caractMacroBacteria = CaracMacroBacteria::find($id);

        $file = $request->file('imagen');

        if (!empty($file)) {
            //eliminar imagen vieja
            Storage::disk('local')->delete($caractMacroBacteria->imagen);
            //agregar imagen nueva
            $imagen = $this->guardarImagen($file, $caractMacroBacteria->bacteria_id);

            $caractMacroBacteria->imagen = $imagen['ruta'];
            $caractMacroBacteria->imagenPublica = $imagen['rutaPublica'];
        }

        $caractMacroBacteria->medio = $request->medio;
        $caractMacroBacteria->forma_id = intval($request->forma);
        $caractMacroBacteria->elevacion_id = intval($request->elevacion);
        $caractMacroBacteria->borde_id = intval($request->borde);
        $caractMacroBacteria->detalleoptico_id = intval($request->detalle_optico);
        $caractMacroBacteria->superficie_id = intval($request->superficie);
        $caractMacroBacteria->tamano = $request->tamaño;
        $caractMacroBacteria->color_id = intval($request->color);
        $caractMacroBacteria->otras_caract = $request->otras_caract;
        $caractMacroBacteria->descripcion = $request->imagen_descripcion;

        $caractMacroBacteria->save();

        $this->crearSeguimiento("Editó la Característica Macroscópica de la Cepa: "
        . $caractMacroBacteria->bacteria->cepa->codigo);

        return $caractMacroBacteria;
    }

    public function destroy($id)
    {
        $caractMacroBacteria = CaracMacroBacteria::find($id);
        //eliminar imagen 
        Storage::disk('local')->delete($caractMacroBacteria->imagen);
        $caractMacroBacteria->delete();

        $this->crearSeguimiento("Eliminó la Característica Macroscópica de la Cepa: "
        . $caractMacroBacteria->bacteria->cepa->codigo);

        return $caractMacroBacteria;
    }

    public function guardarImagen($file, $id)
    {
        $time = time();
        $fileName = $file->getClientOriginalName();
        Storage::disk('local')->put('/public/bacterias/caract_macro_img/' . $id . '/' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/bacterias/caract_macro_img/' . $id . '/' . $time . '-' . $fileName;
        $rutaPublica = '/storage/bacterias/caract_macro_img/' . $id . '/' . $time . '-' . $fileName;
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
