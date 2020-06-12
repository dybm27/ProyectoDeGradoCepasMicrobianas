<template>
  <div>
    <div class="main-card mb-3 card">
      <div class="card-header-tab card-header">
        <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
          Tabla Dinamica Elevaciones
        </div>
        <div class="btn-actions-pane-right actions-icon-btn">
          <button
            @click="$modal.show('modal_agregar_tipo_bacteria',{tipo:'elevacion'})"
            class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm"
          >Agregar</button>
          <img @click="mostrarTabla" :src="'/iconos/icons8-vista-general-3-35.png'" />
        </div>
      </div>
      <div class="card-body" v-if="tabla">
        <my-vuetable
          api-url="/info-panel/elevacions-bacteria"
          :fields="fields"
          :sort-order="sortOrder"
          :nameGet="'elevacions-bacteria'"
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