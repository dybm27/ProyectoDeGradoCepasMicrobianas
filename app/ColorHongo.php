<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ColorHongo extends Model
{
    public function caractMacros()
    {
        return $this->hasMany(CaracMacroHongo::class, 'color_id');
    }
}
