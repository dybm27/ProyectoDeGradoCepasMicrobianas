<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BordeActinomiceto extends Model
{
    public function caractMacros()
    {
        return $this->hasMany(CaracMacroActinomiceto::class, 'borde_id');
    }
}
