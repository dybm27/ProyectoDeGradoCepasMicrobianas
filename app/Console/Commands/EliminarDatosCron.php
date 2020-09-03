<?php

namespace App\Console\Commands;

use App\Seguimiento;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class EliminarDatosCron extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'eliminar-datos:cron';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Eliminar datos de la tabla seguimiento';

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
        Log::debug('Entro EliminarDatos');
        $fechaActual = date('Y-m-d H:m:s');
        $fechaBorrado = date("Y-m-d H:m:s", strtotime($fechaActual . "- 30 days"));
        Seguimiento::where('created_at', '<=', $fechaBorrado)->delete();
    }
}
