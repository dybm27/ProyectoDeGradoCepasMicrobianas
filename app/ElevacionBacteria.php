<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ElevacionBacteria extends Model
{
    public function caractMacros()
    {
        return $this->hasMany(CaracMacroBacteria::class);
    }
}
