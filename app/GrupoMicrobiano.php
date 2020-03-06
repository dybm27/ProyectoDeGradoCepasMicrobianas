<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GrupoMicrobiano extends Model
{
    public function cepas()
    {
        return $this->hasMany(Cepa::class);
    }

    public function generos()
    {
        return $this->hasMany(Genero::class);
    }
}
