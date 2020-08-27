<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Especie;
use Faker\Generator as Faker;

$factory->define(Especie::class, function (Faker $faker) {
    return [
        'nombre' => $faker->unique()->sentence(),
        'genero_id' => 1
    ];
});
