<?php

use App\Actinomiceto;
use App\Actividad;
use App\Bacteria;
use App\CaracBioquiBacteria;
use App\CaracBioquiHongo;
use App\CaracBioquiLevadura;
use App\CaracFisioBacteria;
use App\CaracMacroActinomiceto;
use App\CaracMacroBacteria;
use App\CaracMacroHongo;
use App\CaracMacroLevadura;
use App\CaracMicroActinomiceto;
use App\CaracMicroBacteria;
use App\CaracMicroHongo;
use App\CaracMicroLevadura;
use App\Cepa;
use App\Documento;
use App\Equipamiento;
use App\HongoFilamentoso;
use App\IdentBioquiActinomiceto;
use App\IdentiMolecuBacteria;
use App\IdentiMolecuHongo;
use App\IdentiMolecuLevadura;
use App\Investigador;
use App\Levadura;
use App\MetodoConserBacteria;
use App\MetodoConserHongo;
use App\MetodoConserLevadura;
use App\Noticia;
use App\Novedad;
use App\OtrasCaracActinomiceto;
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
        factory(Bacteria::class, 5)->create();
        factory(Levadura::class, 5)->create();
        factory(HongoFilamentoso::class, 5)->create();
        factory(Actinomiceto::class, 5)->create();
        for ($i = 0; $i < 5; $i++) {
            $bacteria =  factory(Bacteria::class)->create();
            $levadura =  factory(Levadura::class)->create();
            $hongo =   factory(HongoFilamentoso::class)->create();
            $actinomiceto =   factory(Actinomiceto::class)->create();

            factory(CaracMacroActinomiceto::class, 3)->create(['actinomiceto_id' => $actinomiceto->id]);
            factory(IdentBioquiActinomiceto::class)->create(['actinomiceto_id' => $actinomiceto->id]);
            factory(CaracMicroActinomiceto::class)->create(['actinomiceto_id' => $actinomiceto->id]);
            factory(OtrasCaracActinomiceto::class)->create(['actinomiceto_id' => $actinomiceto->id]);

            factory(CaracMacroBacteria::class, 3)->create(['bacteria_id' => $bacteria->id]);
            factory(CaracMicroBacteria::class)->create(['bacteria_id' => $bacteria->id]);
            factory(CaracBioquiBacteria::class)->create(['bacteria_id' => $bacteria->id]);
            factory(IdentiMolecuBacteria::class)->create(['bacteria_id' => $bacteria->id]);
            factory(MetodoConserBacteria::class)->create(['bacteria_id' => $bacteria->id]);
            factory(CaracFisioBacteria::class)->create(['bacteria_id' => $bacteria->id]);

            factory(CaracMacroHongo::class, 3)->create(['hongo_filamentoso_id' => $hongo->id]);
            factory(CaracMicroHongo::class)->create(['hongo_filamentoso_id' => $hongo->id]);
            factory(IdentiMolecuHongo::class)->create(['hongo_filamentoso_id' => $hongo->id]);
            factory(MetodoConserHongo::class)->create(['hongo_filamentoso_id' => $hongo->id]);
            factory(CaracBioquiHongo::class)->create(['hongo_filamentoso_id' => $hongo->id]);


            factory(CaracMacroLevadura::class, 3)->create(['levadura_id' => $levadura->id]);
            factory(CaracMicroLevadura::class)->create(['levadura_id' => $levadura->id]);
            factory(CaracBioquiLevadura::class)->create(['levadura_id' => $levadura->id]);
            factory(IdentiMolecuLevadura::class)->create(['levadura_id' => $levadura->id]);
            factory(MetodoConserLevadura::class)->create(['levadura_id' => $levadura->id]);
        }
        factory(Bacteria::class, 5)->create();
        factory(Levadura::class, 5)->create();
        factory(HongoFilamentoso::class, 5)->create();
        factory(Actinomiceto::class, 5)->create();

        factory(Investigador::class, 10)->create();
        factory(Equipamiento::class, 10)->create();
        factory(Documento::class, 10)->create(['tipo_documento_id' => 1]);
        factory(Documento::class, 10)->create(['tipo_documento_id' => 2]);
        factory(Actividad::class, 10)->create();
        factory(Novedad::class, 10)->create();
        factory(Noticia::class, 10)->create();
    }
}
