<template>
  <div class="container mt-4">
    <div class="row justify-content-md-center">
      <div class="col-md-12">
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
                        :class="['form-control', $v.parametros.nombre_forward.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.nombre_forward.$model"
                      />
                      <em
                        v-if="$v.parametros.nombre_forward.$error&&!$v.parametros.nombre_forward.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <input
                        name="secuencia_forward"
                        id="secuencia_forward"
                        placeholder="Secuencia..."
                        type="text"
                        :class="['form-control', $v.parametros.secuencia_forward.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.secuencia_forward.$model"
                      />
                      <em
                        v-if="$v.parametros.secuencia_forward.$error&&!$v.parametros.secuencia_forward.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="position-relative form-group">
                      <input
                        name="producto_forward"
                        id="producto_forward"
                        placeholder="Producto..."
                        type="text"
                        :class="['form-control', $v.parametros.producto_forward.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.producto_forward.$model"
                      />
                      <em
                        v-if="$v.parametros.producto_forward.$error&&!$v.parametros.producto_forward.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                        :class="['form-control', $v.parametros.nombre_reversed.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.nombre_reversed.$model"
                      />
                      <em
                        v-if="$v.parametros.nombre_reversed.$error&&!$v.parametros.nombre_reversed.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <input
                        name="secuencia_reversed"
                        id="secuencia_reversed"
                        placeholder="Secuencia..."
                        type="text"
                        :class="['form-control', $v.parametros.secuencia_reversed.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.secuencia_reversed.$model"
                      />
                      <em
                        v-if="$v.parametros.secuencia_reversed.$error&&!$v.parametros.secuencia_reversed.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="position-relative form-group">
                      <input
                        name="producto_reversed"
                        id="producto_reversed"
                        placeholder="Producto..."
                        type="text"
                        :class="['form-control', $v.parametros.producto_reversed.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.producto_reversed.$model"
                      />
                      <em
                        v-if="$v.parametros.producto_reversed.$error&&!$v.parametros.producto_reversed.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                    <label for="imagen_pcr" class>Imagen PCR</label>
                    <input
                      name="imagen_pcr"
                      @change="obtenerImagen1"
                      id="imagen_pcr"
                      type="file"
                      accept="image/jpeg, image/png"
                      :class="['form-control-file', $v.parametros.imagen1.$error? 'error-input-select':'']"
                      ref="inputImagen1"
                    />
                    <em v-if="imagenError.imagen1" class="text-error-input">{{imagenError.imagen1}}</em>
                    <em
                      v-if="$v.parametros.imagen1.$error&&!$v.parametros.imagen1.required"
                      class="text-error-input"
                    >{{mensajes.required}}</em>
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
                      :class="['form-control-file', $v.parametros.imagen2.$error? 'error-input-select':'']"
                      ref="inputImagen2"
                    />
                    <em v-if="imagenError.imagen2" class="text-error-input">{{imagenError.imagen2}}</em>
                    <em
                      v-if="$v.parametros.imagen2.$error&&!$v.parametros.imagen2.required"
                      class="text-error-input"
                    >{{mensajes.required}}</em>
                  </div>
                </div>
              </div>
              <div class="form-row justify-content-md-center">
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label for="condiciones_pcr" class>Condiciones PCR</label>
                    <input
                      name="condiciones_pcr"
                      id="condiciones_pcr"
                      placeholder="..."
                      type="text"
                      :class="['form-control', $v.parametros.condiciones_pcr.$error? 'error-input-select':'']"
                      v-model.trim="$v.parametros.condiciones_pcr.$model"
                    />
                    <em
                      v-if="$v.parametros.condiciones_pcr.$error&&!$v.parametros.condiciones_pcr.required"
                      class="text-error-input"
                    >{{mensajes.required}}</em>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label for="blast" class>Blast</label>
                    <input
                      name="blast"
                      id="blast"
                      placeholder="..."
                      type="text"
                      :class="['form-control', $v.parametros.blast.$error? 'error-input-select':'']"
                      v-model.trim="$v.parametros.blast.$model"
                    />
                    <em
                      v-if="$v.parametros.blast.$error&&!$v.parametros.blast.required"
                      class="text-error-input"
                    >{{mensajes.required}}</em>
                  </div>
                </div>
              </div>
              <div class="form-row justify-content-md-center">
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label for="analisis_filogenetico">Análisis Filogenético</label>
                    <textarea
                      name="analisis_filogenetico"
                      id="analisis_filogenetico"
                      :class="['form-control', $v.parametros.analisis_filogenetico.$error? 'error-input-select':'']"
                      v-model.trim="$v.parametros.analisis_filogenetico.$model"
                    ></textarea>
                    <em
                      v-if="$v.parametros.analisis_filogenetico.$error&&!$v.parametros.analisis_filogenetico.required"
                      class="text-error-input"
                    >{{mensajes.required}}</em>
                  </div>
                </div>
                <div class="col-md-6">
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
                :disabled="bloquearBtn"
              >{{ nomBtnComputed }}</button>
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
      <div class="col-md-6">
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
import { required } from "vuelidate/lib/validators";
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
      mensajes: {
        required: "El campo es requerido",
      },
    };
  },
  validations: {
    parametros: {
      nombre_forward: { required },
      nombre_reversed: { required },
      secuencia_forward: { required },
      secuencia_reversed: { required },
      producto_forward: { required },
      producto_reversed: { required },
      condiciones_pcr: { required },
      blast: { required },
      analisis_filogenetico: { required },
      imagen1: { required },
      imagen2: { required },
    },
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
      this.$v.parametros.$touch();
      if (!this.$v.$invalid) {
        if (this.tituloForm === "Agregar Identificación") {
          axios
            .post("/cepas/hongo/identi-molecu", this.parametros)
            .then((res) => {
              if (res.request.responseURL === process.env.MIX_LOGIN) {
                localStorage.setItem(
                  "mensajeLogin",
                  "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                );
                window.location.href = "/";
              } else {
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
              }
            })
            .catch((error) => {
              if (error.response.status === 403) {
                this.$router.push("/sin-acceso");
              } else {
                this.bloquearBtn = false;
                if (error.response.status === 422) {
                  this.errors = [];
                  this.errors = error.response.data.errors;
                }
                this.toastr("Error!!", "", "error");
              }
            });
        } else {
          axios
            .put(`/cepas/hongo/identi-molecu/${this.info.id}`, this.parametros)
            .then((res) => {
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
              if (error.response.status === 403) {
                this.$router.push("/sin-acceso");
              } else if (error.response.status === 405) {
                window.location.href = "/";
              } else {
                this.bloquearBtn = false;
                if (error.response.status === 422) {
                  this.errors = [];
                  this.errors = error.response.data.errors;
                }
                this.toastr("Error!!", "", "error");
              }
            });
        }
      } else {
        this.bloquearBtn = false;
        this.toastr(
          "Error!!",
          "Favor llenar correctamente los campos",
          "error"
        );
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
      this.imagenInfo1 = this.info.imagen_pcr;
      this.imagenInfo2 = this.info.imagen_blast;
      this.imagenInfoPublica1 = this.info.imagen_pcrPublica;
      this.imagenInfoPublica2 = this.info.imagen_blastPublica;
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
    validarTipoForm() {
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