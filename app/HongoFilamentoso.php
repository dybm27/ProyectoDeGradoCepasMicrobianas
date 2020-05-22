<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HongoFilamentoso extends Model
{
    public function orden()
    {
        return $this->belongsTo(Orden::class);
    }

    public function phylum()
    {
        return $this->belongsTo(Phylum::class);
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
        return $this->hasMany(CaracMacroHongo::class);
    }

    public function caractMicroscopica()
    {
        return $this->hasOne(CaracMicroHongo::class);
    }

    public function caractBioquimica()
    {
        return $this->hasOne(CaracBioquiHongo::class);
    }

    public function identMolecular()
    {
        return $this->hasOne(IdentiMolecuHongo::class);
    }

    public function metodosConservacion()
    {
        return $this->hasMany(MetodoConserHongo::class);
    }
}
