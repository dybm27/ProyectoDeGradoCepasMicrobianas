<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MetodoConserLevadura extends Model
{
    public function levadura()
    {
        return $this->belongsTo(Levadura::class);
    }

    public function tipoMetodo()
    {
        return $this->belongsTo(TipoMetodoConservacionLevadura::class, 'tipo_id');
    }
}
