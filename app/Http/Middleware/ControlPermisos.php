<?php

namespace App\Http\Middleware;

use App\Rol;
use Closure;
use Illuminate\Support\Facades\Auth;

class ControlPermisos
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, ...$permisos)
    {
        $permisosRol = Rol::find(Auth::user()->rol_id)->permisos;
        foreach ($permisosRol as $permisoRol) {
            foreach ($permisos as $permiso) {
                if ($permisoRol->nombre == $permiso) {
                    return $next($request);
                }
            }
        }
        return abort(403);
    }
}
