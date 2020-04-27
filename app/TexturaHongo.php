<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TexturaHongo extends Model
{
    public function caractMacro()
    {
        return $this->belongsTo(CaracMacroHongo::class);
    }
}
