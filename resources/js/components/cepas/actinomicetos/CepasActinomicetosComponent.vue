<template>
  <div>
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-science icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Administrar Cepas Microbianas {{tituloCepa}}
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
                  <template v-show="tipoAccion">
                    <li class="breadcrumb-item">
                      <a>{{tipoAccion}}</a>
                    </li>
                  </template>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div class="page-title-actions">
          <template v-if="numPestaña==1&&mostrarBtnVolver">
            <button
              class="btn-wide mb-2 mr-2 btn-hover-shine btn btn-danger btn-lg"
              @click="volverTabla"
              :disabled="bloquearBtnVolver"
            >Volver</button>
          </template>
        </div>
      </div>
    </div>
    <template v-if="numPestaña==1">
      <router-view
        :tipoG="4"
        :tipo="'actinomiceto'"
        :detailRowComponent="'my-detail-row-h-l-a'"
        :titulo="'ACTINOMICETOS'"
        @cambiarTipo="cambiarTipo"
        :tituloCepa="tituloCepa"
        :FieldDefs="fields"
      />
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
import bloquearPestañasMixin from "../../../mixins/bloquearPestañas";
import FieldDefs from "./tablas/columnas-cepas-actinomicetos";
import vuex from "vuex";
export default {
  data() {
    return {
      tituloCepa: "",
      tipoAccion: "",
      mostrarBtnVolver: false,
      fields: FieldDefs,
      bloquearBtnVolver: false,
    };
  },
  mixins: [bloquearPestañasMixin("cepas")],
  methods: {
    ...vuex.mapActions("cepas", ["obtenerCepas", "accionCepas"]),
    ...vuex.mapActions("info_cepas", [
      "obtenerTiposCepas",
      "accionAgregarTipoCepa",
      "accionEditarTipoCepa",
      "accionEliminarTipoCepa",
    ]),
    ...vuex.mapActions("info_caract", [
      "obtenerInfoCaractActinomicetos",
      "accionAgregarTipoCaractActinomiceto",
      "accionEditarTipoCaractActinomiceto",
      "accionEliminarTipoCaractActinomiceto",
    ]),
    cambiarTipo(tipo) {
      if (tipo === "ver") {
        this.mostrarBtnVolver = true;
        this.tipoAccion = "Ver información";
      } else if (tipo === "caract") {
        this.mostrarBtnVolver = true;
        this.tipoAccion = "Modificar Características";
      } else if (tipo === "agregar") {
        this.mostrarBtnVolver = false;
        this.tipoAccion = "Agregar";
      } else if (tipo === "editar") {
        this.mostrarBtnVolver = false;
        this.tipoAccion = "Editar";
      } else {
        this.mostrarBtnVolver = false;
        this.tipoAccion = "tabla";
      }
    },
    volverTabla() {
      window.Echo.private("desbloquearBtnsCepa").whisper(
        "desbloquearBtnsCepa",
        {
          id: this.$route.params.cepaActinomicetoId,
        }
      );
      this.$events.fire("eliminarMiBloqueoCepa", {
        id: this.$route.params.cepaActinomicetoId,
      });
      this.$router.push({ name: "actinomicetos" });
    },
  },
  created() {
    this.tituloCepa = "- Actinomicetos";
    this.$emit("rutaSider", this.$route.path);
    this.obtenerCepas();
    this.obtenerTiposCepas();
    this.obtenerInfoCaractActinomicetos();
    window.Echo.channel("cepas").listen("CepasEvent", (e) => {
      this.accionCepas({ tipo: e.tipoAccion, data: e.data });
      this.$events.fire(e.data.id + "-actualizarPublicarCepa", e.data.publicar);
      this.$events.fire("actualizartablaCepa");
    });
    window.Echo.channel("cepas-info").listen("CepasInfoEvent", (e) => {
      switch (e.tipoAccion) {
        case "agregar":
          this.accionAgregarTipoCepa({
            info: e.data,
            tipo: e.tipoCaract,
          });
          break;
        case "editar":
          this.accionEditarTipoCepa({
            info: e.data,
            tipo: e.tipoCaract,
          });
          break;
        case "eliminar":
          this.accionEliminarTipoCepa({
            info: e.data,
            tipo: e.tipoCaract,
          });
          break;
      }
    });
    window.Echo.channel("actinomicetos-info").listen(
      "ActinomicetosInfoEvent",
      (e) => {
        switch (e.tipoAccion) {
          case "agregar":
            this.accionAgregarTipoCaractActinomiceto({
              info: e.data,
              tipo: e.tipoCaract,
            });
            break;
          case "editar":
            this.accionEditarTipoCaractActinomiceto({
              info: e.data,
              tipo: e.tipoCaract,
            });
            break;
          case "eliminar":
            this.accionEliminarTipoCaractActinomiceto({
              info: e.data,
              tipo: e.tipoCaract,
            });
            break;
        }
      }
    );
  },
  mounted() {
    this.$events.$on("bloquearBtnVolver", (e) => {
      this.bloquearBtnVolver = !this.bloquearBtnVolver;
    });
  },
  destroyed() {
    this.$events.$off("bloquearBtnVolver");
  },
};
</script>