<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class IdentiMolecuHongo extends Model
{
    public function hongo()
    {
        return $this->belongsTo(HongoFilamentoso::class);
    }
}
