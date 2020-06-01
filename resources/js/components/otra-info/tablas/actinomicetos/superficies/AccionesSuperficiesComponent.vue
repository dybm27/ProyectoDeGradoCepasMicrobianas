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
      this.$modal.show("modal_editar_tipo_actinomiceto", {
        id: data.id,
        nombre: data.nombre,
        genero: data.genero_id,
        tipo: "superficie"
      });
    },
    showModal(data) {
      this.$modal.show("modal_eliminar_tipo_actinomiceto", {
        id: data.id,
        tipo: "superficie"
      });
    }
  },
  computed: {},
  created() {}
};
</script>