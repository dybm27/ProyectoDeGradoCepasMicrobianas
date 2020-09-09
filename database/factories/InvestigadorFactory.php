<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Investigador;
use Faker\Generator as Faker;

$factory->define(Investigador::class, function (Faker $faker) {
    return [
        'nombres' => 'qweqwe',
        'apellidos' => 'qweqwe',
        'email' => $faker->unique()->safeEmail,
        'nivel_estudio' => 'qweqwe',
        'cargo' => 'qweqwe',
        'imagen' => 'asdads',
        'imagenPublica' => 'asdads',
        'publicar' => 0
    ];
});
