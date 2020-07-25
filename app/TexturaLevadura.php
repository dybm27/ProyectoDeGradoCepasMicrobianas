<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TexturaLevadura extends Model
{
    public function caractMacros()
    {
        return $this->hasMany(CaracMacroLevadura::class, 'textura_id');
    }
}
