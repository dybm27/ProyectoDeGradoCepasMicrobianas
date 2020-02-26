<div class="app-header__content">
    <div class="app-header-left">
        <!--<div class="search-wrapper">
            <div class="input-holder">
                <input type="text" class="search-input" placeholder="Type to search">
                <button class="search-icon"><span></span></button>
            </div>
            <button class="close"></button>
        </div>-->
    </div>
    <div class="app-header-right">    
        <div class="header-dots">
            
        </div>    
        <div class="header-btn-lg pr-0">
            <div class="widget-content p-0">
                <div class="widget-content-wrapper">
                    <div class="widget-content-left">
                        <div class="btn-group">
                            <img width="42" class="rounded-circle" src="{{asset('assets\images\avatars\1.jpg')}}" alt="">
                        </div>
                    </div>
                    <div class="widget-content-left  ml-3 header-user-info">
                        <div class="widget-heading">
                            {{Auth::user()->name}}
                        </div>
                        <div class="widget-subheading">
                            {{Auth::user()->tipouser->nombre}}
                        </div>
                    </div>
                    <div class="widget-content-right header-user-info ml-3">
                        <a class="mb-2 mr-2 btn-icon btn-icon-only btn-pill btn btn-outline-danger" href="{{ route('logout') }}" onclick="event.preventDefault();
                            document.getElementById('logout-form').submit();"><i class="lnr-power-switch"></i></a>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                    </div>
                </div>
            </div>
        </div>  
        <div class="header-btn-lg">
    
        </div>
    </div>
</div>