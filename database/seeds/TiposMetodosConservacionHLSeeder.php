<?php

use Illuminate\Database\Seeder;

class TiposMetodosConservacionHLSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tipo_metodo_conservacion_hongos')->insert([
            'nombre'=>'Glicerol'
        ]);
        DB::table('tipo_metodo_conservacion_hongos')->insert([
            'nombre'=>'Medio solido'
        ]);
        DB::table('tipo_metodo_conservacion_hongos')->insert([
            'nombre'=>'Medio liquido'
        ]);
        DB::table('tipo_metodo_conservacion_hongos')->insert([
            'nombre'=>'Suelo'
        ]);
        DB::table('tipo_metodo_conservacion_hongos')->insert([
            'nombre'=>'Solucion salina'
        ]);
        DB::table('tipo_metodo_conservacion_hongos')->insert([
            'nombre'=>'Papel filtro'
        ]);

        DB::table('tipo_metodo_conservacion_levaduras')->insert([
            'nombre'=>'Glicerol'
        ]);
        DB::table('tipo_metodo_conservacion_levaduras')->insert([
            'nombre'=>'Medio solido'
        ]);
        DB::table('tipo_metodo_conservacion_levaduras')->insert([
            'nombre'=>'Medio liquido'
        ]);
        DB::table('tipo_metodo_conservacion_levaduras')->insert([
            'nombre'=>'Suelo'
        ]);
        DB::table('tipo_metodo_conservacion_levaduras')->insert([
            'nombre'=>'Solucion salina'
        ]);
        DB::table('tipo_metodo_conservacion_levaduras')->insert([
            'nombre'=>'Papel filtro'
        ]);
    }
}
