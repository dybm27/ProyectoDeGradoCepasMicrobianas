<?php

use Illuminate\Database\Seeder;

class ImgLoginSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('imagen_logins')->insert([
            'titulo' => 'Imagen 1',
            'descripcion' => 'Imagen 1',
            'imagen' => 'Imagen 1',
            'imagenPublica' => 'Imagen 1'
        ]);
        DB::table('imagen_logins')->insert([
            'titulo' => 'Imagen 2',
            'descripcion' => 'Imagen 2',
            'imagen' => 'Imagen 2',
            'imagenPublica' => 'Imagen 2'
        ]);
        DB::table('imagen_logins')->insert([
            'titulo' => 'Imagen 3',
            'descripcion' => 'Imagen 3',
            'imagen' => 'Imagen 3',
            'imagenPublica' => 'Imagen 3'
        ]);
    }
}
