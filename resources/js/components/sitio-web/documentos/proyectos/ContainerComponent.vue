<template>
  <div class="main-card mb-3 card">
    <div class="card-header-tab card-header">
      <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
        <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
        Tabla Dinámica Proyectos
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
        <tabla-proyectos @cambiarTipo="cambiarTipo"></tabla-proyectos>
      </template>
      <template v-else>
        <form-proyectos
          :idProyecto="id"
          @cambiarTipo="cambiarTipo"
          @cambiarVariableFormulario="cambiarVariableFormulario"
        ></form-proyectos>
      </template>
    </div>
  </div>
</template>

<script>
import vuex from "vuex";
import websocketsMixin from "../../../../mixins/websockets";
import abrirCerrarFormulario from "../../../../mixins/abrirCerrarFormulario";
export default {
  mixins: [
    websocketsMixin("Proyecto", "proyectos"),
    abrirCerrarFormulario("Proyecto")
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
