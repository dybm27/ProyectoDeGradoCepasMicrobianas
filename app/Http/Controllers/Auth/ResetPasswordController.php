<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\ImagenLogin;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\ResetsPasswords;

class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
     * Where to redirect users after resetting their password.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    public function showResetForm(Request $request, $token = null)
    {
        $imagenes = ImagenLogin::where('mostrar', 1)->get();
        return view('resetConfirm')->with(
            ['token' => $token, 'email' => $request->email, 'imagenes' => $imagenes]
        );
    }

    protected function rules()
    {
        return [
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|confirmed|min:8|max:15',
        ];
    }

    protected function validationErrorMessages()
    {
        return [
            'email.required' => 'El correo electrónico es requerido.',
            'token.required' => 'El token es requerido.',
            'email.email' => 'El correo elctrónico no es valido.',
            'password.required' => 'La contraseña es requerida.',
            'password.confirmed' => 'Las contraseñas no son iguales',
            'password.min' => 'La contraseña debe ser minimo de 8 caracteres',
            'password.max' => 'La contraseña debe ser minimo de 15 caracteres',
        ];
    }
}
