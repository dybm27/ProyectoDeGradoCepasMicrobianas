<template>
  <div class="container">
    <template v-if="info_caract_actinomicetos!=''">
      <div class="row justify-content-md-center">
        <div class="col-md-12">
          <div class="main-card mb-3 card">
            <div class="card-header-tab card-header">
              <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
                Tablas Dinámicas Características Macroscópicas
              </div>
              <div class="btn-actions-pane-right actions-icon-btn">
                <img
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
                    <TablaTexturas />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaColors />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaFormasMacro />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaSuperficies />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaBordes />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaPigmentos />
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
              <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
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
                    <TablaTincions />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaFormasMicro />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaMicelios />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaConidioforos />
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
    <ModalOtraInfoActinomiceto />
  </div>
</template>

<script>
import websocketsOtraInfoMixin from "../../mixins/websocketsOtraInfo";
import ModalOtraInfoActinomiceto from "./tablas/actinomicetos/ModalesComponent.vue";
import TablaBordes from "./tablas/actinomicetos/bordes/TablaBordesComponent.vue";
import TablaColors from "./tablas/actinomicetos/colors/TablaColorsComponent.vue";
import TablaConidioforos from "./tablas/actinomicetos/conidioforos/TablaConidioforosComponent.vue";
import TablaMicelios from "./tablas/actinomicetos/micelios/TablaMiceliosComponent.vue";
import TablaFormasMacro from "./tablas/actinomicetos/formas-macro/TablaFormasMacroComponent.vue";
import TablaFormasMicro from "./tablas/actinomicetos/formas-micro/TablaFormasMicroComponent.vue";
import TablaSuperficies from "./tablas/actinomicetos/superficies/TablaSuperficiesComponent.vue";
import TablaTexturas from "./tablas/actinomicetos/texturas/TablaTexturasComponent.vue";
import TablaTincions from "./tablas/actinomicetos/tincions/TablaTincionsComponent.vue";
import TablaPigmentos from "./tablas/actinomicetos/pigmentos/TablaPigmentosComponent.vue";
import vuex from "vuex";
export default {
  components: {
    ModalOtraInfoActinomiceto,
    TablaBordes,
    TablaColors,
    TablaConidioforos,
    TablaMicelios,
    TablaFormasMacro,
    TablaFormasMicro,
    TablaSuperficies,
    TablaTexturas,
    TablaPigmentos,
    TablaTincions,
  },
  data() {
    return {
      tablasCaractMacro: false,
      tablasCaractMicro: false,
    };
  },
  mixins: [websocketsOtraInfoMixin("ActinomicetosInfo")],
  computed: {
    ...vuex.mapState("info_caract", ["info_caract_actinomicetos"]),
  },
  methods: {
    ...vuex.mapActions("info_caract", ["obtenerInfoCaractActinomicetos"]),
    mostrarTablasCaractMacro() {
      this.tablasCaractMacro = !this.tablasCaractMacro;
    },
    mostrarTablasCaractMicro() {
      this.tablasCaractMicro = !this.tablasCaractMicro;
    },
  },
  created() {
    this.obtenerInfoCaractActinomicetos();
    this.$events.$on("verificarBloqueos-bordes-actinomiceto", (e) =>
      this.verificarBloqueos("borde")
    );
    this.$events.$on("verificarBloqueos-colors-actinomiceto", (e) =>
      this.verificarBloqueos("color")
    );
    this.$events.$on("verificarBloqueos-micelios-actinomiceto", (e) =>
      this.verificarBloqueos("micelio")
    );
    this.$events.$on("verificarBloqueos-conidioforos-actinomiceto", (e) =>
      this.verificarBloqueos("conidioforo")
    );
    this.$events.$on("verificarBloqueos-formas-macro-actinomiceto", (e) =>
      this.verificarBloqueos("forma_macro")
    );
    this.$events.$on("verificarBloqueos-formas-micro-actinomiceto", (e) =>
      this.verificarBloqueos("forma_micro")
    );
    this.$events.$on("verificarBloqueos-superficies-actinomiceto", (e) =>
      this.verificarBloqueos("superficie")
    );
    this.$events.$on("verificarBloqueos-pigmentos-actinomiceto", (e) =>
      this.verificarBloqueos("pigmento")
    );
    this.$events.$on("verificarBloqueos-texturas-actinomiceto", (e) =>
      this.verificarBloqueos("textura")
    );
    this.$events.$on("verificarBloqueos-tincions-actinomiceto", (e) =>
      this.verificarBloqueos("tincion")
    );
  },
  destroyed() {
    this.$events.$off("verificarBloqueos-bordes-actinomiceto");
    this.$events.$off("verificarBloqueos-colors-actinomiceto");
    this.$events.$off("verificarBloqueos-micelios-actinomiceto");
    this.$events.$off("verificarBloqueos-conidioforos-actinomiceto");
    this.$events.$off("verificarBloqueos-formas-macro-actinomiceto");
    this.$events.$off("verificarBloqueos-formas-micro-actinomiceto");
    this.$events.$off("verificarBloqueos-superficies-actinomiceto");
    this.$events.$off("verificarBloqueos-pigmentos-actinomiceto");
    this.$events.$off("verificarBloqueos-texturas-actinomiceto");
    this.$events.$off("verificarBloqueos-tincions-actinomiceto");
  },
};
</script>