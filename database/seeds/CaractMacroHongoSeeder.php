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
            'nombre' => 'Algodona'
        ]);
        DB::table('textura_hongos')->insert([
            'nombre' => 'Granular'
        ]);
        DB::table('textura_hongos')->insert([
            'nombre' => 'Aterciopelada'
        ]);
        DB::table('textura_hongos')->insert([
            'nombre' => 'Cremosa'
        ]);
        DB::table('textura_hongos')->insert([
            'nombre' => 'Glabra'
        ]);
        DB::table('textura_hongos')->insert([
            'nombre' => 'Polvorienta'
        ]);


        DB::table('color_hongos')->insert([
            'nombre' => 'Dematiaceo (cafe - gris - negro)',
        ]);
        DB::table('color_hongos')->insert([
            'nombre' => 'Brillante (verdes)',
        ]);
    }
}
