<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->truncateTables([
            'grupo_microbianos', 'generos', 'especies', 'divisions', 'clases', 'ordens', 'familias',
            'phylums', 'reinos', 'rols', 'users', 'forma_caract_macro_bacterias', 'borde_bacterias', 'elevacion_bacterias',
            'forma_caract_micro_bacterias', 'detalle_optico_bacterias', 'superficie_bacterias', 'tipo_metodo_conservacion_bacterias',
            'tipo_metodo_conservacion_hongos', 'tipo_metodo_conservacion_levaduras', 'color_hongos', 'textura_hongos', 'espora_asexual_hongos',
            'espora_sexual_hongos', 'conidioforo_hongos', 'cepas', 'tipo_agar_bacterias', 'permisos', 'imagen_logins', 'quienes_somos_tipos',
            'tipo_documentos', 'color_bacterias','textura_actinomicetos', 'color_actinomicetos','borde_actinomicetos', 'pigmento_actinomicetos',
            'superficie_actinomicetos', 'forma_caract_macro_actinomicetos','tincion_gram_actinomicetos', 'forma_caract_micro_actinomicetos',
            'micelio_actinomicetos', 'conidioforo_actinomicetos','textura_levaduras', 'color_levaduras','textura_hongos', 'color_hongos',
            'conidioforo_hongos', 'espora_asexual_hongos','espora_sexual_hongos'
        ]);
        
        $this->call(RolesSeeder::class);
        $this->call(PermisosSeeder::class);
        $this->call(AdminSeeder::class);
        $this->call(GruposMicrobianosSeeder::class);
        $this->call(DivisionesSeeder::class);
        $this->call(ClasesSeeder::class);
        $this->call(OrdensSeeder::class);
        $this->call(FamiliasSeeder::class);
        $this->call(PhylumsSeeder::class);
        $this->call(ReinosSeeder::class);
        $this->call(CaractMacroBacteriaSeeder::class);
        $this->call(CaractMicroBacteriaSeeder::class);
        $this->call(CaractMacroActinomicetoSeeder::class);
        $this->call(CaractMicroActinomicetoSeeder::class);
        $this->call(CaractMacroHongoSeeder::class);
        $this->call(CaractMicroHongoSeeder::class);
        $this->call(CaractMacroLevaduraSeeder::class);
        $this->call(TiposMetodosConservacionBacteriasSeeder::class);
        $this->call(TiposMetodosConservacionHLSeeder::class);
        $this->call(ColoresHongosSeeder::class);
        $this->call(TexturasHongosSeeder::class);
        $this->call(EsporasAsexualesHongosSeeder::class);
        $this->call(EsporasSexualesHongosSeeder::class);
        $this->call(ConidioforosHongosSeeder::class);
        $this->call(GenerosSeeder::class);
        $this->call(EspeciesSeeder::class);
        $this->call(ImgLoginSeeder::class);
        $this->call(SitioWebSeeder::class);
        //$this->call(CepasSeeder::class);
        // $this->call(UsersTableSeeder::class);
    }

    protected function truncateTables(array $tablas)
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0;');
        foreach ($tablas as $tabla) {
            DB::table($tabla)->truncate();
        }
        DB::statement('SET FOREIGN_KEY_CHECKS = 1;');
    }
}
