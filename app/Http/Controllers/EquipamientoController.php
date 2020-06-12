<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EquipamientoController extends Controller
{
    public function index()
    {
        return view('sitio-web.equipamiento');
    }
}
