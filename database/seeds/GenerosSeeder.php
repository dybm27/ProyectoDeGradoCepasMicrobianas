<?php

use Illuminate\Database\Seeder;

class GenerosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('generos')->insert([
            'nombre' => 'genero 1',
        ]);
        DB::table('generos')->insert([
            'nombre' => 'genero 2',
        ]);
        DB::table('generos')->insert([
            'nombre' => 'genero 3',
        ]);
        DB::table('generos')->insert([
            'nombre' => 'genero 4',
        ]);
    }
}
