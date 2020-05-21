<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ColorActinomiceto extends Model
{
    public function caractMacros()
    {
        return $this->hasMany(CaracMacroActinomiceto::class);
    }
}
