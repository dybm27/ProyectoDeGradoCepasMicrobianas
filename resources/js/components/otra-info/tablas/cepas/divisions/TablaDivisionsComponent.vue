<template>
  <div>
    <div class="main-card mb-3 card">
      <div class="card-header-tab card-header">
        <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
          Tabla Dinámica Divisions
        </div>
        <div class="btn-actions-pane-right actions-icon-btn">
          <AccionMostrar @mostrarTabla="mostrarTabla" :tipoModal="'cepa'" :tipo="'division'" />
        </div>
      </div>
      <div class="card-body" v-if="tabla">
        <template v-if="siHayDatos">
          <MyVuetable
            ref="tabla"
            :apiUrl="'/info-panel/divisions'"
            :fields="fields"
            :sortOrder="sortOrder"
            :detailRowComponent="''"
            :nameGet="'divisions'"
          ></MyVuetable>
        </template>
        <template v-else>
          <div class="text-center">
            <h5 class="mt-5 mb-5">
              <span class="pr-1">
                <b class="text-success">AÚN NO SE HAN AGREGADO DIVISIONES</b>
              </span>
            </h5>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import vuex from "vuex";
import FieldDefs from "./columnas";
import websocketsTablaOtraInfoMixin from "../../../../../mixins/websocketsTablaOtraInfo";
import MyVuetable from "../../../../vuetable/MyVuetableComponent.vue";
import AccionMostrar from "../../AccionMostrar.vue";
export default {
  components: { MyVuetable, AccionMostrar },
  data() {
    return {
      idCepaEliminar: "",
      fields: FieldDefs,
      sortOrder: [
        {
          field: "nombre",
          direction: "asc",
        },
      ],
    };
  },
  mixins: [websocketsTablaOtraInfoMixin("division")],
  computed: {
    ...vuex.mapGetters("info_cepas", ["getDivisiones"]),
    siHayDatos() {
      if (this.getDivisiones != "" && this.getDivisiones != null) {
        return true;
      }
      return false;
    },
  },
};
</script>