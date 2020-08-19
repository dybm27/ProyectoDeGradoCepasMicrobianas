<?php

use Illuminate\Database\Seeder;

class CaractMacroHongoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('textura_hongos')->insert([
            'nombre' => 'Textura 1'
        ]);
        DB::table('textura_hongos')->insert([
            'nombre' => 'Textura 2'
        ]);
        DB::table('textura_hongos')->insert([
            'nombre' => 'Textura 3'
        ]);

        DB::table('color_hongos')->insert([
            'nombre' => 'Rojo',
        ]);
        DB::table('color_hongos')->insert([
            'nombre' => 'Verde',
        ]);
    }
}
