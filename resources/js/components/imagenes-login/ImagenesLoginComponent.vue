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
      <template v-if="numPestaña==1">
        <template v-if="!from">
          <vVerImagenes @editarImagen="editarImagen" />
        </template>
        <template v-else>
          <Form :idImagen="idImagen" @mostrarFrom="mostrarFrom" />
        </template>
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
  </div>
</template>

<script>
import vuex from "vuex";
import bloquearPestañasMixin from "../../mixins/bloquearPestañas";
import VerImagenes from "./VerImagenesComponent.vue";
import Form from "./FromImagenComponent.vue";
export default {
  components: { Form, VerImagenes },
  data() {
    return {
      idImagen: "",
      from: false
    };
  },
  mixins: [bloquearPestañasMixin("imagenesLogin")],
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
