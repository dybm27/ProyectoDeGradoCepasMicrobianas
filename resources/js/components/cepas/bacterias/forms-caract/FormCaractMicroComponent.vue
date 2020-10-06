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
              <template v-if="getInfoCaractMicroBacterias">
                <label for="forma" class>Forma</label>
                <div class="input-group mb-3">
                  <select
                    name="select"
                    id="forma"
                    :class="[
                      'form-control',
                      $v.parametros.forma.$error ? 'error-input-select' : '',
                    ]"
                    v-model.trim="$v.parametros.forma.$model"
                  >
                    <option
                      v-for="(f, index) in obtenerFormas"
                      :key="index"
                      :value="f.id"
                    >
                      {{ f.nombre }}
                    </option>
                  </select>
                  <div
                    class="input-group-append"
                    v-if="getPermisoByNombre('agregar-otra')"
                  >
                    <button
                      class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                      @click.prevent="showModal('forma_micro')"
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
                <em
                  v-if="
                    $v.parametros.forma.$error && !$v.parametros.forma.required
                  "
                  class="text-error-select"
                  >{{ mensajes.required }}</em
                >
              </template>
              <div class="position-relative form-group">
                <label for="ordenamiento" class>Ordenamiento</label>
                <input
                  dusk="ordenamiento"
                  name="ordenamiento"
                  id="ordenamiento"
                  placeholder="..."
                  type="text"
                  :class="[
                    'form-control',
                    $v.parametros.ordenamiento.$error
                      ? 'error-input-select'
                      : '',
                  ]"
                  v-model.trim="$v.parametros.ordenamiento.$model"
                />
                <em
                  v-if="
                    $v.parametros.ordenamiento.$error &&
                    !$v.parametros.ordenamiento.required
                  "
                  class="text-error-input"
                  >{{ mensajes.required }}</em
                >
              </div>
              <div class="position-relative form-group">
                <label>Tinción de Gram</label>
                <div>
                  <div
                    class="custom-radio custom-control custom-control-inline"
                  >
                    <input
                      type="radio"
                      id="tincion_gram1"
                      name="tincion_gram"
                      class="custom-control-input"
                      value="Positivo"
                      v-model="parametros.tincion_gram"
                    />
                    <label class="custom-control-label" for="tincion_gram1"
                      >Gram Positivos</label
                    >
                  </div>
                  <div
                    class="custom-radio custom-control custom-control-inline"
                  >
                    <input
                      type="radio"
                      id="tincion_gram2"
                      name="tincion_gram"
                      class="custom-control-input"
                      value="Negativo"
                      v-model="parametros.tincion_gram"
                    />
                    <label class="custom-control-label" for="tincion_gram2"
                      >Gram Negativos</label
                    >
                  </div>
                </div>
              </div>
              <div class="position-relative form-group">
                <label>Tinción de Esporas</label>
                <div>
                  <div
                    class="custom-radio custom-control custom-control-inline"
                  >
                    <input
                      type="radio"
                      id="tincion_esporas1"
                      name="tincion_esporas"
                      class="custom-control-input"
                      value="Presencia"
                      v-model="parametros.tincion_esporas"
                    />
                    <label class="custom-control-label" for="tincion_esporas1"
                      >Presencia</label
                    >
                  </div>
                  <div
                    class="custom-radio custom-control custom-control-inline"
                  >
                    <input
                      type="radio"
                      id="tincion_esporas2"
                      name="tincion_esporas"
                      class="custom-control-input"
                      value="Ausencia"
                      v-model="parametros.tincion_esporas"
                    />
                    <label class="custom-control-label" for="tincion_esporas2"
                      >Ausencia</label
                    >
                  </div>
                </div>
              </div>
              <div
                class="position-relative form-group"
                v-show="parametros.tincion_esporas === 'Presencia'"
              >
                <label for="ubicacion_esporas" class
                  >Ubicación de la Espora</label
                >
                <select
                  name="ubicacion_esporas"
                  id="ubicacion_esporas"
                  v-model="parametros.ubicacion_esporas"
                  class="form-control"
                >
                  <option value="Central">Central</option>
                  <option value="Subterminal">Subterminal</option>
                  <option value="Terminal">Terminal</option>
                </select>
              </div>
              <div class="position-relative form-group">
                <label>Tinción de Cápsula</label>
                <div>
                  <div
                    class="custom-radio custom-control custom-control-inline"
                  >
                    <input
                      type="radio"
                      id="tincion_capsula1"
                      name="tincion_capsula"
                      class="custom-control-input"
                      value="Presencia"
                      v-model="parametros.tincion_capsula"
                    />
                    <label class="custom-control-label" for="tincion_capsula1"
                      >Presencia</label
                    >
                  </div>
                  <div
                    class="custom-radio custom-control custom-control-inline"
                  >
                    <input
                      type="radio"
                      id="tincion_capsula2"
                      name="tincion_capsula"
                      class="custom-control-input"
                      value="Ausencia"
                      v-model="parametros.tincion_capsula"
                    />
                    <label class="custom-control-label" for="tincion_capsula2"
                      >Ausencia</label
                    >
                  </div>
                </div>
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
                :tipoCepa="'bacteria/caract-micro'"
                :imagenes="imagenes"
                :cepa="info"
                @accionImagen="accionImagen"
              ></Imagenes>
            </template>
          </div>
        </div>
      </div>
    </div>
    <ModalAgregarInfo
      :url="'info-caract-bacterias'"
      :tipo="tipoModal"
      :titulo="tituloModal"
      :tipoForm="'bacteria'"
    />
  </div>
</template>

<script>
import vuex from "vuex";
import Toastr from "../../../../mixins/toastr";
import obtenerImagenCroopie3ImagenesMixin from "../../../../mixins/obtenerImagenCroopie3Imagenes";
import CroppieCepas from "../../CroppieCepasComponent.vue";
import Imagenes from "../../ImagenesComponent.vue";
import ModalAgregarInfo from "../../ModalAgregarInfoCaractComponent.vue";
import { required } from "vuelidate/lib/validators";
export default {
  components: { CroppieCepas, Imagenes, ModalAgregarInfo },
  props: ["info", "modificarInfo"],
  data() {
    return {
      parametros: {
        cepaId: "",
        forma: null,
        ordenamiento: "",
        tincion_gram: "Positivo",
        tincion_esporas: "Presencia",
        ubicacion_esporas: "Central",
        tincion_capsula: "Presencia",
        otras_caract: "",
        imagen1: "",
        imagen2: "",
        imagen3: "",
      },
      tituloModal: "",
      tipoModal: "",
      tituloForm: "",
      nomBtn: "",
      errors: [],
      bloquearBtn: false,
      bloquearBtnModal: false,
      mensajes: {
        required: "El campo es requerido",
      },
    };
  },
  validations: {
    parametros: {
      forma: { required },
      ordenamiento: { required },
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
    ...vuex.mapActions("info_caract", ["accionAgregarTipoCaractBacteria"]),
    evento() {
      this.bloquearBtn = true;
      this.$v.parametros.$touch();
      if (!this.$v.$invalid) {
        if (this.tituloForm === "Agregar Característica") {
          axios
            .post("/cepas/bacteria/caract-micro", this.parametros)
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
                  "Agregar Característica Microscópica",
                  "Característica Microscópica agregada con exito!!",
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
              `/cepas/bacteria/caract-micro/${this.info.id}`,
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
    showModal(tipo) {
      this.tipoModal = tipo;
      if (tipo === "forma_micro") {
        this.tituloModal = "Agregar Nueva Forma";
      }
      this.$modal.show("modal_agregar_info_caract");
    },
    llenarInfo() {
      this.imagenes = [];
      this.parametros.forma = this.info.forma_id;
      this.parametros.ordenamiento = this.info.ordenamiento;
      this.parametros.tincion_gram = this.info.tincion_gram;
      this.parametros.tincion_esporas = this.info.tincion_esporas;
      this.parametros.ubicacion_esporas =
        this.info.ubicacion_esporas === null
          ? "Central"
          : this.info.ubicacion_esporas;
      this.parametros.tincion_capsula = this.info.tincion_capsula;
      this.parametros.otras_caract = this.info.otras_caract;
      this.parametros.imagen1 = this.info.imagen1;
      this.parametros.imagen2 = this.info.imagen2;
      this.parametros.imagen3 = this.info.imagen3;
      this.llenarArregloImagenes();
    },
    accionImagen(data) {
      this.$emit("editar", data);
    },
    verificarSelects() {
      if (this.obtenerFormas.length > 0) {
        this.parametros.forma = this.obtenerFormas[0].id;
      } else {
        this.parametros.forma = null;
      }
    },
  },
  computed: {
    ...vuex.mapGetters(["getPermisoByNombre"]),
    ...vuex.mapGetters("info_caract", ["getInfoCaractMicroBacterias"]),
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
    obtenerFormas() {
      return this.getInfoCaractMicroBacterias.formas_micros;
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
  created() {
    this.verificarSelects();
  },
  watch: {
    modificarInfo() {
      if (this.modificarInfo) {
        this.llenarInfo();
        this.$emit("cambiarVariable");
      }
    },
    obtenerFormas() {
      if (this.obtenerFormas.length > 0) {
        this.parametros.forma = this.obtenerFormas[0].id;
      } else {
        this.parametros.forma = null;
      }
    },
  },
};
</script>