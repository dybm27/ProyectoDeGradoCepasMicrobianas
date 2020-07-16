<template>
  <div class="container">
    <template v-if="getInfoActinomicetos!=''">
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
                  @click="mostrarTablasCaractMacro"
                  :src="'/iconos/icons8-vista-general-3-35.png'"
                />
              </div>
            </div>
            <div class="card-body" v-if="tablasCaractMacro">
              <div class="container">
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaTexturas
                      @cambiarVariable="cambiarVariable"
                      :refrescarTabla="refrescarTabla1"
                    />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaColors
                      @cambiarVariable="cambiarVariable"
                      :refrescarTabla="refrescarTabla2"
                    />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaFormasMacro
                      @cambiarVariable="cambiarVariable"
                      :refrescarTabla="refrescarTabla3"
                    />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaSuperficies
                      @cambiarVariable="cambiarVariable"
                      :refrescarTabla="refrescarTabla4"
                    />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaBordes
                      @cambiarVariable="cambiarVariable"
                      :refrescarTabla="refrescarTabla5"
                    />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaPigmentos
                      @cambiarVariable="cambiarVariable"
                      :refrescarTabla="refrescarTabla6"
                    />
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
                  @click="mostrarTablasCaractMicro"
                  :src="'/iconos/icons8-vista-general-3-35.png'"
                />
              </div>
            </div>
            <div class="card-body" v-if="tablasCaractMicro">
              <div class="container">
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaTincions
                      @cambiarVariable="cambiarVariable"
                      :refrescarTabla="refrescarTabla7"
                    />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaFormasMicro
                      @cambiarVariable="cambiarVariable"
                      :refrescarTabla="refrescarTabla8"
                    />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaMicelios
                      @cambiarVariable="cambiarVariable"
                      :refrescarTabla="refrescarTabla9"
                    />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaConidioforos
                      @cambiarVariable="cambiarVariable"
                      :refrescarTabla="refrescarTabla10"
                    />
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
    <ModalOtraInfoActinomiceto @accionModal-actinomiceto="accionModal" />
  </div>
</template>

<script>
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
    TablaTincions
  },
  data() {
    return {
      refrescarTabla1: false,
      refrescarTabla2: false,
      refrescarTabla3: false,
      refrescarTabla4: false,
      refrescarTabla5: false,
      refrescarTabla6: false,
      refrescarTabla7: false,
      refrescarTabla8: false,
      refrescarTabla9: false,
      refrescarTabla10: false,
      tablasCaractMacro: false,
      tablasCaractMicro: false
    };
  },
  created() {
    if (this.getInfoActinomicetos == "") {
      this.obtenerInfoCaractActinomicetos();
    }
    this.$emit("rutaHijo", window.location.pathname);
  },
  computed: {
    ...vuex.mapGetters("info_caract", ["getInfoActinomicetos"])
  },
  methods: {
    ...vuex.mapActions("info_caract", ["obtenerInfoCaractActinomicetos"]),
    accionModal(datos) {
      switch (datos.tipo) {
        case "textura":
          this.refrescarTabla1 = true;
          break;
        case "color":
          this.refrescarTabla2 = true;
          break;
        case "forma_macro":
          this.refrescarTabla3 = true;
          break;
        case "superficie":
          this.refrescarTabla4 = true;
          break;
        case "borde":
          this.refrescarTabla5 = true;
          break;
        case "pigmento":
          this.refrescarTabla6 = true;
          break;
        case "tincion":
          this.refrescarTabla7 = true;
          break;
        case "forma_micro":
          this.refrescarTabla8 = true;
          break;
        case "micelio":
          this.refrescarTabla9 = true;
          break;
        case "conidioforo":
          this.refrescarTabla10 = true;
          break;
      }
    },
    cambiarVariable() {
      this.refrescarTabla1 = false;
      this.refrescarTabla2 = false;
      this.refrescarTabla3 = false;
      this.refrescarTabla4 = false;
      this.refrescarTabla5 = false;
      this.refrescarTabla6 = false;
      this.refrescarTabla7 = false;
      this.refrescarTabla8 = false;
      this.refrescarTabla9 = false;
      this.refrescarTabla10 = false;
    },
    mostrarTablasCaractMacro() {
      this.tablasCaractMacro = !this.tablasCaractMacro;
    },
    mostrarTablasCaractMicro() {
      this.tablasCaractMicro = !this.tablasCaractMicro;
    }
  }
};
</script>