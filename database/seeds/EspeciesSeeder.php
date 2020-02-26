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
            'nombre' => 'Especie 1',
        ]);
        DB::table('especies')->insert([
            'nombre' => 'Especie 2',
        ]);
        DB::table('especies')->insert([
            'nombre' => 'Especie 3',
        ]);
        DB::table('especies')->insert([
            'nombre' => 'Especie 4',
        ]);
    }
}
