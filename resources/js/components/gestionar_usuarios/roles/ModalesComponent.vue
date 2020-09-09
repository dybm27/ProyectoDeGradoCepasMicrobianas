<template >
  <div>
    <transition name="fade">
      <modal
        name="modal_agregar_rol"
        classes="my_modal"
        :maxWidth="450"
        :adaptive="true"
        height="auto"
        :scrollable="true"
        @before-open="beforeOpenAgregar"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Agregar Rol</h5>
            <button type="button" class="close" @click="$modal.hide('modal_agregar_rol')">
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
                :class="['form-control', validarNombre||errors? 'error-input-select':'']"
                v-model="modal.nombre"
              />
              <em
                v-if="validarNombre||errors"
                class="text-error-input"
              >{{errors?"Campo requerido.":mensajeValidarNombre}}</em>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="$modal.hide('modal_agregar_rol')"
            >Cancelar</button>
            <button
              type="button"
              class="btn btn-success"
              @click="agregarRol"
              :disabled="bloquearBtnModal"
            >Agregar</button>
          </div>
        </div>
      </modal>
    </transition>
    <transition name="fade">
      <modal
        name="modal_editar_rol"
        classes="my_modal"
        :maxWidth="400"
        :adaptive="true"
        height="auto"
        :scrollable="true"
        @before-open="beforeOpenEditar"
        @closed="closeEditar"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Editar Rol</h5>
            <button type="button" class="close" @click="$modal.hide('modal_editar_rol')">
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
                :class="['form-control', validarNombre||errors? 'error-input-select':'']"
                v-model="modal.nombre"
              />
              <em v-if="validarNombre" class="text-error-input">{{mensajeValidarNombre}}</em>
              <em v-if="errors" class="text-error-input">Campo requerido.</em>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="$modal.hide('modal_editar_rol')"
            >Cancelar</button>
            <button
              type="button"
              class="btn btn-success"
              @click="editarRol"
              :disabled="bloquearBtnModal"
            >Editar</button>
          </div>
        </div>
      </modal>
    </transition>
    <transition name="fade">
      <modal
        name="modal_eliminar_rol"
        classes="my_modal"
        :maxWidth="400"
        :adaptive="true"
        height="auto"
        :scrollable="true"
        @before-open="beforeOpenEliminar"
        @closed="closeEliminar"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Rol</h5>
            <button type="button" class="close" @click="$modal.hide('modal_eliminar_rol')">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Esta segura/o de eliminar el/la Rol?.</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="$modal.hide('modal_eliminar_rol')"
            >Cancelar</button>
            <button
              type="button"
              class="btn btn-success"
              :disabled="bloquearBtnModal"
              @click="eliminarRol"
            >Eliminar</button>
          </div>
        </div>
      </modal>
    </transition>
  </div>
</template>

<script>
import vuex from "vuex";
import Toastr from "../../../mixins/toastr";
import websocketsModalOtraInfo from "../../../mixins/websocketsModalOtraInfo";
export default {
  data() {
    return {
      id: "",
      modal: { nombre: "" },
      errors: false,
      bloquearBtnModal: false,
      mensajeValidarNombre: "",
    };
  },
  mixins: [Toastr],
  methods: {
    ...vuex.mapActions("usuarios", ["accionRol"]),
    beforeOpenAgregar(data) {
      this.errors = false;
      this.modal.nombre = "";
    },
    agregarRol() {
      if (this.modal.nombre === "") {
        this.errors = true;
      } else {
        this.bloquearBtnModal = true;
        if (!this.validarNombre) {
          axios
            .post("/rol/agregar", this.modal)
            .then((res) => {
              if (res.request.responseURL === process.env.MIX_LOGIN) {
                localStorage.setItem(
                  "mensajeLogin",
                  "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                );
                window.location.href = "/";
              } else {
                this.bloquearBtnModal = false;
                this.accionRol({ tipo: "agregar", data: res.data });
                this.$events.fire("actualizartablaRol");
                this.$modal.hide("modal_agregar_rol");
                this.toastr("Agregar Rol", "Rol agregado con exito", "success");
              }
            })
            .catch((error) => {
              if (
                error.response.status === 405 ||
                error.response.status === 401
              ) {
                localStorage.setItem(
                  "mensajeLogin",
                  "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                );
                window.location.href = "/";
              } else {
                this.bloquearBtnModal = false;
                this.toastr("Error!!!!", "", "error");
              }
            });
        } else {
          this.bloquearBtnModal = false;
          this.toastr("Error!!", "favor arregla el error", "error");
        }
      }
    },
    beforeOpenEditar(data) {
      this.errors = false;
      this.id = data.params.id;
      this.modal.nombre = data.params.nombre;
    },
    closeEditar() {
      window.Echo.private("desbloquearBtnsRol").whisper("desbloquearBtnsRol", {
        id: this.id,
      });
      this.$events.fire("eliminarMiBloqueoRol", {
        id: this.id,
      });
    },
    editarRol() {
      if (this.modal.nombre === "") {
        this.errors = true;
      } else {
        this.bloquearBtnModal = true;
        if (!this.validarNombre) {
          axios
            .put(`/rol/editar/${this.id}`, this.modal)
            .then((res) => {
              this.bloquearBtnModal = false;
              this.accionRol({ tipo: "editar", data: res.data });
              this.$events.fire("actualizartablaRol");
              this.toastr("Editar Rol", "Rol editado con exito!!", "success");
              this.$modal.hide("modal_editar_rol");
            })
            .catch((error) => {
              if (
                error.response.status === 405 ||
                error.response.status === 401
              ) {
                localStorage.setItem(
                  "mensajeLogin",
                  "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                );
                window.location.href = "/";
              } else {
                this.bloquearBtnModal = false;
                this.toastr("Error!!!", "", "error");
              }
            });
        } else {
          this.bloquearBtnModal = false;
          this.toastr("Error!!", "favor arregla el error", "error");
        }
      }
    },
    beforeOpenEliminar(data) {
      this.errors = false;
      this.id = data.params.id;
    },
    closeEliminar() {
      window.Echo.private("desbloquearBtnsRol").whisper("desbloquearBtnsRol", {
        id: this.id,
      });
      this.$events.fire("eliminarMiBloqueoRol", {
        id: this.id,
      });
    },
    eliminarRol() {
      this.bloquearBtnModal = true;
      axios
        .delete(`/rol/eliminar/${this.id}`)
        .then((res) => {
          this.bloquearBtnModal = false;
          if (res.data === "negativo") {
            this.toastr(
              "Precaución!!",
              "El Rol se encuentra vinculado a Usuarios, favor eliminarlos",
              "warning"
            );
          } else {
            this.accionRol({ tipo: "eliminar", data: res.data });
            this.$events.fire("actualizartablaRol");
            this.toastr("Eliminar Rol", "Rol eliminado con exito!!", "success");
          }
          this.$modal.hide("modal_eliminar_rol");
        })
        .catch((error) => {
          if (error.response.status === 405 || error.response.status === 401) {
            localStorage.setItem(
              "mensajeLogin",
              "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
            );
            window.location.href = "/";
          } else {
            this.bloquearBtnModal = false;
            this.toastr("Error!!!", "", "error");
          }
        });
    },
  },
  computed: {
    ...vuex.mapGetters("usuarios", ["getRolByNombre"]),
    validarNombre() {
      let letters = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/;
      if (this.modal.nombre) {
        if (!letters.test(this.modal.nombre)) {
          this.mensajeValidarNombre = "Solo se admiten letras.";
          return true;
        } else {
          if (this.getRolByNombre(this.modal.nombre)) {
            if (this.getRolByNombre(this.modal.nombre).id != this.id) {
              this.mensajeValidarNombre = "Ya Existe un rol con ese Nombre";
              return true;
            }
            return false;
          }
          return false;
        }
      }
    },
    inputModal() {
      return this.modal.nombre;
    },
  },
  watch: {
    inputModal() {
      if (!this.inputModal) {
        this.errors = true;
      } else {
        this.errors = false;
      }
    },
  },
};
</script>