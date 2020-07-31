<template>
  <div>
    <template v-if="numGrupo">
      <template v-if="numGrupo===1">
        <VerBacteria></VerBacteria>
      </template>
      <template v-else-if="numGrupo===2">
        <VerHongo></VerHongo>
      </template>
      <template v-else-if="numGrupo===3">
        <VerLevadura></VerLevadura>
      </template>
      <template v-else-if="numGrupo===4">
        <VerActinomiceto></VerActinomiceto>
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
import VerBacteria from "./bacterias/VerBacteriaComponent.vue";
import VerHongo from "./hongos/VerHongoComponent.vue";
import VerLevadura from "./levaduras/VerLevaduraComponent.vue";
import VerActinomiceto from "./actinomicetos/VerActinomicetoComponent.vue";
import Toastr from "../../mixins/toastr";
import VerCepaMixin from "../../mixins/accionVer-accionCaract";
export default {
  components: { VerBacteria, VerHongo, VerLevadura, VerActinomiceto },
  mixins: [Toastr, VerCepaMixin],
  computed: {
    ...vuex.mapState(["auth"]),
    ...vuex.mapGetters("usuarios", ["getUsuarioById"]),
    ...vuex.mapState("cepa", ["cepa"]),
  },
  methods: {
    ...vuex.mapActions("cepa", ["llenarCepa", "limpiarCepa"]),
  },
  created() {
    this.$emit("cambiarTipo", "ver");
  },
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