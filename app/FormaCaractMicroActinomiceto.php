<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FormaCaractMicroActinomiceto extends Model
{
    public function caractMicros()
    {
        return $this->hasMany(CaracMicroActinomiceto::class, 'forma_id');
    }
}
