<template>
  <div class="container">
    <template v-if="getInfoHongos!=''">
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
                    <TablaConidioforos
                      @cambiarVariable="cambiarVariable"
                      :refrescarTabla="refrescarTabla3"
                    />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaEsporasAsexuales
                      @cambiarVariable="cambiarVariable"
                      :refrescarTabla="refrescarTabla4"
                    />
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col-md-10">
                    <TablaEsporasSexuales
                      @cambiarVariable="cambiarVariable"
                      :refrescarTabla="refrescarTabla5"
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
                      :refrescarTabla="refrescarTabla6"
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
    <ModalOtraInfoHongos @accionModal-hongo="accionModal" />
  </div>
</template>

<script>
import ModalOtraInfoHongos from "./tablas/hongos/ModalesComponent.vue";
import TablaMetodos from "./tablas/hongos/tipos-metodos/TablaTiposMetodosComponent.vue";
import TablaColors from "./tablas/hongos/colors/TablaColorsComponent.vue";
import TablaTexturas from "./tablas/hongos/texturas/TablaTexturasComponent.vue";
import TablaConidioforos from "./tablas/hongos/conidioforos/TablaConidioforosComponent.vue";
import TablaEsporasSexuales from "./tablas/hongos/esporas-sexual/TablaEsporasSexualComponent.vue";
import TablaEsporasAsexuales from "./tablas/hongos/esporas-asexual/TablaEsporasAsexualComponent.vue";
import vuex from "vuex";
export default {
  components: {
    ModalOtraInfoHongos,
    TablaColors,
    TablaTexturas,
    TablaMetodos,
    TablaEsporasAsexuales,
    TablaEsporasSexuales,
    TablaConidioforos
  },
  data() {
    return {
      refrescarTabla1: false,
      refrescarTabla2: false,
      refrescarTabla3: false,
      refrescarTabla4: false,
      refrescarTabla5: false,
      refrescarTabla6: false,
      tablasCaractMacro: false,
      tablasCaractMicro: false,
      tablasMetodos: false
    };
  },
  created() {
    if (this.getInfoHongos == "") {
      this.obtenerInfoCaractHongos();
    }
    this.obtenerInfoCaractHongos();
    this.$emit("rutaHijo", window.location.pathname);
  },
  computed: {
    ...vuex.mapGetters("info_caract", ["getInfoHongos"])
  },
  methods: {
    ...vuex.mapActions("info_caract", ["obtenerInfoCaractHongos"]),
    accionModal(datos) {
      switch (datos.tipo) {
        case "color":
          this.refrescarTabla1 = true;
          break;
        case "textura":
          this.refrescarTabla2 = true;
          break;
        case "conidioforo":
          this.refrescarTabla3 = true;
          break;
        case "esporaA":
          this.refrescarTabla4 = true;
          break;
        case "esporaS":
          this.refrescarTabla5 = true;
          break;
        case "tipo_metodo":
          this.refrescarTabla6 = true;
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
    },
    mostrarTablasCaractMacro() {
      this.tablasCaractMacro = !this.tablasCaractMacro;
    },
    mostrarTablasCaractMicro() {
      this.tablasCaractMicro = !this.tablasCaractMicro;
    },
    mostrarTablasMetodos() {
      this.tablasMetodos = !this.tablasMetodos;
    }
  }
};
</script>