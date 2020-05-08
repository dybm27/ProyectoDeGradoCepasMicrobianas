<template>
  <div>
    <form @submit.prevent="evento">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-sm-6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">{{titulo}}</h5>

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

                <template v-if="getInfoCaractMacroBacterias">
                  <label for="forma" class>Forma</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="forma"
                      class="form-control"
                      v-model="parametros.forma"
                    >
                      <option
                        v-for="(f,index) in getInfoCaractMacroBacterias.formas_macros"
                        :key="index"
                        :value="f.id"
                      >{{f.nombre}}</option>
                    </select>
                    <div class="input-group-append">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-info"
                        @click.prevent="showModal('forma_macro')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>

                  <label for="borde" class>Borde</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="borde"
                      class="form-control"
                      v-model="parametros.borde"
                    >
                      <option
                        v-for="(b,index) in getInfoCaractMacroBacterias.bordes"
                        :key="index"
                        :value="b.id"
                      >{{b.nombre}}</option>
                    </select>
                    <div class="input-group-append">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-info"
                        @click.prevent="showModal('borde')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>

                  <label for="detalle_optico" class>Detalle Óptico</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="detalle_optico"
                      class="form-control"
                      v-model="parametros.detalle_optico"
                    >
                      <option
                        v-for="(d,index) in getInfoCaractMacroBacterias.detalle_opticos"
                        :key="index"
                        :value="d.id"
                      >{{d.nombre}}</option>
                    </select>
                    <div class="input-group-append">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-info"
                        @click.prevent="showModal('detalle')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>

                  <label for="elevacion" class>Elevación</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="elevacion"
                      class="form-control"
                      v-model="parametros.elevacion"
                    >
                      <option
                        v-for="(e,index) in getInfoCaractMacroBacterias.elevacions"
                        :key="index"
                        :value="e.id"
                      >{{e.nombre}}</option>
                    </select>
                    <div class="input-group-append">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-info"
                        @click.prevent="showModal('elevacion')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>

                  <label for="superficie" class>Superficie</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="superficie"
                      class="form-control"
                      v-model="parametros.superficie"
                    >
                      <option
                        v-for="(s,index) in getInfoCaractMacroBacterias.superficies"
                        :key="index"
                        :value="s.id"
                      >{{s.nombre}}</option>
                    </select>
                    <div class="input-group-append">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-info"
                        @click.prevent="showModal('superficie')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <label for="color" class>Color</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="color"
                      class="form-control"
                      v-model="parametros.color"
                    >
                      <option
                        v-for="(c,index) in getInfoCaractMacroBacterias.colors"
                        :key="index"
                        :value="c.id"
                      >{{c.nombre}}</option>
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
                </template>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <div class="position-relative form-group">
                  <label>Tamaño</label>
                  <div>
                    <div class="custom-radio custom-control custom-control-inline">
                      <input
                        type="radio"
                        :id="radioId1"
                        name="tamaño"
                        class="custom-control-input"
                        value="grande"
                        v-model="parametros.tamaño"
                      />
                      <label class="custom-control-label" :for="radioId1">Grande</label>
                    </div>
                    <div class="custom-radio custom-control custom-control-inline">
                      <input
                        type="radio"
                        :id="radioId2"
                        name="tamaño"
                        class="custom-control-input"
                        value="mediano"
                        v-model="parametros.tamaño"
                      />
                      <label class="custom-control-label" :for="radioId2">Mediano</label>
                    </div>
                    <div class="custom-radio custom-control custom-control-inline">
                      <input
                        type="radio"
                        :id="radioId3"
                        name="tamaño"
                        class="custom-control-input"
                        value="pequeño"
                        v-model="parametros.tamaño"
                      />
                      <label class="custom-control-label" :for="radioId3">Pequeño</label>
                    </div>
                  </div>
                </div>

                <div class="position-relative form-group">
                  <label for="otras_caract">Otras Características</label>
                  <textarea
                    name="text"
                    id="otras_caract"
                    class="form-control"
                    v-model="parametros.otras_caract"
                  ></textarea>
                </div>

                <div class="position-relative form-group">
                  <label for="imagen" class>Imagen</label>
                  <input
                    name="imagen"
                    @change="obtenerImagen"
                    id="imagen"
                    accept="image/jpeg"
                    type="file"
                    class="form-control-file"
                    ref="inputImagen"
                    :required="required"
                  />
                  <span v-if="imagenError" class="text-danger">{{imagenError}}</span>
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
                  <label for="imagen_descripcion">Descripción de la Imagen</label>
                  <textarea
                    name="text"
                    id="imagen_descripcion"
                    class="form-control"
                    v-model="parametros.imagen_descripcion"
                  ></textarea>
                </div>

                <button class="mb-2 mr-2 btn btn-block" :class="btnClase">{{nomBtnComputed}}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <modal name="agregar-caract-info-bacteria" classes="my_modal" :width="450" :height="450">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">{{modal.titulo}}</h5>
          <button type="button" class="close" @click="$modal.hide('agregar-caract-info-bacteria')">
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
            @click="$modal.hide('agregar-caract-info-bacteria')"
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
  props: ["info", "radioId1", "radioId2", "radioId3", "modificarInfo"],
  data() {
    return {
      parametros: {
        medio: "",
        forma: 1,
        borde: 1,
        elevacion: 1,
        color: 1,
        detalle_optico: 1,
        tamaño: "grande",
        superficie: 1,
        otras_caract: "",
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
    ...vuex.mapActions(["accionAgregarTipoCaractBacteria"]),
    evento() {
      if (this.tituloForm === "Agregar Medio") {
        let formData = new FormData();
        this.appendInfo(formData);
        axios
          .post("/cepas/bacteria/caract-macro", formData, {
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
            .put(
              `/cepas/bacteria/caract-macro/${this.info.id}`,
              this.parametros
            )
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
        } else {
          let formData = new FormData();
          this.appendInfo(formData);
          formData.append("_method", "PUT");
          axios
            .post(`/cepas/bacteria/caract-macro/${this.info.id}`, formData, {
              headers: { "Content-Type": "multipart/form-data" }
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
      this.parametros.forma = this.info.forma_id;
      this.parametros.borde = this.info.borde_id;
      this.parametros.elevacion = this.info.elevacion_id;
      this.parametros.color = this.info.color_id;
      this.parametros.detalle_optico = this.info.detalleoptico_id;
      this.parametros.tamaño = this.info.tamano;
      this.parametros.superficie = this.info.superficie_id;
      this.parametros.otras_caract = this.info.otras_caract;
      this.parametros.imagen = this.info.imagen;
      this.imageMiniatura = this.info.imagenPublica;
      this.parametros.imagen_descripcion = this.info.descripcion;
    },
    appendInfo(formData) {
      if (this.$route.params.cepaBacteriaId) {
        formData.append("cepaId", this.$route.params.cepaBacteriaId);
      } else {
        formData.append("cepaId", this.$route.params.cepaId);
      }
      formData.append("medio", this.parametros.medio);
      formData.append("forma", this.parametros.forma);
      formData.append("borde", this.parametros.borde);
      formData.append("elevacion", this.parametros.elevacion);
      formData.append("color", this.parametros.color);
      formData.append("detalle_optico", this.parametros.detalle_optico);
      formData.append("tamaño", this.parametros.tamaño);
      formData.append("superficie", this.parametros.superficie);
      formData.append(
        "otras_caract",
        this.parametros.otras_caract === null
          ? ""
          : this.parametros.otras_caract
      );
      formData.append("imagen", this.parametros.imagen);
      formData.append(
        "imagen_descripcion",
        this.parametros.imagen_descripcion === null
          ? ""
          : this.parametros.imagen_descripcion
      );
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
      if (tipo === "forma_macro") {
        this.modal.titulo = "Agregar Nueva Forma";
      } else if (tipo === "borde") {
        this.modal.titulo = "Agregar Nuevo Borde";
      } else if (tipo === "detalle") {
        this.modal.titulo = "Agregar Nuevo Detalle Óptico";
      } else if (tipo === "elevacion") {
        this.modal.titulo = "Agregar Nueva Elevación";
      } else if (tipo === "color") {
        this.modal.titulo = "Agregar Nuevo Color";
      } else {
        this.modal.titulo = "Agregar Nueva Superficie";
      }
      this.$modal.show("agregar-caract-info-bacteria");
    },
    agregarInfo() {
      if (this.modal.input === "") {
        this.modal.errors = { nombre: { 0: "Favor llenar este campo" } };
      } else {
        let parametros = {
          tipo: this.modal.tipo,
          nombre: this.modal.input
        };
        axios
          .post("/info-caract-bacterias/agregar", parametros)
          .then(res => {
            this.accionAgregarTipoCaractBacteria({
              info: res.data,
              tipo: this.modal.tipo
            });
            this.$modal.hide("agregar-caract-info-bacteria");
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
    ...vuex.mapGetters(["getInfoCaractMacroBacterias"]),
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

<style scoped>
</style>