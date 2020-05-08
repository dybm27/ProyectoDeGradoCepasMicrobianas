<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MicelioActinomiceto extends Model
{
    public function caractMicros()
    {
        return $this->hasMany(CaracMacroActinomiceto::class);
    }
}
