<template>
  <div class="main-card mb-3 card">
    <div class="card-header-tab card-header">
      <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
        <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
        Tabla Dinámica Actividades
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
        <tabla-actividades @cambiarTipo="cambiarTipo"></tabla-actividades>
      </template>
      <template v-else>
        <form-actividades
          :idActividad="id"
          @cambiarTipo="cambiarTipo"
          @cambiarVariableFormulario="cambiarVariableFormulario"
        ></form-actividades>
      </template>
    </div>
  </div>
</template>

<script>
import websocketsMixin from "../../../../mixins/websockets";
import abrirCerrarFormulario from "../../../../mixins/abrirCerrarFormulario";
import vuex from "vuex";
export default {
  mixins: [
    websocketsMixin("Actividad", "actividades"),
    abrirCerrarFormulario("Actividad")
  ],
  methods: {
    cambiarTipo(tipo) {
      this.$emit("cambiarTipo", tipo);
    }
  },
  created() {
    this.$emit("rutaHijo", window.location.pathname);
  }
};
</script>
