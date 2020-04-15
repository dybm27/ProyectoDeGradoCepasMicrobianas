<template>
  <div>
    <button
      class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning"
      data-toggle="tooltip"
      data-placement="top"
      title="Editar Método"
      @click="itemAction('editar-metodo', rowData, rowIndex)"
    >
      <i class="fas fa-pencil-alt"></i>
    </button>

    <button
      class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-danger"
      data-toggle="tooltip"
      data-placement="top"
      title="Eliminar Método"
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
          this.$router.push({ name: "metodo-conser-bacteria-editar" });
        } else {
          this.$router.push({ name: "metodo-conser-cepa-bacteria-editar" });
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