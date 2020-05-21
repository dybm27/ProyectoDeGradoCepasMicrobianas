<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CaracMacroBacteria extends Model
{
    public function bacteria()
    {
        return $this->belongsTo(Bacteria::class);
    }

    public function elevacion()
    {
        return $this->belongsTo(ElevacionBacteria::class);
    }

    public function forma()
    {
        return $this->belongsTo(FormaCaractMacroBacteria::class);
    }

    public function color()
    {
        return $this->belongsTo(ColorBacteria::class);
    }

    public function superficie()
    {
        return $this->belongsTo(SuperficieBacteria::class);
    }

    public function borde()
    {
        return $this->belongsTo(BordeBacteria::class);
    }

    public function detalleOptico()
    {
        return $this->belongsTo(DetalleOpticoBacteria::class,'detalleoptico_id');
    }
}
