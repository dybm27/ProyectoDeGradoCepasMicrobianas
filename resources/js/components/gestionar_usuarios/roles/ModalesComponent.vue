<template >
  <div>
    <modal
      name="modal_agregar_rol"
      classes="my_modal"
      :width="450"
      :height="450"
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
            @click="$modal.hide('modal_agregar_rol')"
          >Cancelar</button>
          <button
            type="button"
            class="btn btn-success"
            @click="agregarRol"
            :disabled="validarBtn||bloquearBtnModal"
          >Agregar</button>
        </div>
      </div>
    </modal>
    <modal
      name="modal_editar_rol"
      classes="my_modal"
      :width="400"
      :height="450"
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
            @click="$modal.hide('modal_editar_rol')"
          >Cancelar</button>
          <button
            type="button"
            class="btn btn-success"
            @click="editarRol"
            :disabled="validarBtn||bloquearBtnModal"
          >Editar</button>
        </div>
      </div>
    </modal>
    <modal
      name="modal_eliminar_rol"
      classes="my_modal"
      :width="400"
      :height="300"
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
      errors: "",
      bloquearBtnModal: false,
    };
  },
  mixins: [Toastr],
  methods: {
    ...vuex.mapActions("usuarios", ["accionRol"]),
    beforeOpenAgregar(data) {
      this.errors = "";
      this.modal.nombre = "";
    },
    agregarRol() {
      this.bloquearBtnModal = true;
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
          this.bloquearBtnModal = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
          this.toastr("Error!!!!", "", "error");
        });
    },
    beforeOpenEditar(data) {
      this.errors = "";
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
      this.bloquearBtnModal = true;
      axios
        .put(`/rol/editar/${this.id}`, this.modal)
        .then((res) => {
          this.bloquearBtnModal = false;
          this.accionRol({ tipo: "editar", data: res.data });
          this.$events.fire("actualizartablaRol");
          this.toastr("Editar Rol", "Rol editado con exito!!", "success", 5000);
          this.$modal.hide("modal_editar_rol");
        })
        .catch((error) => {
          if (error.response.status === 405) {
            window.location.href = "/";
          } else {
            this.bloquearBtnModal = false;
            if (error.response.status === 422) {
              this.errors = error.response.data.errors;
            }
            this.toastr("Error!!!", "", "error", 4000);
          }
        });
    },
    beforeOpenEliminar(data) {
      this.errors = "";
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
              "warning",
              8000
            );
          } else {
            this.accionRol({ tipo: "eliminar", data: res.data });
            this.$events.fire("actualizartablaRol");
            this.toastr(
              "Eliminar Rol",
              "Rol eliminado con exito!!",
              "success",
              5000
            );
          }
          this.$modal.hide("modal_eliminar_rol");
        })
        .catch((error) => {
          if (error.response.status === 405) {
            window.location.href = "/";
          } else {
            this.bloquearBtnModal = false;
            this.toastr("Error!!!", "", "error", 4000);
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
          this.errors = "Solo se admiten letras.";
          return true;
        } else {
          if (this.getRolByNombre(this.modal.nombre)) {
            if (this.getRolByNombre(this.modal.nombre).id != this.id) {
              this.errors = "Ya Existe un rol con ese Nombre";
              return true;
            }
            return false;
          }
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