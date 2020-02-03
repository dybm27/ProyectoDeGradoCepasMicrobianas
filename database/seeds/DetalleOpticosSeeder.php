<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DetalleOpticosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('detalle_opticos')->insert([
            'nombre'=>'Transparente'
        ]);
        DB::table('detalle_opticos')->insert([
            'nombre'=>'Traslucida'
        ]);
        DB::table('detalle_opticos')->insert([
            'nombre'=>'Opaca'
        ]);
        DB::table('detalle_opticos')->insert([
            'nombre'=>'Brillante'
        ]);
    }
}
