<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Cepa;
use App\Levadura;
use Faker\Generator as Faker;

$factory->define(Levadura::class, function (Faker $faker) {
    return [
        'cepa_id' => factory(Cepa::class)->create([
            'grupo_microbiano_id' => 3,
        ]),
        'clase_id' => 1,
        'orden_id' => 1,
        'familia_id' => 1,
        'division_id' => 1,
    ];
});
