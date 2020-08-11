<template>
  <div>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-sm-6">
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
                  <label for="medio" class>Medio</label>
                  <input
                    name="medio"
                    id="medio"
                    placeholder="..."
                    type="text"
                    class="form-control"
                    v-model="parametros.medio"
                    required
                  />
                </div>
                <template v-if="getInfoCaractMacroActinomicetos">
                  <div class="form-row">
                    <div class="col-md-6">
                      <label for="textura" class>Textura</label>
                      <div class="input-group mb-3">
                        <select
                          name="select"
                          id="textura"
                          class="form-control"
                          v-model="parametros.textura"
                        >
                          <option
                            v-for="(e,index) in obtenerTexturas"
                            :key="index"
                            :value="e.id"
                          >{{e.nombre}}</option>
                        </select>
                        <div class="input-group-append" v-if="getPermisoByNombre('agregar-otra')">
                          <button
                            class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                            @click.prevent="showModal('textura')"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="color" class>Color</label>
                      <div class="input-group mb-3">
                        <select
                          name="select"
                          id="color"
                          class="form-control"
                          v-model="parametros.color"
                        >
                          <option
                            v-for="(c,index) in obtenerColores"
                            :key="index"
                            :value="c.id"
                          >{{c.nombre}}</option>
                        </select>
                        <div class="input-group-append" v-if="getPermisoByNombre('agregar-otra')">
                          <button
                            class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                            @click.prevent="showModal('color')"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-6">
                      <label for="forma" class>Forma</label>
                      <div class="input-group mb-3">
                        <select
                          name="select"
                          id="forma"
                          class="form-control"
                          v-model="parametros.forma"
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
                            @click.prevent="showModal('forma_macro')"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="superficie" class>Superficie</label>
                      <div class="input-group mb-3">
                        <select
                          name="select"
                          id="superficie"
                          class="form-control"
                          v-model="parametros.superficie"
                        >
                          <option
                            v-for="(s,index) in obtenerSuperficies"
                            :key="index"
                            :value="s.id"
                          >{{s.nombre}}</option>
                        </select>
                        <div class="input-group-append" v-if="getPermisoByNombre('agregar-otra')">
                          <button
                            class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                            @click.prevent="showModal('superficie')"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-6">
                      <label for="borde" class>Borde</label>
                      <div class="input-group mb-3">
                        <select
                          name="select"
                          id="borde"
                          class="form-control"
                          v-model="parametros.borde"
                        >
                          <option
                            v-for="(b,index) in obtenerBordes"
                            :key="index"
                            :value="b.id"
                          >{{b.nombre}}</option>
                        </select>
                        <div class="input-group-append" v-if="getPermisoByNombre('agregar-otra')">
                          <button
                            class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                            @click.prevent="showModal('borde')"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="pigmento" class>Pigmento</label>
                      <div class="input-group mb-3">
                        <select
                          name="select"
                          id="pigmento"
                          class="form-control"
                          v-model="parametros.pigmento"
                        >
                          <option
                            v-for="(d,index) in obtenerPigmentos"
                            :key="index"
                            :value="d.id"
                          >{{d.nombre}}</option>
                        </select>
                        <div class="input-group-append" v-if="getPermisoByNombre('agregar-otra')">
                          <button
                            class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                            @click.prevent="showModal('pigmento')"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
                <div class="position-relative form-group">
                  <label for="secrecion_geosminas" class>Secreción de Geosminas</label>
                  <input
                    name="secrecion_geosminas"
                    id="secrecion_geosminas"
                    placeholder="..."
                    type="text"
                    class="form-control"
                    v-model="parametros.secrecion_geosminas"
                    required
                  />
                </div>
                <div class="position-relative form-group">
                  <label for="imagen" class>Imagen</label>
                  <input
                    name="imagen"
                    @change="obtenerImagen"
                    id="imagen"
                    accept="image/jpeg, image/png"
                    type="file"
                    class="form-control-file"
                    ref="inputImagen"
                    :required="required"
                  />
                  <span v-if="imagenError" class="text-danger">{{imagenError}}</span>
                </div>
                <div class="position-relative form-group">
                  <label for="otras_caract">Otras Características</label>
                  <textarea
                    name="text"
                    id="otras_caract"
                    class="form-control"
                    v-model="parametros.otras_caract"
                  ></textarea>
                </div>
                <button
                  class="mb-2 mr-2 btn btn-block"
                  :class="btnClase"
                  :disabled="validarBtn||bloquearBtn"
                >{{nomBtnComputed}}</button>
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
import obtenerImagenCroopieCepasMixin from "../../../../mixins/obtenerImagenCroopieCepas";
import Croppie from "../../../CroppieComponent.vue";
import ModalAgregarInfo from "../../ModalAgregarInfoCaractComponent.vue";
export default {
  components: { Croppie, ModalAgregarInfo },
  props: ["info", "modificarInfo"],
  data() {
    return {
      parametros: {
        cepaId: "",
        medio: "",
        forma: null,
        borde: null,
        textura: null,
        color: null,
        pigmento: null,
        secrecion_geosminas: "",
        superficie: null,
        otras_caract: "",
        imagen: "",
      },
      tituloModal: "",
      tipoModal: "",
      tituloForm: "",
      nomBtn: "",
      errors: [],
      bloquearBtn: false,
      bloquearBtnModal: false,
    };
  },
  mixins: [Toastr, obtenerImagenCroopieCepasMixin],
  methods: {
    evento() {
      this.bloquearBtn = true;
      if (this.tituloForm === "Agregar Medio") {
        if (this.parametros.imagen) {
          axios
            .post("/cepas/actinomiceto/caract-macro", this.parametros)
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
          this.bloquearBtn = false;
          this.errors = { imagen: ["Favor elija una imagen."] };
          this.toastr("Error!!", "", "error");
        }
      } else {
        axios
          .put(
            `/cepas/actinomiceto/caract-macro/${this.info.id}`,
            this.parametros
          )
          .then((res) => {
            this.bloquearBtn = false;
            this.errors = [];
            this.$refs.inputImagen.value = "";
            this.$emit("editar", res.data);
            this.toastr("Editar Medio", "Medio editado con exito!!", "success");
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
    },
    llenarInfo() {
      this.parametros.medio = this.info.medio;
      this.parametros.forma = this.info.forma_id;
      this.parametros.borde = this.info.borde_id;
      this.parametros.textura = this.info.textura_id;
      this.parametros.color = this.info.color_id;
      this.parametros.pigmento = this.info.pigmento_id;
      this.parametros.secrecion_geosminas = this.info.secrecion_geosminas;
      this.parametros.superficie = this.info.superficie_id;
      this.parametros.otras_caract = this.info.otras_caract;
      this.parametros.imagen = this.info.imagen;
      this.imagenMiniatura = this.info.imagenPublica;
    },
    showModal(tipo) {
      this.tipoModal = tipo;
      if (tipo === "forma_macro") {
        this.tituloModal = "Agregar Nueva Forma";
      } else if (tipo === "borde") {
        this.tituloModal = "Agregar Nuevo Borde";
      } else if (tipo === "pigmento") {
        this.tituloModal = "Agregar Nuevo Pigmento";
      } else if (tipo === "textura") {
        this.tituloModal = "Agregar Nueva Textura";
      } else if (tipo === "color") {
        this.tituloModal = "Agregar Nuevo Color";
      } else {
        this.tituloModal = "Agregar Nueva Superficie";
      }
      this.$modal.show("modal_agregar_info_caract");
    },
    verificarSelects() {
      if (this.obtenerFormas.length > 0) {
        this.parametros.forma = this.obtenerFormas[0].id;
      } else {
        this.parametros.forma = null;
      }
      if (this.obtenerTexturas.length > 0) {
        this.parametros.textura = this.obtenerTexturas[0].id;
      } else {
        this.parametros.textura = null;
      }
      if (this.obtenerSuperficies.length > 0) {
        this.parametros.superficie = this.obtenerSuperficies[0].id;
      } else {
        this.parametros.superficie = null;
      }
      if (this.obtenerColores.length > 0) {
        this.parametros.color = this.obtenerColores[0].id;
      } else {
        this.parametros.color = null;
      }
      if (this.obtenerBordes.length > 0) {
        this.parametros.borde = this.obtenerBordes[0].id;
      } else {
        this.parametros.borde = null;
      }
      if (this.obtenerPigmentos.length > 0) {
        this.parametros.pigmento = this.obtenerPigmentos[0].id;
      } else {
        this.parametros.pigmento = null;
      }
    },
  },
  computed: {
    ...vuex.mapGetters(["getPermisoByNombre"]),
    ...vuex.mapGetters("info_caract", ["getInfoCaractMacroActinomicetos"]),
    btnClase() {
      if (this.tituloForm === "Agregar Medio") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    required() {
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
    obtenerFormas() {
      return this.getInfoCaractMacroActinomicetos.formas_macros;
    },
    obtenerTexturas() {
      return this.getInfoCaractMacroActinomicetos.texturas;
    },
    obtenerSuperficies() {
      return this.getInfoCaractMacroActinomicetos.superficies;
    },
    obtenerColores() {
      return this.getInfoCaractMacroActinomicetos.colors;
    },
    obtenerBordes() {
      return this.getInfoCaractMacroActinomicetos.bordes;
    },
    obtenerPigmentos() {
      return this.getInfoCaractMacroActinomicetos.pigmentos;
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
    obtenerTexturas() {
      if (this.obtenerTexturas.length > 0) {
        this.parametros.textura = this.obtenerTexturas[0].id;
      } else {
        this.parametros.textura = null;
      }
    },
    obtenerSuperficies() {
      if (this.obtenerSuperficies.length > 0) {
        this.parametros.superficie = this.obtenerSuperficies[0].id;
      } else {
        this.parametros.superficie = null;
      }
    },
    obtenerColores() {
      if (this.obtenerColores.length > 0) {
        this.parametros.color = this.obtenerColores[0].id;
      } else {
        this.parametros.color = null;
      }
    },
    obtenerBordes() {
      if (this.obtenerBordes.length > 0) {
        this.parametros.borde = this.obtenerBordes[0].id;
      } else {
        this.parametros.borde = null;
      }
    },
    obtenerPigmentos() {
      if (this.obtenerPigmentos.length > 0) {
        this.parametros.pigmento = this.obtenerPigmentos[0].id;
      } else {
        this.parametros.pigmento = null;
      }
    },
  },
};
</script>
