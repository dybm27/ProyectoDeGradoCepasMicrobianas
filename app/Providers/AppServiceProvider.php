<?php

namespace App\Providers;

use App\Actividad;
use App\Cepa;
use App\ImagenLogin;
use App\Investigador;
use App\Noticia;
use App\Novedad;
use App\Observers\ActividadObserve;
use App\Observers\CepaObserve;
use App\Observers\ImagenLoginObserve;
use App\Observers\InvestigadorObserver;
use App\Observers\NoticiaObserve;
use App\Observers\NovedadObserve;
use Illuminate\Support\ServiceProvider;
use Maatwebsite\Excel\Sheet;
use Maatwebsite\Excel\Writer;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Cepa::observe(CepaObserve::class);
        Actividad::observe(ActividadObserve::class);
        Noticia::observe(NoticiaObserve::class);
        Novedad::observe(NovedadObserve::class);
    }
}
