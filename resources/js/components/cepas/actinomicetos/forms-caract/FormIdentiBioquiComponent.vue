<template>
  <div>
    <div class="container mt-4">
      <div class="main-card mb-3 card">
        <div class="card-body">
          <h5 class="card-title">{{tituloForm}}</h5>
          <div class="row justify-content-md-center">
            <div class="col-md-12">
              <form @submit.prevent="evento">
                <div class="form-row">
                  <div class="col-md-4">
                    <div class="position-relative form-group">
                      <label for="oxidasa" class>Oxidasa</label>
                      <input
                        name="oxidasa"
                        id="oxidasa"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.oxidasa"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="position-relative form-group">
                      <label for="catalasa" class>Catalasa</label>
                      <input
                        name="catalasa"
                        id="catalasa"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.catalasa"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="position-relative form-group">
                      <label for="citrato" class>Citrato</label>
                      <input
                        name="citrato"
                        id="citrato"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.citrato"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-4">
                    <div class="position-relative form-group">
                      <label for="nitrato" class>Nitratos</label>
                      <input
                        name="nitrato"
                        id="nitrato"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.nitrato"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="position-relative form-group">
                      <label for="caseina" class>Caseina</label>
                      <input
                        name="caseina"
                        id="caseina"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.caseina"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="position-relative form-group">
                      <label for="hidro_urea" class>Hidrolisís de la Úrea</label>
                      <input
                        name="hidro_urea"
                        id="hidro_urea"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.hidro_urea"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div :class="classRow">
                    <div class="position-relative form-group">
                      <label for="hidro_gelatina" class>Hidrolisís de la Gelatina</label>
                      <input
                        name="hidro_gelatina"
                        id="hidro_gelatina"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.hidro_gelatina"
                        required
                      />
                    </div>
                  </div>
                  <template v-if="required">
                    <div class="col-md-4">
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
                    </div>
                  </template>
                  <div :class="classRow">
                    <div class="position-relative form-group">
                      <label for="sensi_antibioticos" class>Sensibilidad a Antibióticos</label>
                      <input
                        name="sensi_antibioticos"
                        id="sensi_antibioticos"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.sensi_antibioticos"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-6">
                    <label for="manitol">
                      <b>Fermentación de:</b>
                    </label>
                    <div class="form-row">
                      <div class="col-md-6">
                        <div class="position-relative form-group">
                          <label for="fer_lactosa" class>Lactosa</label>
                          <input
                            name="fer_lactosa"
                            id="fer_lactosa"
                            placeholder="..."
                            type="text"
                            class="form-control"
                            v-model="parametros.fer_lactosa"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="position-relative form-group">
                          <label for="fer_manitol" class>Manitol</label>
                          <input
                            name="fer_manitol"
                            id="fer_manitol"
                            placeholder="..."
                            type="text"
                            class="form-control"
                            v-model="parametros.fer_manitol"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col-md-6">
                        <div class="position-relative form-group">
                          <label for="fer_inositol" class>Inositol</label>
                          <input
                            name="fer_inositol"
                            id="fer_inositol"
                            placeholder="..."
                            type="text"
                            class="form-control"
                            v-model="parametros.fer_inositol"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="position-relative form-group">
                          <label for="fer_sacarosa" class>Sacarosa</label>
                          <input
                            name="fer_sacarosa"
                            id="fer_sacarosa"
                            placeholder="..."
                            type="text"
                            class="form-control"
                            v-model="parametros.fer_sacarosa"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="otras_caract">Otras Características</label>
                      <textarea
                        style="height: 153px;"
                        name="otras_caract"
                        id="otras_caract"
                        class="form-control"
                        v-model="parametros.otras_caract"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button
                  class="mb-2 mr-2 btn btn-block"
                  :class="btnClase"
                  :disabled="btnDisable"
                >{{nomBtn}}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-md-center">
        <template v-if="required">
          <div class="col-md-12">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Imagenes</h5>
                <template v-if="imagenesCroppie.length===cantImagenes&&$refs.inputImagen.value">
                  <croppie-cepas
                    :imagenes="imagenesCroppie"
                    @cambiarValorImagen="cambiarValorImagen"
                    :posicion="'horizontal'"
                  />
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
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="col-md-5">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Imagenes</h5>
                <imagenes
                  :parametros="parametros"
                  :tipoCepa="'actinomiceto/identi-bioqui'"
                  :imagenes="imagenes"
                  :cepa="info"
                  @accionImagen="accionImagen"
                ></imagenes>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
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
        cepaId: "",
        oxidasa: "",
        catalasa: "",
        citrato: "",
        caseina: "",
        nitrato: "",
        sensi_antibioticos: "",
        fer_manitol: "",
        fer_lactosa: "",
        fer_inositol: "",
        fer_sacarosa: "",
        hidro_gelatina: "",
        hidro_urea: "",
        otras_caract: "",
        imagen1: "",
        imagen2: "",
        imagen3: "",
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
      if (this.tituloForm === "Agregar Identificación") {
        axios
          .post("/cepas/actinomiceto/identi-bioqui", this.parametros)
          .then(res => {
            this.errors = [];
            this.$refs.inputImagen.value = "";
            this.tituloForm = "Editar Identificación";
            this.nomBtn = "Editar";
            this.$emit("agregar", res.data);
            this.toastr(
              "Agregar Identificación Bioquímica",
              "Identificación Bioquímica agregada con exito!!",
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
          .put(
            `/cepas/actinomiceto/identi-bioqui/${this.info.id}`,
            this.parametros
          )
          .then(res => {
            this.errors = [];
            this.$emit("editar", res.data);
            this.toastr(
              "Editar Identificación Bioquímica",
              "Identificación Bioquímica editada con exito!!",
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
      this.parametros.oxidasa = this.info.oxidasa;
      this.parametros.catalasa = this.info.catalasa;
      this.parametros.citrato = this.info.citrato;
      this.parametros.caseina = this.info.caseina;
      this.parametros.nitrato = this.info.nitrato;
      this.parametros.sensi_antibioticos = this.info.sensi_antibioticos;
      this.parametros.fer_manitol = this.info.fer_manitol;
      this.parametros.fer_lactosa = this.info.fer_lactosa;
      this.parametros.fer_inositol = this.info.fer_inositol;
      this.parametros.fer_sacarosa = this.info.fer_sacarosa;
      this.parametros.hidro_gelatina = this.info.hidro_gelatina;
      this.parametros.hidro_urea = this.info.hidro_urea;
      this.parametros.otras_caract = this.info.otras_caract;
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
      if (this.tituloForm === "Agregar Identificación") {
        return true;
      } else {
        return false;
      }
    },
    btnClase() {
      if (this.tituloForm === "Agregar Identificación") {
        return "btn-primary";
      } else {
        return "btn-warning";
      }
    },
    classRow() {
      if (this.tituloForm === "Agregar Identificación") {
        return "col-md-4";
      } else {
        return "col-md-6";
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
      this.tituloForm = "Editar Identificación";
      this.nomBtn = "Editar";
    } else {
      this.tituloForm = "Agregar Identificación";
      this.nomBtn = "Agregar";
    }
    if (this.$route.params.cepaActinomicetoId) {
      this.parametros.cepaId = this.$route.params.cepaActinomicetoId;
    } else {
      this.parametros.cepaId = this.$route.params.cepaId;
    }
  }
};
</script>
