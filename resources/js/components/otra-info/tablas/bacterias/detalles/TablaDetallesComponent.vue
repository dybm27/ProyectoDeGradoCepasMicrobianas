<template>
  <div>
    <div class="main-card mb-3 card">
      <div class="card-header-tab card-header">
        <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
          Tabla Dinámica Detalles Ópticos
        </div>
        <div class="btn-actions-pane-right actions-icon-btn">
          <button
            @click="$modal.show('modal_agregar_tipo_bacteria',{tipo:'detalle'})"
            class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm"
          >Agregar</button>
          <img @click="mostrarTabla" :src="'/iconos/icons8-vista-general-3-35.png'" />
        </div>
      </div>
      <div class="card-body" v-if="tabla">
        <template v-if="siHayDatos">
          <MyVuetable
            ref="tabla"
            api-url="/info-panel/detalles-bacteria"
            :fields="fields"
            :sort-order="sortOrder"
            :nameGet="'detalles-bacteria'"
          ></MyVuetable>
        </template>
        <template v-else>
          <div class="text-center">
            <h5 class="mt-5 mb-5">
              <span class="pr-1">
                <b class="text-success">AÚN NO SE HAN AGREGADO DETALLES ÓPTICOS</b>
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
export default {
  components: { MyVuetable },
  data() {
    return {
      fields: FieldDefs,
      sortOrder: [
        {
          field: "nombre",
          direction: "asc"
        }
      ]
    };
  },
  mixins: [websocketsTablaOtraInfoMixin("detalle")],
  computed: {
    ...vuex.mapGetters("info_caract", ["getInfoCaractMacroBacterias"]),
    siHayDatos() {
      if (
        this.getInfoCaractMacroBacterias != "" &&
        this.getInfoCaractMacroBacterias != null
      ) {
        if (this.getInfoCaractMacroBacterias.detalle_opticos) {
          return true;
        }
      }
      return false;
    }
  }
};
</script>