<template>
  <div class="app-header__content">
    <div class="app-header-left"></div>
    <div class="app-header-right">
      <div class="header-dots"></div>
      <div class="header-btn-lg pr-0">
        <div class="widget-content p-0">
          <template v-if="auth">
            <div class="widget-content-wrapper">
              <div class="widget-content-left">
                <div class="btn-group">
                  <img width="42" class="rounded-circle" :src="auth.avatarPublico" alt />
                </div>
              </div>
              <div class="widget-content-left ml-3 header-user-info">
                <div class="widget-heading">{{auth.name}}</div>
                <template v-if="getTipoUser!=''">
                  <div class="widget-subheading">{{getTipoUserById(auth.tipouser_id).nombre}}</div>
                </template>
              </div>
              <div class="widget-content-right header-user-info ml-3"></div>
            </div>
          </template>
        </div>
      </div>
      <div class="header-btn-lg">
        <button
          class="mb-2 mr-2 btn-icon btn-icon-only btn-pill btn btn-outline-danger"
          @click.prevent="logout"
        >
          <i class="pe-7s-power"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
  methods: {
    logout() {
      axios.post("/logout").then((res) => {
        window.location.href = "/";
      });
    },
  },
  computed: {
    ...vuex.mapGetters("usuarios", ["getTipoUserById", "getTipoUser"]),
    ...vuex.mapState(["auth"]),
  },
};
</script>