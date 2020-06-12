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
              <img @click="mostrarTablasCaractMacro" :src="'/iconos/icons8-vista-general-3-35.png'" />
            </div>
          </div>
          <div class="card-body" v-if="tablasCaractMacro">
            <div class="container">
              <div class="row justify-content-md-center">
                <div class="col-md-10">
                  <tabla-colors-levadura
                    @cambiarVariable="cambiarVariable"
                    :refrescarTabla="refrescarTabla1"
                  />
                </div>
              </div>
              <div class="row justify-content-md-center">
                <div class="col-md-10">
                  <tabla-texturas-levadura
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
                  <tabla-tipos-metodos-levadura
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
    <modales-otra-info-levaduras @accionModal-levadura="accionModal" />
  </div>
</template>

<script>
export default {
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