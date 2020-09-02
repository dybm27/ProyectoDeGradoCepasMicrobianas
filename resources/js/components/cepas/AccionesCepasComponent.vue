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
import websocketsAccionesCepasMixin from "../../mixins/websocketsAccionesCepas";
import IconoNoAccess from "../IconoNoAccess.vue";
import vuex from "vuex";
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
      let ruta = this.$route.path;
      switch (data.grupo_microbiano_id) {
        case 1:
          this.$router.push({
            name: "caract-macro-cepa-bacteria",
            params: { cepaId: data.id },
          });
          break;
        case 2:
          this.$router.push({
            name: "caract-macro-cepa-hongo",
            params: { cepaId: data.id },
          });
          break;
        case 3:
          this.$router.push({
            name: "caract-macro-cepa-levadura",
            params: { cepaId: data.id },
          });
          break;
        case 4:
          this.$router.push({
            name: "caract-macro-cepa-actinomiceto",
            params: { cepaId: data.id },
          });
          break;
      }
      this.enviarBloqueo(data);
    },
    ver(data) {
      let ruta = window.location.pathname;
      switch (data.grupo_microbiano_id) {
        case 1:
          this.$router.push({
            name: "ver-cepa-bacteria",
            params: { cepaId: data.id },
          });
          break;
        case 2:
          this.$router.push({
            name: "ver-cepa-hongo",
            params: { cepaId: data.id },
          });
          break;
        case 3:
          this.$router.push({
            name: "ver-cepa-levadura",
            params: { cepaId: data.id },
          });
          break;
        case 4:
          this.$router.push({
            name: "ver-cepa-actinomiceto",
            params: { cepaId: data.id },
          });
          break;
      }
      this.enviarBloqueo(data);
    },
  },
  created() {
    this.$events.$on(this.rowIndex + "-crearEventosBtns-cepas", (e) =>
      this.crearEventosBtns()
    );
    this.$events.$on(this.rowIndex + "-eliminarEventosBtns-cepas", (e) =>
      this.eliminarEventosBtns(e)
    );
  },
  destroyed() {
    this.$events.$off(this.rowIndex + "-crearEventosBtns-cepas");
    this.$events.$off(this.rowIndex + "-eliminarEventosBtns-cepas");
  },
};
</script>