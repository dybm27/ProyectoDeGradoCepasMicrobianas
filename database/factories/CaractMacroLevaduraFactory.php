<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\CaracMacroLevadura;
use App\Levadura;
use Faker\Generator as Faker;

$factory->define(CaracMacroLevadura::class, function (Faker $faker) {
    return [
        'levadura_id' => factory(Levadura::class)->create(),
        'medio' => 'weqqwe',
        'textura_id' => 1,
        'topografia_superficie' => 'weqqwe',
        'borde_colonia' => 'weqqwe',
        'color_id' => 1,
        'imagen' => 'qweqwe',
        'imagenPublica' => 'qweqeq',
    ];
});
