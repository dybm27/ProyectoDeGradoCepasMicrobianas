<template>
  <div>
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-science icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Administrar Cepas - Bacterias
            <div class="page-title-subheading opacity-10">
              <nav>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a>
                      <i class="fa fa-home"></i>
                    </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a>Bacterias</a>
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
          <template v-if="numPestaña==1">
            <router-link
              v-if="ocultar"
              class="btn-wide mb-2 mr-2 btn-hover-shine btn btn-success btn-lg"
              :to="{name: 'cepa-bacteria-agregar'}"
            >Agregar Nueva Cepa - Bacteria</router-link>
            <router-link
              v-else
              class="btn-wide mb-2 mr-2 btn-hover-shine btn btn-danger btn-lg"
              :to="{name: 'bacterias-tabla'}"
            >Volver</router-link>
          </template>
        </div>
      </div>
    </div>
    <template v-if="numPestaña==1">
      <div class="tabs-animation">
        <router-view :tipoG="1" @rutaHijo="ocultarLink" />
      </div>
    </template>
    <template v-else>
      <div class="container">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <div class="row justify-content-center">
              <div class="col-md-8">
                <div
                  class="alert alert-danger mt-4 text-center"
                  role="alert"
                >Ya has ingresado desde otra pestaña del navegador!!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import bloquearPestañasMixin from "../../../mixins/bloquearPestañas";
import vuex from "vuex";

export default {
  data() {
    return {
      ruta: true,
      tipo: ""
    };
  },
  mixins: [bloquearPestañasMixin("cepasBacterias")],
  methods: {
    ...vuex.mapActions("info_cepas", ["obtenerTiposCepas"]),
    ...vuex.mapActions("info_caract", ["obtenerInfoCaractBacterias"]),
    ocultarLink(ruta) {
      if (ruta != "/bacterias/" && ruta != "/bacterias") {
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
    this.$emit("rutaSider", window.location.pathname);
    this.obtenerInfoCaractBacterias();
    this.obtenerTiposCepas();
  }
};
</script>

<style scoped>
</style>