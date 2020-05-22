<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DetalleOpticoBacteria extends Model
{
    public function caractMacros()
    {
        return $this->hasMany(CaracMacroBacteria::class, 'detalleoptico_id');
    }
}
