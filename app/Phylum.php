<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Phylum extends Model
{
    public function actinomicetos()
    {
        return $this->hasMany(Actinomiceto::class);
    }
    public function hongos()
    {
        return $this->hasMany(HongoFilamentoso::class);
    }
}
