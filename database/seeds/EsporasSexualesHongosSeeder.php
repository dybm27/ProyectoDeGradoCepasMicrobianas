<?php

use Illuminate\Database\Seeder;

class EsporasSexualesHongosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
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
