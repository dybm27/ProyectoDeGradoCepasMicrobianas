<template>
  <div>
    <div class="custom-checkbox custom-control">
      <input
        type="checkbox"
        :id="rowData.id"
        v-model="checkPublicar"
        class="custom-control-input"
        @click="publicar(rowData)"
        :disabled="computedDisabled"
      />
      <label class="custom-control-label" :for="rowData.id"></label>
    </div>
  </div>
</template>

<script>
import websocketsCheckMixin from "../../../../mixins/websocketsCheck";
import Toastr from "../../../../mixins/toastr";
import vuex from "vuex";
export default {
  props: {
    rowData: {
      type: Object,
      required: true,
    },
    rowIndex: {
      type: Number,
    },
  },
  data() {
    return {
      checkPublicar: false,
      disabled: false,
    };
  },
  mixins: [websocketsCheckMixin("Noticia", "noticias"), Toastr],
  computed: {
    computedDisabled() {
      return this.disabled;
    },
  },
  methods: {
    publicar(data) {
      this.disabled = true;
      axios
        .put(`/publicidad/publicar/${data.id}`, {
          publicar: !this.checkPublicar,
          tipo: "noticia",
        })
        .then((res) => {
          if (res.request.responseURL === process.env.MIX_LOGIN) {
            localStorage.setItem(
              "mensajeLogin",
              "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
            );
            window.location.href = "/";
          } else {
            if (res.data.publicar) {
              this.toastr("Publicar", "Publicado con Exito!!");
            }
            this.disabled = false;
          }
        })
        .catch((error) => {
          this.disabled = false;
          if (error.response.status === 422) {
            this.checkPublicar = false;
            this.toastr("Error", error.response.data, "error");
          }
        });
    },
    verificarPublicar(e) {
      if (e == 0) {
        this.checkPublicar = false;
      } else {
        this.checkPublicar = true;
      }
    },
  },
  created() {
    this.verificarPublicar(this.rowData.publicar);
  },
};
</script>