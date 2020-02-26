<?php

use Illuminate\Database\Seeder;

class PhylumsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('phylums')->insert([
            'nombre' => 'Phylum 1',
        ]);
        DB::table('phylums')->insert([
            'nombre' => 'Phylum 2',
        ]);
        DB::table('phylums')->insert([
            'nombre' => 'Phylum 3',
        ]);
        DB::table('phylums')->insert([
            'nombre' => 'Phylum 4',
        ]);
    }
}
