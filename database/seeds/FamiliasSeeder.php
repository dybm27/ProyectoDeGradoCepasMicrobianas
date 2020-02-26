<?php

use Illuminate\Database\Seeder;

class FamiliasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('familias')->insert([
            'nombre' => 'Familia 1',
        ]);
        DB::table('familias')->insert([
            'nombre' => 'Familia 2',
        ]);
        DB::table('familias')->insert([
            'nombre' => 'Familia 3',
        ]);
        DB::table('familias')->insert([
            'nombre' => 'Familia 4',
        ]);
    }
}
