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
          tipo: "actividad"
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
    bloquearCheckActividad(data) {
      this.disabled = true;
    },
    desbloquearCheckActividad(data) {
      this.disabled = false;
    },
    crearEventosCheck() {
      this.verificarPublicar(this.rowData.publicar);
      this.$events.$on(this.rowData.id + "-bloquearCheckActividad", e =>
        this.bloquearCheckActividad()
      );
      this.$events.$on(this.rowData.id + "-desbloquearCheckActividad", e =>
        this.desbloquearCheckActividad()
      );
      this.$events.$on(this.rowData.id + "-actualizarPublicarActividad", e =>
        this.verificarPublicar(e)
      );
    },
    eliminarEventosCheck(id) {
      this.disabled = false;
      this.$events.$off(id + "-bloquearCheckActividad");
      this.$events.$off(id + "-desbloquearCheckActividad");
      this.$events.$off(id + "-actualizarPublicarActividad");
    }
  },
  created() {
    this.verificarPublicar(this.rowData.publicar);
    this.$events.$on(this.rowIndex + "-crearEventosCheck-actividades", e =>
      this.crearEventosCheck()
    );
    this.$events.$on(this.rowIndex + "-eliminarEventosCheck-actividades", e =>
      this.eliminarEventosCheck(e)
    );
  },
  destroyed() {
    this.$events.$off(this.rowIndex + "-crearEventosCheck-actividades");
    this.$events.$off(this.rowIndex + "-eliminarEventosCheck-actividades");
  }
};
</script>