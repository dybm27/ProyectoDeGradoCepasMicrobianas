<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-md-10">
        <tabla-generos @cambiarVariable="cambiarVariable" :refrescarTabla="refrescarTabla1" />
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-md-10">
        <tabla-especies @cambiarVariable="cambiarVariable" :refrescarTabla="refrescarTabla2" />
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-md-10">
        <tabla-ordens @cambiarVariable="cambiarVariable" :refrescarTabla="refrescarTabla3" />
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-md-10">
        <tabla-clases @cambiarVariable="cambiarVariable" :refrescarTabla="refrescarTabla4" />
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-md-10">
        <tabla-phylums @cambiarVariable="cambiarVariable" :refrescarTabla="refrescarTabla5" />
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-md-10">
        <tabla-divisions @cambiarVariable="cambiarVariable" :refrescarTabla="refrescarTabla6" />
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-md-10">
        <tabla-reinos @cambiarVariable="cambiarVariable" :refrescarTabla="refrescarTabla7" />
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-md-10">
        <tabla-familias @cambiarVariable="cambiarVariable" :refrescarTabla="refrescarTabla8" />
      </div>
    </div>
    <modales-otra-info-cepas @accionModal="accionModal" />
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
      refrescarTabla8: false
    };
  },
  created() {
    this.$emit("rutaHijo", window.location.pathname);
  },
  methods: {
    accionModal(datos) {
      switch (datos.tipo) {
        case "genero":
          this.refrescarTabla1 = true;
          break;
        case "especie":
          this.refrescarTabla2 = true;
          break;
        case "familia":
          this.refrescarTabla8 = true;
          break;
        case "orden":
          this.refrescarTabla3 = true;
          break;
        case "clase":
          this.refrescarTabla4 = true;
          break;
        case "phylum":
          this.refrescarTabla5 = true;
          break;
        case "reino":
          this.refrescarTabla7 = true;
          break;
        case "division":
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
      this.refrescarTabla7 = false;
      this.refrescarTabla8 = false;
    }
  }
};
</script>