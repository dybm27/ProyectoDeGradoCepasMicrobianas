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
                  v-if="$v.parametros.nombre.$error&&!$v.parametros.nombre.unique"
                  class="text-error-input"
                >{{mensajes.unique}}</em>
              </div>
              <div class="position-relative form-group">
                <label for="funcion" class>Funcion</label>
                <input
                  name="funcion"
                  id="funcion"
                  placeholder="..."
                  type="text"
                  :class="['form-control', $v.parametros.funcion.$error? 'error-input-select':'']"
                  v-model.trim="$v.parametros.funcion.$model"
                />
                <em
                  v-if="$v.parametros.funcion.$error&&!$v.parametros.funcion.required"
                  class="text-error-input"
                >{{mensajes.required}}</em>
                <em
                  v-if="$v.parametros.funcion.$error&&!$v.parametros.funcion.alpha"
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
              <div class="position-relative form-group">
                <label for="caracteristicas" class>Características</label>
                <textarea
                  name="caracteristicas"
                  id="caracteristicas"
                  placeholder="..."
                  type="text"
                  :class="['form-control', $v.parametros.caracteristicas.$error? 'error-input-select':'']"
                  v-model.trim="$v.parametros.caracteristicas.$model"
                />
                <em
                  v-if="$v.parametros.caracteristicas.$error&&!$v.parametros.caracteristicas.required"
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
                <label class="custom-control-label" for="publicar">Desea publicar el Equipo?</label>
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
import { required } from "vuelidate/lib/validators";
export default {
  components: {
    Croppie,
  },
  props: ["idEquipamiento"],
  data() {
    return {
      info: "",
      parametros: {
        nombre: "",
        funcion: "",
        caracteristicas: "",
        imagen: "",
        publicar: false,
      },
      tituloForm: "",
      imagenMiniatura: "",
      nomBtn: "",
      errors: [],
      imagenError: "",
      mensajeNombre: "",
      mensajeFuncion: "",
      errors: [],
      bloquearBtn: false,
      mensajes: {
        required: "El campo es requerido.",
        alpha: "El campo solo puede contener letras.",
        unique: "Ya existe un registro con ese nombre",
      },
    };
  },
  validations: {
    parametros: {
      nombre: {
        required,
        unique(value) {
          if (value == "") return true;
          if (this.validarNombre) return false;
          return true;
        },
      },
      funcion: {
        required,
        alpha(value) {
          if (value == "") return true;
          if (this.validarFuncion) return false;
          return true;
        },
      },
      caracteristicas: { required },
      imagen: { required },
    },
  },
  mixins: [Toastr, obtenerImagenCroopie],
  methods: {
    ...vuex.mapActions("equipamientos", ["accionEquipamiento"]),
    evento() {
      this.bloquearBtn = true;
      this.$v.parametros.$touch();
      if (!this.$v.$invalid) {
        if (this.tituloForm === "Agregar Equipamiento") {
          axios
            .post("/equipamientos", this.parametros)
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
                  "Agregar Equipamiento",
                  "Equipamiento agregado con exito!!",
                  "success"
                );
                this.accionEquipamiento({ tipo: "agregar", data: res.data });
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
            .put(`/equipamientos/${this.idEquipamiento}`, this.parametros)
            .then((res) => {
              this.bloquearBtn = false;
              this.toastr(
                "Editar Equipamiento",
                "Equipamiento editado con exito!!",
                "success"
              );
              window.Echo.private("desbloquearBtnsEquipamiento").whisper(
                "desbloquearBtnsEquipamiento",
                {
                  id: res.data.id,
                }
              );
              this.$events.fire("eliminarMiBloqueoEquipamiento", {
                id: res.data.id,
              });
              this.accionEquipamiento({ tipo: "editar", data: res.data });
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
      this.parametros.nombre = this.info.nombre;
      this.parametros.funcion = this.info.funcion;
      this.parametros.caracteristicas = this.info.caracteristicas;
      this.parametros.imagen = this.info.imagen;
      this.imagenMiniatura = this.info.imagenPublica;
      if (this.info.publicar == 1) {
        this.parametros.publicar = true;
      }
    },
  },
  computed: {
    ...vuex.mapGetters("equipamientos", [
      "getEquipamientoById",
      "getEquipamientoByNombre",
    ]),
    btnClase() {
      if (this.tituloForm === "Agregar Equipamiento") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    validarTipoForm() {
      if (this.tituloForm === "Agregar Equipamiento") {
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
    validarNombre() {
      if (this.getEquipamientoByNombre(this.parametros.nombre)) {
        if (
          this.getEquipamientoByNombre(this.parametros.nombre).id !=
          this.info.id
        ) {
          return true;
        }
        return false;
      }
      return false;
    },
    validarFuncion() {
      let letters = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/;
      if (!letters.test(this.parametros.funcion)) {
        return true;
      }
      return false;
    },
  },
  created() {
    if (this.idEquipamiento === 0) {
      this.tituloForm = "Agregar Equipamiento";
      this.nomBtn = "Agregar";
      this.$emit("cambiarTipo", "agregar");
    } else {
      this.info = this.getEquipamientoById(this.idEquipamiento);
      this.llenarInfo();
      this.$emit("cambiarTipo", "editar");
      this.tituloForm = "Editar Equipamiento";
      this.nomBtn = "Editar";
    }
  },
};
</script>