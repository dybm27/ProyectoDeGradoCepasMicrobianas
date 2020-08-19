<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\CaracMicroHongo;
use App\HongoFilamentoso;
use Faker\Generator as Faker;

$factory->define(CaracMicroHongo::class, function (Faker $faker) {
    return [
        'hongo_filamentoso_id' => factory(HongoFilamentoso::class)->create(),
        'conidioforo_id' => 1,
        'fialides' => 'qweqwe',
        'fialides_forma' => 'qweqwe',
        'fialides_otra_caracteristica' => 'qweqwe',
        'vesicula' => 'qweqwe',
        'espora_asexual_id' => 1,
        'esporas_asexuales_conidios_tamano' => 'qweqwe',
        'esporas_asexuales_conidios_color' => 'qweqwe',
        'esporas_asexuales_conidios_forma' => 'qweqwe',
        'esporas_asexuales_conidios_otras' => 'qweqwe',
        'espora_sexual_id' => 1,
        'otras_estructuras' => 'qweqwe',
        'imagen1' => 'qweqwe',
        'imagenPublica1' => 'qweqwe',
        'imagen2' => 'qweqeq',
        'imagenPublica2' => 'qweqeq',
        'imagen3' => 'qweqeq',
        'imagenPublica3' => 'qweqeq',
    ];
});
