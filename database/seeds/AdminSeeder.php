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
            'tipouser_id' => 1
        ]);
    }
}
