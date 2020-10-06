<template>
  <div>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-sm-6">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">{{ titulo }}</h5>
              <form @submit.prevent="evento">
                <template v-if="errors != ''">
                  <div class="alert alert-danger">
                    <p v-for="(item, index) in errors" :key="index">
                      {{ item[0] }}
                    </p>
                  </div>
                </template>
                <div class="position-relative form-group">
                  <label for="medio" class>Medio</label>
                  <input
                    dusk="medio"
                    name="medio"
                    id="medio"
                    placeholder="..."
                    type="text"
                    :class="[
                      'form-control',
                      $v.parametros.medio.$error ? 'error-input-select' : '',
                    ]"
                    v-model.trim="$v.parametros.medio.$model"
                  />
                  <em
                    v-if="
                      $v.parametros.medio.$error &&
                      !$v.parametros.medio.required
                    "
                    class="text-error-input"
                    >{{ mensajes.required }}</em
                  >
                </div>
                <template v-if="getInfoCaractMacroHongos">
                  <div class="form-row">
                    <div class="col-md-6">
                      <label for="color" class>Color</label>
                      <div class="input-group mb-3">
                        <select
                          name="select"
                          id="color"
                          :class="[
                            'form-control',
                            $v.parametros.color.$error
                              ? 'error-input-select'
                              : '',
                          ]"
                          v-model.trim="$v.parametros.color.$model"
                        >
                          <option
                            v-for="(f, index) in obtenerColores"
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
                            @click.prevent="showModal('color')"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <em
                        v-if="
                          $v.parametros.color.$error &&
                          !$v.parametros.color.required
                        "
                        class="text-error-select"
                        >{{ mensajes.required }}</em
                      >
                    </div>
                    <div class="col-md-6">
                      <label for="borde" class>Textura</label>
                      <div class="input-group mb-3">
                        <select
                          name="select"
                          id="textura"
                          :class="[
                            'form-control',
                            $v.parametros.textura.$error
                              ? 'error-input-select'
                              : '',
                          ]"
                          v-model.trim="$v.parametros.textura.$model"
                        >
                          <option
                            v-for="(b, index) in obtenerTexturas"
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
                            @click.prevent="showModal('textura')"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <em
                        v-if="
                          $v.parametros.textura.$error &&
                          !$v.parametros.textura.required
                        "
                        class="text-error-select"
                        >{{ mensajes.required }}</em
                      >
                    </div>
                  </div>
                </template>
                <div class="position-relative form-group">
                  <label for="imagen" class>Imagen</label>
                  <input
                    dusk="imagen"
                    name="imagen"
                    @change="obtenerImagen"
                    id="imagen"
                    type="file"
                    :class="[
                      'form-control-file',
                      $v.parametros.imagen.$error ? 'error-input-select' : '',
                    ]"
                    accept="image/jpeg"
                    ref="inputImagen"
                  />
                  <em v-if="imagenError" class="text-error-input">{{
                    imagenError
                  }}</em>
                  <em
                    v-if="
                      $v.parametros.imagen.$error &&
                      !$v.parametros.imagen.required
                    "
                    class="text-error-input"
                    >{{ mensajes.required }}</em
                  >
                </div>
                <div class="position-relative form-group">
                  <label for="otras_caracteristicas"
                    >Características del reverso</label
                  >
                  <textarea
                    dusk="caracteristicas_reverso"
                    name="text"
                    id="caracteristicas_reverso"
                    :class="[
                      'form-control',
                      $v.parametros.caracteristicas_reverso.$error
                        ? 'error-input-select'
                        : '',
                    ]"
                    v-model.trim="$v.parametros.caracteristicas_reverso.$model"
                  ></textarea>
                  <em
                    v-if="
                      $v.parametros.caracteristicas_reverso.$error &&
                      !$v.parametros.caracteristicas_reverso.required
                    "
                    class="text-error-input"
                    >{{ mensajes.required }}</em
                  >
                </div>
                <button
                  dusk="btn-accion"
                  class="mb-2 mr-2 btn btn-block"
                  :class="btnClase"
                  :disabled="bloquearBtn"
                >
                  {{ nomBtnComputed }}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <template v-if="mostraImagen">
                <template v-if="validarCroppie">
                  <Croppie
                    :id="'croppie'"
                    :imagen="mostraImagen"
                    @cambiarValorImagen="cambiarValorImagen"
                    :mostrarBtnCroppie="mostrarBtnCroppie"
                    :enableZoom="false"
                    :zoom="0"
                    :editar="true"
                    :boundaryHeigth="300"
                    :viewportWidth="200"
                  />
                </template>
                <template v-else>
                  <Croppie
                    :id="'croppie'"
                    :imagen="mostraImagen"
                    @cambiarValorImagen="cambiarValorImagen"
                    :mostrarBtnCroppie="mostrarBtnCroppie"
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
                      <b class="text-success">SIN IMAGEN</b>
                    </span>
                  </h5>
                </div>
              </template>
            </div>
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
import obtenerImagenCroopieCepas from "../../../../mixins/obtenerImagenCroopieCepas";
import Croppie from "../../../CroppieComponent.vue";
import ModalAgregarInfo from "../../ModalAgregarInfoCaractComponent.vue";
import { required } from "vuelidate/lib/validators";
export default {
  components: { Croppie, ModalAgregarInfo },
  props: ["info", "modificarInfo"],
  data() {
    return {
      parametros: {
        cepaId: "",
        medio: "",
        color: null,
        textura: null,
        caracteristicas_reverso: "",
        imagen: "",
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
        minLength: "El campo debe tener como minimo ",
      },
    };
  },
  validations: {
    parametros: {
      medio: { required },
      color: { required },
      textura: { required },
      caracteristicas_reverso: { required },
      imagen: { required },
    },
  },
  mixins: [Toastr, obtenerImagenCroopieCepas],
  methods: {
    evento() {
      this.bloquearBtn = true;
      this.$v.parametros.$touch();
      if (!this.$v.$invalid) {
        if (this.tituloForm === "Agregar Medio") {
          axios
            .post("/cepas/hongo/caract-macro", this.parametros)
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
                this.tituloForm = "Editar Medio";
                this.nomBtn = "Editar";
                this.$emit("agregar", res.data);
                this.toastr(
                  "Agregar Medio",
                  "Medio agregado con exito!!",
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
            .put(`/cepas/hongo/caract-macro/${this.info.id}`, this.parametros)
            .then((res) => {
              this.bloquearBtn = false;
              this.errors = [];
              this.$refs.inputImagen.value = "";
              this.$emit("editar", res.data);
              this.toastr(
                "Editar Medio",
                "Medio editado con éxito!!",
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
      this.parametros.medio = this.info.medio;
      this.parametros.color = this.info.color_id;
      this.parametros.textura = this.info.textura_id;
      this.parametros.caracteristicas_reverso =
        this.info.caracteristicas_reverso === "null"
          ? ""
          : this.info.caracteristicas_reverso;
      this.parametros.imagen = this.info.imagen;
      this.imagenMiniatura = this.info.imagenPublica;
    },
    showModal(tipo) {
      this.tipoModal = tipo;
      if (tipo === "color") {
        this.tituloModal = "Agregar Nuevo Color";
      } else if (tipo === "textura") {
        this.tituloModal = "Agregar Nueva Textura";
      }
      this.$modal.show("modal_agregar_info_caract");
    },
    verificarSelects() {
      if (this.obtenerColores.length > 0) {
        this.parametros.color = this.obtenerColores[0].id;
      } else {
        this.parametros.color = null;
      }
      if (this.obtenerTexturas.length > 0) {
        this.parametros.textura = this.obtenerTexturas[0].id;
      } else {
        this.parametros.textura = null;
      }
    },
  },
  computed: {
    ...vuex.mapGetters(["getPermisoByNombre"]),
    ...vuex.mapGetters("info_caract", ["getInfoCaractMacroHongos"]),
    btnClase() {
      if (this.tituloForm === "Agregar Medio") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    validarTipoForm() {
      if (this.tituloForm === "Agregar Medio") {
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
    obtenerColores() {
      return this.getInfoCaractMacroHongos.colores;
    },
    obtenerTexturas() {
      return this.getInfoCaractMacroHongos.texturas;
    },
  },
  mounted() {
    if (this.info === undefined) {
      this.tituloForm = "Agregar Medio";
      this.nomBtn = "Agregar";
    } else {
      this.llenarInfo();
      this.tituloForm = "Editar Medio";
      this.nomBtn = "Editar";
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
    obtenerColores() {
      if (this.obtenerColores.length > 0) {
        this.parametros.color = this.obtenerColores[0].id;
      } else {
        this.parametros.color = null;
      }
    },
    obtenerTexturas() {
      if (this.obtenerTexturas.length > 0) {
        this.parametros.textura = this.obtenerTexturas[0].id;
      } else {
        this.parametros.textura = null;
      }
    },
  },
};
</script>