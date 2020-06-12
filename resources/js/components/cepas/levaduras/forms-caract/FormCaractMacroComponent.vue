<template>
  <div>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-sm-6">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">{{titulo}}</h5>
              <form @submit.prevent="evento">
                <div class="position-relative form-group">
                  <label for="medio" class>Medio</label>
                  <input
                    name="medio"
                    id="medio"
                    placeholder="..."
                    type="text"
                    class="form-control"
                    v-model="parametros.medio"
                    required
                  />
                  <span v-if="errors.medio" class="text-danger">{{errors.medio[0]}}</span>
                </div>
                <template v-if="getInfoCaractMacroLevaduras">
                  <label for="color" class>Color</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="color"
                      class="form-control"
                      v-model="parametros.color"
                    >
                      <option
                        v-for="(c,index) in getInfoCaractMacroLevaduras.colors"
                        :key="index"
                        :value="c.id"
                      >{{c.nombre}}</option>
                    </select>
                    <div class="input-group-append">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                        @click.prevent="showModal('color')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <label for="textura" class>Textura</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="textura"
                      class="form-control"
                      v-model="parametros.textura"
                    >
                      <option
                        v-for="(t,index) in getInfoCaractMacroLevaduras.texturas"
                        :key="index"
                        :value="t.id"
                      >{{t.nombre}}</option>
                    </select>
                    <div class="input-group-append">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                        @click.prevent="showModal('textura')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
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
                    class="form-control-file"
                    ref="inputImagen"
                    :required="required"
                  />
                  <span v-if="imagenError" class="text-danger">{{imagenError}}</span>
                </div>
                <div class="position-relative form-group">
                  <label for="topografia_superficie" class>Topografía de la Superficie</label>
                  <input
                    name="topografia_superficie"
                    id="topografia_superficie"
                    placeholder="..."
                    type="text"
                    class="form-control"
                    v-model="parametros.topografia_superficie"
                    required
                  />
                  <span
                    v-if="errors.topografia_superficie"
                    class="text-danger"
                  >{{errors.topografia_superficie[0]}}</span>
                </div>
                <div class="position-relative form-group">
                  <label for="borde_colonia" class>Borde de la Colonia</label>
                  <input
                    name="borde_colonia"
                    id="borde_colonia"
                    placeholder="..."
                    type="text"
                    class="form-control"
                    v-model="parametros.borde_colonia"
                    required
                  />
                  <span v-if="errors.borde_colonia" class="text-danger">{{errors.borde_colonia[0]}}</span>
                </div>
                <button
                  class="mb-2 mr-2 btn btn-block"
                  :class="btnClase"
                  :disabled="validarBtn"
                >{{nomBtnComputed}}</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <template v-if="mostraImagen">
                <template v-if="validarCroppie">
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
    </div>
    <modal name="agregar-caract-info-levadura" classes="my_modal" :width="450" :height="450">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">{{modal.titulo}}</h5>
          <button type="button" class="close" @click="$modal.hide('agregar-caract-info-levadura')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="position-relative form-group">
            <label for="nombre" class>Nombre</label>
            <input
              name="nombre"
              id="nombre"
              placeholder="..."
              type="text"
              class="form-control"
              v-model="modal.input"
              required
            />
            <span v-if="modal.errors.nombre" class="text-danger">{{modal.errors.nombre[0]}}</span>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('agregar-caract-info-levadura')"
          >Cancelar</button>
          <button type="button" class="btn btn-success" @click="agregarInfo">Agregar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import vuex from "vuex";

export default {
  props: ["info", "modificarInfo"],
  data() {
    return {
      parametros: {
        cepaId: "",
        medio: "",
        color: 1,
        textura: 1,
        topografia_superficie: "",
        borde_colonia: "",
        imagen: ""
      },
      modal: {
        titulo: "",
        input: "",
        tipo: "",
        errors: []
      },
      tituloForm: "",
      imagenMiniatura: "",
      nomBtn: "",
      errors: [],
      imagenError: ""
    };
  },
  watch: {
    modificarInfo() {
      if (this.modificarInfo) {
        this.llenarInfo();
        this.$emit("cambiarVariable");
      }
    }
  },
  methods: {
    ...vuex.mapActions("info_caract", ["accionAgregarTipoCaractLevadura"]),
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
      if (this.tituloForm === "Agregar Medio") {
        axios
          .post("/cepas/levadura/caract-macro", this.parametros)
          .then(res => {
            this.errors = [];
            this.$refs.inputImagen.value = "";
            this.tituloForm = "Editar Medio";
            this.nomBtn = "Editar";
            this.$emit("agregar", res.data);
            this.toastr(
              "Agregar Medio",
              "Medio agregado con exito!!",
              "success"
            );
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
          .put(`/cepas/levadura/caract-macro/${this.info.id}`, this.parametros)
          .then(res => {
            this.errors = [];
            this.$refs.inputImagen.value = "";
            this.$emit("editar", res.data);
            this.toastr("Editar Medio", "Medio editado con exito!!", "success");
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
      this.parametros.medio = this.info.medio;
      this.parametros.color = this.info.color_id;
      this.parametros.textura = this.info.textura_id;
      this.parametros.topografia_superficie = this.info.topografia_superficie;
      this.parametros.borde_colonia = this.info.borde_colonia;
      this.parametros.imagen = this.info.imagen;
      this.imagenMiniatura = this.info.imagenPublica;
    },
    obtenerImagen(e) {
      let file = e.target.files[0];
      let allowedExtensions = /(.jpg|.jpeg|.png)$/i;
      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError =
            "La imagen debe ser en formato .jpeg/.jpg y menor a 2Mb.";
          this.$refs.inputImagen.value = "";
          if (this.info) {
            this.imagenMiniatura = this.info.imagenPublica;
            this.parametros.imagen = this.info.imagen;
          } else {
            this.imagenMiniatura = "";
            this.parametros.imagen = "";
          }
        } else {
          this.imagenError = "";
          this.cargarImagen(file);
        }
      } else {
        if (this.info) {
          this.imagenMiniatura = this.info.imagenPublica;
          this.parametros.imagen = this.info.imagen;
        } else {
          this.parametros.imagen = "";
          this.imagenMiniatura = "";
        }
      }
    },
    cargarImagen(file) {
      let reader = new FileReader();
      reader.onload = e => {
        this.imagenMiniatura = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    showModal(tipo) {
      this.modal.input = "";
      this.modal.errors = [];
      this.modal.tipo = tipo;
      if (tipo === "color") {
        this.modal.titulo = "Agregar Nuevo Color";
      } else if (tipo === "textura") {
        this.modal.titulo = "Agregar Nueva Textura";
      }
      this.$modal.show("agregar-caract-info-levadura");
    },
    agregarInfo() {
      if (this.modal.input === "") {
        this.modal.errors = { nombre: { 0: "Favor llenar este campo" } };
      } else {
        this.modal.errors = [];
        let parametros = {
          tipo: this.modal.tipo,
          nombre: this.modal.input
        };
        axios
          .post("/info-caract-levaduras/agregar", parametros)
          .then(res => {
            this.accionAgregarTipoCaractLevadura({
              info: res.data,
              tipo: this.modal.tipo
            });
            this.$modal.hide("agregar-caract-info-levadura");
            this.toastr(
              "Agregar Informacion",
              `${this.modal.tipo} agregado/a con exito`,
              "success"
            );
          })
          .catch(error => {
            if (error.response) {
              this.modal.errors = error.response.data.errors;
            }
            this.toastr("Error!!!!", "", "error");
          });
      }
    }
  },
  computed: {
    ...vuex.mapGetters("info_caract", ["getInfoCaractMacroLevaduras"]),
    mostraImagen() {
      return this.imagenMiniatura;
    },
    btnClase() {
      if (this.tituloForm === "Agregar Medio") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    required() {
      if (this.tituloForm === "Agregar Medio") {
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
    mostrarBtnCroppie() {
      if (this.info) {
        if (this.imagenMiniatura != this.info.imagenPublica) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
    validarCroppie() {
      if (this.info) {
        if (this.imagenMiniatura == this.info.imagenPublica) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    validarBtn() {
      if (!this.parametros.imagen) {
        return true;
      }
      return false;
    }
  },
  mounted() {
    if (this.info === undefined) {
      this.tituloForm = "Agregar Medio";
      this.nomBtn = "Agregar";
      this.parametros.color = this.getInfoCaractMacroLevaduras.colors[0].id;
      this.parametros.textura = this.getInfoCaractMacroLevaduras.texturas[0].id;
    } else {
      this.llenarInfo();
      this.tituloForm = "Editar Medio";
      this.nomBtn = "Editar";
    }
    if (this.$route.params.cepaLevaduraId) {
      this.parametros.cepaId = this.$route.params.cepaLevaduraId;
    } else {
      this.parametros.cepaId = this.$route.params.cepaId;
    }
  }
};
</script>