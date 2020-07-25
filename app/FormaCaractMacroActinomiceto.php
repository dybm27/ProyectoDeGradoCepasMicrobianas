<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FormaCaractMacroActinomiceto extends Model
{
    public function caractMacros()
    {
        return $this->hasMany(CaracMacroActinomiceto::class, 'forma_id');
    }
}
