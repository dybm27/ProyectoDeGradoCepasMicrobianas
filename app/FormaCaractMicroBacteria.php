<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FormaCaractMicroBacteria extends Model
{
    public function caractMicros()
    {
        return $this->hasMany(CaracMicroBacteria::class, 'forma_id');
    }
}
