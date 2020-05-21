<?php

namespace App\Http\Controllers;

use App\Actinomiceto;
use App\CaracMacroActinomiceto;
use App\Seguimiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class CaractMacroActinomicetoController extends Controller
{
    public function store(Request $request)
    {
        $actinomiceto = Actinomiceto::where('cepa_id', $request->cepaId)->first();


        //obtenemos el nombre de la imagen
        $imagen = $this->guardarImagen($request->file('imagen'), $actinomiceto->id);

        $caractMacroActinomiceto = new CaracMacroActinomiceto();
        $caractMacroActinomiceto->actinomiceto_id = $actinomiceto->id;
        $caractMacroActinomiceto->medio = ucfirst($request->medio);
        $caractMacroActinomiceto->forma_id = intval($request->forma);
        $caractMacroActinomiceto->textura_id = intval($request->textura);
        $caractMacroActinomiceto->borde_id = intval($request->borde);
        $caractMacroActinomiceto->pigmento_id = intval($request->pigmento);
        $caractMacroActinomiceto->superficie_id = intval($request->superficie);
        $caractMacroActinomiceto->secrecion_geosminas = ucfirst($request->secrecion_geosminas);
        $caractMacroActinomiceto->color_id = intval($request->color);
        $caractMacroActinomiceto->otras_caract = $request->otras_caract;
        $caractMacroActinomiceto->imagen = $imagen['ruta'];
        $caractMacroActinomiceto->imagenPublica = $imagen['rutaPublica'];
        $caractMacroActinomiceto->descripcion = $request->imagen_descripcion;
        $caractMacroActinomiceto->save();

        $this->crearSeguimiento("Agregó la Característica Macroscópica a la Cepa: "
            . $actinomiceto->cepa->codigo);

        return $caractMacroActinomiceto;
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $caractMacroActinomiceto = CaracMacroActinomiceto::find($id);

        $file = $request->file('imagen');

        if (!empty($file)) {
            //eliminar imagen vieja
            Storage::disk('local')->delete($caractMacroActinomiceto->imagen);
            //agregar imagen nueva
            $imagen = $this->guardarImagen($file, $caractMacroActinomiceto->actinomiceto_id);

            $caractMacroActinomiceto->imagen = $imagen['ruta'];
            $caractMacroActinomiceto->imagenPublica = $imagen['rutaPublica'];
        }

        $caractMacroActinomiceto->medio = ucfirst($request->medio);
        $caractMacroActinomiceto->forma_id = intval($request->forma);
        $caractMacroActinomiceto->textura_id = intval($request->textura);
        $caractMacroActinomiceto->borde_id = intval($request->borde);
        $caractMacroActinomiceto->pigmento_id = intval($request->pigmento);
        $caractMacroActinomiceto->superficie_id = intval($request->superficie);
        $caractMacroActinomiceto->secrecion_geosminas = ucfirst($request->secrecion_geosminas);
        $caractMacroActinomiceto->color_id = intval($request->color);
        $caractMacroActinomiceto->otras_caract = $request->otras_caract;
        $caractMacroActinomiceto->descripcion = $request->imagen_descripcion;

        $caractMacroActinomiceto->save();

        $this->crearSeguimiento("Editó la Característica Macroscópica de la Cepa: "
            . $caractMacroActinomiceto->actinomiceto->cepa->codigo);

        return $caractMacroActinomiceto;
    }

    public function destroy($id)
    {
        $caractMacroActinomiceto = CaracMacroActinomiceto::find($id);
        //eliminar imagen 
        Storage::disk('local')->delete($caractMacroActinomiceto->imagen);
        $caractMacroActinomiceto->delete();

        $this->crearSeguimiento("Eliminó la Característica Macroscópica de la Cepa: "
            . $caractMacroActinomiceto->actinomiceto->cepa->codigo);

        return $caractMacroActinomiceto;
    }

    public function guardarImagen($file, $id)
    {
        $time = time();
        $fileName = $file->getClientOriginalName();
        Storage::disk('local')->put('/public/actinomicetos/caract_macro_img/' . $id . '/' . $time . '-' . $fileName, file_get_contents($file));
        $ruta = '/public/actinomicetos/caract_macro_img/' . $id . '/' . $time . '-' . $fileName;
        $rutaPublica = '/storage/actinomicetos/caract_macro_img/' . $id . '/' . $time . '-' . $fileName;
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
