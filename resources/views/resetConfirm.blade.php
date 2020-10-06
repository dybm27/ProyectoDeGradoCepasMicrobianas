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
                                                <span>{{ __('Reset Password') }}</span>
                                            </h4>
                                            <div >
                                                <form method="POST" action="{{ route('password.update') }}">
                                                    @csrf
                            
                                                    <input type="hidden" name="token" value="{{ $token }}">
                            
                                                    <div class="form-group row">
                                                        <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>
                            
                                                        <div class="col-md-6">
                                                            <input id="email" type="email" class="form-control @error('email') error-input-select @enderror" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus>
                            
                                                            @error('email')
                                                                <span class="text-error-input" role="alert">
                                                                    <strong>{{ $message }}</strong>
                                                                </span>
                                                            @enderror
                                                        </div>
                                                    </div>
                            
                                                    <div class="form-group row">
                                                        <label for="passwordLogin" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>
                                                        <div class="col-md-6">
                                                            <div class="input-group mb-3">
                                                                <input id="passwordLogin" placeholder="Contraseña.." type="password" class="form-control @error('password') error-input-select @enderror" name="password" required autocomplete="new-password"
                                                                />
                                                                <div class="input-group-append verContraseña">
                                                                  <span class="input-group-text" id="showPass" onclick="showPass()">
                                                                    <i  id="iconLogin" class="fas fa-eye-slash"></i>
                                                                  </span>
                                                                </div>
                                                            </div>
                                                            @error('password')
                                                                <span class="text-error-select" role="alert">
                                                                    <strong>{{ $message }}</strong>
                                                                </span>
                                                            @enderror
                                                        </div>
                                                    </div>
                            
                                                    <div class="form-group row">
                                                        <label for="passwordLogin-confirmation" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>
                                                        <div class="col-md-6">
                                                            <div class="input-group mb-3">
                                                                <input
                                                                    id="passwordLogin-confirmation"  placeholder="Confirmar Contraseña.."  type="password" class="form-control" name="password_confirmation" required autocomplete="new-password"
                                                                />
                                                                <div class="input-group-append verContraseña">
                                                                <span class="input-group-text" id="showPassConfirmation" onclick="showPassConfirmation()">
                                                                    <i  id="iconLogin-confirmation" class="fas fa-eye-slash"></i>
                                                                </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                            
                                                    <div class="form-group row mb-0">
                                                        <div class="col-md-6 offset-md-4">
                                                            <button type="submit" class="btn btn-success btn-lg">
                                                                {{ __('Reset Password') }}
                                                            </button>
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
        <script src="{{asset('assets/scripts/template.js')}}"></script> 
        <script src="{{ asset('js/dumar.js') }}"></script>
      </body>
</html>