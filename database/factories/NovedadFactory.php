<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Novedad;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Novedad::class, function (Faker $faker) {
    return [
        'titulo' => $faker->unique()->name,
        'link' => 'qweqwe',
        'cuerpo' => 'qweqwe',
        'imagenesEditor' => 'qweqwe',
        'imagen' => 'asdads',
        'imagenPublica' => 'asdads',
        'publicar' => 0,
        'slug' => function (array $novedad) {
            return Str::slug($novedad['titulo'], "-");
        },
    ];
});
