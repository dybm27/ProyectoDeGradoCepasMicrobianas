<!doctype html>
<html lang="es">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta http-equiv="Content-Language" content="en">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <title>Restablecer Contraseña</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no">
        <meta name="description" content="ArchitectUI HTML Bootstrap 4 Dashboard Template">
        <link rel="shortcut icon" href="{{asset('imagenes/logo_majumba-g-p.png')}}">
        <!-- Disable tap highlight on IE -->
        <meta name="msapplication-tap-highlight" content="no">
        <link href="{{asset('assets/styles/template.css')}}" rel="stylesheet">
        <link href="{{ asset('css/dumar.css') }}" rel="stylesheet">
    </head>
    <body>
        <div class="app-container app-theme-white body-tabs-shadow">
            <div class="app-container">
                <div class="h-100">
                    <div class="h-100 no-gutters row">
                        <div class="d-none d-lg-block col-lg-4">
                            <div class="slider-light">
                                <div class="slick-slider">
                                    @foreach ($imagenes as $imagen)
                                    <div><!-- bg-premium-dark -->
                                    <div
                                        class="position-relative h-100 d-flex justify-content-center align-items-center bg-premium-dark"
                                        tabindex="-1"
                                    >
                                        <div
                                        class="slide-img-bg"
                                        style="background-image: url('{{$imagen->imagenPublica}}');"
                                        ></div>
                                        <div class="slider-content">
                                        <h3>{{$imagen->titulo}}</h3>
                                        <p>{{$imagen->descripcion}}</p>
                                        </div>
                                    </div>
                                    </div>
                                @endforeach
                                </div>
                            </div>
                        </div>
                        <div
                        class="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-8"
                    >
                            <div class="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
                                <div class="container mt-5 mb-2">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="logo-majumba">
                                                <img src="{{asset('imagenes/logo_majumba-g.png')}}" alt="">
                                            </div>
                                            <h4>
                                                <span>Ingresa tu Correo electrónico para restablecer la contraseña.</span>
                                            </h4>
                                            <div >
                                                @if (session('status'))
                                                    <div class="alert alert-success" role="alert">
                                                        {{ session('status') }}
                                                    </div>
                                                @endif
                                                <form method="POST" action="{{ route('password.email') }}">
                                                    @csrf
                                                   <div class="container">
                                                       <div class="row justify-content-center">
                                                            <div class="col-md-10">
                                                                <div class="position-relative form-group">
                                                                    <label for="exampleEmail" class="">{{ __('E-Mail Address') }}</label>
                                                                    <input name="email" placeholder="{{ __('E-Mail Address') }}..." type="email"  class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                                                                    @error('email')
                                                                        <span class="invalid-feedback" role="alert">
                                                                            <strong>{{ $message }}</strong>
                                                                        </span>
                                                                    @enderror
                                                                </div>
                                                            </div>
                                                       </div>
                                                       <div class="divider row"></div>
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <div class="mt-4 d-flex align-items-center">
                                                                    <h6 class="mb-0">
                                                                        <a href="{{ route('login_vista') }}" class="text-success">  {{ __('Iniciar sesión en una cuenta existente') }}</a>
                                                                    </h6>
                                                                    <div class="ml-auto">
                                                                        <button type="submit"  class="btn btn-success btn-lg">Restablecer Contraseña</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                   </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
      </body>
</html>