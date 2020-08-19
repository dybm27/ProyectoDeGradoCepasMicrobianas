<?php

use Illuminate\Database\Seeder;

class CaractMicroActinomicetoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tincion_gram_actinomicetos')->insert([
            'nombre' => 'Tincion 1'
        ]);
        DB::table('tincion_gram_actinomicetos')->insert([
            'nombre' => 'Tincion 2'
        ]);
        DB::table('tincion_gram_actinomicetos')->insert([
            'nombre' => 'Tincion 3'
        ]);

        DB::table('forma_caract_micro_actinomicetos')->insert([
            'nombre' => 'Forma 1'
        ]);
        DB::table('forma_caract_micro_actinomicetos')->insert([
            'nombre' => 'Forma 2'
        ]);
        DB::table('forma_caract_micro_actinomicetos')->insert([
            'nombre' => 'Forma 3'
        ]);

        DB::table('micelio_actinomicetos')->insert([
            'nombre' => 'Micelio 1'
        ]);
        DB::table('micelio_actinomicetos')->insert([
            'nombre' => 'Micelio 2'
        ]);
        DB::table('micelio_actinomicetos')->insert([
            'nombre' => 'Micelio 3'
        ]);

        DB::table('conidioforo_actinomicetos')->insert([
            'nombre' => 'Conidioforo 1'
        ]);
        DB::table('conidioforo_actinomicetos')->insert([
            'nombre' => 'Conidioforo 2'
        ]);
        DB::table('conidioforo_actinomicetos')->insert([
            'nombre' => 'Conidioforo 3'
        ]);
    }
}
