<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class ControlSesion
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $auth = Auth::user();
        if (is_null($auth->lastActivityTime)) {
            $auth->lastActivityTime = now();
        }

        if (Auth::check()) {
            //validar inicio de sesion en otro navegador
            if (!is_null($auth->session_id)) {
                if (Session::getId() != $auth->session_id) {
                    if (now()->diffInMinutes($auth->lastActivityTime) >= (60)) {
                        $auth->session_id = Session::getId();
                        $auth->save();
                    } else {
                        $auth->session_id = null;
                        $auth->lastActivityTime = null;
                        $auth->save();
                        Auth::logout();
                        $message = "Ya ha iniciado sesión desde otro navegador. 
                        Por motivos de seguridad se ha cerrado la sesion anterior. 
                        Puede volver a intentarlo.";
                        return redirect('/')->with('message', $message);
                    }
                } else {
                    //validar estado de la sesion
                    if (now()->diffInMinutes($auth->lastActivityTime) >= (60)) {
                        $auth->session_id = null;
                        $auth->lastActivityTime = null;
                        $auth->save();
                        Auth::logout();
                        $message = "Sobrepasó el tiempo de inactividad. Inicie sesión nuevamente.";
                        return redirect('/')->with('message', $message);
                    }
                }
            } else {
                if (now()->diffInMinutes($auth->lastActivityTime) >= (60)) {
                    $auth->session_id = null;
                    $auth->lastActivityTime = null;
                    $auth->save();
                    Auth::logout();
                    $message = "Sobrepasó el tiempo de inactividad. Inicie sesión nuevamente.";
                    return redirect('/')->with('message', $message);
                } else {
                    $auth->session_id = Session::getId();
                    $auth->save();
                }
            }
        } else {
            $message = "Se ha cerrado la sesión.";
            return redirect('/')->with('message', $message);
        }
        $auth->lastActivityTime = now();
        $auth->save();
        return $next($request);
    }
}
