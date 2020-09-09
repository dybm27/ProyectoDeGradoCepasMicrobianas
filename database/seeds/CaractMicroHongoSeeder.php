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
            'nombre' => 'Erecto'
        ]);
        DB::table('conidioforo_hongos')->insert([
            'nombre' => 'Ramificado'
        ]);

        DB::table('espora_asexual_hongos')->insert([
            'nombre' => 'Esporangrosporas',
        ]);
        DB::table('espora_asexual_hongos')->insert([
            'nombre' => 'Conidiosporas',
        ]);
        DB::table('espora_asexual_hongos')->insert([
            'nombre' => 'Blastosporas',
        ]);
        DB::table('espora_asexual_hongos')->insert([
            'nombre' => 'Oidiosporas',
        ]);
        DB::table('espora_asexual_hongos')->insert([
            'nombre' => 'Artrosporas',
        ]);

        DB::table('espora_sexual_hongos')->insert([
            'nombre' => 'Ascosporas',
        ]);
        DB::table('espora_sexual_hongos')->insert([
            'nombre' => 'Basidiosporas',
        ]);
        DB::table('espora_sexual_hongos')->insert([
            'nombre' => 'Oosporas',
        ]);
        DB::table('espora_sexual_hongos')->insert([
            'nombre' => 'Zigosporas',
        ]);
    }
}
