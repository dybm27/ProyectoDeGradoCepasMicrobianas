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
      @click="eliminar(rowData)"
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
      this.$events.fire("abrirFormularioMetodoHongo", data.id);
    },
    eliminar(data) {
      this.$modal.show("my_modal_eliminar_metodo", { id: data.id });
    }
  },
  computed: {},
  created() {}
};
</script>