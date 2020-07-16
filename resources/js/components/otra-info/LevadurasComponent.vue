<template>
  <div class="container">
    <template v-if="getInfoLevaduras!=''">
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
                    <TablaColors
                      @cambiarVariable="cambiarVariable"
                      :refrescarTabla="refrescarTabla1"
                    />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaTexturas
                      @cambiarVariable="cambiarVariable"
                      :refrescarTabla="refrescarTabla2"
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
                    <TablaMetodos
                      @cambiarVariable="cambiarVariable"
                      :refrescarTabla="refrescarTabla3"
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
    <ModalOtraInfoLevaduras @accionModal-levadura="accionModal" />
  </div>
</template>

<script>
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
    TablaMetodos
  },
  data() {
    return {
      refrescarTabla1: false,
      refrescarTabla2: false,
      refrescarTabla3: false,
      tablasCaractMacro: false,
      tablasMetodos: false
    };
  },
  created() {
    if (this.getInfoLevaduras == "") {
      this.obtenerInfoCaractLevaduras();
    }
    this.obtenerInfoCaractLevaduras();
    this.$emit("rutaHijo", window.location.pathname);
  },
  computed: {
    ...vuex.mapGetters("info_caract", ["getInfoLevaduras"])
  },
  methods: {
    ...vuex.mapActions("info_caract", ["obtenerInfoCaractLevaduras"]),
    accionModal(datos) {
      switch (datos.tipo) {
        case "color":
          this.refrescarTabla1 = true;
          break;
        case "textura":
          this.refrescarTabla2 = true;
          break;
        case "tipo_metodo":
          this.refrescarTabla3 = true;
          break;
      }
    },
    cambiarVariable() {
      this.refrescarTabla1 = false;
      this.refrescarTabla2 = false;
      this.refrescarTabla3 = false;
    },
    mostrarTablasCaractMacro() {
      this.tablasCaractMacro = !this.tablasCaractMacro;
    },
    mostrarTablasMetodos() {
      this.tablasMetodos = !this.tablasMetodos;
    }
  }
};
</script>