<template>
  <div>
    <div v-if="getCepa!=null">
      <div v-if="getCepa.cepa.grupo_microbiano_id==1">
        <nav-bacterias></nav-bacterias>
      </div>
      <div v-else-if="getCepa.cepa.grupo_microbiano_id==2">
        <nav-hongos></nav-hongos>
      </div>
      <div v-else-if="getCepa.cepa.grupo_microbiano_id==3">
        <nav-levaduras></nav-levaduras>
      </div>
      <div v-else>
        <nav-actinomicetos></nav-actinomicetos>
      </div>
    </div>
    <div v-else>Esperando Informacion</div>
  </div>
</template>

<script>
import vuex from "vuex";

export default {
  created() {
    let ruta = window.location.pathname;
    if (ruta.includes("bacteria")) {
      this.obtenerCepa(this.$route.params.cepaBacteriaId);
    } else if (ruta.includes("hongo")) {
      this.obtenerCepa(this.$route.params.cepaHongoId);
    } else if (ruta.includes("levadura")) {
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