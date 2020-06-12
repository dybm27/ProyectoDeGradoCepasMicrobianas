<template>
  <div>
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-notebook icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Quienes Somos
            <div class="page-title-subheading opacity-10">
              <nav>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a>
                      <i class="fa fa-home"></i>
                    </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a>Inicio</a>
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
    <router-view @rutaHijo="cambiarTipo"></router-view>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
  data() {
    return { tipo: "" };
  },
  methods: {
    ...vuex.mapActions("quienes_somos", ["obtenerQuienesSomos"]),
    cambiarTipo(ruta) {
      if (ruta.includes("mision")) {
        this.tipo = "Misión";
      } else if (ruta.includes("vision")) {
        this.tipo = "Visión";
      } else {
        this.tipo = "Objetivos";
      }
    }
  },
  created() {
    this.obtenerQuienesSomos();
  }
};
</script>
