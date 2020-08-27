<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Actividad;
use Faker\Generator as Faker;

$factory->define(Actividad::class, function (Faker $faker) {
    return [
        'titulo' => $faker->unique()->sentence(),
        'link' => 'qweqwe',
        'cuerpo' => 'qweqwe',
        'lugar' => 'qweqwe',
        'fecha' => 'qweqwe',
        'imagenesEditor' => 'qweqwe',
        'imagen' => 'asdads',
        'imagenPublica' => 'asdads',
        'publicar' => 0
        
    ];
});
