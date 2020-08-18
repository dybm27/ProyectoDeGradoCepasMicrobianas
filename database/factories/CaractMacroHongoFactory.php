<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\CaracMacroHongo;
use App\HongoFilamentoso;
use Faker\Generator as Faker;

$factory->define(CaracMacroHongo::class, function (Faker $faker) {
    return [
        'hongo_filamentoso_id' => factory(HongoFilamentoso::class)->create(),
        'medio' => 'weqqwe',
        'textura_id' => 1,
        'caracteristicas_reverso' => 'weqqwe',
        'color_id' => 1,
        'imagen' => 'qweqwe',
        'imagenPublica' => 'qweqeq',
    ];
});
