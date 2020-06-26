<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <button
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning"
          v-tooltip.left="'Editar'"
          @click="editar(rowData)"
          :disabled="disabledBtns"
        >
          <i class="fas fa-pencil-alt"></i>
        </button>

        <button
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-danger"
          v-tooltip="'Eliminar'"
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
import vuex from "vuex";
export default {
  props: {
    rowData: {
      type: Object,
      required: true
    },
    rowIndex: {
      type: Number
    }
  },
  data() {
    return { disabledBtns: false };
  },
  computed: {
    ...vuex.mapGetters(["getUserAuth"])
  },
  methods: {
    editar(data) {
      this.$events.fire("abrirFormularioNovedad", data.id);
      window.Echo.private("bloquearBtnsNovedad").whisper(
        "bloquearBtnsNovedad",
        {
          id: data.id,
          idUser: this.getUserAuth.id
        }
      );
      window.Echo.private("bloquearCheckNovedad").whisper(
        "bloquearCheckNovedad",
        {
          id: data.id,
          idUser: this.getUserAuth.id
        }
      );
      this.$events.fire("pushMisBloqueosNovedad", {
        id: data.id,
        idUser: this.getUserAuth.id
      });
    },
    showModal(data) {
      this.$modal.show("modal_eliminar_novedad", {
        id: data.id
      });
      window.Echo.private("bloquearBtnsNovedad").whisper(
        "bloquearBtnsNovedad",
        {
          id: data.id,
          idUser: this.getUserAuth.id
        }
      );
      window.Echo.private("bloquearCheckNovedad").whisper(
        "bloquearCheckNovedad",
        {
          id: data.id,
          idUser: this.getUserAuth.id
        }
      );
      this.$events.fire("pushMisBloqueosNovedad", {
        id: data.id,
        idUser: this.getUserAuth.id
      });
    },
    bloquearBtnsNovedad(data) {
      this.disabledBtns = true;
    },
    desbloquearBtnsNovedad(data) {
      this.disabledBtns = false;
    },
    crearEventosBtns() {
      this.$events.$on(this.rowData.id + "-bloquearBtnsNovedad", e =>
        this.bloquearBtnsNovedad()
      );
      this.$events.$on(this.rowData.id + "-desbloquearBtnsNovedad", e =>
        this.desbloquearBtnsNovedad()
      );
    },
    eliminarEventosBtns(id) {
      this.disabledBtns = false;
      this.$events.$off(id + "-bloquearBtnsNovedad");
      this.$events.$off(id + "-desbloquearBtnsNovedad");
    }
  },
  created() {
    this.$events.$on(this.rowIndex + "-crearEventosBtns-novedades", e =>
      this.crearEventosBtns()
    );
    this.$events.$on(this.rowIndex + "-eliminarEventosBtns-novedades", e =>
      this.eliminarEventosBtns(e)
    );
  },
  destroyed() {
    this.$events.$off(this.rowIndex + "-crearEventosBtns-novedades");
    this.$events.$off(this.rowIndex + "-eliminarEventosBtns-novedades");
  }
};
</script>