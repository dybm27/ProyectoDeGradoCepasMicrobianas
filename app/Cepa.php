<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cepa extends Model
{

    public function especie()
    {
        return $this->belongsTo(Especie::class);
    }

    public function genero()
    {
        return $this->belongsTo(Genero::class);
    }

    public function grupoMicrobiano()
    {
        return $this->belongsTo(GrupoMicrobiano::class);
    }

    public function bacteria()
    {
        return $this->hasOne(Bacteria::class);
    }

    public function hongo()
    {
        return $this->hasOne(HongoFilamentoso::class);
    }

    public function actinomiceto()
    {
        return $this->hasOne(Actinomiceto::class);
    }

    public function levadura()
    {
        return $this->hasOne(Levadura::class);
    }
}
