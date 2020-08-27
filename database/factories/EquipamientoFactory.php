<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Equipamiento;
use Faker\Generator as Faker;

$factory->define(Equipamiento::class, function (Faker $faker) {
    return [
        'nombre' => $faker->unique()->sentence(),
        'caracteristicas' => 'qweqwe',
        'funcion' => 'qweqwe',
        'imagen' => 'qweqwe',
        'imagenPublica' => 'qweqwe',
        'publicar' => 0
    ];
});
