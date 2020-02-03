<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Division extends Model
{
    public function levaduras()
    {
        return $this->hasMany(Levadura::class);
    }
}
