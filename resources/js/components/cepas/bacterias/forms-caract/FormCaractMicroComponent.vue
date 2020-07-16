<template>
  <div class="mt-4 mr-4 ml-4">
    <div class="row justify-content-md-center">
      <div class="col-sm-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">{{tituloForm}}</h5>
            <form @submit.prevent="evento">
              <template v-if="getInfoCaractMicroBacterias">
                <label for="forma" class>Forma</label>
                <div class="input-group mb-3">
                  <select name="select" id="forma" class="form-control" v-model="parametros.forma">
                    <option
                      v-for="(f,index) in getInfoCaractMicroBacterias.formas_micros"
                      :key="index"
                      :value="f.id"
                    >{{f.nombre}}</option>
                  </select>
                  <div class="input-group-append">
                    <button
                      class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                      @click.prevent="showModal('forma_micro')"
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </template>
              <div class="position-relative form-group">
                <label for="ordenamiento" class>Ordenamiento</label>
                <input
                  name="ordenamiento"
                  id="ordenamiento"
                  placeholder="..."
                  type="text"
                  class="form-control"
                  v-model="parametros.ordenamiento"
                  required
                />
                <span v-if="errors.ordenamiento" class="text-danger">{{errors.ordenamiento[0]}}</span>
              </div>
              <div class="position-relative form-group">
                <label>Tinción de Gram</label>
                <div>
                  <div class="custom-radio custom-control custom-control-inline">
                    <input
                      type="radio"
                      id="tincion_gram1"
                      name="tincion_gram"
                      class="custom-control-input"
                      value="Positivo"
                      v-model="parametros.tincion_gram"
                    />
                    <label class="custom-control-label" for="tincion_gram1">Gram Positivos</label>
                  </div>
                  <div class="custom-radio custom-control custom-control-inline">
                    <input
                      type="radio"
                      id="tincion_gram2"
                      name="tincion_gram"
                      class="custom-control-input"
                      value="Negativo"
                      v-model="parametros.tincion_gram"
                    />
                    <label class="custom-control-label" for="tincion_gram2">Gram Negativos</label>
                  </div>
                </div>
              </div>
              <div class="position-relative form-group">
                <label>Tinción de Esporas</label>
                <div>
                  <div class="custom-radio custom-control custom-control-inline">
                    <input
                      type="radio"
                      id="tincion_esporas1"
                      name="tincion_esporas"
                      class="custom-control-input"
                      value="Presencia"
                      v-model="parametros.tincion_esporas"
                    />
                    <label class="custom-control-label" for="tincion_esporas1">Presencia</label>
                  </div>
                  <div class="custom-radio custom-control custom-control-inline">
                    <input
                      type="radio"
                      id="tincion_esporas2"
                      name="tincion_esporas"
                      class="custom-control-input"
                      value="Ausencia"
                      v-model="parametros.tincion_esporas"
                    />
                    <label class="custom-control-label" for="tincion_esporas2">Ausencia</label>
                  </div>
                </div>
              </div>
              <div
                class="position-relative form-group"
                v-show="parametros.tincion_esporas==='Presencia'"
              >
                <label for="ubicacion_esporas" class>Ubicación de la Espora</label>
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
                  <div class="custom-radio custom-control custom-control-inline">
                    <input
                      type="radio"
                      id="tincion_capsula1"
                      name="tincion_capsula"
                      class="custom-control-input"
                      value="Presencia"
                      v-model="parametros.tincion_capsula"
                    />
                    <label class="custom-control-label" for="tincion_capsula1">Presencia</label>
                  </div>
                  <div class="custom-radio custom-control custom-control-inline">
                    <input
                      type="radio"
                      id="tincion_capsula2"
                      name="tincion_capsula"
                      class="custom-control-input"
                      value="Ausencia"
                      v-model="parametros.tincion_capsula"
                    />
                    <label class="custom-control-label" for="tincion_capsula2">Ausencia</label>
                  </div>
                </div>
              </div>
              <template v-if="required">
                <div class="position-relative form-group">
                  <label for="imagen" class>Imágenes</label>
                  <input
                    name="imagen"
                    @change="obtenerImagenes"
                    id="imagen"
                    accept="image/jpeg, image/png"
                    type="file"
                    class="form-control-file"
                    ref="inputImagen"
                    multiple
                    :required="required"
                  />
                  <span v-if="erroresImagenes" class="text-danger">{{erroresImagenes}}</span>
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
                :disabled="btnDisable"
              >{{nomBtn}}</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Imagenes</h5>
            <template v-if="required">
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
    <modal name="agregar-caract-info" classes="my_modal" :width="450" :height="450">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">{{modal.titulo}}</h5>
          <button type="button" class="close" @click="$modal.hide('agregar-caract-info')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="position-relative form-group">
            <label for="nombre" class>Nombre</label>
            <input
              name="nombre"
              id="nombre"
              placeholder=" ..."
              type="text"
              class="form-control"
              v-model="modal.input"
              required
            />
            <span v-if="modal.errors.nombre" class="text-danger">{{modal.errors.nombre[0]}}</span>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('agregar-caract-info')"
          >Cancelar</button>
          <button type="button" class="btn btn-success" @click="agregarInfo">Agregar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import vuex from "vuex";
import Toastr from "../../../../mixins/toastr";
import obtenerImagenCroopie3ImagenesMixin from "../../../../mixins/obtenerImagenCroopie3Imagenes";
import CroppieCepas from "../../CroppieCepasComponent.vue";
import Imagenes from "../../ImagenesComponent.vue";
export default {
  components: { CroppieCepas, Imagenes },
  props: ["info", "modificarInfo"],
  watch: {
    modificarInfo() {
      if (this.modificarInfo) {
        this.llenarInfo();
        this.$emit("cambiarVariable");
      }
    }
  },
  data() {
    return {
      parametros: {
        cepaId: "",
        forma: 1,
        ordenamiento: "",
        tincion_gram: "Positivo",
        tincion_esporas: "Presencia",
        ubicacion_esporas: "Central",
        tincion_capsula: "Presencia",
        otras_caract: "",
        imagen1: "",
        imagen2: "",
        imagen3: ""
      },
      modal: {
        titulo: "",
        input: "",
        tipo: "",
        errors: []
      },
      tituloForm: "",
      nomBtn: "",
      errors: [],
      erroresImagenes: "",
      imagenesCroppie: [],
      imagenes: [],
      cantImagenes: ""
    };
  },
  mixins: [Toastr, obtenerImagenCroopie3ImagenesMixin],
  methods: {
    ...vuex.mapActions("info_caract", ["accionAgregarTipoCaractBacteria"]),
    evento() {
      if (this.tituloForm === "Agregar Característica") {
        axios
          .post("/cepas/bacteria/caract-micro", this.parametros)
          .then(res => {
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
          })
          .catch(error => {
            if (error.response) {
              this.errors = [];
              this.errors = error.response.data.errors;
              this.toastr("Error!!", "", "error");
            }
          });
      } else {
        axios
          .put(`/cepas/bacteria/caract-micro/${this.info.id}`, this.parametros)
          .then(res => {
            this.errors = [];
            this.$emit("editar", res.data);
            this.toastr(
              "Editar Característica Microscópica",
              "Característica Microscópica editada con exito!!",
              "success"
            );
          })
          .catch(error => {
            if (error.response) {
              this.errors = [];
              this.errors = error.response.data.errors;
              this.toastr("Error!!", "", "error");
              // console.log(error.response.data);
            }
          });
      }
    },
    showModal(tipo) {
      this.modal.input = "";
      this.modal.errors = [];
      this.modal.tipo = tipo;
      if (tipo === "forma_micro") {
        this.modal.titulo = "Agregar Nueva Forma";
      }
      this.$modal.show("agregar-caract-info");
    },
    agregarInfo() {
      if (this.modal.input === "") {
        this.modal.errors = { nombre: { 0: "Favor llenar este campo" } };
      } else {
        let parametros = {
          tipo: this.modal.tipo,
          nombre: this.modal.input
        };
        axios
          .post("/info-caract-bacterias/agregar", parametros)
          .then(res => {
            this.accionAgregarTipoCaractBacteria({
              info: res.data,
              tipo: this.modal.tipo
            });
            this.$modal.hide("agregar-caract-info");
            this.toastr(
              "Agregar Informacion",
              `${this.modal.tipo} agregado/a con exito`,
              "success"
            );
          })
          .catch(error => {
            if (error.response) {
              this.modal.errors = error.response.data.errors;
            }
            this.toastr("Error!!!!", "", "error");
          });
      }
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
    }
  },
  computed: {
    ...vuex.mapGetters("info_caract", ["getInfoCaractMicroBacterias"]),
    required() {
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
    }
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
    if (this.$route.params.cepaBacteriaId) {
      this.parametros.cepaId = this.$route.params.cepaBacteriaId;
    } else {
      this.parametros.cepaId = this.$route.params.cepaId;
    }
  }
};
</script>