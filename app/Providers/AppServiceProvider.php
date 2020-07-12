<?php

namespace App\Providers;

use App\ImagenLogin;
use App\Investigador;
use App\Observers\ImagenLoginObserve;
use App\Observers\InvestigadorObserver;
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
    { }
}
