<?php

use Illuminate\Database\Seeder;

class CaractMicroHongoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('conidioforo_hongos')->insert([
            'nombre' => 'Conidioforo 1'
        ]);
        DB::table('conidioforo_hongos')->insert([
            'nombre' => 'Conidioforo 2'
        ]);
        DB::table('conidioforo_hongos')->insert([
            'nombre' => 'Conidioforo 3'
        ]);

        DB::table('espora_asexual_hongos')->insert([
            'nombre' => 'Espora Asexual 1'
        ]);
        DB::table('espora_asexual_hongos')->insert([
            'nombre' => 'Espora Asexual 2'
        ]);
        DB::table('espora_asexual_hongos')->insert([
            'nombre' => 'Espora Asexual 3'
        ]);

        DB::table('espora_sexual_hongos')->insert([
            'nombre' => 'Espora Sexual 1'
        ]);
        DB::table('espora_sexual_hongos')->insert([
            'nombre' => 'Espora Sexual 2'
        ]);
        DB::table('espora_sexual_hongos')->insert([
            'nombre' => 'Espora Sexual 3'
        ]);
    }
}
