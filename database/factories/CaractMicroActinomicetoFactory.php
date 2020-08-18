<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Actinomiceto;
use App\CaracMicroActinomiceto;
use Faker\Generator as Faker;

$factory->define(CaracMicroActinomiceto::class, function (Faker $faker) {
    return [

        'actinomiceto_id' => factory(Actinomiceto::class)->create(),
        'forma_id' => 1,
        'tinciongram_id' => 1,
        'micelio_id' => 1,
        'conidioforo_id' => 1,
        'forma_estructura_reproduccion' => 'qweqwe',
        'otras_caract' => 'qweqwe',
        'imagen1' => 'qweqwe',
        'imagenPublica1' => 'qweqwe',
        'imagen2' => 'qweqwe',
        'imagenPublica2' => 'qweqwe',
        'imagen3' => 'qweqeq',
        'imagenPublica3' => 'qweqeq'
    ];
});
