<?php

use Illuminate\Database\Seeder;

class ColoresHongosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('color_hongos')->insert([
            'nombre' => 'Dematiaceo (cafe - gris - negro)',
        ]);
        DB::table('color_hongos')->insert([
            'nombre' => 'Brillante (verdes)',
        ]);
        
    }
}
