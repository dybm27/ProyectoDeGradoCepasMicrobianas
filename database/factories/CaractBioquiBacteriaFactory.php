<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Bacteria;
use App\CaracBioquiBacteria;
use Faker\Generator as Faker;

$factory->define(CaracBioquiBacteria::class, function (Faker $faker) {
    return [
        'bacteria_id' => factory(Bacteria::class)->create(),
        'oxidasa' => 'qweqwe', 'catalasa' => 'qweqwe', 'citrato' => 'qweqwe', 'tsi' => 'qweqwe',
        'lia' => 'qweqwe', 'sim' => 'qweqwe', 'rm' => 'qweqwe', 'vp' => 'qweqwe', 'nitrato' => 'qweqwe',
        'caldo_urea' => 'qweqwe', 'of' => 'qweqwe', 'glucosa' => 'qweqwe', 'lactosa' => 'qweqwe',
        'manitol' => 'qweqwe', 'xilosa' => 'qweqwe', 'arabinosa' => 'qweqwe', 'sacarosa' => 'qweqwe',
        'otros_azucares' => 'qweqwe', 'almidon' => 'qweqwe', 'lecitinasa' => 'qweqwe',
        'lipasa' => 'qweqwe', 'otras_enzimas' => 'qweqwe', 'hidro_caseina' => 'qweqwe',
        'hidro_gelatina' => 'qweqwe', 'hidro_urea' => 'qweqwe', 'creci_nacl' => 'qweqwe',
        'creci_dif_temp' => 'qweqwe', 'otras_caract' => 'qweqwe', 'imagen1' => 'qweqwe',
        'imagenPublica1' => 'qweqwe', 'imagen2' => 'qweqwe', 'imagenPublica2' => 'qweqwe',
        'imagen3' => 'qweqwe', 'imagenPublica3' => 'qweqwe'
    ];
});
