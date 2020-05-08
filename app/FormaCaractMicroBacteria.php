<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FormaCaractMicroBacteria extends Model
{
    public function caractMicros()
    {
        return $this->hasMany(CaracMacroBacteria::class);
    }
}
