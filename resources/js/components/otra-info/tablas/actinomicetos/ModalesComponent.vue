<template >
  <div>
    <transition name="fade">
      <modal
        name="modal_agregar_tipo_actinomiceto"
        classes="my_modal"
        :maxWidth="450"
        :adaptive="true"
        height="auto"
        :scrollable="true"
        @before-open="beforeOpenAgregar"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Agregar {{ primeraMayus(modal.tipo) }}
            </h5>
            <button
              type="button"
              class="close"
              @click="$modal.hide('modal_agregar_tipo_actinomiceto')"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="position-relative form-group">
              <label for="nombre" class>Nombre</label>
              <input
                dusk="nombre"
                name="nombre"
                id="nombre"
                placeholder="..."
                type="text"
                :class="[
                  'form-control',
                  $v.modal.nombre.$error || errors ? 'error-input-select' : '',
                ]"
                v-model.trim="$v.modal.nombre.$model"
              />
              <em v-if="errors" class="text-error-input">{{
                errors.nombre[0]
              }}</em>
              <em
                v-if="$v.modal.nombre.$error && !$v.modal.nombre.required"
                class="text-error-input"
                >{{ mensajes.required }}</em
              >
              <em
                v-if="$v.modal.nombre.$error && !$v.modal.nombre.unique"
                class="text-error-input"
                >{{ mensajes.unique }}</em
              >
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="$modal.hide('modal_agregar_tipo_actinomiceto')"
            >
              Cancelar
            </button>
            <button
              dusk="btn-accion-modal"
              type="button"
              class="btn btn-success"
              @click="agregarTipo"
              :disabled="bloquearBtnModal"
            >
              Agregar
            </button>
          </div>
        </div>
      </modal>
    </transition>
    <transition name="fade">
      <modal
        name="modal_editar_tipo_actinomiceto"
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
            <h5 class="modal-title" id="exampleModalLongTitle">
              Editar {{ primeraMayus(modal.tipo) }}
            </h5>
            <button
              type="button"
              class="close"
              @click="$modal.hide('modal_editar_tipo_actinomiceto')"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="position-relative form-group">
              <label for="nombre">Nombre</label>
              <input
                dusk="nombre"
                name="nombre"
                id="nombre"
                placeholder="..."
                type="text"
                :class="[
                  'form-control',
                  $v.modal.nombre.$error || errors ? 'error-input-select' : '',
                ]"
                v-model.trim="$v.modal.nombre.$model"
              />
              <em v-if="errors" class="text-error-input">{{
                errors.nombre[0]
              }}</em>
              <em
                v-if="$v.modal.nombre.$error && !$v.modal.nombre.required"
                class="text-error-input"
                >{{ mensajes.required }}</em
              >
              <em
                v-if="$v.modal.nombre.$error && !$v.modal.nombre.unique"
                class="text-error-input"
                >{{ mensajes.unique }}</em
              >
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="$modal.hide('modal_editar_tipo_actinomiceto')"
            >
              Cancelar
            </button>
            <button
              dusk="btn-accion-modal"
              type="button"
              class="btn btn-success"
              @click="editarTipo"
              :disabled="bloquearBtnModal"
            >
              Editar
            </button>
          </div>
        </div>
      </modal>
    </transition>
    <transition name="fade">
      <modal
        name="modal_eliminar_tipo_actinomiceto"
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
            <h5 class="modal-title" id="exampleModalLongTitle">
              Eliminar {{ primeraMayus(modal.tipo) }}
            </h5>
            <button
              type="button"
              class="close"
              @click="$modal.hide('modal_eliminar_tipo_actinomiceto')"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              Esta segura/o de eliminar el/la {{ primeraMayus(modal.tipo) }}?.
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="$modal.hide('modal_eliminar_tipo_actinomiceto')"
            >
              Cancelar
            </button>
            <button
              dusk="btn-accion-modal"
              type="button"
              class="btn btn-success"
              :disabled="bloquearBtnModal"
              @click="eliminarTipo"
            >
              Eliminar
            </button>
          </div>
        </div>
      </modal>
    </transition>
  </div>
</template>

<script>
import vuex from "vuex";
import Toastr from "../../../../mixins/toastr";
import websocketsModalOtraInfo from "../../../../mixins/websocketsModalOtraInfo";
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      id: "",
      modal: { nombre: "", tipo: "" },
      errors: "",
      bloquearBtnModal: false,
      mensajes: {
        required: "El campo es requerido.",
        unique: "Ya existe un registro con ese nombre.",
      },
    };
  },
  validations: {
    modal: {
      nombre: {
        required,
        unique(value) {
          if (value == "") return true;
          if (this.validarNombreUnico) return false;
          return true;
        },
      },
    },
  },
  mixins: [Toastr, websocketsModalOtraInfo("ActinomicetosInfo")],
  methods: {
    ...vuex.mapActions("info_caract", [
      "accionAgregarTipoCaractActinomiceto",
      "accionEditarTipoCaractActinomiceto",
      "accionEliminarTipoCaractActinomiceto",
    ]),
    beforeOpenAgregar(data) {
      this.errors = "";
      this.modal.nombre = "";
      this.id = "";
      this.modal.tipo = data.params.tipo;
    },
    agregarTipo() {
      this.bloquearBtnModal = true;
      this.$v.modal.$touch();
      if (!this.$v.$invalid) {
        axios
          .post("/info-caract-actinomicetos/agregar", this.modal)
          .then((res) => {
            if (res.request.responseURL === process.env.MIX_LOGIN) {
              localStorage.setItem(
                "mensajeLogin",
                "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
              );
              window.location.href = "/";
            } else {
              this.bloquearBtnModal = false;
              this.accionAgregarTipoCaractActinomiceto({
                info: res.data,
                tipo: this.modal.tipo,
              });
              this.$events.fire("actualizartabla" + this.modal.tipo);
              this.$modal.hide("modal_agregar_tipo_actinomiceto");
              this.toastr(
                `Agregar ${this.primeraMayus(this.modal.tipo)}`,
                `${this.primeraMayus(this.modal.tipo)} agregado/a con exito`,
                "success"
              );
            }
          })
          .catch((error) => {
            this.verificarErrorAxiosModal(
              error.response.status,
              error.response.data.errors
            );
          });
      } else {
        this.bloquearBtnModal = false;
        this.toastr("Error!!", "Favor corregir el error.", "error");
      }
    },
    beforeOpenEditar(data) {
      this.errors = "";
      this.id = data.params.id;
      this.modal.nombre = data.params.nombre;
      this.modal.tipo = data.params.tipo;
    },
    editarTipo() {
      this.bloquearBtnModal = true;
      this.$v.modal.$touch();
      if (!this.$v.$invalid) {
        axios
          .put(`/info-caract-actinomicetos/editar/${this.id}`, this.modal)
          .then((res) => {
            this.bloquearBtnModal = false;
            this.accionEditarTipoCaractActinomiceto({
              info: res.data,
              tipo: this.modal.tipo,
            });
            this.$events.fire("actualizartabla" + this.modal.tipo);
            this.toastr(
              `Editar ${this.primeraMayus(this.modal.tipo)}`,
              `${this.primeraMayus(this.modal.tipo)} editado/a con exito!!`,
              "success"
            );
            this.$modal.hide("modal_editar_tipo_actinomiceto");
          })
          .catch((error) => {
            this.verificarErrorAxiosModal(
              error.response.status,
              error.response.data.errors
            );
          });
      } else {
        this.bloquearBtnModal = false;
        this.toastr("Error!!", "Favor corregir el error.", "error");
      }
    },
    beforeOpenEliminar(data) {
      this.errors = "";
      this.id = data.params.id;
      this.modal.tipo = data.params.tipo;
    },
    eliminarTipo() {
      this.bloquearBtnModal = true;
      axios
        .delete(`/info-caract-actinomicetos/eliminar/${this.id}`, {
          data: this.modal,
        })
        .then((res) => {
          this.bloquearBtnModal = false;
          if (res.data === "macro") {
            this.toastr(
              "Precaución!!",
              "El/La " +
                this.modal.tipo +
                " se encuentra vinculado/a a características macroscópicas, favor eliminarlas",
              "warning"
            );
          } else if (res.data === "micro") {
            this.toastr(
              "Precaución!!",
              "El/La " +
                this.modal.tipo +
                " se encuentra vinculada a características microscópicas, favor eliminarlas",
              "warning"
            );
          } else {
            this.accionEliminarTipoCaractActinomiceto({
              info: res.data,
              tipo: this.modal.tipo,
            });
            this.$events.fire("actualizartabla" + this.modal.tipo);
            this.toastr(
              `Eliminar ${this.primeraMayus(this.modal.tipo)}`,
              `${this.primeraMayus(this.modal.tipo)} eliminado/a con exito!!`,
              "success"
            );
          }
          this.$modal.hide("modal_eliminar_tipo_actinomiceto");
        })
        .catch((error) => {
          this.verificarErrorAxiosModal(
            error.response.status,
            error.response.data.errors
          );
        });
    },
    primeraMayus(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    verificarErrorAxiosModal(code, errors) {
      if (code === 403) {
        this.$router.push("/sin-acceso");
      } else if (code === 405 || code === 401) {
        localStorage.setItem(
          "mensajeLogin",
          "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
        );
        window.location.href = "/";
      } else {
        if (code === 422) {
          this.errors = [];
          this.errors = errors;
        }
        this.bloquearBtnModal = false;
        this.toastr("Error!!", "", "error");
      }
    },
  },
  computed: {
    ...vuex.mapGetters("info_caract", [
      "getInfoCaractMacroActinomicetosByNombre",
      "getInfoCaractMicroActinomicetosByNombre",
    ]),
    validarNombreUnico() {
      if (this.modal.nombre) {
        if (
          this.modal.tipo == "borde" ||
          this.modal.tipo == "color" ||
          this.modal.tipo == "textura" ||
          this.modal.tipo == "pigmento" ||
          this.modal.tipo == "forma_macro" ||
          this.modal.tipo == "superficie"
        ) {
          if (
            this.getInfoCaractMacroActinomicetosByNombre({
              nombre: this.modal.nombre,
              tipo: this.modal.tipo,
            })
          ) {
            if (
              this.getInfoCaractMacroActinomicetosByNombre({
                nombre: this.modal.nombre,
                tipo: this.modal.tipo,
              }).id == this.id
            )
              return false;
            return true;
          }
        } else if (
          this.modal.tipo == "forma_micro" ||
          this.modal.tipo == "conidioforo" ||
          this.modal.tipo == "tincion" ||
          this.modal.tipo == "micelio"
        ) {
          if (
            this.getInfoCaractMicroActinomicetosByNombre({
              nombre: this.modal.nombre,
              tipo: this.modal.tipo,
            })
          ) {
            if (
              this.getInfoCaractMicroActinomicetosByNombre({
                nombre: this.modal.nombre,
                tipo: this.modal.tipo,
              }).id == this.id
            )
              return false;
            return true;
          }
        }
        return false;
      }
    },
  },
};
</script>