<template>
  <div class="main-card mb-3 card">
    <div class="card-header-tab card-header">
      <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
        <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
        Tabla Dinámica Novedades
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
        <tabla-novedades @cambiarTipo="cambiarTipo"></tabla-novedades>
      </template>
      <template v-else>
        <form-novedades
          :idNovedad="id"
          @cambiarTipo="cambiarTipo"
          @cambiarVariableFormulario="cambiarVariableFormulario"
        ></form-novedades>
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
          "desbloquearBtnsNovedad"
        ).whisper("desbloquearBtnsNovedad", { id: this.id });
        window.Echo.private(
          "desbloquearCheckNovedad"
        ).whisper("desbloquearCheckNovedad", { id: this.id });
        this.$events.fire("spliceMisBloqueosNovedad", {
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
    bloquearBtnsNovedad(e) {
      this.bloqueos.push({ idUser: e.idUser, id: e.id });
      this.crearEventoBtns(e.id);
      this.$events.fire(e.id + "-bloquearBtnsNovedad");
    },
    desbloquearBtnsNovedad(e) {
      let data = this.bloqueos.find(data => data.id === e.id);
      this.eliminarEventoBtns(data.id);
      this.bloqueos.splice(
        this.bloqueos.findIndex(data => data.id === e.id),
        1
      );
      this.$events.fire(data.id + "-desbloquearBtnsNovedad");
    },
    bloquearBtns(id) {
      this.$events.fire(id + "-bloquearBtnsNovedad");
    },
    crearEventoBtns(id) {
      this.$events.$on(id + "-verificarBloqueoBtnsNovedad", e =>
        this.bloquearBtns(e.id)
      );
    },
    eliminarEventoBtns(id) {
      this.$events.off(id + "-verificarBloqueoBtnsNovedad");
    },
    // Bloquear Check
    bloquearCheckNovedad(e) {
      this.bloqueos.push({ idUser: e.idUser, id: e.id });
      this.crearEventoCheck(e.id);
      this.$events.fire(e.id + "-bloquearCheckNovedad");
    },
    desbloquearCheckNovedad(e) {
      let data = this.bloqueos.find(data => data.id === e.id);
      this.eliminarEventoCheck(data.id);
      this.bloqueos.splice(
        this.bloqueos.findIndex(data => data.id === e.id),
        1
      );
      this.$events.fire(data.id + "-desbloquearCheckNovedad");
    },
    bloquearCheck(id) {
      this.$events.fire(id + "-bloquearCheckNovedad");
    },
    crearEventoCheck(id) {
      this.$events.$on(id + "-verificarBloqueoCheckNovedad", e =>
        this.bloquearCheck(e.id)
      );
    },
    eliminarEventoCheck(id) {
      this.$events.off(id + "-verificarBloqueoCheckNovedad");
    },
    // eliminar bloqueos
    borrarBtnsCheck(id) {
      let data = this.bloqueos.find(data => data.idUser === id);
      if (data) {
        this.desbloquearBtnsNovedad(data);
        this.desbloquearCheckNovedad(data);
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
    window.Echo.join("novedades")
      .here(data => {})
      .joining(data => {
        window.Echo.private(
          "recibirBtnsCheckNovedad"
        ).whisper("recibirBtnsCheckNovedad", { bloqueos: this.misBloqueos });
      })
      .leaving(data => {
        this.borrarBtnsCheck(data.id);
      });
    //  .listen("Prueba", e => {});

    window.Echo.private("bloquearBtnsNovedad").listenForWhisper(
      "bloquearBtnsNovedad",
      e => {
        this.bloquearBtnsNovedad(e);
      }
    );
    window.Echo.private("desbloquearBtnsNovedad").listenForWhisper(
      "desbloquearBtnsNovedad",
      e => {
        this.desbloquearBtnsNovedad(e);
      }
    );
    window.Echo.private("bloquearCheckNovedad").listenForWhisper(
      "bloquearCheckNovedad",
      e => {
        this.bloquearCheckNovedad(e);
      }
    );
    window.Echo.private("desbloquearCheckNovedad").listenForWhisper(
      "desbloquearCheckNovedad",
      e => {
        this.desbloquearCheckNovedad(e);
      }
    );
  },
  created() {
    this.$emit("rutaHijo", window.location.pathname);
    window.Echo.private("recibirBtnsCheckNovedad").listenForWhisper(
      "recibirBtnsCheckNovedad",
      e => {
        for (let index = 0; index < e.bloqueos.length; index++) {
          this.bloquearBtnsNovedad(e.bloqueos[index]);
          this.bloquearCheckNovedad(e.bloqueos[index]);
        }
      }
    );
    this.$events.$on("abrirFormularioNovedad", e => this.abrirFormulario(e));
    this.$events.$on("pushMisBloqueosNovedad", e => this.pushMisBloqueos(e));
    this.$events.$on("spliceMisBloqueosNovedad", e =>
      this.spliceMisBloqueos(e)
    );
    this.$events.$on("verificarBloqueos-novedades", e =>
      this.verificarBloqueos()
    );
  },
  destroyed() {
    this.$events.$off("abrirFormularioNovedad");
    this.$events.$off("pushMisBloqueosNovedad");
    this.$events.$off("spliceMisBloqueosNovedad");
    this.$events.$off("verificarBloqueos-novedades");
  },
  beforeDestroy() {
    window.Echo.leave("novedades");
    window.Echo.leave("recibirBtnsCheckNovedad");
    window.Echo.leave("bloquearCheckNovedad");
    window.Echo.leave("desbloquearCheckNovedad");
    window.Echo.leave("desbloquearBtnsNovedad");
    window.Echo.leave("bloquearBtnsNovedad");
  }
};
</script>
