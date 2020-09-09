<?php

namespace App\Http\Controllers\Api;

use App\Cepa;
use App\Documento;
use App\Equipamiento;
use App\Http\Controllers\Controller;
use App\Http\Resources\ActinomicetoCaractResource;
use App\Http\Resources\ActinomicetoCollection;
use App\Http\Resources\BacteriaCaractResource;
use App\Http\Resources\BacteriaCollection;
use App\Http\Resources\EquipamientoCollection;
use App\Http\Resources\HongoCaractResource;
use App\Http\Resources\HongoCollection;
use App\Http\Resources\InvestigadorCollection;
use App\Http\Resources\LevaduraCaractResource;
use App\Http\Resources\LevaduraCollection;
use App\Http\Resources\MisionResource;
use App\Http\Resources\NoticiaCollection;
use App\Http\Resources\NoticiaResource;
use App\Http\Resources\NovedadCollection;
use App\Http\Resources\NovedadResource;
use App\Http\Resources\ObjetivosResource;
use App\Http\Resources\ProyectoCollection;
use App\Http\Resources\PublicacionCollection;
use App\Http\Resources\VisionResource;
use App\Investigador;
use App\Noticia;
use App\Novedad;
use App\QuienesSomos;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class SitioWebController extends Controller
{

    public function validarSort($sort)
    {
        $direction = "asc";
        $sortField = $sort;

        if (Str::startsWith($sortField, '-')) {
            $direction = "desc";
            $sortField = Str::substr($sortField, 1);
        }
        return [$sortField, $direction];
    }

    // ----------------------- BACTERIAS --------------------------------------
    public function getBacterias(Request $request)
    {
        if (!$request->sort) {
            return response()->json(['error' => 'variable sort nula'], 500);
        }
        $sort = $this->validarSort($request->sort);
        return BacteriaCollection::make(
            Cepa::where('grupo_microbiano_id', 1)->where('publicar', 1)->orderBy($sort[0], $sort[1])->get()
        );
    }

    public function getCaractBacteria(Request $request)
    {
        if (!$request->slug) {
            return response()->json(['error' => 'variable slug nula'], 500);
        }
        $bacteria = Cepa::where('grupo_microbiano_id', 1)->where('publicar', 1)->where('slug', $request->slug)->first();
        if (!is_null($bacteria)) {
            return BacteriaCaractResource::make($bacteria);
        }
        return response()->json(['error' => 'No existe la Bacteria.'], 404);
    }

    // ----------------------- HONGOS --------------------------------------
    public function getHongos(Request $request)
    {
        if (!$request->sort) {
            return response()->json(['error' => 'variable sort nula'], 500);
        }
        $sort = $this->validarSort($request->sort);
        return HongoCollection::make(
            Cepa::where('grupo_microbiano_id', 2)->where('publicar', 1)->orderBy($sort[0], $sort[1])->get()
        );
    }

    public function getCaractHongo(Request $request)
    {
        if (!$request->slug) {
            return response()->json(['error' => 'variable slug nula'], 500);
        }
        $hongo = Cepa::where('grupo_microbiano_id', 2)->where('publicar', 1)->where('slug', $request->slug)->first();
        if (!is_null($hongo)) {
            return HongoCaractResource::make($hongo);
        }
        return response()->json(['error' => 'No existe el Hongo.'], 404);
    }

    // ----------------------- LEVADURAS --------------------------------------
    public function getLevaduras(Request $request)
    {
        if (!$request->sort) {
            return response()->json(['error' => 'variable sort nula'], 500);
        }
        $sort = $this->validarSort($request->sort);
        return LevaduraCollection::make(
            Cepa::where('grupo_microbiano_id', 3)->where('publicar', 1)->orderBy($sort[0], $sort[1])->get()
        );
    }

    public function getCaractLevadura(Request $request)
    {
        if (!$request->slug) {
            return response()->json(['error' => 'variable slug nula'], 500);
        }
        $levadura = Cepa::where('grupo_microbiano_id', 3)->where('publicar', 1)->where('slug', $request->slug)->first();
        if (!is_null($levadura)) {
            return LevaduraCaractResource::make($levadura);
        }
        return response()->json(['error' => 'No existe la Levadura.'], 404);
    }

    // ----------------------- ACTINOMICETOS --------------------------------------
    public function getActinomicetos(Request $request)
    {
        if (!$request->sort) {
            return response()->json(['error' => 'variable sort nula'], 500);
        }
        $sort = $this->validarSort($request->sort);
        return ActinomicetoCollection::make(
            Cepa::where('grupo_microbiano_id', 4)->where('publicar', 1)->orderBy($sort[0], $sort[1])->get()
        );
    }

    public function getCaractActinomiceto(Request $request)
    {
        if (!$request->slug) {
            return response()->json(['error' => 'variable slug nula'], 500);
        }
        $actinomiceto = Cepa::where('grupo_microbiano_id', 4)->where('publicar', 1)->where('slug', $request->slug)->first();
        if (!is_null($actinomiceto)) {
            return ActinomicetoCaractResource::make($actinomiceto);
        }
        return response()->json(['error' => 'No existe el Actinomiceto.'], 404);
    }

    // ----------------------- QUINES SOMOS --------------------------------------
    public function getMision()
    {
        return MisionResource::make(QuienesSomos::where('quienes_somos_tipos_id', 1)->first());
    }

    public function getVision()
    {
        return VisionResource::make(QuienesSomos::where('quienes_somos_tipos_id', 2)->first());
    }

    public function getObjetivos()
    {
        return ObjetivosResource::make(QuienesSomos::where('quienes_somos_tipos_id', 3)->first());
    }

    // ----------------------- INVESTIGADORES --------------------------------------
    public function getInvestigadores(Request $request)
    {
        if (!$request->sort) {
            return response()->json(['error' => 'variable sort nula'], 500);
        }
        $sort = $this->validarSort($request->sort);
        return InvestigadorCollection::make(
            Investigador::where('publicar', 1)->orderBy($sort[0], $sort[1])->get()
        );
    }

    // ----------------------- EQUIPAMIENTOS --------------------------------------
    public function getEquipamientos(Request $request)
    {
        if (!$request->sort) {
            return response()->json(['error' => 'variable sort nula'], 500);
        }
        $sort = $this->validarSort($request->sort);
        return EquipamientoCollection::make(
            Equipamiento::where('publicar', 1)->orderBy($sort[0], $sort[1])->get()
        );
    }

    // ----------------------- DOCUMENTOS --------------------------------------
    public function getProyectos(Request $request)
    {
        if (!$request->sort) {
            return response()->json(['error' => 'variable sort nula'], 500);
        }
        $sort = $this->validarSort($request->sort);
        return ProyectoCollection::make(
            Documento::where('tipo_documento_id', 1)->where('publicar', 1)->orderBy($sort[0], $sort[1])->get()
        );
    }

    public function getPublicaciones(Request $request)
    {
        if (!$request->sort) {
            return response()->json(['error' => 'variable sort nula'], 500);
        }
        $sort = $this->validarSort($request->sort);
        return PublicacionCollection::make(
            Documento::where('tipo_documento_id', 1)->where('publicar', 1)->orderBy($sort[0], $sort[1])->get()
        );
    }

    // ----------------------- PUBLICIDAD --------------------------------------
    public function getNoticias(Request $request)
    {
        if (!$request->sort) {
            return response()->json(['error' => 'variable sort nula'], 500);
        }
        $sort = $this->validarSort($request->sort);
        return NoticiaCollection::make(
            Noticia::where('publicar', 1)->orderBy($sort[0], $sort[1])->get()
        );
    }

    public function getNoticia(Request $request)
    {
        if (!$request->slug) {
            return response()->json(['error' => 'variable slug nula'], 500);
        }
        $noticia = Noticia::where('publicar', 1)->where('slug', $request->slug)->first();
        if (!is_null($noticia)) {
            return NoticiaResource::make($noticia);
        }
        return response()->json(['error' => 'No existe el noticia.'], 404);
    }

    public function getNovedads(Request $request)
    {
        if (!$request->sort) {
            return response()->json(['error' => 'variable sort nula'], 500);
        }
        $sort = $this->validarSort($request->sort);
        return NovedadCollection::make(
            Novedad::where('publicar', 1)->orderBy($sort[0], $sort[1])->get()
        );
    }

    public function getNovedad(Request $request)
    {
        if (!$request->slug) {
            return response()->json(['error' => 'variable slug nula'], 500);
        }
        $novedad = Novedad::where('publicar', 1)->where('slug', $request->slug)->first();
        if (!is_null($novedad)) {
            return NovedadResource::make($novedad);
        }
        return response()->json(['error' => 'No existe el novedad.'], 404);
    }

    public function getActividads(Request $request)
    {
        if (!$request->sort) {
            return response()->json(['error' => 'variable sort nula'], 500);
        }
        $sort = $this->validarSort($request->sort);
        return ActividadCollection::make(
            Actividad::where('publicar', 1)->orderBy($sort[0], $sort[1])->get()
        );
    }

    public function getActividad(Request $request)
    {
        if (!$request->slug) {
            return response()->json(['error' => 'variable slug nula'], 500);
        }
        $actividad = Actividad::where('publicar', 1)->where('slug', $request->slug)->first();
        if (!is_null($actividad)) {
            return ActividadResource::make($actividad);
        }
        return response()->json(['error' => 'No existe el actividad.'], 404);
    }
}
