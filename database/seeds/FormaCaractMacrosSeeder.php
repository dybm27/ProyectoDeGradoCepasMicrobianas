<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FormaCaractMacrosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('forma_caract_macro_bacterias')->insert([
            'nombre' => 'Circular'
        ]);
        DB::table('forma_caract_macro_bacterias')->insert([
            'nombre' => 'Puntiforme'
        ]);
        DB::table('forma_caract_macro_bacterias')->insert([
            'nombre' => 'Filamentosa'
        ]);
        DB::table('forma_caract_macro_bacterias')->insert([
            'nombre' => 'Irregular'
        ]);
        DB::table('forma_caract_macro_bacterias')->insert([
            'nombre' => 'Rizoide'
        ]);
        DB::table('forma_caract_macro_bacterias')->insert([
            'nombre' => 'Lanceolada'
        ]);
        DB::table('forma_caract_macro_bacterias')->insert([
            'nombre' => 'Fusiforme'
        ]);
    }
}
