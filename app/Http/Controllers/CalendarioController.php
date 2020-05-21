<?php

namespace App\Http\Controllers;

use App\Evento;
use App\Seguimiento;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CalendarioController extends Controller
{
    public function index()
    {
        return view('calendario');
    }

    public function store(Request $request)
    {
        $rules = [
            'titulo' => 'required',
            'fecha' => 'required',
            'descripcion' => 'required',
            'tiempo' => 'required'
        ];

        $messages = [
            'fecha.required' => 'Favor agregar la FECHA',
            'tiempo.required' => 'Favor agregar la HORA'
        ];

        $this->validate($request, $rules, $messages);

        $fecha = Carbon::parse($request->fecha)->format('Y-m-d H:i:s');

        $evento = new Evento();
        $evento->autor = Auth::user()->id;
        $evento->titulo = $request->titulo;
        $evento->fecha = $fecha;
        $evento->color = $request->color;
        $evento->descripcion = $request->descripcion;
        $evento->save();

        $this->crearSeguimiento("Agregó el evento: " . $evento->titulo);

        return $evento;
    }

    public function update(Request $request, $id)
    {
        $rules = [
            'titulo' => 'required',
            'fecha' => 'required',
            'descripcion' => 'required'
        ];

        $messages = [
            'fecha.required' => 'Favor agregar la FECHA'
        ];

        $this->validate($request, $rules, $messages);

        $fecha = Carbon::parse($request->fecha)->format('Y-m-d H:i:s');

        $evento = Evento::where('id', $id)->first();
        $titulo = $evento->titulo;
        $evento->titulo = $request->titulo;
        $evento->fecha = $fecha;
        //    $evento->color = $request->color;
        $evento->descripcion = $request->descripcion;
        $evento->save();

        $this->crearSeguimiento("Editó el evento: " .  $titulo);

        return $evento;
    }

    public function destroy($id)
    {
        $evento = Evento::where('id', $id)->first();
        $evento->delete();

        $this->crearSeguimiento("Eliminó el evento: " . $evento->titulo);

        return $evento;
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
