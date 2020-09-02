<template>
  <div>
    <template v-if="quienes_somos">
      <div class="container">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <template v-if="!ocupado">
              <div class="row justify-content-center">
                <div class="col-md-12">
                  <h5 class="card-title">Misión</h5>
                  <Editor
                    @contenido="aceptarContenido"
                    @modificar="modificarContenido"
                    :info="quienes_somos.mision"
                  />
                </div>
              </div>
              <div class="row justify-content-center" v-if="!verificarBtn">
                <div class="col-md-4 mt-3">
                  <button class="btn btn-block btn-success" @click="cambiarMision">Guardar Cambios</button>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <div
                    class="alert alert-success mt-4 text-center"
                    role="alert"
                  >{{user.name}} se encuentra editando la misión!</div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center mt-5">
            <div class="loader">
              <div class="ball-spin-fade-loader">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <hr />
        </div>
        <div class="row">
          <hr />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import websocketsSinTablaMixin from "../../../mixins/websocketsSinTabla";
import Toastr from "../../../mixins/toastr";
import vuex from "vuex";
import Editor from "../../editor-texto/EditorTextoComponent.vue";
export default {
  components: { Editor },
  data() {
    return {
      parametros: {
        cuerpo: "",
        imagenesEditor: [],
        imagenesGuardadas: [],
      },
    };
  },
  mixins: [websocketsSinTablaMixin("mision", "Mision"), Toastr],
  computed: {
    ...vuex.mapState("quienes_somos", ["quienes_somos"]),
    ...vuex.mapState(["auth"]),
    verificarBtn() {
      if (this.quienes_somos.mision) {
        if (this.parametros.cuerpo) {
          if (this.quienes_somos.mision.cuerpo === this.parametros.cuerpo) {
            return true;
          }
          return false;
        }
        return true;
      } else {
        return true;
      }
    },
  },
  created() {
    this.$emit("rutaHijo", window.location.pathname);
  },
  methods: {
    ...vuex.mapActions("quienes_somos", ["accionCambiarQuienesSomos"]),
    cambiarMision() {
      axios
        .put("/quienes-somos/mision/cambiar", this.parametros)
        .then((res) => {
          this.accionCambiarQuienesSomos({
            data: res.data,
            tipo: "mision",
          });
          this.toastr("Cambiar Misión", "Misión cambiada con exito", "success");
        })
        .catch((error) => {
          if (error.response.status === 403) {
            this.$router.push("/sin-acceso");
          } else if (
            error.response.status === 405 ||
            error.response.status === 401
          ) {
            window.location.href = "/";
          }
        });
    },
    aceptarContenido(data) {
      this.parametros.cuerpo = data.contenido;
      this.parametros.imagenesEditor = data.imagenesEditor;
      this.parametros.imagenesGuardadas = data.imagenesGuardadas;
    },
    modificarContenido(data) {
      this.parametros.cuerpo = "";
    },
  },
};
</script>