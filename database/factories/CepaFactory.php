<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Cepa;
use App\Especie;
use App\Genero;
use App\GrupoMicrobiano;
use Faker\Generator as Faker;

$factory->define(Cepa::class, function (Faker $faker) {
    return [
        'codigo' => $faker->unique()->firstName,
        'grupo_microbiano_id' =>  rand(1,4),
        'genero_id' =>  rand(1,4),
        'especie_id' =>  rand(1,4),
        'estado' => 'vivo',
        'origen' => 'ufps',
        'publicar' => rand(0,1)
    ];
});
