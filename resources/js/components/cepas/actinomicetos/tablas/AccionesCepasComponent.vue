<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <button
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-success"
          v-tooltip.left="'Agregar y Editar Caracteristicas'"
          @click="caracteristicas( rowData)"
          :disabled="disabledBtns"
        >
          <i class="far fa-file-alt"></i>
        </button>

        <button
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-info"
          v-tooltip="'Ver Cepa'"
          @click="ver( rowData)"
          :disabled="disabledBtns"
        >
          <i class="far fa-eye"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <button
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning"
          v-tooltip.left="'Editar Cepa'"
          @click="editar(rowData)"
          :disabled="disabledBtns"
        >
          <i class="fas fa-pencil-alt"></i>
        </button>

        <button
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-danger"
          v-tooltip="'Eliminar Cepa'"
          @click="showModal(rowData)"
          :disabled="disabledBtns"
        >
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>

  <script>
import websocketsAccionesCepasMixin from "../../../../mixins/websocketsAccionesCepas";
import vuex from "vuex";
export default {
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
  },
  methods: {
    caracteristicas(data) {
      this.$router.push({
        name: "caract-macro-actinomiceto",
        params: { cepaActinomicetoId: data.id },
      });
      this.enviarBloqueo(data);
    },
    ver(data) {
      this.$router.push({
        name: "ver-actinomiceto",
        params: { cepaActinomicetoId: data.id },
      });
      this.enviarBloqueo(data);
    },
  },
  created() {
    this.$events.$on(this.rowIndex + "-crearEventosBtns-actinomicetos", (e) =>
      this.crearEventosBtns()
    );
    this.$events.$on(
      this.rowIndex + "-eliminarEventosBtns-actinomicetos",
      (e) => this.eliminarEventosBtns(e)
    );
  },
  destroyed() {
    this.$events.$off(this.rowIndex + "-crearEventosBtns-actinomicetos");
    this.$events.$off(this.rowIndex + "-eliminarEventosBtns-actinomicetos");
  },
};
</script>