<template >
  <div>
    <modal
      name="modal_agregar_tipo_bacteria"
      classes="my_modal"
      :width="450"
      :height="450"
      @before-open="beforeOpenAgregar"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Agregar {{primeraMayus(modal.tipo)}}</h5>
          <button type="button" class="close" @click="$modal.hide('modal_agregar_tipo_bacteria')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="position-relative form-group">
            <label for="nombre" class>Nombre</label>
            <input
              name="nombre"
              id="nombre"
              placeholder="..."
              type="text"
              class="form-control"
              :class="['form-control', validarNombre||errors? 'is-invalid':'']"
              v-model="modal.nombre"
            />
            <em
              v-if="validarNombre||errors"
              class="error invalid-feedback"
            >{{errors.nombre?errors.nombre[0]:errors}}</em>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('modal_agregar_tipo_bacteria')"
          >Cancelar</button>
          <button
            type="button"
            class="btn btn-primary"
            @click="agregarTipo"
            :disabled="validarNombre"
          >Agregar</button>
        </div>
      </div>
    </modal>
    <modal
      name="modal_editar_tipo_bacteria"
      classes="my_modal"
      :width="400"
      :height="450"
      @before-open="beforeOpenEditar"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Editar {{primeraMayus(modal.tipo)}}</h5>
          <button type="button" class="close" @click="$modal.hide('modal_editar_tipo_bacteria')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="position-relative form-group">
            <label for="nombre">Nombre</label>
            <input
              name="nombre"
              id="nombre"
              placeholder="..."
              type="text"
              :class="['form-control', validarNombre||errors? 'is-invalid':'']"
              v-model="modal.nombre"
            />
            <em
              v-if="validarNombre||errors"
              class="error invalid-feedback"
            >{{errors.nombre?errors.nombre[0]:errors}}</em>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('modal_editar_tipo_bacteria')"
          >Cancelar</button>
          <button
            type="button"
            class="btn btn-primary"
            @click="editarTipo"
            :disabled="validarNombre"
          >Editar</button>
        </div>
      </div>
    </modal>
    <modal
      name="modal_eliminar_tipo_bacteria"
      classes="my_modal"
      :width="400"
      :height="300"
      @before-open="beforeOpenEliminar"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Eliminar {{primeraMayus(modal.tipo)}}</h5>
          <button type="button" class="close" @click="$modal.hide('modal_eliminar_tipo_bacteria')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Esta segura/o de eliminar el/la {{primeraMayus(modal.tipo)}}?.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('modal_eliminar_tipo_bacteria')"
          >Cancelar</button>
          <button type="button" class="btn btn-primary" @click="eliminarTipo">Eliminar</button>
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
      idTipoEditar: "",
      idTipoEliminar: "",
      modal: { nombre: "", tipo: "" },
      errors: ""
    };
  },
  methods: {
    ...vuex.mapActions([
      "accionAgregarTipoCaractBacteria",
      "accionEditarTipoCaractBacteria",
      "accionEliminarTipoCaractBacteria"
    ]),
    beforeOpenAgregar(data) {
      this.modal.nombre = "";
      this.modal.tipo = data.params.tipo;
    },
    agregarTipo() {
      axios
        .post("/info-caract-bacterias/agregar", this.modal)
        .then(res => {
          this.accionAgregarTipoCaractBacteria({
            info: res.data,
            tipo: this.modal.tipo
          });
          this.$emit("accionModal-bacteria", {
            accion: "agregar",
            tipo: this.modal.tipo
          });
          this.$modal.hide("modal_agregar_tipo_bacteria");
          this.toastr(
            `Agregar ${this.primeraMayus(this.modal.tipo)}`,
            `${this.primeraMayus(this.modal.tipo)} agregado/a con exito`,
            "success"
          );
        })
        .catch(error => {
          if (error.response) {
            this.errors = error.response.data.errors;
          }
          this.toastr("Error!!!!", "", "error");
        });
    },
    beforeOpenEditar(data) {
      this.idTipoEditar = data.params.id;
      this.modal.nombre = data.params.nombre;
      this.modal.tipo = data.params.tipo;
    },
    editarTipo() {
      axios
        .put(`/info-caract-bacterias/editar/${this.idTipoEditar}`, this.modal)
        .then(res => {
          this.accionEditarTipoCaractBacteria({
            info: res.data,
            tipo: this.modal.tipo
          });
          this.$emit("accionModal-bacteria", {
            accion: "editar",
            tipo: this.modal.tipo
          });
          this.toastr(
            `Editar ${this.primeraMayus(this.modal.tipo)}`,
            `${this.primeraMayus(this.modal.tipo)} editado/a con exito!!`,
            "success",
            5000
          );
          this.$modal.hide("modal_editar_tipo_bacteria");
        })
        .catch(error => {
          if (error.response) {
            this.errors = error.response.data;
          }
          this.toastr("Error!!!", "", "error", 4000);
        });
    },
    beforeOpenEliminar(data) {
      this.idTipoEliminar = data.params.id;
      this.modal.tipo = data.params.tipo;
    },
    eliminarTipo() {
      axios
        .delete(`/info-caract-bacterias/eliminar/${this.idTipoEliminar}`, {
          data: this.modal
        })
        .then(res => {
          this.accionEliminarTipoCaractBacteria({
            info: res.data,
            tipo: this.modal.tipo
          });
          this.$emit("accionModal-bacteria", {
            accion: "eliminar",
            tipo: this.modal.tipo
          });
          this.toastr(
            `Eliminar ${this.primeraMayus(this.modal.tipo)}`,
            `${this.primeraMayus(this.modal.tipo)} eliminado/a con exito!!`,
            "success",
            5000
          );
          this.$modal.hide("modal_eliminar_tipo_bacteria");
        })
        .catch(error => {
          if (error.response) {
            //console.log(error.response.data);
          }
          this.toastr("Error!!!", "", "error", 4000);
        });
    },
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
    primeraMayus(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
  computed: {
    validarNombre() {
      // solo numero /^([0-9])*$/ /^[A-Za-z\s]+$/
      let letters = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/;
      if (this.modal.nombre) {
        if (!letters.test(this.modal.nombre)) {
          this.errors = "Solo se admiten letras.";
          return true;
        } else {
          this.errors = "";
          return false;
        }
      } else {
        this.errors = "Este campo es obligatorio";
        return true;
      }
    }
  }
};
</script>