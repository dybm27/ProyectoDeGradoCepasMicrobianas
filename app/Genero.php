<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Genero extends Model
{
    public function grupo_microbiano()
    {
        return $this->belongsTo(GrupoMicrobiano::class);
    }

    public function especies()
    {
        return $this->hasMany(Especie::class);
    }

    public function cepas()
    {
        return $this->hasMany(Cepa::class);
    }
}
