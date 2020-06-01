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
        // Generos Bacterias
        DB::table('generos')->insert([
            'nombre' => 'Genero uno Bacteria',
            'grupo_microbiano_id' => 1
        ]);
        DB::table('generos')->insert([
            'nombre' => 'Genero dos Bacteria',
            'grupo_microbiano_id' => 1
        ]);
        // Generos Hongos
        DB::table('generos')->insert([
            'nombre' => 'Genero tres Hongo',
            'grupo_microbiano_id' => 2
        ]);
        DB::table('generos')->insert([
            'nombre' => 'Genero cuatro Hongo',
            'grupo_microbiano_id' => 2
        ]);
        // Generos levaduras
        DB::table('generos')->insert([
            'nombre' => 'Genero cinco  Levadura',
            'grupo_microbiano_id' => 3
        ]);
        DB::table('generos')->insert([
            'nombre' => 'Genero seis Levadura',
            'grupo_microbiano_id' => 3
        ]);
        // Generos Actinomicetos
        DB::table('generos')->insert([
            'nombre' => 'Genero siete Actinomiceto',
            'grupo_microbiano_id' => 4
        ]);
        DB::table('generos')->insert([
            'nombre' => 'Genero ocho Actinomiceto',
            'grupo_microbiano_id' => 4
        ]);
    }
}
