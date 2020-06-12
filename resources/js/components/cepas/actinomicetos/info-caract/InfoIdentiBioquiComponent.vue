<template>
  <div>
    <div class="tabs-animation">
      <div class="mb-3 card">
        <div class="card-header-tab card-header">
          <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
            <i class="header-icon lnr-charts icon-gradient bg-happy-green"></i>
            Identificación Bioquímica
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
          <form-identi-bioqui-actinomiceto
            :modificarInfo="modificarForm"
            :info="getIdentiBioqui"
            @agregar="agregar"
            @editar="editar"
            @cambiarVariable="cambiarVariable"
          ></form-identi-bioqui-actinomiceto>
        </template>
        <template v-else>
          <div class="text-center">
            <h5 class="mt-5 mb-5">
              <span class="pr-1">
                <b class="text-success">AÚN NO SE HAN AGREGADO LA IDENTIFICACIÓN</b>
              </span>
            </h5>
          </div>
        </template>
      </div>
    </div>

    <modal name="my_modal" :width="400" :height="200">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Identificación Bioquímica</h5>
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

export default {
  data() {
    return {
      mostrarBtnAgregar: true,
      mostrarForm: false,
      modificarForm: false
    };
  },
  methods: {
    ...vuex.mapActions("cepa", [
      "accionAgregarCaract",
      "accionEditarCaract",
      "accionEliminarCaract"
    ]),
    toastr(titulo, msg, tipo) {
      this.$toastr.Add({
        title: titulo,
        msg: msg,
        position: "toast-top-right",
        type: tipo,
        timeout: 5000,
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
    agregar(data) {
      this.accionAgregarCaract({ tipo: "identi_bioqui", data: data });
    },
    editar(data) {
      this.accionEditarCaract({ tipo: "identi_bioqui", data: data });
      this.modificarForm = true;
    },
    eliminar() {
      axios
        .delete(`/cepas/actinomiceto/identi-bioqui/${this.getIdentiBioqui.id}`)
        .then(res => {
          this.mostrarBtnAgregar = true;
          this.mostrarForm = false;
          this.$modal.hide("my_modal");
          this.accionEliminarCaract({ tipo: "identi_bioqui", data: res.data });
          this.toastr(
            "Eliminar Característica",
            "Identificación Bioquímica eliminadas con exito!!",
            "success"
          );
        })
        .catch(error => {
          if (error.response) {
            this.toastr("Error!!", "", "error");
            // console.log(error.response.data);
          }
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
    }
  },
  computed: {
    ...vuex.mapGetters("cepa", ["getIdentiBioqui"]),
    mostrarBtnEliminar() {
      if (this.getIdentiBioqui) {
        return true;
      } else {
        return false;
      }
    },
    mostrarBtnCancelar() {
      if (this.mostrarForm && !this.getIdentiBioqui) {
        return true;
      } else {
        return false;
      }
    },
    mostrarBtnAgregarComputed() {
      return this.mostrarBtnAgregar;
    }
  },
  mounted() {
    if (this.getIdentiBioqui) {
      this.mostrarBtnAgregar = false;
      this.mostrarForm = true;
    }
  }
};
</script>
