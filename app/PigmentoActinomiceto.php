<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PigmentoActinomiceto extends Model
{
    public function caractMacros()
    {
        return $this->hasMany(CaracMacroActinomiceto::class);
    }
}
