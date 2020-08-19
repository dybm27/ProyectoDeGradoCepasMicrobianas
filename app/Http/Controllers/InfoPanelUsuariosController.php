<?php

namespace App\Http\Controllers;

use App\Permiso;
use App\Seguimiento;
use App\Rol;
use App\User;
use Illuminate\Http\Request;

class InfoPanelUsuariosController extends Controller
{
    public function tablaUsuarios(Request $request)
    {
        $cepas = User::where('users.rol_id', '!=', 1)->where('users.id', '!=', auth()->user()->id)
            ->join('rols', 'users.rol_id', '=', 'rols.id');

        $query = $cepas->select(
            'users.*',
            'rols.nombre As rol'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $query = $query->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $query = $query->where(function ($query) use ($value) {
                return $query->where('users.name', 'like', $value)
                    ->orWhere('users.email', 'like', $value)
                    ->orWhere('tipo_users.nombre', 'like', $value)
                    ->orWhere('users.id', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $query->paginate($perPage);

        return $pagination;
    }
    public function tablaSeguimientos(Request $request)
    {
        $seguimientos = Seguimiento::select(
            'seguimientos.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $seguimientos = $seguimientos->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $seguimientos = $seguimientos->where(function ($query) use ($value) {
                return $query->where('Seguimientos.nombre_responsable', 'like', $value)
                    ->orWhere('Seguimientos.email_responsable', 'like', $value)
                    ->orWhere('Seguimientos.rol', 'like', $value)
                    ->orWhere('Seguimientos.accion', 'like', $value)
                    ->orWhere('Seguimientos.created_at', 'like', $value)
                    ->orWhere('Seguimientos.id', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $seguimientos->paginate($perPage);

        return $pagination;
    }
    public function tablaRoles(Request $request)
    {
        $query = Rol::where('id', '!=', 1);

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $query = $query->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $query = $query->where(function ($query) use ($value) {
                return $query->where('rols.nombre', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $query->paginate($perPage);

        return $pagination;
    }
    public function roles()
    {
        $roles = Rol::all();
        return $roles->load('permisos');
    }
    public function usuarios()
    {
        $user = User::where('users.rol_id', '!=', 1)
            ->where('users.id', '!=', auth()->user()->id)->get();
        return $user;
    }
    public function permisos()
    {
        $permisos = Permiso::all();
        return $permisos;
    }
}
