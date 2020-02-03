<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reino extends Model
{
    public function actinomicetos()
    {
        return $this->hasMany(Actinomiceto::class);
    }
}
