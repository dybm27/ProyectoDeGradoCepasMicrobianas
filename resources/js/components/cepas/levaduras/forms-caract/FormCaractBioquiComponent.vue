<template>
  <div>
    <form @submit.prevent="evento" class="mt-4 mr-4 ml-4">
      <div class="row justify-content-md-center">
        <div class="col-sm-6">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">{{tituloForm}}</h5>
              <div class="position-relative form-group">
                <label for="ureasa" class>Ureasa</label>
                <input
                  name="ureasa"
                  id="ureasa"
                  placeholder="..."
                  type="text"
                  class="form-control"
                  v-model="parametros.ureasa"
                  required
                />
              </div>
              <div class="position-relative form-group">
                <label for="fenol_oxidasa" class>Fenol Oxidasa</label>
                <input
                  name="fenol_oxidasa"
                  id="fenol_oxidasa"
                  placeholder="..."
                  type="text"
                  class="form-control"
                  v-model="parametros.fenol_oxidasa"
                  required
                />
              </div>
              <div class="position-relative form-group">
                <label for="produccion_acido" class>Producción de ácido a partir de algunos azúcares</label>
                <input
                  name="produccion_acido"
                  id="produccion_acido"
                  placeholder="..."
                  type="text"
                  class="form-control"
                  v-model="parametros.produccion_acido"
                  required
                />
              </div>
              <div class="position-relative form-group">
                <label for="fenol_oxidasa" class>Termotolerancia</label>
                <div class="input-group mb-1">
                  <div class="input-group-prepend">
                    <span class="input-group-text">37°C</span>
                  </div>
                  <input type="text" class="form-control" v-model="parametros.termotolerancia_37" />
                </div>
                <div class="input-group mb-1">
                  <div class="input-group-prepend">
                    <span class="input-group-text">42°C</span>
                  </div>
                  <input type="text" class="form-control" v-model="parametros.termotolerancia_42" />
                </div>
                <div class="input-group mb-1">
                  <div class="input-group-prepend">
                    <span class="input-group-text">45°C</span>
                  </div>
                  <input type="text" class="form-control" v-model="parametros.termotolerancia_45" />
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">otra°</span>
                  </div>
                  <input type="text" class="form-control" v-model="parametros.termotolerancia_otra" />
                </div>
              </div>
              <div class="position-relative form-group">
                <label>Crecimineto</label>
                <div>
                  <div class="custom-radio custom-control custom-control-inline">
                    <input
                      type="radio"
                      id="crecimiento1"
                      name="crecimiento"
                      class="custom-control-input"
                      value="positivo"
                      v-model="parametros.crecimiento"
                    />
                    <label class="custom-control-label" for="crecimiento1">Positivo +</label>
                  </div>
                  <div class="custom-radio custom-control custom-control-inline">
                    <input
                      type="radio"
                      id="crecimiento2"
                      name="crecimiento"
                      class="custom-control-input"
                      value="negativo"
                      v-model="parametros.crecimiento"
                    />
                    <label class="custom-control-label" for="crecimiento2">Negativo -</label>
                  </div>
                </div>
              </div>
              <div class="position-relative form-group">
                <label for="nitratos" class>Nitratos</label>
                <input
                  name="nitratos"
                  id="nitratos"
                  placeholder="..."
                  type="text"
                  class="form-control"
                  v-model="parametros.nitratos"
                  required
                />
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
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <template v-if="required">
                <div class="position-relative form-group">
                  <label for="imagen" class>Imágenes</label>
                  <input
                    name="imagen"
                    @change="obtenerImagenes"
                    id="imagen"
                    type="file"
                    accept="image/jpeg"
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
                <label for="descripcion_imagenes">Descripción Imágenes</label>
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
          <imagenes
            :required="required"
            :parametros="this.parametros"
            :tipoCepa="'levadura/caract-bioqui'"
            :imagenes="this.imagenes"
            :cepa="this.info"
            @accionImagen="accionImagen"
          ></imagenes>
        </div>
      </div>
    </form>
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
        ureasa: "",
        fenol_oxidasa: "",
        produccion_acido: "",
        termotolerancia_37: "",
        termotolerancia_42: "",
        termotolerancia_45: "",
        termotolerancia_otra: "",
        crecimiento: "positivo",
        nitratos: "",
        otras_caract: "",
        imagen1: "",
        imagen2: "",
        imagen3: "",
        descripcion_imagenes: ""
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
          .post("/cepas/levadura/caract-bioqui", formData, {
            headers: { "Content-Type": "multipart/form-data" }
          })
          .then(res => {
            this.errors = [];
            this.$refs.inputImagen.value = "";
            this.tituloForm = "Editar Característica";
            this.nomBtn = "Editar";
            this.$emit("agregar", res.data);
            this.toastr(
              "Agregar Características Bioquímicas",
              "Característica Bioquímica agregada con exito!!",
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
          .put(`/cepas/levadura/caract-bioqui/${this.info.id}`, this.parametros)
          .then(res => {
            this.errors = [];
            this.$emit("editar", res.data);
            this.toastr(
              "Editar Características Bioquímicas",
              "Característica Bioquímica editada con exito!!",
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

      this.parametros.crecimiento = this.info.crecimiento;
      this.parametros.ureasa = this.info.ureasa;
      this.parametros.fenol_oxidasa = this.info.fenol_oxidasa;
      this.parametros.produccion_acido = this.info.produccion_acido;
      this.parametros.termotolerancia_37 = this.info.termotolerancia_37;
      this.parametros.termotolerancia_42 = this.info.termotolerancia_42;
      this.parametros.termotolerancia_45 = this.info.termotolerancia_45;
      this.parametros.termotolerancia_otra = this.info.termotolerancia_otra;
      this.parametros.nitratos = this.info.nitratos;

      this.parametros.otras_caract = this.info.otras_caract;
      this.parametros.imagen1 = this.info.imagen1;
      this.parametros.imagen2 = this.info.imagen2;
      this.parametros.imagen3 = this.info.imagen3;
      this.parametros.descripcion_imagenes = this.info.descripcion;
      this.llenarArregloImagenes();
    },
    appendInfo(formData) {
      if (this.$route.params.cepaLevaduraId) {
        formData.append("cepaId", this.$route.params.cepaLevaduraId);
      } else {
        formData.append("cepaId", this.$route.params.cepaId);
      }
      formData.append("crecimiento", this.parametros.crecimiento);
      formData.append("ureasa", this.parametros.ureasa);
      formData.append("fenol_oxidasa", this.parametros.fenol_oxidasa);
      formData.append("produccion_acido", this.parametros.produccion_acido);
      formData.append("termotolerancia_37", this.parametros.termotolerancia_37);
      formData.append("termotolerancia_42", this.parametros.termotolerancia_42);
      formData.append("termotolerancia_45", this.parametros.termotolerancia_45);
      formData.append(
        "termotolerancia_otra",
        this.parametros.termotolerancia_otra === null
          ? ""
          : this.parametros.termotolerancia_otra
      );
      formData.append("nitratos", this.parametros.nitratos);
      formData.append(
        "otras_caract",
        this.parametros.otras_caract === null
          ? ""
          : this.parametros.otras_caract
      );
      formData.append("imagen1", this.parametros.imagen1);
      formData.append("imagen2", this.parametros.imagen2);
      formData.append("imagen3", this.parametros.imagen3);
      formData.append(
        "descripcion_imagenes",
        this.parametros.descripcion_imagenes === null
          ? ""
          : this.parametros.descripcion_imagenes
      );
    },
    accionImagen(data) {
      this.$emit("editar", data);
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