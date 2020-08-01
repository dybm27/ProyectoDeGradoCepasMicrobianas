<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TipoMetodoConservacionHongo extends Model
{
    public function metodosConservacion()
    {
        return $this->hasMany(MetodoConserHongo::class, 'tipo_id');
    }
}
