<template>
  <div class="container mt-3">
    <div class="row justify-content-md-center">
      <div class="col-sm-12">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">{{titulo}}</h5>
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
                        name="secuen_forward"
                        id="secuen_forward"
                        placeholder="Secuencia..."
                        type="text"
                        :class="['form-control', $v.parametros.secuen_forward.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.secuen_forward.$model"
                      />
                      <em
                        v-if="$v.parametros.secuen_forward.$error&&!$v.parametros.secuen_forward.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="position-relative form-group">
                      <input
                        name="produc_forward"
                        id="produc_forward"
                        placeholder="Producto..."
                        type="text"
                        :class="['form-control', $v.parametros.produc_forward.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.produc_forward.$model"
                      />
                      <em
                        v-if="$v.parametros.produc_forward.$error&&!$v.parametros.produc_forward.required"
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
                        name="secuen_reversed"
                        id="secuen_reversed"
                        placeholder="Secuencia..."
                        type="text"
                        :class="['form-control', $v.parametros.secuen_reversed.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.secuen_reversed.$model"
                      />
                      <em
                        v-if="$v.parametros.secuen_reversed.$error&&!$v.parametros.secuen_reversed.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="position-relative form-group">
                      <input
                        name="produc_reversed"
                        id="produc_reversed"
                        placeholder="Producto..."
                        type="text"
                        :class="['form-control', $v.parametros.produc_reversed.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.produc_reversed.$model"
                      />
                      <em
                        v-if="$v.parametros.produc_reversed.$error&&!$v.parametros.produc_reversed.required"
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
                    <label for="imagen1" class>Imagen PCR</label>
                    <input
                      name="imagen1"
                      @change="obtenerImagen1"
                      id="imagen1"
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
                    <label for="imagen2" class>Imagen Secuencia</label>
                    <input
                      name="imagen2"
                      @change="obtenerImagen2"
                      id="imagen2"
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
                <div class="col-md-8">
                  <div class="position-relative form-group">
                    <label for="obser_secuenciacion">Informe de Secuenciación</label>
                    <textarea
                      name="obser_secuenciacion"
                      id="obser_secuenciacion"
                      :class="['form-control', $v.parametros.obser_secuenciacion.$error? 'error-input-select':'']"
                      v-model.trim="$v.parametros.obser_secuenciacion.$model"
                    ></textarea>
                    <em
                      v-if="$v.parametros.obser_secuenciacion.$error&&!$v.parametros.obser_secuenciacion.required"
                      class="text-error-input"
                    >{{mensajes.required}}</em>
                  </div>
                </div>
              </div>
              <button
                class="mb-2 mr-2 btn btn-block"
                :class="btnClase"
                :disabled="bloquearBtn"
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
        secuen_forward: "",
        secuen_reversed: "",
        produc_forward: "",
        produc_reversed: "",
        obser_secuenciacion: "",
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
      secuen_forward: { required },
      secuen_reversed: { required },
      produc_forward: { required },
      produc_reversed: { required },
      obser_secuenciacion: { required },
      imagen1: { required },
      imagen2: { required },
    },
  },
  mixins: [Toastr, obtenerImagenCroopie2ImagenesMixin],
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
            .post("/cepas/bacteria/identi-molecu", this.parametros)
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
              this.verificarError(
                error.response.status,
                error.response.data.errors
              );
            });
        } else {
          axios
            .put(
              `/cepas/bacteria/identi-molecu/${this.info.id}`,
              this.parametros
            )
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
              this.verificarError(
                error.response.status,
                error.response.data.errors
              );
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
      this.parametros.secuen_forward = this.info.secuen_forward;
      this.parametros.secuen_reversed = this.info.secuen_reversed;
      this.parametros.produc_forward = this.info.produc_forward;
      this.parametros.produc_reversed = this.info.produc_reversed;
      this.parametros.obser_secuenciacion = this.info.obser_secuenciacion;
      this.parametros.imagen1 = this.info.img_pcr;
      this.parametros.imagen2 = this.info.img_secuen;
      this.imagenMiniatura1 = this.info.img_pcrPublica;
      this.imagenMiniatura2 = this.info.img_secuenPublica;
      this.imagenInfo1 = this.info.img_pcr;
      this.imagenInfo2 = this.info.img_secuen;
      this.imagenInfoPublica1 = this.info.img_pcrPublica;
      this.imagenInfoPublica2 = this.info.img_secuenPublica;
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
    let array = [];
    if (this.$route.params.cepaBacteriaSlug) {
      array = this.$route.params.cepaBacteriaSlug.split("-");
      this.parametros.cepaId = parseInt(array[array.length - 1]);
    } else {
      array = this.$route.params.cepaSlug.split("-");
      this.parametros.cepaId = parseInt(array[array.length - 1]);
    }
  },
};
</script>