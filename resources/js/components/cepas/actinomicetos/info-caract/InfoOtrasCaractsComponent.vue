<template>
  <div>
    <div class="tabs-animation">
      <div class="mb-3 card">
        <div class="card-header-tab card-header">
          <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
            <i class="header-icon lnr-charts icon-gradient bg-happy-green"></i>
            Otras Características de Interés
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
            >Eliminar Característica</button>
            <button
              v-show="mostrarBtnAgregarComputed"
              @click="btnAgregar"
              class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm"
            >Agregar Característica</button>
          </div>
        </div>
        <template v-if="mostrarForm">
          <FormOtrasCaract
            :modificarInfo="modificarForm"
            :info="getOtrasCaract"
            @agregar="agregar"
            @editar="editar"
            @cambiarVariable="cambiarVariable"
          ></FormOtrasCaract>
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
      :tipo="'Características'"
      :tipoCaract="'Otras Características de Interés'"
      :caract="getOtrasCaract"
      :url="'actinomiceto/otras-caract'"
    />
  </div>
</template>

<script>
import vuex from "vuex";
import FormOtrasCaract from "../forms-caract/FormOtrasCaractComponent";
import ModalEliminar from "../../ModalEliminarCaractComponent.vue";
export default {
  components: { FormOtrasCaract, ModalEliminar },
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
      this.accionAgregarCaract({ tipo: "otras", data: data });
    },
    editar(data) {
      this.accionEditarCaract({ tipo: "otras", data: data });
      this.modificarForm = true;
    },
    eliminar(data) {
      this.accionEliminarCaract({ tipo: "otras", data: data });
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
    ...vuex.mapGetters("cepa", ["getOtrasCaract"]),
    mostrarBtnEliminar() {
      if (this.getOtrasCaract) {
        return true;
      } else {
        return false;
      }
    },
    mostrarBtnCancelar() {
      if (this.mostrarForm && !this.getOtrasCaract) {
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
    if (this.getOtrasCaract) {
      this.mostrarBtnAgregar = false;
      this.mostrarForm = true;
    }
  },
};
</script>
