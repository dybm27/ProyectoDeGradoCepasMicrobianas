<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Actinomiceto;
use App\Cepa;
use Faker\Generator as Faker;

$factory->define(Actinomiceto::class, function (Faker $faker) {
    return [
        'cepa_id' => factory(Cepa::class)->create([
            'grupo_microbiano_id' => 4,
        ]),
        'clase_id' => 1,
        'orden_id' => 1,
        'reino_id' => 1,
        'phylum_id' => 1,
    ];
});
