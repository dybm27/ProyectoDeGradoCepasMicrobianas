<template>
  <div>
    <template v-if="getQuienesSomos">
      <div class="container">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <div class="row justify-content-center">
              <div class="col-md-12">
                <h5 class="card-title">Visión</h5>
                <editor-texto
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
export default {
  data() {
    return {
      parametros: {
        cuerpo: "",
        imagenesEditor: [],
        imagenesGuardadas: []
      }
    };
  },
  computed: {
    ...vuex.mapGetters("quienes_somos", ["getQuienesSomos"]),
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
    toastr(titulo, msg, tipo) {
      this.$toastr.Add({
        title: titulo,
        msg: msg,
        position: "toast-top-right",
        type: tipo,
        timeout: 5000,
        progressbar: true,
        //progressBarValue:"", // if you want set progressbar value
        style: {},
        classNames: ["animated", "zoomInUp"],
        closeOnHover: true,
        clickClose: true,
        onCreated: () => {},
        onClicked: () => {},
        onClosed: () => {},
        onMouseOver: () => {},
        onMouseOut: () => {}
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