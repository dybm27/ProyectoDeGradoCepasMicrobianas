@extends('layouts-admin.app')

@section('route-cepa')
    class="mm-active"
@endsection

@section('route-todas')
    class="mm-active"
@endsection

@section('icono-titulo')
    <i class="pe-7s-car icon-gradient bg-mean-fruit">
    </i>
@endsection

@section('titulo')
    Administrar Cepas
@endsection

@section('subtitulo')
    cepas microbianas de la UFPS.
@endsection

@section('accion')
    <button class="btn-wide mb-2 mr-2 btn-hover-shine btn btn-primary btn-lg">Agregar Nueva Cepa
    </button>
@endsection

@section('routes')
<!--
    <li class="nav-item">
        <a role="tab" class="nav-link active" href="#">
            <span>Variation 1</span>
        </a>
    </li>
    <li class="nav-item">
        <a role="tab" class="nav-link" href="#">
            <span>Variation 2</span>
        </a>
    </li>
    -->
@endsection

@section('contenido')
    <form-cepas></form-cepas>
@endsection