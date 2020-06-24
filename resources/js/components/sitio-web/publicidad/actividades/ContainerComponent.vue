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
      ids: {
        btns: [],
        checks: []
      },
      misBloqueos: {
        btns: [],
        checks: []
      }
    };
  },
  computed: {
    ...vuex.mapGetters(["getUserAuth"])
  },
  methods: {
    ...vuex.mapActions("publicidad", ["accionActividad"]),
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
        ).whisper("desbloquearBtnsActividad", { idBtn: this.id });
        window.Echo.private(
          "desbloquearCheckActividad"
        ).whisper("desbloquearCheckActividad", { idCheck: this.id });
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
    bloquearBtns(index, id) {
      this.$events.fire(index + "-bloquearBtnsActividad", { idBtn: id });
    },
    crearEventoBtns(index) {
      this.$events.$on(index + "-verificarBloqueoBtnsActividad", e =>
        this.bloquearBtns(e.index, e.id)
      );
    },
    eliminarEventoBtns(index) {
      this.$events.off(index + "-verificarBloqueoBtnsActividad");
    },
    bloquearCheck(index, id) {
      this.$events.fire(index + "-bloquearCheckActividad", { idCheck: id });
    },
    crearEventoCheck(index) {
      this.$events.$on(index + "-verificarBloqueoCheckActividad", e =>
        this.bloquearCheck(e.index, e.id)
      );
    },
    eliminarEventoCheck(index) {
      this.$events.off(index + "-verificarBloqueoCheckActividad");
    },
    bloquearBtnsActividad(e) {
      this.ids.btns.push({ idUser: e.idUser, idBtn: e.idBtn, index: e.index });
      this.crearEventoBtns(e.index);
      this.$events.fire(e.index + "-bloquearBtnsActividad", { idBtn: e.idBtn });
    },
    desbloquearBtnsActividad(e) {
      let data = this.ids.btns.find(data => data.idBtn === e.idBtn);
      this.eliminarEventoBtns(data.index);
      this.ids.btns.splice(
        this.ids.btns.findIndex(data => data.idBtn === e.idBtn),
        1
      );
      this.$events.fire(data.index + "-desbloquearBtnsActividad", {
        idBtn: data.idBtn
      });
    },
    bloquearCheckActividad(e) {
      this.ids.checks.push({
        idUser: e.idUser,
        idCheck: e.idCheck,
        index: e.index
      });
      this.crearEventoCheck(e.index);
      this.$events.fire(e.index + "-bloquearCheckActividad", {
        idCheck: e.idCheck
      });
    },
    desbloquearCheckActividad(e) {
      let data = this.ids.checks.find(data => data.idCheck === e.idCheck);
      this.eliminarEventoCheck(data.index);
      this.ids.checks.splice(
        this.ids.checks.findIndex(data => data.idCheck === e.idCheck),
        1
      );
      this.$events.fire(data.index + "-desbloquearCheckActividad", {
        idCheck: data.idCheck
      });
    },
    borrarBtnsCheck(id) {
      let btns = this.ids.btns.find(data => data.idUser === id);
      let checks = this.ids.checks.find(data => data.idUser === id);
      if (btns) {
        this.desbloquearBtnsActividad(btns);
        this.desbloquearCheckActividad(checks);
      }
    },
    pushMisBloqueos(e) {
      this.misBloqueos.btns.push({
        idUser: e.idUser,
        idBtn: e.id,
        index: e.index
      });
      this.misBloqueos.checks.push({
        idUser: e.idUser,
        idCheck: e.id,
        index: e.index
      });
    },
    spliceMisBloqueos(e) {
      this.misBloqueos.btns.splice(
        this.misBloqueos.btns.findIndex(data => data.idBtn === e.id),
        1
      );
      this.misBloqueos.checks.splice(
        this.misBloqueos.checks.findIndex(data => data.idCheck === e.id),
        1
      );
    },
    verificarBloqueos() {
      for (let index = 0; index < this.ids.btns.length; index++) {
        this.$events.fire(
          this.ids.btns[index].index + "-bloquearBtnsActividad",
          {
            idBtn: this.ids.btns[index].idBtn
          }
        );
        this.$events.fire(
          this.ids.btns[index].index + "-bloquearCheckActividad",
          {
            idCheck: this.ids.btns[index].idBtn
          }
        );
      }
    }
  },
  mounted() {
    window.Echo.join("noticias")
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
    this.$events.$on("abrirFormularioActividad", e => this.abrirFormulario(e));
    this.$emit("rutaHijo", window.location.pathname);
    window.Echo.channel("actividad").listen("ActividadEvent", e => {
      this.accionActividad({ tipo: e.tipo, data: e.actividad });
      this.$events.fire(
        e.actividad.id + "-actualizarPublicarActividad",
        e.actividad.publicar
      );
      if (!this.formulario) {
        this.$events.fire("actualizartablaActividad");
      }
    });
    window.Echo.private("recibirBtnsCheckActividad").listenForWhisper(
      "recibirBtnsCheckActividad",
      e => {
        for (let index = 0; index < e.bloqueos.btns.length; index++) {
          this.bloquearBtnsActividad(e.bloqueos.btns[index]);
        }
        for (let index = 0; index < e.bloqueos.checks.length; index++) {
          this.bloquearCheckActividad(e.bloqueos.checks[index]);
        }
      }
    );
    this.$events.$on("pushMisBloqueosActividad", e => this.pushMisBloqueos(e));
    this.$events.$on("spliceMisBloqueosActividad", e =>
      this.spliceMisBloqueos(e)
    );
    this.$events.$on("verificarBloqueos", e => this.verificarBloqueos());
  },
  destroyed() {
    this.$events.$off("abrirFormularioActividad");
    this.$events.$off("pushMisBloqueosActividad");
    this.$events.$off("spliceMisBloqueosActividad");
    this.$events.$off("verificarBloqueos");
  },
  beforeDestroy() {
    window.Echo.leave("noticias");
    window.Echo.leave("recibirBtnsCheckActividad");
    window.Echo.leave("actividad");
    window.Echo.leave("bloquearCheckActividad");
    window.Echo.leave("desbloquearCheckActividad");
    window.Echo.leave("desbloquearBtnsActividad");
    window.Echo.leave("bloquearBtnsActividad");
  }
};
</script>
