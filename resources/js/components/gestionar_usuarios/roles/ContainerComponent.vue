<template>
  <div class="main-card mb-3 card">
    <div class="card-header-tab card-header">
      <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
        <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
        Tabla Dinámica Roles
      </div>
      <div class="btn-actions-pane-right actions-icon-btn">
        <template v-if="!formulario">
          <button
            @click="$modal.show('modal_agregar_rol')"
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
          :idRol="id"
          @cambiarTipo="cambiarTipo"
          @cambiarVariableFormulario="cambiarVariableFormulario"
        ></Form>
      </template>
    </div>
    <ModalesRoles />
  </div>
</template>

<script>
import websocketsSinCheckMixin from "../../../mixins/websocketsSinCheck";
import Tabla from "./TablaComponent.vue";
import Form from "./FormComponent.vue";
import ModalesRoles from "./ModalesComponent.vue";
import vuex from "vuex";
export default {
  components: { Form, Tabla, ModalesRoles },
  data() {
    return { formulario: false, id: 0 };
  },
  mixins: [websocketsSinCheckMixin("Rol", "roles")],
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
      window.Echo.private("desbloquearBtnsRol").whisper("desbloquearBtnsRol", {
        id: this.id,
      });
      this.$events.fire("eliminarMiBloqueoRol", {
        id: this.id,
      });
      this.id = 0;

      this.formulario = !this.formulario;
    },
    cambiarVariableFormulario() {
      this.formulario = !this.formulario;
    },
    cambiarTipo(tipo) {
      this.$emit("cambiarTipo", tipo);
    },
  },
  created() {
    this.$emit("rutaHijo", window.location.pathname);
    this.$events.$on("abrirFormularioRol", (e) => this.abrirFormulario(e));
  },
  beforeDestroy() {
    this.$events.$off("abrirFormularioRol");
  },
};
</script>
