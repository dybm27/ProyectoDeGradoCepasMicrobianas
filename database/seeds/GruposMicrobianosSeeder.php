<?php

use Illuminate\Database\Seeder;

class GruposMicrobianosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('grupo_microbianos')->insert([
            'nombre' => 'Bacterias',
        ]);
        DB::table('grupo_microbianos')->insert([
            'nombre' => 'Hongos Filamentosos',
        ]);
        DB::table('grupo_microbianos')->insert([
            'nombre' => 'Levaduras',
        ]);
        DB::table('grupo_microbianos')->insert([
            'nombre' => 'Actinomisetos',
        ]);
    }
}
