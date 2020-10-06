<template>
  <div class="container mt-3 ml-2 mr-2">
    <div class="row justify-content-md-center">
      <div class="col-sm-6">
        <div class="main-card mb-3 card">
          <form @submit.prevent="evento">
            <div class="card-body">
              <h5 class="card-title">{{ titulo }}</h5>
              <template v-if="errors != ''">
                <div class="alert alert-danger">
                  <p v-for="(item, index) in errors" :key="index">
                    {{ item[0] }}
                  </p>
                </div>
              </template>
              <div class="position-relative form-group">
                <label for="nombre_documento" class>Nombre Publicación</label>
                <input
                  dusk="nombre_documento"
                  name="nombre_documento"
                  id="nombre_documento"
                  placeholder="..."
                  type="text"
                  :class="[
                    'form-control',
                    $v.parametros.nombre_documento.$error
                      ? 'error-input-select'
                      : '',
                  ]"
                  v-model.trim="$v.parametros.nombre_documento.$model"
                />
                <em
                  v-if="
                    $v.parametros.nombre_documento.$error &&
                    !$v.parametros.nombre_documento.required
                  "
                  class="text-error-input"
                  >{{ mensajes.required }}</em
                >
                <em
                  v-if="
                    $v.parametros.nombre_documento.$error &&
                    !$v.parametros.nombre_documento.unique
                  "
                  class="text-error-input"
                  >{{ mensajes.unique }}</em
                >
              </div>
              <div class="position-relative form-group">
                <label for="nombre_autor" class>Nombre Autor</label>
                <input
                  dusk="nombre_autor"
                  name="nombre_autor"
                  id="nombre_autor"
                  placeholder="..."
                  type="text"
                  :class="[
                    'form-control',
                    $v.parametros.nombre_autor.$error
                      ? 'error-input-select'
                      : '',
                  ]"
                  v-model.trim="$v.parametros.nombre_autor.$model"
                />
                <em
                  v-if="
                    $v.parametros.nombre_autor.$error &&
                    !$v.parametros.nombre_autor.required
                  "
                  class="text-error-input"
                  >{{ mensajes.required }}</em
                >
                <em
                  v-if="
                    $v.parametros.nombre_autor.$error &&
                    !$v.parametros.nombre_autor.alpha
                  "
                  class="text-error-input"
                  >{{ mensajes.alpha }}</em
                >
              </div>
              <template v-if="validarTipoForm">
                <div class="position-relative form-group">
                  <label for="archivo" class>Archivo</label>
                  <input
                    dusk="archivo"
                    name="archivo"
                    @change="obtenerArchivo"
                    id="archivo"
                    accept="application/pdf"
                    type="file"
                    :class="[
                      'form-control-file',
                      $v.parametros.archivo.$error ? 'error-input-select' : '',
                    ]"
                    ref="inputArchivo"
                  />
                  <em v-if="archivoError" class="text-error-input">{{
                    archivoError
                  }}</em>
                  <em
                    v-if="
                      $v.parametros.archivo.$error &&
                      !$v.parametros.archivo.required
                    "
                    class="text-error-input"
                    >{{ mensajes.required }}</em
                  >
                </div>
              </template>
              <div class="position-relative form-group">
                <label for="imagen" class>Imagen</label>
                <input
                  dusk="imagen"
                  name="imagen"
                  @change="obtenerImagen"
                  id="imagen"
                  accept="image/jpeg, image/png"
                  type="file"
                  :class="[
                    'form-control-file',
                    $v.parametros.imagen.$error ? 'error-input-select' : '',
                  ]"
                  ref="inputImagen"
                />
                <em v-if="imagenError" class="text-error-input">{{
                  imagenError
                }}</em>
                <em
                  v-if="
                    $v.parametros.imagen.$error &&
                    !$v.parametros.imagen.required
                  "
                  class="text-error-input"
                  >{{ mensajes.required }}</em
                >
              </div>
              <div class="position-relative form-group">
                <label for="descripcion" class>Descripción</label>
                <textarea
                  dusk="descripcion"
                  name="descripcion"
                  id="descripcion"
                  placeholder="..."
                  type="text"
                  :class="[
                    'form-control',
                    $v.parametros.descripcion.$error
                      ? 'error-input-select'
                      : '',
                  ]"
                  v-model.trim="$v.parametros.descripcion.$model"
                />
                <em
                  v-if="
                    $v.parametros.descripcion.$error &&
                    !$v.parametros.descripcion.required
                  "
                  class="text-error-input"
                  >{{ mensajes.required }}</em
                >
              </div>
              <div class="custom-checkbox custom-control mb-2">
                <input
                  type="checkbox"
                  id="publicar"
                  class="custom-control-input"
                  v-model="parametros.publicar"
                />
                <label
                  class="custom-control-label"
                  dusk="publicar"
                  for="publicar"
                  >Desea publicar el Articulo?</label
                >
              </div>
              <button
                dusk="btn-accion"
                class="mb-2 mr-2 btn btn-block"
                :class="btnClase"
                :disabled="bloquearBtn"
              >
                {{ nomBtnComputed }}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Imagen</h5>
            <template v-if="mostraImagen">
              <template v-if="mostraImagen === info.imagenPublica">
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
import Toastr from "../../../../mixins/toastr";
import obtenerImagenCroopie from "../../../../mixins/obtenerImagenCroopie";
import Croppie from "../../../CroppieComponent.vue";
import { required } from "vuelidate/lib/validators";
export default {
  components: {
    Croppie,
  },
  props: ["idPublicacion"],
  data() {
    return {
      info: "",
      parametros: {
        nombre_documento: "",
        nombre_autor: "",
        archivo: "",
        descripcion: "",
        imagen: "",
        publicar: false,
        tipo: "publicacion",
      },
      titulo: "",
      imagenMiniatura: "",
      nomBtn: "",
      imagenError: "",
      archivoError: "",
      traerValorImg: false,
      errors: [],
      bloquearBtn: false,
      mensajes: {
        required: "El campo es requerido.",
        alpha: "El campo solo puede contener letras.",
        unique: "Ya existe un registro con ese nombre",
      },
    };
  },
  validations() {
    if (this.validarTipoForm) {
      return {
        parametros: {
          nombre_documento: {
            required,
            unique(value) {
              if (value == "") return true;
              if (this.validarNombrePublicacion) return false;
              return true;
            },
          },
          nombre_autor: {
            required,
            alpha(value) {
              if (value == "") return true;
              if (this.validarNombre) return false;
              return true;
            },
          },
          archivo: { required },
          descripcion: { required },
          imagen: { required },
        },
      };
    } else {
      return {
        parametros: {
          nombre_documento: {
            required,
            unique(value) {
              if (value == "") return true;
              if (this.validarNombreProyecto) return false;
              return true;
            },
          },
          nombre_autor: {
            required,
            alpha(value) {
              if (value == "") return true;
              if (this.validarNombre) return false;
              return true;
            },
          },
          descripcion: { required },
          imagen: { required },
        },
      };
    }
  },
  mixins: [Toastr, obtenerImagenCroopie],
  methods: {
    ...vuex.mapActions("documentos", ["accionPublicacion"]),
    evento() {
      this.bloquearBtn = true;
      this.$v.parametros.$touch();
      if (!this.$v.$invalid) {
        if (this.titulo === "Agregar Publicacion") {
          let form = new FormData();
          form.append("nombre_documento", this.parametros.nombre_documento);
          form.append("nombre_autor", this.parametros.nombre_autor);
          form.append("descripcion", this.parametros.descripcion);
          form.append("archivo", this.parametros.archivo);
          form.append("imagen", this.parametros.imagen);
          if (this.parametros.publicar) {
            form.append("publicar", 1);
          } else {
            form.append("publicar", 0);
          }
          form.append("tipo", this.parametros.tipo);
          axios
            .post("/documentos", form, {
              headers: {
                "content-type": "multipart/form-data",
              },
            })
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
                  "Agregar Publicacion",
                  "Publicacion agregada con exito!!",
                  "success"
                );
                this.accionPublicacion({ tipo: "agregar", data: res.data });
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
            .put(`/documentos/${this.idPublicacion}`, this.parametros)
            .then((res) => {
              this.bloquearBtn = false;
              this.toastr(
                "Editar Publicacion",
                "Publicacion editada con exito!!",
                "success"
              );
              window.Echo.private("desbloquearBtnsPublicacion").whisper(
                "desbloquearBtnsPublicacion",
                {
                  id: res.data.id,
                }
              );
              this.$events.fire("eliminarMiBloqueoPublicacion", {
                id: res.data.id,
              });
              this.accionPublicacion({ tipo: "editar", data: res.data });
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
      this.parametros.nombre_documento = this.info.nombre_documento;
      this.parametros.nombre_autor = this.info.nombre_autor;
      this.parametros.descripcion = this.info.descripcion;
      this.parametros.imagen = this.info.imagen;
      this.imagenMiniatura = this.info.imagenPublica;
      if (this.info.publicar == 1) {
        this.parametros.publicar = true;
      }
    },
    obtenerArchivo(e) {
      let file = e.target.files[0];
      let allowedExtensions = /(.pdf)$/i;
      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 20000000) {
          this.archivoError =
            "El archivo debe ser en formato .pdf y menor a 20Mb.";
          this.$refs.inputArchivo.value = "";
          this.parametros.archivo = this.info.imagen;
        } else {
          this.parametros.archivo = file;
          this.archivoError = "";
        }
      } else {
        this.parametros.archivo = "";
        this.$refs.inputArchivo.value = "";
      }
    },
  },
  computed: {
    ...vuex.mapGetters("documentos", [
      "getPublicacionById",
      "getPublicacionByNombre",
    ]),
    btnClase() {
      if (this.titulo === "Agregar Publicacion") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    validarTipoForm() {
      if (this.titulo === "Agregar Publicacion") {
        return true;
      } else {
        return false;
      }
    },
    nomBtnComputed() {
      return this.nomBtn;
    },
    validarNombrePublicacion() {
      if (this.getPublicacionByNombre(this.parametros.nombre_documento)) {
        if (
          this.getPublicacionByNombre(this.parametros.nombre_documento).id !=
          this.info.id
        ) {
          return true;
        }
        return false;
      }
      return false;
    },
    validarNombre() {
      let letters = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/;
      if (!letters.test(this.parametros.nombre_autor)) {
        return true;
      }
      return false;
    },
  },
  created() {
    if (this.idPublicacion === 0) {
      this.titulo = "Agregar Publicacion";
      this.nomBtn = "Agregar";
      this.$emit("cambiarTipo", "agregar");
    } else {
      this.info = this.getPublicacionById(this.idPublicacion);
      this.llenarInfo();
      this.$emit("cambiarTipo", "editar");
      this.titulo = "Editar Publicacion";
      this.nomBtn = "Editar";
    }
  },
};
</script>