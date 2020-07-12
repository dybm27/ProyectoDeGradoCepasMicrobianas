<template>
  <div class="widget-content p-0">
    <div class="widget-content-wrapper">
      <div class="widget-content-left">
        <div class="btn-group">
          <img width="42" class="rounded-circle" :src="getUserAuth.avatarPublico" alt />
        </div>
      </div>
      <div class="widget-content-left ml-3 header-user-info">
        <div class="widget-heading">{{getUserAuth.name}}</div>
        <template v-if="getTipoUser!=''">
          <div class="widget-subheading">{{getTipoUserById(getUserAuth.tipouser_id).nombre}}</div>
        </template>
      </div>
      <div class="widget-content-right header-user-info ml-3"></div>
    </div>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
  props: ["admin"],
  data() {
    return {
      isIncognito: false
    };
  },
  methods: {
    ...vuex.mapActions(["accionModificarAuth"]),
    ...vuex.mapActions("usuarios", ["obtenerTiposUsers", "obtenerUsers"]),
    beforeunload() {
      axios.put("/usuario/borrarSessionId");
    }
  },
  computed: {
    ...vuex.mapGetters("usuarios", ["getTipoUserById", "getTipoUser"]),
    ...vuex.mapGetters(["getUserAuth"])
  },
  mounted() {
    //window.addEventListener("beforeunload", this.beforeunload);
  },
  created() {
    this.accionModificarAuth({ data: this.admin });
    this.obtenerTiposUsers();
    this.obtenerUsers();
  },
  beforeDestroy() {
   // window.removeEventListener("beforeunload", this.beforeunload);
  }
};
</script>