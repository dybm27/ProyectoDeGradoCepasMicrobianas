<template>
  <div class="tabs-animation">
    <router-view
      :tipoG="tipoG"
      @cambiarTipo="cambiarTipo"
      :bloqueos="bloqueos"
      :miBloqueo="miBloqueo"
      :cantUser="cantUser"
      :cantRecibirBtns="cantRecibirBtns"
      :tipo="tipo"
      :detailRowComponent="detailRowComponent"
      :titulo="titulo"
      :tituloCepa="tituloCepa"
      :FieldDefs="FieldDefs"
    />
  </div>
</template>

<script>
export default {
  props: [
    "tipoG",
    "tipo",
    "detailRowComponent",
    "titulo",
    "tituloCepa",
    "FieldDefs",
  ],
  data() {
    return {
      bloqueos: [],
      miBloqueo: null,
      cantUser: 0,
      cantRecibirBtns: 0,
    };
  },
  methods: {
    cambiarTipo(tipo) {
      this.$emit("cambiarTipo", tipo);
    },
    bloquearBtns(e) {
      let data = this.bloqueos.find((data) => data.id === e.id);
      if (!data) {
        this.bloqueos.push({ idUser: e.idUser, id: e.id });
        this.$events.fire(e.id + "-bloquearBtnsCepa");
        this.$events.fire(e.id + "-bloquearCheckCepa");
      }
    },
    desbloquearBtns(e) {
      this.bloqueos.splice(
        this.bloqueos.findIndex((data) => data.id === e.id),
        1
      );
      this.$events.fire(e.id + "-desbloquearBtnsCepa");
      this.$events.fire(e.id + "-desbloquearCheckCepa");
    },
    // guardar mis bloqueos
    agregarMiBloqueo(e) {
      this.miBloqueo = e;
    },
    eliminarMiBloqueo(e) {
      if (e.id != 0) {
        this.miBloqueo = null;
      }
    },
    //borrar bloqueos
    borrarBloqueos(e) {
      let data = this.bloqueos.find((data) => data.idUser === e.id);
      if (data) {
        this.desbloquearBtns(data);
      }
    },
    // verificar bloqueos existentes
    verificarBloqueos() {
      for (let index = 0; index < this.bloqueos.length; index++) {
        this.$events.fire(this.bloqueos[index].id + "-bloquearBtnsCepa");
        this.$events.fire(this.bloqueos[index].id + "-bloquearCheckCepa");
      }
    },
    enviarBloqueos() {
      window.Echo.private("recibirBtnsCepa").whisper("recibirBtnsCepa", {
        miBloqueo: this.miBloqueo,
      });
    },
  },
  mounted() {
    window.Echo.join("cepas")
      .here((data) => {
        this.cantUser = data.length;
      })
      .joining((data) => {
        this.cantUser++;
        this.enviarBloqueos();
      })
      .leaving((data) => {
        this.cantUser--;
        this.borrarBloqueos(data.user);
      });

    window.Echo.private("bloquearBtnsCepa").listenForWhisper(
      "bloquearBtnsCepa",
      (e) => {
        this.bloquearBtns(e);
      }
    );
    window.Echo.private("desbloquearBtnsCepa").listenForWhisper(
      "desbloquearBtnsCepa",
      (e) => {
        if (e.id != 0) {
          this.desbloquearBtns(e);
        }
      }
    );
  },
  created() {
    window.Echo.private("recibirBtnsCepa").listenForWhisper(
      "recibirBtnsCepa",
      (e) => {
        this.cantRecibirBtns++;
        if (e.miBloqueo) {
          this.bloquearBtns(e.miBloqueo);
        }
      }
    );
    this.$events.$on("agregarMiBloqueoCepa", (e) => this.agregarMiBloqueo(e));
    this.$events.$on("eliminarMiBloqueoCepa", (e) => this.eliminarMiBloqueo(e));
    this.$events.$on("verificarBloqueos-" + this.tipo + "s", (e) =>
      this.verificarBloqueos()
    );
  },
  destroyed() {
    this.$events.$off("agregarMiBloqueoCepa");
    this.$events.$off("eliminarMiBloqueoCepa");
    this.$events.$off("verificarBloqueos-" + this.tipo + "s");
  },
  beforeDestroy() {
    window.Echo.leave("cepas");
    window.Echo.leave("recibirBtnsCepa");
    window.Echo.leave("desbloquearBtnsCepa");
    window.Echo.leave("bloquearBtnsCepa");
  },
};
</script>