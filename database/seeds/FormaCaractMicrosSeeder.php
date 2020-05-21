<?php

use Illuminate\Database\Seeder;

class FormaCaractMicrosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('forma_caract_micros')->insert([
            'nombre' => 'Coco'
        ]);
        DB::table('forma_caract_micros')->insert([
            'nombre' => 'Cocobacilo'
        ]);
        DB::table('forma_caract_micros')->insert([
            'nombre' => 'Bacilo'
        ]);
        DB::table('forma_caract_micros')->insert([
            'nombre' => 'Bacilo corto'
        ]);
        DB::table('forma_caract_micros')->insert([
            'nombre' => 'Vibrio'
        ]);
        DB::table('forma_caract_micros')->insert([
            'nombre' => 'Espirilo'
        ]);
    }
}
