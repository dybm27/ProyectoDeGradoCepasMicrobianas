<?php

namespace App\Http\Controllers;

use App\TipoUser;
use Illuminate\Http\Request;

class TipoUsuarioController extends Controller
{
    public function store(Request $request)
    {
        $rules = [
            'nombre' => 'bail|required|unique:tipo_users,nombre'
        ];
        $messages = [
            'nombre.unique' => 'Ya se encuentra registrado un Tipo con ese nombre.'
        ];
        $this->validate($request, $rules, $messages);
        $tipo = new TipoUser();
        $tipo->nombre = ucfirst($request->nombre);
        $tipo->save();
        return $tipo;
    }

    public function update(Request $request, $id)
    { }

    public function destroy($id)
    { }
}
