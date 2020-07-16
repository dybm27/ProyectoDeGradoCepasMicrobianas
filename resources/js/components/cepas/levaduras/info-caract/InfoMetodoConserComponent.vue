<template>
  <div>
    <div class="tabs-animation">
      <div class="mb-3 card">
        <div class="card-header-tab card-header">
          <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
            <i class="header-icon lnr-charts icon-gradient bg-happy-green"></i>
            Métodos de Conservación
          </div>
          <div class="btn-actions-pane-right text-capitalize">
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
        <div>
          <template v-if="!formulario">
            <TablaMetodo></TablaMetodo>
          </template>
          <template v-else>
            <FormMetodoConser :idMetodo="id" @cambiarVariable="cambiarVariableFormulario"></FormMetodoConser>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormMetodoConser from "../forms-caract/FormMetodoConserComponent.vue";
import TablaMetodo from "../tablas/TablaMetodoConserLevadurasComponent.vue";
export default {
  components: { FormMetodoConser, TablaMetodo },
  data() {
    return {
      formulario: false,
      id: 0
    };
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
    }
  },
  created() {
    this.$events.$on("abrirFormularioMetodoLevadura", e =>
      this.abrirFormulario(e)
    );
  }
};
</script>


