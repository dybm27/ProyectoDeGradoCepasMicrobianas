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
            'nombre' => 'division 1',
        ]);
        DB::table('divisions')->insert([
            'nombre' => 'division 2',
        ]);
        DB::table('divisions')->insert([
            'nombre' => 'division 3',
        ]);
        DB::table('divisions')->insert([
            'nombre' => 'division 4',
        ]);
    }
}
