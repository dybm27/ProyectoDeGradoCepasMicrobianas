<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <button
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning"
          v-tooltip.left="'Editar'"
          @click="editar(rowData.id)"
          :disabled="disabledBtns"
        >
          <i class="fas fa-pencil-alt"></i>
        </button>

        <button
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-danger"
          v-tooltip="'Eliminar'"
          @click="showModal(rowData.id)"
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
    editar(id) {
      this.$events.fire("abrirFormularioNoticia", id);
      window.Echo.private("bloquearBtnsNoticia").whisper(
        "bloquearBtnsNoticia",
        {
          idBtn: id,
          idUser: this.getUserAuth.id
        }
      );
      window.Echo.private("bloquearCheckNoticia").whisper(
        "bloquearCheckNoticia",
        {
          idCheck: id,
          idUser: this.getUserAuth.id
        }
      );
      this.$events.fire("pushMisBloqueosNoticia", {
        id: id,
        idUser: this.getUserAuth.id
      });
    },
    showModal(id) {
      this.$modal.show("modal_eliminar_noticia", {
        id: id
      });
      window.Echo.private("bloquearBtnsNoticia").whisper(
        "bloquearBtnsNoticia",
        {
          idBtn: id,
          idUser: this.getUserAuth.id
        }
      );
      window.Echo.private("bloquearCheckNoticia").whisper(
        "bloquearCheckNoticia",
        {
          idCheck: id,
          idUser: this.getUserAuth.id
        }
      );
      this.$events.fire("pushMisBloqueosNoticia", {
        id: id,
        idUser: this.getUserAuth.id
      });
    },
    bloquearBtnsNoticia(id) {
      this.disabledBtns = true;
    },
    desbloquearBtnsNoticia(id) {
      this.disabledBtns = false;
    }
  },
  created() {
    this.$events.$on(this.rowData.id + "-bloquearBtnsNoticia", e =>
      this.bloquearBtnsNoticia()
    );
    this.$events.$on(this.rowData.id + "-desbloquearBtnsNoticia", e =>
      this.desbloquearBtnsNoticia()
    );
  },
  mounted() {
    this.$events.fire(
      this.rowData.id + "-verificarBloqueoBtnsNoticia",
      this.rowData.id
    );
  },
  destroyed() {
    this.$events.$off(this.rowData.id + "-bloquearBtnsNoticia");
    this.$events.$off(this.rowData.id + "-desbloquearBtnsNoticia");
  }
};
</script>