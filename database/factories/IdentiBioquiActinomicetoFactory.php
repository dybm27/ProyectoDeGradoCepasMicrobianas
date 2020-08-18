<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Actinomiceto;
use App\IdentBioquiActinomiceto;
use Faker\Generator as Faker;

$factory->define(IdentBioquiActinomiceto::class, function (Faker $faker) {
    return [
        'actinomiceto_id' => factory(Actinomiceto::class)->create(),
        'oxidasa' => 1,
        'catalasa' => 'qweqwe',
        'citrato' => 'qweqwe',
        'nitrato' => 'qweqwe',
        'hidro_urea' => 'qweqwe',
        'caseina' => 'qweqwe',
        'hidro_gelatina' => 'qweqwe',
        'fer_lactosa' => 'qweqwe',
        'fer_manitol' => 'qweqwe',
        'fer_inositol' => 'qweqwe',
        'fer_sacarosa' => 'qweqwe',
        'fer_otro' => 'qweqwe',
        'sensi_antibioticos' => 'qweqwe',
        'imagen1' => 'qweqwe',
        'imagenPublica1' => 'qweqwe',
        'imagen2' => 'qweqwe',
        'imagenPublica2' => 'qweqwe',
        'imagen3' => 'qweqeq',
        'imagenPublica3' => 'qweqeq'
    ];
});
