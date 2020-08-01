<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EsporaAsexualHongo extends Model
{
    public function caractMicros()
    {
        return $this->hasMany(CaracMicroHongo::class, 'espora_asexual_id');
    }
}
