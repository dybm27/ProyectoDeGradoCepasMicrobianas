<?php

use Illuminate\Database\Seeder;

class OrdensSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ordens')->insert([
            'nombre' => 'Orden 1',
        ]);
        DB::table('ordens')->insert([
            'nombre' => 'Orden 2',
        ]);
        DB::table('ordens')->insert([
            'nombre' => 'Orden 3',
        ]);
        DB::table('ordens')->insert([
            'nombre' => 'Orden 4',
        ]);
    }
}
