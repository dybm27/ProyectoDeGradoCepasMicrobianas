<?php

namespace App\Observers;

use App\Cepa;
use Illuminate\Support\Str;

class CepaObserve
{
    public function saving(Cepa $cepa)
    {
        $cepa->slug = Str::slug($cepa->codigo);
    }
}
