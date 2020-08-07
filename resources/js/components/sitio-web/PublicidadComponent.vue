<template>
  <div>
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-news-paper icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Publicidad
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
import Nav from "./publicidad/NavComponent.vue";
export default {
  components: { Nav },
  data() {
    return { tipo: "", tipo2: "" };
  },
  mixins: [bloquearPestañasMixin("publicidad")],
  methods: {
    ...vuex.mapActions("publicidad", [
      "obtenerPublicidad",
      "accionNoticia",
      "accionActividad",
      "accionNovedad",
    ]),
    ruta(ruta) {
      if (ruta.includes("novedades")) {
        this.tipo = "Tabla Novedades";
      } else if (ruta.includes("actividades")) {
        this.tipo = "Tabla Actividades";
      } else {
        this.tipo = "Tabla Noticias";
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
    },
    eliminarImagenesStorage() {
      axios.get("/editor/upload").then((res) => {
        if (res.request.responseURL === process.env.MIX_LOGIN) {
          localStorage.setItem(
            "mensajeLogin",
            "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
          );
          window.location.href = "/";
        }
      });
    },
  },
  computed: {
    ...vuex.mapState(["auth"]),
  },
  created() {
    this.$emit("rutaSider", window.location.pathname);
    window.Echo.channel("novedad").listen("NovedadEvent", (e) => {
      this.accionNovedad({ tipo: e.tipo, data: e.novedad });
      this.$events.fire(
        e.novedad.id + "-actualizarPublicarNovedad",
        e.novedad.publicar
      );
      this.$events.fire("actualizartablaNovedad");
    });
    window.Echo.channel("actividad").listen("ActividadEvent", (e) => {
      this.accionActividad({ tipo: e.tipo, data: e.actividad });
      this.$events.fire(
        e.actividad.id + "-actualizarPublicarActividad",
        e.actividad.publicar
      );
      this.$events.fire("actualizartablaActividad");
    });
    window.Echo.channel("noticia").listen("NoticiaEvent", (e) => {
      this.accionNoticia({ tipo: e.tipo, data: e.noticia });
      this.$events.fire(
        e.noticia.id + "-actualizarPublicarNoticia",
        e.noticia.publicar
      );
      this.$events.fire("actualizartablaNoticia");
    });
    this.obtenerPublicidad();
    if (this.auth.tipouser_id === 1) {
      this.eliminarImagenesStorage();
    }
  },
};
</script>