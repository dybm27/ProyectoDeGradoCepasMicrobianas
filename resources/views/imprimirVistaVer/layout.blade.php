<!DOCTYPE html>
<html lang="es">
<head>
    <meta http-equiv="Content-Type" content="text/html"/>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{public_path('css/bootstrap.css')}}">
    <link rel="stylesheet" href="{{public_path('css/imprimir.css')}}">
</head>
<body>
    @include('imprimirVistaVer.header') 

    @include('imprimirVistaVer.footer') 

    <div class="contenido" style="font-size: 13px;">
        @yield('contenido-pdf')
    </div>
</body>
</html>