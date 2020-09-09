<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Evento;
use Faker\Generator as Faker;

$factory->define(Evento::class, function (Faker $faker) {
    return [
        'autor' => 2,
        'titulo' => 'asda',
        'color' => 'asda',
        'fecha' => 'asda',
        'descripcion' => 'asda'
    ];
});
