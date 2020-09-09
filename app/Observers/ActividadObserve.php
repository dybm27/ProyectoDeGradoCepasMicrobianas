<?php

namespace App\Observers;

use App\Actividad;
use Illuminate\Support\Str;

class ActividadObserve
{
    public function saving(Actividad $actividad)
    {
        $actividad->slug = Str::slug($actividad->titulo);
    }
}
