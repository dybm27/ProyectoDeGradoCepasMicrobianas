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
      this.$events.fire("abrirFormularioActividad", data.id);
      window.Echo.private("bloquearBtnsActividad").whisper(
        "bloquearBtnsActividad",
        {
          id: data.id,
          idUser: this.getUserAuth.id
        }
      );
      window.Echo.private("bloquearCheckActividad").whisper(
        "bloquearCheckActividad",
        {
          id: data.id,
          idUser: this.getUserAuth.id
        }
      );
      this.$events.fire("pushMisBloqueosActividad", {
        id: data.id,
        idUser: this.getUserAuth.id
      });
    },
    showModal(data) {
      this.$modal.show("modal_eliminar_actividad", {
        id: data.id
      });
      window.Echo.private("bloquearBtnsActividad").whisper(
        "bloquearBtnsActividad",
        {
          id: data.id,
          idUser: this.getUserAuth.id
        }
      );
      window.Echo.private("bloquearCheckActividad").whisper(
        "bloquearCheckActividad",
        {
          id: data.id,
          idUser: this.getUserAuth.id
        }
      );
      this.$events.fire("pushMisBloqueosActividad", {
        id: data.id,
        idUser: this.getUserAuth.id
      });
    },
    bloquearBtnsActividad(data) {
      this.disabledBtns = true;
    },
    desbloquearBtnsActividad(data) {
      this.disabledBtns = false;
    },
    crearEventosBtns() {
      this.$events.$on(this.rowData.id + "-bloquearBtnsActividad", e =>
        this.bloquearBtnsActividad()
      );
      this.$events.$on(this.rowData.id + "-desbloquearBtnsActividad", e =>
        this.desbloquearBtnsActividad()
      );
    },
    eliminarEventosBtns(id) {
      this.disabledBtns = false;
      this.$events.$off(id + "-bloquearBtnsActividad");
      this.$events.$off(id + "-desbloquearBtnsActividad");
    }
  },
  created() {
    this.$events.$on(this.rowIndex + "-crearEventosBtns-actividades", e =>
      this.crearEventosBtns()
    );
    this.$events.$on(this.rowIndex + "-eliminarEventosBtns-actividades", e =>
      this.eliminarEventosBtns(e)
    );
  },
  destroyed() {
    this.$events.$off(this.rowIndex + "-crearEventosBtns-actividades");
    this.$events.$off(this.rowIndex + "-eliminarEventosBtns-actividades");
  }
};
</script>