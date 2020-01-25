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
                            <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="p-0 btn">
                                <img width="42" class="rounded-circle" src="{{asset('assets\images\avatars\1.jpg')}}" alt="">
                                <i class="fa fa-angle-down ml-2 opacity-8"></i>
                            </a>
                            <div tabindex="-1" role="menu" aria-hidden="true" class="rm-pointers dropdown-menu-lg dropdown-menu dropdown-menu-right">
                                <div class="dropdown-menu-header">
                                    <div class="dropdown-menu-header-inner bg-info">
                                        <div class="menu-header-image opacity-2" style="background-image: url({{asset('assets/images/dropdown-header/city3.jpg')}});"></div>
                                        <div class="menu-header-content text-left">
                                            <div class="widget-content p-0">
                                                <div class="widget-content-wrapper">
                                                    <div class="widget-content-left mr-3">
                                                        <img width="42" class="rounded-circle" src="{{asset('assets\images\avatars\1.jpg')}}" alt="">
                                                    </div>
                                                    <div class="widget-content-left">
                                                        <div class="widget-heading">Alina Mcloughlin
                                                        </div>
                                                        <div class="widget-subheading opacity-8">A short profile description
                                                        </div>
                                                    </div>
                                                    <div class="widget-content-right mr-2">
                                                        <a class="btn-pill btn-shadow btn-shine btn btn-focus" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                            document.getElementById('logout-form').submit();">Logout</a>
                                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                                            @csrf
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
                    <div class="widget-content-left  ml-3 header-user-info">
                        <div class="widget-heading">
                            Alina Mclourd
                        </div>
                        <div class="widget-subheading">
                            VP People Manager
                        </div>
                    </div>
                    <div class="widget-content-right header-user-info ml-3">
                        <button type="button" class="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example">
                            <i class="fa text-white fa-calendar pr-1 pl-1"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>  
        <div class="header-btn-lg">
    
        </div>
    </div>
</div>