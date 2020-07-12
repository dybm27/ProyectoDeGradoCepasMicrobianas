<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QuienesSomos extends Model
{
    public function tipo()
    {
        return $this->belongsTo(QuienesSomosTipo::class);
    }
}
