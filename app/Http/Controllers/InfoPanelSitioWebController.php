<?php

namespace App\Http\Controllers;

use App\Investigador;
use App\Mision;
use App\Objetivo;
use App\Proyecto;
use App\Publicacion;
use App\Vision;
use Illuminate\Http\Request;

class InfoPanelSitioWebController extends Controller
{
    public function quienesSomos()
    {
        $mision = Mision::find(1);
        $vision = Vision::find(1);
        $objetivos = Objetivo::all();
        return [
            'mision' => $mision, 'vision' => $vision, 'objetivos' => $objetivos
        ];
    }

    public function objetivos(Request $request)
    {
        $Objetivos = Objetivo::select(
            'objetivos.texto',
            'objetivos.id'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $Objetivos = $Objetivos->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $Objetivos = $Objetivos->where(function ($Objetivos) use ($value) {
                return $Objetivos->orWhere('Objetivos.texto', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $Objetivos->paginate($perPage);

        return $pagination;
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
            'proyectos' => Proyecto::all(), 'publicaciones' => Publicacion::all()
        ];
    }

    public function proyectosTabla(Request $request)
    {
        $proyectos = Proyecto::select(
            'proyectos.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $proyectos = $proyectos->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $proyectos = $proyectos->where(function ($proyectos) use ($value) {
                return $proyectos->orWhere('proyectos.nombre', 'like', $value)
                    ->orWhere('proyectos.descripcion', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $proyectos->paginate($perPage);

        return $pagination;
    }

    public function publicacionesTabla(Request $request)
    {
        $publicacions = Publicacion::select(
            'publicacions.*'
        );

        if ($request->filled('sort')) {
            $sort = explode('|', $request->sort);
            $publicacions = $publicacions->orderBy($sort[0], $sort[1]);
        }

        if ($request->filled('filter')) {
            $value = "%{$request->filter}%";
            $publicacions = $publicacions->where(function ($publicacions) use ($value) {
                return $publicacions->orWhere('publicacions.nombre', 'like', $value)
                    ->orWhere('publicacions.descripcion', 'like', $value);
            });
        }

        $perPage = request()->filled('per_page') ? (int) request()->per_page : null;

        $pagination = $publicacions->paginate($perPage);

        return $pagination;
    }
}
