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
            'nombre' => 'clase 1',
        ]);
        DB::table('clases')->insert([
            'nombre' => 'clase 2',
        ]);
        DB::table('clases')->insert([
            'nombre' => 'clase 3',
        ]);
        DB::table('clases')->insert([
            'nombre' => 'clase 4',
        ]);
    }
}
