<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Bacteria;
use App\MetodoConserBacteria;
use Faker\Generator as Faker;

$factory->define(MetodoConserBacteria::class, function (Faker $faker) {
    return [
        'bacteria_id' => factory(Bacteria::class)->create(),
        'tipo_id' => 1,
        'tipo_agar_id' => 1,
        'fecha' => 'qweqwe',
        'numero_replicas' => 'qweqwe',
        'recuento_microgota' => 'qweqwe',
        'imagen' => 'qweqwe',
        'imagenPublica' => 'qweqwe',
    ];
});
