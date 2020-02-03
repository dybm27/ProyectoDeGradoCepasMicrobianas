<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MetodoConserHongo extends Model
{
    public function hongo()
    {
        return $this->belongsTo(HongoFilamentoso::class);
    }
    
    public function tipoMetodo()
    {
        return $this->belongsTo(TipoMetodoConservacionHongoLevadura::class);
    }
}
