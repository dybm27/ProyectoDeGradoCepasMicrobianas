<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TexturaActinomiceto extends Model
{
    public function caractMacros()
    {
        return $this->hasMany(CaracMacroActinomiceto::class, 'textura_id');
    }
}
