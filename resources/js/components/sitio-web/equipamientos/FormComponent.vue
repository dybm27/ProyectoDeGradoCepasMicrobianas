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
                  :class="['form-control', validarNombre? 'is-invalid':'']"
                  v-model="parametros.nombre"
                  required
                />
                <em v-if="validarNombre" class="error invalid-feedback">{{mensajeNombre}}</em>
              </div>
              <div class="position-relative form-group">
                <label for="funcion" class>Funcion</label>
                <input
                  name="funcion"
                  id="funcion"
                  placeholder="..."
                  type="text"
                  :class="['form-control', validarFuncion? 'is-invalid':'']"
                  v-model="parametros.funcion"
                  required
                />
                <em v-if="validarFuncion" class="error invalid-feedback">{{mensajeFuncion}}</em>
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
              <div class="position-relative form-group">
                <label for="caracteristicas" class>Características</label>
                <textarea
                  name="caracteristicas"
                  id="caracteristicas"
                  placeholder="..."
                  type="text"
                  class="form-control"
                  v-model="parametros.caracteristicas"
                  required
                />
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
  props: ["idEquipamiento"],
  data() {
    return {
      info: "",
      parametros: {
        nombre: "",
        funcion: "",
        caracteristicas: "",
        imagen: "",
        publicar: false
      },
      tituloForm: "",
      imagenMiniatura: "",
      nomBtn: "",
      errors: [],
      imagenError: "",
      mensajeNombre: "",
      mensajeFuncion: ""
    };
  },
  mixins: [Toastr, obtenerImagenCroopie],
  methods: {
    ...vuex.mapActions("equipamientos", ["accionEquipamiento"]),
    evento() {
      if (this.tituloForm === "Agregar Equipamiento") {
        axios
          .post("/equipamientos", this.parametros)
          .then(res => {
            this.toastr(
              "Agregar Equipamiento",
              "Equipamiento agregado con exito!!",
              "success"
            );
            this.accionEquipamiento({ tipo: "agregar", data: res.data });
            this.$emit("cambiarVariableFormulario");
          })
          .catch(error => {
            if (error.response) {
              if (error.response.data.errors.nombre) {
                this.toastr(
                  "Error!!",
                  error.response.data.errors.nombres[0],
                  "error"
                );
              }
              this.errors = error.response.data.errors;
            }
          });
      } else {
        axios
          .put(`/equipamientos/${this.idEquipamiento}`, this.parametros)
          .then(res => {
            this.toastr(
              "Editar Equipamiento",
              "Equipamiento editado con exito!!",
              "success"
            );
            window.Echo.private("desbloquearBtnsEquipamiento").whisper(
              "desbloquearBtnsEquipamiento",
              {
                id: res.data.id
              }
            );
            window.Echo.private("desbloquearCheckEquipamiento").whisper(
              "desbloquearCheckEquipamiento",
              {
                id: res.data.id
              }
            );
            this.$events.fire("spliceMisBloqueosEquipamiento", {
              id: res.data.id
            });
            this.accionEquipamiento({ tipo: "editar", data: res.data });
            this.$emit("cambiarVariableFormulario");
          })
          .catch(error => {
            if (error.response) {
              if (error.response.data.errors.nombre) {
                this.toastr(
                  "Error!!",
                  error.response.data.errors.nombres[0],
                  "error"
                );
              }
              this.errors = error.response.data.errors;
            }
          });
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
    }
  },
  computed: {
    ...vuex.mapGetters("equipamientos", [
      "getEquipamientoById",
      "getEquipamientoByNombre"
    ]),
    btnClase() {
      if (this.tituloForm === "Agregar Equipamiento") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    required() {
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
      // solo numero /^([0-9])*$/ /^[A-Za-z\s]+$/
      let letters = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/;
      if (this.parametros.nombre) {
        if (!letters.test(this.parametros.nombre)) {
          this.mensajeNombre = "Solo se admiten letras.";
          return true;
        } else {
          if (this.getEquipamientoByNombre(this.parametros.nombre)) {
            if (
              this.getEquipamientoByNombre(this.parametros.nombre).id !=
              this.info.id
            ) {
              this.mensajeNombre = "Ya existe un Equipo con ese nombre";
              return true;
            }
            return false;
          }
          return false;
        }
      }
      return false;
    },
    validarFuncion() {
      // solo numero /^([0-9])*$/ /^[A-Za-z\s]+$/
      let letters = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/;
      if (this.parametros.funcion) {
        if (!letters.test(this.parametros.funcion)) {
          this.mensajeFuncion = "Solo se admiten letras.";
          return true;
        } else {
          return false;
        }
      }
      return false;
    },
    validarBtn() {
      if (
        this.validarNombre ||
        this.validarFuncion ||
        !this.parametros.imagen
      ) {
        return true;
      }
      return false;
    }
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
  }
};
</script>