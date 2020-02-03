<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ElevacionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('elevacions')->insert([
            'nombre'=>'Plana o aplastada'
        ]);
        DB::table('elevacions')->insert([
            'nombre'=>'Elevada o lente'
        ]);
        DB::table('elevacions')->insert([
            'nombre'=>'Convexa baja'
        ]);
        DB::table('elevacions')->insert([
            'nombre'=>'Convexa o cupuliforme'
        ]);
        DB::table('elevacions')->insert([
            'nombre'=>'Mamelonada o umbonada'
        ]);
        DB::table('elevacions')->insert([
            'nombre'=>'Pulvinada'
        ]);
        DB::table('elevacions')->insert([
            'nombre'=>'Umbilicada o crateriforme'
        ]);
    }
}
