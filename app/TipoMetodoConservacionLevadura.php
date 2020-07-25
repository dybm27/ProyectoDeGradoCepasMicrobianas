<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TipoMetodoConservacionLevadura extends Model
{
    public function metodosConservacion()
    {
        return $this->hasMany(MetodoConserLevadura::class, 'tipo_id');
    }
}
