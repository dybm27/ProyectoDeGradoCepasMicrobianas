<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class IdentiMolecuHongo extends Model
{
    public function hongoFilamentoso()
    {
        return $this->belongsTo(HongoFilamentoso::class);
    }
}
