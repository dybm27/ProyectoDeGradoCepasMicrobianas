<template>
  <div>
    <div class="main-card mb-3 card">
      <div class="card-header-tab card-header">
        <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
          Tabla Dinamica Formas
        </div>
        <div class="btn-actions-pane-right actions-icon-btn">
          <button
            @click="$modal.show('modal_agregar_tipo_actinomiceto',{tipo:'forma_micro'})"
            class="btn-wide btn-outline-2x mr-md-2 mb-2 btn btn-outline-focus btn-sm"
          >Agregar</button>
          <button class="mb-2 mr-2 btn-icon btn-pill btn btn-link" @click="mostrarTabla">
            <i class="lnr-menu btn-icon-wrapper"></i>
          </button>
        </div>
      </div>
      <div class="card-body" v-if="tabla">
        <my-vuetable
          api-url="/info-panel/formas-micro-actinomiceto"
          :fields="fields"
          :sort-order="sortOrder"
          :nameGet="'formas-micro-actinomiceto'"
          @cambiarVariable="cambiarVariable"
          :refrescarTabla="refrescarTabla"
        ></my-vuetable>
      </div>
    </div>
  </div>
</template>

<script>
import FieldDefs from "./columnas";
export default {
  props: ["refrescarTabla"],
  data() {
    return {
      idCepaEliminar: "",
      fields: FieldDefs,
      sortOrder: [
        {
          field: "nombre",
          direction: "asc"
        }
      ],
      tabla: false
    };
  },
  methods: {
    cambiarVariable() {
      this.$emit("cambiarVariable");
    },
    mostrarTabla() {
      this.tabla = !this.tabla;
    }
  }
};
</script>