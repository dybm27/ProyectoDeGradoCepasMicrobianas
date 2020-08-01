<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TipoAgarBacteria extends Model
{
    public function metodosConservacion()
    {
        return $this->hasMany(MetodoConserBacteria::class, 'tipo_agar_id');
    }
}
