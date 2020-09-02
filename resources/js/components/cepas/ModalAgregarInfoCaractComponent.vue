<template>
  <div>
    <modal
      name="modal_agregar_info_caract"
      @closed="closed"
      classes="my_modal"
      :width="450"
      :height="450"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">{{titulo}}</h5>
          <button type="button" class="close" @click="$modal.hide('modal_agregar_info_caract')">
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
              :class="['form-control', errors.nombre||$v.nombre.$error? 'error-input-select':'']"
              v-model.trim="$v.nombre.$model"
            />
            <em v-if="errors.nombre" class="text-error-input">{{errors.nombre[0]}}</em>
            <em
              v-if="$v.nombre.$error&&!$v.nombre.required"
              class="text-error-input"
            >{{mensajes.required}}</em>
            <em
              v-if="$v.nombre.$error&&!$v.nombre.unique"
              class="text-error-input"
            >{{mensajes.unique}}</em>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('modal_agregar_info_caract')"
          >Cancelar</button>
          <button
            type="button"
            class="btn btn-success"
            :disabled="bloquearBtnModal"
            @click="agregarInfo"
          >Agregar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import Toastr from "../../mixins/toastr";
import vuex from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
  props: ["titulo", "tipo", "url", "tipoForm"],
  data() {
    return {
      nombre: "",
      errors: [],
      bloquearBtnModal: false,
      mensajes: {
        required: "El campo es requerido.",
        unique: "Ya existe un registro con ese nombre.",
      },
    };
  },
  validations: {
    nombre: {
      required,
      unique(value) {
        if (value == "") return true;
        if (this.validarNombreUnico) return false;
        return true;
      },
    },
  },
  mixins: [Toastr],
  methods: {
    ...vuex.mapActions("info_caract", [
      "accionAgregarTipoCaractLevadura",
      "accionAgregarTipoCaractActinomiceto",
      "accionAgregarTipoCaractHongo",
      "accionAgregarTipoCaractBacteria",
    ]),
    ...vuex.mapActions("info_caract", []),
    ...vuex.mapActions("info_caract", []),
    ...vuex.mapActions("info_caract", []),
    closed() {
      this.nombre = "";
      this.errors = [];
    },
    agregarInfo() {
      this.bloquearBtnModal = true;
      this.$v.nombre.$touch();
      if (!this.$v.$invalid) {
        let parametros = {
          tipo: this.tipo,
          nombre: this.nombre,
        };
        axios
          .post(`/${this.url}/agregar`, parametros)
          .then((res) => {
            if (res.request.responseURL === process.env.MIX_LOGIN) {
              localStorage.setItem(
                "mensajeLogin",
                "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
              );
              window.location.href = "/";
            } else {
              this.bloquearBtnModal = false;
              this.guardarInfo(res.data);
              this.$modal.hide("modal_agregar_info_caract");
              this.toastr(
                "Agregar Info!!",
                `${this.tipo} agregado/a con exito`,
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
        this.toastr("Error!!", "Favor corregir el Error.", "error");
      }
    },
    guardarInfo(data) {
      switch (this.tipoForm) {
        case "bacteria":
          this.accionAgregarTipoCaractBacteria({
            info: data,
            tipo: this.tipo,
          });
          break;
        case "hongo":
          this.accionAgregarTipoCaractHongo({
            info: data,
            tipo: this.tipo,
          });
          break;
        case "levadura":
          this.accionAgregarTipoCaractLevadura({
            info: data,
            tipo: this.tipo,
          });
          break;
        case "actinomiceto":
          this.accionAgregarTipoCaractActinomiceto({
            info: data,
            tipo: this.tipo,
          });
          break;
        case "cepa":
          break;
      }
    },
    verificarErrorAxios(code, errors) {
      if (code === 403) {
        this.$router.push("/sin-acceso");
      } else if (code === 405 || code === 401) {
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
      "getInfoCaractMacroBacteriasByNombre",
      "getInfoCaractMicroBacteriasByNombre",
      "getInfoMetodoConserBacteriasByNombre",
      "getInfoCaractMacroHongosByNombre",
      "getInfoCaractMicroHongosByNombre",
      "getInfoMetodoConserHongosByNombre",
      "getInfoCaractMacroLevadurasByNombre",
      "getInfoMetodoConserLevadurasByNombre",
      "getInfoCaractMacroActinomicetosByNombre",
      "getInfoCaractMicroActinomicetosByNombre",
    ]),
    validarNombreUnico() {
      switch (this.tipoForm) {
        case "bacteria":
          if (
            this.tipo == "borde" ||
            this.tipo == "color" ||
            this.tipo == "detalle" ||
            this.tipo == "elevacion" ||
            this.tipo == "forma_macro" ||
            this.tipo == "superficie"
          ) {
            if (
              this.getInfoCaractMacroBacteriasByNombre({
                nombre: this.nombre,
                tipo: this.tipo,
              })
            ) {
              return true;
            }
          } else if (this.tipo == "forma_micro") {
            if (
              this.getInfoCaractMicroBacteriasByNombre({
                nombre: this.nombre,
                tipo: this.tipo,
              })
            ) {
              return true;
            }
          } else {
            if (
              this.getInfoMetodoConserBacteriasByNombre({
                nombre: this.nombre,
                tipo: this.tipo,
              })
            ) {
              return true;
            }
          }
          return false;
          break;
        case "hongo":
          if (this.tipo == "color" || this.tipo == "textura") {
            if (
              this.getInfoCaractMacroHongosByNombre({
                nombre: this.nombre,
                tipo: this.tipo,
              })
            ) {
              return true;
            }
          } else if (
            this.tipo == "conidioforo" ||
            this.tipo == "esporaA" ||
            this.tipo == "esporaS"
          ) {
            if (
              this.getInfoCaractMicroHongosByNombre({
                nombre: this.nombre,
                tipo: this.tipo,
              })
            ) {
              return true;
            }
          } else {
            if (
              this.getInfoMetodoConserHongosByNombre({
                nombre: this.nombre,
                tipo: this.tipo,
              })
            ) {
              return true;
            }
          }
          return false;
          break;
        case "levadura":
          if (this.tipo == "color" || this.tipo == "textura") {
            if (
              this.getInfoCaractMacroLevadurasByNombre({
                nombre: this.nombre,
                tipo: this.tipo,
              })
            ) {
              return true;
            }
          } else {
            if (
              this.getInfoMetodoConserLevadurasByNombre({
                nombre: this.nombre,
                tipo: this.tipo,
              })
            ) {
              return true;
            }
          }
          break;
        case "actinomiceto":
          if (
            this.tipo == "borde" ||
            this.tipo == "color" ||
            this.tipo == "textura" ||
            this.tipo == "pigmento" ||
            this.tipo == "forma_macro" ||
            this.tipo == "superficie"
          ) {
            if (
              this.getInfoCaractMacroActinomicetosByNombre({
                nombre: this.nombre,
                tipo: this.tipo,
              })
            ) {
              return true;
            }
          } else if (
            this.tipo == "forma_micro" ||
            this.tipo == "conidioforo" ||
            this.tipo == "tincion" ||
            this.tipo == "micelio"
          ) {
            if (
              this.getInfoCaractMicroActinomicetosByNombre({
                nombre: this.nombre,
                tipo: this.tipo,
              })
            ) {
              return true;
            }
          }
          return false;
          break;
      }
    },
  },
};
</script>