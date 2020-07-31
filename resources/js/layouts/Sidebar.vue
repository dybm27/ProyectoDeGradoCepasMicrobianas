<template>
  <div class="app-sidebar sidebar-shadow">
    <div class="scrollbar-sidebar">
      <div class="app-sidebar__inner">
        <ul class="vertical-nav-menu">
          <li class="app-sidebar__heading">Administrar Informacion</li>
          <li>
            <router-link :to="{name:'perfil'}" active-class="mm-active">
              <i class="metismenu-icon pe-7s-user"></i>Perfil
            </router-link>
          </li>
          <li>
            <a :class="classActive">
              <i class="metismenu-icon pe-7s-science"></i>
              Cepas
              <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
            </a>
            <ul>
              <li>
                <router-link :to="{name:'cepas'}" active-class="mm-active">
                  <i class="metismenu-icon"></i>Todas
                </router-link>
              </li>
              <li>
                <router-link :to="{name:'bacterias'}" active-class="mm-active">
                  <i class="metismenu-icon"></i>Bacterias
                </router-link>
              </li>
              <li>
                <router-link :to="{name:'hongos'}" active-class="mm-active">
                  <i class="metismenu-icon"></i>Hongos Filamentosos
                </router-link>
              </li>
              <li>
                <router-link :to="{name:'levaduras'}" active-class="mm-active">
                  <i class="metismenu-icon"></i>
                  Levaduras
                </router-link>
              </li>
              <li>
                <router-link :to="{name:'actinomicetos'}" active-class="mm-active">
                  <i class="metismenu-icon"></i>
                  Actinomicetos
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link :to="{name:'otra-info-cepas'}" active-class="mm-active">
              <i class="metismenu-icon pe-7s-diskette"></i>Otra Información
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'calendario'}" active-class="mm-active">
              <i class="metismenu-icon pe-7s-date"></i>Calendario
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'tabla-usuarios'}" active-class="mm-active">
              <i class="metismenu-icon pe-7s-users"></i>Usuarios
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'imagenes-login'}" active-class="mm-active">
              <i class="metismenu-icon pe-7s-photo"></i>Imagenes Login
            </router-link>
          </li>
          <li class="app-sidebar__heading">Sitio Web Público</li>
          <li>
            <router-link :to="{name:'mision'}" active-class="mm-active">
              <i class="metismenu-icon pe-7s-notebook"></i>Quienes Somos
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'investigadores'}" active-class="mm-active">
              <i class="metismenu-icon pe-7s-id"></i>Investigadores
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'proyectos'}" active-class="mm-active">
              <i class="metismenu-icon pe-7s-paperclip"></i>Documentos
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'equipamientos'}" active-class="mm-active">
              <i class="metismenu-icon pe-7s-portfolio"></i>Equipamientos
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'noticias'}" active-class="mm-active">
              <i class="metismenu-icon pe-7s-news-paper"></i>Publicidad
            </router-link>
          </li>
          <hr />
          <li>
            <a @click.prevent="logout">
              <i class="metismenu-icon lnr-exit"></i>Cerrar Sesion
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ruta"],
  methods: {
    logout() {
      axios.post("/logout").then((res) => {
        window.location.href = "/";
      });
    },
  },
  computed: {
    classActive() {
      if (
        this.ruta.includes("cepas") ||
        this.ruta.includes("bacterias") ||
        this.ruta.includes("levaduras") ||
        this.ruta.includes("hongos") ||
        this.ruta.includes("actinomicetos")
      ) {
        return "mm-active";
      }
      return "";
    },
  },
};
</script>