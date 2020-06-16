<template>
  <div>
    <template v-if="getQuienesSomos">
      <div class="main-card mb-3 card">
        <div class="card-header-tab card-header">
          <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
            <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
            Tabla Dinámica Objetivos
          </div>
          <div class="btn-actions-pane-right actions-icon-btn">
            <button
              @click="$modal.show('modal_agregar_editar_objetivo',{id:0})"
              class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm"
            >Agregar</button>
          </div>
        </div>
        <div class="card-body">
          <template v-if="getQuienesSomos.objetivos!=''">
            <my-vuetable
              api-url="/info-panel/quienes-somos/objetivos"
              :fields="fields"
              :sort-order="sortOrder"
              :nameGet="'objetivos'"
              @cambiarVariable="cambiarVariable"
              :refrescarTabla="refrescarTabla"
            ></my-vuetable>
          </template>
          <template v-else>
            <div class="text-center">
              <h5 class="mt-5 mb-5">
                <span class="pr-1">
                  <b class="text-success">AÚN NO SE HAN AGREGADO OBJETIVOS</b>
                </span>
              </h5>
            </div>
          </template>
        </div>
      </div>
    </template>
    <modal
      name="modal_agregar_editar_objetivo"
      classes="my_modal"
      :width="400"
      :height="450"
      @before-open="beforeOpenAgregarEditar"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">{{nombreModal}}</h5>
          <button type="button" class="close" @click="$modal.hide('modal_agregar_editar_objetivo')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="position-relative form-group">
            <label for="texto">Objetivo</label>
            <textarea
              name="texto"
              id="texto"
              :class="['form-control', error? 'is-invalid':'']"
              v-model="texto"
            ></textarea>
            <em v-if="error" class="error invalid-feedback">{{error}}</em>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('modal_agregar_editar_objetivo')"
          >Cancelar</button>
          <button type="button" class="btn btn-success" @click="agregarEditarObjetivo">{{nomBtn}}</button>
        </div>
      </div>
    </modal>
    <modal
      name="modal_eliminar_objetivo"
      classes="my_modal"
      :width="400"
      :height="300"
      @before-open="beforeOpenEliminar"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Objetivo</h5>
          <button type="button" class="close" @click="$modal.hide('modal_eliminar_objetivo')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Esta segura/o de eliminar el Objetivo?.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('modal_eliminar_objetivo')"
          >Cancelar</button>
          <button type="button" class="btn btn-success" @click="eliminarObjetivo">Eliminar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import FieldDefs from "./columnas";
import vuex from "vuex";
export default {
  data() {
    return {
      idCepaEliminar: "",
      fields: FieldDefs,
      sortOrder: [
        {
          field: "texto",
          direction: "asc"
        }
      ],
      refrescarTabla: false,
      texto: "",
      idObjetivo: "",
      nombreModal: "",
      nomBtn: "",
      error: ""
    };
  },
  computed: {
    ...vuex.mapGetters("quienes_somos", ["getQuienesSomos"])
  },
  methods: {
    ...vuex.mapActions("quienes_somos", ["accionObjetivo"]),
    cambiarVariable() {
      this.refrescarTabla = false;
    },
    beforeOpenAgregarEditar(data) {
      this.error = "";
      if (data.params.id === 0) {
        this.texto = "";
        this.idObjetivo = null;
        this.nombreModal = "Agregar Objetivo";
        this.nomBtn = "Agregar";
      } else {
        this.texto = data.params.texto;
        this.idObjetivo = data.params.id;
        this.nombreModal = "Editar Objetivo";
        this.nomBtn = "Editar";
      }
    },
    agregarEditarObjetivo() {
      if (!this.idObjetivo) {
        axios
          .post("/quienes-somos/objetivo/agregar", { texto: this.texto })
          .then(res => {
            this.accionObjetivo({
              data: res.data,
              tipo: "agregar"
            });
            this.$modal.hide("modal_agregar_editar_objetivo");
            this.toastr(
              "Agregar Objetivo",
              "Objetivo agregado con exito!!",
              "success"
            );
            this.refrescarTabla = true;
          })
          .catch(error => {
            if (error.response) {
              this.error = error.response.data.errors.texto[0];
            }
            this.toastr("Error!!!!", "", "error");
          });
      } else {
        axios
          .put(`/quienes-somos/objetivo/${this.idObjetivo}`, {
            texto: this.texto
          })
          .then(res => {
            this.accionObjetivo({
              data: res.data,
              tipo: "editar"
            });
            this.$modal.hide("modal_agregar_editar_objetivo");
            this.toastr(
              "Editar Objetivo",
              "Objetivo editado con exito!!",
              "success"
            );
            this.refrescarTabla = true;
          })
          .catch(error => {
            if (error.response) {
              this.error = error.response.data;
            }
            this.toastr("Error!!!!", "", "error");
          });
      }
    },
    beforeOpenEliminar(data) {
      this.idObjetivo = data.params.id;
    },
    eliminarObjetivo() {
      axios
        .delete(`/quienes-somos/objetivo/${this.idObjetivo}`, {
          texto: this.texto
        })
        .then(res => {
          this.accionObjetivo({
            data: res.data,
            tipo: "eliminar"
          });
          this.$modal.hide("modal_eliminar_objetivo");
          this.toastr(
            "Eliminar Objetivo",
            "Objetivo eliminado con exito!!",
            "success"
          );
          this.refrescarTabla = true;
        })
        .catch(error => {
          this.toastr("Error!!!!", "", "error");
        });
    },
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
    }
  },
  created() {
    this.$emit("rutaHijo", window.location.pathname);
  }
};
</script>