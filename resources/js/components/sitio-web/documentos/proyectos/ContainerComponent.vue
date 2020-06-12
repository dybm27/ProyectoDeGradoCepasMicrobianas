<template>
  <div class="main-card mb-3 card">
    <div class="card-header-tab card-header">
      <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
        <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
        Tabla Dinamica Proyectos
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
            @click="abrirFormulario(0)"
            class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm"
          >Cancelar</button>
        </template>
      </div>
    </div>
    <div class="card-body">
      <template v-if="!formulario">
        <tabla-proyectos @abrirFormularioProyecto="abrirFormulario" @cambiarTipo="cambiarTipo"></tabla-proyectos>
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
export default {
  data() {
    return { formulario: false, id: 0, tipo: "" };
  },
  methods: {
    abrirFormulario(id) {
      if (id != 0) {
        this.id = id;
      } else {
        this.id = 0;
      }
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
    this.$events.$on("abrirFormularioProyecto", e =>
      this.abrirFormulario(e)
    );
    this.$emit("rutaHijo", window.location.pathname);
  }
};
</script>
