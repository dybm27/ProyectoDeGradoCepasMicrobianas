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
            'nombre' => 'Bacteria',
        ]);
        DB::table('grupo_microbianos')->insert([
            'nombre' => 'Hongo Filamentoso',
        ]);
        DB::table('grupo_microbianos')->insert([
            'nombre' => 'Levadura',
        ]);
        DB::table('grupo_microbianos')->insert([
            'nombre' => 'Actinomiceto',
        ]);
    }
}
