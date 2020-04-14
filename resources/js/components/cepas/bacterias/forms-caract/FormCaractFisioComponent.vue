<template>
  <div>
    <form @submit.prevent="evento" class="mt-4 mr-4 ml-4">
      <div class="row justify-content-md-center">
        <div class="col-sm-6">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">{{tituloForm}}</h5>
              <div class="position-relative form-group">
                <label for="acido_indolacetico" class>Acido Indolacético</label>
                <input
                  name="acido_indolacetico"
                  id="acido_indolacetico"
                  placeholder="..."
                  type="text"
                  class="form-control"
                  v-model="parametros.acido_indolacetico"
                  required
                />
              </div>
              <div class="position-relative form-group">
                <label for="fosforo" class>Fósforo</label>
                <input
                  name="fosforo"
                  id="fosforo"
                  placeholder="..."
                  type="text"
                  class="form-control"
                  v-model="parametros.fosforo"
                  required
                />
              </div>
              <div class="position-relative form-group">
                <label for="sideroforos" class>Sideróforos</label>
                <input
                  name="sideroforos"
                  id="sideroforos"
                  placeholder="..."
                  type="text"
                  class="form-control"
                  v-model="parametros.sideroforos"
                  required
                />
              </div>
              <div class="position-relative form-group">
                <label for="nitrogeno" class>Nitrógeno</label>
                <input
                  name="nitrogeno"
                  id="nitrogeno"
                  placeholder="..."
                  type="text"
                  class="form-control"
                  v-model="parametros.nitrogeno"
                  required
                />
              </div>
              <div class="position-relative form-group">
                <label for="otras_caracteristicas">Otras Caracteristicas</label>
                <textarea
                  name="otras_caracteristicas"
                  id="otras_caracteristicas"
                  class="form-control"
                  v-model="parametros.otras_caracteristicas"
                ></textarea>
              </div>
              <template v-if="required">
                <div class="position-relative form-group">
                  <label for="imagen" class>Imágenes</label>
                  <input
                    name="imagen"
                    @change="obtenerImagenes"
                    id="imagen"
                    type="file"
                    class="form-control-file"
                    ref="inputImagen"
                    multiple
                    :required="required"
                  />
                  <span v-if="erroresImagenes" class="text-danger">{{erroresImagenes}}</span>
                  <!--  <small
                    class="form-text text-muted"
                  >Debe tener un tamaño ''px ''px y un peso de ''kbs.</small>-->
                </div>
              </template>
              <div class="position-relative form-group">
                <label for="descripcion_imagenes">Descripcion Imágenes</label>
                <textarea
                  name="text"
                  id="descripcion_imagenes"
                  class="form-control"
                  v-model="parametros.descripcion_imagenes"
                ></textarea>
              </div>
              <button class="mb-2 mr-2 btn btn-block" :class="btnClase">{{nomBtn}}</button>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">Imagenes</h5>
              <template v-if="mostraImagenes">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <carousel :imagenes="imagenes"></carousel>
                    </div>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="text-center">
                  <h5 class="mt-5 mb-5">
                    <span class="pr-1">
                      <b class="text-warning">SIN IMÁGENES</b>
                    </span>
                  </h5>
                </div>
              </template>
              <template v-if="!required">
                <div class="container mt-3 mb-3">
                  <div class="row">
                    <div class="col-md-4">
                      <button
                        v-show="btnAgregar"
                        type="button"
                        class="mr-3 btn btn-info btn-block"
                        @click="showModalImagen('agregar')"
                      >Agregar</button>
                    </div>
                    <div class="col-md-4">
                      <button
                        v-show="btnCambiar"
                        type="button"
                        class="mr-3 btn btn-warning btn-block"
                        @click="showModalImagen('cambiar')"
                      >Cambiar</button>
                    </div>
                    <div class="col-md-4">
                      <button
                        v-show="btnEliminar"
                        type="button"
                        class="btn btn-danger btn-block"
                        @click="showModalImagen('eliminar')"
                      >Eliminar</button>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </form>
    <modal name="agregar_eliminar_imagen" classes="my_modal" :width="450" :height="450">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">{{modalImagen.titulo}}</h5>
          <button type="button" class="close" @click="$modal.hide('agregar_eliminar_imagen')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <template v-if="modalImagen.nomBtn!='Agregar'">
            <div class="position-relative form-group">
              <label for="select_imagen" class>{{modalImagen.nomLabel}}</label>
              <select
                name="select_imagen"
                id="select_imagen"
                v-model.number="modalImagen.select_imagen"
                class="form-control"
              >
                <option value="1" v-if="parametros.imagen1">Primera</option>
                <option value="2" v-if="parametros.imagen2">Segunda</option>
                <option value="3" v-if="parametros.imagen3">Tercera</option>
              </select>
            </div>
          </template>
          <template v-if="modalImagen.nomBtn==='Cambiar'||modalImagen.nomBtn==='Agregar'">
            <div class="position-relative form-group">
              <label for="imagen" class>Seleccione la nueva Imagen</label>
              <input
                name="imagen"
                @change="verificarImagen"
                id="imagen"
                type="file"
                class="form-control-file"
                ref="inputImagenModal"
              />
              <span v-if="modalImagen.errors" class="text-danger">{{modalImagen.errors}}</span>
            </div>
          </template>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('agregar_eliminar_imagen')"
          >Cancelar</button>
          <button type="button" class="btn btn-primary" @click="accionModal">{{modalImagen.nomBtn}}</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import vuex from "vuex";

export default {
  props: ["info", "modificarInfo"],
  watch: {
    modificarInfo() {
      if (this.modificarInfo) {
        this.llenarInfo();
        this.$emit("cambiarVariable");
      }
    }
  },
  data() {
    return {
      parametros: {
        acido_indolacetico: "",
        fosforo: "",
        sideroforos: "",
        nitrogeno: "",
        otras_caracteristicas: "",
        imagen1: "",
        imagen2: "",
        imagen3: "",
        descripcion_imagenes: ""
      },
      modalImagen: {
        nomBtn: "Cambiar",
        select_imagen: 1,
        imagen: "",
        titulo: "",
        nomLabel: "Cual imagen desea cambiar?",
        errors: ""
      },
      tituloForm: "",
      nomBtn: "",
      errors: [],
      erroresImagenes: "",
      imagenes: []
    };
  },
  methods: {
    evento() {
      if (this.tituloForm === "Agregar Característica") {
        let formData = new FormData();
        this.appendInfo(formData);
        axios
          .post("/cepas/bacteria/caract-fisio", formData, {
            headers: { "Content-Type": "multipart/form-data" }
          })
          .then(res => {
            this.errors = [];
            this.$refs.inputImagen.value = "";
            this.tituloForm = "Editar Característica";
            this.nomBtn = "Editar";
            this.$emit("agregar", res.data);
            this.toastr(
              "Agregar Características Fisiológicas",
              "Características Fisiológicas agregada con exito!!",
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
          .put(`/cepas/bacteria/caract-fisio/${this.info.id}`, this.parametros)
          .then(res => {
            this.errors = [];
            this.$emit("editar", res.data);
            this.toastr(
              "Editar Característica Microscópica",
              "Característica Microscópica editada con exito!!",
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
    obtenerImagenes(e) {
      this.limpiar(0);
      let file = e.target.files[3];
      if (file) {
        this.erroresImagenes = "Solo puede subir max 3 imágenes.";
        this.limpiar(1);
      } else {
        let allowedExtensions = /(.jpg|.jpeg)$/i;
        let imagenes = [];
        for (let index = 0; index < 3; index++) {
          let imagen = e.target.files[index];
          if (imagen) {
            if (!allowedExtensions.exec(imagen.name) || imagen.size > 2000000) {
              this.limpiar(1);
              this.erroresImagenes =
                "Las imagenes deben ser en formato .jpeg/.jpg y menor a 2Mb.";
              imagenes = "";
              break;
            } else {
              this.erroresImagenes = "";
              imagenes.push(imagen);
            }
          } else {
            break;
          }
        }
        this.cargarImagenes(imagenes);
      }
    },
    cargarImagenes(imagenes) {
      if (imagenes) {
        for (let index = 0; index < imagenes.length; index++) {
          let reader = new FileReader();
          reader.onload = e => {
            switch (index) {
              case 0:
                this.parametros.imagen1 = imagenes[index];
                this.pushImagen(1, e.target.result, true);
                break;
              case 1:
                this.parametros.imagen2 = imagenes[index];
                this.pushImagen(2, e.target.result, false);
                break;
              case 2:
                this.parametros.imagen3 = imagenes[index];
                this.pushImagen(3, e.target.result, false);
                break;
            }
          };
          reader.readAsDataURL(imagenes[index]);
        }
      }
    },
    pushImagen(num, imagen, active) {
      this.imagenes.push({
        num: num,
        source: imagen,
        isActive: active
      });
    },
    llenarArregloImagenes() {
      if (this.parametros.imagen1) {
        this.pushImagen(1, this.info.imagenPublica1, true);
        if (this.parametros.imagen2) {
          this.pushImagen(2, this.info.imagenPublica2, false);
        }
        if (this.parametros.imagen3) {
          this.pushImagen(3, this.info.imagenPublica3, false);
        }
      } else if (this.parametros.imagen2) {
        this.pushImagen(2, this.info.imagenPublica2, true);
        if (this.parametros.imagen3) {
          this.pushImagen(3, this.info.imagenPublica3, false);
        }
      } else if (this.parametros.imagen3) {
        this.pushImagen(3, this.info.imagenPublica3, true);
      }
    },
    limpiar(num) {
      switch (num) {
        case 0:
          this.parametros.imagen1 = "";
          this.parametros.imagen2 = "";
          this.parametros.imagen3 = "";
          this.imagenes = [];
          break;
        case 1:
          this.$refs.inputImagen.value = "";
          break;
      }
    },
    llenarInfo() {
      this.imagenes = [];
      this.parametros.acido_indolacetico = this.info.acido_indolacetico;
      this.parametros.fosforo = this.info.fosforo;
      this.parametros.sideroforos = this.info.sideroforos;
      this.parametros.nitrogeno = this.info.nitrogeno;
      this.parametros.otras_caracteristicas = this.info.otras_caract;
      this.parametros.imagen1 = this.info.imagen1;
      this.parametros.imagen2 = this.info.imagen2;
      this.parametros.imagen3 = this.info.imagen3;
      this.parametros.descripcion_imagenes = this.info.descripcion;
      this.llenarArregloImagenes();
    },
    appendInfo(formData) {
      if (this.$route.params.cepaBacteriaId) {
        formData.append("cepaId", this.$route.params.cepaBacteriaId);
      } else {
        formData.append("cepaId", this.$route.params.cepaId);
      }
      formData.append("acido_indolacetico", this.parametros.acido_indolacetico);
      formData.append("fosforo", this.parametros.fosforo);
      formData.append("sideroforos", this.parametros.sideroforos);
      formData.append("nitrogeno", this.parametros.nitrogeno);
      formData.append("otras_caract", this.parametros.otras_caracteristicas);
      formData.append("imagen1", this.parametros.imagen1);
      formData.append("imagen2", this.parametros.imagen2);
      formData.append("imagen3", this.parametros.imagen3);
      formData.append(
        "imagenes_descripcion",
        this.parametros.descripcion_imagenes
      );
    },
    agregar() {
      this.mostrarForm = true;
      this.mostrarBtnAgregar = false;
    },
    cancelar() {
      this.mostrarForm = false;
      this.mostrarBtnAgregar = true;
    },
    showModalImagen(tipo) {
      this.seleccionar();
      this.modalImagen.errors = "";
      this.modalImagen.imagen = "";
      if (tipo === "cambiar") {
        this.modalImagen.nomBtn = "Cambiar";
        this.modalImagen.titulo = "Cambiar Imagen";
        this.modalImagen.nomLabel = "Cual imagen desea cambiar?";
      } else if (tipo === "eliminar") {
        this.modalImagen.nomBtn = "Eliminar";
        this.modalImagen.titulo = "Eliminar Imagen";
        this.modalImagen.nomLabel = "Cual imagen desea eliminar?";
      } else {
        this.modalImagen.nomBtn = "Agregar";
        this.modalImagen.titulo = "Agregar Imagen";
      }

      this.$modal.show("agregar_eliminar_imagen");
    },
    accionModal() {
      this.modalImagen.errors = "";
      if (this.modalImagen.nomBtn === "Cambiar") {
        if (this.$refs.inputImagenModal.value) {
          let formData = new FormData();
          formData.append("numero", this.modalImagen.select_imagen);
          formData.append("imagen", this.modalImagen.imagen);
          formData.append("_method", "PUT");
          axios
            .post(
              `/cepas/bacteria/caract-fisio/cambiar-imagen/${this.info.id}`,
              formData,
              {
                headers: { "Content-Type": "multipart/form-data" }
              }
            )
            .then(res => {
              this.$emit("editar", res.data);
              this.$modal.hide("agregar_eliminar_imagen");
              this.toastr(
                "Cambiar Imagen",
                "La imagen fue cambiada con exito!!",
                "success"
              );
            })
            .catch(error => {
              if (error.response) {
                this.modalImagen.errors = [];
                this.modalImagen.errors = error.response.data.errors;
                this.toastr("Error!!", "", "error");
                // console.log(error.response.data);
              }
            });
        } else {
          this.modalImagen.errors = "Favor seleccionar una imagen.";
        }
      } else if (this.modalImagen.nomBtn === "Eliminar") {
        let parametros = {
          numero: this.modalImagen.select_imagen
        };
        axios
          .put(
            `/cepas/bacteria/caract-fisio/eliminar-imagen/${this.info.id}`,
            parametros
          )
          .then(res => {
            this.$emit("editar", res.data);
            this.$modal.hide("agregar_eliminar_imagen");
            this.toastr(
              "Eliminar Imagen",
              "Imagen eliminada con exito!!",
              "success"
            );
          })
          .catch(error => {
            if (error.response) {
              this.modalImagen.errors = [];
              this.modalImagen.errors = error.response.data.errors;
              this.toastr("Error!!", "", "error");
              // console.log(error.response.data);
            }
          });
      } else {
        if (this.$refs.inputImagenModal.value) {
          this.colocarNumeroAgregar();
          let formData = new FormData();
          formData.append("numero", this.modalImagen.select_imagen);
          formData.append("imagen", this.modalImagen.imagen);
          formData.append("_method", "PUT");
          axios
            .post(
              `/cepas/bacteria/caract-fisio/agregar-imagen/${this.info.id}`,
              formData,
              {
                headers: { "Content-Type": "multipart/form-data" }
              }
            )
            .then(res => {
              this.$emit("editar", res.data);
              this.$modal.hide("agregar_eliminar_imagen");
              this.toastr(
                "Agregar Imagen",
                "La imagen fue agregada con exito!!",
                "success"
              );
            })
            .catch(error => {
              if (error.response) {
                this.modalImagen.errors = [];
                this.modalImagen.errors = error.response.data.errors;
                this.toastr("Error!!", "", "error");
                // console.log(error.response.data);
              }
            });
        } else {
          this.modalImagen.errors = "Favor seleccionar una imagen.";
        }
      }
    },
    colocarNumeroAgregar() {
      if (!this.parametros.imagen1) {
        this.modalImagen.select_imagen = 1;
      } else if (!this.parametros.imagen2) {
        this.modalImagen.select_imagen = 2;
      } else if (!this.parametros.imagen3) {
        this.modalImagen.select_imagen = 3;
      }
    },
    seleccionar() {
      if (this.parametros.imagen1) {
        this.modalImagen.select_imagen = 1;
      } else if (this.parametros.imagen2) {
        this.modalImagen.select_imagen = 2;
      } else if (this.parametros.imagen3) {
        this.modalImagen.select_imagen = 3;
      }
    },
    verificarImagen(e) {
      this.modalImagen.errors = "";
      let file = e.target.files[0];
      this.modalImagen.imagen = file;
      let allowedExtensions = /(.jpg|.jpeg)$/i;
      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.modalImagen.errors =
            "La imagen debe ser en formato .jpeg/.jpg y menor a 2Mb.";
          this.$refs.inputImagenModal.value = "";
          this.modalImagen.imagen = "";
        }
      }
    }
  },
  computed: {
    required() {
      if (this.tituloForm === "Agregar Característica") {
        return true;
      } else {
        return false;
      }
    },
    btnClase() {
      if (this.tituloForm === "Agregar Característica") {
        return "btn-primary";
      } else {
        return "btn-warning";
      }
    },
    mostraImagenes() {
      if (
        this.parametros.imagen1 ||
        this.parametros.imagen2 ||
        this.parametros.imagen3
      ) {
        return true;
      } else {
        return false;
      }
    },
    btnAgregar() {
      if (
        !this.parametros.imagen1 ||
        !this.parametros.imagen2 ||
        !this.parametros.imagen3
      ) {
        return true;
      } else {
        return false;
      }
    },
    btnCambiar() {
      if (
        this.parametros.imagen1 ||
        this.parametros.imagen2 ||
        this.parametros.imagen3
      ) {
        return true;
      } else {
        return false;
      }
    },
    btnEliminar() {
      if (
        this.parametros.imagen1 ||
        this.parametros.imagen2 ||
        this.parametros.imagen3
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    if (this.info) {
      this.llenarInfo();
      this.tituloForm = "Editar Característica";
      this.nomBtn = "Editar";
    } else {
      this.tituloForm = "Agregar Característica";
      this.nomBtn = "Agregar";
    }
  }
};
</script>

<style lang="css">
</style>