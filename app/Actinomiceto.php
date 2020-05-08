<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Actinomiceto extends Model
{
    public function orden()
    {
        return $this->belongsTo(Orden::class);
    }

    public function phylum()
    {
        return $this->belongsTo(Phylum::class);
    }

    public function reino()
    {
        return $this->belongsTo(Reino::class);
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
        return $this->hasMany(CaracMacroActinomiceto::class);
    }

    public function caractMicroscopicas()
    {
        return $this->hasOne(CaracMicroActinomiceto::class);
    }

    public function identBioquimica()
    {
        return $this->hasOne(IdentBioquiActinomiceto::class);
    }

    public function otrasCaracteristicas()
    {
        return $this->hasOne(OtrasCaracActinomiceto::class);
    }

    public function caractMolecular()
    {
        return $this->hasOne(CaracMolecuActinomiceto::class);
    }

    public function metodoConservacion()
    {
        return $this->hasMany(MetodoConserActinomiceto::class);
    }
}
