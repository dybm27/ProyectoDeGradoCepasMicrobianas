<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Seguimiento;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Seguimiento::class, function (Faker $faker) {
    return [
        'nombre_responsable' => "qweqweqwe",
        'email_responsable' => "qweqweqwe",
        'rol' => "qweqweqwe",
        'accion' => "qweqweqwe"
    ];
});
