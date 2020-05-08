<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BordesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('borde_bacterias')->insert([
            'nombre'=>'Entero'
        ]);
        DB::table('borde_bacterias')->insert([
            'nombre'=>'Ondulado'
        ]);
        DB::table('borde_bacterias')->insert([
            'nombre'=>'Lobulado'
        ]);
        DB::table('borde_bacterias')->insert([
            'nombre'=>'Espinoso-dentado-lacerado o crenado'
        ]);
        DB::table('borde_bacterias')->insert([
            'nombre'=>'Filamentoso'
        ]);
        DB::table('borde_bacterias')->insert([
            'nombre'=>'Enrollado'
        ]);
    }
}
