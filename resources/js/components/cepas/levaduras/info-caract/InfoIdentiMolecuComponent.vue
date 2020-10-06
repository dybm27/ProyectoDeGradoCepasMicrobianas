<template>
  <div>
    <div class="tabs-animation">
      <div class="mb-3 card">
        <div class="card-header-tab card-header">
          <div
            class="card-header-title font-size-lg text-capitalize font-weight-normal"
          >
            <i class="header-icon lnr-charts icon-gradient bg-happy-green"></i>
            Identificación Molecular
          </div>
          <div class="btn-actions-pane-right text-capitalize">
            <button
              v-show="mostrarBtnCancelar"
              @click="cancelar"
              class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm"
            >
              Cancelar
            </button>
            <button
              dusk="btn-eliminar"
              v-show="mostrarBtnEliminar"
              @click="$modal.show('modal_eliminar_caract')"
              class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm"
            >
              Eliminar Identificación
            </button>
            <button
              dusk="btn-agregar"
              v-show="mostrarBtnAgregarComputed"
              @click="btnAgregar"
              class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm"
            >
              Agregar Identificación
            </button>
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
                <b class="text-success"
                  >AÚN NO SE HA AGREGADO LA IDENTIFICACIÓN</b
                >
              </span>
            </h5>
          </div>
        </template>
      </div>
    </div>
    <ModalEliminar
      @eliminar="eliminar"
      :tipo="'Identificación'"
      :tipoCaract="'Identificación Molecular'"
      :caract="getIdentiMolecu"
      :url="'levadura/identi-molecu'"
    />
  </div>
</template>

<script>
import vuex from "vuex";
import FormIdentiMolecu from "../forms-caract/FormIdentiMolecuComponent.vue";
import ModalEliminar from "../../ModalEliminarCaractComponent.vue";
export default {
  components: { FormIdentiMolecu, ModalEliminar },
  data() {
    return {
      mostrarBtnAgregar: true,
      mostrarForm: false,
      modificarForm: false,
    };
  },
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
    eliminar(data) {
      this.accionEliminarCaract({ tipo: "identi", data: data });
      this.mostrarBtnAgregar = true;
      this.mostrarForm = false;
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
