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
        DB::table('detalle_optico_bacterias')->insert([
            'nombre'=>'Transparente'
        ]);
        DB::table('detalle_optico_bacterias')->insert([
            'nombre'=>'Traslucida'
        ]);
        DB::table('detalle_optico_bacterias')->insert([
            'nombre'=>'Opaco'
        ]);
        DB::table('detalle_optico_bacterias')->insert([
            'nombre'=>'Brillante'
        ]);
    }
}
