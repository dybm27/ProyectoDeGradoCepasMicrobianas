<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TipoMetodoConservacionHongoLevadura extends Model
{
    public function metodosConservacionLevaduras()
    {
        return $this->hasMany(MetodoConserLevadura::class);
    }

    public function metodosConservacionHongos()
    {
        return $this->hasMany(MetodoConserHongo::class);
    }
}
