<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CaracBioquiHongo extends Model
{
    public function hongo()
    {
        return $this->belongsTo(HongoFilamentoso::class);
    }
}
