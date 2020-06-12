<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-9">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Misión</h5>
            <textarea
              name="texto"
              id="texto"
              class="form-control"
              v-model="texto"
              style="height: 150px;"
            ></textarea>
            <div class="row mt-3 justify-content-center">
              <button
                class="btn btn-success"
                :disabled="verificarBtn"
                @click="cambiarMision"
              >Cambiar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
  data() {
    return {
      texto: ""
    };
  },
  computed: {
    ...vuex.mapGetters("quienes_somos", ["getQuienesSomos"]),
    verificarBtn() {
      if (this.texto) {
        if (this.texto === this.getQuienesSomos.mision.texto) {
          return true;
        }
        return false;
      } else {
        return true;
      }
    }
  },
  created() {
    this.$emit("rutaHijo", window.location.pathname);
  },
  watch: {
    getQuienesSomos() {
      if (this.getQuienesSomos) {
        this.texto = this.getQuienesSomos.mision.texto;
      }
    }
  },
  mounted() {
    if (this.getQuienesSomos) {
      this.texto = this.getQuienesSomos.mision.texto;
    }
  },
  methods: {
    ...vuex.mapActions("quienes_somos", ["accionCambiarQuienesSomos"]),
    cambiarMision() {
      axios
        .put("/quienes-somos/mision/cambiar", { texto: this.texto })
        .then(res => {
          this.accionCambiarQuienesSomos({
            data: res.data,
            tipo: "mision"
          });
          this.toastr("Cambiar Misión", "Misión cambiada con exito", "success");
        })
        .catch(error => {
          if (error.response) {
          }
          this.toastr("Error!!!!", "", "error");
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
    }
  }
};
</script>