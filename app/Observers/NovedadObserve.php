<?php

namespace App\Observers;

use App\Novedad;
use Illuminate\Support\Str;

class NovedadObserve
{
    public function saving(Novedad $novedad)
    {
        $novedad->slug = Str::slug($novedad->titulo);
    }
}
