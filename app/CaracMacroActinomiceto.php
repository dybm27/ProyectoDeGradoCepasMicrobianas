<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CaracMacroActinomiceto extends Model
{
    public function actinomiceto()
    {
        return $this->belongsTo(Actinomiceto::class);
    }

    public function textura()
    {
        return $this->belongsTo(TexturaActinomiceto::class);
    }

    public function forma()
    {
        return $this->belongsTo(FormaCaractMacroActinomiceto::class);
    }

    public function color()
    {
        return $this->belongsTo(ColorActinomiceto::class);
    }

    public function superficie()
    {
        return $this->belongsTo(SuperficieActinomiceto::class);
    }

    public function borde()
    {
        return $this->belongsTo(BordeActinomiceto::class);
    }

    public function pigmento()
    {
        return $this->belongsTo(PigmentoActinomiceto::class);
    }
}
