<template>
  <div>
    <template v-if="getCepa!=null">
      <template v-if="getCepa.cepa.grupo_microbiano_id==1">
        <nav-bacterias></nav-bacterias>
      </template>
      <template v-else-if="getCepa.cepa.grupo_microbiano_id==2">
        <nav-hongos></nav-hongos>
      </template>
      <template v-else-if="getCepa.cepa.grupo_microbiano_id==3">
        <nav-levaduras></nav-levaduras>
      </template>
      <template v-else>
        <nav-actinomicetos></nav-actinomicetos>
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
  data() {
    return {};
  },
  methods: {
    ...vuex.mapActions(["obtenerCepa"]),
    ...vuex.mapMutations(["limpiarCepa"])
  },
  computed: {
    ...vuex.mapGetters(["getCepa"])
  },
  destroyed() {
    this.limpiarCepa();
  }
};
</script>