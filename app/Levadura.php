<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Levadura extends Model
{
    public function orden()
    {
        return $this->belongsTo(Orden::class);
    }

    public function division()
    {
        return $this->belongsTo(Division::class);
    }
    
    public function familia()
    {
        return $this->belongsTo(Familia::class);
    }

    public function clase()
    {
        return $this->belongsTo(Clase::class);
    }

    public function cepa()
    {
        return $this->belongsTo(Cepa::class);
    }

    public function caractMacroscopicas()
    {
        return $this->hasMany(CaracMacroLevadura::class);
    }

    public function caractMicroscopicas()
    {
        return $this->hasOne(CaracMicroLevadura::class);
    }

    public function caractBioquimica()
    {
        return $this->hasOne(CaracBioquiLevadura::class);
    }

    public function identMolecular()
    {
        return $this->hasOne(IdentiMolecuLevadura::class);
    }

    public function metodoConservacion()
    {
        return $this->hasMany(MetodoConserLevadura::class);
    }
}
