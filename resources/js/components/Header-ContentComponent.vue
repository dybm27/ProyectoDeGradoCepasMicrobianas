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
  methods: {
    ...vuex.mapActions("usuarios", ["obtenerTiposUsers", "obtenerUsers"])
  },
  computed: {
    ...vuex.mapGetters("usuarios", ["getTipoUserById", "getTipoUser"]),
    ...vuex.mapGetters(["getUserAuth"])
  },
  created() {
    this.obtenerTiposUsers();
    this.obtenerUsers();
  }
};
</script>