<template>
  <div>
    <template v-if="mostrarTabla">
      <MyVuetable
        ref="tabla"
        :apiUrl="'/info-panel/roles-tabla'"
        :fields="fields"
        :sortOrder="sortOrder"
        :detailRowComponent="''"
        :nameGet="'roles'"
      />
    </template>
    <template v-else>
      <div class="text-center">
        <h5 class="mt-5 mb-5">
          <span class="pr-1">
            <b class="text-success">AÚN NO SE HAN AGREGADO ROLES</b>
          </span>
        </h5>
      </div>
    </template>
  </div>
</template>

<script>
import FieldDefs from "./columnas-roles";
import vuex from "vuex";
import Toastr from "../../../mixins/toastr";
import websocketsTabla from "../../../mixins/websocketsTabla";
import MyVuetable from "../../vuetable/MyVuetableComponent.vue";
import websocketsTablaOtraInfoMixin from "../../../mixins/websocketsTablaOtraInfo";
export default {
  components: { MyVuetable },
  data() {
    return {
      fields: FieldDefs,
      sortOrder: [
        {
          field: "nombre",
          direction: "asc",
        },
      ],
      id: "",
    };
  },
  computed: {
    ...vuex.mapState("usuarios", ["roles"]),
    mostrarTabla() {
      if (this.roles != "" && this.roles != null) {
        return true;
      }
      return false;
    },
  },
  methods: {
    actualizarTabla() {
      if (this.mostrarTabla) {
        if (this.$refs.tabla) {
          this.$refs.tabla.refreshDatos();
        }
      }
    },
  },
  created() {
    this.$events.on("actualizartablaRol", (e) => this.actualizarTabla());
    this.$emit("cambiarTipo", "tabla");
  },
  destroyed() {
    this.$events.off("actualizartablaRol");
  },
};
</script>