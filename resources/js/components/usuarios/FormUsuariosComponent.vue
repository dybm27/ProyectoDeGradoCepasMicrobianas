<template>
  <div>
    <template v-if="getUsuarios">
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
                    <em v-if="validarNombre" class="error invalid-feedback">Solo se admiten letras.</em>
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
                      accept="image/jpeg"
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
                      <span class="input-group-text">
                        <i class="fas fa-eye" v-if="showPass" @click="showPass=!showPass"></i>
                        <i class="fas fa-eye-slash" v-else @click="showPass=!showPass"></i>
                      </span>
                    </div>
                    <em v-if="validarContraseña" class="error invalid-feedback">
                      La contraseña debe tener:
                      <br />1: Mínimo 8 y Máximo 15 caracteres
                      <br />2: Al menos una letra mayúscula
                      <br />3: Al menos un dígito
                      <br />4: Al menos 1 carácter especial
                    </em>
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
                    <em
                      v-if="validarContraseñas"
                      class="error invalid-feedback"
                    >Las contraseñas no coinciden</em>
                  </div>
                  <button class="mb-2 mr-2 btn btn-block" :class="btnClase">{{nomBtnComputed}}</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Imagen</h5>
                <template v-if="mostraImagen">
                  <img :src="mostraImagen" class="d-block w-100" alt="Avatar del Usuario" />
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
    <template v-else>
      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center mt-5">
            <div class="loader mt-5">
              <div class="ball-spin-fade-loader mt-5">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import vuex from "vuex";

export default {
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
      imageMiniatura: "",
      nomBtn: "",
      errors: [],
      imagenError: "",
      mensajeErrorEmail: ""
    };
  },
  methods: {
    ...vuex.mapActions([
      "accionTipoUsuario",
      "accionUsuario",
      "accionModificarAuth"
    ]),
    evento() {
      if (
        this.validarEmail ||
        this.validarNombre ||
        this.validarContraseña ||
        this.validarContraseñas
      ) {
        this.toastr("Alerta!!", "Favor arreglar los errores.!!", "warning");
      } else {
        this.parametros.pass =
          this.parametros.pass === undefined ? "" : this.parametros.pass;
        if (this.tituloForm === "Agregar Usuario") {
          let formData = new FormData();
          this.appendInfo(formData);
          axios
            .post("/usuario/agregar", formData, {
              headers: { "Content-Type": "multipart/form-data" }
            })
            .then(res => {
              this.accionUsuario({ tipo: "agregar", data: res.data });
              this.toastr(
                "Agregar Usuario",
                "Usuario agregado con exito!!",
                "success"
              );
              this.$emit("cambiarVariable", "tabla");
              this.$router.push({ name: "tabla-usuarios" });
            })
            .catch(error => {
              if (error.response) {
                this.errors = [];
                this.errors = error.response.data.errors;
                this.toastr("Error!!", "", "error");
              }
            });
        } else {
          if (this.parametros.imagen === this.info.avatar) {
            axios
              .put(`/usuario/editar/${this.info.id}`, this.parametros)
              .then(res => {
                if (this.getUserAuth.id === res.data.id) {
                  this.accionModificarAuth(res.data);
                }
                this.accionUsuario({ tipo: "editar", data: res.data });
                this.toastr(
                  "Editar Usuario",
                  "Usuario editado con exito!!",
                  "success"
                );
                this.$emit("cambiarVariable", "tabla");
                this.$router.push({ name: "tabla-usuarios" });
              })
              .catch(error => {
                if (error.response) {
                  this.errors = [];
                  this.errors = error.response.data.errors;
                  this.toastr("Error!!", "", "error");
                  // console.log(error.response.data);
                }
              });
          } else {
            let formData = new FormData();
            this.appendInfo(formData);
            formData.append("_method", "PUT");
            axios
              .post(`/usuario/editar/${this.info.id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
              })
              .then(res => {
                if (this.getUserAuth.id === res.data.id) {
                  this.accionModificarAuth(res.data);
                }
                this.accionUsuario({ tipo: "editar", data: res.data });
                this.toastr(
                  "Editar Usuario",
                  "Usuario editado con exito!!",
                  "success"
                );
                this.$emit("cambiarVariable", "tabla");
                this.$router.push({ name: "tabla-usuarios" });
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
        }
      }
    },
    toastr(titulo, msg, tipo) {
      this.$toastr.Add({
        title: titulo,
        msg: msg,
        position: "toast-top-right",
        type: tipo,
        timeout: 5000,
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
    llenarInfo() {
      this.parametros.nombre = this.info.name;
      this.parametros.tipo_user = this.info.tipouser_id;
      this.parametros.email = this.info.email;
      this.parametros.pass = this.info.password;
      this.parametros.imagen = this.info.avatar;
      this.imageMiniatura = this.info.avatarPublico;
    },
    appendInfo(formData) {
      formData.append("nombre", this.parametros.nombre);
      formData.append("tipo_user", this.parametros.tipo_user);
      formData.append("email", this.parametros.email);
      formData.append("pass", this.parametros.pass);
      formData.append("imagen", this.parametros.imagen);
    },
    obtenerImagen(e) {
      let file = e.target.files[0];
      this.parametros.imagen = file;
      let allowedExtensions = /(.jpg|.jpeg)$/i;

      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError =
            "La imagen debe ser en formato .jpg y menor a 2Mb.";
          this.imageMiniatura = this.info.imagenPublica;
          this.$refs.inputImagen.value = "";
          this.parametros.imagen = this.info.imagen;
        } else {
          this.imagenError = "";
          this.cargarImagen(file);
        }
      }
    },
    cargarImagen(file) {
      let reader = new Image();
      reader.onload = e => {
        if (e.path[0].height > 500 || e.path[0].width > 500) {
          this.imagenError =
            "La imagen debe tener una dimension maxima de 500x500 px ";
          this.imageMiniatura = this.info.imagenPublica;
          this.$refs.inputImagen.value = "";
          this.parametros.imagen = this.info.imagen;
        } else {
          this.imageMiniatura = reader.src;
        }
      };
      reader.src = URL.createObjectURL(file);
    }
  },
  computed: {
    ...vuex.mapGetters([
      "getTipoUser",
      "getUsuarioById",
      "getUsuarioByEmail",
      "getUsuarios",
      "getUserAuth"
    ]),
    mostraImagen() {
      return this.imageMiniatura;
    },
    btnClase() {
      if (this.tituloForm === "Agregar Usuario") {
        return "btn-primary";
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
          return true;
        } else {
          return false;
        }
      }
    },
    validarEmail() {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (this.parametros.email && this.required) {
        if (!re.test(this.parametros.email) || this.errors.email) {
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
      return false;
    },
    validarNombre() {
      let letters = /^[A-Za-z\s]+$/;
      if (this.parametros.nombre) {
        if (!letters.test(this.parametros.nombre)) {
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
          return true;
        } else {
          return false;
        }
      }
    }
  },
  created() {
    this.$emit("cambiarVariable", "agregar_editar");
    if (!this.$route.params.usuarioId) {
      this.tituloForm = "Agregar Usuario";
      this.nomBtn = "Agregar";
    } else {
      this.info = this.getUsuarioById(this.$route.params.usuarioId);
      this.llenarInfo();
      this.tituloForm = "Editar Usuario";
      this.nomBtn = "Editar";
    }
  }
};
</script>
