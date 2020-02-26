<div class="app-page-title">
    <div class="page-title-wrapper">
        <div class="page-title-heading">
            <div class="page-title-icon">
                @yield('icono-titulo')
            </div>
            <div>
                @yield('titulo')
                <div class="page-title-subheading">
                    @yield('subtitulo')
                </div>
            </div>
        </div>
        <div class="page-title-actions">
            @yield('accion')
        </div>    
    </div>
</div>  