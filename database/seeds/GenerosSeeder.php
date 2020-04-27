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
            'nombre' => 'Genero 1 Bacteria',
            'grupo_microbiano_id' => 1
        ]);
        DB::table('generos')->insert([
            'nombre' => 'Genero 2 Bacteria',
            'grupo_microbiano_id' => 1
        ]);
        DB::table('generos')->insert([
            'nombre' => 'Genero 3 Bacteria',
            'grupo_microbiano_id' => 1
        ]);
        DB::table('generos')->insert([
            'nombre' => 'Genero 4 Bacteria',
            'grupo_microbiano_id' => 1
        ]);

        // Generos Hongos
        DB::table('generos')->insert([
            'nombre' => 'Genero 5  Hongo',
            'grupo_microbiano_id' => 2
        ]);
        DB::table('generos')->insert([
            'nombre' => 'Genero 6 Hongo',
            'grupo_microbiano_id' => 2
        ]);
        DB::table('generos')->insert([
            'nombre' => 'Genero 7 Hongo',
            'grupo_microbiano_id' => 2
        ]);
        DB::table('generos')->insert([
            'nombre' => 'Genero 8 Hongo',
            'grupo_microbiano_id' => 2
        ]);

        // Generos levaduras
        DB::table('generos')->insert([
            'nombre' => 'Genero 9  Levadura',
            'grupo_microbiano_id' => 3
        ]);
        DB::table('generos')->insert([
            'nombre' => 'Genero 10 Levadura',
            'grupo_microbiano_id' => 3
        ]);
        DB::table('generos')->insert([
            'nombre' => 'Genero 11 Levadura',
            'grupo_microbiano_id' => 3
        ]);
        DB::table('generos')->insert([
            'nombre' => 'Genero 12 Levadura',
            'grupo_microbiano_id' => 3
        ]);

        // Generos Actinomicetos
        DB::table('generos')->insert([
            'nombre' => 'Genero 13 Actinomiceto',
            'grupo_microbiano_id' => 4
        ]);
        DB::table('generos')->insert([
            'nombre' => 'Genero 14 Actinomiceto',
            'grupo_microbiano_id' => 4
        ]);
        DB::table('generos')->insert([
            'nombre' => 'Genero 15 Actinomiceto',
            'grupo_microbiano_id' => 4
        ]);
        DB::table('generos')->insert([
            'nombre' => 'Genero 16 Actinomiceto',
            'grupo_microbiano_id' => 4
        ]);
    }
}
