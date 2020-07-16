<template>
  <div>
    <div class="main-card mb-3 card">
      <div class="card-header-tab card-header">
        <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
          Tabla Dinámica Colores
        </div>
        <div class="btn-actions-pane-right actions-icon-btn">
          <button
            @click="$modal.show('modal_agregar_tipo_levadura',{tipo:'color'})"
            class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm"
          >Agregar</button>
          <img @click="mostrarTabla" :src="'/iconos/icons8-vista-general-3-35.png'" />
        </div>
      </div>
      <div class="card-body" v-if="tabla">
        <MyVuetable
          api-url="/info-panel/colors-levadura"
          :fields="fields"
          :sort-order="sortOrder"
          :nameGet="'colors-levadura'"
          @cambiarVariable="cambiarVariable"
          :refrescarTabla="refrescarTabla"
        ></MyVuetable>
      </div>
    </div>
  </div>
</template>

<script>
import FieldDefs from "./columnas";
import MyVuetable from "../../../../vuetable/MyVuetableComponent.vue";
export default {
  components: { MyVuetable },
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