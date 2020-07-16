<template>
  <div>
    <template v-if="tipo">
      <template v-if="tipo===1">
        <NavBacterias></NavBacterias>
      </template>
      <template v-else-if="tipo===2">
        <NavHongos></NavHongos>
      </template>
      <template v-else-if="tipo===3">
        <NavLevaduras></NavLevaduras>
      </template>
      <template v-else-if="tipo===4">
        <NavActinomicetos></NavActinomicetos>
      </template>
      <template v-else>
        <div class="flex-center position-ref full-height">
          <div class="code">La Cepa</div>
          <div class="message" style="padding: 10px;">No Existe</div>
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
import NavBacterias from "./bacterias/NavBacteriasComponent.vue";
import NavHongos from "./hongos/NavHongosComponent.vue";
import NavLevaduras from "./levaduras/NavLevadurasComponent.vue";
import NavActinomicetos from "./actinomicetos/NavActinomicetosComponent.vue";
export default {
  components: { NavBacterias, NavHongos, NavLevaduras, NavActinomicetos },
  props: ["tipoG"],
  data() {
    return {
      tipo: ""
    };
  },
  created() {
    switch (this.tipoG) {
      case 1:
        this.obtenerCepa(this.$route.params.cepaBacteriaId);
        break;
      case 2:
        this.obtenerCepa(this.$route.params.cepaHongoId);
        break;
      case 3:
        this.obtenerCepa(this.$route.params.cepaLevaduraId);
        break;
      case 4:
        this.obtenerCepa(this.$route.params.cepaActinomicetoId);
        break;
      case 0:
        this.obtenerCepa(this.$route.params.cepaId);
        break;
    }
    this.$emit("rutaHijo", window.location.pathname);
  },
  watch: {
    getCepa() {
      if (this.getCepa) {
        if (this.getCepa === "No Existe") {
          this.tipo = 5;
        } else {
          this.tipo = this.verificarUrl(this.getCepa.cepa.grupo_microbiano_id);
        }
      }
    }
  },
  methods: {
    ...vuex.mapActions("cepa", ["obtenerCepa", "limpiarCepa"]),
    verificarUrl(tipo) {
      let ruta = window.location.pathname;
      switch (tipo) {
        case 1:
          if (ruta.includes("bacteria")) {
            return 1;
          } else {
            return 5;
          }
          break;
        case 2:
          if (ruta.includes("hongo")) {
            return 2;
          } else {
            return 5;
          }
          break;
        case 3:
          if (ruta.includes("levadura")) {
            return 3;
          } else {
            return 5;
          }
          break;
        case 4:
          if (ruta.includes("actinomiceto")) {
            return 4;
          } else {
            return 5;
          }
          break;
      }
    }
  },
  computed: {
    ...vuex.mapGetters("cepa", ["getCepa"]),
    getTipo() {
      return this.tipo;
    }
  },
  destroyed() {
    this.limpiarCepa();
  }
};
</script>


<style scoped>
.full-height {
  height: 40vh;
}
.flex-center {
  align-items: center;
  display: flex;
  justify-content: center;
}
.position-ref {
  position: relative;
}
.code {
  border-right: 4px solid;
  font-size: 60px;
  padding: 0 15px 0 15px;
  text-align: center;
}
.message {
  font-size: 40px;
  text-align: center;
}
</style>