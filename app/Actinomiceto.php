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
}
