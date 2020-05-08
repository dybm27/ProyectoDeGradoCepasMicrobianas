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
        <template v-if="getUsuarios!=''">
          <my-vuetable
            api-url="http://127.0.0.1:8000/api/seguimientos"
            :fields="fields"
            :sort-order="sortOrder"
            @cambiarVariable="cambiarVariable"
            :refrescarTabla="refrescarTabla"
          ></my-vuetable>
        </template>
        <template v-else>
          <div class="text-center">
            <h5 class="mt-5 mb-5">
              <span class="pr-1">
                <b class="text-warning">NO SE HAN HECHO MODIFICACIONES</b>
              </span>
            </h5>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import FieldDefs from "./columnas/columnas-seguimiento";
import vuex from "vuex";

export default {
  data() {
    return {
      refrescarTabla: false,
      fields: FieldDefs,
      sortOrder: [
        {
          field: "id",
          direction: "asc"
        }
      ],
      errors: [],
      titulo_modal: ""
    };
  },
  methods: {
    cambiarVariable() {
      this.refrescarTabla = false;
    }
  }
};
</script>