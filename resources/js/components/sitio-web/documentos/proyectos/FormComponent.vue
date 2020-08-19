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
                :disabled="validarBtn||bloquearBtn"
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
import Toastr from "../../../../mixins/toastr";
import obtenerImagenCroopie from "../../../../mixins/obtenerImagenCroopie";
import Croppie from "../../../CroppieComponent.vue";
export default {
  components: {
    Croppie,
  },
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
        tipo: "proyecto",
      },
      tituloCroppie: "",
      imagenMiniatura: "",
      nomBtn: "",
      imagenError: "",
      archivoError: "",
      mensajeNombreProyecto: "",
      mensajeNombreAutor: "",
      traerValorImg: false,
      errors: [],
      bloquearBtn: false,
    };
  },
  mixins: [Toastr, obtenerImagenCroopie],
  methods: {
    ...vuex.mapActions("documentos", ["accionProyecto"]),
    evento() {
      this.bloquearBtn = true;
      if (this.tituloCroppie === "Agregar Proyecto") {
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
                "Agregar Proyecto",
                "Proyecto agregado con exito!!",
                "success"
              );
              this.accionProyecto({ tipo: "agregar", data: res.data });
              this.$emit("cambiarVariableFormulario");
            }
          })
          .catch((error) => {
            if (error.response.status === 403) {
              this.$router.push("/sin-acceso");
            } else {
              this.bloquearBtn = false;
              if (error.response.status === 422) {
                this.errors = error.response.data.errors;
              }
              this.toastr("Error!!", "", "error");
            }
          });
      } else {
        axios
          .put(`/documentos/${this.idProyecto}`, this.parametros)
          .then((res) => {
            this.bloquearBtn = false;
            this.toastr(
              "Editar Proyecto",
              "Proyecto editado con exito!!",
              "success"
            );
            window.Echo.private("desbloquearBtnsProyecto").whisper(
              "desbloquearBtnsProyecto",
              {
                id: res.data.id,
              }
            );
            this.$events.fire("eliminarMiBloqueoProyecto", {
              id: res.data.id,
            });
            this.accionProyecto({ tipo: "editar", data: res.data });
            this.$emit("cambiarVariableFormulario");
          })
          .catch((error) => {
            if (error.response.status === 403) {
              this.$router.push("/sin-acceso");
            } else if (error.response.status === 405) {
              window.location.href = "/";
            } else {
              this.bloquearBtn = false;
              if (error.response.status === 422) {
                this.errors = error.response.data.errors;
              }
              this.toastr("Error!!", "", "error");
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
  },
  computed: {
    ...vuex.mapGetters("documentos", [
      "getProyectoById",
      "getProyectoByNombre",
    ]),
    btnClase() {
      if (this.tituloCroppie === "Agregar Proyecto") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    required() {
      if (this.tituloCroppie === "Agregar Proyecto") {
        return true;
      } else {
        return false;
      }
    },
    titulo() {
      return this.tituloCroppie;
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
  },
  created() {
    if (this.idProyecto === 0) {
      this.tituloCroppie = "Agregar Proyecto";
      this.nomBtn = "Agregar";
      this.$emit("cambiarTipo", "agregar");
    } else {
      this.info = this.getProyectoById(this.idProyecto);
      this.llenarInfo();
      this.$emit("cambiarTipo", "editar");
      this.tituloCroppie = "Editar Proyecto";
      this.nomBtn = "Editar";
    }
  },
};
</script>