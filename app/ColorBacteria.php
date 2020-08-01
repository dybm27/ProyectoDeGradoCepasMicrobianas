<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ColorBacteria extends Model
{
    public function caractMacros()
    {
        return $this->hasMany(CaracMacroBacteria::class, 'color_id');
    }
}
