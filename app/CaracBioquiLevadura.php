<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CaracBioquiLevadura extends Model
{
    public function levadura()
    {
        return $this->belongsTo(Levadura::class);
    }
}
