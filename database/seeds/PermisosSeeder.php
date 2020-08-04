<?php

use Illuminate\Database\Seeder;

class PermisosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //cepa
        DB::table('permisos')->insert([
            'nombre' => 'agregar-cepa'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'editar-cepa'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'eliminar-cepa'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'ver-cepa'
        ]);
        //otra
        DB::table('permisos')->insert([
            'nombre' => 'agregar-otra'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'editar-otra'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'eliminar-otra'
        ]);
        //usuario
        DB::table('permisos')->insert([
            'nombre' => 'agregar-usuario'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'editar-usuario'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'eliminar-usuario'
        ]);
        //img-login
        DB::table('permisos')->insert([
            'nombre' => 'editar-login'
        ]);
        //quines-somos
        DB::table('permisos')->insert([
            'nombre' => 'editar-mision'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'editar-vision'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'editar-objetivos'
        ]);
        //investigador
        DB::table('permisos')->insert([
            'nombre' => 'agregar-investigador'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'editar-investigador'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'eliminar-investigador'
        ]);
        //documentos
        DB::table('permisos')->insert([
            'nombre' => 'agregar-proyecto'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'editar-proyecto'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'eliminar-proyecto'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'agregar-publicacion'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'editar-publicacion'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'eliminar-publicacion'
        ]);
        //equipamiento
        DB::table('permisos')->insert([
            'nombre' => 'agregar-equipamiento'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'editar-equipamiento'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'eliminar-equipamiento'
        ]);
        //publicidad
        DB::table('permisos')->insert([
            'nombre' => 'agregar-noticia'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'editar-noticia'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'eliminar-noticia'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'agregar-actividad'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'editar-actividad'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'eliminar-actividad'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'agregar-novedad'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'editar-novedad'
        ]);
        DB::table('permisos')->insert([
            'nombre' => 'eliminar-novedad'
        ]);
    }
}
