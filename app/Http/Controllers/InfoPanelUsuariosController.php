<?php

namespace App\Http\Controllers;

use App\Seguimiento;
use App\TipoUser;
use App\User;
use Illuminate\Http\Request;

class InfoPanelUsuariosController extends Controller
{
    public function tablaUsuarios(Request $request)
    {
        $cepas = User::where('tipouser_id', '!=', 1)
            ->join('tipo_users', 'users.tipouser_id', '=', 'tipo_users.id');

        $query = $cepas->select(
            'users.*',
            'tipo_users.nombre As tipo_user'
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
                    ->orWhere('Seguimientos.tipo_user', 'like', $value)
                    ->orWhere('Seguimientos.accion', 'like', $value)
                    ->orWhere('Seguimientos.created_at', 'like', $value)
                    ->orWhere('Seguimientos.id', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $seguimientos->paginate($perPage);

        return $pagination;
    }
    public function tipoUsuarios()
    {
        $tipos_users = TipoUser::all();
        return $tipos_users;
    }
    public function usuarios()
    {
        $user = User::all();
        return $user;
    }
}
