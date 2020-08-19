<template>
  <div class="main-card mb-3 card">
    <div class="card-header-tab card-header">
      <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
        <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
        Tabla Dinámica Cepas Microbianas {{tituloCepa}}
      </div>
      <div class="btn-actions-pane-right actions-icon-btn">
        <template v-if="!formulario">
          <button
            v-if="getPermisoByNombre('agregar-cepa')"
            @click="abrirFormulario(0)"
            class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm"
            :disabled="tipos==''"
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
        <Tabla
          @cambiarTipo="cambiarTipo"
          :FieldDefs="FieldDefs"
          :detailRowComponent="detailRowComponent"
          :tipo="tipo"
          :titulo="titulo"
        ></Tabla>
      </template>
      <template v-else>
        <Form
          :tipoG="tipoG"
          :idCepa="id"
          @cambiarTipo="cambiarTipo"
          @cambiarVariableFormulario="cambiarVariableFormulario"
        ></Form>
      </template>
    </div>
  </div>
</template>

<script>
import abrirCerrarFormulario from "../../mixins/abrirCerrarFormulario";
import vuex from "vuex";
import Tabla from "./TablaCepasComponent.vue";
import Form from "./FormCepasComponent.vue";
export default {
  components: { Tabla, Form },
  props: [
    "tipoG",
    "tipo",
    "detailRowComponent",
    "titulo",
    "tituloCepa",
    "FieldDefs",
  ],
  mixins: [abrirCerrarFormulario("Cepa")],
  methods: {
    cambiarTipo(tipo) {
      this.$emit("cambiarTipo", tipo);
    },
  },
  computed: {
    ...vuex.mapState("info_cepas", ["tipos"]),
    ...vuex.mapGetters(["getPermisoByNombre"]),
  },
};
</script>