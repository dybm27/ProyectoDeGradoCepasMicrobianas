<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TipoMetodoConservacionHongo extends Model
{
    public function metodosConservacionHongos()
    {
        return $this->hasMany(MetodoConserHongo::class);
    }
}
