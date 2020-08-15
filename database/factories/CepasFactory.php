<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Cepa;
use App\Especie;
use App\Genero;
use Faker\Generator as Faker;

$factory->define(Cepa::class, function (Faker $faker) {
    return [
        'codigo' => $faker->unique()->firstName,
        'grupo_microbiano_id' =>  rand(1, 4),
        'genero_id' =>  function (array $cepa) {
            return Genero::where('grupo_microbiano_id', $cepa['grupo_microbiano_id'])->first()->id;
        },
        'especie_id' => function (array $cepa) {
            return Especie::where('genero_id', $cepa['genero_id'])->first()->id;
        },
        'estado' => 'vivo',
        'origen' => 'ufps',
        'publicar' => rand(0, 1),
        'otras_caract' => $faker->sentence()
    ];
});
