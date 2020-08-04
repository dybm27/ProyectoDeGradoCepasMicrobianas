<?php

namespace App\Http\Controllers;

use App\Events\PermisosEvent;
use App\Events\RolEvent;
use App\Rol;
use Illuminate\Http\Request;

class RolController extends Controller
{
    public function store(Request $request)
    {
        $rules = [
            'nombre' => 'bail|required|unique:rols,nombre'
        ];
        $messages = [
            'nombre.unique' => 'Ya se encuentra registrado un Rol con ese nombre.'
        ];
        $this->validate($request, $rules, $messages);
        $rol = new Rol();
        $rol->nombre = ucfirst($request->nombre);
        $rol->save();
        $res = $rol->load('permisos');
        broadcast(new RolEvent($res, 'agregar'))->toOthers();
        return $res;
    }

    public function update(Request $request, $id)
    {
        $rol =  Rol::find($id);
        $rules = [
            'nombre' => 'bail|required|unique:rols,nombre,' . $rol->id
        ];
        $messages = [
            'nombre.unique' => 'Ya se encuentra registrado un Rol con ese nombre.'
        ];
        $this->validate($request, $rules, $messages);
        $rol->nombre = ucfirst($request->nombre);
        $rol->save();
        $res = $rol->load('permisos');
        broadcast(new RolEvent($res, 'editar'))->toOthers();
        return $res;
    }

    public function destroy($id)
    {
        $rol = Rol::find($id);
        if ($this->verificarEliminar($rol)) {
            broadcast(new RolEvent($rol, 'eliminar'))->toOthers();
            $rol->delete();
            return $rol;
        } else {
            return 'negativo';
        }
    }

    public function verificarEliminar($rol)
    {
        if (count($rol->users) > 0) {
            return false;
        }
        return true;
    }

    public function modificarPermisos(Request $request, $id)
    {
        $rol =  Rol::find($id);
        $array = [];
        foreach ($request->permisos as $permiso) {
            array_push($array, $permiso['id']);
        }
        $rol->permisos()->sync($array);
        $res = $rol->load('permisos');
        broadcast(new RolEvent($res, 'editar'))->toOthers();
        return $res;
    }
}
