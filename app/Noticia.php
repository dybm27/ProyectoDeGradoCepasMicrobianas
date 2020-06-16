<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Noticia extends Model
{
    public function especies()
    {
        return $this->hasMany(ImagenesEditorNoticia::class);
    }
}
