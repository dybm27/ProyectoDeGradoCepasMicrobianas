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
      <Nav @rutaHijo="cambiarTipo"></Nav>
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
import Nav from "./NavOtraInfoComponent.vue";
import vuex from "vuex";
export default {
  components: { Nav },
  data() {
    return { tipo: "" };
  },
  mixins: [bloquearPestañasMixin("otraInfo")],
  methods: {
    ...vuex.mapActions("info_cepas", [
      "accionAgregarTipoCepa",
      "accionEditarTipoCepa",
      "accionEliminarTipoCepa"
    ]),
    ...vuex.mapActions("info_caract", [
      "accionAgregarTipoCaractBacteria",
      "accionEditarTipoCaractBacteria",
      "accionEliminarTipoCaractBacteria",
      "accionAgregarTipoCaractLevadura",
      "accionEditarTipoCaractLevadura",
      "accionEliminarTipoCaractLevadura",
      "accionAgregarTipoCaractHongo",
      "accionEditarTipoCaractHongo",
      "accionEliminarTipoCaractHongo",
      "accionAgregarTipoCaractActinomiceto",
      "accionEditarTipoCaractActinomiceto",
      "accionEliminarTipoCaractActinomiceto"
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
    this.$emit("rutaSider", "otra-info");
    window.Echo.channel("cepas-info").listen("CepasInfoEvent", e => {
      switch (e.tipoAccion) {
        case "agregar":
          this.accionAgregarTipoCepa({
            info: e.data,
            tipo: e.tipoCaract
          });
          break;
        case "editar":
          this.accionEditarTipoCepa({
            info: e.data,
            tipo: e.tipoCaract
          });
          break;
        case "eliminar":
          this.accionEliminarTipoCepa({
            info: e.data,
            tipo: e.tipoCaract
          });
          break;
      }
      this.$events.fire("actualizartabla" + e.tipoCaract);
    });
    window.Echo.channel("bacterias-info").listen("BacteriasInfoEvent", e => {
      switch (e.tipoAccion) {
        case "agregar":
          this.accionAgregarTipoCaractBacteria({
            info: e.data,
            tipo: e.tipoCaract
          });
          break;
        case "editar":
          this.accionEditarTipoCaractBacteria({
            info: e.data,
            tipo: e.tipoCaract
          });
          break;
        case "eliminar":
          this.accionEliminarTipoCaractBacteria({
            info: e.data,
            tipo: e.tipoCaract
          });
          break;
      }
      this.$events.fire("actualizartabla" + e.tipoCaract);
    });
    window.Echo.channel("hongos-info").listen("HongosInfoEvent", e => {
      switch (e.tipoAccion) {
        case "agregar":
          this.accionAgregarTipoCaractHongo({
            info: e.data,
            tipo: e.tipoCaract
          });
          break;
        case "editar":
          this.accionEditarTipoCaractHongo({
            info: e.data,
            tipo: e.tipoCaract
          });
          break;
        case "eliminar":
          this.accionEliminarTipoCaractHongo({
            info: e.data,
            tipo: e.tipoCaract
          });
          break;
      }
      this.$events.fire("actualizartabla" + e.tipoCaract);
    });
    window.Echo.channel("levaduras-info").listen("LevadurasInfoEvent", e => {
      switch (e.tipoAccion) {
        case "agregar":
          this.accionAgregarTipoCaractLevadura({
            info: e.data,
            tipo: e.tipoCaract
          });
          break;
        case "editar":
          this.accionEditarTipoCaractLevadura({
            info: e.data,
            tipo: e.tipoCaract
          });
          break;
        case "eliminar":
          this.accionEliminarTipoCaractLevadura({
            info: e.data,
            tipo: e.tipoCaract
          });
          break;
      }
      this.$events.fire("actualizartabla" + e.tipoCaract);
    });
    window.Echo.channel("actinomicetos-info").listen(
      "ActinomicetosInfoEvent",
      e => {
        switch (e.tipoAccion) {
          case "agregar":
            this.accionAgregarTipoCaractActinomiceto({
              info: e.data,
              tipo: e.tipoCaract
            });
            break;
          case "editar":
            this.accionEditarTipoCaractActinomiceto({
              info: e.data,
              tipo: e.tipoCaract
            });
            break;
          case "eliminar":
            this.accionEliminarTipoCaractActinomiceto({
              info: e.data,
              tipo: e.tipoCaract
            });
            break;
        }
        this.$events.fire("actualizartabla" + e.tipoCaract);
      }
    );
  }
};
</script>
