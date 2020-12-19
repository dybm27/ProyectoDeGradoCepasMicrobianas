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
                <label for="titulo" class>Título</label>
                <input
                  name="titulo"
                  id="titulo"
                  placeholder="..."
                  type="text"
                  :class="[
                    'form-control',
                    $v.parametros.titulo.$error ? 'error-input-select' : '',
                  ]"
                  v-model.trim="$v.parametros.titulo.$model"
                />
                <em
                  v-if="
                    $v.parametros.titulo.$error &&
                    !$v.parametros.titulo.required
                  "
                  class="text-error-input"
                  >{{ mensajes.required }}</em
                >
                <em
                  v-if="
                    $v.parametros.titulo.$error && !$v.parametros.titulo.unique
                  "
                  class="text-error-input"
                  >{{ mensajes.unique }}</em
                >
              </div>
              <div class="position-relative form-group" v-if="validarTipoForm">
                <label for="select" class>Contenido de la Noticia:</label>
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
                    :class="[
                      'form-control',
                      $v.parametros.link.$error ? 'error-input-select' : '',
                    ]"
                    v-model.trim="$v.parametros.link.$model"
                  />
                  <em
                    v-if="
                      $v.parametros.link.$error && !$v.parametros.link.required
                    "
                    class="text-error-input"
                    >{{ mensajes.required }}</em
                  >
                  <em
                    v-if="$v.parametros.link.$error && !$v.parametros.link.url"
                    class="text-error-input"
                    >{{ mensajes.url }}</em
                  >
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
              <div class="custom-checkbox custom-control mb-2">
                <input
                  type="checkbox"
                  id="publicar"
                  :class="[
                    'custom-control-input',
                    $v.parametros.publicar.$error ? 'is-invalid' : '',
                  ]"
                  v-model.trim="$v.parametros.publicar.$model"
                />
                <label class="custom-control-label" for="publicar"
                  >Desea publicar la Noticia?</label
                >
              </div>
              <em
                v-if="
                  $v.parametros.publicar.$error &&
                  !$v.parametros.publicar.validarPublicar
                "
                class="text-error-select"
                >{{ mensajes.validarPublicar }}</em
              >
              <button
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
              <img class="d-block w-100 p-3" :src="mostraImagen" />
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
    <template v-if="selectTipo == 'texto'">
      <div class="row justify-content-md-center">
        <div class="col-md-12">
          <div class="main-card mb-3 card">
            <div
              :class="[
                'card-body',
                $v.parametros.cuerpo.$error ? 'error-text-editor' : '',
              ]"
            >
              <h5 class="card-title">Elaborar Actividad</h5>
              <Editor
                @contenido="aceptarContenido"
                @modificar="modificarContenido"
                :info="info"
              />
              <em
                v-if="
                  $v.parametros.cuerpo.$error && !$v.parametros.cuerpo.required
                "
                class="text-error-input"
                >{{ mensajes.required }}</em
              >
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import vuex from "vuex";
import Toastr from "../../../../mixins/toastr";
import Editor from "../../../editor-texto/EditorTextoComponent.vue";
import { required, url } from "vuelidate/lib/validators";
export default {
  components: {
    Editor,
  },
  props: ["idNoticia"],
  data() {
    return {
      info: "",
      parametros: {
        titulo: "",
        link: "",
        cuerpo: "",
        imagen: "",
        publicar: false,
        tipo: "noticia",
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
      mensajes: {
        required: "El campo es requerido.",
        validarPublicar:
          "No es posible publicar la Noticia. Sobrepasa el limite de 5 publicaciones.",
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
  mixins: [Toastr],
  methods: {
    ...vuex.mapActions("publicidad", ["accionNoticia"]),
    evento() {
      this.bloquearBtn = true;
      this.$v.parametros.$touch();
      if (!this.$v.$invalid) {
        if (this.tituloForm === "Agregar Noticia") {
          let form = new FormData();
          form.append("titulo", this.parametros.titulo);
          form.append("link", this.parametros.link);
          form.append("cuerpo", this.parametros.cuerpo);
          form.append("imagen", this.parametros.imagen);
          form.append("imagenesEditor", this.parametros.imagenesEditor);
          form.append("imagenesGuardadas", this.parametros.imagenesGuardadas);
          if (this.parametros.publicar) {
            form.append("publicar", 1);
          } else {
            form.append("publicar", 0);
          }
          form.append("tipo", this.parametros.tipo);
          axios
            .post("/difusion", form, {
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
                  "Agregar Noticia",
                  "Noticia agregada con exito!!",
                  "success"
                );
                this.accionNoticia({ tipo: "agregar", data: res.data });
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
          if (this.parametros.imagen === this.info.imagen) {
            axios
              .put(`/difusion/${this.idNoticia}`, this.parametros)
              .then((res) => {
                this.bloquearBtn = false;
                this.toastr(
                  "Editar Noticia",
                  "Noticia editada con exito!!",
                  "success"
                );
                window.Echo.private("desbloquearBtnsNoticia").whisper(
                  "desbloquearBtnsNoticia",
                  {
                    id: res.data.id,
                  }
                );
                this.$events.fire("eliminarMiBloqueoNoticia", {
                  id: res.data.id,
                });
                this.accionNoticia({ tipo: "editar", data: res.data });
                this.$emit("cambiarVariableFormulario");
              })
              .catch((error) => {
                this.verificarError(
                  error.response.status,
                  error.response.data.errors
                );
              });
          } else {
            let form = new FormData();
            form.append("titulo", this.parametros.titulo);
            form.append("link", this.parametros.link);
            form.append("cuerpo", this.parametros.cuerpo);
            form.append("imagen", this.parametros.imagen);
            form.append("imagenesEditor", this.parametros.imagenesEditor);
            form.append("imagenesGuardadas", this.parametros.imagenesGuardadas);
            if (this.parametros.publicar) {
              form.append("publicar", 1);
            } else {
              form.append("publicar", 0);
            }
            form.append("tipo", this.parametros.tipo);
            form.append("_method", "PUT");
            axios
              .post(`/difusion/${this.idNoticia}`, form, {
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
                    "Editar Noticia",
                    "Noticia editada con exito!!",
                    "success"
                  );
                  window.Echo.private("desbloquearBtnsNoticia").whisper(
                    "desbloquearBtnsNoticia",
                    {
                      id: res.data.id,
                    }
                  );
                  this.$events.fire("eliminarMiBloqueoNoticia", {
                    id: res.data.id,
                  });
                  this.accionNoticia({ tipo: "editar", data: res.data });
                  this.$emit("cambiarVariableFormulario");
                }
              })
              .catch((error) => {
                this.verificarError(
                  error.response.status,
                  error.response.data.errors
                );
              });
          }
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
    obtenerImagen(e) {
      let file = e.target.files[0];
      this.parametros.imagen = file;
      let allowedExtensions = /(.jpg|.jpeg)$/i;
      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError =
            "La imagen debe ser en formato .jpg y menor a 2Mb.";
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
      reader.onload = (e) => {
        if (e.path[0].height < e.path[0].width) {
          this.imagenMiniatura = reader.src;
        } else {
          this.imagenError = "La imagen debe ser en forma Horizontal.";
          this.imagenMiniatura = this.info.imagenPublica;
          this.$refs.inputImagen.value = "";
          this.parametros.imagen = this.info.imagen;
        }
      };
      reader.src = URL.createObjectURL(file);
    },
    aceptarContenido(data) {
      this.parametros.cuerpo = data.contenido;
      this.parametros.imagenesEditor = data.imagenesEditor;
      this.parametros.imagenesGuardadas = data.imagenesGuardadas;
    },
    modificarContenido() {
      this.parametros.cuerpo = "";
      this.parametros.imagenesEditor = "";
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
      "getNoticiaById",
      "getNoticiaByTitulo",
      "getNoticiaByPublicar",
    ]),
    ...vuex.mapGetters(["getUserAuth"]),
    mostraImagen() {
      return this.imagenMiniatura;
    },
    btnClase() {
      if (this.tituloForm === "Agregar Noticia") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    validarTipoForm() {
      if (this.tituloForm === "Agregar Noticia") {
        return true;
      } else {
        return false;
      }
    },
    validarTipo() {
      if (this.selectTipo == "link") {
        return true;
      }
      return false;
    },
    titulo() {
      return this.tituloForm;
    },
    nomBtnComputed() {
      return this.nomBtn;
    },
    validarTitulo() {
      if (this.getNoticiaByTitulo(this.parametros.titulo)) {
        if (
          this.getNoticiaByTitulo(this.parametros.titulo).id != this.info.id
        ) {
          return true;
        }
        return false;
      }
      return false;
    },
    validarPublicacion() {
      if (this.getNoticiaByPublicar.length < 5) return false;
      if (this.validarTipoForm) return true;
      if (this.getNoticiaByPublicar.find((notica) => notica.id == this.info.id))
        return false;

      return true;
    },
  },
  created() {
    if (this.idNoticia === 0) {
      this.tituloForm = "Agregar Noticia";
      this.nomBtn = "Agregar";
      this.$emit("cambiarTipo", "agregar");
    } else {
      this.info = this.getNoticiaById(this.idNoticia);
      this.llenarInfo();
      this.$emit("cambiarTipo", "editar");
      this.tituloForm = "Editar Noticia";
      this.nomBtn = "Editar";
    }
  },
};
</script>