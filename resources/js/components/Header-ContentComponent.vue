<template>
  <div class="widget-content p-0">
    <div class="widget-content-wrapper">
      <template v-if="getTipoUser!=''&&getUsuarios!=''">
        <div class="widget-content-left">
          <div class="btn-group">
            <img
              width="42"
              class="rounded-circle"
              :src="getUsuarioById(getUserAuth.id).avatarPublico"
              alt
            />
          </div>
        </div>
        <div class="widget-content-left ml-3 header-user-info">
          <div class="widget-heading">{{getUsuarioById(getUserAuth.id).name}}</div>
          <div class="widget-subheading">{{getTipoUserById(getUserAuth.tipouser_id).nombre}}</div>
        </div>
      </template>
      <div class="widget-content-right header-user-info ml-3"></div>
    </div>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
  methods: {
    ...vuex.mapActions(["obtenerTiposUsers", "obtenerUsers"])
  },
  computed: {
    ...vuex.mapGetters([
      "getUserAuth",
      "getTipoUserById",
      "getTipoUser",
      "getUsuarios",
      "getUsuarioById"
    ])
  },
  created() {
    this.obtenerTiposUsers();
    this.obtenerUsers();
  }
};
</script>