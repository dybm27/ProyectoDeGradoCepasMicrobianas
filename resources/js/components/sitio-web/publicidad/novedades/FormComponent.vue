<template>
  <div class="container mt-3 ml-2 mr-2">
    <div class="row justify-content-md-center">
      <div class="col-sm-6">
        <div class="main-card mb-3 card">
          <form @submit.prevent="evento">
            <div class="card-body">
              <h5 class="card-title">{{titulo}}</h5>
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
                <label for="select" class>Contenido de la Novedad:</label>
                <select
                  name="select"
                  id="conidioforo"
                  class="form-control"
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
                <label class="custom-control-label" for="publicar">Desea publicar la Novedad?</label>
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
              <h5 class="card-title">Elaborar Novedad</h5>
              <editor-texto
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
export default {
  props: ["idNovedad"],
  data() {
    return {
      info: "",
      parametros: {
        titulo: "",
        link: "",
        cuerpo: "",
        imagen: "",
        publicar: false,
        tipo: "novedad",
        imagenesEditor: [],
        imagenesGuardadas: []
      },
      selectTipo: "link",
      tituloForm: "",
      imagenMiniatura: "",
      nomBtn: "",
      imagenError: "",
      mensajeTitulo: "",
      mensajeLink: ""
    };
  },
  methods: {
    ...vuex.mapActions("publicidad", ["accionNovedad"]),
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
      if (this.tituloForm === "Agregar Novedad") {
        axios
          .post("/publicidad", this.parametros)
          .then(res => {
            this.toastr(
              "Agregar Novedad",
              "Novedad agregada con exito!!",
              "success"
            );
            this.accionNovedad({ tipo: "agregar", data: res.data });
            this.$emit("cambiarVariableFormulario");
          })
          .catch(error => {
            if (error.response) {
              this.toastr(
                "Error!!",
                error.response.data.errors.titulo[0],
                "error"
              );
            }
          });
      } else {
        axios
          .put(`/publicidad/${this.idNovedad}`, this.parametros)
          .then(res => {
            this.toastr(
              "Editar Novedad",
              "Novedad editada con exito!!",
              "success"
            );
            window.Echo.private("desbloquearBtnsNovedad").whisper(
              "desbloquearBtnsNovedad",
              {
                id: res.data.id
              }
            );
            window.Echo.private("desbloquearCheckNovedad").whisper(
              "desbloquearCheckNovedad",
              {
                id: res.data.id
              }
            );
            this.$events.fire("spliceMisBloqueosNovedad", {
              id: res.data.id
            });
            this.accionNovedad({ tipo: "editar", data: res.data });
            this.$emit("cambiarVariableFormulario");
          })
          .catch(error => {
            if (error.response) {
              this.toastr(
                "Error!!",
                error.response.data.errors.titulo[0],
                "error"
              );
            }
          });
      }
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
    },
    aceptarContenido(data) {
      this.parametros.cuerpo = data.contenido;
      this.parametros.imagenesEditor = data.imagenesEditor;
      this.parametros.imagenesGuardadas = data.imagenesGuardadas;
    },
    modificarContenido() {
      this.parametros.cuerpo = "";
    }
  },
  computed: {
    ...vuex.mapGetters("publicidad", ["getNovedadById", "getNovedadByTitulo"]),
    mostraImagen() {
      return this.imagenMiniatura;
    },
    btnClase() {
      if (this.tituloForm === "Agregar Novedad") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    required() {
      if (this.tituloForm === "Agregar Novedad") {
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
        let titulo = this.getNovedadByTitulo(this.parametros.titulo);
        if (titulo) {
          if (titulo.id != this.info.id) {
            this.mensajeTitulo = "Ya existe una novedad con ese titulo";
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
    mostrarBtnCroppie() {
      if (this.imagenMiniatura != this.info.imagenPublica) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    if (this.idNovedad === 0) {
      this.tituloForm = "Agregar Novedad";
      this.nomBtn = "Agregar";
      this.$emit("cambiarTipo", "agregar");
    } else {
      this.info = this.getNovedadById(this.idNovedad);
      this.llenarInfo();
      this.$emit("cambiarTipo", "editar");
      this.tituloForm = "Editar Novedad";
      this.nomBtn = "Editar";
    }
  }
};
</script>