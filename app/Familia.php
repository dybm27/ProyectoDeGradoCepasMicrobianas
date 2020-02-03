<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Familia extends Model
{
    public function levaduras()
    {
        return $this->hasMany(Levadura::class);
    }

    public function hongos()
    {
        return $this->hasMany(HongoFilamentoso::class);
    }
}
