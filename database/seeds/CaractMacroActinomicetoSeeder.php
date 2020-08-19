<?php

use Illuminate\Database\Seeder;

class CaractMacroActinomicetoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('textura_actinomicetos')->insert([
            'nombre' => 'Textura 1'
        ]);
        DB::table('textura_actinomicetos')->insert([
            'nombre' => 'Textura 2'
        ]);
        DB::table('textura_actinomicetos')->insert([
            'nombre' => 'Textura 3'
        ]);

        DB::table('color_actinomicetos')->insert([
            'nombre' => 'Rojo',
        ]);
        DB::table('color_actinomicetos')->insert([
            'nombre' => 'Verde',
        ]);
        
        DB::table('borde_actinomicetos')->insert([
            'nombre' => 'Borde 1'
        ]);
        DB::table('borde_actinomicetos')->insert([
            'nombre' => 'Borde 2'
        ]);
        DB::table('borde_actinomicetos')->insert([
            'nombre' => 'Borde 3'
        ]);

        DB::table('pigmento_actinomicetos')->insert([
            'nombre' => 'Pigmento 1'
        ]);
        DB::table('pigmento_actinomicetos')->insert([
            'nombre' => 'Pigmento 2'
        ]);
        DB::table('pigmento_actinomicetos')->insert([
            'nombre' => 'Pigmento 3'
        ]);

        DB::table('superficie_actinomicetos')->insert([
            'nombre' => 'Superficie 1'
        ]);
        DB::table('superficie_actinomicetos')->insert([
            'nombre' => 'Superficie 2'
        ]);
        DB::table('superficie_actinomicetos')->insert([
            'nombre' => 'Superficie 3'
        ]);

        DB::table('forma_caract_macro_actinomicetos')->insert([
            'nombre' => 'Forma 1'
        ]);
        DB::table('forma_caract_macro_actinomicetos')->insert([
            'nombre' => 'Forma 2'
        ]);
        DB::table('forma_caract_macro_actinomicetos')->insert([
            'nombre' => 'Forma 3'
        ]);
    }
}
