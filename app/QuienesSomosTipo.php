<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QuienesSomosTipo extends Model
{
    public function quienesSomos()
    {
        return $this->hasMany(QuienesSomos::class);
    }
}
