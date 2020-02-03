<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CaracMicroHongo extends Model
{
    public function hongo()
    {
        return $this->belongsTo(HongoFilamentoso::class);
    }

    public function conidioforo()
    {
        return $this->belongsTo(ConidioforoHongo::class);
    }

    public function esporaAsexual()
    {
        return $this->belongsTo(EsporaAsexualHongo::class);
    }

    public function esporaSexual()
    {
        return $this->belongsTo(EsporaSexualHongo::class);
    }
}
