<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Actinomiceto;
use App\CaracMacroActinomiceto;
use Faker\Generator as Faker;

$factory->define(CaracMacroActinomiceto::class, function (Faker $faker) {
    return [
        'actinomiceto_id' => factory(Actinomiceto::class)->create(),
        'medio' => 'qweqwe',
        'forma_id' => 1,
        'textura_id' => 1,
        'borde_id' => 1,
        'pigmento_id' => 1,
        'superficie_id' => 1,
        'color_id' => 1,
        'secrecion_geosminas' => 'qweqwe',
        'otras_caract' => 'qweqwe',
        'imagen' => 'qweqwe',
        'imagenPublica' => 'qweqeq',
    ];
});
