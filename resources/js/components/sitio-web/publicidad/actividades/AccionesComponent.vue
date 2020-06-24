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
          idBtn: data.id,
          idUser: this.getUserAuth.id,
          index: this.rowIndex
        }
      );
      window.Echo.private("bloquearCheckActividad").whisper(
        "bloquearCheckActividad",
        {
          idCheck: data.id,
          idUser: this.getUserAuth.id,
          index: this.rowIndex
        }
      );
      this.$events.fire("pushMisBloqueosActividad", {
        id: data.id,
        idUser: this.getUserAuth.id,
        index: this.rowIndex
      });
    },
    showModal(data) {
      this.$modal.show("modal_eliminar_actividad", {
        id: data.id
      });
      window.Echo.private("bloquearBtnsActividad").whisper(
        "bloquearBtnsActividad",
        {
          idBtn: data.id,
          idUser: this.getUserAuth.id,
          index: this.rowIndex
        }
      );
      window.Echo.private("bloquearCheckActividad").whisper(
        "bloquearCheckActividad",
        {
          idCheck: data.id,
          idUser: this.getUserAuth.id,
          index: this.rowIndex
        }
      );
      this.$events.fire("pushMisBloqueosActividad", {
        id: data.id,
        idUser: this.getUserAuth.id,
        index: this.rowIndex
      });
    },
    // hacer if
    bloquearBtnsActividad(data) {
      if (this.rowData.id === data.idBtn) {
        this.disabledBtns = true;
      } else {
        this.disabledBtns = false;
      }
    },
    desbloquearBtnsActividad(data) {
      if (this.rowData.id === data.idBtn) {
        this.disabledBtns = false;
      } else {
        this.disabledBtns = true;
      }
    }
  },
  created() {
    this.$events.$on(this.rowIndex + "-bloquearBtnsActividad", e =>
      this.bloquearBtnsActividad(e)
    );
    this.$events.$on(this.rowIndex + "-desbloquearBtnsActividad", e =>
      this.desbloquearBtnsActividad(e)
    );
  },
  mounted() {
    this.$events.fire(this.rowIndex + "-verificarBloqueoBtnsActividad", {
      id: this.rowData.id,
      index: this.rowIndex
    });
  },
  destroyed() {
    this.$events.$off(this.rowIndex + "-bloquearBtnsActividad");
    this.$events.$off(this.rowIndex + "-desbloquearBtnsActividad");
  }
};
</script>