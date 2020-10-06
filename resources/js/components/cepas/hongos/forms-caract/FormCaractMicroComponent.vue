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
              <template v-if="getInfoCaractMicroHongos">
                <div class="position-relative form-group">
                  <label for="conidioforo" class>Conidióforo</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="conidioforo"
                      :class="[
                        'form-control',
                        $v.parametros.conidioforo.$error
                          ? 'error-input-select'
                          : '',
                      ]"
                      v-model.trim="$v.parametros.conidioforo.$model"
                    >
                      <option
                        v-for="(f, index) in obtenerConidioforos"
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
                        @click.prevent="showModal('conidioforo')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <em
                    v-if="
                      $v.parametros.conidioforo.$error &&
                      !$v.parametros.conidioforo.required
                    "
                    class="text-error-select"
                    >{{ mensajes.required }}</em
                  >
                </div>
                <div class="position-relative form-group">
                  <label for="fialides" class>Fiálides</label>
                  <div>
                    <div
                      class="custom-radio custom-control custom-control-inline"
                    >
                      <input
                        type="radio"
                        id="fialides1"
                        name="fialides"
                        class="custom-control-input"
                        value="Presencia"
                        v-model="parametros.fialides"
                      />
                      <label
                        class="custom-control-label"
                        for="fialides1"
                        dusk="fialides1"
                        >Presencia</label
                      >
                    </div>
                    <div
                      class="custom-radio custom-control custom-control-inline"
                    >
                      <input
                        type="radio"
                        id="fialides2"
                        name="fialides"
                        class="custom-control-input"
                        value="Ausencia"
                        v-model="parametros.fialides"
                      />
                      <label
                        class="custom-control-label"
                        for="fialides2"
                        dusk="fialides2"
                        >Ausencia</label
                      >
                    </div>
                  </div>
                </div>
                <div v-if="fialidesPresencia" class="ml-3 mr-3">
                  <div class="position-relative form-group">
                    <label for="fialides_forma" class>Forma</label>
                    <input
                      name="fialides_forma"
                      id="fialides_forma"
                      placeholder="..."
                      type="text"
                      :class="[
                        'form-control',
                        $v.parametros.fialides_forma.$error
                          ? 'error-input-select'
                          : '',
                      ]"
                      v-model.trim="$v.parametros.fialides_forma.$model"
                    />
                    <em
                      v-if="
                        $v.parametros.fialides_forma.$error &&
                        !$v.parametros.fialides_forma.required
                      "
                      class="text-error-input"
                      >{{ mensajes.required }}</em
                    >
                  </div>
                  <div class="position-relative form-group">
                    <label for="fialides_otra_caracteristica" class
                      >Otras características</label
                    >
                    <input
                      name="fialides_otra_caracteristica"
                      id="fialides_otra_caracteristica"
                      placeholder="..."
                      type="text"
                      class="form-control"
                      v-model="parametros.fialides_otra_caracteristica"
                    />
                  </div>
                </div>
                <label for="fialides" class>Vesícula</label>
                <div class="input-group mb-3">
                  <div
                    class="custom-radio custom-control custom-control-inline"
                  >
                    <input
                      type="radio"
                      id="vesicula1"
                      name="vesicula"
                      class="custom-control-input"
                      value="Presencia"
                      v-model="parametros.vesicula"
                    />
                    <label class="custom-control-label" for="vesicula1"
                      >Presencia</label
                    >
                  </div>
                  <div
                    class="custom-radio custom-control custom-control-inline"
                  >
                    <input
                      type="radio"
                      id="vesicula2"
                      name="vesicula"
                      class="custom-control-input"
                      value="Ausencia"
                      v-model="parametros.vesicula"
                    />
                    <label class="custom-control-label" for="vesicula2"
                      >Ausencia</label
                    >
                  </div>
                </div>
                <label for="espora_asexual" class>Espora Asexual</label>
                <div class="input-group mb-3">
                  <select
                    name="select"
                    id="espora_asexual"
                    :class="[
                      'form-control',
                      $v.parametros.espora_asexual.$error
                        ? 'error-input-select'
                        : '',
                    ]"
                    v-model.trim="$v.parametros.espora_asexual.$model"
                  >
                    <option
                      v-for="(b, index) in obtenerEsporasAsexuales"
                      :key="index"
                      :value="b.id"
                    >
                      {{ b.nombre }}
                    </option>
                  </select>
                  <div
                    class="input-group-append"
                    v-if="getPermisoByNombre('agregar-otra')"
                  >
                    <button
                      class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                      @click.prevent="showModal('esporaA')"
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
                <em
                  v-if="
                    $v.parametros.espora_asexual.$error &&
                    !$v.parametros.espora_asexual.required
                  "
                  class="text-error-select"
                  >{{ mensajes.required }}</em
                >
                <div v-if="mostrarConidios" class="ml-3 mr-3">
                  <div class="position-relative form-group">
                    <label for="esporas_asexuales_conidios_tamano"
                      >Tamaño</label
                    >
                    <div>
                      <div
                        class="custom-radio custom-control custom-control-inline"
                      >
                        <input
                          type="radio"
                          id="esporas_asexuales_conidios_tamano1"
                          name="esporas_asexuales_conidios_tamano"
                          class="custom-control-input"
                          value="Grande"
                          v-model="parametros.esporas_asexuales_conidios_tamano"
                        />
                        <label
                          class="custom-control-label"
                          for="esporas_asexuales_conidios_tamano1"
                          >Grande</label
                        >
                      </div>
                      <div
                        class="custom-radio custom-control custom-control-inline"
                      >
                        <input
                          type="radio"
                          id="esporas_asexuales_conidios_tamano2"
                          name="esporas_asexuales_conidios_tamano"
                          class="custom-control-input"
                          value="Mediano"
                          v-model="parametros.esporas_asexuales_conidios_tamano"
                        />
                        <label
                          class="custom-control-label"
                          for="esporas_asexuales_conidios_tamano2"
                          >Mediano</label
                        >
                      </div>
                      <div
                        class="custom-radio custom-control custom-control-inline"
                      >
                        <input
                          type="radio"
                          id="esporas_asexuales_conidios_tamano3"
                          name="esporas_asexuales_conidios_tamano"
                          class="custom-control-input"
                          value="Pequeño"
                          v-model="parametros.esporas_asexuales_conidios_tamano"
                        />
                        <label
                          class="custom-control-label"
                          for="esporas_asexuales_conidios_tamano3"
                          >Pequeño</label
                        >
                      </div>
                    </div>
                  </div>
                  <div class="position-relative form-group">
                    <label for="esporas_asexuales_conidios_color" class
                      >Color</label
                    >
                    <input
                      name="esporas_asexuales_conidios_color"
                      id="esporas_asexuales_conidios_color"
                      placeholder="..."
                      type="text"
                      :class="[
                        'form-control',
                        $v.parametros.esporas_asexuales_conidios_color.$error
                          ? 'error-input-select'
                          : '',
                      ]"
                      v-model.trim="
                        $v.parametros.esporas_asexuales_conidios_color.$model
                      "
                    />
                    <em
                      v-if="
                        $v.parametros.esporas_asexuales_conidios_color.$error &&
                        !$v.parametros.esporas_asexuales_conidios_color.required
                      "
                      class="text-error-input"
                      >{{ mensajes.required }}</em
                    >
                  </div>
                  <div class="position-relative form-group">
                    <label for="esporas_asexuales_conidios_forma" class
                      >Forma</label
                    >
                    <input
                      name="esporas_asexuales_conidios_forma"
                      id="esporas_asexuales_conidios_forma"
                      placeholder="..."
                      type="text"
                      :class="[
                        'form-control',
                        $v.parametros.esporas_asexuales_conidios_forma.$error
                          ? 'error-input-select'
                          : '',
                      ]"
                      v-model.trim="
                        $v.parametros.esporas_asexuales_conidios_forma.$model
                      "
                    />
                    <em
                      v-if="
                        $v.parametros.esporas_asexuales_conidios_forma.$error &&
                        !$v.parametros.esporas_asexuales_conidios_forma.required
                      "
                      class="text-error-input"
                      >{{ mensajes.required }}</em
                    >
                  </div>
                  <div class="position-relative form-group">
                    <label for="esporas_asexuales_conidios_otras" class
                      >Otras características</label
                    >
                    <input
                      name="esporas_asexuales_conidios_otras"
                      id="esporas_asexuales_conidios_otras"
                      placeholder="..."
                      type="text"
                      class="form-control"
                      v-model="parametros.esporas_asexuales_conidios_otras"
                    />
                  </div>
                </div>
                <label for="espora_sexual" class>Espora Sexual</label>
                <div class="input-group mb-3">
                  <select
                    name="select"
                    id="espora_sexual"
                    :class="[
                      'form-control',
                      $v.parametros.espora_sexual.$error
                        ? 'error-input-select'
                        : '',
                    ]"
                    v-model.trim="$v.parametros.espora_sexual.$model"
                  >
                    <option
                      v-for="(b, index) in obtenerEsporasSexuales"
                      :key="index"
                      :value="b.id"
                    >
                      {{ b.nombre }}
                    </option>
                  </select>
                  <div
                    class="input-group-append"
                    v-if="getPermisoByNombre('agregar-otra')"
                  >
                    <button
                      class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                      @click.prevent="showModal('esporaS')"
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
                <em
                  v-if="
                    $v.parametros.espora_sexual.$error &&
                    !$v.parametros.espora_sexual.required
                  "
                  class="text-error-select"
                  >{{ mensajes.required }}</em
                >
              </template>
              <template v-if="validarTipoForm">
                <div class="position-relative form-group">
                  <label for="imagen" class>Imágenes</label>
                  <input
                    dusk="imagen"
                    name="imagen"
                    @change="obtenerImagenes"
                    id="imagen"
                    type="file"
                    accept="image/jpeg, image/png"
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
                <label for="otras_estructuras">Otras estructuras</label>
                <textarea
                  dusk="otras_estructuras"
                  name="text"
                  id="otras_estructuras"
                  class="form-control"
                  v-model="parametros.otras_estructuras"
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
                :tipoCepa="'hongo/caract-micro'"
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
      :url="'info-caract-hongos'"
      :tipo="tipoModal"
      :titulo="tituloModal"
      :tipoForm="'hongo'"
    />
  </div>
</template>

<script>
import vuex from "vuex";
import Toastr from "../../../../mixins/toastr";
import obtenerImagenCroopie3Imagenes from "../../../../mixins/obtenerImagenCroopie3Imagenes";
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
        conidioforo: null,
        fialides: "Presencia",
        fialides_forma: "",
        fialides_otra_caracteristica: "",
        vesicula: "Presencia",
        espora_asexual: null,
        esporas_asexuales_conidios_tamano: "Grande",
        esporas_asexuales_conidios_color: "",
        esporas_asexuales_conidios_forma: "",
        esporas_asexuales_conidios_otras: "",
        espora_sexual: null,
        otras_estructuras: "",
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
  validations() {
    if (this.mostrarConidios && this.fialidesPresencia) {
      return {
        parametros: {
          conidioforo: { required },
          fialides_forma: { required },
          espora_asexual: { required },
          esporas_asexuales_conidios_color: { required },
          esporas_asexuales_conidios_forma: { required },
          espora_sexual: { required },
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
      };
    } else if (this.mostrarConidios && !this.fialidesPresencia) {
      return {
        parametros: {
          conidioforo: { required },
          espora_asexual: { required },
          esporas_asexuales_conidios_color: { required },
          esporas_asexuales_conidios_forma: { required },
          espora_sexual: { required },
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
      };
    } else if (this.fialidesPresencia && !this.mostrarConidios) {
      return {
        parametros: {
          conidioforo: { required },
          fialides_forma: { required },
          espora_asexual: { required },
          espora_sexual: { required },
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
      };
    } else {
      return {
        parametros: {
          conidioforo: { required },
          espora_asexual: { required },
          espora_sexual: { required },
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
      };
    }
  },
  mixins: [Toastr, obtenerImagenCroopie3Imagenes],
  methods: {
    evento() {
      this.bloquearBtn = true;
      this.$v.parametros.$touch();
      if (!this.$v.$invalid) {
        if (this.parametros.fialides === "Ausencia") {
          this.parametros.fialides_forma = "";
          this.parametros.fialides_otra_caracteristica = "";
        }
        if (this.parametros.espora_asexual != 2) {
          this.parametros.esporas_asexuales_conidios_tamano = "";
          this.parametros.esporas_asexuales_conidios_color = "";
          this.parametros.esporas_asexuales_conidios_forma = "";
          this.parametros.esporas_asexuales_conidios_otras = "";
        }
        if (this.tituloForm === "Agregar Característica") {
          axios
            .post("/cepas/hongo/caract-micro", this.parametros)
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
            .put(`/cepas/hongo/caract-micro/${this.info.id}`, this.parametros)
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
      if (tipo === "conidioforo") {
        this.tituloModal = "Agregar Nuevo Conidióforo";
      } else if (tipo === "esporaA") {
        this.tituloModal = "Agregar Nueva Espora Asexual";
      } else if (tipo === "esporaS") {
        this.tituloModal = "Agregar Nueva Espora Sexual";
      }
      this.$modal.show("modal_agregar_info_caract");
    },
    llenarInfo() {
      this.imagenes = [];
      this.parametros.conidioforo = this.info.conidioforo_id;
      this.parametros.fialides = this.info.fialides;
      this.parametros.fialides_forma = this.info.fialides_forma;
      this.parametros.fialides_otra_caracteristica = this.info.fialides_otra_caracteristica;
      this.parametros.vesicula = this.info.vesicula;
      this.parametros.espora_asexual = this.info.espora_asexual_id;
      this.parametros.esporas_asexuales_conidios_tamano =
        this.info.esporas_asexuales_conidios_tamano === null
          ? "Grande"
          : this.info.esporas_asexuales_conidios_tamano;
      this.parametros.esporas_asexuales_conidios_color = this.info.esporas_asexuales_conidios_color;
      this.parametros.esporas_asexuales_conidios_forma = this.info.esporas_asexuales_conidios_forma;
      this.parametros.esporas_asexuales_conidios_otras = this.info.esporas_asexuales_conidios_otras;
      this.parametros.espora_sexual = this.info.espora_sexual_id;
      this.parametros.otras_estructuras = this.info.otras_estructuras;
      this.parametros.imagen1 = this.info.imagen1;
      this.parametros.imagen2 = this.info.imagen2;
      this.parametros.imagen3 = this.info.imagen3;
      this.llenarArregloImagenes();
    },
    accionImagen(data) {
      this.$emit("editar", data);
    },
    verificarSelects() {
      if (this.obtenerConidioforos.length > 0) {
        this.parametros.conidioforo = this.obtenerConidioforos[0].id;
      } else {
        this.parametros.conidioforo = null;
      }
      if (this.obtenerEsporasAsexuales.length > 0) {
        this.parametros.espora_asexual = this.obtenerEsporasAsexuales[0].id;
      } else {
        this.parametros.espora_asexual = null;
      }
      if (this.obtenerEsporasSexuales.length > 0) {
        this.parametros.espora_sexual = this.obtenerEsporasSexuales[0].id;
      } else {
        this.parametros.espora_sexual = null;
      }
    },
  },
  computed: {
    ...vuex.mapGetters(["getPermisoByNombre"]),
    ...vuex.mapGetters("info_caract", ["getInfoCaractMicroHongos"]),
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
    obtenerConidioforos() {
      return this.getInfoCaractMicroHongos.conidioforos;
    },
    obtenerEsporasAsexuales() {
      return this.getInfoCaractMicroHongos.esporas_asexuales;
    },
    obtenerEsporasSexuales() {
      return this.getInfoCaractMicroHongos.esporas_sexuales;
    },
    fialidesPresencia() {
      if (this.parametros.fialides === "Presencia") {
        return true;
      }
      return false;
    },
    mostrarConidios() {
      if (this.parametros.espora_asexual === 2) {
        return true;
      }
      return false;
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
    if (this.$route.params.cepaHongoSlug) {
      array = this.$route.params.cepaHongoSlug.split("-");
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
    obtenerConidioforos() {
      if (this.obtenerConidioforos.length > 0) {
        this.parametros.conidioforo = this.obtenerConidioforos[0].id;
      } else {
        this.parametros.conidioforo = null;
      }
    },
    obtenerEsporasAsexuales() {
      if (this.obtenerEsporasAsexuales.length > 0) {
        this.parametros.espora_asexual = this.obtenerEsporasAsexuales[0].id;
      } else {
        this.parametros.espora_asexual = null;
      }
    },
    obtenerEsporasSexuales() {
      if (this.obtenerEsporasSexuales.length > 0) {
        this.parametros.espora_sexual = this.obtenerEsporasSexuales[0].id;
      } else {
        this.parametros.espora_sexual = null;
      }
    },
  },
};
</script>