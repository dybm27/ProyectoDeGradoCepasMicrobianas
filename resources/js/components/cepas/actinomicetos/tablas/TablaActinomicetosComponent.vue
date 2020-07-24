<template>
  <div>
    <div class="main-card mb-3 card">
      <div class="card-header-tab card-header">
        <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
          Tabla Dinamica Cepas Microbianas - Actinomicetos
        </div>
        <div class="btn-actions-pane-right actions-icon-btn"></div>
      </div>
      <div class="card-body">
        <!--  detail-row-component="my-detail-row" -->
        <MyVuetable
          api-url="/info-panel/cepas-actinomicetos"
          :fields="fields"
          :sort-order="sortOrder"
          detail-row-component="my-detail-row-h-l-a"
          @cambiarVariable="cambiarVariable"
          :refrescarTabla="refrescarTabla"
          :nameGet="'actinomicetos'"
        ></MyVuetable>
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
          <button
            type="button"
            class="btn btn-success"
            :disabled="bloquearBtnModal"
            @click="eliminarCepa"
          >Eliminar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import FieldDefs from "./columnas-cepas-actinomicetos";
import Toastr from "../../../../mixins/toastr";
import MyVuetable from "../../../vuetable/MyVuetableComponent.vue";
export default {
  components: { MyVuetable },
  data() {
    return {
      refrescarTabla: false,
      idCepaEliminar: "",
      fields: FieldDefs,
      sortOrder: [
        {
          field: "codigo",
          direction: "asc",
        },
      ],
      bloquearBtnModal: false,
    };
  },
  mixins: [Toastr],
  methods: {
    cambiarVariable() {
      this.refrescarTabla = false;
    },
    eliminarCepa() {
      this.bloquearBtnModal = true;
      axios
        .delete(`/cepas/eliminar/${this.idCepaEliminar}`)
        .then((res) => {
          this.bloquearBtnModal = false;
          if (res.request.responseURL === process.env.MIX_LOGIN) {
            this.$ls.set(
              "mensajeLogin",
              "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
            );
            window.location.href = "/";
          }
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
        .catch((error) => {
          this.bloquearBtnModal = false;
          this.toastr("Error!!", "", "error");
        });
    },
    beforeOpen(data) {
      this.idCepaEliminar = data.params.id;
    },
  },
  computed: {},
  mounted() {
    this.$emit("rutaHijo", window.location.pathname);
  },
};
</script>

<style scoped>
</style>