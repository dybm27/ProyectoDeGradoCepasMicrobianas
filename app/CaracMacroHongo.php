<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CaracMacroHongo extends Model
{
    public function hongoFilamentoso()
    {
        return $this->belongsTo(HongoFilamentoso::class);
    }

    public function color()
    {
        return $this->belongsTo(ColorHongo::class);
    }

    public function textura()
    {
        return $this->belongsTo(TexturaHongo::class);
    }
}
