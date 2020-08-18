<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Bacteria;
use App\CaracMicroBacteria;
use Faker\Generator as Faker;

$factory->define(CaracMicroBacteria::class, function (Faker $faker) {
    return [
        'bacteria_id' => factory(Bacteria::class)->create(),
        'forma_id' => 1,
        'ordenamiento' => 'qweqwe',
        'tincion_gram' => 'qweqwe',
        'tincion_esporas' => 'qweqwe',
        'ubicacion_esporas' => 'qweqwe',
        'tincion_capsula' => 'qweqwe',
        'otras_caract' => 'qweqwe',
        'imagen1' => 'qweqwe',
        'imagenPublica1' => 'qweqwe',
        'imagen2' => 'qweqwe',
        'imagenPublica2' => 'qweqwe',
        'imagen3' => 'qweqeq',
        'imagenPublica3' => 'qweqeq'
    ];
});
