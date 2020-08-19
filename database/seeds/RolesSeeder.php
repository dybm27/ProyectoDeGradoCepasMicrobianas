<?php

use Illuminate\Database\Seeder;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('rols')->insert([
            'nombre' => 'Super Administrador',
        ]);
        DB::table('rols')->insert([
            'nombre' => 'Administrador',
        ]);
        DB::table('rols')->insert([
            'nombre' => 'BecaTrabajo',
        ]);
        DB::table('rols')->insert([
            'nombre' => 'Practicante',
        ]);
    }
}
