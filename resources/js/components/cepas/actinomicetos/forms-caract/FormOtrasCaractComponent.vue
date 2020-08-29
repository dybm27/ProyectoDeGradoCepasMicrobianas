<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-12">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">{{tituloForm}}</h5>
            <form @submit.prevent="evento" class="mt-4 mr-4 ml-4">
              <template v-if="errors!=''">
                <div class="alert alert-danger">
                  <p v-for="(item, index) in errors" :key="index">{{item[0]}}</p>
                </div>
              </template>
              <div class="form-row">
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label for="fijacion_nitrogeno" class>Fijación Nitrogeno</label>
                    <input
                      name="fijacion_nitrogeno"
                      id="fijacion_nitrogeno"
                      placeholder="..."
                      type="text"
                      :class="['form-control', $v.parametros.fijacion_nitrogeno.$error? 'error-input-select':'']"
                      v-model.trim="$v.parametros.fijacion_nitrogeno.$model"
                    />
                    <em
                      v-if="$v.parametros.fijacion_nitrogeno.$error&&!$v.parametros.fijacion_nitrogeno.required"
                      class="text-error-input"
                    >{{mensajes.required}}</em>
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
                      :class="['form-control', $v.parametros.produccion_aia.$error? 'error-input-select':'']"
                      v-model.trim="$v.parametros.produccion_aia.$model"
                    />
                    <em
                      v-if="$v.parametros.produccion_aia.$error&&!$v.parametros.produccion_aia.required"
                      class="text-error-input"
                    >{{mensajes.required}}</em>
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
                      :class="['form-control', $v.parametros.giberelinas.$error? 'error-input-select':'']"
                      v-model.trim="$v.parametros.giberelinas.$model"
                    />
                    <em
                      v-if="$v.parametros.giberelinas.$error&&!$v.parametros.giberelinas.required"
                      class="text-error-input"
                    >{{mensajes.required}}</em>
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
                      :class="['form-control', $v.parametros.produccion_sideroforos.$error? 'error-input-select':'']"
                      v-model.trim="$v.parametros.produccion_sideroforos.$model"
                    />
                    <em
                      v-if="$v.parametros.produccion_sideroforos.$error&&!$v.parametros.produccion_sideroforos.required"
                      class="text-error-input"
                    >{{mensajes.required}}</em>
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
                      :class="['form-control', $v.parametros.solubili_fosforo.$error? 'error-input-select':'']"
                      v-model.trim="$v.parametros.solubili_fosforo.$model"
                    />
                    <em
                      v-if="$v.parametros.solubili_fosforo.$error&&!$v.parametros.solubili_fosforo.required"
                      class="text-error-input"
                    >{{mensajes.required}}</em>
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
                      :class="['form-control', $v.parametros.produccion_pha.$error? 'error-input-select':'']"
                      v-model.trim="$v.parametros.produccion_pha.$model"
                    />
                    <em
                      v-if="$v.parametros.produccion_pha.$error&&!$v.parametros.produccion_pha.required"
                      class="text-error-input"
                    >{{mensajes.required}}</em>
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
                      :class="['form-control', $v.parametros.alta_produc_antibioticos.$error? 'error-input-select':'']"
                      v-model.trim="$v.parametros.alta_produc_antibioticos.$model"
                    />
                    <em
                      v-if="$v.parametros.alta_produc_antibioticos.$error&&!$v.parametros.alta_produc_antibioticos.required"
                      class="text-error-input"
                    >{{mensajes.required}}</em>
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
                      :class="['form-control', $v.parametros.activi_enzimaticas.$error? 'error-input-select':'']"
                      v-model.trim="$v.parametros.activi_enzimaticas.$model"
                    />
                    <em
                      v-if="$v.parametros.activi_enzimaticas.$error&&!$v.parametros.activi_enzimaticas.required"
                      class="text-error-input"
                    >{{mensajes.required}}</em>
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
                      :class="['form-control', $v.parametros.antagonismos.$error? 'error-input-select':'']"
                      v-model.trim="$v.parametros.antagonismos.$model"
                    />
                    <em
                      v-if="$v.parametros.antagonismos.$error&&!$v.parametros.antagonismos.required"
                      class="text-error-input"
                    >{{mensajes.required}}</em>
                  </div>
                </div>
                <template v-if="validarTipoForm">
                  <div class="col-md-4">
                    <div class="position-relative form-group">
                      <label for="imagen" class>Imágenes</label>
                      <input
                        name="imagen"
                        @change="obtenerImagenes"
                        id="imagen"
                        type="file"
                        accept="image/jpeg, image/png"
                        :class="['form-control-file', 
                              $v.parametros.imagen1.$error
                              ||$v.parametros.imagen2.$error
                              ||$v.parametros.imagen3.$error
                              ? 'error-input-select':'']"
                        ref="inputImagen"
                        multiple
                      />
                      <em v-if="erroresImagenes" class="text-error-input">{{erroresImagenes}}</em>
                      <em
                        v-if="($v.parametros.imagen1.$error
                              &&!$v.parametros.imagen1.required)
                              ||
                              ($v.parametros.imagen2.$error
                              &&!$v.parametros.imagen2.required) 
                              ||
                              ($v.parametros.imagen3.$error
                              &&!$v.parametros.imagen3.required)"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                :disabled="bloquearBtn"
              >{{nomBtn}}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <template v-if="validarTipoForm">
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
import { required } from "vuelidate/lib/validators";
export default {
  components: { CroppieCepas, Imagenes },
  props: ["info", "modificarInfo"],
  watch: {
    modificarInfo() {
      if (this.modificarInfo) {
        this.llenarInfo();
        this.$emit("cambiarVariable");
      }
    },
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
        imagen3: "",
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
      fijacion_nitrogeno: { required },
      produccion_aia: { required },
      solubili_fosforo: { required },
      giberelinas: { required },
      antagonismos: { required },
      produccion_sideroforos: { required },
      activi_enzimaticas: { required },
      alta_produc_antibioticos: { required },
      produccion_pha: { required },
      imagen1: { required },
      imagen2: {
        validarImagen2(value) {
          if (value == "" && this.cantImagenes > 1) return false;
          return true;
        },
      },
      imagen3: {
        validarImagen3(value) {
          if (value == "" && this.cantImagenes == 3) return false;
          return true;
        },
      },
    },
  },
  mixins: [Toastr, obtenerImagenCroopie3ImagenesMixin],
  methods: {
    evento() {
      this.bloquearBtn = true;
      this.$v.parametros.$touch();
      if (!this.$v.$invalid) {
        if (this.tituloForm === "Agregar Características") {
          axios
            .post("/cepas/actinomiceto/otras-caract", this.parametros)
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
                this.$refs.inputImagen.value = "";
                this.tituloForm = "Editar Características";
                this.nomBtn = "Editar";
                this.$emit("agregar", res.data);
                this.toastr(
                  "Agregar Otras Característica",
                  "Características agregadas con exito!!",
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
            .put(
              `/cepas/actinomiceto/otras-caract/${this.info.id}`,
              this.parametros
            )
            .then((res) => {
              this.bloquearBtn = false;
              this.errors = [];
              this.$emit("editar", res.data);
              this.toastr(
                "Editar Otras Característica",
                "Características editadas con exito!!",
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
    },
  },
  computed: {
    validarTipoForm() {
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
    },
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
  },
};
</script>
