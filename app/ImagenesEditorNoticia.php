<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ImagenesEditorNoticia extends Model
{
    public function noticia()
    {
        return $this->belongsTo(Noticia::class);
    }
}
