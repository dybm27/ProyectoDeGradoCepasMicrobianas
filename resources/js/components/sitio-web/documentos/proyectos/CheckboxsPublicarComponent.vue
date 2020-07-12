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
import Toastr from "../../../../mixins/toastr";
import websocketsCheckMixin from "../../../../mixins/websocketsCheck";
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
  mixins: [websocketsCheckMixin("Proyecto", "proyectos"), Toastr],
  computed: {
    computedDisabled() {
      return this.disabled;
    }
  },
  methods: {
    publicar(data) {
      this.disabled = true;
      axios
        .put(`/documentos/publicar/${data.id}`, {
          publicar: !this.checkPublicar,
          tipo: "proyecto"
        })
        .then(res => {
          if (res.data.publicar) {
            this.toastr("Publicar", "Publicado con Exito!!");
          }
          this.disabled = false;
        });
    },
    verificarPublicar(e) {
      if (e == 0) {
        this.checkPublicar = false;
      } else {
        this.checkPublicar = true;
      }
    }
  },
  created() {
    this.verificarPublicar(this.rowData.publicar);
  }
};
</script>