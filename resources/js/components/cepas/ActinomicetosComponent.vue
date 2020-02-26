<template>
  <div>
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-car icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Administrar Cepas - Actinomicetos
            <div class="page-title-subheading">cepas microbianas de la UFPS.</div>
          </div>
        </div>
        <div class="page-title-actions">
          <router-link
            v-if="ruta"
            class="btn-wide mb-2 mr-2 btn-hover-shine btn btn-primary btn-lg"
            to="/cepas-actinomicetos/form-agregar"
          >Agregar Nueva Cepa</router-link>
        </div>
      </div>
    </div>
    <router-view :tipoG="4" @rutaHijo="ocultarLink" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruta: true
    };
  },
  methods: {
    ocultarLink(ruta) {
      if (ruta == "/cepas-actinomicetos/form-agregar") {
        this.ruta = false;
      } else {
        this.ruta = true;
      }
    }
  },
  created() {}
};
</script>

<style scoped>
</style>