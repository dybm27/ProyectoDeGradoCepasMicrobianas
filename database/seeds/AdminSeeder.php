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
            'tipouser_id' => 1,
            'avatar' => '/public/usuarios/avatar_img/1588475049-hoja de vida.jpg',
            'avatarPublico' => '/storage/usuarios/avatar_img/1588475049-hoja de vida.jpg'
        ]);

        DB::table('users')->insert([
            'name' => 'Rafael Cano',
            'email' => 'rafa@gmail.com',
            'password' => Hash::make('12345678'),
            'tipouser_id' => 3
        ]);
    }
}
