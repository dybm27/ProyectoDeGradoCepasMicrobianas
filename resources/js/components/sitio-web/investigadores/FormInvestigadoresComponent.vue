<template>
  <div class="container mt-3 ml-2 mr-2">
    <div class="row justify-content-md-center">
      <div class="col-sm-6">
        <div class="main-card mb-3 card">
          <form @submit.prevent="evento">
            <div class="card-body">
              <h5 class="card-title">{{titulo}}</h5>
              <template v-if="errors!=''">
                <div class="alert alert-danger">
                  <p v-for="(item, index) in errors" :key="index">{{item[0]}}</p>
                </div>
              </template>
              <div class="position-relative form-group">
                <label for="nombres" class>Nombres</label>
                <input
                  name="nombres"
                  id="nombres"
                  placeholder="..."
                  type="text"
                  :class="['form-control', $v.parametros.nombres.$error? 'error-input-select':'']"
                  v-model.trim="$v.parametros.nombres.$model"
                />
                <em
                  v-if="$v.parametros.nombres.$error&&!$v.parametros.nombres.required"
                  class="text-error-input"
                >{{mensajes.required}}</em>
                <em
                  v-if="$v.parametros.nombres.$error&&!$v.parametros.nombres.alpha"
                  class="text-error-input"
                >{{mensajes.alpha}}</em>
              </div>
              <div class="position-relative form-group">
                <label for="apellidos" class>Apellidos</label>
                <input
                  name="apellidos"
                  id="apellidos"
                  placeholder="..."
                  type="text"
                  :class="['form-control', $v.parametros.apellidos.$error? 'error-input-select':'']"
                  v-model.trim="$v.parametros.apellidos.$model"
                />
                <em
                  v-if="$v.parametros.apellidos.$error&&!$v.parametros.apellidos.required"
                  class="text-error-input"
                >{{mensajes.required}}</em>
                <em
                  v-if="$v.parametros.apellidos.$error&&!$v.parametros.apellidos.alpha"
                  class="text-error-input"
                >{{mensajes.alpha}}</em>
              </div>
              <div class="position-relative form-group">
                <label for="email" class>Email</label>
                <input
                  name="email"
                  id="email"
                  placeholder="..."
                  type="email"
                  :class="['form-control', $v.parametros.email.$error? 'error-input-select':'']"
                  v-model.trim="$v.parametros.email.$model"
                />
                <em
                  v-if="$v.parametros.email.$error&&!$v.parametros.email.required"
                  class="text-error-input"
                >{{mensajes.required}}</em>
                <em
                  v-if="$v.parametros.email.$error&&!$v.parametros.email.email"
                  class="text-error-input"
                >{{mensajes.email}}</em>
                <em
                  v-if="$v.parametros.email.$error&&!$v.parametros.email.unique"
                  class="text-error-input"
                >{{mensajes.unique}}</em>
              </div>
              <div class="position-relative form-group">
                <label for="nivel_estudio" class>Nivel de Estudio</label>
                <input
                  name="nivel_estudio"
                  id="nivel_estudio"
                  placeholder="..."
                  type="text"
                  :class="['form-control', $v.parametros.nivel_estudio.$error? 'error-input-select':'']"
                  v-model.trim="$v.parametros.nivel_estudio.$model"
                />
                <em
                  v-if="$v.parametros.nivel_estudio.$error&&!$v.parametros.nivel_estudio.required"
                  class="text-error-input"
                >{{mensajes.required}}</em>
                <em
                  v-if="$v.parametros.nivel_estudio.$error&&!$v.parametros.nivel_estudio.alpha"
                  class="text-error-input"
                >{{mensajes.alpha}}</em>
              </div>
              <div class="position-relative form-group">
                <label for="cargo" class>Cargo</label>
                <input
                  name="cargo"
                  id="cargo"
                  placeholder="..."
                  type="text"
                  :class="['form-control', $v.parametros.cargo.$error? 'error-input-select':'']"
                  v-model.trim="$v.parametros.cargo.$model"
                />
                <em
                  v-if="$v.parametros.cargo.$error&&!$v.parametros.cargo.required"
                  class="text-error-input"
                >{{mensajes.required}}</em>
                <em
                  v-if="$v.parametros.cargo.$error&&!$v.parametros.cargo.alpha"
                  class="text-error-input"
                >{{mensajes.alpha}}</em>
              </div>
              <div class="position-relative form-group">
                <label for="imagen" class>Imagen</label>
                <input
                  name="imagen"
                  @change="obtenerImagen"
                  id="imagen"
                  accept="image/jpeg, image/png"
                  type="file"
                  :class="['form-control-file', $v.parametros.imagen.$error? 'error-input-select':'']"
                  ref="inputImagen"
                />
                <em v-if="imagenError" class="text-error-input">{{imagenError}}</em>
                <em
                  v-if="$v.parametros.imagen.$error&&!$v.parametros.imagen.required"
                  class="text-error-input"
                >{{mensajes.required}}</em>
              </div>
              <div class="custom-checkbox custom-control mb-2">
                <input
                  type="checkbox"
                  id="publicar"
                  class="custom-control-input"
                  v-model="parametros.publicar"
                />
                <label class="custom-control-label" for="publicar">Desea publicar el Investigador?</label>
              </div>
              <button
                class="mb-2 mr-2 btn btn-block"
                :class="btnClase"
                :disabled="bloquearBtn"
              >{{nomBtnComputed}}</button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Imagen</h5>
            <template v-if="mostraImagen">
              <template v-if="mostraImagen===info.imagenPublica">
                <Croppie
                  :id="'croppie'"
                  :imagen="mostraImagen"
                  @cambiarValorImagen="cambiarValorImagen"
                  :mostrarBtnCroppie="mostrarBtnCroppie"
                  :enableZoom="false"
                  :zoom="0"
                  :editar="true"
                  :boundaryHeigth="300"
                  :viewportWidth="200"
                />
              </template>
              <template v-else>
                <Croppie
                  :id="'croppie'"
                  :imagen="mostraImagen"
                  @cambiarValorImagen="cambiarValorImagen"
                  :mostrarBtnCroppie="mostrarBtnCroppie"
                  :zoom="1"
                  :enableZoom="true"
                  :editar="false"
                  :boundaryHeigth="300"
                  :viewportWidth="200"
                />
              </template>
            </template>
            <template v-else>
              <div class="text-center">
                <h5 class="mt-5 mb-5">
                  <span class="pr-1">
                    <b class="text-warning">SIN IMAGEN</b>
                  </span>
                </h5>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vuex from "vuex";
import Toastr from "../../../mixins/toastr";
import obtenerImagenCroopie from "../../../mixins/obtenerImagenCroopie";
import Croppie from "../../CroppieComponent.vue";
import { required, email } from "vuelidate/lib/validators";
const letters = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/;
export default {
  components: {
    Croppie,
  },
  props: ["idInvestigador"],
  data() {
    return {
      info: "",
      parametros: {
        nombres: "",
        apellidos: "",
        email: "",
        nivel_estudio: "",
        cargo: "",
        imagen: "",
        publicar: false,
      },
      tituloForm: "",
      imagenMiniatura: "",
      nomBtn: "",
      imagenError: "",
      errors: [],
      bloquearBtn: false,
      mensajes: {
        required: "El campo es requerido.",
        alpha: "El campo solo puede contener letras.",
        unique: "Ya existe un registro con ese email.",
        email: "El email debe ser valido.",
      },
    };
  },
  validations: {
    parametros: {
      nombres: {
        required,
        alpha(value) {
          if (value == "") return true;
          if (!letters.test(value)) return false;
          return true;
        },
      },
      apellidos: {
        required,
        alpha(value) {
          if (value == "") return true;
          if (!letters.test(value)) return false;
          return true;
        },
      },
      email: {
        required,
        email,
        unique(value) {
          if (value == "") return true;
          if (this.validarEmailUnique) return false;
          return true;
        },
      },
      nivel_estudio: {
        required,
        alpha(value) {
          if (value == "") return true;
          if (!letters.test(value)) return false;
          return true;
        },
      },
      cargo: {
        required,
        alpha(value) {
          if (value == "") return true;
          if (!letters.test(value)) return false;
          return true;
        },
      },
      imagen: { required },
    },
  },
  mixins: [Toastr, obtenerImagenCroopie],
  methods: {
    ...vuex.mapActions("investigadores", ["accionInvestigador"]),
    evento() {
      this.bloquearBtn = true;
      this.$v.parametros.$touch();
      if (!this.$v.$invalid) {
        if (this.tituloForm === "Agregar Investigador") {
          axios
            .post("/investigadores", this.parametros)
            .then((res) => {
              if (res.request.responseURL === process.env.MIX_LOGIN) {
                localStorage.setItem(
                  "mensajeLogin",
                  "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                );
                window.location.href = "/";
              } else {
                this.bloquearBtn = false;
                this.toastr(
                  "Agregar Investigador",
                  "Investigador agregado con exito!!",
                  "success"
                );
                this.accionInvestigador({ tipo: "agregar", data: res.data });
                this.$emit("cambiarVariableFormulario");
              }
            })
            .catch((error) => {
              this.verificarError(
                error.response.status,
                error.response.data.errors
              );
            });
        } else {
          axios
            .put(`/investigadores/${this.idInvestigador}`, this.parametros)
            .then((res) => {
              this.bloquearBtn = false;
              this.toastr(
                "Editar Investigador",
                "Investigador editado con exito!!",
                "success"
              );
              window.Echo.private("desbloquearBtnsInvestigador").whisper(
                "desbloquearBtnsInvestigador",
                {
                  id: res.data.id,
                }
              );
              this.$events.fire("eliminarMiBloqueoInvestigador", {
                id: res.data.id,
              });
              this.accionInvestigador({ tipo: "editar", data: res.data });
              this.$emit("cambiarVariableFormulario");
            })
            .catch((error) => {
              this.verificarError(
                error.response.status,
                error.response.data.errors
              );
            });
        }
      } else {
        this.bloquearBtn = false;
        this.toastr(
          "Error!!",
          "Favor llenar correctamente los campos",
          "error"
        );
      }
    },
    llenarInfo() {
      this.parametros.nombres = this.info.nombres;
      this.parametros.apellidos = this.info.apellidos;
      this.parametros.email = this.info.email;
      this.parametros.cargo = this.info.cargo;
      this.parametros.nivel_estudio = this.info.nivel_estudio;
      this.parametros.imagen = this.info.imagen;
      this.imagenMiniatura = this.info.imagenPublica;
      if (this.info.publicar == 1) {
        this.parametros.publicar = true;
      }
    },
  },
  computed: {
    ...vuex.mapGetters("investigadores", [
      "getInvestigadorById",
      "getInvestigadorByEmail",
    ]),
    btnClase() {
      if (this.tituloForm === "Agregar Investigador") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    validarTipoForm() {
      if (this.tituloForm === "Agregar Investigador") {
        return true;
      } else {
        return false;
      }
    },
    titulo() {
      return this.tituloForm;
    },
    nomBtnComputed() {
      return this.nomBtn;
    },
    validarEmailUnique() {
      if (this.getInvestigadorByEmail(this.parametros.email)) {
        if (
          this.getInvestigadorByEmail(this.parametros.email).id != this.info.id
        ) {
          return true;
        }
        return false;
      }
      return false;
    },
  },
  created() {
    if (this.idInvestigador === 0) {
      this.tituloForm = "Agregar Investigador";
      this.nomBtn = "Agregar";
      this.$emit("cambiarTipo", "agregar");
    } else {
      this.info = this.getInvestigadorById(this.idInvestigador);
      this.llenarInfo();
      this.$emit("cambiarTipo", "editar");
      this.tituloForm = "Editar Investigador";
      this.nomBtn = "Editar";
    }
  },
};
</script>