<template>
  <div>
    <div class="tabs-animation">
      <div class="mb-3 card">
        <div class="card-header-tab card-header">
          <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
            <i class="header-icon lnr-charts icon-gradient bg-happy-green"></i>
            Identificación Molecular
          </div>
          <div class="btn-actions-pane-right text-capitalize">
            <button
              v-show="mostrarBtnCancelar"
              @click="cancelar"
              class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm"
            >Cancelar</button>
            <button
              v-show="mostrarBtnEliminar"
              @click="$modal.show('my_modal')"
              class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm"
            >Eliminar Identificación</button>
            <button
              v-show="mostrarBtnAgregarComputed"
              @click="btnAgregar"
              class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm"
            >Agregar Identificación</button>
          </div>
        </div>
        <template v-if="mostrarForm">
          <FormIdentiMolecu
            :modificarInfo="modificarForm"
            :info="getIdentiMolecu"
            @agregar="agregar"
            @editar="editar"
            @cambiarVariable="cambiarVariable"
          ></FormIdentiMolecu>
        </template>
        <template v-else>
          <div class="text-center">
            <h5 class="mt-5 mb-5">
              <span class="pr-1">
                <b class="text-success">AÚN NO SE HA AGREGADO LA IDENTIFICACIÓN</b>
              </span>
            </h5>
          </div>
        </template>
      </div>
    </div>

    <modal name="my_modal" classes="my_modal" :width="400" :height="300">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Identificación Molecular</h5>
          <button type="button" class="close" @click="$modal.hide('my_modal')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Esta segura/o de eliminar la Identificación?.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="$modal.hide('my_modal')">Cancelar</button>
          <button type="button" class="btn btn-success" @click="eliminar">Eliminar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import vuex from "vuex";
import Toastr from "../../../../mixins/toastr";
import FormIdentiMolecu from "../forms-caract/FormIdentiMolecuComponent.vue";
export default {
  components: { FormIdentiMolecu },
  data() {
    return {
      mostrarBtnAgregar: true,
      mostrarForm: false,
      modificarForm: false,
    };
  },
  mixins: [Toastr],
  methods: {
    ...vuex.mapActions("cepa", [
      "accionAgregarCaract",
      "accionEditarCaract",
      "accionEliminarCaract",
    ]),
    agregar(data) {
      this.accionAgregarCaract({ tipo: "identi", data: data });
      this.modificarForm = true;
    },
    editar(data) {
      this.accionEditarCaract({ tipo: "identi", data: data });
      this.modificarForm = true;
    },
    eliminar() {
      axios
        .delete(`/cepas/levadura/identi-molecu/${this.getIdentiMolecu.id}`)
        .then((res) => {
          if (res.request.responseURL === process.env.MIX_LOGIN) {
            this.$ls.set(
              "mensajeLogin",
              "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
            );
            window.location.href = "/";
          }
          this.mostrarBtnAgregar = true;
          this.mostrarForm = false;
          this.$modal.hide("my_modal");
          this.accionEliminarCaract({ tipo: "identi", data: res.data });
          this.toastr(
            "Eliminar Identificación",
            "Identificación Molecular eliminada con exito!!",
            "success"
          );
        })
        .catch((error) => {
          this.toastr("Error!!", "", "error");
        });
    },
    cambiarVariable() {
      this.modificarForm = false;
    },
    btnAgregar() {
      this.mostrarForm = true;
      this.mostrarBtnAgregar = false;
    },
    cancelar() {
      this.mostrarForm = false;
      this.mostrarBtnAgregar = true;
    },
  },
  computed: {
    ...vuex.mapGetters("cepa", ["getIdentiMolecu"]),
    mostrarBtnEliminar() {
      if (this.getIdentiMolecu) {
        return true;
      } else {
        return false;
      }
    },
    mostrarBtnCancelar() {
      if (this.mostrarForm && !this.getIdentiMolecu) {
        return true;
      } else {
        return false;
      }
    },
    mostrarBtnAgregarComputed() {
      return this.mostrarBtnAgregar;
    },
  },
  mounted() {
    if (this.getIdentiMolecu) {
      this.mostrarBtnAgregar = false;
      this.mostrarForm = true;
    }
  },
};
</script>
