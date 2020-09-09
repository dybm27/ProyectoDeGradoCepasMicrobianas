<?php

use App\Actinomiceto;
use App\Bacteria;
use App\Cepa;
use App\HongoFilamentoso;
use App\Levadura;
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
        factory(Bacteria::class, 200)->create();
        factory(Levadura::class, 200)->create();
        factory(HongoFilamentoso::class, 200)->create();
        factory(Actinomiceto::class, 200)->create();
    }
}
