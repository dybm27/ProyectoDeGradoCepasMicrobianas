<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TincionGramActinomiceto extends Model
{
    public function caractMicros()
    {
        return $this->hasMany(CaracMicroActinomiceto::class, 'tinciongram_id');
    }
}
