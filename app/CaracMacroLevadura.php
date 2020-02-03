<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CaracMacroLevadura extends Model
{
    public function levadura()
    {
        return $this->belongsTo(Levadura::class);
    }
}
