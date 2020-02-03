<?php

use Illuminate\Database\Seeder;

class TipoUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tipo_users')->insert([
            'nombre' => 'Super Administrador',
        ]);
        DB::table('tipo_users')->insert([
            'nombre' => 'Administrador',
        ]);
        DB::table('tipo_users')->insert([
            'nombre' => 'BecaTrabajo',
        ]);
        DB::table('tipo_users')->insert([
            'nombre' => 'Practicante',
        ]);
    }
}
