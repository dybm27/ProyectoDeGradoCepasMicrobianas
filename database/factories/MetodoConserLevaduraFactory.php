<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Levadura;
use App\MetodoConserLevadura;
use Faker\Generator as Faker;

$factory->define(MetodoConserLevadura::class, function (Faker $faker) {
    return [
        'levadura_id' => factory(Levadura::class)->create(),
        'tipo_id' => 1,
        'fecha' => now(),
        'numero_replicas' => rand(1, 1000),
        'recuento_microgota' => 'qweqwe',
        'medio_cultivo' => 'qweqwe',
        'numero_pases' => rand(1, 1000),
        'observaciones' => 'qweqwe',
        'imagen' => 'qweqwe',
        'imagenPublica' => 'qweqwe'
    ];
});
