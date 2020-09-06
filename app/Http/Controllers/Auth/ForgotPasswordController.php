<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\ImagenLogin;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Support\Facades\Password;

use function GuzzleHttp\Promise\all;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails;

    public function showLinkRequestForm()
    {
        $imagenes = ImagenLogin::where('mostrar', 1)->get();
        return view('resetPass', compact('imagenes'));
    }
}
