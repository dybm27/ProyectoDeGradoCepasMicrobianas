<template >
  <div>
    <modal
      name="modal_agregar_tipo_hongo"
      classes="my_modal"
      :width="450"
      :height="450"
      @before-open="beforeOpenAgregar"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Agregar {{primeraMayus(modal.tipo)}}</h5>
          <button type="button" class="close" @click="$modal.hide('modal_agregar_tipo_hongo')">
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
            @click="$modal.hide('modal_agregar_tipo_hongo')"
          >Cancelar</button>
          <button
            type="button"
            class="btn btn-success"
            @click="agregarTipo"
            :disabled="validarBtn||bloquearBtnModal"
          >Agregar</button>
        </div>
      </div>
    </modal>
    <modal
      name="modal_editar_tipo_hongo"
      classes="my_modal"
      :width="400"
      :height="450"
      @before-open="beforeOpenEditar"
      @closed="closeEditar"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Editar {{primeraMayus(modal.tipo)}}</h5>
          <button type="button" class="close" @click="$modal.hide('modal_editar_tipo_hongo')">
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
            @click="$modal.hide('modal_editar_tipo_hongo')"
          >Cancelar</button>
          <button
            type="button"
            class="btn btn-success"
            @click="editarTipo"
            :disabled="validarBtn||bloquearBtnModal"
          >Editar</button>
        </div>
      </div>
    </modal>
    <modal
      name="modal_eliminar_tipo_hongo"
      classes="my_modal"
      :width="400"
      :height="300"
      @before-open="beforeOpenEliminar"
      @closed="closeEliminar"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Eliminar {{primeraMayus(modal.tipo)}}</h5>
          <button type="button" class="close" @click="$modal.hide('modal_eliminar_tipo_hongo')">
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
            @click="$modal.hide('modal_eliminar_tipo_hongo')"
          >Cancelar</button>
          <button
            type="button"
            class="btn btn-success"
            :disabled="bloquearBtnModal"
            @click="eliminarTipo"
          >Eliminar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import vuex from "vuex";
import Toastr from "../../../../mixins/toastr";
import websocketsModalOtraInfo from "../../../../mixins/websocketsModalOtraInfo";
export default {
  data() {
    return {
      id: "",
      modal: { nombre: "", tipo: "" },
      errors: "",
      bloquearBtnModal: false,
    };
  },
  mixins: [Toastr, websocketsModalOtraInfo("HongosInfo")],
  methods: {
    ...vuex.mapActions("info_caract", [
      "accionAgregarTipoCaractHongo",
      "accionEditarTipoCaractHongo",
      "accionEliminarTipoCaractHongo",
    ]),
    beforeOpenAgregar(data) {
      this.modal.nombre = "";
      this.modal.tipo = data.params.tipo;
    },
    agregarTipo() {
      this.bloquearBtnModal = true;
      axios
        .post("/info-caract-hongos/agregar", this.modal)
        .then((res) => {
          if (res.request.responseURL === process.env.MIX_LOGIN) {
            localStorage.setItem(
              "mensajeLogin",
              "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
            );
            window.location.href = "/";
          } else {
            this.bloquearBtnModal = false;
            this.accionAgregarTipoCaractHongo({
              info: res.data,
              tipo: this.modal.tipo,
            });
            this.$events.fire("actualizartabla" + this.modal.tipo);
            this.$modal.hide("modal_agregar_tipo_hongo");
            this.toastr(
              `Agregar ${this.primeraMayus(this.modal.tipo)}`,
              `${this.primeraMayus(this.modal.tipo)} agregado/a con exito`,
              "success"
            );
          }
        })
        .catch((error) => {
          this.bloquearBtnModal = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
          this.toastr("Error!!!!", "", "error");
        });
    },
    beforeOpenEditar(data) {
      this.id = data.params.id;
      this.modal.nombre = data.params.nombre;
      this.modal.tipo = data.params.tipo;
    },
    editarTipo() {
      this.bloquearBtnModal = true;
      axios
        .put(`/info-caract-hongos/editar/${this.id}`, this.modal)
        .then((res) => {
          if (res.request.responseURL === process.env.MIX_LOGIN) {
            localStorage.setItem(
              "mensajeLogin",
              "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
            );
            window.location.href = "/";
          } else {
            this.bloquearBtnModal = false;
            this.accionEditarTipoCaractHongo({
              info: res.data,
              tipo: this.modal.tipo,
            });
            this.$events.fire("actualizartabla" + this.modal.tipo);
            this.toastr(
              `Editar ${this.primeraMayus(this.modal.tipo)}`,
              `${this.primeraMayus(this.modal.tipo)} editado/a con exito!!`,
              "success",
              5000
            );
            this.$modal.hide("modal_editar_tipo_hongo");
          }
        })
        .catch((error) => {
          this.bloquearBtnModal = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
          this.toastr("Error!!!", "", "error", 4000);
        });
    },
    beforeOpenEliminar(data) {
      this.id = data.params.id;
      this.modal.tipo = data.params.tipo;
    },
    eliminarTipo() {
      this.bloquearBtnModal = true;
      axios
        .delete(`/info-caract-hongos/eliminar/${this.id}`, {
          data: this.modal,
        })
        .then((res) => {
          if (res.request.responseURL === process.env.MIX_LOGIN) {
            localStorage.setItem(
              "mensajeLogin",
              "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
            );
            window.location.href = "/";
          } else {
            this.bloquearBtnModal = false;
            if (res.data === "macro") {
              this.toastr(
                "Precaución!!",
                "El/La " +
                  this.modal.tipo +
                  " se encuentra vinculado/a a características macroscópicas, favor eliminarlas",
                "warning",
                8000
              );
            } else if (res.data === "micro") {
              this.toastr(
                "Precaución!!",
                "La " +
                  this.modal.tipo +
                  " se encuentra vinculada a características microscópicas, favor eliminarlas",
                "warning",
                8000
              );
            } else if (res.data === "metodo") {
              this.toastr(
                "Precaución!!",
                "El " +
                  this.modal.tipo +
                  " se encuentra vinculado a metodos de conservación, favor eliminarlos",
                "warning",
                8000
              );
            } else {
              this.accionEliminarTipoCaractHongo({
                info: res.data,
                tipo: this.modal.tipo,
              });
              this.$events.fire("actualizartabla" + this.modal.tipo);
              this.toastr(
                `Eliminar ${this.primeraMayus(this.modal.tipo)}`,
                `${this.primeraMayus(this.modal.tipo)} eliminado/a con exito!!`,
                "success",
                5000
              );
            }
            this.$modal.hide("modal_eliminar_tipo_hongo");
          }
        })
        .catch((error) => {
          this.bloquearBtnModal = false;
          this.toastr("Error!!!", "", "error", 4000);
        });
    },
    primeraMayus(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
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
      }
    },
    validarBtn() {
      if (this.validarNombre || !this.modal.nombre) {
        return true;
      }
      return false;
    },
  },
};
</script>