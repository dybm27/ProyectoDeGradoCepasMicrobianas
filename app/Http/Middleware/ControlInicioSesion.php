<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class ControlInicioSesion
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
        if (!session()->has('lastActivityTime')) {
            session(['lastActivityTime' => now()]);
        }

        if (Auth::check()) {
            //validar inicio de sesion en otro navegador
            if (!is_null(Auth::user()->session_id)) {
                if (Session::getId() != Auth::user()->session_id) {
                    if (now()->diffInMinutes(Auth::user()->lastActivityTime) >= (30)) {
                        Auth::user()->session_id = Session::getId();
                        Auth::user()->save();
                    } else {
                        Auth::user()->session_id = null;
                        Auth::user()->save();
                        Auth::logout();
                        session()->forget('lastActivityTime');
                        $message = "Ya ha iniciado sesión desde otro navegador. 
                        Por motivos de seguridad se ha cerrado la sesion anterior. 
                        Puede volver a intentarlo.";
                        return redirect('/')->with('message', $message);
                    }
                } else {
                    //validar estado de la sesion
                    if (now()->diffInMinutes(session('lastActivityTime')) >= (30)) {
                        Auth::user()->session_id = null;
                        Auth::user()->save();
                        Auth::logout();
                        session()->forget('lastActivityTime');
                        $message = "Sobrepasó el tiempo de inactividad. Inicie sesión nuevamente.";
                        return redirect('/')->with('message', $message);
                    }
                }
            } else {
                if (now()->diffInMinutes(session('lastActivityTime')) >= (30)) {
                    Auth::user()->session_id = null;
                    Auth::user()->save();
                    Auth::logout();
                    session()->forget('lastActivityTime');
                    $message = "Sobrepasó el tiempo de inactividad. Inicie sesión nuevamente.";
                    return redirect('/')->with('message', $message);
                } else {
                    Auth::user()->session_id = Session::getId();
                    Auth::user()->save();
                }
            }
        } else {
            return redirect('/');
        }
        Auth::user()->lastActivityTime = now();
        Auth::user()->save();
        session(['lastActivityTime' => now()]);
        return $next($request);
    }
}
