<template>
  <div>
    <Header />
    <div class="app-main">
      <Sider :ruta="ruta" />
      <div class="app-main__outer">
        <div class="app-main__inner">
          <transition enter-active-class="slideInLeft">
            <router-view @rutaSider="rutaSider"></router-view>
          </transition>
        </div>
        <div class="app-wrapper-footer">
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Sider from "./Sidebar.vue";
import Footer from "./Footer.vue";
import vuex from "vuex";
export default {
  // props: ["admin", "permisos"],
  data() {
    return { ruta: "" };
  },
  components: {
    Header,
    Sider,
    Footer,
  },
  methods: {
    ...vuex.mapActions(["accionModificarAuth", "guardarPermisosAuth"]),
    ...vuex.mapActions("usuarios", [
      "obtenerRoles",
      "obtenerUsers",
      "obtenerPermisos",
      "accionRol",
      "accionUsuario",
    ]),
    rutaSider(ruta) {
      this.ruta = ruta;
    },
  },
  computed: {
    ...vuex.mapState(["auth"]),
    ...vuex.mapGetters("usuarios", ["getRolById"]),
  },
  created() {
    // this.accionModificarAuth(this.admin);
    //  this.guardarPermisosAuth(this.permisos);
    this.obtenerPermisos();
    this.obtenerRoles();
    this.obtenerUsers();
    window.Echo.channel("usuario").listen("UsuarioEvent", (e) => {
      if (this.auth.id === e.user.id) {
        this.guardarPermisosAuth(this.getRolById(e.user.rol_id).permisos);
        this.accionModificarAuth(e.user);
      } else {
        this.accionUsuario({ tipo: e.tipo, data: e.user });
        this.$events.fire("actualizartablaUsuario");
      }
    });
    window.Echo.channel("rol").listen("RolEvent", (e) => {
      if (this.auth.rol_id === e.rol.id) {
        this.guardarPermisosAuth(e.rol.permisos);
      }
      this.accionRol({ tipo: e.tipo, data: e.rol });
      this.$events.fire("actualizartablaRol");
    });
  },
};
</script>