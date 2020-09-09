<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\HongoFilamentoso;
use App\MetodoConserHongo;
use Faker\Generator as Faker;

$factory->define(MetodoConserHongo::class, function (Faker $faker) {
    return [
        'hongo_filamentoso_id' => factory(HongoFilamentoso::class)->create(),
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
