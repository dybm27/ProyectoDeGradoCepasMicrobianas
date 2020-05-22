<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bacteria extends Model
{
    public function cepa()
    {
        return $this->belongsTo(Cepa::class);
    }

    public function caractMacroscopicas()
    {
        return $this->hasMany(CaracMacroBacteria::class);
    }

    public function caractMicroscopica()
    {
        return $this->hasOne(CaracMicroBacteria::class);
    }

    public function caractBioquimica()
    {
        return $this->hasOne(CaracBioquiBacteria::class);
    }

    public function caractFisiologica()
    {
        return $this->hasOne(CaracFisioBacteria::class);
    }

    public function identMolecular()
    {
        return $this->hasOne(IdentiMolecuBacteria::class);
    }

    public function metodosConservacion()
    {
        return $this->hasMany(MetodoConserBacteria::class);
    }
}
