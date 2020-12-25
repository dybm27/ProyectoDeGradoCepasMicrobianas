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
                         <div class="col-3">
                            <div class="logos">
                              <img src="{{asset('imagenes/Logo-vertical.jpg')}}" alt="universidad francisco de paula santander">
                            </div>
                          </div>
                         <div class="col-3">
                            <div class="logos">
                              <img src="{{asset('imagenes/logo_majumba-g.png')}}" alt="majumba">
                            </div>
                          </div>
                         <div class="col-3">
                            <div class="logos">
                              <img src="{{asset('imagenes/logo-gidis-sin-fondo.png')}}" alt="gidis">
                            </div>
                          </div>
                         <div class="col-3">
                            <div class="logos">
                              <img src="{{asset('imagenes/logo-sistemas-letra-negra.png')}}" alt="ingenieria de sistemas ufps">
                            </div>
                          </div>
                         </div>
                         <div class="row">
                           <div class="col-md-12">
                            <div class="logo-majumba">
                              <img src="{{asset('imagenes/lab-icon-recortado.png')}}" alt="laboratorio de microbiología avanzada ufps">
                            </div>
                            <h4 class="mb-0">
                              <span class="d-block"></span>
                              <span>Bienvenido!!.. Por favor, inicia sesión con tu cuenta.</span>
                            </h4>
                            <div class="divider row"></div>
                            <div id="formLogin">
                              <form method="POST" action="{{ route('login') }}">
                                <div class="alert alert-danger" role="alert" id="mensajeLogin" style="display: none" ></div>
                                  @csrf
                                  @if(session('errorLoginGoogle'))
                                    <div class="alert alert-danger" role="alert">
                                      {{session('errorLoginGoogle')}}
                                    </div>
                                  @endif
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
                                            placeholder="Correo electrónico..."
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
                                        <div class="input-group-append verContraseña">
                                          <span class="input-group-text" id="showPass" onclick="showPass()">
                                            <i  id="iconLogin" class="fas fa-eye-slash"></i>
                                          </span>
                                        </div>
                                    </div>
                                  </div>
                                </div> 
                                <div class="form-row">
                                  <div class="col-md-6">
                                    <div class="custom-checkbox custom-control">
                                      <input type="checkbox" id="1" class="custom-control-input"> 
                                      <label for="1" class="custom-control-label"> {{ __('Remember Me') }}</label>
                                    </div> 
                                  </div>
                                  <div class="col-md-6">
                                    @if (Route::has('password.request'))
                                      <a class="btn-lg btn btn-link float-right text-success" href="{{ route('password.request') }}">
                                          {{ __('Forgot Your Password?') }}
                                      </a>
                                    @endif 
                                  </div>
                                </div>
                                <div class="divider row"></div>
                                <div class="form-row">
                                  <div class="col-md-6 mb-3">
                                    <a id="btnGoogle" href="{{ route('login.google') }}">
                                      <span class="icon">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 48 48" class="abcRioButtonSvg">
                                          <g>
                                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                            <path fill="none" d="M0 0h48v48H0z"></path>
                                          </g>
                                        </svg>
                                      </span>
                                      <span class="buttonText">Ingresa con google</span>
                                    </a>    
                                  </div>
                                  <div class="col-md-6">
                                    <button class="btn btn-success btn-lg btnLogin">
                                       <span>Iniciar Sesión</span>
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