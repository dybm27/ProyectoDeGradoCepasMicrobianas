<template>
  <div class="main-card mb-3 card">
    <div class="card-header-tab card-header">
      <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
        <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
        Tabla Dinámica Noticias
      </div>
      <div class="btn-actions-pane-right actions-icon-btn">
        <template v-if="!formulario">
          <button
            @click="abrirFormulario(0)"
            class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm"
          >Agregar</button>
        </template>
        <template v-else>
          <button
            @click="cerrarFormulario"
            class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm"
          >Cancelar</button>
        </template>
      </div>
    </div>
    <div class="card-body">
      <template v-if="!formulario">
        <tabla-noticias @cambiarTipo="cambiarTipo"></tabla-noticias>
      </template>
      <template v-else>
        <form-noticias
          :idNoticia="id"
          @cambiarTipo="cambiarTipo"
          @cambiarVariableFormulario="cambiarVariableFormulario"
        ></form-noticias>
      </template>
    </div>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
  data() {
    return {
      formulario: false,
      id: 0,
      tipo: "",
      bloqueos: [],
      misBloqueos: []
    };
  },
  methods: {
    abrirFormulario(id) {
      if (id != 0) {
        this.id = id;
      } else {
        this.id = 0;
      }
      this.formulario = !this.formulario;
    },
    cerrarFormulario() {
      if (this.id != 0) {
        window.Echo.private(
          "desbloquearBtnsNoticia"
        ).whisper("desbloquearBtnsNoticia", { id: this.id });
        window.Echo.private(
          "desbloquearCheckNoticia"
        ).whisper("desbloquearCheckNoticia", { id: this.id });
        this.$events.fire("spliceMisBloqueosNoticia", {
          id: this.id
        });
        this.id = 0;
      }
      this.formulario = !this.formulario;
    },
    cambiarVariableFormulario() {
      this.formulario = !this.formulario;
    },
    cambiarTipo(tipo) {
      this.$emit("cambiarTipo", tipo);
    },
    // Bloquear Btns
    bloquearBtnsNoticia(e) {
      this.bloqueos.push({ idUser: e.idUser, id: e.id });
      this.crearEventoBtns(e.id);
      this.$events.fire(e.id + "-bloquearBtnsNoticia");
    },
    desbloquearBtnsNoticia(e) {
      let data = this.bloqueos.find(data => data.id === e.id);
      this.eliminarEventoBtns(data.id);
      this.bloqueos.splice(
        this.bloqueos.findIndex(data => data.id === e.id),
        1
      );
      this.$events.fire(data.id + "-desbloquearBtnsNoticia");
    },
    bloquearBtns(id) {
      this.$events.fire(id + "-bloquearBtnsNoticia");
    },
    crearEventoBtns(id) {
      this.$events.$on(id + "-verificarBloqueoBtnsNoticia", e =>
        this.bloquearBtns(e.id)
      );
    },
    eliminarEventoBtns(id) {
      this.$events.off(id + "-verificarBloqueoBtnsNoticia");
    },
    // Bloquear Check
    bloquearCheckNoticia(e) {
      this.bloqueos.push({ idUser: e.idUser, id: e.id });
      this.crearEventoCheck(e.id);
      this.$events.fire(e.id + "-bloquearCheckNoticia");
    },
    desbloquearCheckNoticia(e) {
      let data = this.bloqueos.find(data => data.id === e.id);
      this.eliminarEventoCheck(data.id);
      this.bloqueos.splice(
        this.bloqueos.findIndex(data => data.id === e.id),
        1
      );
      this.$events.fire(data.id + "-desbloquearCheckNoticia");
    },
    bloquearCheck(id) {
      this.$events.fire(id + "-bloquearCheckNoticia");
    },
    crearEventoCheck(id) {
      this.$events.$on(id + "-verificarBloqueoCheckNoticia", e =>
        this.bloquearCheck(e.id)
      );
    },
    eliminarEventoCheck(id) {
      this.$events.off(id + "-verificarBloqueoCheckNoticia");
    },
    // eliminar bloqueos
    borrarBtnsCheck(id) {
      let data = this.bloqueos.find(data => data.idUser === id);
      if (data) {
        this.desbloquearBtnsNoticia(data);
        this.desbloquearCheckNoticia(data);
      }
    },
    // guardar mis bloqueos
    pushMisBloqueos(e) {
      this.misBloqueos.push({
        idUser: e.idUser,
        id: e.id
      });
    },
    spliceMisBloqueos(e) {
      this.misBloqueos.splice(
        this.misBloqueos.findIndex(data => data.id === e.id),
        1
      );
    },
    // verificar bloqueos existentes
    verificarBloqueos() {
      for (let index = 0; index < this.bloqueos.length; index++) {
        this.bloquearBtns(this.bloqueos[index].id);
        this.bloquearCheck(this.bloqueos[index].id);
      }
    }
  },
  mounted() {
    window.Echo.join("noticias")
      .here(data => {})
      .joining(data => {
        window.Echo.private(
          "recibirBtnsCheckNoticia"
        ).whisper("recibirBtnsCheckNoticia", { bloqueos: this.misBloqueos });
      })
      .leaving(data => {
        this.borrarBtnsCheck(data.id);
      });
    //  .listen("Prueba", e => {});

    window.Echo.private("bloquearBtnsNoticia").listenForWhisper(
      "bloquearBtnsNoticia",
      e => {
        this.bloquearBtnsNoticia(e);
      }
    );
    window.Echo.private("desbloquearBtnsNoticia").listenForWhisper(
      "desbloquearBtnsNoticia",
      e => {
        this.desbloquearBtnsNoticia(e);
      }
    );
    window.Echo.private("bloquearCheckNoticia").listenForWhisper(
      "bloquearCheckNoticia",
      e => {
        this.bloquearCheckNoticia(e);
      }
    );
    window.Echo.private("desbloquearCheckNoticia").listenForWhisper(
      "desbloquearCheckNoticia",
      e => {
        this.desbloquearCheckNoticia(e);
      }
    );
  },
  created() {
    this.$emit("rutaHijo", window.location.pathname);
    window.Echo.private("recibirBtnsCheckNoticia").listenForWhisper(
      "recibirBtnsCheckNoticia",
      e => {
        for (let index = 0; index < e.bloqueos.length; index++) {
          this.bloquearBtnsNoticia(e.bloqueos[index]);
          this.bloquearCheckNoticia(e.bloqueos[index]);
        }
      }
    );
    this.$events.$on("abrirFormularioNoticia", e => this.abrirFormulario(e));
    this.$events.$on("pushMisBloqueosNoticia", e => this.pushMisBloqueos(e));
    this.$events.$on("spliceMisBloqueosNoticia", e =>
      this.spliceMisBloqueos(e)
    );
    this.$events.$on("verificarBloqueos-noticias", e =>
      this.verificarBloqueos()
    );
  },
  destroyed() {
    this.$events.$off("abrirFormularioNoticia");
    this.$events.$off("pushMisBloqueosNoticia");
    this.$events.$off("spliceMisBloqueosNoticia");
    this.$events.$off("verificarBloqueos-noticias");
  },
  beforeDestroy() {
    window.Echo.leave("noticias");
    window.Echo.leave("recibirBtnsCheckNoticia");
    window.Echo.leave("bloquearCheckNoticia");
    window.Echo.leave("desbloquearCheckNoticia");
    window.Echo.leave("desbloquearBtnsNoticia");
    window.Echo.leave("bloquearBtnsNoticia");
  }
};
</script>
