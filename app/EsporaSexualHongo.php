<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EsporaSexualHongo extends Model
{
    public function caractMicroHongos(){
        return $this->hasMany(CaracMicroHongo::class);
    }
}
