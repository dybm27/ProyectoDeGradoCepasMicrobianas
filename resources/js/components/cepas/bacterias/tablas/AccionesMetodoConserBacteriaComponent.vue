<template>
  <div>
    <button
      class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning"
      v-tooltip.left="'Editar Metodo'"
      @click="itemAction('editar-metodo', rowData, rowIndex)"
    >
      <i class="fas fa-pencil-alt"></i>
    </button>

    <button
      class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-danger"
      v-tooltip.left="'Eliminar Metodo'"
      @click="showModal(rowData)"
    >
      <i class="far fa-trash-alt"></i>
    </button>
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
    return {
      mostrar: true
    };
  },
  methods: {
    itemAction(action, data, index) {
      if (action == "editar-metodo") {
        let ruta = window.location.pathname;
        if (ruta.includes("bacterias")) {
          this.$router.push({
            name: "metodo-conser-bacteria-editar",
            params: { metodoConserBacteriaId: data.id }
          });
        } else {
          this.$router.push({
            name: "metodo-conser-cepa-bacteria-editar",
            params: { metodoConserBacteriaId: data.id }
          });
        }
      }
    },
    showModal(data) {
      this.$modal.show("my_modal_eliminar_metodo", { id: data.id });
    }
  },
  computed: {},
  created() {}
};
</script>

<style scoped>
.centrar {
  align-content: center;
}
</style>