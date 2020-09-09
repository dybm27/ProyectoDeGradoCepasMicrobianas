<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Actividad;
use App\Documento;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Actividad::class, function (Faker $faker) {
    return [
        'titulo' => $faker->unique()->name,
        'link' => 'qweqwe',
        'cuerpo' => 'qweqwe',
        'lugar' => 'qweqwe',
        'fecha' => now(),
        'imagenesEditor' => 'qweqwe',
        'imagen' => 'asdads',
        'imagenPublica' => 'asdads',
        'publicar' => 0,
        'slug' => function (array $activiad) {
            return Str::slug($activiad['titulo'], "-");
        },

    ];
});
