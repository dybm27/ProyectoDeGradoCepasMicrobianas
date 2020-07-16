<template>
  <div class="container mt-3">
    <div class="row justify-content-md-center">
      <div class="col-sm-12">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">{{titulo}}</h5>
            <form @submit.prevent="evento">
              <div class="position-relative form-group">
                <label for="medio" class>Primers</label>
                <div class="form-row">
                  <div class="col-md-3">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">F</span>
                      </div>
                      <input
                        placeholder="Nombre.."
                        name="nombre_forward"
                        id="nombre_forward"
                        type="text"
                        class="form-control"
                        v-model="parametros.nombre_forward"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <input
                        name="secuen_forward"
                        id="secuen_forward"
                        placeholder="Secuencia..."
                        type="text"
                        class="form-control"
                        v-model="parametros.secuen_forward"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="position-relative form-group">
                      <input
                        name="produc_forward"
                        id="produc_forward"
                        placeholder="Producto..."
                        type="text"
                        class="form-control"
                        v-model="parametros.produc_forward"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-3">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">R</span>
                      </div>
                      <input
                        placeholder="Nombre.."
                        name="nombre_reversed"
                        id="nombre_reversed"
                        type="text"
                        class="form-control"
                        v-model="parametros.nombre_reversed"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <input
                        name="secuen_reversed"
                        id="secuen_reversed"
                        placeholder="Secuencia..."
                        type="text"
                        class="form-control"
                        v-model="parametros.secuen_reversed"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="position-relative form-group">
                      <input
                        name="produc_reversed"
                        id="produc_reversed"
                        placeholder="Producto..."
                        type="text"
                        class="form-control"
                        v-model="parametros.produc_reversed"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-row justify-content-md-center">
                <div class="col-md-5">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Genero</span>
                    </div>
                    <input type="text" class="form-control" :value="getGeneroCepa.nombre" disabled />
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Especie</span>
                    </div>
                    <input type="text" class="form-control" :value="getEspecieCepa.nombre" disabled />
                  </div>
                </div>
              </div>
              <div class="form-row justify-content-md-center mt-2">
                <div class="col-md-4">
                  <div class="position-relative form-group">
                    <label for="imagen1" class>Imagen PCR</label>
                    <input
                      name="imagen1"
                      @change="obtenerImagen1"
                      id="imagen1"
                      type="file"
                      accept="image/jpeg, image/png"
                      class="form-control-file"
                      ref="inputImagen1"
                      :required="required"
                    />
                    <span v-if="imagenError.imagen1" class="text-danger">{{imagenError.imagen1}}</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="position-relative form-group">
                    <label for="imagen2" class>Imagen Secuencia</label>
                    <input
                      name="imagen2"
                      @change="obtenerImagen2"
                      id="imagen2"
                      type="file"
                      accept="image/jpeg, image/png"
                      class="form-control-file"
                      ref="inputImagen2"
                      :required="required"
                    />
                    <span v-if="imagenError.imagen2" class="text-danger">{{imagenError.imagen2}}</span>
                  </div>
                </div>
              </div>
              <div class="form-row justify-content-md-center">
                <div class="col-md-8">
                  <div class="position-relative form-group">
                    <label for="obser_secuenciacion">Informe de Secuenciación</label>
                    <textarea
                      name="obser_secuenciacion"
                      id="obser_secuenciacion"
                      class="form-control"
                      v-model="parametros.obser_secuenciacion"
                      required
                    ></textarea>
                  </div>
                </div>
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
    </div>
    <div class="row justify-content-md-center">
      <div class="col-md-5">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <template v-if="mostraImagen1">
              <h5 class="card-title">Imagen PCR</h5>
              <template v-if="validarCroppie1">
                <Croppie
                  :id="'croppie1'"
                  :imagen="mostraImagen1"
                  @cambiarValorImagen="cambiarValorImagen1"
                  :mostrarBtnCroppie="mostrarBtnCroppie1"
                  :enableZoom="false"
                  :zoom="0"
                  :editar="true"
                  :boundaryHeigth="300"
                  :viewportWidth="200"
                />
              </template>
              <template v-else>
                <Croppie
                  :id="'croppie1'"
                  :imagen="mostraImagen1"
                  @cambiarValorImagen="cambiarValorImagen1"
                  :mostrarBtnCroppie="mostrarBtnCroppie1"
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
                    <b class="text-success">SIN IMAGEN PCR</b>
                  </span>
                </h5>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <template v-if="mostraImagen2">
              <h5 class="card-title">Imagen Secuenciación</h5>
              <template v-if="validarCroppie2">
                <Croppie
                  :id="'croppie2'"
                  :imagen="mostraImagen2"
                  @cambiarValorImagen="cambiarValorImagen2"
                  :mostrarBtnCroppie="mostrarBtnCroppie2"
                  :enableZoom="false"
                  :zoom="0"
                  :editar="true"
                  :boundaryHeigth="300"
                  :viewportWidth="300"
                />
              </template>
              <template v-else>
                <Croppie
                  :id="'croppie2'"
                  :imagen="mostraImagen2"
                  @cambiarValorImagen="cambiarValorImagen2"
                  :mostrarBtnCroppie="mostrarBtnCroppie2"
                  :zoom="1"
                  :enableZoom="true"
                  :editar="false"
                  :boundaryHeigth="300"
                  :viewportWidth="300"
                />
              </template>
            </template>
            <template v-else>
              <div class="text-center">
                <h5 class="mt-5 mb-5">
                  <span class="pr-1">
                    <b class="text-success">SIN IMAGEN DE SECUENCIACIÓN</b>
                  </span>
                </h5>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vuex from "vuex";
import Toastr from "../../../../mixins/toastr";
import obtenerImagenCroopie2ImagenesMixin from "../../../../mixins/obtenerImagenCroopie2Imagenes";
import Croppie from "../../../CroppieComponent";
export default {
  components: { Croppie },
  props: ["info", "modificarInfo"],
  data() {
    return {
      parametros: {
        cepaId: "",
        nombre_forward: "",
        nombre_reversed: "",
        secuen_forward: "",
        secuen_reversed: "",
        produc_forward: "",
        produc_reversed: "",
        obser_secuenciacion: "",
        imagen1: "",
        imagen2: ""
      },
      tituloForm: "",
      nomBtn: "",
      errors: []
    };
  },
  mixins: [Toastr, obtenerImagenCroopie2ImagenesMixin],
  watch: {
    modificarInfo() {
      if (this.modificarInfo) {
        this.llenarInfo();
        this.$emit("cambiarVariable");
      }
    }
  },
  methods: {
    evento() {
      if (this.tituloForm === "Agregar Identificación") {
        axios
          .post("/cepas/bacteria/identi-molecu", this.parametros)
          .then(res => {
            this.errors = [];
            this.$refs.inputImagen1.value = "";
            this.$refs.inputImagen2.value = "";
            this.tituloForm = "Editar Identificación";
            this.nomBtn = "Editar";
            this.$emit("agregar", res.data);
            this.toastr(
              "Agregar Identificación",
              "Identificación Molecular agregada con exito!!",
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
          .put(`/cepas/bacteria/identi-molecu/${this.info.id}`, this.parametros)
          .then(res => {
            this.errors = [];
            this.$refs.inputImagen1.value = "";
            this.$refs.inputImagen2.value = "";
            this.$emit("editar", res.data);
            this.toastr(
              "Editar Identificación",
              "Identificación Molecular editada con exito!!",
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
      this.parametros.nombre_forward = this.info.nombre_forward;
      this.parametros.nombre_reversed = this.info.nombre_reversed;
      this.parametros.secuen_forward = this.info.secuen_forward;
      this.parametros.secuen_reversed = this.info.secuen_reversed;
      this.parametros.produc_forward = this.info.produc_forward;
      this.parametros.produc_reversed = this.info.produc_reversed;
      this.parametros.obser_secuenciacion = this.info.obser_secuenciacion;
      this.parametros.imagen1 = this.info.img_pcr;
      this.parametros.imagen2 = this.info.img_secuen;
      this.imagenMiniatura1 = this.info.img_pcrPublica;
      this.imagenMiniatura2 = this.info.img_secuenPublica;
    }
  },
  computed: {
    ...vuex.mapGetters("info_cepas", ["getGeneroCepa", "getEspecieCepa"]),
    btnClase() {
      if (this.tituloForm === "Agregar Identificación") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    required() {
      if (this.tituloForm === "Agregar Identificación") {
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
    if (this.info) {
      this.llenarInfo();
      this.tituloForm = "Editar Identificación";
      this.nomBtn = "Editar";
    } else {
      this.tituloForm = "Agregar Identificación";
      this.nomBtn = "Agregar";
    }
    if (this.$route.params.cepaBacteriaId) {
      this.parametros.cepaId = this.$route.params.cepaBacteriaId;
    } else {
      this.parametros.cepaId = this.$route.params.cepaId;
    }
  }
};
</script>