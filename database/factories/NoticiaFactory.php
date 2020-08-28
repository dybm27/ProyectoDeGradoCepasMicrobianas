<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Noticia;
use Faker\Generator as Faker;

$factory->define(Noticia::class, function (Faker $faker) {
    return [
        'titulo' => $faker->unique()->name,
        'link' => 'qweqwe',
        'cuerpo' => 'qweqwe',
        'imagenesEditor' => 'qweqwe',
        'imagen' => 'asdads',
        'imagenPublica' => 'asdads',
        'publicar' => 0
    ];
});
