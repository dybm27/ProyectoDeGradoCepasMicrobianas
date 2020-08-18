<?php

use Illuminate\Database\Seeder;

class CaractMicroBacteriaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('forma_caract_micro_bacterias')->insert([
            'nombre' => 'Coco'
        ]);
        DB::table('forma_caract_micro_bacterias')->insert([
            'nombre' => 'Cocobacilo'
        ]);
        DB::table('forma_caract_micro_bacterias')->insert([
            'nombre' => 'Bacilo'
        ]);
        DB::table('forma_caract_micro_bacterias')->insert([
            'nombre' => 'Bacilo corto'
        ]);
        DB::table('forma_caract_micro_bacterias')->insert([
            'nombre' => 'Vibrio'
        ]);
        DB::table('forma_caract_micro_bacterias')->insert([
            'nombre' => 'Espirilo'
        ]);
    }
}
