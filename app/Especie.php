<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Especie extends Model
{
    public function cepas()
    {
        return $this->hasMany(Cepa::class);
    }
}
