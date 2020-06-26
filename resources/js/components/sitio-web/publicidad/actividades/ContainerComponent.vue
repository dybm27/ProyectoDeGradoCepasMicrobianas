<template>
  <div class="main-card mb-3 card">
    <div class="card-header-tab card-header">
      <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
        <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
        Tabla Dinámica Actividades
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
        <tabla-actividades @cambiarTipo="cambiarTipo"></tabla-actividades>
      </template>
      <template v-else>
        <form-actividades
          :idActividad="id"
          @cambiarTipo="cambiarTipo"
          @cambiarVariableFormulario="cambiarVariableFormulario"
        ></form-actividades>
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
          "desbloquearBtnsActividad"
        ).whisper("desbloquearBtnsActividad", { id: this.id });
        window.Echo.private(
          "desbloquearCheckActividad"
        ).whisper("desbloquearCheckActividad", { id: this.id });
        this.$events.fire("spliceMisBloqueosActividad", {
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
    bloquearBtnsActividad(e) {
      this.bloqueos.push({ idUser: e.idUser, id: e.id });
      this.crearEventoBtns(e.id);
      this.$events.fire(e.id + "-bloquearBtnsActividad");
    },
    desbloquearBtnsActividad(e) {
      let data = this.bloqueos.find(data => data.id === e.id);
      this.eliminarEventoBtns(data.id);
      this.bloqueos.splice(
        this.bloqueos.findIndex(data => data.id === e.id),
        1
      );
      this.$events.fire(data.id + "-desbloquearBtnsActividad");
    },
    bloquearBtns(id) {
      this.$events.fire(id + "-bloquearBtnsActividad");
    },
    crearEventoBtns(id) {
      this.$events.$on(id + "-verificarBloqueoBtnsActividad", e =>
        this.bloquearBtns(e.id)
      );
    },
    eliminarEventoBtns(id) {
      this.$events.off(id + "-verificarBloqueoBtnsActividad");
    },
    // Bloquear Check
    bloquearCheckActividad(e) {
      this.bloqueos.push({ idUser: e.idUser, id: e.id });
      this.crearEventoCheck(e.id);
      this.$events.fire(e.id + "-bloquearCheckActividad");
    },
    desbloquearCheckActividad(e) {
      let data = this.bloqueos.find(data => data.id === e.id);
      this.eliminarEventoCheck(data.id);
      this.bloqueos.splice(
        this.bloqueos.findIndex(data => data.id === e.id),
        1
      );
      this.$events.fire(data.id + "-desbloquearCheckActividad");
    },
    bloquearCheck(id) {
      this.$events.fire(id + "-bloquearCheckActividad");
    },
    crearEventoCheck(id) {
      this.$events.$on(id + "-verificarBloqueoCheckActividad", e =>
        this.bloquearCheck(e.id)
      );
    },
    eliminarEventoCheck(id) {
      this.$events.off(id + "-verificarBloqueoCheckActividad");
    },
    // eliminar bloqueos
    borrarBtnsCheck(id) {
      let data = this.bloqueos.find(data => data.idUser === id);
      if (data) {
        this.desbloquearBtnsActividad(data);
        this.desbloquearCheckActividad(data);
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
    window.Echo.join("actividades")
      .here(data => {})
      .joining(data => {
        window.Echo.private(
          "recibirBtnsCheckActividad"
        ).whisper("recibirBtnsCheckActividad", { bloqueos: this.misBloqueos });
      })
      .leaving(data => {
        this.borrarBtnsCheck(data.id);
      });
    //  .listen("Prueba", e => {});

    window.Echo.private("bloquearBtnsActividad").listenForWhisper(
      "bloquearBtnsActividad",
      e => {
        this.bloquearBtnsActividad(e);
      }
    );
    window.Echo.private("desbloquearBtnsActividad").listenForWhisper(
      "desbloquearBtnsActividad",
      e => {
        this.desbloquearBtnsActividad(e);
      }
    );
    window.Echo.private("bloquearCheckActividad").listenForWhisper(
      "bloquearCheckActividad",
      e => {
        this.bloquearCheckActividad(e);
      }
    );
    window.Echo.private("desbloquearCheckActividad").listenForWhisper(
      "desbloquearCheckActividad",
      e => {
        this.desbloquearCheckActividad(e);
      }
    );
  },
  created() {
    this.$emit("rutaHijo", window.location.pathname);
    window.Echo.private("recibirBtnsCheckActividad").listenForWhisper(
      "recibirBtnsCheckActividad",
      e => {
        for (let index = 0; index < e.bloqueos.length; index++) {
          this.bloquearBtnsActividad(e.bloqueos[index]);
          this.bloquearCheckActividad(e.bloqueos[index]);
        }
      }
    );
    this.$events.$on("abrirFormularioActividad", e => this.abrirFormulario(e));
    this.$events.$on("pushMisBloqueosActividad", e => this.pushMisBloqueos(e));
    this.$events.$on("spliceMisBloqueosActividad", e =>
      this.spliceMisBloqueos(e)
    );
    this.$events.$on("verificarBloqueos-actividades", e =>
      this.verificarBloqueos()
    );
  },
  destroyed() {
    this.$events.$off("abrirFormularioActividad");
    this.$events.$off("pushMisBloqueosActividad");
    this.$events.$off("spliceMisBloqueosActividad");
    this.$events.$off("verificarBloqueos-actividades");
  },
  beforeDestroy() {
    window.Echo.leave("actividades");
    window.Echo.leave("recibirBtnsCheckActividad");
    window.Echo.leave("bloquearCheckActividad");
    window.Echo.leave("desbloquearCheckActividad");
    window.Echo.leave("desbloquearBtnsActividad");
    window.Echo.leave("bloquearBtnsActividad");
  }
};
</script>
