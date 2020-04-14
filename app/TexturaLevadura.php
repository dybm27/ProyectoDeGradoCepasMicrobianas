<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TexturaLevadura extends Model
{
    public function caractMacro()
    {
        return $this->belongsTo(CaracMacroLevadura::class);
    }
}
