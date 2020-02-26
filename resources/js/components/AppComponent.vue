<template>
  <div>
    <div class="app-sidebar sidebar-shadow">
      <div class="scrollbar-sidebar ps ps--active-y">
        <div class="app-sidebar__inner">
          <ul class="vertical-nav-menu">
            <li class="app-sidebar__heading">Administrar Informacion</li>
            <li>
              <router-link :to="{name: 'perfil'}">
                <i class="metismenu-icon pe-7s-graph2"></i>Perfil
              </router-link>
            </li>
            <li>
              <a href="#">
                <i class="metismenu-icon pe-7s-rocket"></i>
                Cepas
                <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
              </a>
              <ul>
                <li>
                  <router-link :to="{name: 'cepas'}">
                    <i class="metismenu-icon"></i>Todas
                  </router-link>
                </li>
                <li>
                  <router-link to>
                    <i class="metismenu-icon"></i>Bacterias
                  </router-link>
                </li>
                <li>
                  <router-link to>
                    <i class="metismenu-icon"></i>Hongos Filamentosos
                  </router-link>
                </li>
                <li>
                  <router-link to>
                    <i class="metismenu-icon"></i>Levaduras
                  </router-link>
                </li>
                <li>
                  <router-link to>
                    <i class="metismenu-icon"></i>Actinomicetos
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="app-sidebar__heading">Usuario Final</li>
            <li>
              <a @click="cerrar_sesion">
                <i class="metismenu-icon lnr-exit"></i>Cerrar Sesion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-main__outer">
      <div class="app-main__inner">
        <router-view></router-view>
      </div>
      <div class="app-wrapper-footer">
        <div class="app-footer">
          <div class="app-footer__inner">
            <div class="app-footer-left"></div>
            <div class="app-footer-right"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    cerrar_sesion() {
        console.log("hola")
    }
  }
};
</script>