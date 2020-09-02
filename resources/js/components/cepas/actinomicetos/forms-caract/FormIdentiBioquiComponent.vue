<template>
  <div>
    <div class="container mt-4">
      <div class="main-card mb-3 card">
        <div class="card-body">
          <h5 class="card-title">{{tituloForm}}</h5>
          <div class="row justify-content-md-center">
            <div class="col-md-12">
              <template v-if="errors!=''">
                <div class="alert alert-danger">
                  <p v-for="(item, index) in errors" :key="index">{{item[0]}}</p>
                </div>
              </template>
              <form @submit.prevent="evento">
                <div class="form-row">
                  <div class="col-md-4">
                    <div class="position-relative form-group">
                      <label for="oxidasa" class>Oxidasa</label>
                      <input
                        name="oxidasa"
                        id="oxidasa"
                        placeholder="..."
                        type="text"
                        :class="['form-control', $v.parametros.oxidasa.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.oxidasa.$model"
                      />
                      <em
                        v-if="$v.parametros.oxidasa.$error&&!$v.parametros.oxidasa.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="position-relative form-group">
                      <label for="catalasa" class>Catalasa</label>
                      <input
                        name="catalasa"
                        id="catalasa"
                        placeholder="..."
                        type="text"
                        :class="['form-control', $v.parametros.catalasa.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.catalasa.$model"
                      />
                      <em
                        v-if="$v.parametros.catalasa.$error&&!$v.parametros.catalasa.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="position-relative form-group">
                      <label for="citrato" class>Citrato</label>
                      <input
                        name="citrato"
                        id="citrato"
                        placeholder="..."
                        type="text"
                        :class="['form-control', $v.parametros.citrato.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.citrato.$model"
                      />
                      <em
                        v-if="$v.parametros.citrato.$error&&!$v.parametros.citrato.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-4">
                    <div class="position-relative form-group">
                      <label for="nitrato" class>Nitratos</label>
                      <input
                        name="nitrato"
                        id="nitrato"
                        placeholder="..."
                        type="text"
                        :class="['form-control', $v.parametros.nitrato.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.nitrato.$model"
                      />
                      <em
                        v-if="$v.parametros.nitrato.$error&&!$v.parametros.nitrato.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="position-relative form-group">
                      <label for="caseina" class>Caseina</label>
                      <input
                        name="caseina"
                        id="caseina"
                        placeholder="..."
                        type="text"
                        :class="['form-control', $v.parametros.caseina.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.caseina.$model"
                      />
                      <em
                        v-if="$v.parametros.caseina.$error&&!$v.parametros.caseina.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="position-relative form-group">
                      <label for="hidro_urea" class>Hidrolisís de la Úrea</label>
                      <input
                        name="hidro_urea"
                        id="hidro_urea"
                        placeholder="..."
                        type="text"
                        :class="['form-control', $v.parametros.hidro_urea.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.hidro_urea.$model"
                      />
                      <em
                        v-if="$v.parametros.hidro_urea.$error&&!$v.parametros.hidro_urea.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div :class="classRow">
                    <div class="position-relative form-group">
                      <label for="hidro_gelatina" class>Hidrolisís de la Gelatina</label>
                      <input
                        name="hidro_gelatina"
                        id="hidro_gelatina"
                        placeholder="..."
                        type="text"
                        :class="['form-control', $v.parametros.hidro_gelatina.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.hidro_gelatina.$model"
                      />
                      <em
                        v-if="$v.parametros.hidro_gelatina.$error&&!$v.parametros.hidro_gelatina.required"
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
                      <label for="sensi_antibioticos" class>Sensibilidad a Antibióticos</label>
                      <input
                        name="sensi_antibioticos"
                        id="sensi_antibioticos"
                        placeholder="..."
                        type="text"
                        :class="['form-control', $v.parametros.sensi_antibioticos.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.sensi_antibioticos.$model"
                      />
                      <em
                        v-if="$v.parametros.sensi_antibioticos.$error&&!$v.parametros.sensi_antibioticos.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-6">
                    <label for="manitol">
                      <b>Fermentación de:</b>
                    </label>
                    <div class="form-row">
                      <div class="col-md-6">
                        <div class="position-relative form-group">
                          <label for="fer_lactosa" class>Lactosa</label>
                          <input
                            name="fer_lactosa"
                            id="fer_lactosa"
                            placeholder="..."
                            type="text"
                            :class="['form-control', $v.parametros.fer_lactosa.$error? 'error-input-select':'']"
                            v-model.trim="$v.parametros.fer_lactosa.$model"
                          />
                          <em
                            v-if="$v.parametros.fer_lactosa.$error&&!$v.parametros.fer_lactosa.required"
                            class="text-error-input"
                          >{{mensajes.required}}</em>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="position-relative form-group">
                          <label for="fer_manitol" class>Manitol</label>
                          <input
                            name="fer_manitol"
                            id="fer_manitol"
                            placeholder="..."
                            type="text"
                            :class="['form-control', $v.parametros.fer_manitol.$error? 'error-input-select':'']"
                            v-model.trim="$v.parametros.fer_manitol.$model"
                          />
                          <em
                            v-if="$v.parametros.fer_manitol.$error&&!$v.parametros.fer_manitol.required"
                            class="text-error-input"
                          >{{mensajes.required}}</em>
                        </div>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col-md-6">
                        <div class="position-relative form-group">
                          <label for="fer_inositol" class>Inositol</label>
                          <input
                            name="fer_inositol"
                            id="fer_inositol"
                            placeholder="..."
                            type="text"
                            :class="['form-control', $v.parametros.fer_inositol.$error? 'error-input-select':'']"
                            v-model.trim="$v.parametros.fer_inositol.$model"
                          />
                          <em
                            v-if="$v.parametros.fer_inositol.$error&&!$v.parametros.fer_inositol.required"
                            class="text-error-input"
                          >{{mensajes.required}}</em>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="position-relative form-group">
                          <label for="fer_sacarosa" class>Sacarosa</label>
                          <input
                            name="fer_sacarosa"
                            id="fer_sacarosa"
                            placeholder="..."
                            type="text"
                            :class="['form-control', $v.parametros.fer_sacarosa.$error? 'error-input-select':'']"
                            v-model.trim="$v.parametros.fer_sacarosa.$model"
                          />
                          <em
                            v-if="$v.parametros.fer_sacarosa.$error&&!$v.parametros.fer_sacarosa.required"
                            class="text-error-input"
                          >{{mensajes.required}}</em>
                        </div>
                      </div>
                    </div>
                    <div class="position-relative form-group">
                      <label for="fer_otro" class>Otra Fermentación</label>
                      <input
                        name="fer_otro"
                        id="fer_otro"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.fer_otro"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="otras_caract">Otras Características</label>
                      <textarea
                        style="height: 200px;"
                        name="otras_caract"
                        id="otras_caract"
                        class="form-control mt-2"
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
    </div>
    <div class="container">
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
                  :tipoCepa="'actinomiceto/identi-bioqui'"
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
        oxidasa: "",
        catalasa: "",
        citrato: "",
        caseina: "",
        nitrato: "",
        sensi_antibioticos: "",
        fer_manitol: "",
        fer_lactosa: "",
        fer_inositol: "",
        fer_sacarosa: "",
        fer_otro: "",
        hidro_gelatina: "",
        hidro_urea: "",
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
      oxidasa: { required },
      catalasa: { required },
      citrato: { required },
      caseina: { required },
      nitrato: { required },
      sensi_antibioticos: { required },
      fer_manitol: { required },
      fer_lactosa: { required },
      fer_inositol: { required },
      fer_sacarosa: { required },
      hidro_gelatina: { required },
      hidro_urea: { required },
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
        if (this.tituloForm === "Agregar Identificación") {
          axios
            .post("/cepas/actinomiceto/identi-bioqui", this.parametros)
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
                this.tituloForm = "Editar Identificación";
                this.nomBtn = "Editar";
                this.$emit("agregar", res.data);
                this.toastr(
                  "Agregar Identificación Bioquímica",
                  "Identificación Bioquímica agregada con exito!!",
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
              `/cepas/actinomiceto/identi-bioqui/${this.info.id}`,
              this.parametros
            )
            .then((res) => {
              this.bloquearBtn = false;
              this.errors = [];
              this.$emit("editar", res.data);
              this.toastr(
                "Editar Identificación Bioquímica",
                "Identificación Bioquímica editada con exito!!",
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
      this.parametros.oxidasa = this.info.oxidasa;
      this.parametros.catalasa = this.info.catalasa;
      this.parametros.citrato = this.info.citrato;
      this.parametros.caseina = this.info.caseina;
      this.parametros.nitrato = this.info.nitrato;
      this.parametros.sensi_antibioticos = this.info.sensi_antibioticos;
      this.parametros.fer_manitol = this.info.fer_manitol;
      this.parametros.fer_lactosa = this.info.fer_lactosa;
      this.parametros.fer_inositol = this.info.fer_inositol;
      this.parametros.fer_sacarosa = this.info.fer_sacarosa;
      this.parametros.fer_otro = this.info.fer_otro;
      this.parametros.hidro_gelatina = this.info.hidro_gelatina;
      this.parametros.hidro_urea = this.info.hidro_urea;
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
      if (this.tituloForm === "Agregar Identificación") {
        return true;
      } else {
        return false;
      }
    },
    btnClase() {
      if (this.tituloForm === "Agregar Identificación") {
        return "btn-success";
      } else {
        return "btn-warning";
      }
    },
    classRow() {
      if (this.tituloForm === "Agregar Identificación") {
        return "col-md-4";
      } else {
        return "col-md-6";
      }
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
    if (this.$route.params.cepaActinomicetoId) {
      this.parametros.cepaId = this.$route.params.cepaActinomicetoId;
    } else {
      this.parametros.cepaId = this.$route.params.cepaId;
    }
  },
};
</script>
