<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EsporaSexualHongo extends Model
{
    public function caractMicros()
    {
        return $this->hasMany(CaracMicroHongo::class, 'espora_sexual_id');
    }
}
