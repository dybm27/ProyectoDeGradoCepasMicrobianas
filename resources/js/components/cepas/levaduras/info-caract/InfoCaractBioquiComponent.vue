<template>
  <div>
    <div class="tabs-animation">
      <div class="mb-3 card">
        <div class="card-header-tab card-header">
          <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
            <i class="header-icon lnr-charts icon-gradient bg-happy-green"></i>
            Características Bioquímicas
          </div>
          <div class="btn-actions-pane-right text-capitalize">
            <button
              v-show="mostrarBtnCancelar"
              @click="cancelar"
              class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm"
            >Cancelar</button>
            <button
              v-show="mostrarBtnEliminar"
              @click="$modal.show('modal_eliminar_caract')"
              class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm"
            >Eliminar Características</button>
            <button
              v-show="mostrarBtnAgregarComputed"
              @click="btnAgregar"
              class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm"
            >Agregar Características</button>
          </div>
        </div>
        <template v-if="mostrarForm">
          <FormCaractBioqui
            :modificarInfo="modificarForm"
            :info="getCaractBioqui"
            @agregar="agregar"
            @editar="editar"
            @cambiarVariable="cambiarVariable"
          ></FormCaractBioqui>
        </template>
        <template v-else>
          <div class="text-center">
            <h5 class="mt-5 mb-5">
              <span class="pr-1">
                <b class="text-success">AÚN NO SE HAN AGREGADO LAS CARACTERÍSTICAS</b>
              </span>
            </h5>
          </div>
        </template>
      </div>
    </div>
    <ModalEliminar
      @eliminar="eliminar"
      :tipo="'Característica'"
      :tipoCaract="'Característica Bioquímica'"
      :caract="getCaractBioqui"
      :url="'levadura/caract-bioqui'"
    />
  </div>
</template>

<script>
import vuex from "vuex";
import FormCaractBioqui from "../forms-caract/FormCaractBioquiComponent.vue";
import ModalEliminar from "../../ModalEliminarCaractComponent.vue";
export default {
  components: { FormCaractBioqui, ModalEliminar },
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
      this.accionAgregarCaract({ tipo: "bioqui", data: data });
    },
    editar(data) {
      this.accionEditarCaract({ tipo: "bioqui", data: data });
      this.modificarForm = true;
    },
    eliminar(data) {
      this.accionEliminarCaract({ tipo: "bioqui", data: data });
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
    ...vuex.mapGetters("cepa", ["getCaractBioqui"]),
    mostrarBtnEliminar() {
      if (this.getCaractBioqui) {
        return true;
      } else {
        return false;
      }
    },
    mostrarBtnCancelar() {
      if (this.mostrarForm && !this.getCaractBioqui) {
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
    if (this.getCaractBioqui) {
      this.mostrarBtnAgregar = false;
      this.mostrarForm = true;
    }
  },
};
</script>
