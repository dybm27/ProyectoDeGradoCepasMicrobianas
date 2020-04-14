<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <button
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-info"
          data-toggle="tooltip"
          data-placement="left"
          title="Agregar y Editar Caracteristicas"
          @click="itemAction('agregar-editar-caract', rowData, rowIndex)"
        >
          <i class="far fa-file-alt"></i>
        </button>

        <button
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-primary"
          data-toggle="tooltip"
          data-placement="left"
          title="Ver Cepa"
          @click="itemAction('ver-cepa', rowData, rowIndex)"
        >
          <i class="far fa-eye"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <button
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning"
          data-toggle="tooltip"
          data-placement="top"
          title="Editar Cepa"
          @click="itemAction('editar-cepa', rowData, rowIndex)"
        >
          <i class="fas fa-pencil-alt"></i>
        </button>

        <button
          class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-danger"
          data-toggle="tooltip"
          data-placement="top"
          title="Eliminar Cepa"
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
  data() {
    return {
      mostrar: true
    };
  },
  methods: {
    itemAction(action, data, index) {
      let ruta = window.location.pathname;

      if (action == "agregar-editar-caract") {
        switch (data.grupo_microbiano_id) {
          case 1:
            if (ruta.includes("bacterias")) {
              this.$router.push({
                name: "caract-macro-bacteria",
                params: { cepaBacteriaId: data.id }
              });
            } else {
              this.$router.push({
                name: "caract-macro-cepa-bacteria",
                params: { cepaId: data.id }
              });
            }
            break;
          case 2:
            /**if (ruta.includes("hongos")) {
              this.$router.push({
                name: "caract-macro-hongo",
                params: { cepaHongoId: data.id }
              });
            } else {
              this.$router.push({
                name: "caract-macro-cepa-hongo",
                params: { cepaId: data.id }
              });
            } */
            break;
          case 3:
            /** if (ruta.includes("levaduras")) {
              this.$router.push({
                name: "caract-macro-levadura",
                params: { cepaLevaduraId: data.id }
              });
            } else {
              this.$router.push({
                name: "caract-macro-cepa-levadura",
                params: { cepaId: data.id }
              });
            } */
            break;
          case 4:
            /* if (ruta.includes("actinomicetos")) {
              this.$router.push({
                name: "caract-macro-actinomiceto",
                params: { cepaActinomicetoId: data.id }
              });
            } else {
              this.$router.push({
                name: "caract-macro-cepa-actinomiceto",
                params: { cepaId: data.id }
              });
            } */
            break;
        }
      } else if (action == "ver-cepa") {
      } else {
        if (ruta.includes("bacterias")) {
          this.$router.push({
            name: "cepa-bacteria-editar",
            params: { cepaId: data.id }
          });
        } else if (ruta.includes("hongos")) {
          this.$router.push({
            name: "cepa-hongo-editar",
            params: { cepaId: data.id }
          });
        } else if (ruta.includes("levaduras")) {
          this.$router.push({
            name: "cepa-levadura-editar",
            params: { cepaId: data.id }
          });
        } else if (ruta.includes("actinomicetos")) {
          this.$router.push({
            name: "cepa-actinomiceto-editar",
            params: { cepaId: data.id }
          });
        } else {
          this.$router.push({
            name: "cepa-editar",
            params: { cepaId: data.id }
          });
        }
      }
    },
    showModal(data) {
      this.$modal.show("my_modal_eliminarCepa", { id: data.id });
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