<template>
  <div>
    <div class="main-card mb-3 card">
      <div class="card-header-tab card-header">
        <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
          Tabla Dinámica Texturas
        </div>
        <div class="btn-actions-pane-right actions-icon-btn">
          <AccionMostrar @mostrarTabla="mostrarTabla" :tipoModal="'hongo'" :tipo="'textura'" />
        </div>
      </div>
      <div class="card-body" v-if="tabla">
        <template v-if="siHayDatos">
          <MyVuetable
            ref="tabla"
            api-url="/info-panel/texturas-hongo"
            :fields="fields"
            :sort-order="sortOrder"
            :nameGet="'texturas-hongo'"
          ></MyVuetable>
        </template>
        <template v-else>
          <div class="text-center">
            <h5 class="mt-5 mb-5">
              <span class="pr-1">
                <b class="text-success">AÚN NO SE HAN AGREGADO TEXTURAS</b>
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
          direction: "asc"
        }
      ]
    };
  },
  mixins: [websocketsTablaOtraInfoMixin("textura")],
  computed: {
    ...vuex.mapGetters("info_caract", ["getInfoCaractMacroHongos"]),
    siHayDatos() {
      if (
        this.getInfoCaractMacroHongos != "" &&
        this.getInfoCaractMacroHongos != null
      ) {
        if (this.getInfoCaractMacroHongos.texturas.length > 0) {
          return true;
        }
      }
      return false;
    }
  }
};
</script>