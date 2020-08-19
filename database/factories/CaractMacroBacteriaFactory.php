<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Bacteria;
use App\CaracMacroBacteria;
use Faker\Generator as Faker;

$factory->define(CaracMacroBacteria::class, function (Faker $faker) {
    return [
        'bacteria_id' => factory(Bacteria::class)->create(),
        'medio' => 'asd',
        'forma_id' => 1,
        'elevacion_id' => 1,
        'borde_id' => 1,
        'detalleoptico_id' => 1,
        'superficie_id' => 1,
        'color_id' => 1,
        'tamano' => 'qweqwe',
        'otras_caract' => 'qweqwe',
        'imagen' => 'qweqwe',
        'imagenPublica' => 'qweqeq',
    ];
});
