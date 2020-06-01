<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-md-12">
        <div class="main-card mb-3 card">
          <div class="card-header-tab card-header">
            <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
              <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
              Tablas Dinamicas Características Macroscópicas
            </div>
            <div class="btn-actions-pane-right actions-icon-btn">
              <button
                class="mb-2 mr-2 btn-icon btn-pill btn btn-link"
                @click="mostrarTablasCaractMacro"
              >
                <i class="lnr-menu btn-icon-wrapper"></i>
              </button>
            </div>
          </div>
          <div class="card-body" v-if="tablasCaractMacro">
            <div class="container">
              <div class="row justify-content-md-center">
                <div class="col-md-10">
                  <tabla-colors-hongo
                    @cambiarVariable="cambiarVariable"
                    :refrescarTabla="refrescarTabla1"
                  />
                </div>
              </div>
              <div class="row justify-content-md-center">
                <div class="col-md-10">
                  <tabla-texturas-hongo
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
              <button
                class="mb-2 mr-2 btn-icon btn-pill btn btn-link"
                @click="mostrarTablasCaractMicro"
              >
                <i class="lnr-menu btn-icon-wrapper"></i>
              </button>
            </div>
          </div>
          <div class="card-body" v-if="tablasCaractMicro">
            <div class="container">
              <div class="row justify-content-md-center">
                <div class="col-md-10">
                  <tabla-conidioforos-hongo
                    @cambiarVariable="cambiarVariable"
                    :refrescarTabla="refrescarTabla3"
                  />
                </div>
              </div>
              <div class="row justify-content-md-center">
                <div class="col-md-10">
                  <tabla-esporas-asexual-hongo
                    @cambiarVariable="cambiarVariable"
                    :refrescarTabla="refrescarTabla4"
                  />
                </div>
              </div>
              <div class="row justify-content-md-center">
                <div class="col-md-10">
                  <tabla-esporas-sexual-hongo
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
              <button
                class="mb-2 mr-2 btn-icon btn-pill btn btn-link"
                @click="mostrarTablasMetodos"
              >
                <i class="lnr-menu btn-icon-wrapper"></i>
              </button>
            </div>
          </div>
          <div class="card-body" v-if="tablasMetodos">
            <div class="container">
              <div class="row justify-content-md-center">
                <div class="col-md-10">
                  <tabla-tipos-metodos-hongo
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
    <modales-otra-info-hongos @accionModal-hongo="accionModal" />
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
      tablasCaractMacro: false,
      tablasCaractMicro: false,
      tablasMetodos: false
    };
  },
  created() {
    this.$emit("rutaHijo", window.location.pathname);
  },
  methods: {
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