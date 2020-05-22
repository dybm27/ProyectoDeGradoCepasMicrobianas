@extends('layouts-admin.app')

@section('title')
    Error
@endsection

@section('contenido')
   
    <div class="flex-center position-ref full-height">
        <div class="code">
            404
        </div>

        <div class="message" style="padding: 10px;">
            No existe esta página
        </div>
    </div>
   

@endsection

@section('estilos')
<style>
    .full-height {
        height: 60vh;
    }
    .flex-center {
        align-items: center;
        display: flex;
        justify-content: center;
    }
    .position-ref {
        position: relative;
    }
    .code {
        border-right: 4px solid;
        font-size: 60px;
        padding: 0 15px 0 15px;
        text-align: center;
    }
    .message {
        font-size: 40px;
        text-align: center;
    }
</style>
@endsection