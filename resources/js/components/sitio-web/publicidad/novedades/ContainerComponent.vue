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
            @click="abrirFormulario(0)"
            class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm"
          >Cancelar</button>
        </template>
      </div>
    </div>
    <div class="card-body">
      <template v-if="!formulario">
        <tabla-novedades
          @abrirFormularioNovedad="abrirFormulario"
          @cambiarTipo="cambiarTipo"
          :refrescar="refrescar"
          @cambiarVariable="cambiarVariable"
        ></tabla-novedades>
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
import vuex from "vuex";
export default {
  data() {
    return { formulario: false, id: 0, tipo: "", refrescar: false };
  },
  methods: {
    ...vuex.mapActions("publicidad", ["accionNovedad"]),
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
    },
    cambiarVariable() {
      this.refrescar = false;
    }
  },
  created() {
    this.$events.$on("abrirFormularioNovedad", e => this.abrirFormulario(e));
    this.$emit("rutaHijo", window.location.pathname);
    window.Echo.channel("novedad").listen("NovedadEvent", e => {
      this.accionNovedad({ tipo: e.tipo, data: e.novedad });
      this.$events.fire(
        e.novedad.id + "-actualizarPublicarNovedad",
        e.novedad.publicar
      );
      if (!this.formulario) {
        this.$events.fire("actualizartablaNovedad");
      }
    });
  }
};
</script>
