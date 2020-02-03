<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ConidioforosHongosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('conidioforo_hongos')->insert([
            'nombre'=>'Erecto'
        ]);
        DB::table('conidioforo_hongos')->insert([
            'nombre'=>'Ramificado'
        ]);
    }
}
