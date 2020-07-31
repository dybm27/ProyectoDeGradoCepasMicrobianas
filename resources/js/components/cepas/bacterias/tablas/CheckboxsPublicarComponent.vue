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
import WebsocketsCheckCepas from "../../../../mixins/websocketsCheckCepas";
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
  mixins: [Toastr, WebsocketsCheckCepas],
  created() {
    this.$events.$on(this.rowIndex + "-crearEventosCheck-bacterias", (e) =>
      this.crearEventosCheck()
    );
    this.$events.$on(this.rowIndex + "-eliminarEventosCheck-bacterias", (e) =>
      this.eliminarEventosCheck(e)
    );
  },
  destroyed() {
    this.$events.$off(this.rowIndex + "-crearEventosCheck-bacterias");
    this.$events.$off(this.rowIndex + "-eliminarEventosCheck-bacterias");
  },
};
</script>