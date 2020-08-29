<template>
  <div class="mt-4 mr-4 ml-4">
    <div class="row justify-content-md-center">
      <div class="col-sm-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">{{tituloForm}}</h5>
            <form @submit.prevent="evento">
              <template v-if="errors!=''">
                <div class="alert alert-danger">
                  <p v-for="(item, index) in errors" :key="index">{{item[0]}}</p>
                </div>
              </template>
              <template v-if="getInfoCaractMicroActinomicetos">
                <div class="form-row">
                  <div class="col-md-6">
                    <label for="tincion" class>Tinción de Gram</label>
                    <div class="input-group mb-3">
                      <select
                        name="select"
                        id="tincion"
                        :class="['form-control', $v.parametros.tincion.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.tincion.$model"
                      >
                        <option
                          v-for="(f,index) in obtenerTinciones"
                          :key="index"
                          :value="f.id"
                        >{{f.nombre}}</option>
                      </select>
                      <div class="input-group-append" v-if="getPermisoByNombre('agregar-otra')">
                        <button
                          class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                          @click.prevent="showModal('tincion')"
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <em
                      v-if="$v.parametros.tincion.$error&&!$v.parametros.tincion.required"
                      class="text-error-select"
                    >{{mensajes.required}}</em>
                  </div>
                  <div class="col-md-6">
                    <label for="forma" class>Forma</label>
                    <div class="input-group mb-3">
                      <select
                        name="select"
                        id="forma"
                        :class="['form-control', $v.parametros.forma.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.forma.$model"
                      >
                        <option
                          v-for="(f,index) in obtenerFormas"
                          :key="index"
                          :value="f.id"
                        >{{f.nombre}}</option>
                      </select>
                      <div class="input-group-append" v-if="getPermisoByNombre('agregar-otra')">
                        <button
                          class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                          @click.prevent="showModal('forma_micro')"
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <em
                      v-if="$v.parametros.forma.$error&&!$v.parametros.forma.required"
                      class="text-error-select"
                    >{{mensajes.required}}</em>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-6">
                    <label for="micelio" class>Micelío</label>
                    <div class="input-group mb-3">
                      <select
                        name="select"
                        id="micelio"
                        :class="['form-control', $v.parametros.micelio.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.micelio.$model"
                      >
                        <option
                          v-for="(f,index) in obtenerMicelios"
                          :key="index"
                          :value="f.id"
                        >{{f.nombre}}</option>
                      </select>
                      <div class="input-group-append" v-if="getPermisoByNombre('agregar-otra')">
                        <button
                          class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                          @click.prevent="showModal('micelio')"
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <em
                      v-if="$v.parametros.micelio.$error&&!$v.parametros.micelio.required"
                      class="text-error-select"
                    >{{mensajes.required}}</em>
                  </div>
                  <div class="col-md-6">
                    <label for="conidioforo" class>Conidióforo</label>
                    <div class="input-group mb-3">
                      <select
                        name="select"
                        id="conidioforo"
                        :class="['form-control', $v.parametros.conidioforo.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.conidioforo.$model"
                      >
                        <option
                          v-for="(f,index) in obtenerConidioforos"
                          :key="index"
                          :value="f.id"
                        >{{f.nombre}}</option>
                      </select>
                      <div class="input-group-append" v-if="getPermisoByNombre('agregar-otra')">
                        <button
                          class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                          @click.prevent="showModal('conidioforo')"
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <em
                      v-if="$v.parametros.conidioforo.$error&&!$v.parametros.conidioforo.required"
                      class="text-error-select"
                    >{{mensajes.required}}</em>
                  </div>
                </div>
              </template>
              <div class="position-relative form-group">
                <label for="forma_estructura_reproduccion" class>Forma Estructura de Reproducción</label>
                <input
                  name="forma_estructura_reproduccion"
                  id="forma_estructura_reproduccion"
                  placeholder="..."
                  type="text"
                  :class="['form-control', $v.parametros.forma_estructura_reproduccion.$error? 'error-input-select':'']"
                  v-model.trim="$v.parametros.forma_estructura_reproduccion.$model"
                />
                <em
                  v-if="$v.parametros.forma_estructura_reproduccion.$error&&!$v.parametros.forma_estructura_reproduccion.required"
                  class="text-error-input"
                >{{mensajes.required}}</em>
              </div>
              <template v-if="validarTipoForm">
                <div class="position-relative form-group">
                  <label for="imagen" class>Imágenes</label>
                  <input
                    name="imagen"
                    @change="obtenerImagenes"
                    id="imagen"
                    accept="image/jpeg, image/png"
                    type="file"
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
              </template>
              <div class="position-relative form-group">
                <label for="otras_caract">Otras Características</label>
                <textarea
                  name="otras_caract"
                  id="otras_caract"
                  class="form-control"
                  v-model="parametros.otras_caract"
                ></textarea>
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
      <div class="col-sm-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <template v-if="validarTipoForm">
              <template v-if="imagenesCroppie.length===cantImagenes&&$refs.inputImagen.value">
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
                :tipoCepa="'actinomiceto/caract-micro'"
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
      :url="'info-caract-actinomicetos'"
      :tipo="tipoModal"
      :titulo="tituloModal"
      :tipoForm="'actinomiceto'"
    />
  </div>
</template>

<script>
import vuex from "vuex";
import Toastr from "../../../../mixins/toastr";
import obtenerImagenCroopie3ImagenesMixin from "../../../../mixins/obtenerImagenCroopie3Imagenes";
import CroppieCepas from "../../CroppieCepasComponent";
import Imagenes from "../../ImagenesComponent";
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
        forma_estructura_reproduccion: "",
        tincion: null,
        micelio: null,
        conidioforo: null,
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
      tincion: { required },
      micelio: { required },
      conidioforo: { required },
      forma_estructura_reproduccion: { required },
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
        if (this.tituloForm === "Agregar Característica") {
          axios
            .post("/cepas/actinomiceto/caract-micro", this.parametros)
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
              `/cepas/actinomiceto/caract-micro/${this.info.id}`,
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
    showModal(tipo) {
      this.tipoModal = tipo;
      if (tipo === "forma_micro") {
        this.tituloModal = "Agregar Nueva Forma";
      } else if (tipo === "tincion") {
        this.tituloModal = "Agregar Nueva Tincion";
      } else if (tipo === "micelio") {
        this.tituloModal = "Agregar Nuevo Micelio";
      } else {
        this.tituloModal = "Agregar Nuevo Conodioforo";
      }
      this.$modal.show("modal_agregar_info_caract");
    },
    llenarInfo() {
      this.imagenes = [];
      this.parametros.forma = this.info.forma_id;
      this.parametros.forma_estructura_reproduccion = this.info.forma_estructura_reproduccion;
      this.parametros.tincion = this.info.tinciongram_id;
      this.parametros.micelio = this.info.micelio_id;
      this.parametros.conidioforo = this.info.conidioforo_id;
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
      if (this.obtenerTinciones.length > 0) {
        this.parametros.tincion = this.obtenerTinciones[0].id;
      } else {
        this.parametros.tincion = null;
      }
      if (this.obtenerMicelios.length > 0) {
        this.parametros.micelio = this.obtenerMicelios[0].id;
      } else {
        this.parametros.micelio = null;
      }
      if (this.obtenerConidioforos.length > 0) {
        this.parametros.conidioforo = this.obtenerConidioforos[0].id;
      } else {
        this.parametros.conidioforo = null;
      }
    },
  },
  computed: {
    ...vuex.mapGetters(["getPermisoByNombre"]),
    ...vuex.mapGetters("info_caract", ["getInfoCaractMicroActinomicetos"]),
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
      return this.getInfoCaractMicroActinomicetos.formas_micros;
    },
    obtenerTinciones() {
      return this.getInfoCaractMicroActinomicetos.tincions;
    },
    obtenerMicelios() {
      return this.getInfoCaractMicroActinomicetos.micelios;
    },
    obtenerConidioforos() {
      return this.getInfoCaractMicroActinomicetos.conidioforos;
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
    if (this.$route.params.cepaActinomicetoId) {
      this.parametros.cepaId = this.$route.params.cepaActinomicetoId;
    } else {
      this.parametros.cepaId = this.$route.params.cepaId;
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
    obtenerTinciones() {
      if (this.obtenerTinciones.length > 0) {
        this.parametros.tincion = this.obtenerTinciones[0].id;
      } else {
        this.parametros.tincion = null;
      }
    },
    obtenerMicelios() {
      if (this.obtenerMicelios.length > 0) {
        this.parametros.micelio = this.obtenerMicelios[0].id;
      } else {
        this.parametros.micelio = null;
      }
    },
    obtenerConidioforos() {
      if (this.obtenerConidioforos.length > 0) {
        this.parametros.conidioforo = this.obtenerConidioforos[0].id;
      } else {
        this.parametros.conidioforo = null;
      }
    },
  },
};
</script>