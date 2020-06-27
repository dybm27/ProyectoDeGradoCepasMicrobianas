<template>
  <div class="main-card mb-3 card">
    <div class="card-header-tab card-header">
      <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
        <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
        Tabla Dinámica Novedades
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
        <tabla-novedades @cambiarTipo="cambiarTipo"></tabla-novedades>
      </template>
      <template v-else>
        <form-novedades
          :idNovedad="id"
          @cambiarTipo="cambiarTipo"
          @cambiarVariableFormulario="cambiarVariableFormulario"
        ></form-novedades>
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
    websocketsMixin("Novedad", "novedades"),
    abrirCerrarFormulario("Novedad")
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
