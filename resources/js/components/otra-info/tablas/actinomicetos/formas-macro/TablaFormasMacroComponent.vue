<template>
  <div>
    <div class="main-card mb-3 card">
      <div class="card-header-tab card-header">
        <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
          Tabla Dinámica Formas
        </div>
        <div class="btn-actions-pane-right actions-icon-btn">
          <AccionMostrar
            @mostrarTabla="mostrarTabla"
            :tipoModal="'actinomiceto'"
            :tipo="'forma_macro'"
          />
        </div>
      </div>
      <div class="card-body" v-if="tabla">
        <template v-if="siHayDatos">
          <MyVuetable
            ref="tabla"
            :apiUrl="'/info-panel/formas-macro-actinomiceto'"
            :fields="fields"
            :sortOrder="sortOrder"
            :detailRowComponent="''"
            :nameGet="'formas-macro-actinomiceto'"
          ></MyVuetable>
        </template>
        <template v-else>
          <div class="text-center">
            <h5 class="mt-5 mb-5">
              <span class="pr-1">
                <b class="text-success">AÚN NO SE HAN AGREGADO FORMAS</b>
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
      fields: FieldDefs,
      sortOrder: [
        {
          field: "nombre",
          direction: "asc",
        },
      ],
    };
  },
  mixins: [websocketsTablaOtraInfoMixin("forma_macro")],
  computed: {
    ...vuex.mapGetters("info_caract", ["getInfoCaractMacroActinomicetos"]),
    siHayDatos() {
      if (
        this.getInfoCaractMacroActinomicetos != "" &&
        this.getInfoCaractMacroActinomicetos != null
      ) {
        if (this.getInfoCaractMacroActinomicetos.formas_macros.length > 0) {
          return true;
        }
      }
      return false;
    },
  },
};
</script>