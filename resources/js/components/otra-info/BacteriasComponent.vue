<template>
  <div class="container">
    <template v-if="info_caract_bacterias != ''">
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
                    <TablaFormasMacro />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaBordes />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaDetalles />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaElevacions />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaSuperficies />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaColors />
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
                Tablas Dinamicas Características Microscópicas
              </div>
              <div class="btn-actions-pane-right actions-icon-btn">
                <img
                  class="mostrar-cursor"
                  @click="mostrarTablasCaractMicro"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAABmJLR0QA/wD/AP+gvaeTAAACOklEQVRYhe2XT2sTQRiHn9kNsUnblKoIooKXIhqTDaktagT9GP0MHrRbpNT24sFCq2gbBL+CfgTxoCi2hSataf540YuYQsV6aJuktunOeGgSwm7wsKERZZ/T8OzA+2PmZWYWPDz+R8KL5vFIdqK/kzW1VjKaMh/pfjbF/t5PI23OdCqMsIvw6pihS5VpdlJIIz+YzAJcWzQDFT9LCow26q7rmpb4GH/ytVk6VkZX8oTdaYiT9fGOJkMKLrYRBOCMsqyzdumzi0rIWghu+XJABEDAWjlkLdS/568mvxvLZlxq4pLrKJosZuLzS3bt2CaAcOF2j77rHwGwAvsvC+HnJdeFPTyOkJYNHEuN3lKCSQApxXRueO7dXwkzmB49XUV8BrprqmRJ30Bh+PEGAAoRTY9NCqHcH3qCYnCPqaXrc7vN2nHOVIUwUI0gAD0+fd8ANgDCK3fPIdRD5ToJoKB8jNfAqz+GsSxfRtcOSkBPTZWsKo3roTCY/BZdNaeEIuY6zOHKOLa+Zc9Els2baIc9gyanc/Hke9eFPTyOkJYNfOHDeK8/cDACILt+vejUre0Ic/7tg65Q79YytfcMkKv0HQx9GXi2V58TTd25rITP9QNLSdbzw08X7d5xzoT6thPIRhCASHBbTwBvAKJr905RtVYEyu82jNAglhq9kRmaX2j2jmenBZt2p5T4UR93l60d4JPbIDWKQteLjpCtZhppc0bBOICC2dyVufttFm+PSHaiv9P/TR4e/zS/AX4ptkIOwCnsAAAAAElFTkSuQmCC"
                />
              </div>
            </div>
            <div class="card-body" v-if="tablasCaractMicro">
              <div class="container">
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaFormasMicro />
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
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaAgars />
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
    <ModalOtraInfoBacteria />
  </div>
</template>

<script>
import websocketsOtraInfoMixin from "../../mixins/websocketsOtraInfo";
import ModalOtraInfoBacteria from "./tablas/bacterias/ModalesComponent.vue";
import TablaBordes from "./tablas/bacterias/bordes/TablaBordesComponent.vue";
import TablaColors from "./tablas/bacterias/colors/TablaColorsComponent.vue";
import TablaDetalles from "./tablas/bacterias/detalles/TablaDetallesComponent.vue";
import TablaElevacions from "./tablas/bacterias/elevacions/TablaElevacionsComponent.vue";
import TablaFormasMacro from "./tablas/bacterias/formas-macro/TablaFormasMacroComponent.vue";
import TablaFormasMicro from "./tablas/bacterias/formas-micro/TablaFormasMicroComponent.vue";
import TablaSuperficies from "./tablas/bacterias/superficies/TablaSuperficiesComponent.vue";
import TablaAgars from "./tablas/bacterias/tipos-agars/TablaTiposAgarsComponent.vue";
import TablaMetodos from "./tablas/bacterias/tipos-metodos/TablaTiposMetodosComponent.vue";
import vuex from "vuex";
export default {
  components: {
    ModalOtraInfoBacteria,
    TablaBordes,
    TablaColors,
    TablaDetalles,
    TablaElevacions,
    TablaFormasMacro,
    TablaFormasMicro,
    TablaSuperficies,
    TablaAgars,
    TablaMetodos,
  },
  data() {
    return {
      tablasCaractMacro: false,
      tablasCaractMicro: false,
      tablasMetodos: false,
    };
  },
  mixins: [websocketsOtraInfoMixin("BacteriasInfo")],
  computed: {
    ...vuex.mapState("info_caract", ["info_caract_bacterias"]),
  },
  methods: {
    ...vuex.mapActions("info_caract", ["obtenerInfoCaractBacterias"]),
    mostrarTablasCaractMacro() {
      this.tablasCaractMacro = !this.tablasCaractMacro;
    },
    mostrarTablasCaractMicro() {
      this.tablasCaractMicro = !this.tablasCaractMicro;
    },
    mostrarTablasMetodos() {
      this.tablasMetodos = !this.tablasMetodos;
    },
  },
  created() {
    this.obtenerInfoCaractBacterias();
    this.$events.$on("verificarBloqueos-bordes-bacteria", (e) =>
      this.verificarBloqueos("borde")
    );
    this.$events.$on("verificarBloqueos-colors-bacteria", (e) =>
      this.verificarBloqueos("color")
    );
    this.$events.$on("verificarBloqueos-detalles-bacteria", (e) =>
      this.verificarBloqueos("detalle")
    );
    this.$events.$on("verificarBloqueos-elevacions-bacteria", (e) =>
      this.verificarBloqueos("elevacion")
    );
    this.$events.$on("verificarBloqueos-formas-macro-bacteria", (e) =>
      this.verificarBloqueos("forma_macro")
    );
    this.$events.$on("verificarBloqueos-formas-micro-bacteria", (e) =>
      this.verificarBloqueos("forma_micro")
    );
    this.$events.$on("verificarBloqueos-superficies-bacteria", (e) =>
      this.verificarBloqueos("superficie")
    );
    this.$events.$on("verificarBloqueos-tipos-agars-bacteria", (e) =>
      this.verificarBloqueos("tipo_agar")
    );
    this.$events.$on("verificarBloqueos-tipos-metodos-bacteria", (e) =>
      this.verificarBloqueos("tipo_metodo")
    );
  },
  destroyed() {
    this.$events.$off("verificarBloqueos-bordes-bacteria");
    this.$events.$off("verificarBloqueos-colors-bacteria");
    this.$events.$off("verificarBloqueos-detalles-bacteria");
    this.$events.$off("verificarBloqueos-elevacions-bacteria");
    this.$events.$off("verificarBloqueos-formas-macro-bacteria");
    this.$events.$off("verificarBloqueos-formas-micro-bacteria");
    this.$events.$off("verificarBloqueos-superficies-bacteria");
    this.$events.$off("verificarBloqueos-tipos-agars-bacteria");
    this.$events.$off("verificarBloqueos-tipos-metodos-bacteria");
  },
};
</script>