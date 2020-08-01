<!doctype html>
<html lang="es">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta http-equiv="Content-Language" content="en">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no">
        <meta name="description" content="ArchitectUI HTML Bootstrap 4 Dashboard Template">
        <link rel="shortcut icon" href="{{asset('imagenes/logo_majumba-g-p.png')}}">
        <!-- Disable tap highlight on IE -->
        <meta name="msapplication-tap-highlight" content="no">
        
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
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
                            <h4 class="mb-0">
                              <span class="d-block"></span>
                              <span>Bienvenido!!.. Por favor, inicia sesión con tu cuenta.</span>
                            </h4>
                            <div class="divider row"></div>
                            <div>
                                <form method="POST" action="{{ route('login') }}">
                                  <div class="alert alert-danger" role="alert" id="mensajeLogin" style="display: none" ></div>
                                  @csrf
                                  @if(session('message'))
                                    <div class="alert alert-danger" role="alert">
                                      {{session('message')}}
                                    </div>
                                  @endif
                                <div class="form-row">
                                  <div class="col-md-6">
                                    <div class="position-relative form-group">
                                        <label for="exampleEmail" class>{{ __('E-Mail Address') }}</label>
                                        <input
                                            id="email"
                                            type="email"
                                            class="form-control @error('email') is-invalid @enderror"
                                            name="email"
                                            value="{{ old('email') }}"
                                            placeholder="Email..."
                                            required autocomplete="email" autofocus
                                        />
                                        @error('email')
                                            <em class="error invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </em>
                                        @enderror
                                    </div>
                                  </div>
                                  <div class="col-md-6">
                                    <label for="passwordLogin" class>{{ __('Password') }}</label>
                                    <div class="input-group mb-3">
                                        <input
                                            id="passwordLogin"
                                            type="password"
                                            class="form-control @error('email') is-invalid @enderror"
                                            name="password"
                                            placeholder="Contraseña..."
                                            required autocomplete="current-password"
                                        />
                                        <div class="input-group-append">
                                          <span class="input-group-text" id="showPass" onclick="showPass()">
                                            <i  id="iconLogin" class="fas fa-eye-slash"></i>
                                          </span>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="position-relative form-check">
                                  <input name="check" id="exampleCheck" type="checkbox" class="form-check-input" />
                                  <label for="exampleCheck" class="form-check-label"> {{ __('Remember Me') }}</label>
                                </div>
                                <div class="divider row"></div>
                                <div class="d-flex align-items-center">
                                  <div class="ml-auto">
                                    @if (Route::has('password.request'))
                                        <a class="btn-lg btn btn-link" href="{{ route('password.request') }}">
                                            {{ __('Forgot Your Password?') }}
                                        </a>
                                    @endif
                                    <button class="btn btn-success btn-lg"> {{ __('Login') }}</button>
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
        <script>
          let mensaje = localStorage.getItem("mensajeLogin");
          if(mensaje){
            let div= document.getElementById('mensajeLogin');
            div.style.display='block';
            div.innerText=mensaje; 
            localStorage.removeItem("mensajeLogin");
          }
        </script>
    </body>
</html>