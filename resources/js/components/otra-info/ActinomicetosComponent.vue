<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-md-12">
        <div class="main-card mb-3 card">
          <div class="card-header-tab card-header">
            <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
              <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
              Tablas Dinámicas Características Macroscópicas
            </div>
            <div class="btn-actions-pane-right actions-icon-btn">
              <img @click="mostrarTablasCaractMacro" :src="'/iconos/icons8-vista-general-3-35.png'" />
            </div>
          </div>
          <div class="card-body" v-if="tablasCaractMacro">
            <div class="container">
              <div class="row justify-content-md-center">
                <div class="col-md-10">
                  <tabla-texturas-actinomiceto
                    @cambiarVariable="cambiarVariable"
                    :refrescarTabla="refrescarTabla1"
                  />
                </div>
              </div>
              <div class="row justify-content-md-center">
                <div class="col-md-10">
                  <tabla-colors-actinomiceto
                    @cambiarVariable="cambiarVariable"
                    :refrescarTabla="refrescarTabla2"
                  />
                </div>
              </div>
              <div class="row justify-content-md-center">
                <div class="col-md-10">
                  <tabla-formas-macro-actinomiceto
                    @cambiarVariable="cambiarVariable"
                    :refrescarTabla="refrescarTabla3"
                  />
                </div>
              </div>
              <div class="row justify-content-md-center">
                <div class="col-md-10">
                  <tabla-superficies-actinomiceto
                    @cambiarVariable="cambiarVariable"
                    :refrescarTabla="refrescarTabla4"
                  />
                </div>
              </div>
              <div class="row justify-content-md-center">
                <div class="col-md-10">
                  <tabla-bordes-actinomiceto
                    @cambiarVariable="cambiarVariable"
                    :refrescarTabla="refrescarTabla5"
                  />
                </div>
              </div>
              <div class="row justify-content-md-center">
                <div class="col-md-10">
                  <tabla-pigmentos-actinomiceto
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
              <img @click="mostrarTablasCaractMicro" :src="'/iconos/icons8-vista-general-3-35.png'" />
            </div>
          </div>
          <div class="card-body" v-if="tablasCaractMicro">
            <div class="container">
              <div class="row justify-content-md-center">
                <div class="col-md-10">
                  <tabla-tincions-actinomiceto
                    @cambiarVariable="cambiarVariable"
                    :refrescarTabla="refrescarTabla7"
                  />
                </div>
              </div>
              <div class="row justify-content-md-center">
                <div class="col-md-10">
                  <tabla-formas-micro-actinomiceto
                    @cambiarVariable="cambiarVariable"
                    :refrescarTabla="refrescarTabla8"
                  />
                </div>
              </div>
              <div class="row justify-content-md-center">
                <div class="col-md-10">
                  <tabla-micelios-actinomiceto
                    @cambiarVariable="cambiarVariable"
                    :refrescarTabla="refrescarTabla9"
                  />
                </div>
              </div>
              <div class="row justify-content-md-center">
                <div class="col-md-10">
                  <tabla-conidioforos-actinomiceto
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
    <modales-otra-info-actinomicetos @accionModal-actinomiceto="accionModal" />
  </div>
</template>

<script>
export default {
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
    this.$emit("rutaHijo", window.location.pathname);
  },
  methods: {
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