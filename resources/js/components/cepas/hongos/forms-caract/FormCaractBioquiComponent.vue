<template>
  <div class="container mt-4">
    <div class="row justify-content-md-center">
      <div class="col-md-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">{{tituloForm}}</h5>
            <form @submit.prevent="evento">
              <div class="position-relative form-group">
                <label for="enzimas" class>Enzimas</label>
                <input
                  name="enzimas"
                  id="enzimas"
                  placeholder="..."
                  type="text"
                  class="form-control"
                  v-model="parametros.enzimas"
                  required
                />
              </div>
              <div class="position-relative form-group">
                <label for="azucares" class>Azúcares</label>
                <input
                  name="azucares"
                  id="azucares"
                  placeholder="..."
                  type="text"
                  class="form-control"
                  v-model="parametros.azucares"
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
                    type="file"
                    accept="image/jpeg, image/png"
                    class="form-control-file"
                    ref="inputImagen"
                    multiple
                    :required="required"
                  />
                  <span v-if="erroresImagenes" class="text-danger">{{erroresImagenes}}</span>
                </div>
              </template>
              <button
                class="mb-2 mr-2 btn btn-block"
                :class="btnClase"
                :disabled="btnDisable"
              >{{nomBtn}}</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <template v-if="required">
              <template v-if="imagenesCroppie.length===cantImagenes&&$refs.inputImagen.value">
                <croppie-cepas
                  :imagenes="imagenesCroppie"
                  @cambiarValorImagen="cambiarValorImagen"
                  :posicion="'vertical'"
                />
              </template>
              <template v-else>
                <div class="text-center">
                  <h5 class="mt-5 mb-5">
                    <span class="pr-1">
                      <b class="text-success">SIN IMÁGENES</b>
                    </span>
                  </h5>
                </div>
              </template>
            </template>
            <template v-else>
              <imagenes
                :parametros="parametros"
                :tipoCepa="'hongo/caract-bioqui'"
                :imagenes="imagenes"
                :cepa="info"
                @accionImagen="accionImagen"
              ></imagenes>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
        cepaId: "",
        enzimas: "",
        azucares: "",
        otras_caract: "",
        imagen1: "",
        imagen2: "",
        imagen3: ""
      },
      tituloForm: "",
      nomBtn: "",
      errors: [],
      erroresImagenes: "",
      imagenesCroppie: [],
      imagenes: [],
      cantImagenes: ""
    };
  },
  methods: {
    cambiarValorImagen(datos) {
      switch (datos.num) {
        case 1:
          this.imagenes[0].source = datos.data;
          this.parametros.imagen1 = datos.data;
          break;
        case 2:
          this.imagenes[1].source = datos.data;
          this.parametros.imagen2 = datos.data;
          break;
        case 3:
          this.imagenes[2].source = datos.data;
          this.parametros.imagen3 = datos.data;
          break;
      }
    },
    evento() {
      if (this.tituloForm === "Agregar Característica") {
        axios
          .post("/cepas/hongo/caract-bioqui", this.parametros)
          .then(res => {
            this.errors = [];
            this.$refs.inputImagen.value = "";
            this.tituloForm = "Editar Característica";
            this.nomBtn = "Editar";
            this.$emit("agregar", res.data);
            this.toastr(
              "Agregar Características Bioquímicas",
              "Características Bioquímicas agregadas con exito!!",
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
          .put(`/cepas/hongo/caract-bioqui/${this.info.id}`, this.parametros)
          .then(res => {
            this.errors = [];
            this.$emit("editar", res.data);
            this.toastr(
              "Editar Características Bioquímicas",
              "Características Bioquímicas editadas con exito!!",
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
      this.cantImagenes = 0;
      this.limpiar(0);
      let file = e.target.files[3];
      if (file) {
        this.erroresImagenes = "Solo puede subir max 3 imágenes.";
        this.limpiar(1);
      } else {
        let allowedExtensions = /(.jpg|.jpeg|.png)$/i;
        let imagenes = [];
        for (let index = 0; index < 3; index++) {
          let imagen = e.target.files[index];
          if (imagen) {
            if (!allowedExtensions.exec(imagen.name) || imagen.size > 2000000) {
              this.limpiar(1);
              this.erroresImagenes =
                "Las imagenes deben ser en formato .png .jpg y menor a 2Mb.";
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
        this.cantImagenes = imagenes.length;
        this.cargarImagenes(imagenes);
      }
    },
    cargarImagenes(imagenes) {
      this.imagenesCroppie = [];
      if (imagenes) {
        for (let index = 0; index < imagenes.length; index++) {
          let reader = new FileReader();
          reader.onload = e => {
            switch (index) {
              case 0:
                this.imagenesCroppie.push(e.target.result);
                this.pushImagen(1, e.target.result, true);
                break;
              case 1:
                this.imagenesCroppie.push(e.target.result);
                this.pushImagen(2, e.target.result, false);
                break;
              case 2:
                this.imagenesCroppie.push(e.target.result);
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
      this.parametros.enzimas = this.info.enzimas;
      this.parametros.azucares = this.info.azucares;
      this.parametros.otras_caract = this.info.otras_caracteristicas;
      this.parametros.imagen1 = this.info.imagen1;
      this.parametros.imagen2 = this.info.imagen2;
      this.parametros.imagen3 = this.info.imagen3;
      this.llenarArregloImagenes();
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
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    btnDisable() {
      if (this.imagenes != "") {
        if (this.info) {
          if (this.info.imagen1) {
            if (this.imagenes[0] && !this.parametros.imagen1) {
              return true;
            }
            if (this.info.imagen2) {
              if (this.imagenes[1] && !this.parametros.imagen2) {
                return true;
              }
              if (this.info.imagen3) {
                if (this.imagenes[2] && !this.parametros.imagen3) {
                  return true;
                }
              }
            } else if (this.info.imagen3) {
              if (this.imagenes[1] && !this.parametros.imagen3) {
                return true;
              }
            }
          } else if (this.info.imagen2) {
            if (this.imagenes[0] && !this.parametros.imagen2) {
              return true;
            }
            if (this.info.imagen3) {
              if (this.imagenes[1] && !this.parametros.imagen3) {
                return true;
              }
            }
          } else if (this.info.imagen3) {
            if (this.imagenes[0] && !this.parametros.imagen3) {
              return true;
            }
          }
          return false;
        } else {
          if (this.imagenes[0] && !this.parametros.imagen1) {
            return true;
          }
          if (this.imagenes[1] && !this.parametros.imagen2) {
            return true;
          }
          if (this.imagenes[2] && !this.parametros.imagen3) {
            return true;
          }
          return false;
        }
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
    if (this.$route.params.cepaHongoId) {
      this.parametros.cepaId = this.$route.params.cepaHongoId;
    } else {
      this.parametros.cepaId = this.$route.params.cepaId;
    }
  }
};
</script>