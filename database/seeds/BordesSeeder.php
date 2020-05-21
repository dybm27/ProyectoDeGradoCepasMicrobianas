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
        DB::table('bordes')->insert([
            'nombre'=>'Entero'
        ]);
        DB::table('bordes')->insert([
            'nombre'=>'Ondulado'
        ]);
        DB::table('bordes')->insert([
            'nombre'=>'Lobulado'
        ]);
        DB::table('bordes')->insert([
            'nombre'=>'Espinoso-dentado-lacerado o crenado'
        ]);
        DB::table('bordes')->insert([
            'nombre'=>'Filamentoso'
        ]);
        DB::table('bordes')->insert([
            'nombre'=>'Enrollado'
        ]);
    }
}
