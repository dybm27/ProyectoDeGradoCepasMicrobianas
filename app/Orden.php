<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Orden extends Model
{
    public function actinomicetos()
    {
        return $this->hasMany(Actinomiceto::class);
    }

    public function levaduras()
    {
        return $this->hasMany(Levadura::class);
    }

    public function hongos()
    {
        return $this->hasMany(HongoFilamentoso::class);
    }
}
