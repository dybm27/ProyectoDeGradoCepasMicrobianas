<template>
  <div class="container mt-3 ml-2 mr-2">
    <div class="row justify-content-md-center">
      <div class="col-sm-6">
        <div class="main-card mb-3 card">
          <form @submit.prevent="evento">
            <div class="card-body">
              <h5 class="card-title">{{titulo}}</h5>
              <div class="position-relative form-group">
                <label for="nombre" class>Nombre</label>
                <input
                  name="nombre"
                  id="nombre"
                  placeholder="..."
                  type="text"
                  :class="['form-control', validarNombre===true? 'is-invalid':'']"
                  v-model="parametros.nombre"
                  required
                />
                <em v-if="validarNombre" class="error invalid-feedback">{{mensajeNombre}}</em>
              </div>
              <template v-if="getTipoUser">
                <div class="osition-relative form-group">
                  <label for="tipo_user" class>Tipo de Usuario</label>
                  <select
                    name="select"
                    id="tipo_user"
                    class="form-control"
                    v-model.number="parametros.tipo_user"
                  >
                    <option
                      v-for="(tu,index) in getTipoUser"
                      :key="index"
                      :value="tu.id"
                    >{{tu.nombre}}</option>
                  </select>
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
                  :class="['form-control-file', imagenError!=''? 'is-invalid':'']"
                  ref="inputImagen"
                  :required="required"
                />
                <em v-if="imagenError" class="error invalid-feedback">{{imagenError}}</em>
              </div>
              <div class="position-relative form-group">
                <label for="email" class>Email</label>
                <input
                  name="email"
                  id="email"
                  placeholder="..."
                  type="email"
                  :class="['form-control', validarEmail===true? 'is-invalid':'']"
                  v-model="parametros.email"
                  :required="required"
                  :disabled="!required"
                />
                <em v-if="validarEmail" class="error invalid-feedback">{{mensajeErrorEmail}}</em>
              </div>
              <label for="pass" class>Contraseña</label>
              <div class="input-group mb-3">
                <input
                  name="pass"
                  id="pass"
                  placeholder="..."
                  :type="showPass==true?'text':'password'"
                  :class="['form-control',validarContraseña===true? 'is-invalid':'']"
                  v-model="parametros.pass"
                  :required="required"
                />
                <div class="input-group-append">
                  <span class="input-group-text" @click="showPass=!showPass">
                    <i class="fas fa-eye" v-if="showPass"></i>
                    <i class="fas fa-eye-slash" v-else></i>
                  </span>
                </div>
                <em v-if="validarContraseña" class="error invalid-feedback">{{mensajeContraseña}}</em>
              </div>
              <label for="pass1" class>Confirmar Contraseña</label>
              <div class="input-group mb-3">
                <input
                  name="pass1"
                  id="pass1"
                  placeholder="..."
                  :type="showPass1==true?'text':'password'"
                  :class="['form-control', validarContraseñas===true? 'is-invalid':'']"
                  v-model="parametros.pass1"
                  :required="required"
                />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fas fa-eye" v-if="showPass1" @click="showPass1=!showPass1"></i>
                    <i class="fas fa-eye-slash" v-else @click="showPass1=!showPass1"></i>
                  </span>
                </div>
                <em v-if="validarContraseñas" class="error invalid-feedback">{{mensajeContraseña1}}</em>
              </div>
              <button
                class="mb-2 mr-2 btn btn-block"
                :class="btnClase"
                :disabled="validarBtn"
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
        tipo_user: 2,
        email: "",
        pass: "",
        pass1: "",
        imagen: ""
      },
      tituloForm: "",
      imagenMiniatura: "",
      nomBtn: "",
      errors: [],
      imagenError: "",
      mensajeErrorEmail: "",
      mensajeContraseña: "",
      mensajeContraseña1: "",
      mensajeNombre: ""
    };
  },
  mixins: [Toastr],
  methods: {
    ...vuex.mapActions("usuarios", ["accionUsuario"]),
    ...vuex.mapActions(["accionModificarAuth"]),
    cambiarValorImagen(valor) {
      if (valor) {
        this.parametros.imagen = valor;
      } else {
        if (!this.required) {
          this.parametros.imagen = this.info.avatar;
          this.imagenMiniatura = this.info.avatarPublico;
          this.$refs.inputImagen.value = "";
        } else {
          this.parametros.imagen = "";
        }
      }
    },
    evento() {
      this.parametros.pass =
        this.parametros.pass === undefined ? "" : this.parametros.pass;
      this.parametros.imagen =
        this.parametros.imagen === this.info.avatar
          ? ""
          : this.parametros.imagen;
      if (this.tituloForm === "Agregar Usuario") {
        axios
          .post("/usuario/agregar", this.parametros)
          .then(res => {
            this.accionUsuario({ tipo: "agregar", data: res.data });
            this.toastr(
              "Agregar Usuario",
              "Usuario agregado con exito!!",
              "success"
            );
            this.$emit("cambiarVariableFormulario");
          })
          .catch(error => {
            if (error.response) {
              this.errors = [];
              this.errors = error.response.data.errors;
              this.toastr("Error!!", "", "error");
            }
          });
      } else {
        axios
          .put(`/usuario/editar/${this.info.id}`, this.parametros)
          .then(res => {
            if (this.getUserAuth.id === res.data.id) {
              this.accionModificarAuth({ data: res.data });
            }
            this.accionUsuario({ tipo: "editar", data: res.data });
            this.toastr(
              "Editar Usuario",
              "Usuario editado con exito!!",
              "success"
            );
            this.$emit("cambiarVariable", "tabla");
            window.Echo.private("desbloquearBtnsUsuario").whisper(
              "desbloquearBtnsUsuario",
              {
                id: res.data.id
              }
            );
            this.$events.fire("spliceMisBloqueosUsuario", {
              id: res.data.id
            });
            this.$emit("cambiarVariableFormulario");
          })
          .catch(error => {
            if (error.response) {
              this.errors = [];
              this.errors = error.response.data.errors;
              this.toastr("Error!!", "", "error");
              // console.log(error.response.data);
            }
          });
      }
    },
    llenarInfo() {
      this.parametros.nombre = this.info.name;
      this.parametros.tipo_user = this.info.tipouser_id;
      this.parametros.email = this.info.email;
      this.parametros.pass = this.info.password;
      this.parametros.imagen = this.info.avatar;
      this.imagenMiniatura = this.info.avatarPublico;
    },
    obtenerImagen(e) {
      let file = e.target.files[0];
      //this.parametros.imagen = file;
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
      reader.onload = e => {
        this.imagenMiniatura = reader.src;
      };
      reader.src = URL.createObjectURL(file);
    }
  },
  computed: {
    ...vuex.mapGetters("usuarios", [
      "getTipoUser",
      "getUsuarioById",
      "getUsuarioByEmail",
      "getUsuarios",
      "getUserAuth"
    ]),
    ...vuex.mapGetters(["getUserAuth"]),
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
    required() {
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
    validarContraseñas() {
      if (this.parametros.pass1) {
        if (this.parametros.pass != this.parametros.pass1) {
          this.mensajeContraseña1 = "Las contraseñas no coinciden";
          return true;
        } else {
          return false;
        }
      }
    },
    validarEmail() {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (this.required) {
        if (this.parametros.email) {
          if (!re.test(this.parametros.email)) {
            this.mensajeErrorEmail = "El correo electrónico debe ser válido.";
            return true;
          } else {
            if (this.getUsuarioByEmail(this.parametros.email)) {
              this.mensajeErrorEmail = "El correo electrónico ya Existe";
              return true;
            }
            return false;
          }
        }
      }
      return false;
    },
    validarNombre() {
      // solo numero /^([0-9])*$/ /^[A-Za-z\s]+$/
      let letters = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/;
      if (this.parametros.nombre) {
        if (!letters.test(this.parametros.nombre)) {
          this.mensajeNombre = "Solo se admiten letras.";
          return true;
        } else {
          return false;
        }
      }
    },
    validarContraseña() {
      let regexp_password = /^(?=.*[A-Z])(?=.*\d)(?=.*[$@!%?&#()"'|_])([A-Za-z\d$@!%?&#()"'|_]){8,15}$/;
      if (this.parametros.pass) {
        if (!regexp_password.test(this.parametros.pass)) {
          this.mensajeContraseña = ` La contraseña debe tener:
                      1: Mínimo 8 y Máximo 15 caracteres 
                      2: Al menos una letra mayúscula 
                      3: Al menos un dígito
                      4: Al menos 1 carácter especial`;
          return true;
        } else {
          return false;
        }
      }
    },
    validarBtn() {
      if (
        this.validarEmail ||
        this.validarNombre ||
        this.validarContraseña ||
        this.validarContraseñas ||
        !this.parametros.imagen
      ) {
        return true;
      }
      return false;
    },
    mostrarBtnCroppie() {
      if (this.imagenMiniatura != this.info.avatarPublico) {
        return true;
      } else {
        return false;
      }
    }
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
  }
};
</script>