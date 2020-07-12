<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ErroresController extends Controller
{
    public function error_404()
    {
        return view('404');
    }
}
