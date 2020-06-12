<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PublicidadController extends Controller
{
    public function index()
    {
        return view('sitio-web.publicidad');
    }
}
