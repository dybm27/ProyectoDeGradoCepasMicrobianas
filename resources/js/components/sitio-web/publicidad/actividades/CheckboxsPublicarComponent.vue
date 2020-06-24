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
      if (data.idCheck === this.rowData.id) {
        this.disabled = true;
      } else {
        this.disabled = false;
      }
    },
    desbloquearCheckActividad(data) {
      if (data.idCheck === this.rowData.id) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    }
  },
  computed: {
    computedDisabled() {
      return this.disabled;
    }
  },
  mounted() {
    this.verificarPublicar(this.rowData.publicar);
    this.$events.fire(this.rowIndex + "-verificarBloqueoCheckActividad", {
      index: this.rowIndex,
      id: this.rowData.id
    });
  },
  created() {
    this.$events.$on(this.rowData.id + "-actualizarPublicarActividad", e =>
      this.verificarPublicar(e)
    );
    this.$events.$on(this.rowIndex + "-bloquearCheckActividad", e =>
      this.bloquearCheckActividad(e)
    );
    this.$events.$on(this.rowIndex + "-desbloquearCheckActividad", e =>
      this.desbloquearCheckActividad(e)
    );
  },
  destroyed() {
    this.$events.$off(this.rowData.id + "-actualizarPublicarActividad");
    this.$events.$off(this.rowData.id + "-bloquearCheckActividad");
    this.$events.$off(this.rowData.id + "-desbloquearCheckActividad");
  }
};
</script>