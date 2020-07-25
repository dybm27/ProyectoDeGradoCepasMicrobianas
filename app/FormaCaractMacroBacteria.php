<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FormaCaractMacroBacteria extends Model
{
    public function caractMacros()
    {
        return $this->hasMany(CaracMacroBacteria::class, 'forma_id');
    }
}
