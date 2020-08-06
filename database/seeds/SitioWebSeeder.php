<?php

use Illuminate\Database\Seeder;

class SitioWebSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('quienes_somos_tipos')->insert([
            'nombre' => 'Mision'
        ]);
        DB::table('quienes_somos_tipos')->insert([
            'nombre' => 'Vision'
        ]);
        DB::table('quienes_somos_tipos')->insert([
            'nombre' => 'Objetivos'
        ]);

        DB::table('quienes_somos_tipos')->insert([
            'quienes_somos_tipos_id' => 1,
            'cuerpo' => 'Mision'
        ]);
        DB::table('quienes_somos_tipos')->insert([
            'quienes_somos_tipos_id' => 2,
            'cuerpo' => 'Vision'
        ]);
        DB::table('quienes_somos_tipos')->insert([
            'quienes_somos_tipos_id' => 3,
            'cuerpo' => 'Objetivos'
        ]);

        DB::table('tipo_documentos')->insert([
            'nombre' => 'Proyeto'
        ]);
        DB::table('tipo_documentos')->insert([
            'nombre' => 'Publicacion'
        ]);
    }
}
