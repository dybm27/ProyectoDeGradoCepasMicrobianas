<template>
  <div class="container">
    <template v-if="info_caract_levaduras != ''">
      <div class="row justify-content-md-center">
        <div class="col-md-12">
          <div class="main-card mb-3 card">
            <div class="card-header-tab card-header">
              <div
                class="card-header-title font-size-lg text-capitalize font-weight-normal"
              >
                <i
                  class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"
                ></i>
                Tablas Dinámicas Características Macroscópicas
              </div>
              <div class="btn-actions-pane-right actions-icon-btn">
                <img
                  dusk="btn-mostrar-1"
                  class="mostrar-cursor"
                  @click="mostrarTablasCaractMacro"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAABmJLR0QA/wD/AP+gvaeTAAACOklEQVRYhe2XT2sTQRiHn9kNsUnblKoIooKXIhqTDaktagT9GP0MHrRbpNT24sFCq2gbBL+CfgTxoCi2hSataf540YuYQsV6aJuktunOeGgSwm7wsKERZZ/T8OzA+2PmZWYWPDz+R8KL5vFIdqK/kzW1VjKaMh/pfjbF/t5PI23OdCqMsIvw6pihS5VpdlJIIz+YzAJcWzQDFT9LCow26q7rmpb4GH/ytVk6VkZX8oTdaYiT9fGOJkMKLrYRBOCMsqyzdumzi0rIWghu+XJABEDAWjlkLdS/568mvxvLZlxq4pLrKJosZuLzS3bt2CaAcOF2j77rHwGwAvsvC+HnJdeFPTyOkJYNHEuN3lKCSQApxXRueO7dXwkzmB49XUV8BrprqmRJ30Bh+PEGAAoRTY9NCqHcH3qCYnCPqaXrc7vN2nHOVIUwUI0gAD0+fd8ANgDCK3fPIdRD5ToJoKB8jNfAqz+GsSxfRtcOSkBPTZWsKo3roTCY/BZdNaeEIuY6zOHKOLa+Zc9Els2baIc9gyanc/Hke9eFPTyOkJYNfOHDeK8/cDACILt+vejUre0Ic/7tg65Q79YytfcMkKv0HQx9GXi2V58TTd25rITP9QNLSdbzw08X7d5xzoT6thPIRhCASHBbTwBvAKJr905RtVYEyu82jNAglhq9kRmaX2j2jmenBZt2p5T4UR93l60d4JPbIDWKQteLjpCtZhppc0bBOICC2dyVufttFm+PSHaiv9P/TR4e/zS/AX4ptkIOwCnsAAAAAElFTkSuQmCC"
                />
              </div>
            </div>
            <div class="card-body" v-if="tablasCaractMacro">
              <div class="container">
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaColors />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaTexturas />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-md-12">
          <div class="main-card mb-3 card">
            <div class="card-header-tab card-header">
              <div
                class="card-header-title font-size-lg text-capitalize font-weight-normal"
              >
                <i
                  class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"
                ></i>
                Tablas Dinamicas Métodos De Conservación
              </div>
              <div class="btn-actions-pane-right actions-icon-btn">
                <img
                  class="mostrar-cursor"
                  @click="mostrarTablasMetodos"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAABmJLR0QA/wD/AP+gvaeTAAACOklEQVRYhe2XT2sTQRiHn9kNsUnblKoIooKXIhqTDaktagT9GP0MHrRbpNT24sFCq2gbBL+CfgTxoCi2hSataf540YuYQsV6aJuktunOeGgSwm7wsKERZZ/T8OzA+2PmZWYWPDz+R8KL5vFIdqK/kzW1VjKaMh/pfjbF/t5PI23OdCqMsIvw6pihS5VpdlJIIz+YzAJcWzQDFT9LCow26q7rmpb4GH/ytVk6VkZX8oTdaYiT9fGOJkMKLrYRBOCMsqyzdumzi0rIWghu+XJABEDAWjlkLdS/568mvxvLZlxq4pLrKJosZuLzS3bt2CaAcOF2j77rHwGwAvsvC+HnJdeFPTyOkJYNHEuN3lKCSQApxXRueO7dXwkzmB49XUV8BrprqmRJ30Bh+PEGAAoRTY9NCqHcH3qCYnCPqaXrc7vN2nHOVIUwUI0gAD0+fd8ANgDCK3fPIdRD5ToJoKB8jNfAqz+GsSxfRtcOSkBPTZWsKo3roTCY/BZdNaeEIuY6zOHKOLa+Zc9Els2baIc9gyanc/Hke9eFPTyOkJYNfOHDeK8/cDACILt+vejUre0Ic/7tg65Q79YytfcMkKv0HQx9GXi2V58TTd25rITP9QNLSdbzw08X7d5xzoT6thPIRhCASHBbTwBvAKJr905RtVYEyu82jNAglhq9kRmaX2j2jmenBZt2p5T4UR93l60d4JPbIDWKQteLjpCtZhppc0bBOICC2dyVufttFm+PSHaiv9P/TR4e/zS/AX4ptkIOwCnsAAAAAElFTkSuQmCC"
                />
              </div>
            </div>
            <div class="card-body" v-if="tablasMetodos">
              <div class="container">
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaMetodos />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
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
    </template>
    <ModalOtraInfoLevaduras />
  </div>
</template>

<script>
import websocketsOtraInfoMixin from "../../mixins/websocketsOtraInfo";
import ModalOtraInfoLevaduras from "./tablas/levaduras/ModalesComponent.vue";
import TablaMetodos from "./tablas/levaduras/tipos-metodos/TablaTiposMetodosComponent.vue";
import TablaColors from "./tablas/levaduras/colors/TablaColorsComponent.vue";
import TablaTexturas from "./tablas/levaduras/texturas/TablaTexturasComponent.vue";
import vuex from "vuex";
export default {
  components: {
    ModalOtraInfoLevaduras,
    TablaColors,
    TablaTexturas,
    TablaMetodos,
  },
  data() {
    return {
      tablasCaractMacro: false,
      tablasMetodos: false,
    };
  },
  mixins: [websocketsOtraInfoMixin("LevadurasInfo")],
  computed: {
    ...vuex.mapState("info_caract", ["info_caract_levaduras"]),
  },
  methods: {
    ...vuex.mapActions("info_caract", ["obtenerInfoCaractLevaduras"]),
    mostrarTablasCaractMacro() {
      this.tablasCaractMacro = !this.tablasCaractMacro;
    },
    mostrarTablasMetodos() {
      this.tablasMetodos = !this.tablasMetodos;
    },
  },
  created() {
    this.obtenerInfoCaractLevaduras();
    this.$events.$on("verificarBloqueos-colors-levadura", (e) =>
      this.verificarBloqueos("color")
    );
    this.$events.$on("verificarBloqueos-texturas-levadura", (e) =>
      this.verificarBloqueos("textura")
    );
    this.$events.$on("verificarBloqueos-tipos-metodos-levadura", (e) =>
      this.verificarBloqueos("tipo_metodo")
    );
  },
  destroyed() {
    this.$events.$off("verificarBloqueos-colors-levadura");
    this.$events.$off("verificarBloqueos-texturas-levadura");
    this.$events.$off("verificarBloqueos-tipos-metodos-levadura");
  },
};
</script>