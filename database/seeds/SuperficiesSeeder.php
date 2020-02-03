<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SuperficiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('superficies')->insert([
            'nombre'=>'Lisa'
        ]);
        DB::table('superficies')->insert([
            'nombre'=>'Enrugada'
        ]);
        DB::table('superficies')->insert([
            'nombre'=>'Papilada'
        ]);
    }
}
