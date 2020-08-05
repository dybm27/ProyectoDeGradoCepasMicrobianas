<?php

use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Dumar Basto',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('12345678'),
            'rol_id' => 1
        ]);

        DB::table('users')->insert([
            'name' => 'Rafael Cano',
            'email' => 'rafa@gmail.com',
            'password' => Hash::make('12345678'),
            'rol_id' => 3
        ]);

        for ($i = 0; $i < 36; $i++) {
            $id = $i + 1;
            DB::table('rol_permisos')->insert([
                'rol_id' => 1, 'permiso_id' => $id
            ]);
        }
    }
}
