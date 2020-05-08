<template>
  <div>
    <form @submit.prevent="evento">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-sm-6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">{{ titulo }}</h5>
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
                  <span v-if="errors.medio" class="text-danger">{{ errors.medio[0] }}</span>
                </div>
                <template v-if="getInfoCaractMacroHongos">
                  <label for="color" class>Color</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="color"
                      class="form-control"
                      v-model="parametros.color"
                    >
                      <option
                        v-for="(f,index) in getInfoCaractMacroHongos.colores"
                        :key="index"
                        :value="f.id"
                      >{{ f.nombre }}</option>
                    </select>
                    <div class="input-group-append">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-info"
                        @click.prevent="showModal('color')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <label for="borde" class>Textura</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="textura"
                      class="form-control"
                      v-model="parametros.textura"
                    >
                      <option
                        v-for="(b,index) in getInfoCaractMacroHongos.texturas"
                        :key="index"
                        :value="b.id"
                      >{{ b.nombre }}</option>
                    </select>
                    <div class="input-group-append">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-info"
                        @click.prevent="showModal('textura')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </template>
                <div class="position-relative form-group">
                  <label for="otras_caracteristicas">Características del reverso</label>
                  <textarea
                    name="text"
                    id="caracteristicas_reverso"
                    class="form-control"
                    v-model="parametros.caracteristicas_reverso"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <div class="position-relative form-group">
                  <label for="imagen" class>Imagen</label>
                  <input
                    name="imagen"
                    @change="obtenerImagen"
                    id="imagen"
                    type="file"
                    class="form-control-file"
                    accept="image/jpeg"
                    ref="inputImagen"
                    :required="required"
                  />
                  <span v-if="imagenError" class="text-danger">{{ imagenError }}</span>
                </div>
                <template v-if="mostraImagen">
                  <div class="table-responsive">
                    <figure class="text-center">
                      <img
                        width="210"
                        height="210"
                        :src="mostraImagen"
                        alt="Imagen Caracteristica Macroscopica"
                      />
                    </figure>
                  </div>
                </template>
                <div class="position-relative form-group">
                  <label for="imagen_descripcion">Descripcion de la Imagen</label>
                  <textarea
                    name="text"
                    id="imagen_descripcion"
                    class="form-control"
                    v-model="parametros.imagen_descripcion"
                  ></textarea>
                </div>
                <button class="mb-2 mr-2 btn btn-block" :class="btnClase">{{ nomBtnComputed }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

    <modal name="agregar-caract-info" classes="my_modal" :width="450" :height="450">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">{{ modal.titulo }}</h5>
          <button type="button" class="close" @click="$modal.hide('agregar-caract-info')">
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
            <span v-if="modal.errors.nombre" class="text-danger">
              {{
              modal.errors.nombre[0]
              }}
            </span>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('agregar-caract-info')"
          >Cancelar</button>
          <button type="button" class="btn btn-primary" @click="agregarInfo">Agregar</button>
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
        medio: "",
        color: 1,
        textura: 1,
        caracteristicas_reverso: "",
        imagen: "",
        imagen_descripcion: ""
      },
      modal: {
        titulo: "",
        input: "",
        tipo: "",
        errors: []
      },
      tituloForm: "",
      imageMiniatura: "",
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
    ...vuex.mapActions(["accionAgregarTipoCaractHongo"]),
    evento() {
      if (this.tituloForm === "Agregar Medio") {
        let formData = new FormData();
        this.appendInfo(formData);
        axios
          .post("/cepas/hongo/caract-macro", formData, {
            headers: { "Content-Type": "multipart/form-data" }
          })
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
        if (this.parametros.imagen === this.info.imagen) {
          axios
            .put(`/cepas/hongo/caract-macro/${this.info.id}`, this.parametros)
            .then(res => {
              this.errors = [];
              this.$refs.inputImagen.value = "";
              this.$emit("editar", res.data);
              this.toastr(
                "Editar Medio",
                "Medio editado con éxito!!",
                "success"
              );
            })
            .catch(error => {
              if (error.response) {
                this.errors = [];
                this.errors = error.response.data.errors;
                this.toastr("Error!!", "", "error");
                // console.log(error.response.data);
              }
            });
        } else {
          let formData = new FormData();
          this.appendInfo(formData);
          formData.append("_method", "PUT");
          axios
            .post(`/cepas/hongo/caract-macro/${this.info.id}`, formData, {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            })
            .then(res => {
              this.errors = [];
              this.$refs.inputImagen.value = "";
              this.$emit("editar", res.data);
              this.toastr(
                "Editar Medio",
                "Medio editado con exito!!",
                "success"
              );
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
      this.parametros.caracteristicas_reverso =
        this.info.caracteristicas_reverso === "null"
          ? ""
          : this.info.caracteristicas_reverso;
      this.parametros.imagen = this.info.imagen;
      this.imageMiniatura = this.info.imagenPublica;
      this.parametros.imagen_descripcion =
        this.info.descripcion === "null" ? "" : this.info.descripcion;
    },
    appendInfo(formData) {
      if (this.$route.params.cepaHongoId) {
        formData.append("cepaId", this.$route.params.cepaHongoId);
      } else {
        formData.append("cepaId", this.$route.params.cepaId);
      }
      formData.append("medio", this.parametros.medio);
      formData.append("color", this.parametros.color);
      formData.append("textura", this.parametros.textura);
      formData.append(
        "caracteristicas_reverso",
        this.parametros.caracteristicas_reverso
      );
      formData.append("imagen", this.parametros.imagen);
      formData.append("imagen_descripcion", this.parametros.imagen_descripcion);
    },
    obtenerImagen(e) {
      let file = e.target.files[0];
      this.parametros.imagen = file;
      let allowedExtensions = /(.jpg|.jpeg)$/i;
      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError =
            "La imagen debe ser en formato .jpeg/.jpg y menor a 2Mb.";
          this.imageMiniatura = "";
          this.$refs.inputImagen.value = "";
          this.parametros.imagen = "";
        } else {
          this.imagenError = "";
          this.cargarImagen(file);
        }
      }
    },
    cargarImagen(file) {
      let reader = new FileReader();
      reader.onload = e => {
        this.imageMiniatura = e.target.result;
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
      this.$modal.show("agregar-caract-info");
    },
    agregarInfo() {
      if (this.modal.input === "") {
        this.modal.errors = {
          nombre: { 0: "Favor llenar este campo" }
        };
      } else {
        let parametros = {
          tipo: this.modal.tipo,
          nombre: this.modal.input
        };
        axios
          .post("/info-caract-hongos/agregar", parametros)
          .then(res => {
            this.accionAgregarTipoCaractHongo({
              info: res.data,
              tipo: this.modal.tipo
            });
            this.$modal.hide("agregar-caract-info");
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
    ...vuex.mapGetters(["getInfoCaractMacroHongos"]),
    mostraImagen() {
      return this.imageMiniatura;
    },
    btnClase() {
      if (this.tituloForm === "Agregar Medio") {
        return "btn-primary";
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
    }
  },
  mounted() {
    if (this.info === undefined) {
      this.tituloForm = "Agregar Medio";
      this.nomBtn = "Agregar";
    } else {
      this.llenarInfo();
      this.tituloForm = "Editar Medio";
      this.nomBtn = "Editar";
    }
  }
};
</script>