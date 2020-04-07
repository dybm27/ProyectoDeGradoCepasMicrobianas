<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TipoMetodoConservacionLevadura extends Model
{
    public function metodosConservacionLevaduras()
    {
        return $this->hasMany(MetodoConserLevadura::class);
    }
}
