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
    <router-view @rutaHijo="ruta" @cambiarTipo="cambiarTipo"></router-view>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
  data() {
    return { tipo: "", tipo2: "" };
  },
  methods: {
    ...vuex.mapActions("publicidad", [
      "obtenerPublicidad",
      "accionNoticia",
      "accionActividad",
      "accionNovedad"
    ]),
    ruta(ruta) {
      if (ruta.includes("noticias")) {
        this.tipo = "Tabla Noticias";
      } else if (ruta.includes("actividades")) {
        this.tipo = "Tabla Actividades";
      } else {
        this.tipo = "Tabla Novedades";
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
      axios.get("/editor/upload");
    }
  },
  computed: {
    ...vuex.mapGetters(["getUserAuth"])
  },
  created() {
    window.Echo.channel("novedad").listen("NovedadEvent", e => {
      this.accionNovedad({ tipo: e.tipo, data: e.novedad });
      this.$events.fire(
        e.novedad.id + "-actualizarPublicarNovedad",
        e.novedad.publicar
      );
      this.$events.fire("actualizartablaNovedad");
    });
    window.Echo.channel("actividad").listen("ActividadEvent", e => {
      this.accionActividad({ tipo: e.tipo, data: e.actividad });
      this.$events.fire(
        e.actividad.id + "-actualizarPublicarActividad",
        e.actividad.publicar
      );
      this.$events.fire("actualizartablaActividad");
    });
    window.Echo.channel("noticia").listen("NoticiaEvent", e => {
      this.accionNoticia({ tipo: e.tipo, data: e.noticia });
      this.$events.fire(
        e.noticia.id + "-actualizarPublicarNoticia",
        e.noticia.publicar
      );
      this.$events.fire("actualizartablaNoticia");
    });
    this.obtenerPublicidad();
    if (this.getUserAuth.tipouser_id === 1) {
      this.eliminarImagenesStorage();
    }
  }
};
</script>