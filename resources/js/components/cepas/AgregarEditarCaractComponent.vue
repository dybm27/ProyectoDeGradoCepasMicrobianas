<template>
  <div>
    <template v-if="tipo">
      <template v-if="tipo===1">
        <nav-bacterias></nav-bacterias>
      </template>
      <template v-else-if="tipo===2">
        <nav-hongos></nav-hongos>
      </template>
      <template v-else-if="tipo===3">
        <nav-levaduras></nav-levaduras>
      </template>
      <template v-else-if="tipo===4">
        <nav-actinomicetos></nav-actinomicetos>
      </template>
      <template v-else>
        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-12 d-flex justify-content-center mt-5">
              <div class="loader mt-5">
                <div class="ball-spin-fade-loader mt-5">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </template>
    <template v-else>
      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center mt-5">
            <div class="loader mt-5">
              <div class="ball-spin-fade-loader mt-5">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import vuex from "vuex";

export default {
  data() {
    return {
      tipo: ""
    };
  },
  created() {
    if (this.$route.params.cepaId) {
      this.obtenerCepa(this.$route.params.cepaId);
    } else if (this.$route.params.cepaBacteriaId) {
      this.obtenerCepa(this.$route.params.cepaBacteriaId);
    } else if (this.$route.params.cepaHongoId) {
      this.obtenerCepa(this.$route.params.cepaHongoId);
    } else if (this.$route.params.cepaLevaduraId) {
      this.obtenerCepa(this.$route.params.cepaLevaduraId);
    } else {
      this.obtenerCepa(this.$route.params.cepaActinomicetoId);
    }
  },
  mounted() {
    this.$emit("rutaHijo", window.location.pathname);
  },
  watch: {
    getCepa() {
      if (this.getCepa) {
        this.tipo = this.verificarUrl(this.getCepa.cepa.grupo_microbiano_id);
      }
    }
  },
  methods: {
    ...vuex.mapActions(["obtenerCepa"]),
    ...vuex.mapMutations(["limpiarCepa"]),
    verificarUrl(tipo) {
      let ruta = window.location.pathname;
      switch (tipo) {
        case 1:
          if (ruta.includes("bacteria")) {
            return 1;
          }
          break;
        case 2:
          if (ruta.includes("hongo")) {
            return 2;
          }
          break;
        case 3:
          if (ruta.includes("levadura")) {
            return 3;
          }
          break;
        case 4:
          if (ruta.includes("actinomiceto")) {
            return 4;
          }
          break;
        default:
          return 0;
          break;
      }
    }
  },
  computed: {
    ...vuex.mapGetters(["getCepa"])
  },
  destroyed() {
    this.limpiarCepa();
  }
};
</script>