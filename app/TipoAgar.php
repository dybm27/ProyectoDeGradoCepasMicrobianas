<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TipoAgar extends Model
{
    public function metodosConservacion()
    {
        return $this->hasMany(MetodoConserBacteria::class);
    }
}
