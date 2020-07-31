<template>
  <div>
    <div class="tabs-animation">
      <div class="mb-3 card">
        <div class="card-header-tab card-header">
          <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
            <i class="header-icon lnr-charts icon-gradient bg-happy-green"></i>
            Características Microscópicas
          </div>
          <div class="btn-actions-pane-right text-capitalize">
            <button
              v-show="mostrarBtnCancelar"
              @click="cancelar"
              class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm"
            >Cancelar</button>
            <button
              v-show="mostrarBtnEliminar"
              @click="$modal.show('eliminar_caract_micro')"
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
          <FormCaratMicro
            :modificarInfo="modificarForm"
            :info="getCaractMicro"
            @agregar="agregar"
            @editar="editar"
            @cambiarVariable="cambiarVariable"
          ></FormCaratMicro>
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

    <modal name="eliminar_caract_micro" :width="400" :height="200">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Característica Microscópica</h5>
          <button type="button" class="close" @click="$modal.hide('eliminar_caract_micro')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Esta segura/o de eliminar la Característica?.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('eliminar_caract_micro')"
          >Cancelar</button>
          <button type="button" class="btn btn-success" @click="eliminar">Eliminar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import vuex from "vuex";

import Toastr from "../../../../mixins/toastr";
import FormCaratMicro from "../forms-caract/FormCaractMicroComponent.vue";
export default {
  components: { FormCaratMicro },
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
      this.accionAgregarCaract({ tipo: "micro", data: data });
    },
    editar(data) {
      this.accionEditarCaract({ tipo: "micro", data: data });
      this.modificarForm = true;
    },
    eliminar() {
      axios
        .delete(`/cepas/actinomiceto/caract-micro/${this.getCaractMicro.id}`)
        .then((res) => {
          if (res.request.responseURL === process.env.MIX_LOGIN) {
            localStorage.setItem(
              "mensajeLogin",
              "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
            );
            window.location.href = "/";
          } else {
            this.mostrarBtnAgregar = true;
            this.mostrarForm = false;
            this.$modal.hide("eliminar_caract_micro");
            this.accionEliminarCaract({ tipo: "micro", data: res.data });
            this.toastr(
              "Eliminar Característica",
              "Característica Microscópica eliminada con exito!!",
              "success"
            );
          }
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
    ...vuex.mapGetters("cepa", ["getCaractMicro"]),
    mostrarBtnEliminar() {
      if (this.getCaractMicro) {
        return true;
      } else {
        return false;
      }
    },
    mostrarBtnCancelar() {
      if (this.mostrarForm && !this.getCaractMicro) {
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
    if (this.getCaractMicro) {
      this.mostrarBtnAgregar = false;
      this.mostrarForm = true;
    }
  },
};
</script>
