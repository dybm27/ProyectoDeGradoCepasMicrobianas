<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CaracMicroActinomiceto extends Model
{
    public function actinomiceto()
    {
        return $this->belongsTo(Actinomiceto::class);
    }
    public function forma()
    {
        return $this->belongsTo(FormaCaractMicroActinomiceto::class);
    }
    public function tincionGram()
    {
        return $this->belongsTo(TincionGramActinomiceto::class, 'tinciongram_id');
    }
    public function micelio()
    {
        return $this->belongsTo(MicelioActinomiceto::class);
    }
    public function conidioforo()
    {
        return $this->belongsTo(ConidioforoActinomiceto::class);
    }
}
