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
      this.$events.fire("abrirFormularioNoticia", data.id);
      window.Echo.private("bloquearBtnsNoticia").whisper(
        "bloquearBtnsNoticia",
        {
          id: data.id,
          idUser: this.getUserAuth.id
        }
      );
      window.Echo.private("bloquearCheckNoticia").whisper(
        "bloquearCheckNoticia",
        {
          id: data.id,
          idUser: this.getUserAuth.id
        }
      );
      this.$events.fire("pushMisBloqueosNoticia", {
        id: data.id,
        idUser: this.getUserAuth.id
      });
    },
    showModal(data) {
      this.$modal.show("modal_eliminar_noticia", {
        id: data.id
      });
      window.Echo.private("bloquearBtnsNoticia").whisper(
        "bloquearBtnsNoticia",
        {
          id: data.id,
          idUser: this.getUserAuth.id
        }
      );
      window.Echo.private("bloquearCheckNoticia").whisper(
        "bloquearCheckNoticia",
        {
          id: data.id,
          idUser: this.getUserAuth.id
        }
      );
      this.$events.fire("pushMisBloqueosNoticia", {
        id: data.id,
        idUser: this.getUserAuth.id
      });
    },
    bloquearBtnsNoticia(data) {
      this.disabledBtns = true;
    },
    desbloquearBtnsNoticia(data) {
      this.disabledBtns = false;
    },
    crearEventosBtns() {
      this.$events.$on(this.rowData.id + "-bloquearBtnsNoticia", e =>
        this.bloquearBtnsNoticia()
      );
      this.$events.$on(this.rowData.id + "-desbloquearBtnsNoticia", e =>
        this.desbloquearBtnsNoticia()
      );
    },
    eliminarEventosBtns(id) {
      this.disabledBtns = false;
      this.$events.$off(id + "-bloquearBtnsNoticia");
      this.$events.$off(id + "-desbloquearBtnsNoticia");
    }
  },
  created() {
    this.$events.$on(this.rowIndex + "-crearEventosBtns-noticias", e =>
      this.crearEventosBtns()
    );
    this.$events.$on(this.rowIndex + "-eliminarEventosBtns-noticias", e =>
      this.eliminarEventosBtns(e)
    );
  },
  destroyed() {
    this.$events.$off(this.rowIndex + "-crearEventosBtns-noticias");
    this.$events.$off(this.rowIndex + "-eliminarEventosBtns-noticias");
  }
};
</script>