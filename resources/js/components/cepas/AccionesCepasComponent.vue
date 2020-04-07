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
      console.log("custom-actions: " + action, data.id, index);
      if (action == "agregar-editar-caract") {
        switch (data.grupo_microbiano_id) {
          case 1:
            this.$router.push({
              name: "caract-macro-bacteria",
              params: { cepaBacteriaId: data.id }
            });
            break;
          case 2:
            this.$router.push({
              name: "caract-macro-hongo",
              params: { cepaHongoId: data.id }
            });
            break;
          case 3:
            this.$router.push({
              name: "caract-macro-levadura",
              params: { cepaLevaduraId: data.id }
            });
            break;
          case 4:
            this.$router.push({
              name: "caract-macro-actinomiceto",
              params: { cepaActinomicetoId: data.id }
            });
            break;
        }
      } else if (action == "ver-cepa") {
      } else {
        this.$router.push({
          name: "cepa-editar",
          params: { cepaId: data.id }
        });
      }
    },
    showModal(data) {
      this.$modal.show("my_modal_eliminarCepa", { id: data.id });
    }
  },
  computed: {
    ocultarButton() {
      switch (this.rowData.grupo_microbiano_id) {
        case 1:
          if (
            this.rowData.carac_macro_bacterias != null &&
            this.rowData.carac_bioqui_bacterias != null &&
            this.rowData.carac_micro_bacterias != null &&
            this.rowData.carac_fisio_bacterias != null &&
            this.rowData.identi_molecu_bacterias != null &&
            this.rowData.metodo_conser_bacterias != null
          ) {
            this.mostrar = false;
          } else {
            this.mostrar = true;
          }
          break;
        case 2:
          if (
            this.rowData.carac_macro_hongos != null &&
            this.rowData.carac_micro_hongos != null &&
            this.rowData.carac_bioqui_hongos != null &&
            this.rowData.identi_molecu_hongos != null &&
            this.rowData.metodo_conser_hongos != null
          ) {
            this.mostrar = false;
          } else {
            this.mostrar = true;
          }
          break;
        case 3:
          if (
            this.rowData.carac_macro_levaduras != null &&
            this.rowData.carac_micro_levaduras != null &&
            this.rowData.carac_bioqui_levaduras != null &&
            this.rowData.identi_molecu_levaduras != null &&
            this.rowData.metodo_conser_levaduras != null
          ) {
            this.mostrar = false;
          } else {
            this.mostrar = true;
          }
          break;
        case 4:
          this.mostrar = true;
          break;
      }
      return this.mostrar;
    }
  },
  created() {}
};
</script>

<style scoped>
.centrar {
  align-content: center;
}
</style>