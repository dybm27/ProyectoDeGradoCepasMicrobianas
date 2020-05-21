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
        DB::table('elevacion_bacterias')->insert([
            'nombre'=>'Plana o aplastada'
        ]);
        DB::table('elevacion_bacterias')->insert([
            'nombre'=>'Elevada o lente'
        ]);
        DB::table('elevacion_bacterias')->insert([
            'nombre'=>'Convexa baja'
        ]);
        DB::table('elevacion_bacterias')->insert([
            'nombre'=>'Convexa o cupuliforme'
        ]);
        DB::table('elevacion_bacterias')->insert([
            'nombre'=>'Mamelonada o umbonada'
        ]);
        DB::table('elevacion_bacterias')->insert([
            'nombre'=>'Pulvinada'
        ]);
        DB::table('elevacion_bacterias')->insert([
            'nombre'=>'Umbilicada o crateriforme'
        ]);
    }
}
