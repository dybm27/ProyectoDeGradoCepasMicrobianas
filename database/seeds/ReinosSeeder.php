<?php

use Illuminate\Database\Seeder;

class ReinosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('reinos')->insert([
            'nombre' => 'reino 1',
        ]);
        DB::table('reinos')->insert([
            'nombre' => 'reino 2',
        ]);
        DB::table('reinos')->insert([
            'nombre' => 'reino 3',
        ]);
        DB::table('reinos')->insert([
            'nombre' => 'reino 4',
        ]);
    }
}
