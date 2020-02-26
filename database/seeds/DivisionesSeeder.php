<?php

use Illuminate\Database\Seeder;

class DivisionesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('divisions')->insert([
            'nombre' => 'Division 1',
        ]);
        DB::table('divisions')->insert([
            'nombre' => 'Division 2',
        ]);
        DB::table('divisions')->insert([
            'nombre' => 'Division 3',
        ]);
        DB::table('divisions')->insert([
            'nombre' => 'Division 4',
        ]);
    }
}
