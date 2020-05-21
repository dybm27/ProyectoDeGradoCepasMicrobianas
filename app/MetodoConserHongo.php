<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MetodoConserHongo extends Model
{
    public function hongoFilamentoso()
    {
        return $this->belongsTo(HongoFilamentoso::class);
    }
    
    public function tipoMetodo()
    {
        return $this->belongsTo(TipoMetodoConservacionHongo::class, 'tipo_id');
    }
}
