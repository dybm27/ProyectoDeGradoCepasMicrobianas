<template>
  <div>
    <Header />
    <div class="app-main">
      <Sider :ruta="ruta" />
      <div class="app-main__outer">
        <div class="app-main__inner">
          <router-view @rutaSider="rutaSider"></router-view>
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
  props: ["admin"],
  data() {
    return { ruta: "" };
  },
  components: {
    Header,
    Sider,
    Footer,
  },
  methods: {
    ...vuex.mapActions(["accionModificarAuth"]),
    ...vuex.mapActions("usuarios", ["obtenerTiposUsers", "obtenerUsers"]),
    rutaSider(ruta) {
      this.ruta = ruta;
    },
  },
  computed: {
    ...vuex.mapState(["auth"]),
  },
  created() {
    this.accionModificarAuth({ data: this.admin });
    this.obtenerTiposUsers();
    this.obtenerUsers();
    window.Echo.channel("auth").listen("AuthEvent", (e) => {
      if (this.auth.id === e.auth.id) {
        this.accionModificarAuth({ data: e.auth });
      }
    });
  },
};
</script>