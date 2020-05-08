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
        DB::table('superficie_bacterias')->insert([
            'nombre'=>'Lisa'
        ]);
        DB::table('superficie_bacterias')->insert([
            'nombre'=>'Enrugada'
        ]);
        DB::table('superficie_bacterias')->insert([
            'nombre'=>'Papilada'
        ]);
    }
}
