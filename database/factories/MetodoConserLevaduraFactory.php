<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Levadura;
use App\MetodoConserLevadura;
use Faker\Generator as Faker;

$factory->define(MetodoConserLevadura::class, function (Faker $faker) {
    return [
        'levadura_id' => factory(Levadura::class)->create(),
        'tipo_id' => 1,
        'fecha' => 'qweqwe',
        'numero_replicas' => 'qweqwe',
        'recuento_microgota' => 'qweqwe',
        'medio_cultivo' => 'qweqwe',
        'numero_pases' => 'qweqwe',
        'observaciones' => 'qweqwe',
        'imagen' => 'qweqwe',
        'imagenPublica' => 'qweqwe'
    ];
});
