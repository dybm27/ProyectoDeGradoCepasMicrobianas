<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MetodoConserActinomiceto extends Model
{
    public function actinomiceto()
    {
        return $this->belongsTo(Actinomiceto::class);
    }
}
