<template>
  <div>
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-car icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Administrar Cepas
            <div class="page-title-subheading">cepas microbianas de la UFPS.</div>
          </div>
        </div>
        <div class="page-title-actions">
          <router-link
            v-if="ocultar"
            class="btn-wide mb-2 mr-2 btn-hover-shine btn btn-primary btn-lg"
            to="/cepas/agregar"
          >Agregar Nueva Cepa</router-link>
          <router-link
            v-else
            class="btn-wide mb-2 mr-2 btn-hover-shine btn btn-primary btn-lg"
            to="/cepas"
          >Volver</router-link>
        </div>
      </div>
    </div>
    <router-view :tipoG="0" @rutaHijo="ocultarLink" />
  </div>
</template>

<script>
import vuex from "vuex";
export default {
  data() {
    return {
      ruta: true
    };
  },
  methods: {
    ...vuex.mapActions(["obtenerTipos"]),
    ocultarLink(ruta) {
      if (ruta != "/cepas") {
        this.ruta = false;
      } else {
        this.ruta = true;
      }
    }
  },
  computed: {
    ocultar() {
      return this.ruta;
    }
  },
  created() {
    this.obtenerTipos();
  }
};
</script>
