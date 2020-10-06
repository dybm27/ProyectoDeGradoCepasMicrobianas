<template >
  <div>
    <transition name="fade">
      <modal
        name="modal_agregar_tipo_cepa"
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
              @click="$modal.hide('modal_agregar_tipo_cepa')"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div
              class="position-relative form-group"
              v-if="modal.tipo === 'genero' || modal.tipo === 'especie'"
            >
              <label for="grupo_microbiano-modal" class>Grupo Microbiano</label>
              <select
                name="select"
                id="grupo_microbiano-modal"
                class="form-control"
                v-model="modal.grupo_microbiano"
                @change="cambiarGeneroEspecie"
              >
                <option
                  v-for="(gm, index) in getGrupos"
                  :key="index"
                  :value="gm.id"
                >
                  {{ gm.nombre }}
                </option>
              </select>
            </div>
            <div
              class="position-relative form-group"
              v-if="modal.tipo === 'especie'"
            >
              <label for="genero-modal" class>Genero</label>
              <select
                name="select"
                id="genero-modal"
                class="form-control"
                v-model="modal.genero"
              >
                <option
                  v-for="(g, index) in getGenerosId(modal.grupo_microbiano)"
                  :key="index"
                  :value="g.id"
                >
                  {{ g.nombre }}
                </option>
              </select>
            </div>
            <div class="position-relative form-group">
              <label for="nombre" class>Nombre</label>
              <input
                dusk="nombre"
                name="nombre"
                id="nombre"
                placeholder="..."
                type="text"
                class="form-control"
                :class="[
                  'form-control',
                  $v.modal.nombre.$error || errors ? 'error-input-select' : '',
                ]"
                v-model.trim="$v.modal.nombre.$model"
              />
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
              @click="$modal.hide('modal_agregar_tipo_cepa')"
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
        name="modal_editar_tipo_cepa"
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
              @click="$modal.hide('modal_editar_tipo_cepa')"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div
              class="position-relative form-group"
              v-if="modal.tipo === 'especie'"
            >
              <label for="genero-modal" class>Genero</label>
              <select
                name="select"
                id="genero-modal"
                class="form-control"
                v-model="modal.genero"
              >
                <option
                  v-for="(g, index) in getGenerosId(modal.grupo_microbiano)"
                  :key="index"
                  :value="g.id"
                >
                  {{ g.nombre }}
                </option>
              </select>
            </div>
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
              @click="$modal.hide('modal_editar_tipo_cepa')"
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
        name="modal_eliminar_tipo_cepa"
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
              @click="$modal.hide('modal_eliminar_tipo_cepa')"
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
              @click="$modal.hide('modal_eliminar_tipo_cepa')"
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
      modal: {
        grupo_microbiano: 1,
        nombre: "",
        tipo: "",
        genero: 1,
      },
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
  mixins: [Toastr, websocketsModalOtraInfo("CepasInfo")],
  methods: {
    ...vuex.mapActions("info_cepas", [
      "accionAgregarTipoCepa",
      "accionEditarTipoCepa",
      "accionEliminarTipoCepa",
    ]),
    beforeOpenAgregar(data) {
      this.id = "";
      this.errors = "";
      this.modal.nombre = "";
      this.modal.tipo = data.params.tipo;
      this.modal.grupo_microbiano = 1;
      this.modal.genero = 1;
    },
    agregarTipo() {
      this.bloquearBtnModal = true;
      this.$v.modal.$touch();
      if (!this.$v.$invalid) {
        axios
          .post("/info-cepas/agregar", this.modal)
          .then((res) => {
            if (res.request.responseURL === process.env.MIX_LOGIN) {
              localStorage.setItem(
                "mensajeLogin",
                "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
              );
              window.location.href = "/";
            } else {
              this.bloquearBtnModal = false;
              this.accionAgregarTipoCepa({
                info: res.data,
                tipo: this.modal.tipo,
              });
              this.$events.fire("actualizartabla" + this.modal.tipo);
              this.$modal.hide("modal_agregar_tipo_cepa");
              this.toastr(
                `Agregar ${this.primeraMayus(this.modal.tipo)}`,
                `${this.primeraMayus(this.modal.tipo)} agregado/a con exito`,
                "success"
              );
            }
          })
          .catch((error) => {
            this.verificarErrorAxios(
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
      if (data.params.tipo === "genero") {
        this.modal.grupo_microbiano = data.params.grupo;
      } else if (data.params.tipo === "especie") {
        this.modal.genero = data.params.genero;
        this.modal.grupo_microbiano = this.getGenerosById(
          data.params.genero
        ).grupo_microbiano_id;
      }
    },
    editarTipo() {
      this.bloquearBtnModal = true;
      this.$v.modal.$touch();
      if (!this.$v.$invalid) {
        axios
          .put(`/info-cepas/editar/${this.id}`, this.modal)
          .then((res) => {
            this.bloquearBtnModal = false;
            this.accionEditarTipoCepa({
              info: res.data,
              tipo: this.modal.tipo,
            });
            this.$events.fire("actualizartabla" + this.modal.tipo);
            this.toastr(
              `Editar ${this.primeraMayus(this.modal.tipo)}`,
              `${this.primeraMayus(this.modal.tipo)} editado/a con exito!!`,
              "success"
            );
            this.$modal.hide("modal_editar_tipo_cepa");
          })
          .catch((error) => {
            this.verificarErrorAxios(
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
        .delete(`/info-cepas/eliminar/${this.id}`, {
          data: this.modal,
        })
        .then((res) => {
          this.bloquearBtnModal = false;
          if (res.data === "negativo") {
            this.toastr(
              "Precaución!!",
              "El/La " +
                this.modal.tipo +
                " cuenta con cepas vinculadas, favor eliminarlas",
              "warning"
            );
          } else if (res.data === "negativo1") {
            this.toastr(
              "Precaución!!",
              "El Genero cuenta con cepas o especies vinculadas, favor eliminarlas",
              "warning"
            );
          } else {
            this.accionEliminarTipoCepa({
              info: res.data,
              tipo: this.modal.tipo,
            });
            this.toastr(
              `Eliminar ${this.primeraMayus(this.modal.tipo)}`,
              `${this.primeraMayus(this.modal.tipo)} eliminado/a con exito!!`,
              "success"
            );
            this.$events.fire("actualizartabla" + this.modal.tipo);
          }
          this.$modal.hide("modal_eliminar_tipo_cepa");
        })
        .catch((error) => {
          this.verificarErrorAxios(
            error.response.status,
            error.response.data.errors
          );
        });
    },
    primeraMayus(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    cambiarGeneroEspecie() {
      this.modal.genero = this.getGenerosId(this.modal.grupo_microbiano)[0].id;
    },
    verificarErrorAxios(code, errors) {
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
    ...vuex.mapGetters("info_cepas", [
      "getGenerosId",
      "getGrupos",
      "getGenerosById",
    ]),
    ...vuex.mapGetters("info_cepas", [
      "getGrupos",
      "getGeneros",
      "getEspecies",
      "getPhylums",
      "getOrdens",
      "getReinos",
      "getDivisiones",
      "getClases",
      "getFamilias",
      "getGenerosId",
      "getEspeciesId",
      "getGeneroByNombre",
      "getEspecieByNombre",
      "getPhylumByNombre",
      "getOrdenByNombre",
      "getReinoByNombre",
      "getDivisionByNombre",
      "getClaseByNombre",
      "getFamiliaByNombre",
    ]),
    validarNombreUnico() {
      if (this.modal.nombre) {
        switch (this.modal.tipo) {
          case "genero":
            if (this.getGeneroByNombre(this.modal.nombre)) {
              if (this.getGeneroByNombre(this.modal.nombre).id == this.id)
                return false;
              return true;
            }
            break;
          case "especie":
            if (this.getEspecieByNombre(this.modal.nombre)) {
              if (this.getEspecieByNombre(this.modal.nombre).id == this.id)
                return false;
              return true;
            }
            break;
          case "familia":
            if (this.getFamiliaByNombre(this.modal.nombre)) {
              if (this.getFamiliaByNombre(this.modal.nombre).id == this.id)
                return false;
              return true;
            }
            break;
          case "orden":
            if (this.getOrdenByNombre(this.modal.nombre)) {
              if (this.getOrdenByNombre(this.modal.nombre).id == this.id)
                return false;
              return true;
            }
            break;
          case "clase":
            if (this.getClaseByNombre(this.modal.nombre)) {
              if (this.getClaseByNombre(this.modal.nombre).id == this.id)
                return false;
              return true;
            }
            break;
          case "phylum":
            if (this.getPhylumByNombre(this.modal.nombre)) {
              if (this.getPhylumByNombre(this.modal.nombre).id == this.id)
                return false;
              return true;
            }
            break;
          case "reino":
            if (this.getReinoByNombre(this.modal.nombre)) {
              if (this.getReinoByNombre(this.modal.nombre).id == this.id)
                return false;
              return true;
            }
            break;
          case "division":
            if (this.getDivisionByNombre(this.modal.nombre)) {
              if (this.getDivisionByNombre(this.modal.nombre).id == this.id)
                return false;
              return true;
            }
            break;
        }
      }
      return false;
    },
  },
};
</script>