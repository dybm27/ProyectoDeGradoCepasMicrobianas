<?php

use Illuminate\Database\Seeder;

class ConsistenciasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        DB::table('consistencias')->insert([
            'nombre' => 'Consistencia 1',
        ]);
        DB::table('consistencias')->insert([
            'nombre' => 'Consistencia 2',
        ]);
        DB::table('consistencias')->insert([
            'nombre' => 'Consistencia 3',
        ]);
        DB::table('consistencias')->insert([
            'nombre' => 'Consistencia 4',
        ]);
    
    }
}
