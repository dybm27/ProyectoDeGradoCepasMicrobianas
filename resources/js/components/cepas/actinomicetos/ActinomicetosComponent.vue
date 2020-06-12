<template>
  <div>
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-science icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Administrar Cepas - Actinomicetos
            <div class="page-title-subheading opacity-10">
              <nav>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a>
                      <i class="fa fa-home"></i>
                    </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a>Actinomicetos</a>
                  </li>
                  <template v-show="tipo">
                    <li class="breadcrumb-item">
                      <a>{{tipo}}</a>
                    </li>
                  </template>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div class="page-title-actions">
          <router-link
            v-if="ocultar"
            class="btn-wide mb-2 mr-2 btn-hover-shine btn btn-success btn-lg"
            :to="{name: 'cepa-actinomiceto-agregar'}"
          >Agregar Nueva Cepa - Actinomiceto</router-link>
          <router-link
            v-else
            class="btn-wide mb-2 mr-2 btn-hover-shine btn btn-success btn-lg"
            :to="{name: 'cepas-actinomicetos'}"
          >Volver</router-link>
        </div>
      </div>
    </div>
    <router-view :tipoG="4" @rutaHijo="ocultarLink" />
  </div>
</template>

<script>
import vuex from "vuex";

export default {
  data() {
    return {
      ruta: true,
      tipo: ""
    };
  },
  methods: {
    ...vuex.mapActions("info_cepas", ["obtenerTiposCepas"]),
    ...vuex.mapActions("info_caract", ["obtenerInfoCaractActinomicetos"]),
    ocultarLink(ruta) {
      if (ruta != "/actinomicetos/tabla") {
        this.ruta = false;
        if (
          ruta.includes("caract") ||
          ruta.includes("identi") ||
          ruta.includes("metodo")
        ) {
          this.tipo = "Características";
        } else if (ruta.includes("ver")) {
          this.tipo = "Ver Información";
        } else if (ruta.includes("agregar")) {
          this.tipo = "Agregar";
        } else {
          this.tipo = "Editar";
        }
      } else {
        this.ruta = true;
        this.tipo = "Tabla";
      }
    }
  },
  computed: {
    ocultar() {
      return this.ruta;
    }
  },
  created() {
    this.obtenerInfoCaractActinomicetos();
    this.obtenerTiposCepas();
  }
};
</script>

<style scoped>
</style>