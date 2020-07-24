<template>
  <div class="container mt-4">
    <div class="row justify-content-md-center">
      <div class="col-sm-12">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">{{ titulo }}</h5>
            <form @submit.prevent="evento">
              <template v-if="errors!=''">
                <div class="alert alert-danger">
                  <p v-for="(item, index) in errors" :key="index">{{item[0]}}</p>
                </div>
              </template>
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
                        name="secuencia_forward"
                        id="secuencia_forward"
                        placeholder="Secuencia..."
                        type="text"
                        class="form-control"
                        v-model="parametros.secuencia_forward"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="position-relative form-group">
                      <input
                        name="producto_forward"
                        id="producto_forward"
                        placeholder="Producto..."
                        type="text"
                        class="form-control"
                        v-model="parametros.producto_forward"
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
                        name="secuencia_reversed"
                        id="secuencia_reversed"
                        placeholder="Secuencia..."
                        type="text"
                        class="form-control"
                        v-model="parametros.secuencia_reversed"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="position-relative form-group">
                      <input
                        name="producto_reversed"
                        id="producto_reversed"
                        placeholder="Producto..."
                        type="text"
                        class="form-control"
                        v-model="parametros.producto_reversed"
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
              <br />

              <div class="form-row">
                <div class="col-md-4">
                  <label for="condiciones_pcr" class>Condiciones PCR</label>
                  <div class="input-group">
                    <input
                      placeholder="..."
                      name="condiciones_pcr"
                      id="condiciones_pcr"
                      type="text"
                      class="form-control"
                      v-model="parametros.condiciones_pcr"
                      required
                    />
                  </div>
                </div>

                <div class="col-md-4">
                  <label for="blast" class>BLAST</label>
                  <div class="input-group">
                    <input
                      placeholder="..."
                      name="blast"
                      id="blast"
                      type="text"
                      class="form-control"
                      v-model="parametros.blast"
                      required
                    />
                  </div>
                </div>

                <div class="col-md-4">
                  <label for="analisis_filogenetico" class>Análisis Filogenético</label>
                  <div class="input-group">
                    <input
                      placeholder="..."
                      name="analisis_filogenetico"
                      id="analisis_filogenetico"
                      type="text"
                      class="form-control"
                      v-model="parametros.analisis_filogenetico"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="form-row justify-content-md-center mt-2">
                <div class="col-md-4">
                  <div class="position-relative form-group">
                    <label for="imagen_pcr" class>Imagen PCR</label>
                    <input
                      name="imagen_pcr"
                      @change="obtenerImagen1"
                      id="imagen_pcr"
                      type="file"
                      accept="image/jpeg, image/png"
                      class="form-control-file"
                      ref="inputImagen1"
                      :required="required"
                    />
                    <span v-if="imagenError.imagen1" class="text-danger">{{ imagenError.imagen1 }}</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="position-relative form-group">
                    <label for="imagen_blast" class>Imagen BLAST</label>
                    <input
                      name="imagen_blast"
                      @change="obtenerImagen2"
                      id="imagen_blast"
                      type="file"
                      accept="image/jpeg, image/png"
                      class="form-control-file"
                      ref="inputImagen2"
                      :required="required"
                    />
                    <span v-if="imagenError.imagen2" class="text-danger">{{ imagenError.imagen2 }}</span>
                  </div>
                </div>
              </div>
              <div class="form-row justify-content-md-center">
                <div class="col-md-8">
                  <div class="position-relative form-group">
                    <label for="observaciones">Observaciones</label>
                    <textarea
                      name="observaciones"
                      id="observaciones"
                      class="form-control"
                      v-model="parametros.observaciones"
                    ></textarea>
                  </div>
                </div>
              </div>
              <button
                class="mb-2 mr-2 btn btn-block"
                :class="btnClase"
                :disabled="validarBtn||bloquearBtn"
              >{{ nomBtnComputed }}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-sm-5">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <template v-if="mostraImagen1">
              <h5 class="card-title">Imagen PCR</h5>
              <template v-if="validarCroppie1">
                <croppie
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
                <croppie
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
      <div class="col-sm-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <template v-if="mostraImagen2">
              <h5 class="card-title">Imagen BLAST</h5>
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
                    <b class="text-success">SIN IMAGEN BLAST</b>
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
import obtenerImagenCroopie2Imagenes from "../../../../mixins/obtenerImagenCroopie2Imagenes";
import Croppie from "../../../CroppieComponent.vue";
export default {
  components: { Croppie },
  props: ["info", "modificarInfo"],
  data() {
    return {
      parametros: {
        cepaId: "",
        nombre_forward: "",
        nombre_reversed: "",
        secuencia_forward: "",
        secuencia_reversed: "",
        producto_forward: "",
        producto_reversed: "",
        condiciones_pcr: "",
        blast: "",
        analisis_filogenetico: "",
        observaciones: "",
        imagen1: "",
        imagen2: "",
      },
      tituloForm: "",
      nomBtn: "",
      errors: [],
      bloquearBtn: false,
    };
  },
  mixins: [Toastr, obtenerImagenCroopie2Imagenes],
  watch: {
    modificarInfo() {
      if (this.modificarInfo) {
        this.llenarInfo();
        this.$emit("cambiarVariable");
      }
    },
  },
  methods: {
    evento() {
      this.bloquearBtn = true;
      if (this.tituloForm === "Agregar Identificación") {
        if (this.parametros.imagen1 && this.parametros.imagen2) {
          axios
            .post("/cepas/hongo/identi-molecu", this.parametros)
            .then((res) => {
              if (res.request.responseURL === process.env.MIX_LOGIN) {
                this.$ls.set(
                  "mensajeLogin",
                  "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                );
                window.location.href = "/";
              }
              this.bloquearBtn = false;
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
            .catch((error) => {
              this.bloquearBtn = false;
              this.errors = [];
              this.errors = error.response.data.errors;
              this.toastr("Error!!", "", "error");
            });
        } else {
          this.bloquearBtn = false;
          this.errors = {
            imagen: ["Favor agregre las respectivas imagenes."],
          };
          this.toastr("Error!!", "", "error");
        }
      } else {
        axios
          .put(`/cepas/hongo/identi-molecu/${this.info.id}`, this.parametros)
          .then((res) => {
            if (res.request.responseURL === process.env.MIX_LOGIN) {
              this.$ls.set(
                "mensajeLogin",
                "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
              );
              window.location.href = "/";
            }
            this.bloquearBtn = false;
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
          .catch((error) => {
            this.bloquearBtn = false;
            this.errors = [];
            this.errors = error.response.data.errors;
            this.toastr("Error!!", "", "error");
          });
      }
    },
    llenarInfo() {
      this.parametros.nombre_forward = this.info.nombre_forward;
      this.parametros.nombre_reversed = this.info.nombre_reversed;
      this.parametros.secuencia_forward = this.info.secuencia_forward;
      this.parametros.secuencia_reversed = this.info.secuencia_reversed;
      this.parametros.producto_forward = this.info.producto_forward;
      this.parametros.producto_reversed = this.info.producto_reversed;
      this.parametros.condiciones_pcr = this.info.condiciones_pcr;
      this.parametros.blast = this.info.blast;
      this.parametros.analisis_filogenetico = this.info.analisis_filogenetico;
      this.parametros.observaciones = this.info.observaciones;
      this.parametros.imagen1 = this.info.imagen_pcr;
      this.parametros.imagen2 = this.info.imagen_blast;
      this.imagenMiniatura1 = this.info.imagen_pcrPublica;
      this.imagenMiniatura2 = this.info.imagen_blastPublica;
    },
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
    },
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
    if (this.$route.params.cepaHongoId) {
      this.parametros.cepaId = this.$route.params.cepaHongoId;
    } else {
      this.parametros.cepaId = this.$route.params.cepaId;
    }
  },
};
</script>