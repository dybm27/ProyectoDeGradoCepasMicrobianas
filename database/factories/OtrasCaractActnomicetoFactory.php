<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Actinomiceto;
use App\OtrasCaracActinomiceto;
use Faker\Generator as Faker;

$factory->define(OtrasCaracActinomiceto::class, function (Faker $faker) {
    return [
        'actinomiceto_id' => factory(Actinomiceto::class)->create(),
        'fijacion_nitrogeno' => 'qweqwe',
        'produccion_aia' => 'qweqwe',
        'giberelinas' => 'qweqwe',
        'produccion_sideroforos' => 'qweqwe',
        'solubili_fosforo' => 'qweqwe',
        'produccion_pha' => 'qweqwe',
        'alta_produc_antibioticos' => 'qweqwe',
        'activi_enzimaticas' => 'qweqwe',
        'antagonismos' => 'qweqwe',
        'otras_caract' => 'qweqwe',
        'imagen1' => 'qweqwe',
        'imagenPublica1' => 'qweqwe',
        'imagen2' => 'qweqwe',
        'imagenPublica2' => 'qweqwe',
        'imagen3' => 'qweqeq',
        'imagenPublica3' => 'qweqeq'
    ];
});
