<template>
  <div class="container">
    <template v-if="getInfoBacterias!=''">
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
              <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
                Tablas Dinamicas Métodos De Conservación
              </div>
              <div class="btn-actions-pane-right actions-icon-btn">
                <img @click="mostrarTablasMetodos" :src="'/iconos/icons8-vista-general-3-35.png'" />
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
    TablaMetodos
  },
  data() {
    return {
      tablasCaractMacro: false,
      tablasCaractMicro: false,
      tablasMetodos: false
    };
  },
  mixins: [websocketsOtraInfoMixin("BacteriasInfo")],
  computed: {
    ...vuex.mapGetters("info_caract", ["getInfoBacterias"])
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
    }
  },
  created() {
    if (this.getInfoBacterias == "") {
      this.obtenerInfoCaractBacterias();
    }
    this.obtenerInfoCaractBacterias();
    this.$events.$on("verificarBloqueos-bordes-bacteria", e =>
      this.verificarBloqueos("borde")
    );
    this.$events.$on("verificarBloqueos-colors-bacteria", e =>
      this.verificarBloqueos("color")
    );
    this.$events.$on("verificarBloqueos-detalles-bacteria", e =>
      this.verificarBloqueos("detalle")
    );
    this.$events.$on("verificarBloqueos-elevacions-bacteria", e =>
      this.verificarBloqueos("elevacion")
    );
    this.$events.$on("verificarBloqueos-formas-macro-bacteria", e =>
      this.verificarBloqueos("forma_macro")
    );
    this.$events.$on("verificarBloqueos-formas-micro-bacteria", e =>
      this.verificarBloqueos("forma_micro")
    );
    this.$events.$on("verificarBloqueos-superficies-bacteria", e =>
      this.verificarBloqueos("superficies")
    );
    this.$events.$on("verificarBloqueos-tipos-agars-bacteria", e =>
      this.verificarBloqueos("tipo_agar")
    );
    this.$events.$on("verificarBloqueos-tipos-metodos-bacteria", e =>
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
  }
};
</script>