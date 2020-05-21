<template>
  <div>
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-id icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Perfil
            <div class="page-title-subheading">Datos del Usuario.</div>
          </div>
        </div>
        <div class="page-title-actions"></div>
      </div>
    </div>
    <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"></ul>
    <div class="tabs-animation">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-7">
            <div class="card-shadow-primary profile-responsive card-border mb-3 card">
              <div class="dropdown-menu-header">
                <div class="dropdown-menu-header-inner bg-focus">
                  <div
                    class="menu-header-image opacity-3"
                    style="background-image: url('assets/images/fondos/5.jpg')"
                  ></div>
                  <div class="menu-header-content btn-pane-right">
                    <div class="avatar-icon-wrapper mr-2 avatar-icon-xl">
                      <div class="avatar-icon rounded">
                        <img :src="getUserAuth.avatarPublico" alt="Avatar" />
                      </div>
                    </div>
                    <div>
                      <h5 class="menu-header-title">{{getUserAuth.name}}</h5>
                    </div>
                  </div>
                </div>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div class="widget-content">
                    <div class="text-center">
                      <h5 class="widget-heading opacity-2"></h5>
                      <h5>
                        <div class="row">
                          <div class="col-md-12">
                            <span class="float-left">
                              <b>Tipo de Usuario:</b>
                              <template
                                v-if="getTipoUser!=''"
                              >{{getTipoUserById(getUserAuth.tipouser_id).nombre}}</template>
                            </span>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <span class="float-left">
                              <b>Email:</b>
                              {{getUserAuth.email}}
                            </span>
                          </div>
                        </div>
                      </h5>
                    </div>
                  </div>
                </li>
                <li class="p-0 list-group-item">
                  <div class="grid-menu grid-menu-3col">
                    <div class="no-gutters row">
                      <div class="col-sm-4">
                        <button
                          class="btn-icon-vertical btn-square btn-transition btn btn-outline-link"
                          @click="showModal('nombre')"
                        >
                          <i class="lnr-pencil btn-icon-wrapper btn-icon-lg mb-3"></i>Cambiar Nombre
                        </button>
                      </div>
                      <div class="col-sm-4">
                        <button
                          class="btn-icon-vertical btn-square btn-transition btn btn-outline-link"
                          @click="showModal('imagen')"
                        >
                          <i class="lnr-link btn-icon-wrapper btn-icon-lg mb-3"></i>Cambiar Imagen
                        </button>
                      </div>
                      <div class="col-sm-4">
                        <button
                          class="btn-icon-vertical btn-square btn-transition btn btn-outline-link"
                          @click="showModal('contraseña')"
                        >
                          <i class="lnr-star btn-icon-wrapper btn-icon-lg mb-3"></i>Cambiar Contraseña
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal name="cambiarInfo" classes="my_modal" :width="450" :height="450">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">{{titulo}}</h5>
          <button type="button" class="close" @click="$modal.hide('cambiarInfo')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <template v-if="tipo==='nombre'">
            <div class="position-relative form-group">
              <label for="nombre" class>Nombre</label>
              <input
                name="nombre"
                id="nombre"
                placeholder="..."
                type="text"
                :class="['form-control', validarNombre===true? 'is-invalid':'']"
                v-model="nombre"
                required
              />
              <em v-if="validarNombre" class="error invalid-feedback">{{errorNombre}}</em>
            </div>
          </template>
          <template v-if="tipo==='imagen'">
            <div class="position-relative form-group">
              <label for="imagen" class>Imagen</label>
              <input
                name="imagen"
                @change="obtenerImagen"
                id="imagen"
                accept="image/jpeg"
                type="file"
                :class="['form-control-file', errorImagen!=''? 'is-invalid':'']"
                ref="inputImagen"
                required
              />
              <em v-if="errorImagen" class="error invalid-feedback">{{errorImagen}}</em>
            </div>
          </template>
          <template v-if="tipo==='contraseña'">
            <label for="pass1" class>Contraseña</label>
            <div class="input-group mb-3">
              <input
                name="pass1"
                id="pass1"
                placeholder="..."
                :type="showPass==true?'text':'password'"
                :class="['form-control',validarContraseña===true? 'is-invalid':'']"
                v-model="pass1"
                required
              />
              <div class="input-group-append">
                <span class="input-group-text">
                  <i class="fas fa-eye" v-if="showPass" @click="showPass=!showPass"></i>
                  <i class="fas fa-eye-slash" v-else @click="showPass=!showPass"></i>
                </span>
              </div>
              <em v-if="validarContraseña" class="error invalid-feedback">{{errorPass}}</em>
            </div>
            <label for="pass1" class>Confirmar Contraseña</label>
            <div class="input-group mb-3">
              <input
                name="pass1"
                id="pass1"
                placeholder="..."
                :type="showPass1==true?'text':'password'"
                :class="['form-control', validarContraseñas===true? 'is-invalid':'']"
                v-model="pass1"
                required
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
          </template>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('cambiarInfo')"
          >Cancelar</button>
          <button
            type="button"
            class="btn btn-primary"
            @click="eventBtn"
            :disabled="validarBoton"
          >Cambiar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import vuex from "vuex";

export default {
  data() {
    return {
      showPass: false,
      titulo: "",
      tipo: "",
      nombre: "",
      imagen: "",
      pass1: "",
      pass2: "",
      errorImagen: "",
      errorPass: "",
      errorNombre: ""
    };
  },
  methods: {
    ...vuex.mapActions(["accionUsuario", "accionModificarAuth"]),
    showModal(tipo) {
      this.nombre = "";
      this.pass1 = "";
      this.imagen = "";
      this.tipo = tipo;
      switch (tipo) {
        case "nombre":
          this.titulo = "Cambiar Nombre";
          break;
        case "imagen":
          this.titulo = "Cambiar Imagen";
          break;
        case "contraseña":
          this.titulo = "Cambiar Contraseña";
          break;
      }
      this.$modal.show("cambiarInfo");
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
    obtenerImagen(e) {
      let file = e.target.files[0];
      this.imagen = file;
      let allowedExtensions = /(.jpg|.jpeg)$/i;

      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.errorImagen =
            "La imagen debe ser en formato .jpg y menor a 2Mb.";
          this.$refs.inputImagen.value = "";
          this.imagen = "";
        } else {
          this.errorImagen = "";
          this.validarImagen(file);
        }
      }
    },
    validarImagen(file) {
      let reader = new Image();
      reader.onload = e => {
        if (e.path[0].height > 500 || e.path[0].width > 500) {
          this.errorImagen =
            "La imagen debe tener una dimension maxima de 500x500 px ";
          this.$refs.inputImagen.value = "";
          this.imagen = "";
        }
      };
      reader.src = URL.createObjectURL(file);
    },
    eventBtn() {
      let parametros = {
        nombre: this.nombre,
        pass: this.pass1
      };
      switch (this.tipo) {
        case "nombre":
          axios
            .put(
              `/perfil/cambiar-${this.tipo}/${this.getUserAuth.id}`,
              parametros
            )
            .then(res => {
              this.accionUsuario({ tipo: "editar", data: res.data });
              this.accionModificarAuth({ data: res.data });
              this.toastr(
                this.titulo,
                "Accion realizada con exito!!",
                "success"
              );
              this.$modal.hide("cambiarInfo");
            })
            .catch(error => {});
          break;
        case "imagen":
          let formData = new FormData();
          formData.append("imagen", this.imagen);
          formData.append("_method", "PUT");
          axios
            .post(
              `/perfil/cambiar-${this.tipo}/${this.getUserAuth.id}`,
              formData,
              {
                headers: { "Content-Type": "multipart/form-data" }
              }
            )
            .then(res => {
              this.accionModificarAuth({ data: res.data });
              this.accionUsuario({ tipo: "editar", data: res.data });
              this.toastr(
                this.titulo,
                "Accion realizada con exito!!",
                "success"
              );
              this.$modal.hide("cambiarInfo");
            })
            .catch(error => {});
          break;
        case "contraseña":
          axios
            .put(
              `/perfil/cambiar-${this.tipo}/${this.getUserAuth.id}`,
              parametros
            )
            .then(res => {
              this.accionModificarAuth({ data: res.data });
              this.accionUsuario({ tipo: "editar", data: res.data });
              this.toastr(
                this.titulo,
                "Accion realizada con exito!!",
                "success"
              );
              this.$modal.hide("cambiarInfo");
            })
            .catch(error => {});
          break;
      }
    }
  },
  computed: {
    ...vuex.mapGetters(["getTipoUserById", "getTipoUser", "getUserAuth"]),
    validarNombre() {
      let letters = /^[A-Za-z\s]+$/;
      if (this.nombre) {
        if (!letters.test(this.nombre)) {
          this.errorNombre = "Solo se admiten letras.";
          return true;
        } else {
          return false;
        }
      } else {
        this.errorNombre = "Favor llenar el campo";
        return true;
      }
    },
    validarContraseñas() {
      if (this.pass2) {
        if (this.pass1 != this.pass2) {
          return true;
        } else {
          return false;
        }
      }
    },
    validarContraseña() {
      let regexp_password = /^(?=.*[A-Z])(?=.*\d)(?=.*[$@!%?&#()"'|_])([A-Za-z\d$@!%?&#()"'|_]){8,15}$/;
      if (this.pass1) {
        if (!regexp_password.test(this.pass1)) {
          this.errorPass = ` La contraseña debe tener:
                1: Mínimo 8 y Máximo 15 caracteres
                2: Al menos una letra mayúscula
                3: Al menos un dígito
                4: Al menos 1 carácter especial`;
          return true;
        } else {
          return false;
        }
      } else {
        this.errorPass = "Favor llenar el campo";
        return true;
      }
    },
    validarBoton() {
      switch (this.tipo) {
        case "nombre":
          if (this.validarNombre) {
            return true;
          } else {
            return false;
          }
          break;
        case "imagen":
          if (this.imagen) {
            return false;
          } else {
            return true;
          }
          break;
        case "contraseña":
          if (this.validarContraseña || this.validarContraseñas) {
            return true;
          } else {
            return false;
          }
          break;
      }
    }
  },
  created() {}
};
</script>
