<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Genero;
use Faker\Generator as Faker;

$factory->define(Genero::class, function (Faker $faker) {
    return [
        'nombre' => $faker->unique()->sentence(),
        'grupo_microbiano_id' => 1
    ];
});
