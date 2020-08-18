<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\CaracMicroLevadura;
use App\Levadura;
use Faker\Generator as Faker;

$factory->define(CaracMicroLevadura::class, function (Faker $faker) {
    return [
        'levadura_id' => factory(Levadura::class)->create(),
        'hifas' => 'qweqwe',
        'pseudohifas' => 'qweqwe',
        'balistoconidias' => 'qweqwe',
        'produccion_tubo_germinativo' => 'qweqwe',
        'capsula' => 'qweqwe',
        'blastoconidias' => 'qweqwe',
        'produccion_clamidosporas' => 'qweqwe',
        'artroconidias' => 'qweqwe',
        'induccion_filamentizacion' => 'qweqwe',
        'formacion_asco_y_ascosporas' => 'qweqwe',
        'otras_caract' => 'qweqwe',
        'imagen1' => 'qweqwe',
        'imagenPublica1' => 'qweqwe',
        'imagen2' => 'qweqeq',
        'imagenPublica2' => 'qweqeq',
        'imagen3' => 'qweqeq',
        'imagenPublica3' => 'qweqeq',
    ];
});
