<template>
  <div class="container mt-3 ml-2 mr-2">
    <div class="row justify-content-md-center">
      <div class="col-sm-6">
        <div class="main-card mb-3 card">
          <form @submit.prevent="evento">
            <div class="card-body">
              <h5 class="card-title">{{titulo}}</h5>
              <div class="position-relative form-group">
                <label for="nombres" class>Nombres</label>
                <input
                  name="nombres"
                  id="nombres"
                  placeholder="..."
                  type="text"
                  :class="['form-control', validarNombres? 'is-invalid':'']"
                  v-model="parametros.nombres"
                  required
                />
                <em v-if="validarNombres" class="error invalid-feedback">{{mensajeNombres}}</em>
              </div>
              <div class="position-relative form-group">
                <label for="apellidos" class>Apellidos</label>
                <input
                  name="apellidos"
                  id="apellidos"
                  placeholder="..."
                  type="text"
                  :class="['form-control', validarApellidos? 'is-invalid':'']"
                  v-model="parametros.apellidos"
                  required
                />
                <em v-if="validarApellidos" class="error invalid-feedback">{{mensajeApellidos}}</em>
              </div>
              <div class="position-relative form-group">
                <label for="email" class>Email</label>
                <input
                  name="email"
                  id="email"
                  placeholder="..."
                  type="email"
                  :class="['form-control', validarEmail? 'is-invalid':'']"
                  v-model="parametros.email"
                  required
                />
                <em v-if="validarEmail" class="error invalid-feedback">{{mensajeErrorEmail}}</em>
              </div>
              <div class="position-relative form-group">
                <label for="nivel_estudio" class>Nivel de Estudio</label>
                <input
                  name="nivel_estudio"
                  id="nivel_estudio"
                  placeholder="..."
                  type="text"
                  :class="['form-control', validarNivel? 'is-invalid':'']"
                  v-model="parametros.nivel_estudio"
                  required
                />
                <em v-if="validarNivel" class="error invalid-feedback">{{mensajeNivel}}</em>
              </div>
              <div class="position-relative form-group">
                <label for="cargo" class>Cargo</label>
                <input
                  name="cargo"
                  id="cargo"
                  placeholder="..."
                  type="text"
                  :class="['form-control', validarCargo? 'is-invalid':'']"
                  v-model="parametros.cargo"
                  required
                />
                <em v-if="validarCargo" class="error invalid-feedback">{{mensajeCargo}}</em>
              </div>
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
export default {
  components: {
    Croppie
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
        publicar: false
      },
      tituloForm: "",
      imagenMiniatura: "",
      nomBtn: "",
      imagenError: "",
      mensajeErrorEmail: "",
      mensajeCargo: "",
      mensajeNivel: "",
      mensajeNombres: "",
      mensajeApellidos: "",
      errors: []
    };
  },
  mixins: [Toastr, obtenerImagenCroopie],
  methods: {
    ...vuex.mapActions("investigadores", ["accionInvestigador"]),
    evento() {
      if (this.tituloForm === "Agregar Investigador") {
        axios
          .post("/investigadores", this.parametros)
          .then(res => {
            this.toastr(
              "Agregar Investigador",
              "Investigador agregado con exito!!",
              "success"
            );
            this.accionInvestigador({ tipo: "agregar", data: res.data });
            this.$emit("cambiarVariableFormulario");
          })
          .catch(error => {
            if (error.response) {
              this.toastr(
                "Error!!",
                error.response.data.errors.email[0],
                "error"
              );
              this.errors = error.response.data.errors;
            }
          });
      } else {
        axios
          .put(`/investigadores/${this.idInvestigador}`, this.parametros)
          .then(res => {
            this.toastr(
              "Editar Investigador",
              "Investigador editado con exito!!",
              "success"
            );
            window.Echo.private("desbloquearBtnsInvestigador").whisper(
              "desbloquearBtnsInvestigador",
              {
                id: res.data.id
              }
            );
            window.Echo.private("desbloquearCheckInvestigador").whisper(
              "desbloquearCheckInvestigador",
              {
                id: res.data.id
              }
            );
            this.$events.fire("spliceMisBloqueosInvestigador", {
              id: res.data.id
            });
            this.accionInvestigador({ tipo: "editar", data: res.data });
            this.$emit("cambiarVariableFormulario");
          })
          .catch(error => {
            if (error.response) {
              this.toastr(
                "Error!!",
                error.response.data.errors.email[0],
                "error"
              );
              this.errors = error.response.data.errors;
            }
          });
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
    }
  },
  computed: {
    ...vuex.mapGetters("investigadores", [
      "getInvestigadorById",
      "getInvestigadorByEmail"
    ]),
    btnClase() {
      if (this.tituloForm === "Agregar Investigador") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    required() {
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
    validarNombres() {
      // solo numero /^([0-9])*$/ /^[A-Za-z\s]+$/
      let letters = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/;
      if (this.parametros.nombres) {
        if (!letters.test(this.parametros.nombres)) {
          this.mensajeNombres = "Solo se admiten letras.";
          return true;
        } else {
          return false;
        }
      }
      return false;
    },
    validarEmail() {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (this.parametros.email) {
        if (!re.test(this.parametros.email)) {
          this.mensajeErrorEmail = "El correo electrónico debe ser válido.";
          return true;
        } else {
          if (this.getInvestigadorByEmail(this.parametros.email)) {
            if (
              this.getInvestigadorByEmail(this.parametros.email).id !=
              this.info.id
            ) {
              this.mensajeErrorEmail = "El correo electrónico ya Existe";
              return true;
            }
            return false;
          }
          return false;
        }
      }
      return false;
    },
    validarCargo() {
      // solo numero /^([0-9])*$/ /^[A-Za-z\s]+$/
      let letters = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/;
      if (this.parametros.cargo) {
        if (!letters.test(this.parametros.cargo)) {
          this.mensajeCargo = "Solo se admiten letras.";
          return true;
        } else {
          return false;
        }
      }
      return false;
    },
    validarNivel() {
      // solo numero /^([0-9])*$/ /^[A-Za-z\s]+$/
      let letters = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/;
      if (this.parametros.nivel_estudio) {
        if (!letters.test(this.parametros.nivel_estudio)) {
          this.mensajeNivel = "Solo se admiten letras.";
          return true;
        } else {
          return false;
        }
      }
      return false;
    },
    validarApellidos() {
      // solo numero /^([0-9])*$/ /^[A-Za-z\s]+$/
      let letters = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/;
      if (this.parametros.apellidos) {
        if (!letters.test(this.parametros.apellidos)) {
          this.mensajeApellidos = "Solo se admiten letras.";
          return true;
        } else {
          return false;
        }
      }
      return false;
    },
    validarBtn() {
      if (
        this.validarEmail ||
        this.validarNombres ||
        this.validarApellidos ||
        this.validarCargo ||
        this.validarNivel ||
        !this.parametros.imagen
      ) {
        return true;
      }
      return false;
    }
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
  }
};
</script>