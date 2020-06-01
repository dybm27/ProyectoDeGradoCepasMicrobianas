<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <button
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning"
          v-tooltip.left="'Editar'"
          @click="editar(rowData)"
        >
          <i class="fas fa-pencil-alt"></i>
        </button>

        <button
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-danger"
          v-tooltip="'Eliminar'"
          @click="showModal(rowData)"
        >
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
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
  methods: {
    editar(data) {
      this.$modal.show("modal_editar_tipo_hongo", {
        id: data.id,
        nombre: data.nombre,
        tipo: "tipo_metodo"
      });
    },
    showModal(data) {
      this.$modal.show("modal_eliminar_tipo_hongo", {
        id: data.id,
        tipo: "tipo_metodo"
      });
    }
  },
  computed: {},
  created() {}
};
</script>