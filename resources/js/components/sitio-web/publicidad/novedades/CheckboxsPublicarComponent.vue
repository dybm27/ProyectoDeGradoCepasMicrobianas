<template>
  <div>
    <div class="custom-checkbox custom-control">
      <input
        type="checkbox"
        :id="rowData.id"
        v-model="checkPublicar"
        class="custom-control-input"
        @click="publicar(rowData)"
        :disabled="computedDisabled"
      />
      <label class="custom-control-label" :for="rowData.id"></label>
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
    return { checkPublicar: false, disabled: false };
  },
  computed: {
    computedDisabled() {
      return this.disabled;
    }
  },
  methods: {
    publicar(data) {
      this.disabled = true;
      axios
        .put(`/publicidad/publicar/${data.id}`, {
          publicar: !this.checkPublicar,
          tipo: "novedad"
        })
        .then(res => {
          if (res.data.publicar) {
            this.toastr("Publicar", "Publicado con Exito!!");
          }
          this.disabled = false;
        });
    },
    toastr(titulo, msg) {
      this.$toastr.Add({
        title: titulo,
        msg: msg,
        position: "toast-top-right",
        type: "success",
        timeout: 5000,
        progressbar: true,
        //progressBarValue:"", // if you want set progressbar value
        style: {},
        classNames: ["animated", "zoomInUp"],
        closeOnHover: true,
        clickClose: true,
        onCreated: () => {},
        onClicked: () => {},
        onClosed: () => {},
        onMouseOver: () => {},
        onMouseOut: () => {}
      });
    },
    verificarPublicar(e) {
      if (e == 0) {
        this.checkPublicar = false;
      } else {
        this.checkPublicar = true;
      }
    },
    bloquearCheckNovedad(data) {
      this.disabled = true;
    },
    desbloquearCheckNovedad(data) {
      this.disabled = false;
    },
    crearEventosCheck() {
      this.verificarPublicar(this.rowData.publicar);
      this.$events.$on(this.rowData.id + "-bloquearCheckNovedad", e =>
        this.bloquearCheckNovedad()
      );
      this.$events.$on(this.rowData.id + "-desbloquearCheckNovedad", e =>
        this.desbloquearCheckNovedad()
      );
      this.$events.$on(this.rowData.id + "-actualizarPublicarNovedad", e =>
        this.verificarPublicar(e)
      );
    },
    eliminarEventosCheck(id) {
      this.disabled = false;
      this.$events.$off(id + "-bloquearCheckNovedad");
      this.$events.$off(id + "-desbloquearCheckNovedad");
      this.$events.$off(id + "-actualizarPublicarNovedad");
    }
  },
  created() {
    this.verificarPublicar(this.rowData.publicar);
    this.$events.$on(this.rowIndex + "-crearEventosCheck-novedades", e =>
      this.crearEventosCheck()
    );
    this.$events.$on(this.rowIndex + "-eliminarEventosCheck-novedades", e =>
      this.eliminarEventosCheck(e)
    );
  },
  destroyed() {
    this.$events.$off(this.rowIndex + "-crearEventosCheck-novedades");
    this.$events.$off(this.rowIndex + "-eliminarEventosCheck-novedades");
  }
};
</script>