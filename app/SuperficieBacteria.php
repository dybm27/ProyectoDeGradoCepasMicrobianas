<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SuperficieBacteria extends Model
{
    public function caractMacros()
    {
        return $this->hasMany(CaracMacroBacteria::class, 'superficie_id');
    }
}
