<?php

namespace App\Http\Controllers;

use App\CaracMacroHongo;
use App\HongoFilamentoso;
use App\Seguimiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class CaractMacroHongoController extends Controller
{
    public function store(Request $request)
    {
        $hongo = HongoFilamentoso::where('cepa_id', $request->cepaId)->first();

        $imagen = $this->guardarImagen($request->file('imagen'), $hongo->id);

        $caractMacroHongo = new CaracMacroHongo();
        $caractMacroHongo->hongo_filamentoso_id = $hongo->id;
        $caractMacroHongo->medio = ucfirst($request->medio);
        $caractMacroHongo->color_id = intval($request->color);
        $caractMacroHongo->textura_id = intval($request->textura);
        $caractMacroHongo->caracteristicas_reverso = $request->caracteristicas_reverso;
        $caractMacroHongo->imagen = $imagen['ruta'];
        $caractMacroHongo->imagenPublica = $imagen['rutaPublica'];
        $caractMacroHongo->descripcion = $request->imagen_descripcion;
        $caractMacroHongo->save();

        $this->crearSeguimiento("Agregó la Característica Macroscópica a la Cepa: "
            . $hongo->cepa->codigo);

        return $caractMacroHongo;
    }
    public function show($id)
    {
        //
    }
    public function update(Request $request, $id)
    {
        $caractMacroHongo = CaracMacroHongo::find($id);
        $file = $request->file('imagen');
        if (!empty($file)) {
            //eliminar imagen vieja
            Storage::disk('local')->delete($caractMacroHongo->imagen);
            //agregar imagen nueva
            $imagen = $this->guardarImagen($file, $caractMacroHongo->hongo_filamentoso_id);

            $caractMacroHongo->imagen = $imagen['ruta'];
            $caractMacroHongo->imagenPublica = $imagen['rutaPublica'];
        }
        $caractMacroHongo->medio =  ucfirst($request->medio);
        $caractMacroHongo->color_id = intval($request->color);
        $caractMacroHongo->textura_id = intval($request->textura);
        $caractMacroHongo->caracteristicas_reverso = $request->caracteristicas_reverso;
        $caractMacroHongo->descripcion = $request->imagen_descripcion;
        $caractMacroHongo->save();

        $this->crearSeguimiento("Editó la Característica Macroscópica de la Cepa: "
            . $caractMacroHongo->hongoFilamentoso->cepa->codigo);

        return $caractMacroHongo;
    }
    public function destroy($id)
    {
        $caractMacroHongo = CaracMacroHongo::find($id);
        //eliminar imagen 
        Storage::disk('local')->delete($caractMacroHongo->imagen);
        $caractMacroHongo->delete();

        $this->crearSeguimiento("Eliminó la Característica Macroscópica de la Cepa: "
            . $caractMacroHongo->hongoFilamentoso->cepa->codigo);

        return $caractMacroHongo;
    }

    public function guardarImagen($file, $id)
    {
        $time = time();
        $fileName = $file->getClientOriginalName();
        Storage::disk('local')->put('/public/hongos/caract_macro_img/' . $id . '/' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/hongos/caract_macro_img/' . $id . '/' . $time . '-' . $fileName;
        $rutaPublica = '/storage/hongos/caract_macro_img/' . $id . '/' . $time . '-' . $fileName;
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