<?php

use App\Cepa;
use Illuminate\Database\Seeder;

class CepasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Cepa::class, 200)->create();
    }
}
