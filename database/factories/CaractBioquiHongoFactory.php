<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\CaracBioquiHongo;
use App\HongoFilamentoso;
use Faker\Generator as Faker;

$factory->define(CaracBioquiHongo::class, function (Faker $faker) {
    return [
        'hongo_filamentoso_id' => factory(HongoFilamentoso::class)->create(),
        'enzimas' => 'qweqwe',
        'azucares' => 'qweqwe',
        'otras_caracteristicas' => 'qweqwe',
        'imagen1' => 'qweqwe',
        'imagenPublica1' => 'qweqwe',
        'imagen2' => 'qweqwe',
        'imagenPublica2' => 'qweqwe',
        'imagen3' => 'qweqwe',
        'imagenPublica3' => 'qweqwe',
    ];
});
