<template>
  <div>
    <button
      class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning"
      v-tooltip.left="'Editar Usuario'"
      @click="itemAction('editar',rowData)"
    >
      <i class="fas fa-pencil-alt"></i>
    </button>

    <button
      class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-danger"
      v-tooltip.left="'Eliminar Usuario'"
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
      if (action == "editar") {
        this.$router.push({
          name: "editar-usuario",
          params: { usuarioId: data.id }
        });
      }
    },
    showModal(data) {
      this.$modal.show("my_modal_eliminarUsuario", { id: data.id });
    }
  }
};
</script>
