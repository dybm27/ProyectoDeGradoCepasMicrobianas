<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Bacteria;
use App\IdentiMolecuBacteria;
use Faker\Generator as Faker;

$factory->define(IdentiMolecuBacteria::class, function (Faker $faker) {
    return [
        'bacteria_id' => factory(Bacteria::class)->create(),
        'nombre_forward' => 'qweqwe',
        'nombre_reversed' => 'qweqwe',
        'secuen_forward' => 'qweqwe',
        'secuen_reversed' => 'qweqwe',
        'produc_forward' => 'qweqwe',
        'produc_reversed' => 'qweqwe',
        'obser_secuenciacion' => 'qweqwe',
        'img_pcr' => 'qweqwe',
        'img_pcrPublica' => 'qweqwe',
        'img_secuen' => 'qweqwe',
        'img_secuenPublica' => 'qweqeq',
    ];
});
