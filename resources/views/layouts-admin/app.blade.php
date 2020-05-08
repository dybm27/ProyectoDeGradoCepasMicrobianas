<!doctype html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta http-equiv="Content-Language" content="es">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <title> @yield('title')</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no">
        <meta name="description" content="This is an example dashboard created using build-in elements and components.">

        <!-- Disable tap highlight on IE -->
        <meta name="msapplication-tap-highlight" content="no">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <!-- Usuario autenticado --> 
        <meta name="user-logueado" content="{{ Auth::user() }}">

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{asset('assets/styles/template.css')}}" rel="stylesheet">
        <link href="{{ asset('css/dumar.css') }}" rel="stylesheet">
        <link href="{{ asset('css/fontawesome/css/all.min.css') }}" rel="stylesheet">
    </head>
    <body>
        <div class="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar" id="app" >

            @include('layouts-admin.header')

            <div class="app-main">

                @include('layouts-admin.sliderbar')

                <div class="app-main__outer">

                    <div class="app-main__inner">

                        @yield('contenido')

                    </div>

                    <div class="app-wrapper-footer">

                        @include('layouts-admin.footer')

                    </div>
                </div>
                
            </div>
        </div>  
        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}" defer></script>
        <script src="{{asset('assets/scripts/template.js')}}"></script>  
        <script src="{{ asset('js/dumar.js') }}"></script>
    
</html>