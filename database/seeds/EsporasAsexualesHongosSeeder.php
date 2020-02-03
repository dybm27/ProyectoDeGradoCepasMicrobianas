<?php

use Illuminate\Database\Seeder;

class EsporasAsexualesHongosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
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
    }
}
