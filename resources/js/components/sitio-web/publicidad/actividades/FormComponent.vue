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
                <label for="titulo" class>Título</label>
                <input
                  name="titulo"
                  id="titulo"
                  placeholder="..."
                  type="text"
                  :class="['form-control', validarTitulo? 'is-invalid':'']"
                  v-model="parametros.titulo"
                  required
                />
                <em v-if="validarTitulo" class="error invalid-feedback">{{mensajeTitulo}}</em>
              </div>
              <div class="position-relative form-group">
                <label for="select" class>Contenido de la Actividad:</label>
                <select
                  name="select"
                  id="conidioforo"
                  class="form-control"
                  @change="cambiarDatos"
                  v-model="selectTipo"
                  :disabled="!required"
                >
                  <option value="link">Link</option>
                  <option value="texto">Texto</option>
                </select>
              </div>
              <template v-if="selectTipo=='link'">
                <div class="position-relative form-group">
                  <label for="link" class>Link</label>
                  <input
                    name="link"
                    id="link"
                    placeholder="..."
                    type="text"
                    :class="['form-control', validarLink? 'is-invalid':'']"
                    v-model="parametros.link"
                    required
                  />
                  <em v-if="validarLink" class="error invalid-feedback">{{mensajeLink}}</em>
                </div>
              </template>
              <div class="form-row">
                <div class="col-md-6">
                  <div class="container">
                    <div class="row">
                      <label for="fecha" class>Fecha</label>
                    </div>
                    <div class="row">
                      <date-picker
                        :lang="lang"
                        v-model="parametros.fecha"
                        type="datetime"
                        value-type="format"
                        placeholder="..."
                      ></date-picker>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label for="lugar" class>Lugar</label>
                    <input
                      name="lugar"
                      id="lugar"
                      placeholder="..."
                      type="text"
                      class="form-control"
                      v-model.number="parametros.lugar"
                      required
                    />
                  </div>
                </div>
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
                <label class="custom-control-label" for="publicar">Desea publicar la Actividad?</label>
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
                    <b class="text-success">SIN IMAGEN</b>
                  </span>
                </h5>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <template v-if="selectTipo=='texto'">
      <div class="row justify-content-md-center">
        <div class="col-md-12">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">Elaborar Actividad</h5>
              <Editor
                @contenido="aceptarContenido"
                @modificar="modificarContenido"
                :info="info"
                :quienesSomos="false"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import vuex from "vuex";
import DatePicker from "vue2-datepicker";
import Lang from "vue2-datepicker/locale/es";
import Toastr from "../../../../mixins/toastr";
import obtenerImagenCroopie from "../../../../mixins/obtenerImagenCroopie";
import Croppie from "../../../CroppieComponent.vue";
import Editor from "../../../editor-texto/EditorTextoComponent.vue";
export default {
  components: {
    Croppie,
    Editor,
  },
  props: ["idActividad"],
  data() {
    return {
      lang: Lang,
      info: "",
      parametros: {
        titulo: "",
        link: "",
        cuerpo: "",
        imagen: "",
        fecha: "",
        lugar: "",
        publicar: false,
        tipo: "actividad",
        imagenesEditor: [],
        imagenesGuardadas: [],
      },
      selectTipo: "link",
      tituloForm: "",
      imagenMiniatura: "",
      nomBtn: "",
      imagenError: "",
      mensajeTitulo: "",
      mensajeLink: "",
      errors: [],
      bloquearBtn: false,
    };
  },
  mixins: [Toastr, obtenerImagenCroopie],
  methods: {
    ...vuex.mapActions("publicidad", ["accionActividad"]),
    evento() {
      this.bloquearBtn = true;
      if (this.tituloForm === "Agregar Actividad") {
        axios
          .post("/publicidad", this.parametros)
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
                "Agregar Actividad",
                "Actividad agregada con exito!!",
                "success"
              );
              this.accionActividad({ tipo: "agregar", data: res.data });
              this.$emit("cambiarVariableFormulario");
            }
          })
          .catch((error) => {
            this.bloquearBtn = false;
            if (error.response.status === 422) {
              this.errors = error.response.data.errors;
            }
            this.toastr("Error!!", "", "error");
          });
      } else {
        axios
          .put(`/publicidad/${this.idActividad}`, this.parametros)
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
                "Editar Actividad",
                "Actividad editada con exito!!",
                "success"
              );
              window.Echo.private("desbloquearBtnsActividad").whisper(
                "desbloquearBtnsActividad",
                {
                  id: res.data.id,
                }
              );
              this.$events.fire("eliminarMiBloqueoActividad", {
                id: res.data.id,
              });
              this.accionActividad({ tipo: "editar", data: res.data });
              this.$emit("cambiarVariableFormulario");
            }
          })
          .catch((error) => {
            this.bloquearBtn = false;
            if (error.response.status === 422) {
              this.errors = error.response.data.errors;
            }
            this.toastr("Error!!", "", "error");
          });
      }
    },
    llenarInfo() {
      this.parametros.titulo = this.info.titulo;
      this.parametros.cuerpo = this.info.cuerpo;
      this.parametros.lugar = this.info.lugar;
      this.parametros.fecha = this.info.fecha;
      this.parametros.link = this.info.link;
      if (this.info.cuerpo) {
        this.selectTipo = "texto";
      }
      this.parametros.imagen = this.info.imagen;
      this.imagenMiniatura = this.info.imagenPublica;
      if (this.info.publicar == 1) {
        this.parametros.publicar = true;
      }
    },
    aceptarContenido(data) {
      this.parametros.cuerpo = data.contenido;
      this.parametros.imagenesEditor = data.imagenesEditor;
      this.parametros.imagenesGuardadas = data.imagenesGuardadas;
    },
    modificarContenido() {
      this.parametros.cuerpo = "";
    },
    cambiarDatos() {
      if (this.selectTipo === "texto") {
        this.parametros.link = "";
      } else {
        this.parametros.cuerpo = "";
      }
    },
  },
  computed: {
    ...vuex.mapGetters("publicidad", [
      "getActividadById",
      "getActividadByTitulo",
    ]),
    btnClase() {
      if (this.tituloForm === "Agregar Actividad") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    required() {
      if (this.tituloForm === "Agregar Actividad") {
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
    validarTitulo() {
      if (this.parametros.titulo) {
        let titulo = this.getActividadByTitulo(this.parametros.titulo);
        if (titulo) {
          if (titulo.id != this.info.id) {
            this.mensajeTitulo = "Ya existe una actividad con ese titulo";
            return true;
          }
          return false;
        }
        return false;
      }
      return false;
    },
    validarLink() {
      // solo numero /^([0-9])*$/ /^[A-Za-z\s]+$/
      let letters = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
      if (this.parametros.link) {
        if (!letters.test(this.parametros.link)) {
          this.mensajeLink = "El link no tiene un formato valido.";
          return true;
        }
        return false;
      }
      return false;
    },
    validarCuerpo() {
      if (this.selectTipo == "texto" && !this.parametros.cuerpo) {
        return true;
      }
      return false;
    },
    validarBtn() {
      if (
        this.validarTitulo ||
        (this.selectTipo == "link" && this.validarLink) ||
        this.validarCuerpo ||
        !this.parametros.imagen
      ) {
        return true;
      }
      return false;
    },
  },
  created() {
    if (this.idActividad === 0) {
      this.tituloForm = "Agregar Actividad";
      this.nomBtn = "Agregar";
      this.$emit("cambiarTipo", "agregar");
    } else {
      this.info = this.getActividadById(this.idActividad);
      this.llenarInfo();
      this.$emit("cambiarTipo", "editar");
      this.tituloForm = "Editar Actividad";
      this.nomBtn = "Editar";
    }
  },
};
</script>