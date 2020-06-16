<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Documento extends Model
{
    public function tipo()
    {
        return $this->belongsTo(TipoDocumento::class);
    }
}
