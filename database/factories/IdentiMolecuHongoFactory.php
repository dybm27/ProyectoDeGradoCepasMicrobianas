<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\HongoFilamentoso;
use App\IdentiMolecuHongo;
use Faker\Generator as Faker;

$factory->define(IdentiMolecuHongo::class, function (Faker $faker) {
    return [
        'hongo_filamentoso_id' => factory(HongoFilamentoso::class)->create(),
        'nombre_forward' => 'qweqwe',
        'nombre_reversed' => 'qweqwe',
        'secuencia_forward' => 'qweqwe',
        'secuencia_reversed' => 'qweqwe',
        'producto_forward' => 'qweqwe',
        'producto_reversed' => 'qweqwe',
        'condiciones_pcr' => 'qweqwe',
        'blast' => 'qweqwe',
        'analisis_filogenetico' => 'qweqwe',
        'observaciones' => 'qweqwe',
        'imagen_pcr' => 'qweqeq',
        'imagen_pcrPublica' => 'qweqeq',
        'imagen_blast' => 'qweqeq',
        'imagen_blastPublica' => 'qweqeq',
    ];
});
