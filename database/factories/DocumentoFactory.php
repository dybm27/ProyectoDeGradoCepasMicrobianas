<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Documento;
use Faker\Generator as Faker;

$factory->define(Documento::class, function (Faker $faker) {
    return [
        'tipo_documento_id' => rand(1, 2),
        'nombre_documento' => $faker->unique()->name,
        'nombre_autor' => 'qweqwe',
        'descripcion' => 'qweqwe',
        'imagen' => 'qweqwe',
        'imagenPublica' => 'qweqwe',
        'ruta' => 'asdads',
        'rutaPublica' => 'asdads',
        'publicar' => 0
    ];
});
