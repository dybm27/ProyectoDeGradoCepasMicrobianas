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
            'nombre' => 'phylum 1',
        ]);
        DB::table('phylums')->insert([
            'nombre' => 'phylum 2',
        ]);
        DB::table('phylums')->insert([
            'nombre' => 'phylum 3',
        ]);
        DB::table('phylums')->insert([
            'nombre' => 'phylum 4',
        ]);
    }
}
