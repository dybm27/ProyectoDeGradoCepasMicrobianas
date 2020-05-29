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
    <router-view @rutaHijo="cambiarTipo"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return { tipo: "" };
  },
  methods: {
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
  }
};
</script>
