<template>
  <div>
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-photo icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Imagenes Login
            <div class="page-title-subheading opacity-10">
              <nav>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a>
                      <i class="fa fa-home"></i>
                    </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a>Imagenes</a>
                  </li>

                  <li class="breadcrumb-item">
                    <template v-if="from">
                      <a>Editar</a>
                    </template>
                    <template v-else>
                      <a>Ver</a>
                    </template>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div class="page-title-actions">
          <template v-if="from">
            <button
              class="btn-wide mb-2 mr-2 btn-hover-shine btn btn-danger btn-lg"
              @click="mostrarFrom"
            >Volver</button>
          </template>
        </div>
      </div>
    </div>
    <div class="tabs-animation">
      <template v-if="!from">
        <ver-imagenes @editarImagen="editarImagen" />
      </template>
      <template v-else>
        <from-imagen :idImagen="idImagen" @mostrarFrom="mostrarFrom" />
      </template>
    </div>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
  data() {
    return {
      idImagen: "",
      from: false
    };
  },
  methods: {
    ...vuex.mapActions("imagenes_login", [
      "obtenerImagenesLogin",
      "accionImagenLogin"
    ]),
    editarImagen(id) {
      this.idImagen = id;
      this.from = !this.from;
    },
    mostrarFrom() {
      this.from = !this.from;
    }
  },
  created() {
    this.obtenerImagenesLogin();
    window.Echo.channel("imagenesLogin").listen("ImagenesLoginEvent", e => {
      this.accionImagenLogin({ tipo: "editar", data: e.imagen });
    });
  }
};
</script>
