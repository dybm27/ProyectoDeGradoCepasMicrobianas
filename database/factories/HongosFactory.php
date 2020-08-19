<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Cepa;
use App\HongoFilamentoso;
use Faker\Generator as Faker;

$factory->define(HongoFilamentoso::class, function (Faker $faker) {
    return [
        'cepa_id' => factory(Cepa::class)->create([
            'grupo_microbiano_id' => 2,
        ]),
        'clase_id' => 1,
        'orden_id' => 1,
        'familia_id' => 1,
        'phylum_id' => 1,
    ];
});
