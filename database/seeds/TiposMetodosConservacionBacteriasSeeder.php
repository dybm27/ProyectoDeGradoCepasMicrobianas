<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TiposMetodosConservacionBacteriasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tipo_metodo_conservacion_bacterias')->insert([
            'nombre'=>'Solucion salina'
        ]);
        DB::table('tipo_metodo_conservacion_bacterias')->insert([
            'nombre'=>'Glicerol'
        ]);
        DB::table('tipo_metodo_conservacion_bacterias')->insert([
            'nombre'=>'Suelo'
        ]);
        DB::table('tipo_metodo_conservacion_bacterias')->insert([
            'nombre'=>'Agar'
        ]);
        DB::table('tipo_metodo_conservacion_bacterias')->insert([
            'nombre'=>'Caldo'
        ]);

        DB::table('tipo_agars')->insert([
            'nombre'=>'No'
        ]);

        DB::table('tipo_agars')->insert([
            'nombre'=>'Semisólido'
        ]);
        DB::table('tipo_agars')->insert([
            'nombre'=>'Caja'
        ]);
        DB::table('tipo_agars')->insert([
            'nombre'=>'Sólido'
        ]);
        DB::table('tipo_agars')->insert([
            'nombre'=>'Tubo'
        ]);
    }
}
