<template>
  <div class="container mt-3 ml-2 mr-2">
    <div class="row justify-content-md-center">
      <div class="col-sm-6">
        <div class="main-card mb-3 card">
          <form @submit.prevent="evento">
            <div class="card-body">
              <h5 class="card-title">{{titulo}}</h5>
              <div class="position-relative form-group">
                <label for="nombre_documento" class>Nombre Proyecto</label>
                <input
                  name="nombre_documento"
                  id="nombre_documento"
                  placeholder="..."
                  type="text"
                  :class="['form-control', validarNombreProyecto? 'is-invalid':'']"
                  v-model="parametros.nombre_documento"
                  required
                />
                <em
                  v-if="validarNombreProyecto"
                  class="error invalid-feedback"
                >{{mensajeNombreProyecto}}</em>
              </div>
              <div class="position-relative form-group">
                <label for="nombre_autor" class>Nombre Autor</label>
                <input
                  name="nombre_autor"
                  id="nombre_autor"
                  placeholder="..."
                  type="text"
                  :class="['form-control', validarNombreAutor? 'is-invalid':'']"
                  v-model="parametros.nombre_autor"
                  required
                />
                <em v-if="validarNombreAutor" class="error invalid-feedback">{{mensajeNombreAutor}}</em>
              </div>
              <template v-if="required">
                <div class="position-relative form-group">
                  <label for="archivo" class>Archivo</label>
                  <input
                    name="archivo"
                    @change="obtenerArchivo"
                    id="archivo"
                    accept="application/pdf"
                    type="file"
                    :class="['form-control-file', archivoError!=''? 'is-invalid':'']"
                    ref="inputArchivo"
                    required
                  />
                  <em v-if="archivoError" class="error invalid-feedback">{{archivoError}}</em>
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
                <label for="descripcion" class>Descripción</label>
                <textarea
                  name="descripcion"
                  id="descripcion"
                  placeholder="..."
                  type="text"
                  class="form-control"
                  v-model="parametros.descripcion"
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
                <label class="custom-control-label" for="publicar">Desea publicar el Proyecto?</label>
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
                <croppie
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
                <croppie
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
export default {
  props: ["idProyecto"],
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
        tipo: "proyecto"
      },
      tituloForm: "",
      imagenMiniatura: "",
      nomBtn: "",
      errors: [],
      imagenError: "",
      archivoError: "",
      mensajeNombreProyecto: "",
      mensajeNombreAutor: "",
      traerValorImg: false
    };
  },
  mixins: [Toastr],
  methods: {
    ...vuex.mapActions("documentos", ["accionProyecto"]),
    cambiarValorImagen(valor) {
      if (valor) {
        this.parametros.imagen = valor;
      } else {
        if (!this.required) {
          this.parametros.imagen = this.info.imagen;
          this.imagenMiniatura = this.info.imagenPublica;
          this.$refs.inputImagen.value = "";
        } else {
          this.parametros.imagen = "";
        }
      }
    },
    evento() {
      if (this.tituloForm === "Agregar Proyecto") {
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
              "content-type": "multipart/form-data"
            }
          })
          .then(res => {
            this.toastr(
              "Agregar Proyecto",
              "Proyecto agregado con exito!!",
              "success"
            );
            this.accionProyecto({ tipo: "agregar", data: res.data });
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
          .put(`/documentos/${this.idProyecto}`, this.parametros)
          .then(res => {
            this.toastr(
              "Editar Proyecto",
              "Proyecto editado con exito!!",
              "success"
            );
            this.accionProyecto({ tipo: "editar", data: res.data });
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
    obtenerImagen(e) {
      let file = e.target.files[0];
      //this.parametros.imagen = file;
      let allowedExtensions = /(.jpg|.jpeg|.png)$/i;
      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError =
            "La imagen debe ser en formato .jpg .png y menor a 2Mb.";
          this.imagenMiniatura = this.info.imagenPublica;
          this.$refs.inputImagen.value = "";
          this.parametros.imagen = this.info.imagen;
        } else {
          this.imagenError = "";
          this.cargarImagen(file);
        }
      } else {
        this.imagenMiniatura = this.info.imagenPublica;
        this.$refs.inputImagen.value = "";
        this.parametros.imagen = this.info.imagen;
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
    ...vuex.mapGetters("documentos", [
      "getProyectoById",
      "getProyectoByNombre"
    ]),
    mostraImagen() {
      return this.imagenMiniatura;
    },
    btnClase() {
      if (this.tituloForm === "Agregar Proyecto") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    required() {
      if (this.tituloForm === "Agregar Proyecto") {
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
    validarNombreProyecto() {
      // solo numero /^([0-9])*$/ /^[A-Za-z\s]+$/
      let letters = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/;
      if (this.parametros.nombre_documento) {
        if (!letters.test(this.parametros.nombre_documento)) {
          this.mensajeNombreProyecto = "Solo se admiten letras.";
          return true;
        } else {
          if (this.getProyectoByNombre(this.parametros.nombre_documento)) {
            if (
              this.getProyectoByNombre(this.parametros.nombre_documento).id !=
              this.info.id
            ) {
              this.mensajeNombreProyecto =
                "Ya existe un proyecto con ese nombre";
              return true;
            }
            return false;
          }
          return false;
        }
      }
      return false;
    },
    validarNombreAutor() {
      // solo numero /^([0-9])*$/ /^[A-Za-z\s]+$/
      let letters = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/;
      if (this.parametros.nombre_autor) {
        if (!letters.test(this.parametros.nombre_autor)) {
          this.mensajeNombreAutor = "Solo se admiten letras.";
          return true;
        }
        return false;
      }
      return false;
    },
    validarBtn() {
      if (
        this.validarNombreProyecto ||
        this.validarNombreAutor ||
        !this.parametros.imagen
      ) {
        return true;
      }
      return false;
    },
    mostrarBtnCroppie() {
      if (this.imagenMiniatura != this.info.imagenPublica) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    if (this.idProyecto === 0) {
      this.tituloForm = "Agregar Proyecto";
      this.nomBtn = "Agregar";
      this.$emit("cambiarTipo", "agregar");
    } else {
      this.info = this.getProyectoById(this.idProyecto);
      this.llenarInfo();
      this.$emit("cambiarTipo", "editar");
      this.tituloForm = "Editar Proyecto";
      this.nomBtn = "Editar";
    }
  }
};
</script>