<template>
  <div>
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-diskette icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Administrar Otra Información
            <div class="page-title-subheading opacity-10">
              <nav>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a>
                      <i class="fa fa-home"></i>
                    </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a>Otra Información</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a>{{tipo}}</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div class="page-title-actions"></div>
      </div>
    </div>
    <template v-if="numPestaña==1">
      <router-view @rutaHijo="cambiarTipo"></router-view>
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
import bloquearPestañasMixin from "../../mixins/bloquearPestañas";
import vuex from "vuex";
export default {
  data() {
    return { tipo: "" };
  },
  mixins: [bloquearPestañasMixin("otraInfo")],
  methods: {
    ...vuex.mapActions("info_cepas", ["obtenerTiposCepas"]),
    ...vuex.mapActions("info_caract", [
      "obtenerInfoCaractHongos",
      "obtenerInfoCaractBacterias",
      "obtenerInfoCaractLevaduras",
      "obtenerInfoCaractActinomicetos"
    ]),
    cambiarTipo(ruta) {
      if (ruta.includes("cepas")) {
        this.tipo = "Cepas";
      } else if (ruta.includes("bacterias")) {
        this.tipo = "Bacterias";
      } else if (ruta.includes("hongos")) {
        this.tipo = "Hongos";
      } else if (ruta.includes("levaduras")) {
        this.tipo = "Levaduras";
      } else {
        this.tipo = "Actinomicetos";
      }
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
