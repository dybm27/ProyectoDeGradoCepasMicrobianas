<?php

use Illuminate\Database\Seeder;

class ClasesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('clases')->insert([
            'nombre' => 'Clase 1',
        ]);
        DB::table('clases')->insert([
            'nombre' => 'Clase 2',
        ]);
        DB::table('clases')->insert([
            'nombre' => 'Clase 3',
        ]);
        DB::table('clases')->insert([
            'nombre' => 'Clase 4',
        ]);
    }
}
