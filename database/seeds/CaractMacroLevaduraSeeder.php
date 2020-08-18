<?php

use Illuminate\Database\Seeder;

class CaractMacroLevaduraSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('textura_levaduras')->insert([
            'nombre' => 'Textura 1'
        ]);
        DB::table('textura_levaduras')->insert([
            'nombre' => 'Textura 2'
        ]);
        DB::table('textura_levaduras')->insert([
            'nombre' => 'Textura 3'
        ]);

        DB::table('color_levaduras')->insert([
            'nombre' => 'Rojo',
        ]);
        DB::table('color_levaduras')->insert([
            'nombre' => 'Verde',
        ]);
    }
}
