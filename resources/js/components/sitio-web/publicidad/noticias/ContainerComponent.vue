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
    ...vuex.mapActions("publicidad", ["accionNoticia"]),
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
        ).whisper("desbloquearBtnsNoticia", { idBtn: this.id });
        window.Echo.private(
          "desbloquearCheckNoticia"
        ).whisper("desbloquearCheckNoticia", { idCheck: this.id });
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
    bloquearBtns(id) {
      this.$events.fire(id + "-bloquearBtnsNoticia");
    },
    crearEventoBtns(id) {
      this.$events.$on(id + "-verificarBloqueoBtnsNoticia", e =>
        this.bloquearBtns(id)
      );
    },
    eliminarEventoBtns(id) {
      this.$events.off(id + "-verificarBloqueoBtnsNoticia");
    },
    bloquearCheck(id) {
      this.$events.fire(id + "-bloquearCheckNoticia");
    },
    crearEventoCheck(id) {
      this.$events.$on(id + "-verificarBloqueoCheckNoticia", e =>
        this.bloquearCheck(id)
      );
    },
    eliminarEventoCheck(id) {
      this.$events.off(id + "-verificarBloqueoCheckNoticia");
    },
    bloquearBtnsNoticia(e) {
      this.ids.btns.push({ idUser: e.idUser, idBtn: e.idBtn });
      this.crearEventoBtns(e.idBtn);
      this.$events.fire(e.idBtn + "-bloquearBtnsNoticia");
    },
    desbloquearBtnsNoticia(e) {
      this.eliminarEventoBtns(e.idBtn);
      this.ids.btns.splice(
        this.ids.btns.findIndex(data => data.idBtn === e.idBtn),
        1
      );
      this.$events.fire(e.idBtn + "-desbloquearBtnsNoticia");
    },
    bloquearCheckNoticia(e) {
      this.ids.checks.push({ idUser: e.idUser, idCheck: e.idCheck });
      this.crearEventoCheck(e.idCheck);
      this.$events.fire(e.idCheck + "-bloquearCheckNoticia");
    },
    desbloquearCheckNoticia(e) {
      this.eliminarEventoCheck(e.idCheck);
      this.ids.checks.splice(
        this.ids.checks.findIndex(data => data.idCheck === e.idCheck),
        1
      );
      this.$events.fire(e.idCheck + "-desbloquearCheckNoticia");
    },
    verificarBtnsCheck(id) {
      let btns = this.ids.btns.find(data => data.idUser === id);
      let checks = this.ids.checks.find(data => data.idUser === id);
      if (btns) {
        this.desbloquearBtnsNoticia(btns);
        this.desbloquearCheckNoticia(checks);
      }
    },
    pushMisBloqueos(e) {
      this.misBloqueos.btns.push({ idUser: e.idUser, idBtn: e.id });
      this.misBloqueos.checks.push({ idUser: e.idUser, idCheck: e.id });
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
    }
  },
  mounted() {
    window.Echo.join("noticias")
      .here(data => {})
      .joining(data => {
        console.log("joing");
        window.Echo.private(
          "recibirBtnsCheckNoticia"
        ).whisper("recibirBtnsCheckNoticia", { bloqueos: this.misBloqueos });
      })
      .leaving(data => {
        this.verificarBtnsCheck(data.id);
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
    this.$events.$on("abrirFormularioNoticia", e => this.abrirFormulario(e));
    this.$emit("rutaHijo", window.location.pathname);
    window.Echo.channel("noticia").listen("NoticiaEvent", e => {
      this.accionNoticia({ tipo: e.tipo, data: e.noticia });
      this.$events.fire(
        e.noticia.id + "-actualizarPublicarNoticia",
        e.noticia.publicar
      );
      if (!this.formulario) {
        this.$events.fire("actualizartablaNoticia");
      }
    });
    window.Echo.private("recibirBtnsCheckNoticia").listenForWhisper(
      "recibirBtnsCheckNoticia",
      e => {
        console.log("entroooo");
        for (let index = 0; index < e.bloqueos.btns.length; index++) {
          this.bloquearBtnsNoticia(e.bloqueos.btns[index]);
        }
        for (let index = 0; index < e.bloqueos.checks.length; index++) {
          this.bloquearCheckNoticia(e.bloqueos.checks[index]);
        }
      }
    );
    window.Echo.private("verificarBloqueosNoticia").listenForWhisper(
      "verificarBloqueosNoticia",
      e => {
        this.verificarBtnsCheck(e.id);
      }
    );
    this.$events.$on("pushMisBloqueosNoticia", e => this.pushMisBloqueos(e));
    this.$events.$on("spliceMisBloqueosNoticia", e =>
      this.spliceMisBloqueos(e)
    );
  },
  destroyed() {
    window.Echo.private(
      "verificarBloqueosNoticia"
    ).whisper("verificarBloqueosNoticia", { id: this.getUserAuth.id });
    this.$events.$off("abrirFormularioNoticia");
    this.$events.$off("pushMisBloqueosNoticia");
    this.$events.$off("spliceMisBloqueosNoticia");
  }
};
</script>
