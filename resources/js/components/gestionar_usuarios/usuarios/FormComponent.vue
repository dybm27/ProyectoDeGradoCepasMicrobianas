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
                  <p v-for="(item, index) in errors" :key="index">{{item}}</p>
                </div>
              </template>
              <div class="position-relative form-group">
                <label for="nombre" class>Nombre</label>
                <input
                  name="nombre"
                  id="nombre"
                  placeholder="..."
                  type="text"
                  :class="['form-control', $v.parametros.nombre.$error? 'error-input-select':'']"
                  v-model.trim="$v.parametros.nombre.$model"
                />
                <em
                  v-if="$v.parametros.nombre.$error&&!$v.parametros.nombre.required"
                  class="text-error-input"
                >{{mensajes.required}}</em>
                <em
                  v-if="$v.parametros.nombre.$error&&!$v.parametros.nombre.alpha"
                  class="text-error-input"
                >{{mensajes.alpha}}</em>
              </div>
              <template v-if="getRoles">
                <div class="osition-relative form-group">
                  <label for="rol" class>Rol de Usuario</label>
                  <select
                    name="select"
                    id="rol"
                    :class="['form-control', $v.parametros.rol.$error? 'error-input-select':'']"
                    v-model.trim="$v.parametros.rol.$model"
                  >
                    <option v-for="(tu,index) in getRoles" :key="index" :value="tu.id">{{tu.nombre}}</option>
                  </select>
                  <em
                    v-if="$v.parametros.rol.$error&&!$v.parametros.rol.required"
                    class="text-error-select"
                  >{{mensajes.required}}</em>
                </div>
              </template>
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
              <label for="pass" class>Contraseña</label>
              <div class="input-group mb-3">
                <input
                  name="pass"
                  id="pass"
                  placeholder="..."
                  :type="showPass?'text':'password'"
                  :class="['form-control', $v.parametros.pass.$error? 'error-input-select':'']"
                  v-model.trim="$v.parametros.pass.$model"
                />
                <div class="input-group-append verContraseña">
                  <span class="input-group-text" @click="showPass=!showPass">
                    <i class="fas fa-eye" v-if="showPass"></i>
                    <i class="fas fa-eye-slash" v-else></i>
                  </span>
                </div>
                <em
                  v-if="$v.parametros.pass.$error&&!$v.parametros.pass.required&&validarTipoForm"
                  class="text-error-input"
                >{{mensajes.required}}</em>
                <em
                  v-if="$v.parametros.pass.$error&&!$v.parametros.pass.minLength"
                  class="text-error-input"
                >{{mensajes.minLength}}</em>
                <em
                  v-if="$v.parametros.pass.$error&&!$v.parametros.pass.maxLength"
                  class="text-error-input"
                >{{mensajes.maxLength}}</em>
              </div>
              <label for="pass1" class>Confirmar Contraseña</label>
              <div class="input-group mb-3">
                <input
                  name="pass1"
                  id="pass1"
                  placeholder="..."
                  :type="showPass1==true?'text':'password'"
                  :class="['form-control', $v.parametros.pass1.$error? 'error-input-select':'']"
                  v-model.trim="$v.parametros.pass1.$model"
                />
                <div class="input-group-append verContraseña">
                  <span class="input-group-text">
                    <i class="fas fa-eye" v-if="showPass1" @click="showPass1=!showPass1"></i>
                    <i class="fas fa-eye-slash" v-else @click="showPass1=!showPass1"></i>
                  </span>
                </div>
                <em
                  v-if="$v.parametros.pass1.$error&&!$v.parametros.pass1.required&&validarTipoForm"
                  class="text-error-input"
                >{{mensajes.required}}</em>
                <em
                  v-if="$v.parametros.pass1.$error&&!$v.parametros.pass1.sameAs"
                  class="text-error-input"
                >{{mensajes.sameAs}}</em>
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
              <template v-if="mostraImagen===info.avatarPublico">
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
import Croppie from "../../CroppieComponent";
import {
  required,
  email,
  sameAs,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
export default {
  components: { Croppie },
  props: ["idUsuario"],
  data() {
    return {
      showPass: false,
      showPass1: false,
      info: "",
      parametros: {
        nombre: "",
        rol: 2,
        email: "",
        pass: "",
        pass1: "",
        imagen: "",
      },
      tituloForm: "",
      imagenMiniatura: "",
      nomBtn: "",
      errors: [],
      imagenError: "",
      mensajeErrorEmail: "",
      mensajeContraseña: "",
      mensajeContraseña1: "",
      mensajeNombre: "",
      bloquearBtn: false,
      mensajes: {
        required: "El campo es requerido.",
        email: "El campo debe ser un email valido.",
        sameAs: "Las contraseñas no coinciden",
        alpha: "El campo solo puede contener letras.",
        minLength: "La contraseña debe tener mínimo 8 carácteres.",
        maxLength: "La contraseña debe tener máximo 15 carácteres.",
        unique: "Ya existe un registro con ese email",
      },
    };
  },
  validations() {
    if (this.validarTipoForm) {
      return {
        parametros: {
          nombre: {
            required,
            alpha(value) {
              if (value == "") return true;

              if (this.validarNombre) {
                return false;
              }
              return true;
            },
          },
          rol: { required },
          email: {
            required,
            email,
            unique(value) {
              if (value == "") return true;

              if (this.validarEmail) {
                return false;
              }
              return true;
            },
          },
          pass: { required, minLength: minLength(8), maxLength: maxLength(15) },
          pass1: { required, sameAs: sameAs("pass") },
          imagen: { required },
        },
      };
    } else {
      return {
        parametros: {
          nombre: {
            required,
            alpha(value) {
              if (value == "") return true;

              if (this.validarNombre) {
                return false;
              }
              return true;
            },
          },
          rol: { required },
          email: {
            required,
            email,
            unique(value) {
              if (value == "") return true;

              if (this.validarEmail) {
                return false;
              }
              return true;
            },
          },
          pass: { minLength: minLength(8), maxLength: maxLength(15) },
          pass1: {
            sameAs(value) {
              if (value == "" && !this.parametros.pass) return true;

              if (this.parametros.pass != this.parametros.pass1) return false;

              return true;
            },
          },
          imagen: { required },
        },
      };
    }
  },
  mixins: [Toastr],
  methods: {
    ...vuex.mapActions("usuarios", ["accionUsuario"]),
    ...vuex.mapActions(["accionModificarAuth"]),
    cambiarValorImagen(valor) {
      if (valor) {
        this.parametros.imagen = valor;
      } else {
        if (!this.validarTipoForm) {
          this.parametros.imagen = this.info.avatar;
          this.imagenMiniatura = this.info.avatarPublico;
          this.$refs.inputImagen.value = "";
        } else {
          this.parametros.imagen = "";
        }
      }
    },
    evento() {
      this.bloquearBtn = true;
      this.$v.parametros.$touch();
      if (!this.$v.$invalid) {
        if (this.tituloForm === "Agregar Usuario") {
          axios
            .post("/usuario/agregar", this.parametros)
            .then((res) => {
              if (res.request.responseURL === process.env.MIX_LOGIN) {
                localStorage.setItem(
                  "mensajeLogin",
                  "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                );
                window.location.href = "/";
              } else {
                this.bloquearBtn = false;
                this.accionUsuario({ tipo: "agregar", data: res.data });
                this.toastr(
                  "Agregar Usuario",
                  "Usuario agregado con exito!!",
                  "success"
                );
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
            .put(`/usuario/editar/${this.info.id}`, this.parametros)
            .then((res) => {
              this.bloquearBtn = false;
              if (this.auth.id === res.data.id) {
                this.accionModificarAuth({ data: res.data });
              }
              if (res.data != "negativo") {
                this.accionUsuario({ tipo: "editar", data: res.data });
                this.toastr(
                  "Editar Usuario",
                  "Usuario editado con exito!!",
                  "success"
                );
                window.Echo.private("desbloquearBtnsUsuario").whisper(
                  "desbloquearBtnsUsuario",
                  {
                    id: res.data.id,
                  }
                );
                this.$events.fire("eliminarMiBloqueoUsuario", {
                  id: res.data.id,
                });
                this.$emit("cambiarVariableFormulario");
              } else {
                this.toastr(
                  "Precaución",
                  "El Usuario se encuentra Logueado y no es posible Editarlo!!",
                  "warning"
                );
                this.bloquearBtn = false;
              }
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
      this.parametros.nombre = this.info.name;
      this.parametros.rol = this.info.rol_id;
      this.parametros.email = this.info.email;
      this.parametros.pass = this.info.password;
      this.parametros.imagen = this.info.avatar;
      this.imagenMiniatura = this.info.avatarPublico;
    },
    obtenerImagen(e) {
      let file = e.target.files[0];
      let allowedExtensions = /(.jpg|.jpeg|.png)$/i;
      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError =
            "La imagen debe ser en formato .jpg .png y menor a 2Mb.";
          this.imagenMiniatura = this.info.avatarPublico;
          this.$refs.inputImagen.value = "";
          this.parametros.imagen = this.info.avatar;
        } else {
          this.imagenError = "";
          this.cargarImagen(file);
        }
      } else {
        this.imagenMiniatura = this.info.avatarPublico;
        this.$refs.inputImagen.value = "";
        this.parametros.imagen = this.info.avatar;
      }
    },
    cargarImagen(file) {
      let reader = new Image();
      reader.onload = (e) => {
        this.imagenMiniatura = reader.src;
      };
      reader.src = URL.createObjectURL(file);
    },
  },
  computed: {
    ...vuex.mapState("usuarios", ["usuarios"]),
    ...vuex.mapGetters("usuarios", [
      "getRoles",
      "getUsuarioById",
      "getUsuarioByEmail",
    ]),
    ...vuex.mapState(["auth"]),
    mostraImagen() {
      return this.imagenMiniatura;
    },
    btnClase() {
      if (this.tituloForm === "Agregar Usuario") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    validarTipoForm() {
      if (this.tituloForm === "Agregar Usuario") {
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
    validarEmail() {
      if (this.getUsuarioByEmail(this.parametros.email)) {
        if (this.getUsuarioByEmail(this.parametros.email).id != this.info.id) {
          this.mensajeErrorEmail = "El correo electrónico ya Existe";
          return true;
        }
      }
    },
    validarNombre() {
      // solo numero /^([0-9])*$/ /^[A-Za-z\s]+$/
      let letters = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/;
      if (!letters.test(this.parametros.nombre)) {
        return true;
      } else {
        return false;
      }
    },
    mostrarBtnCroppie() {
      if (this.imagenMiniatura != this.info.avatarPublico) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    if (this.idUsuario === 0) {
      this.tituloForm = "Agregar Usuario";
      this.nomBtn = "Agregar";
      this.$emit("cambiarTipo", "agregar");
    } else {
      this.info = this.getUsuarioById(this.idUsuario);
      this.llenarInfo();
      this.$emit("cambiarTipo", "editar");
      this.tituloForm = "Editar Usuario";
      this.nomBtn = "Editar";
    }
  },
};
</script>