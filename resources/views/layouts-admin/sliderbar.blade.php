<div class="app-sidebar sidebar-shadow">
    
    @include('layouts-admin.headers.header-logo')
    @include('layouts-admin.headers.header-mobile-menu')
    @include('layouts-admin.headers.header-menu')
       
    <div class="scrollbar-sidebar ps ps--active-y">
        <div class="app-sidebar__inner">
            <ul class="vertical-nav-menu">
                <li class="app-sidebar__heading">Administrar Informacion</li>
                <li>
                    <a href="{{route('home')}}" @yield('route-perfil')>
                        <i class="metismenu-icon pe-7s-graph2">
                        </i>Perfil
                    </a>
                </li>
                <li @yield('route-cepa')>
                    <a href="#">
                        <i class="metismenu-icon pe-7s-rocket"></i>
                        Cepas
                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                    </a>
                    <ul>
                        <li>
                            <a href="{{route('cepas')}}" @yield('route-todas')>
                                <i class="metismenu-icon">
                                </i>Todas
                            </a>
                        </li>
                        <li>
                            <a href="{{route('cepas_bacterias')}}" @yield('route-bacteria')>
                                <i class="metismenu-icon">
                                </i>Bacterias
                            </a>
                        </li>
                        <li>
                            <a href="{{route('cepas_hongos')}}" @yield('route-hongo')>
                                <i class="metismenu-icon">
                                </i>Hongos Filamentosos
                            </a>
                        </li>
                        <li>
                            <a href="{{route('cepas_levaduras')}}" @yield('route-levadura')>
                                <i class="metismenu-icon"></i>
                                Levaduras
                            </a>
                        </li>
                        <li>
                            <a href="{{route('cepas_actinomicetos')}}" @yield('route-actinomiceto')>
                                <i class="metismenu-icon"></i>
                                Actinomicetos
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="app-sidebar__heading">Usuario Final</li>
                <hr/>
                <li>
                    <a href="{{ route('logout') }}" onclick="event.preventDefault();
                    document.getElementById('logout-form').submit();">
                        <i class="metismenu-icon lnr-exit"></i>Cerrar Sesion
                    </a>
                    <form id="logout-form1" action="{{ route('logout') }}" method="POST" style="display: none;">
                        @csrf
                    </form>  
                </li>
            </ul>
        </div>
    </div>
</div>