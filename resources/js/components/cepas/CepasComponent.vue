<template>
  <div>
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-science icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Administrar Cepas Microbianas
            <div class="page-title-subheading opacity-10">
              <nav>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a>
                      <i class="fa fa-home"></i>
                    </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a>Cepas Microbianas</a>
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
      ruta: true,
      tipo: ""
    };
  },
  methods: {
    ...vuex.mapActions([
      "obtenerTiposCepas",
      "obtenerInfoCaractHongos",
      "obtenerInfoCaractBacterias",
      "obtenerInfoCaractLevaduras",
      "obtenerInfoCaractActinomicetos"
    ]),
    ocultarLink(ruta) {
      if (ruta != "/cepas") {
        this.ruta = false;
        if (ruta.includes("caract")) {
          this.tipo = "Características";
        } else if (ruta.includes("ver")) {
          this.tipo = "Ver Información";
        }
      } else {
        this.ruta = true;
        this.tipo = "";
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
    this.obtenerInfoCaractHongos();
    this.obtenerInfoCaractBacterias();
    this.obtenerInfoCaractLevaduras();
    this.obtenerTiposCepas();
  }
};
</script>