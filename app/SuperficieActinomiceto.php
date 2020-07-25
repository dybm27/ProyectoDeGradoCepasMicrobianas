<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SuperficieActinomiceto extends Model
{
    public function caractMacros()
    {
        return $this->hasMany(CaracMacroActinomiceto::class, 'superficie_id');
    }
}
