<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CaracMacroBacteria extends Model
{
    public function bacteria()
    {
        return $this->belongsTo(Bacteria::class);
    }
    
}
