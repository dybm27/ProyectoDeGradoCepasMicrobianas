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
                <label for="otras_caract">Otras Características</label>
                <textarea
                  name="otras_caract"
                  id="otras_caract"
                  class="form-control"
                  v-model="parametros.otras_caract"
                ></textarea>
              </div>
              <template v-if="required">
                <div class="position-relative form-group">
                  <label for="imagen" class>Imágenes</label>
                  <input
                    name="imagen"
                    @change="obtenerImagenes"
                    id="imagen"
                    accept="image/jpeg"
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
        </div>
        <div class="col-sm-6">
          <imagenes
            :required="required"
            :parametros="parametros"
            :tipoCepa="'bacteria/caract-fisio'"
            :imagenes="imagenes"
            :cepa="info"
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
        acido_indolacetico: "",
        fosforo: "",
        sideroforos: "",
        nitrogeno: "",
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
      this.parametros.otras_caract = this.info.otras_caract;
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