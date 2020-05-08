<template>
  <div>
    <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"></ul>
    <div class="tabs-animation">
      <div class="main-card mb-3 card">
        <div class="card-header-tab card-header">
          <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
            <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
            Tabla Dinamica Cepas Microbianas - Hongos
          </div>
          <div class="btn-actions-pane-right actions-icon-btn"></div>
        </div>
        <div class="card-body">
          <!--  detail-row-component="my-detail-row" -->
          <my-vuetable
            api-url="api/cepas-hongos"
            :fields="fields"
            :sort-order="sortOrder"
            detail-row-component="my-detail-row-h-l-a"
            @cambiarVariable="cambiarVariable"
            :refrescarTabla="refrescarTabla"
          ></my-vuetable>
        </div>
      </div>
    </div>
    <modal
      name="my_modal_eliminarCepa"
      classes="my_modal"
      :width="400"
      :height="300"
      @before-open="beforeOpen"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Cepa Microbiana</h5>
          <button type="button" class="close" @click="$modal.hide('my_modal_eliminarCepa')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Esta segura/o de eliminar la Cepa?.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('my_modal_eliminarCepa')"
          >Cancelar</button>
          <button type="button" class="btn btn-primary" @click="eliminarCepa">Eliminar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import FieldDefs from "./columnas-cepas-hongos";
export default {
  data() {
    return {
      refrescarTabla: false,
      idCepaEliminar: "",
      fields: FieldDefs,
      sortOrder: [
        {
          field: "id",
          direction: "asc"
        }
      ]
    };
  },
  methods: {
    toastr(titulo, msg, tipo, time) {
      this.$toastr.Add({
        title: titulo,
        msg: msg,
        position: "toast-top-right",
        type: tipo,
        timeout: time,
        progressbar: true,
        //progressBarValue:"", // if you want set progressbar value
        style: {},
        classNames: ["animated", "zoomInUp"],
        closeOnHover: true,
        clickClose: true,
        onCreated: () => {},
        onClicked: () => {},
        onClosed: () => {},
        onMouseOver: () => {},
        onMouseOut: () => {}
      });
    },
    cambiarVariable() {
      this.refrescarTabla = false;
    },
    eliminarCepa() {
      axios
        .delete(`/cepas/eliminar/${this.idCepaEliminar}`)
        .then(res => {
          if (res.data === "negativo") {
            this.toastr(
              "Precaución!!",
              "La cepa cuenta con caracteristicas registradas, favor eliminarlas",
              "warning",
              8000
            );
          } else {
            this.refrescarTabla = true;
            this.toastr(
              "Eliminar Cepa",
              "Cepa eliminada con exito!!",
              "success",
              5000
            );
          }
          this.$modal.hide("my_modal_eliminarCepa");
        })
        .catch(error => {
          if (error.response) {
            //console.log(error.response.data);
          }
          this.toastr("Error!!!", "", "error", 4000);
        });
    },
    beforeOpen(data) {
      this.idCepaEliminar = data.params.id;
    }
  },
  computed: {},
  mounted() {
    this.$emit("rutaHijo", window.location.pathname);
  }
};
</script>

<style scoped>
</style>