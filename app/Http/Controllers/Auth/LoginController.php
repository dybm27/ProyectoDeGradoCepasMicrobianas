<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\ImagenLogin;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Socialite;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */

    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function showLoginForm()
    {
        $imagenes = ImagenLogin::where('mostrar', 1)->get();
        return view('login', compact('imagenes'));
    }

    protected function sendLoginResponse(Request $request)
    {
        $request->session()->regenerate();
        if (is_null(Auth::User()->session_id)) {
            Auth::user()->session_id = Session::getId();
            Auth::user()->save();
        }
        $this->clearLoginAttempts($request);

        return $this->authenticated($request, $this->guard()->user())
            ?: redirect()->intended($this->redirectPath());
    }

    public function logout(Request $request)
    {
        Auth::user()->session_id = null;
        Auth::user()->lastActivityTime = null;
        Auth::user()->save();

        $this->guard()->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return $this->loggedOut($request) ?: redirect('/');
    }

    public function redirectToProvider()
    {
        return Socialite::driver('google')->redirect();
    }

    /**
     * Obtain the user information from GitHub.
     *
     * @return \Illuminate\Http\Response
     */
    public function handleProviderCallback()
    {
        try {
            $user = Socialite::driver('google')->user();
            $findUser = User::where('email', $user->getEmail())->first();
            if (!is_null($findUser)) {
                Auth::login($findUser);
                if (is_null(Auth::User()->session_id)) {
                    Auth::user()->session_id = Session::getId();
                    Auth::user()->save();
                }
                return redirect('/perfil');
            } else {
                return redirect('/')->with('errorLoginGoogle', 'No hay ningun registro con esa cuenta');
            }
        } catch (\Throwable $th) {
            return redirect('/')->with('errorLoginGoogle', 'Error al intentar iniciar sesion con google');
        }
    }
}
