<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CaracMacroLevadura extends Model
{
    public function levadura()
    {
        return $this->belongsTo(Levadura::class);
    }

    public function color()
    {
        return $this->belongsTo(ColorLevadura::class);
    }

    public function textura()
    {
        return $this->belongsTo(TexturaLevadura::class);
    }
}
