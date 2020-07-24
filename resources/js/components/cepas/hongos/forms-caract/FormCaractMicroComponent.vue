<template>
  <div class="mt-4 mr-4 ml-4">
    <div class="row justify-content-md-center">
      <div class="col-sm-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">{{ tituloForm }}</h5>
            <form @submit.prevent="evento">
              <template v-if="errors!=''">
                <div class="alert alert-danger">
                  <p v-for="(item, index) in errors" :key="index">{{item[0]}}</p>
                </div>
              </template>
              <template v-if="getInfoCaractMicroHongos">
                <label for="conidioforo" class>Conidióforo</label>
                <div class="input-group mb-3">
                  <select
                    name="select"
                    id="conidioforo"
                    class="form-control"
                    v-model="parametros.conidioforo"
                  >
                    <option
                      v-for="(f,index) in obtenerConidioforos"
                      :key="index"
                      :value="f.id"
                    >{{ f.nombre }}</option>
                  </select>
                  <div class="input-group-append">
                    <button
                      class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                      @click.prevent="showModal('conidioforo')"
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
                <label for="fialides" class>Fiálides</label>
                <div>
                  <div class="custom-radio custom-control custom-control-inline">
                    <input
                      type="radio"
                      id="fialides1"
                      name="fialides"
                      class="custom-control-input"
                      value="Presencia"
                      v-model="parametros.fialides"
                    />
                    <label class="custom-control-label" for="fialides1">Presencia</label>
                  </div>
                  <div class="custom-radio custom-control custom-control-inline">
                    <input
                      type="radio"
                      id="fialides2"
                      name="fialides"
                      class="custom-control-input"
                      value="Ausencia"
                      v-model="parametros.fialides"
                    />
                    <label class="custom-control-label" for="fialides2">Ausencia</label>
                  </div>

                  <div
                    class="position-relative form-group"
                    v-if="parametros.fialides === 'Presencia'"
                  >
                    <label for="fialides_forma" class>Forma</label>
                    <input
                      name="fialides_forma"
                      id="fialides_forma"
                      placeholder="..."
                      type="text"
                      class="form-control"
                      v-model="parametros.fialides_forma"
                      required
                    />
                    <label for="fialides_otra_caracteristica" class>Otras características</label>
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
                  <div class="custom-radio custom-control custom-control-inline">
                    <input
                      type="radio"
                      id="vesicula1"
                      name="vesicula"
                      class="custom-control-input"
                      value="Presencia"
                      v-model="parametros.vesicula"
                    />
                    <label class="custom-control-label" for="vesicula1">Presencia</label>
                  </div>
                  <div class="custom-radio custom-control custom-control-inline">
                    <input
                      type="radio"
                      id="vesicula2"
                      name="vesicula"
                      class="custom-control-input"
                      value="Ausencia"
                      v-model="parametros.vesicula"
                    />
                    <label class="custom-control-label" for="vesicula2">Ausencia</label>
                  </div>
                </div>
                <label for="espora_asexual" class>Espora Asexual</label>
                <div class="input-group mb-3">
                  <select
                    name="select"
                    id="espora_asexual"
                    class="form-control"
                    v-model="parametros.espora_asexual"
                  >
                    <option
                      v-for="(b,index) in obtenerEsporasAsexuales"
                      :key="index"
                      :value="b.id"
                    >{{ b.nombre }}</option>
                  </select>
                  <div class="input-group-append">
                    <button
                      class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                      @click.prevent="showModal('espora_asexual')"
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>

                <div class="position-relative form-group" v-if="parametros.espora_asexual===2">
                  <label for="esporas_asexuales_conidios_tamano">Tamaño</label>
                  <div>
                    <div class="custom-radio custom-control custom-control-inline">
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
                      >Grande</label>
                    </div>
                    <div class="custom-radio custom-control custom-control-inline">
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
                      >Mediano</label>
                    </div>
                    <div class="custom-radio custom-control custom-control-inline">
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
                      >Pequeño</label>
                    </div>
                  </div>
                  <label for="esporas_asexuales_conidios_color" class>Color</label>
                  <input
                    name="esporas_asexuales_conidios_color"
                    id="esporas_asexuales_conidios_color"
                    placeholder="..."
                    type="text"
                    class="form-control"
                    v-model="parametros.esporas_asexuales_conidios_color"
                    required
                  />
                  <label for="esporas_asexuales_conidios_forma" class>Forma</label>
                  <input
                    name="esporas_asexuales_conidios_forma"
                    id="esporas_asexuales_conidios_forma"
                    placeholder="..."
                    type="text"
                    class="form-control"
                    v-model="parametros.esporas_asexuales_conidios_forma"
                    required
                  />
                  <label for="esporas_asexuales_conidios_otras" class>Otras características</label>
                  <input
                    name="esporas_asexuales_conidios_otras"
                    id="esporas_asexuales_conidios_otras"
                    placeholder="..."
                    type="text"
                    class="form-control"
                    v-model="parametros.esporas_asexuales_conidios_otras"
                  />
                </div>
                <label for="espora_sexual" class>Espora Sexual</label>
                <div class="input-group mb-3">
                  <select
                    name="select"
                    id="espora_sexual"
                    class="form-control"
                    v-model="parametros.espora_sexual"
                  >
                    <option
                      v-for="(b,index) in obtenerEsporasSexuales"
                      :key="index"
                      :value="b.id"
                    >{{ b.nombre }}</option>
                  </select>
                  <div class="input-group-append">
                    <button
                      class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                      @click.prevent="showModal('espora_sexual')"
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </template>
              <template v-if="required">
                <div class="position-relative form-group">
                  <label for="imagen" class>Imágenes</label>
                  <input
                    name="imagen"
                    @change="obtenerImagenes"
                    id="imagen"
                    type="file"
                    accept="image/jpeg, image/png"
                    class="form-control-file"
                    ref="inputImagen"
                    multiple
                    :required="required"
                  />
                  <span v-if="erroresImagenes" class="text-danger">{{ erroresImagenes }}</span>
                </div>
              </template>
              <div class="position-relative form-group">
                <label for="otras_estructuras">Otras estructuras</label>
                <textarea
                  name="text"
                  id="otras_estructuras"
                  class="form-control"
                  v-model="parametros.otras_estructuras"
                ></textarea>
              </div>
              <button
                class="mb-2 mr-2 btn btn-block"
                :class="btnClase"
                :disabled="btnDisable||bloquearBtn"
              >{{ nomBtn }}</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
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

    <modal name="agregar-caract-info" classes="my_modal" :width="450" :height="450">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">{{ modal.titulo }}</h5>
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
          <button
            type="button"
            class="btn btn-success"
            :disabled="bloquearBtnModal"
            @click="agregarInfo"
          >Agregar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import vuex from "vuex";
import Toastr from "../../../../mixins/toastr";
import obtenerImagenCroopie3Imagenes from "../../../../mixins/obtenerImagenCroopie3Imagenes";
import CroppieCepas from "../../CroppieCepasComponent.vue";
import Imagenes from "../../ImagenesComponent.vue";
export default {
  components: { CroppieCepas, Imagenes },
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
        descripcion_imagenes: "",
      },
      modal: {
        titulo: "",
        input: "",
        tipo: "",
        errors: [],
      },
      tituloForm: "",
      nomBtn: "",
      errors: [],
      bloquearBtn: false,
      bloquearBtnModal: false,
    };
  },
  mixins: [Toastr, obtenerImagenCroopie3Imagenes],
  methods: {
    ...vuex.mapActions("info_caract", ["accionAgregarTipoCaractHongo"]),
    evento() {
      this.bloquearBtn = true;
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
        if (this.parametros.imagen1) {
          axios
            .post("/cepas/hongo/caract-micro", this.parametros)
            .then((res) => {
              if (res.request.responseURL === process.env.MIX_LOGIN) {
                this.$ls.set(
                  "mensajeLogin",
                  "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                );
                window.location.href = "/";
              }
              this.bloquearBtn = false;
              this.errors = [];
              this.$refs.inputImagen.value = "";
              this.tituloForm = "Editar Característica";
              this.nomBtn = "Editar";
              this.$emit("agregar", res.data);
              this.toastr(
                "Agregar Característica Microscópica",
                "Característica Microscópica agregada con éxito!",
                "success"
              );
            })
            .catch((error) => {
              this.bloquearBtn = false;
              this.errors = [];
              this.errors = error.response.data.errors;
              this.toastr("Error!!", "", "error");
            });
        } else {
          this.bloquearBtn = false;
          this.errors = { imagen: ["Favor elija al menos una imagen."] };
          this.toastr("Error!!", "", "error");
        }
      } else {
        axios
          .put(`/cepas/hongo/caract-micro/${this.info.id}`, this.parametros)
          .then((res) => {
            if (res.request.responseURL === process.env.MIX_LOGIN) {
              this.$ls.set(
                "mensajeLogin",
                "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
              );
              window.location.href = "/";
            }
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
            this.bloquearBtn = false;
            this.errors = [];
            this.errors = error.response.data.errors;
            this.toastr("Error!!", "", "error");
          });
      }
    },
    showModal(tipo) {
      this.modal.input = "";
      this.modal.errors = [];
      this.modal.tipo = tipo;
      if (tipo === "conidioforo") {
        this.modal.titulo = "Agregar Nuevo Conidióforo";
      } else if (tipo === "espora_asexual") {
        this.modal.titulo = "Agregar Nueva Espora Asexual";
      } else if (tipo === "espora_sexual") {
        this.modal.titulo = "Agregar Nueva Espora Asexual";
      }
      this.$modal.show("agregar-caract-info");
    },
    agregarInfo() {
      if (this.modal.input === "") {
        this.modal.errors = {
          nombre: { 0: "Favor llenar este campo" },
        };
      } else {
        this.bloquearBtnModal = true;
        let parametros = {
          tipo: this.modal.tipo,
          nombre: this.modal.input,
        };
        axios
          .post("/info-caract-hongos/agregar", parametros)
          .then((res) => {
            if (res.request.responseURL === process.env.MIX_LOGIN) {
              this.$ls.set(
                "mensajeLogin",
                "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
              );
              window.location.href = "/";
            }
            this.bloquearBtnModal = false;
            this.accionAgregarTipoCaractHongo({
              info: res.data,
              tipo: this.modal.tipo,
            });
            this.$modal.hide("agregar-caract-info");
            this.toastr(
              "Agregar Informacion",
              `${this.modal.tipo} agregado/a con exito`,
              "success"
            );
          })
          .catch((error) => {
            this.bloquearBtnModal = false;
            this.errors = [];
            this.modal.errors = error.response.data.errors;
            this.toastr("Error!!", "", "error");
          });
      }
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
    ...vuex.mapGetters("info_caract", ["getInfoCaractMicroHongos"]),
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
    if (this.$route.params.cepaHongoId) {
      this.parametros.cepaId = this.$route.params.cepaHongoId;
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