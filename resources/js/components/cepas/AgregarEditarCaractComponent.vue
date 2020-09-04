<template>
  <div>
    <template v-if="numGrupo">
      <template v-if="numGrupo===1">
        <NavBacterias></NavBacterias>
      </template>
      <template v-else-if="numGrupo===2">
        <NavHongos></NavHongos>
      </template>
      <template v-else-if="numGrupo===3">
        <NavLevaduras></NavLevaduras>
      </template>
      <template v-else-if="numGrupo===4">
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
import Toastr from "../../mixins/toastr";
import CaractCepaMixin from "../../mixins/accionVer-accionCaract";
export default {
  components: { NavBacterias, NavHongos, NavLevaduras, NavActinomicetos },
  mixins: [Toastr, CaractCepaMixin],
  computed: {
    ...vuex.mapState(["auth"]),
    ...vuex.mapGetters("usuarios", ["getUsuarioById"]),
    ...vuex.mapState("cepa", ["cepa"]),
  },
  methods: {
    ...vuex.mapActions("cepa", ["llenarCepa", "limpiarCepa"]),
  },
  created() {
    this.$emit("cambiarTipo", "caract");
  },
};
</script>