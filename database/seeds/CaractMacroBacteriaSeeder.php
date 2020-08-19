<?php

use Illuminate\Database\Seeder;

class CaractMacroBacteriaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('detalle_optico_bacterias')->insert([
            'nombre' => 'Transparente'
        ]);
        DB::table('detalle_optico_bacterias')->insert([
            'nombre' => 'Traslucida'
        ]);
        DB::table('detalle_optico_bacterias')->insert([
            'nombre' => 'Opaco'
        ]);
        DB::table('detalle_optico_bacterias')->insert([
            'nombre' => 'Brillante'
        ]);

        DB::table('borde_bacterias')->insert([
            'nombre' => 'Entero'
        ]);
        DB::table('borde_bacterias')->insert([
            'nombre' => 'Ondulado'
        ]);
        DB::table('borde_bacterias')->insert([
            'nombre' => 'Lobulado'
        ]);
        DB::table('borde_bacterias')->insert([
            'nombre' => 'Espinoso-dentado-lacerado o crenado'
        ]);
        DB::table('borde_bacterias')->insert([
            'nombre' => 'Filamentoso'
        ]);
        DB::table('borde_bacterias')->insert([
            'nombre' => 'Enrollado'
        ]);


        DB::table('elevacion_bacterias')->insert([
            'nombre' => 'Plana o aplastada'
        ]);
        DB::table('elevacion_bacterias')->insert([
            'nombre' => 'Elevada o lente'
        ]);
        DB::table('elevacion_bacterias')->insert([
            'nombre' => 'Convexa baja'
        ]);
        DB::table('elevacion_bacterias')->insert([
            'nombre' => 'Convexa o cupuliforme'
        ]);
        DB::table('elevacion_bacterias')->insert([
            'nombre' => 'Mamelonada o umbonada'
        ]);
        DB::table('elevacion_bacterias')->insert([
            'nombre' => 'Pulvinada'
        ]);
        DB::table('elevacion_bacterias')->insert([
            'nombre' => 'Umbilicada o crateriforme'
        ]);

        DB::table('superficie_bacterias')->insert([
            'nombre' => 'Lisa'
        ]);
        DB::table('superficie_bacterias')->insert([
            'nombre' => 'Enrugada'
        ]);
        DB::table('superficie_bacterias')->insert([
            'nombre' => 'Papilada'
        ]);

        DB::table('color_bacterias')->insert([
            'nombre' => 'Rojo',
        ]);
        DB::table('color_bacterias')->insert([
            'nombre' => 'Verde',
        ]);

        DB::table('forma_caract_macro_bacterias')->insert([
            'nombre' => 'Circular'
        ]);
        DB::table('forma_caract_macro_bacterias')->insert([
            'nombre' => 'Puntiforme'
        ]);
        DB::table('forma_caract_macro_bacterias')->insert([
            'nombre' => 'Filamentosa'
        ]);
        DB::table('forma_caract_macro_bacterias')->insert([
            'nombre' => 'Irregular'
        ]);
        DB::table('forma_caract_macro_bacterias')->insert([
            'nombre' => 'Rizoide'
        ]);
        DB::table('forma_caract_macro_bacterias')->insert([
            'nombre' => 'Lanceolada'
        ]);
        DB::table('forma_caract_macro_bacterias')->insert([
            'nombre' => 'Fusiforme'
        ]);
    }
}
