<?php

namespace App\Console\Commands;

use App\Actividad;
use App\Noticia;
use App\Novedad;
use App\QuienesSomos;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class EliminarImagenesEditorCron extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'eliminar-imagenes-editor:cron';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Eliminar imagenes del storage';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $arrayImagenes = [];
        $noticias = Noticia::all('imagenesEditor');
        $actividades = Actividad::all('imagenesEditor');
        $novedades = Novedad::all('imagenesEditor');
        $mision = QuienesSomos::where('quienes_somos_tipos_id', 1)->select('imagenesEditor')->first();
        $vision = QuienesSomos::where('quienes_somos_tipos_id', 2)->select('imagenesEditor')->first();
        $objetivos = QuienesSomos::where('quienes_somos_tipos_id', 3)->select('imagenesEditor')->first();
        foreach ($noticias as  $noticia) {
            $arrayImagenesNoticias = explode(",", $noticia->imagenesEditor);
            foreach ($arrayImagenesNoticias as  $imagen) {
                array_push($arrayImagenes, 'public' . $imagen);
            }
        }
        foreach ($actividades as  $actividad) {
            $arrayImagenesActividades = explode(",", $actividad->imagenesEditor);
            foreach ($arrayImagenesActividades as  $imagen) {
                array_push($arrayImagenes, 'public' .  $imagen);
            }
        }
        foreach ($novedades as  $novedad) {
            $arrayImagenesNovedades = explode(",", $novedad->imagenesEditor);
            foreach ($arrayImagenesNovedades as  $imagen) {
                array_push($arrayImagenes, 'public' .  $imagen);
            }
        }
        $arrayImagenesMision = explode(",", $mision->imagenesEditor);
        foreach ($arrayImagenesMision as  $imagen) {
            array_push($arrayImagenes, 'public' . $imagen);
        }
        $arrayImagenesVision = explode(",", $vision->imagenesEditor);
        foreach ($arrayImagenesVision as  $imagen) {
            array_push($arrayImagenes, 'public' .  $imagen);
        }
        $arrayImagenesObjetivos = explode(",", $objetivos->imagenesEditor);
        foreach ($arrayImagenesObjetivos as  $imagen) {
            array_push($arrayImagenes, 'public' .  $imagen);
        }
        $files = Storage::files('/public/editor/imagenes');
        $resultados = array_diff($files, $arrayImagenes);

        foreach ($resultados as  $resultado) {
            Storage::delete($resultado);
        };
    }
}
