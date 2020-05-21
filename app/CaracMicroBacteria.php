<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CaracMicroBacteria extends Model
{
    public function bacteria()
    {
        return $this->belongsTo(Bacteria::class);
    }

    public function forma()
    {
        return $this->belongsTo(FormaCaractMicroBacteria::class);
    }
}
