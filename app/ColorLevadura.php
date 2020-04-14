<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ColorLevadura extends Model
{
    public function caractMacros()
    {
        return $this->hasMany(CaracMacroLevadura::class);
    }
}
