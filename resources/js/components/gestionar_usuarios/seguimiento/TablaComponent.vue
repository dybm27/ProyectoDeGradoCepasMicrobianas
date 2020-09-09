<template>
  <div class="tabs-animation">
    <div class="main-card mb-3 card">
      <div class="card-header-tab card-header">
        <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
          Tabla Seguimientos
        </div>
        <div class="btn-actions-pane-right actions-icon-btn"></div>
      </div>
      <div class="card-body">
        <MyVuetable
          ref="tabla"
          :apiUrl="'/info-panel/seguimientos'"
          :fields="fields"
          :sortOrder="sortOrder"
          :detailRowComponent="''"
          :nameGet="'seguimientos'"
        />
      </div>
    </div>
  </div>
</template>
<script>
import FieldDefs from "./columnas-seguimiento";
import MyVuetable from "../../vuetable/MyVuetableComponent.vue";
export default {
  components: { MyVuetable },
  data() {
    return {
      fields: FieldDefs,
      sortOrder: [
        {
          field: "nombre_responsable",
          direction: "asc",
        },
      ],
      bloquearBtnModal: false,
    };
  },
  created() {
    this.$emit("rutaHijo", window.location.pathname);
  },
};
</script>