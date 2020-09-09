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
                  :class="['form-control', $v.parametros.titulo.$error? 'error-input-select':'']"
                  v-model.trim="$v.parametros.titulo.$model"
                />
                <em
                  v-if="$v.parametros.titulo.$error&&!$v.parametros.titulo.required"
                  class="text-error-input"
                >{{mensajes.required}}</em>
                <em
                  v-if="$v.parametros.titulo.$error&&!$v.parametros.titulo.unique"
                  class="text-error-input"
                >{{mensajes.unique}}</em>
              </div>
              <div class="position-relative form-group" v-if="validarTipoForm">
                <label for="select" class>Contenido de la Actividad:</label>
                <select
                  name="select"
                  id="conidioforo"
                  class="form-control"
                  @change="cambiarDatos"
                  v-model="selectTipo"
                >
                  <option value="link">Link</option>
                  <option value="texto">Texto</option>
                </select>
              </div>
              <template v-if="validarTipo">
                <div class="position-relative form-group">
                  <label for="link" class>Link</label>
                  <input
                    name="link"
                    id="link"
                    placeholder="..."
                    type="text"
                    :class="['form-control', $v.parametros.link.$error? 'error-input-select':'']"
                    v-model.trim="$v.parametros.link.$model"
                  />
                  <em
                    v-if="$v.parametros.link.$error&&!$v.parametros.link.required"
                    class="text-error-input"
                  >{{mensajes.required}}</em>
                  <em
                    v-if="$v.parametros.link.$error&&!$v.parametros.link.url"
                    class="text-error-input"
                  >{{mensajes.url}}</em>
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
                        v-model.trim="$v.parametros.fecha.$model"
                        type="datetime"
                        value-type="format"
                        placeholder="..."
                        :class="$v.parametros.fecha.$error? 'error-input-select':''"
                      ></date-picker>
                      <em
                        v-if="$v.parametros.fecha.$error&&!$v.parametros.fecha.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                      :class="['form-control', $v.parametros.lugar.$error? 'error-input-select':'']"
                      v-model.trim="$v.parametros.lugar.$model"
                    />
                    <em
                      v-if="$v.parametros.lugar.$error&&!$v.parametros.lugar.required"
                      class="text-error-input"
                    >{{mensajes.required}}</em>
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
                  :class="['form-control-file', $v.parametros.imagen.$error? 'error-input-select':'']"
                  ref="inputImagen"
                />
                <em v-if="imagenError" class="text-error-input">{{imagenError}}</em>
                <em
                  v-if="$v.parametros.imagen.$error&&!$v.parametros.imagen.required"
                  class="text-error-input"
                >{{mensajes.required}}</em>
              </div>
              <div class="custom-checkbox custom-control mb-2">
                <input
                  type="checkbox"
                  id="publicar"
                  :class="['custom-control-input',$v.parametros.publicar.$error? 'is-invalid':'']"
                  v-model.trim="$v.parametros.publicar.$model"
                />
                <label class="custom-control-label" for="publicar">Desea publicar la Actividad?</label>
              </div>
              <em
                v-if="$v.parametros.publicar.$error&&!$v.parametros.publicar.validarPublicar"
                class="text-error-select"
              >{{mensajes.validarPublicar}}</em>
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
                    <b class="text-success">SIN IMAGEN</b>
                  </span>
                </h5>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <template v-if="!validarTipo">
      <div class="row justify-content-md-center">
        <div class="col-md-12">
          <div class="main-card mb-3 card">
            <div :class="['card-body',$v.parametros.cuerpo.$error?'error-text-editor':'']">
              <h5 class="card-title">Elaborar Actividad</h5>
              <Editor @contenido="aceptarContenido" @modificar="modificarContenido" :info="info" />
              <em
                v-if="$v.parametros.cuerpo.$error&&!$v.parametros.cuerpo.required"
                class="text-error-input"
              >{{mensajes.required}}</em>
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
import { required, url } from "vuelidate/lib/validators";
export default {
  components: { Croppie, Editor },
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
      errors: [],
      bloquearBtn: false,
      mensajes: {
        required: "El campo es requerido.",
        validarPublicar:
          "No es posible publicar la Actividad. Sobrepasa el limite de 7 publicaciones.",
        unique: "Ya existe un registro con ese titulo.",
        url: "La url debe ser valida.",
      },
    };
  },
  validations() {
    if (this.validarTipo) {
      return {
        parametros: {
          titulo: {
            required,
            unique(value) {
              if (value == "") return true;
              if (this.validarTitulo) return false;
              return true;
            },
          },
          link: { required, url },
          imagen: { required },
          fecha: { required },
          lugar: { required },
          publicar: {
            validarPublicar(value) {
              if (!value) return true;
              if (this.validarPublicacion) return false;
              return true;
            },
          },
        },
      };
    } else {
      return {
        parametros: {
          titulo: {
            required,
            unique(value) {
              if (value == "") return true;
              if (this.validarTitulo) return false;
              return true;
            },
          },
          cuerpo: { required },
          imagen: { required },
          fecha: { required },
          lugar: { required },
          publicar: {
            validarPublicar(value) {
              if (value == "") return true;
              if (this.validarPublicacion) return false;
              return true;
            },
          },
        },
      };
    }
  },
  mixins: [Toastr, obtenerImagenCroopie],
  methods: {
    ...vuex.mapActions("publicidad", ["accionActividad"]),
    evento() {
      this.bloquearBtn = true;
      this.$v.parametros.$touch();
      if (!this.$v.$invalid) {
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
              this.verificarError(
                error.response.status,
                error.response.data.errors
              );
            });
        } else {
          axios
            .put(`/publicidad/${this.idActividad}`, this.parametros)
            .then((res) => {
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
      if (!this.validarTipo) {
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
      "getActividadByPublicar",
    ]),
    btnClase() {
      if (this.tituloForm === "Agregar Actividad") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    validarTipoForm() {
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
      if (this.getActividadByTitulo(this.parametros.titulo)) {
        if (
          this.getActividadByTitulo(this.parametros.titulo).id != this.info.id
        ) {
          return true;
        }
        return false;
      }
      return false;
    },
    validarTipo() {
      if (this.selectTipo == "link") {
        return true;
      }
      return false;
    },
    validarPublicacion() {
      if (this.getActividadByPublicar.length < 7) return false;
      if (this.validarTipoForm) return true;
      if (
        this.getActividadByPublicar.find(
          (actividad) => actividad.id == this.info.id
        )
      )
        return false;

      return true;
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