<?php

namespace App\Http\Controllers;

use App\Evento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InfoPanelEventosController extends Controller
{
    public function eventos(Request $request)
    {
        $eventos = Evento::join('users', 'users.id', '=', "eventos.autor")
            ->where('eventos.fecha', '>=', $request->start)
            ->where('eventos.fecha', '<=', $request->end)->select(
                'eventos.id',
                'eventos.autor As idAutor',
                'users.name As autor',
                'eventos.fecha As start',
                'eventos.titulo As title',
                'eventos.color',
                'eventos.descripcion'
            )->get();

        return $eventos;
    }
    public function eventosBacterias(Request $request)
    {
        $eventosBacterias = DB::table('cepas')
            ->join('bacterias', 'cepas.id', '=', 'bacterias.cepa_id')
            ->join('grupo_microbianos', 'cepas.grupo_microbiano_id', '=', 'grupo_microbianos.id')
            ->join('generos', 'cepas.genero_id', '=', 'generos.id')
            ->join('especies', 'cepas.especie_id', '=', 'especies.id')
            ->join(
                'metodo_conser_bacterias',
                'bacterias.id',
                '=',
                'metodo_conser_bacterias.bacteria_id'
            )
            ->join(
                'tipo_metodo_conservacion_bacterias',
                'tipo_metodo_conservacion_bacterias.id',
                '=',
                'metodo_conser_bacterias.tipo_id'
            )->select(
                'tipo_metodo_conservacion_bacterias.nombre As title',
                'generos.nombre As genero',
                'especies.nombre As especie',
                'cepas.codigo',
                'grupo_microbianos.nombre As grupo_microbiano',
                'metodo_conser_bacterias.fecha As start'
            )->where('metodo_conser_bacterias.fecha', '>=', $request->start)
            ->where('metodo_conser_bacterias.fecha', '<=', $request->end)
            ->get();

        return $eventosBacterias;
    }
    public function eventosHongos(Request $request)
    {
        $eventosHongos = DB::table('cepas')
            ->join('hongo_filamentosos', 'cepas.id', '=', 'hongo_filamentosos.cepa_id')
            ->join('grupo_microbianos', 'cepas.grupo_microbiano_id', '=', 'grupo_microbianos.id')
            ->join('generos', 'cepas.genero_id', '=', 'generos.id')
            ->join('especies', 'cepas.especie_id', '=', 'especies.id')
            ->join(
                'metodo_conser_hongos',
                'hongo_filamentosos.id',
                '=',
                'metodo_conser_hongos.hongo_filamentoso_id'
            )->join(
                'tipo_metodo_conservacion_hongos',
                'tipo_metodo_conservacion_hongos.id',
                '=',
                'metodo_conser_hongos.tipo_id'
            )->select(
                'tipo_metodo_conservacion_hongos.nombre As title',
                'generos.nombre As genero',
                'especies.nombre As especie',
                'cepas.codigo',
                'grupo_microbianos.nombre As grupo_microbiano',
                'metodo_conser_hongos.fecha As start'
            )->where('metodo_conser_hongos.fecha', '>=', $request->start)
            ->where('metodo_conser_hongos.fecha', '<=', $request->end)
            ->get();

        return $eventosHongos;
    }
    public function eventosLevaduras(Request $request)
    {
        $eventosLevaduras = DB::table('cepas')
            ->join('levaduras', 'cepas.id', '=', 'levaduras.cepa_id')
            ->join('grupo_microbianos', 'cepas.grupo_microbiano_id', '=', 'grupo_microbianos.id')
            ->join('generos', 'cepas.genero_id', '=', 'generos.id')
            ->join('especies', 'cepas.especie_id', '=', 'especies.id')
            ->join(
                'metodo_conser_levaduras',
                'levaduras.id',
                '=',
                'metodo_conser_levaduras.levadura_id'
            )->join(
                'tipo_metodo_conservacion_levaduras',
                'tipo_metodo_conservacion_levaduras.id',
                '=',
                'metodo_conser_levaduras.tipo_id'
            )->select(
                'tipo_metodo_conservacion_levaduras.nombre As title',
                'generos.nombre As genero',
                'especies.nombre As especie',
                'cepas.codigo',
                'grupo_microbianos.nombre As grupo_microbiano',
                'metodo_conser_levaduras.fecha As start'
            )->where('metodo_conser_levaduras.fecha', '>=', $request->start)
            ->where('metodo_conser_levaduras.fecha', '<=', $request->end)
            ->get();

        return $eventosLevaduras;
    }
}
