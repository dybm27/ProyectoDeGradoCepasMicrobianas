<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\CaracBioquiLevadura;
use App\Levadura;
use Faker\Generator as Faker;

$factory->define(CaracBioquiLevadura::class, function (Faker $faker) {
    return [
        'levadura_id' => factory(Levadura::class)->create(),
        'ureasa' => 'qweqwe',
        'fenol_oxidasa' => 'qweqwe',
        'ureasa' => 'qweqwe',
        'produccion_acido' => 'qweqwe',
        'termotolerancia_37' => 'qweqwe',
        'termotolerancia_42' => 'qweqwe',
        'termotolerancia_45' => 'qweqwe',
        'termotolerancia_otra' => 'qweqwe',
        'crecimiento' => 'qweqwe',
        'nitratos' => 'qweqwe',
        'otras_caract' => 'qweqwe',
        'imagen1' => 'qweqwe',
        'imagenPublica1' => 'qweqwe',
        'imagen2' => 'qweqwe',
        'imagenPublica2' => 'qweqwe',
        'imagen3' => 'qweqwe',
        'imagenPublica3' => 'qweqwe',
    ];
});
