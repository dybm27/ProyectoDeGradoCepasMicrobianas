<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ConidioforoHongo extends Model
{
    public function caractMicros()
    {
        return $this->hasMany(CaracMicroHongo::class, 'conidioforo_id');
    }
}
