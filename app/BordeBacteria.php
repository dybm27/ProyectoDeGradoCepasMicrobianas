<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BordeBacteria extends Model
{
    public function caractMacros()
    {
        return $this->hasMany(CaracMacroBacteria::class);
    }
}
