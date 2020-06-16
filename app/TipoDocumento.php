<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TipoDocumento extends Model
{
    public function documentos()
    {
        return $this->hasMany(Documento::class);
    }
}
