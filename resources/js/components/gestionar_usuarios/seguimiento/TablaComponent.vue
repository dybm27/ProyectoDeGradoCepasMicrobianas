<template>
  <div class="tabs-animation">
    <div class="main-card mb-3 card">
      <div class="card-header-tab card-header">
        <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
          Tabla Seguimientos
        </div>
        <div class="btn-actions-pane-right actions-icon-btn">
          <!--
            <button
            @click="$modal.show('modal_eliminar_datos')"
            class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm"
            v-tooltip.left="'Eliminar datos antiguos'"
          >Eliminar datos</button>
          -->
        </div>
      </div>
      <div class="card-body">
        <MyVuetable
          ref="tabla"
          api-url="/info-panel/seguimientos"
          :fields="fields"
          :sort-order="sortOrder"
          :nameGet="'seguimientos'"
        />
      </div>
    </div>
    <modal name="modal_eliminar_datos" classes="my_modal" :width="400" :height="300">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Datos</h5>
          <button type="button" class="close" @click="$modal.hide('modal_eliminar_datos')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Esta segura/o de eliminar datos de la tabla?.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('modal_eliminar_datos')"
          >Cancelar</button>
          <button
            type="button"
            class="btn btn-success"
            :disabled="bloquearBtnModal"
          >Eliminar</button>
        </div>
      </div>
    </modal>
  </div>
</template>
<script>
import FieldDefs from "./columnas-seguimiento";
import MyVuetable from "../../vuetable/MyVuetableComponent.vue";
import Toastr from "../../../mixins/toastr";
export default {
  components: { MyVuetable },
  data() {
    return {
      fields: FieldDefs,
      sortOrder: [
        {
          field: "nombre_responsable",
          direction: "asc",
        },
      ],
      bloquearBtnModal: false,
    };
  },
  mixins: [Toastr],
  methods: {
    actualizarTabla() {
      if (this.$refs.tabla) {
        this.$refs.tabla.refreshDatos();
      }
    } /*
    eliminarDatos() {
      //let fecha = new Date();
      //fecha.setDate(fecha.getDate() - 30);
      this.bloquearBtnModal = true;
      axios
        .delete(`/seguimiento/eliminar-datos`)
        .then((res) => {
          this.bloquearBtnModal = false;
          this.toastr(
            "Eliminar Datos!!",
            "Datos eliminados con exito",
            "success"
          );
          this.actualizarTabla();
          this.$modal.hide("modal_eliminar_datos");
        })
        .catch((error) => {
          if (error.response.status === 405) {
            window.location.href = "/";
          }
          this.bloquearBtnModal = false;
          this.toastr("Error!!!", "", "error");
        });
    },*/,
  },
  created() {
    this.$emit("rutaHijo", window.location.pathname);
  },
};
</script>