<template>
  <div>
    <template v-if="getQuienesSomos">
      <div class="container">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <template v-if="!ocupado">
              <div class="row justify-content-center">
                <div class="col-md-12">
                  <h5 class="card-title">Visión</h5>
                  <Editor
                    @contenido="aceptarContenido"
                    @modificar="modificarContenido"
                    :info="getQuienesSomos.vision"
                  />
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-4 mt-3">
                  <button
                    class="btn btn-block btn-success"
                    :disabled="verificarBtn"
                    @click="cambiarVision"
                  >Cambiar</button>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <div
                    class="alert alert-success mt-4 text-center"
                    role="alert"
                  >{{user.name}} se encuentra editando la visión!</div>
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
import vuex from "vuex";
import websocketsSinTablaMixin from "../../../mixins/websocketsSinTabla";
import Toastr from "../../../mixins/toastr";
import Editor from "../../editor-texto/EditorTextoComponent.vue";
export default {
  components: { Editor },
  data() {
    return {
      parametros: {
        cuerpo: "",
        imagenesEditor: [],
        imagenesGuardadas: []
      }
    };
  },
  mixins: [websocketsSinTablaMixin("vision", "Vision"), Toastr],
  computed: {
    ...vuex.mapGetters("quienes_somos", ["getQuienesSomos"]),
    ...vuex.mapGetters(["getUserAuth"]),
    verificarBtn() {
      if (this.getQuienesSomos.vision) {
        if (this.parametros.cuerpo) {
          if (this.getQuienesSomos.vision.cuerpo === this.parametros.cuerpo) {
            return true;
          }
          return false;
        }
        return true;
      } else {
        return true;
      }
    }
  },
  created() {
    this.$emit("rutaHijo", window.location.pathname);
  },
  methods: {
    ...vuex.mapActions("quienes_somos", ["accionCambiarQuienesSomos"]),
    cambiarVision() {
      axios.put("/quienes-somos/vision/cambiar", this.parametros).then(res => {
        this.accionCambiarQuienesSomos({
          data: res.data,
          tipo: "vision"
        });
        this.toastr("Cambiar Visión", "Visión cambiada con exito", "success");
      });
    },
    aceptarContenido(data) {
      this.parametros.cuerpo = data.contenido;
      this.parametros.imagenesEditor = data.imagenesEditor;
      this.parametros.imagenesGuardadas = data.imagenesGuardadas;
    },
    modificarContenido(data) {
      this.parametros.cuerpo = "";
    }
  }
};
</script>