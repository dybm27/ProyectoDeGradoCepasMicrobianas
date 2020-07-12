<?php

namespace App\Http\Controllers;

use App\Actividad;
use App\Documento;
use App\Equipamiento;
use App\Investigador;
use App\Noticia;
use App\Novedad;
use App\QuienesSomos;
use Illuminate\Http\Request;

class InfoPanelSitioWebController extends Controller
{
    public function quienesSomos()
    {
        $mision = QuienesSomos::where('quienes_somos_tipos_id', 1)->first();
        $vision = QuienesSomos::where('quienes_somos_tipos_id', 2)->first();
        $objetivos = QuienesSomos::where('quienes_somos_tipos_id', 3)->first();
        return [
            'mision' => $mision, 'vision' => $vision, 'objetivos' => $objetivos
        ];
    }

    public function investigadores(Request $request)
    {
        return Investigador::all();
    }

    public function investigadoresTabla(Request $request)
    {
        $investigadors = Investigador::select(
            'investigadors.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $investigadors = $investigadors->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $investigadors = $investigadors->where(function ($investigadors) use ($value) {
                return $investigadors->orWhere('investigadors.nombres', 'like', $value)
                    ->orWhere('investigadors.apellidos', 'like', $value)
                    ->orWhere('investigadors.email', 'like', $value)
                    ->orWhere('investigadors.nivel_estudio', 'like', $value)
                    ->orWhere('investigadors.cargo', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $investigadors->paginate($perPage);

        return $pagination;
    }

    public function documentos()
    {
        return [
            'proyectos' => Documento::where('tipo_documento_id', 1)->get(),
            'publicaciones' => Documento::where('tipo_documento_id', 2)->get()
        ];
    }

    public function proyectosTabla(Request $request)
    {
        $proyectos = Documento::where('tipo_documento_id', 1)->select(
            'documentos.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $proyectos = $proyectos->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $proyectos = $proyectos->where(function ($proyectos) use ($value) {
                return $proyectos->orWhere('documentos.nombre_documento', 'like', $value)
                    ->orWhere('documentos.nombre_autor', 'like', $value)
                    ->orWhere('documentos.descripcion', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $proyectos->paginate($perPage);

        return $pagination;
    }

    public function publicacionesTabla(Request $request)
    {
        $publicacions = Documento::where('tipo_documento_id', 2)->select(
            'documentos.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $publicacions = $publicacions->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $publicacions = $publicacions->where(function ($publicacions) use ($value) {
                return $publicacions->orWhere('documentos.nombre_documento', 'like', $value)
                    ->orWhere('documentos.nombre_autor', 'like', $value)
                    ->orWhere('documentos.descripcion', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $publicacions->paginate($perPage);

        return $pagination;
    }

    public function equipamientos()
    {
        return Equipamiento::all();
    }

    public function equipamientosTabla(Request $request)
    {
        $equipamientos = Equipamiento::select(
            'equipamientos.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $equipamientos = $equipamientos->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $equipamientos = $equipamientos->where(function ($equipamientos) use ($value) {
                return $equipamientos->orWhere('equipamientos.nombre', 'like', $value)
                    ->orWhere('equipamientos.funcion', 'like', $value)
                    ->orWhere('equipamientos.caracteristicas', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $equipamientos->paginate($perPage);

        return $pagination;
    }

    public function publicidad()
    {
        return [
            'noticias' => Noticia::all(),
            'actividades' => Actividad::all(),
            'novedades' => Novedad::all()
        ];
    }

    public function noticiasTabla(Request $request)
    {
        $noticias = Noticia::select(
            'noticias.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $noticias = $noticias->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $noticias = $noticias->where(function ($noticias) use ($value) {
                return $noticias->orWhere('noticias.titulo', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $noticias->paginate($perPage);

        return $pagination;
    }

    public function actividadesTabla(Request $request)
    {
        $actividads = Actividad::select(
            'actividads.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $actividads = $actividads->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $actividads = $actividads->where(function ($actividads) use ($value) {
                return $actividads->orWhere('actividads.titulo', 'like', $value)
                    ->orWhere('actividads.fecha', 'like', $value)
                    ->orWhere('actividads.lugar', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $actividads->paginate($perPage);

        return $pagination;
    }

    public function novedadesTabla(Request $request)
    {
        $novedads = Novedad::select(
            'novedads.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $novedads = $novedads->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $novedads = $novedads->where(function ($novedads) use ($value) {
                return $novedads->orWhere('novedads.titulo', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $novedads->paginate($perPage);

        return $pagination;
    }
}
