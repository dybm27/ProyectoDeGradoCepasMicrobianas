<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Bacteria;
use App\CaracFisioBacteria;
use Faker\Generator as Faker;

$factory->define(CaracFisioBacteria::class, function (Faker $faker) {
    return [
        'bacteria_id' => factory(Bacteria::class)->create(),
        'acido_indolacetico' => 'qweqwe',
        'fosforo' => 'qweqwe',
        'sideroforos' => 'qweqwe',
        'nitrogeno' => 'qweqwe',
        'nitrogeno' => 'qweqwe',
        'otras_caract' => 'qweqwe',
        'imagen1' => 'qweqwe',
        'imagenPublica1' => 'qweqwe',
        'imagen2' => 'qweqwe',
        'imagenPublica2' => 'qweqwe',
        'imagen3' => 'qweqeq',
        'imagenPublica3' => 'qweqeq'
    ];
});
