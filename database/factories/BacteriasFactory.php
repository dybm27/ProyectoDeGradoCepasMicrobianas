<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Bacteria;
use App\Cepa;
use Faker\Generator as Faker;

$factory->define(Bacteria::class, function (Faker $faker) {
    return [
        'cepa_id' => factory(Cepa::class)->create([
            'grupo_microbiano_id' => 1,
        ]),
    ];
});
