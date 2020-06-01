<?php

use Illuminate\Database\Seeder;

class EspeciesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('especies')->insert([
            'nombre' => 'Especie uno Genero uno',
            'genero_id' => 1
        ]);
        DB::table('especies')->insert([
            'nombre' => 'Especie dos Genero uno',
            'genero_id' => 1
        ]);
        DB::table('especies')->insert([
            'nombre' => 'Especie tres Genero dos',
            'genero_id' => 2
        ]);
        DB::table('especies')->insert([
            'nombre' => 'Especie cuatro Genero dos',
            'genero_id' => 2
        ]);
        DB::table('especies')->insert([
            'nombre' => 'Especie cinco Genero tres',
            'genero_id' => 3
        ]);
        DB::table('especies')->insert([
            'nombre' => 'Especie seis Genero tres',
            'genero_id' => 3
        ]);
        DB::table('especies')->insert([
            'nombre' => 'Especie siete Genero cuatro',
            'genero_id' => 4
        ]);
        DB::table('especies')->insert([
            'nombre' => 'Especie ocho Genero cuatro',
            'genero_id' => 4
        ]);
        DB::table('especies')->insert([
            'nombre' => 'Especie nueve Genero cinco',
            'genero_id' => 5
        ]);
        DB::table('especies')->insert([
            'nombre' => 'Especie diez Genero cinco',
            'genero_id' => 5
        ]);
        DB::table('especies')->insert([
            'nombre' => 'Especie once Genero seis',
            'genero_id' => 6
        ]);
        DB::table('especies')->insert([
            'nombre' => 'Especie doce Genero seis',
            'genero_id' => 6
        ]);
        DB::table('especies')->insert([
            'nombre' => 'Especie trece Genero siete',
            'genero_id' => 7
        ]);
        DB::table('especies')->insert([
            'nombre' => 'Especie catorce Genero siete',
            'genero_id' => 7
        ]);
        DB::table('especies')->insert([
            'nombre' => 'Especie quince Genero ocho',
            'genero_id' => 8
        ]);
        DB::table('especies')->insert([
            'nombre' => 'Especie dieciseis Genero ocho',
            'genero_id' => 8
        ]);
    }
}
