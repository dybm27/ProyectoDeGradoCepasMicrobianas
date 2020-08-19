<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <button
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning"
          v-tooltip="'Editar'"
          @click="editar(rowData)"
          :disabled="disabledBtns"
        >
          <i class="fas fa-pencil-alt"></i>
        </button>

        <button
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-danger"
          v-tooltip="'Eliminar'"
          @click="eliminar(rowData)"
          :disabled="disabledBtns"
        >
          <i class="far fa-trash-alt"></i>
        </button>

        <button
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-success"
          v-tooltip="'Modificar Permisos'"
          @click="modificarPermisos(rowData)"
          :disabled="disabledBtns"
        >
          <i class="fas fa-user-cog"></i>
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
      required: true,
    },
    rowIndex: {
      type: Number,
    },
  },
  computed: {
    ...vuex.mapState(["auth"]),
  },
  data() {
    return { disabledBtns: false };
  },
  methods: {
    editar(data) {
      this.$modal.show("modal_editar_rol", {
        id: data.id,
        nombre: data.nombre,
      });
      this.enviarBloqueo(data);
    },
    eliminar(data) {
      this.$modal.show("modal_eliminar_rol", {
        id: data.id,
      });
      this.enviarBloqueo(data);
    },
    modificarPermisos(data) {
      this.$events.fire("abrirFormularioRol", data.id);
      this.enviarBloqueo(data);
    },
    bloquearBtns() {
      this.disabledBtns = true;
    },
    desbloquearBtns() {
      this.disabledBtns = false;
    },
    crearEventosBtns() {
      this.$events.$on(this.rowData.id + "-bloquearBtnsRol", (e) =>
        this.bloquearBtns()
      );
      this.$events.$on(this.rowData.id + "-desbloquearBtnsRol", (e) =>
        this.desbloquearBtns()
      );
    },
    eliminarEventosBtns(id) {
      this.disabledBtns = false;
      this.$events.$off(id + "-bloquearBtnsRol");
      this.$events.$off(id + "-desbloquearBtnsRol");
    },
    enviarBloqueo(data) {
      window.Echo.private("bloquearBtnsRol").whisper("bloquearBtnsRol", {
        id: data.id,
        idUser: this.auth.id,
      });
      this.$events.fire("agregarMiBloqueoRol", {
        id: data.id,
        idUser: this.auth.id,
      });
    },
  },
  created() {
    this.$events.$on(this.rowIndex + "-crearEventosBtns-roles", (e) =>
      this.crearEventosBtns()
    );
    this.$events.$on(this.rowIndex + "-eliminarEventosBtns-roles", (e) =>
      this.eliminarEventosBtns(e)
    );
  },
  destroyed() {
    this.$events.$off(this.rowIndex + "-crearEventosBtns-roles");
    this.$events.$off(this.rowIndex + "-eliminarEventosBtns-roles");
    this.$events.$off(this.rowData.id + "-bloquearBtnsRol");
    this.$events.$off(this.rowData.id + "-desbloquearBtnsRol");
  },
};
</script>