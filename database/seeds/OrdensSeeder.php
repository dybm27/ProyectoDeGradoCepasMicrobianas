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
            'nombre' => 'orden 1',
        ]);
        DB::table('ordens')->insert([
            'nombre' => 'orden 2',
        ]);
        DB::table('ordens')->insert([
            'nombre' => 'orden 3',
        ]);
        DB::table('ordens')->insert([
            'nombre' => 'orden 4',
        ]);
    }
}
