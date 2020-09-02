<template>
  <div>
    <div
      class="container"
      v-if="getPermisoByNombres(['ver-cepa','editar-cepa','eliminar-cepa','caract-cepa'])&&!disabledBtns"
    >
      <div class="row">
        <div class="col-md-12 col-lg-12">
          <button
            v-if="getPermisoByNombre('caract-cepa')"
            class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-success"
            v-tooltip.left="'Agregar y Editar Caracteristicas'"
            @click="caracteristicas( rowData)"
          >
            <i class="far fa-file-alt"></i>
          </button>

          <button
            v-if="getPermisoByNombre('ver-cepa')"
            class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-info"
            v-tooltip="'Ver Cepa'"
            @click="ver( rowData)"
          >
            <i class="far fa-eye"></i>
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-lg-12">
          <button
            v-if="getPermisoByNombre('editar-cepa')"
            class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning"
            v-tooltip.left="'Editar Cepa'"
            @click="editar(rowData)"
          >
            <i class="fas fa-pencil-alt"></i>
          </button>

          <button
            v-if="getPermisoByNombre('eliminar-cepa')"
            class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-danger"
            v-tooltip="'Eliminar Cepa'"
            @click="eliminar(rowData)"
          >
            <i class="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <IconoNoAccess />
    </div>
  </div>
</template>

  <script>
import websocketsAccionesCepasMixin from "../../../../mixins/websocketsAccionesCepas";
import vuex from "vuex";
import IconoNoAccess from "../../../IconoNoAccess.vue";
export default {
  components: { IconoNoAccess },
  props: {
    rowData: {
      type: Object,
      required: true,
    },
    rowIndex: {
      type: Number,
    },
  },
  data() {
    return {
      disabledBtns: false,
    };
  },
  mixins: [websocketsAccionesCepasMixin],
  computed: {
    ...vuex.mapState(["auth"]),
    ...vuex.mapGetters(["getPermisoByNombre", "getPermisoByNombres"]),
  },
  methods: {
    caracteristicas(data) {
      this.$router.push({
        name: "caract-macro-levadura",
        params: { cepaLevaduraId: data.id },
      });
      this.enviarBloqueo(data);
    },
    ver(data) {
      this.$router.push({
        name: "ver-levadura",
        params: { cepaLevaduraId: data.id },
      });
      this.enviarBloqueo(data);
    },
  },
  created() {
    this.$events.$on(this.rowIndex + "-crearEventosBtns-levaduras", (e) =>
      this.crearEventosBtns()
    );
    this.$events.$on(this.rowIndex + "-eliminarEventosBtns-levaduras", (e) =>
      this.eliminarEventosBtns(e)
    );
  },
  destroyed() {
    this.$events.$off(this.rowIndex + "-crearEventosBtns-levaduras");
    this.$events.$off(this.rowIndex + "-eliminarEventosBtns-levaduras");
  },
};
</script>