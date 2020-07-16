<template>
  <div class="main-card mb-3 card">
    <div class="card-header-tab card-header">
      <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
        <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
        Tabla Dinámica Usuarios
      </div>
      <div class="btn-actions-pane-right actions-icon-btn">
        <template v-if="!formulario">
          <button
            @click="abrirFormulario(0)"
            class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm"
          >Agregar</button>
        </template>
        <template v-else>
          <button
            @click="cerrarFormulario"
            class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm"
          >Cancelar</button>
        </template>
      </div>
    </div>
    <div class="card-body">
      <template v-if="!formulario">
        <Tabla @cambiarTipo="cambiarTipo"></Tabla>
      </template>
      <template v-else>
        <Form
          :idUsuario="id"
          @cambiarTipo="cambiarTipo"
          @cambiarVariableFormulario="cambiarVariableFormulario"
        ></Form>
      </template>
    </div>
  </div>
</template>

<script>
import websocketsSinCheckMixin from "../../../mixins/websocketsSinCheck";
import Tabla from "./TablaComponent";
import Form from "./FormComponent";
import vuex from "vuex";
export default {
  components: { Form, Tabla },
  data() {
    return { formulario: false, id: 0 };
  },
  mixins: [websocketsSinCheckMixin("Usuario", "usuarios")],
  methods: {
    abrirFormulario(id) {
      if (id != 0) {
        this.id = id;
      } else {
        this.id = 0;
      }
      this.formulario = !this.formulario;
    },
    cerrarFormulario() {
      window.Echo.private(
        "desbloquearBtnsUsuario"
      ).whisper("desbloquearBtnsUsuario", { id: this.id });
      this.$events.fire("spliceMisBloqueosUsuario", {
        id: this.id
      });
      this.id = 0;

      this.formulario = !this.formulario;
    },
    cambiarVariableFormulario() {
      this.formulario = !this.formulario;
    },
    cambiarTipo(tipo) {
      this.$emit("cambiarTipo", tipo);
    }
  },
  created() {
    this.$emit("rutaHijo", window.location.pathname);
    this.$events.$on("abrirFormularioUsuario", e => this.abrirFormulario(e));
  },
  beforeDestroy() {
    this.$events.$off("abrirFormularioUsuario");
  }
};
</script>
