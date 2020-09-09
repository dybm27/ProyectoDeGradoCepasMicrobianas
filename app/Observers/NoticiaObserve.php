<?php

namespace App\Observers;

use App\Noticia;
use Illuminate\Support\Str;

class NoticiaObserve
{
    public function saving(Noticia $noticia)
    {
        $noticia->slug = Str::slug($noticia->titulo);

    }
}
