<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ConidioforoActinomiceto extends Model
{
    public function caractMicros()
    {
        return $this->hasMany(CaracMicroActinomiceto::class, 'conidioforo_id');
    }
}
