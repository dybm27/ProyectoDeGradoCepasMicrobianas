<template>
  <div>
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-paperclip icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Documentos
            <div class="page-title-subheading opacity-10">
              <nav>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a>
                      <i class="fa fa-home"></i>
                    </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a>{{tipo}}</a>
                  </li>
                  <template v-if="tipo2">
                    <li class="breadcrumb-item">
                      <a>{{tipo2}}</a>
                    </li>
                  </template>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div class="page-title-actions"></div>
      </div>
    </div>
    <template v-if="numPestaña==1">
      <Nav @rutaHijo="ruta" @cambiarTipo="cambiarTipo"></Nav>
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
import vuex from "vuex";
import bloquearPestañasMixin from "../../mixins/bloquearPestañas";
import Nav from "./documentos/NavComponent.vue";
export default {
  components: { Nav },
  data() {
    return { tipo: "", tipo2: "" };
  },
  mixins: [bloquearPestañasMixin("documento")],
  methods: {
    ...vuex.mapActions("documentos", [
      "obtenerDocumentos",
      "accionPublicacion",
      "accionProyecto"
    ]),
    ruta(ruta) {
      if (ruta.includes("proyecto")) {
        this.tipo = "Tabla Proyectos";
      } else {
        this.tipo = "Tabla Publicaciones";
      }
    },
    cambiarTipo(tipo) {
      if (tipo === "agregar") {
        this.tipo2 = "Agregar";
      } else if (tipo === "editar") {
        this.tipo2 = "Editar";
      } else {
        this.tipo2 = "";
      }
    }
  },
  created() {
    this.$emit("rutaSider", window.location.pathname);
    this.obtenerDocumentos();
    window.Echo.channel("publicacion").listen("PublicacionEvent", e => {
      this.accionPublicacion({ tipo: e.tipo, data: e.publicacion });
      this.$events.fire(
        e.publicacion.id + "-actualizarPublicarPublicacion",
        e.publicacion.publicar
      );
      this.$events.fire("actualizartablaPublicacion");
    });
    window.Echo.channel("proyecto").listen("ProyectoEvent", e => {
      this.accionProyecto({ tipo: e.tipo, data: e.proyecto });
      this.$events.fire(
        e.proyecto.id + "-actualizarPublicarProyecto",
        e.proyecto.publicar
      );
      this.$events.fire("actualizartablaProyecto");
    });
  }
};
</script>
