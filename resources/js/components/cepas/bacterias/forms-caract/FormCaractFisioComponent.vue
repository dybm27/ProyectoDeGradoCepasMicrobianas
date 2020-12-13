<template>
  <div class="mt-4 mr-4 ml-4">
    <div class="row justify-content-md-center">
      <div class="col-sm-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">{{ tituloForm }}</h5>
            <form @submit.prevent="evento">
              <template v-if="errors != ''">
                <div class="alert alert-danger">
                  <p v-for="(item, index) in errors" :key="index">
                    {{ item[0] }}
                  </p>
                </div>
              </template>
              <div class="position-relative form-group">
                <label for="acido_indolacetico" class>Acido indolacético</label>
                <input
                  dusk="acido_indolacetico"
                  name="acido_indolacetico"
                  id="acido_indolacetico"
                  placeholder="..."
                  type="text"
                  :class="[
                    'form-control',
                    $v.parametros.acido_indolacetico.$error
                      ? 'error-input-select'
                      : '',
                  ]"
                  v-model.trim="$v.parametros.acido_indolacetico.$model"
                />
                <em
                  v-if="
                    $v.parametros.acido_indolacetico.$error &&
                    !$v.parametros.acido_indolacetico.required
                  "
                  class="text-error-input"
                  >{{ mensajes.required }}</em
                >
              </div>
              <div class="position-relative form-group">
                <label for="fosforo" class>Fósforo</label>
                <input
                  dusk="fosforo"
                  name="fosforo"
                  id="fosforo"
                  placeholder="..."
                  type="text"
                  :class="[
                    'form-control',
                    $v.parametros.fosforo.$error ? 'error-input-select' : '',
                  ]"
                  v-model.trim="$v.parametros.fosforo.$model"
                />
                <em
                  v-if="
                    $v.parametros.fosforo.$error &&
                    !$v.parametros.fosforo.required
                  "
                  class="text-error-input"
                  >{{ mensajes.required }}</em
                >
              </div>
              <div class="position-relative form-group">
                <label for="sideroforos" class>Sideróforos</label>
                <input
                  dusk="sideroforos"
                  name="sideroforos"
                  id="sideroforos"
                  placeholder="..."
                  type="text"
                  :class="[
                    'form-control',
                    $v.parametros.sideroforos.$error
                      ? 'error-input-select'
                      : '',
                  ]"
                  v-model.trim="$v.parametros.sideroforos.$model"
                />
                <em
                  v-if="
                    $v.parametros.sideroforos.$error &&
                    !$v.parametros.sideroforos.required
                  "
                  class="text-error-input"
                  >{{ mensajes.required }}</em
                >
              </div>
              <div class="position-relative form-group">
                <label for="nitrogeno" class>Nitrógeno</label>
                <input
                  dusk="nitrogeno"
                  name="nitrogeno"
                  id="nitrogeno"
                  placeholder="..."
                  type="text"
                  :class="[
                    'form-control',
                    $v.parametros.nitrogeno.$error ? 'error-input-select' : '',
                  ]"
                  v-model.trim="$v.parametros.nitrogeno.$model"
                />
                <em
                  v-if="
                    $v.parametros.nitrogeno.$error &&
                    !$v.parametros.nitrogeno.required
                  "
                  class="text-error-input"
                  >{{ mensajes.required }}</em
                >
              </div>
              <template v-if="validarTipoForm">
                <div class="position-relative form-group">
                  <label for="imagen" class>Imágenes</label>
                  <input
                    dusk="imagen"
                    name="imagen"
                    @change="obtenerImagenes"
                    id="imagen"
                    accept="image/jpeg, image/png"
                    type="file"
                    :class="[
                      'form-control-file',
                      $v.parametros.imagen1.$error ||
                      $v.parametros.imagen2.$error ||
                      $v.parametros.imagen3.$error
                        ? 'error-input-select'
                        : '',
                    ]"
                    ref="inputImagen"
                    multiple
                  />
                  <em v-if="erroresImagenes" class="text-error-input">{{
                    erroresImagenes
                  }}</em>
                  <em
                    v-if="
                      ($v.parametros.imagen1.$error &&
                        !$v.parametros.imagen1.required) ||
                      ($v.parametros.imagen2.$error &&
                        !$v.parametros.imagen2.required) ||
                      ($v.parametros.imagen3.$error &&
                        !$v.parametros.imagen3.required)
                    "
                    class="text-error-input"
                    >{{ mensajes.required }}</em
                  >
                </div>
              </template>
              <div class="position-relative form-group">
                <label for="otras_caract">Otras Características</label>
                <textarea
                  dusk="otras_caract"
                  name="otras_caract"
                  id="otras_caract"
                  class="form-control"
                  v-model="parametros.otras_caract"
                ></textarea>
              </div>
              <button
                dusk="btn-accion"
                class="mb-2 mr-2 btn btn-block"
                :class="btnClase"
                :disabled="bloquearBtn"
              >
                {{ nomBtn }}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Imagenes</h5>
            <template v-if="validarTipoForm">
              <template
                v-if="
                  imagenesCroppie.length === cantImagenes &&
                  $refs.inputImagen.value
                "
              >
                <CroppieCepas
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
              <Imagenes
                :parametros="parametros"
                :tipoCepa="'bacteria/caract-fisio'"
                :imagenes="imagenes"
                :cepa="info"
                @accionImagen="accionImagen"
              ></Imagenes>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toastr from "../../../../mixins/toastr";
import obtenerImagenCroopie3ImagenesMixin from "../../../../mixins/obtenerImagenCroopie3Imagenes";
import CroppieCepas from "../../CroppieCepasComponent.vue";
import Imagenes from "../../ImagenesComponent.vue";
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
        acido_indolacetico: "",
        fosforo: "",
        sideroforos: "",
        nitrogeno: "",
        otras_caract: "",
        imagen1: "",
        imagen2: "",
        imagen3: "",
        descripcion_imagenes: "",
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
      acido_indolacetico: { required },
      fosforo: { required },
      sideroforos: { required },
      nitrogeno: { required },
      imagen1: { required },
      imagen2: {
        required(value) {
          if (value == "" && this.cantImagenes > 1) return false;
          return true;
        },
      },
      imagen3: {
        required(value) {
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
        if (this.tituloForm === "Agregar Característica") {
          axios
            .post("/cepas/bacteria/caract-fisio", this.parametros)
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
                this.tituloForm = "Editar Característica";
                this.nomBtn = "Editar";
                this.$emit("agregar", res.data);
                this.toastr(
                  "Agregar Características Fisiológicas",
                  "Características Fisiológicas agregada con exito!!",
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
              `/cepas/bacteria/caract-fisio/${this.info.id}`,
              this.parametros
            )
            .then((res) => {
              this.bloquearBtn = false;
              this.errors = [];
              this.$emit("editar", res.data);
              this.toastr(
                "Editar Característica Microscópica",
                "Característica Microscópica editada con exito!!",
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
    accionImagen(data) {
      this.$emit("editar", data);
    },
  },
  computed: {
    validarTipoForm() {
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