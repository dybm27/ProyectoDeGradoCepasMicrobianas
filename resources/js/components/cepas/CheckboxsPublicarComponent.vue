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
        .put(`/cepas/publicar/${data.id}`, { publicar: !this.checkPublicar })
        .then(res => {
          if (res.data.publicar) {
            this.toastr("Publicar", "Publicado con Exito!!");
          }
          this.checkPublicar = res.data.publicar;
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
    }
  },
  computed: {
    computedDisabled() {
      return this.disabled;
    }
  },
  mounted() {
    if (this.rowData.publicar == 0) {
      this.checkPublicar = false;
    } else {
      this.checkPublicar = true;
    }
  }
};
</script>