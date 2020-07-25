<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TexturaHongo extends Model
{
    public function caractMacros()
    {
        return $this->hasMany(CaracMacroHongo::class, 'textura_id');
    }
}
