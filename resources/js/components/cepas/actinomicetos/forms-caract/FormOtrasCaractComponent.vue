<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-12">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">{{tituloForm}}</h5>
            <form @submit.prevent="evento" class="mt-4 mr-4 ml-4">
              <div class="form-row">
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label for="fijacion_nitrogeno" class>Fijación Nitrogeno</label>
                    <input
                      name="fijacion_nitrogeno"
                      id="fijacion_nitrogeno"
                      placeholder="..."
                      type="text"
                      class="form-control"
                      v-model="parametros.fijacion_nitrogeno"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label for="produccion_aia" class>Producción AIA</label>
                    <input
                      name="produccion_aia"
                      id="produccion_aia"
                      placeholder="..."
                      type="text"
                      class="form-control"
                      v-model="parametros.produccion_aia"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label for="giberelinas" class>Giberelinas</label>
                    <input
                      name="giberelinas"
                      id="giberelinas"
                      placeholder="..."
                      type="text"
                      class="form-control"
                      v-model="parametros.giberelinas"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label for="produccion_sideroforos" class>Producción Sideróforos</label>
                    <input
                      name="produccion_sideroforos"
                      id="produccion_sideroforos"
                      placeholder="..."
                      type="text"
                      class="form-control"
                      v-model="parametros.produccion_sideroforos"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label for="solubili_fosforo" class>Solubilización de Fósforo</label>
                    <input
                      name="solubili_fosforo"
                      id="solubili_fosforo"
                      placeholder="..."
                      type="text"
                      class="form-control"
                      v-model="parametros.solubili_fosforo"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label for="produccion_pha" class>Producción PHA</label>
                    <input
                      name="produccion_pha"
                      id="produccion_pha"
                      placeholder="..."
                      type="text"
                      class="form-control"
                      v-model="parametros.produccion_pha"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label for="alta_produc_antibioticos" class>Alta Producción De Antibióticos</label>
                    <input
                      name="alta_produc_antibioticos"
                      id="alta_produc_antibioticos"
                      placeholder="..."
                      type="text"
                      class="form-control"
                      v-model="parametros.alta_produc_antibioticos"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label for="activi_enzimaticas" class>Actividades Enzimáticas</label>
                    <input
                      name="activi_enzimaticas"
                      id="activi_enzimaticas"
                      placeholder="..."
                      type="text"
                      class="form-control"
                      v-model="parametros.activi_enzimaticas"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div :class="classRow">
                  <div class="position-relative form-group">
                    <label for="antagonismos" class>Antagonismos</label>
                    <input
                      name="antagonismos"
                      id="antagonismos"
                      placeholder="..."
                      type="text"
                      class="form-control"
                      v-model="parametros.antagonismos"
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
                    <label for="otras_caract">Otras Características</label>
                    <textarea
                      name="otras_caract"
                      id="otras_caract"
                      class="form-control autosize-input"
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
    <div class="row justify-content-md-center">
      <template v-if="required">
        <div class="col-md-12">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">Imagenes</h5>
              <template v-if="imagenesCroppie.length===cantImagenes&&$refs.inputImagen.value">
                <CroppieCepas
                  :imagenes="imagenesCroppie"
                  @cambiarValorImagen="cambiarValorImagen"
                  :posicion="'horizontal'"
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
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="col-md-5">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">Imagenes</h5>
              <Imagenes
                :parametros="parametros"
                :tipoCepa="'actinomiceto/otras-caract'"
                :imagenes="imagenes"
                :cepa="info"
                @accionImagen="accionImagen"
              ></Imagenes>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Toastr from "../../../../mixins/toastr";
import obtenerImagenCroopie3ImagenesMixin from "../../../../mixins/obtenerImagenCroopie3Imagenes";
import CroppieCepas from "../../CroppieCepasComponent";
import Imagenes from "../../ImagenesComponent";
export default {
  components: { CroppieCepas, Imagenes },
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
        fijacion_nitrogeno: "",
        produccion_aia: "",
        giberelinas: "",
        solubili_fosforo: "",
        produccion_sideroforos: "",
        antagonismos: "",
        activi_enzimaticas: "",
        alta_produc_antibioticos: "",
        produccion_pha: "",
        otras_caract: "",
        imagen1: "",
        imagen2: "",
        imagen3: ""
      },
      tituloForm: "",
      nomBtn: "",
      errors: []
    };
  },
  mixins: [Toastr, obtenerImagenCroopie3ImagenesMixin],
  methods: {
    evento() {
      if (this.tituloForm === "Agregar Características") {
        axios
          .post("/cepas/actinomiceto/otras-caract", this.parametros)
          .then(res => {
            this.errors = [];
            this.$refs.inputImagen.value = "";
            this.tituloForm = "Editar Características";
            this.nomBtn = "Editar";
            this.$emit("agregar", res.data);
            this.toastr(
              "Agregar Otras Característica",
              "Características agregadas con exito!!",
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
            `/cepas/actinomiceto/otras-caract/${this.info.id}`,
            this.parametros
          )
          .then(res => {
            this.errors = [];
            this.$emit("editar", res.data);
            this.toastr(
              "Editar Otras Característica",
              "Características editadas con exito!!",
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
    llenarInfo() {
      this.imagenes = [];
      this.parametros.fijacion_nitrogeno = this.info.fijacion_nitrogeno;
      this.parametros.produccion_aia = this.info.produccion_aia;
      this.parametros.giberelinas = this.info.giberelinas;
      this.parametros.solubili_fosforo = this.info.solubili_fosforo;
      this.parametros.produccion_sideroforos = this.info.produccion_sideroforos;
      this.parametros.antagonismos = this.info.antagonismos;
      this.parametros.activi_enzimaticas = this.info.activi_enzimaticas;
      this.parametros.alta_produc_antibioticos = this.info.alta_produc_antibioticos;
      this.parametros.produccion_pha = this.info.produccion_pha;
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
      if (this.tituloForm === "Agregar Características") {
        return true;
      } else {
        return false;
      }
    },
    btnClase() {
      if (this.tituloForm === "Agregar Características") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    classRow() {
      if (this.tituloForm === "Agregar Características") {
        return "col-md-4";
      } else {
        return "col-md-6";
      }
    }
  },
  mounted() {
    if (this.info) {
      this.llenarInfo();
      this.tituloForm = "Editar Características";
      this.nomBtn = "Editar";
    } else {
      this.tituloForm = "Agregar Características";
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
