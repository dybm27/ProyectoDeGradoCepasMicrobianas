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
              <div class="form-row">
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label>Hifas</label>
                    <div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="hifas1"
                          name="hifas"
                          class="custom-control-input"
                          value="Presencia"
                          v-model="parametros.hifas"
                        />
                        <label class="custom-control-label" for="hifas1">Presencia</label>
                      </div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="hifas2"
                          name="hifas"
                          class="custom-control-input"
                          value="Ausencia"
                          v-model="parametros.hifas"
                        />
                        <label class="custom-control-label" for="hifas2">Ausencia</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label>Cápsula</label>
                    <div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="capsula1"
                          name="capsula"
                          class="custom-control-input"
                          value="Presencia"
                          v-model="parametros.capsula"
                        />
                        <label class="custom-control-label" for="capsula1">Presencia</label>
                      </div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="capsula2"
                          name="capsula"
                          class="custom-control-input"
                          value="Ausencia"
                          v-model="parametros.capsula"
                        />
                        <label class="custom-control-label" for="capsula2">Ausencia</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label>Balistoconidias</label>
                    <div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="balistoconidias1"
                          name="balistoconidias"
                          class="custom-control-input"
                          value="Presencia"
                          v-model="parametros.balistoconidias"
                        />
                        <label class="custom-control-label" for="balistoconidias1">Presencia</label>
                      </div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="balistoconidias2"
                          name="balistoconidias"
                          class="custom-control-input"
                          value="Ausencia"
                          v-model="parametros.balistoconidias"
                        />
                        <label class="custom-control-label" for="balistoconidias2">Ausencia</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label>Artroconidias</label>
                    <div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="artroconidias1"
                          name="artroconidias"
                          class="custom-control-input"
                          value="Presencia"
                          v-model="parametros.artroconidias"
                        />
                        <label class="custom-control-label" for="artroconidias1">Presencia</label>
                      </div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="artroconidias2"
                          name="artroconidias"
                          class="custom-control-input"
                          value="Ausencia"
                          v-model="parametros.artroconidias"
                        />
                        <label class="custom-control-label" for="artroconidias2">Ausencia</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label>Pseudohifas</label>
                    <div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="pseudohifas1"
                          name="pseudohifas"
                          class="custom-control-input"
                          value="Presencia"
                          v-model="parametros.pseudohifas"
                        />
                        <label class="custom-control-label" for="pseudohifas1">Presencia</label>
                      </div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="pseudohifas2"
                          name="pseudohifas"
                          class="custom-control-input"
                          value="Ausencia"
                          v-model="parametros.pseudohifas"
                        />
                        <label class="custom-control-label" for="pseudohifas2">Ausencia</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label>Blastoconidias</label>
                    <div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="blastoconidias1"
                          name="blastoconidias"
                          class="custom-control-input"
                          value="Presencia"
                          v-model="parametros.blastoconidias"
                        />
                        <label class="custom-control-label" for="blastoconidias1">Presencia</label>
                      </div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="blastoconidias2"
                          name="blastoconidias"
                          class="custom-control-input"
                          value="Ausencia"
                          v-model="parametros.blastoconidias"
                        />
                        <label class="custom-control-label" for="blastoconidias2">Ausencia</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label>Producción de Clamidosporas</label>
                    <div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="produccion_clamidosporas1"
                          name="produccion_clamidosporas"
                          class="custom-control-input"
                          value="Presencia"
                          v-model="parametros.produccion_clamidosporas"
                        />
                        <label
                          class="custom-control-label"
                          for="produccion_clamidosporas1"
                        >Presencia</label>
                      </div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="produccion_clamidosporas2"
                          name="produccion_clamidosporas"
                          class="custom-control-input"
                          value="Ausencia"
                          v-model="parametros.produccion_clamidosporas"
                        />
                        <label class="custom-control-label" for="produccion_clamidosporas2">Ausencia</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label>Inducción de Filamentización</label>
                    <div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="induccion_filamentizacion1"
                          name="induccion_filamentizacion"
                          class="custom-control-input"
                          value="Presencia"
                          v-model="parametros.induccion_filamentizacion"
                        />
                        <label
                          class="custom-control-label"
                          for="induccion_filamentizacion1"
                        >Presencia</label>
                      </div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="induccion_filamentizacion2"
                          name="induccion_filamentizacion"
                          class="custom-control-input"
                          value="Ausencia"
                          v-model="parametros.induccion_filamentizacion"
                        />
                        <label
                          class="custom-control-label"
                          for="induccion_filamentizacion2"
                        >Ausencia</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label>Producción de Tubo Germinativo</label>
                    <div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="produccion_tubo_germinativo1"
                          name="produccion_tubo_germinativo"
                          class="custom-control-input"
                          value="Presencia"
                          v-model="parametros.produccion_tubo_germinativo"
                        />
                        <label
                          class="custom-control-label"
                          for="produccion_tubo_germinativo1"
                        >Presencia</label>
                      </div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="produccion_tubo_germinativo2"
                          name="produccion_tubo_germinativo"
                          class="custom-control-input"
                          value="Ausencia"
                          v-model="parametros.produccion_tubo_germinativo"
                        />
                        <label
                          class="custom-control-label"
                          for="produccion_tubo_germinativo2"
                        >Ausencia</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label>Formación de Asco y Ascosporas</label>
                    <div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="formacion_asco_y_ascosporas1"
                          name="formacion_asco_y_ascosporas"
                          class="custom-control-input"
                          value="Presencia"
                          v-model="parametros.formacion_asco_y_ascosporas"
                        />
                        <label
                          class="custom-control-label"
                          for="formacion_asco_y_ascosporas1"
                        >Presencia</label>
                      </div>
                      <div class="custom-radio custom-control custom-control-inline">
                        <input
                          type="radio"
                          id="formacion_asco_y_ascosporas2"
                          name="formacion_asco_y_ascosporas"
                          class="custom-control-input"
                          value="Ausencia"
                          v-model="parametros.formacion_asco_y_ascosporas"
                        />
                        <label
                          class="custom-control-label"
                          for="formacion_asco_y_ascosporas2"
                        >Ausencia</label>
                      </div>
                    </div>
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
                    type="file"
                    class="form-control-file"
                    ref="inputImagen"
                    accept="image/jpeg, image/png"
                    multiple
                    :required="required"
                  />
                  <span v-if="erroresImagenes" class="text-danger">{{erroresImagenes}}</span>
                </div>
              </template>
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
                :disabled="btnDisable||bloquearBtn"
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
                :tipoCepa="'levadura/caract-micro'"
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
        hifas: "Presencia",
        capsula: "Presencia",
        pseudohifas: "Presencia",
        balistoconidias: "Presencia",
        produccion_tubo_germinativo: "Presencia",
        blastoconidias: "Presencia",
        produccion_clamidosporas: "Presencia",
        artroconidias: "Presencia",
        induccion_filamentizacion: "Presencia",
        formacion_asco_y_ascosporas: "Presencia",
        otras_caract: "",
        imagen1: "",
        imagen2: "",
        imagen3: "",
      },
      tituloForm: "",
      nomBtn: "",
      errors: [],
      bloquearBtn: false,
    };
  },
  mixins: [obtenerImagenCroopie3ImagenesMixin, Toastr],
  methods: {
    evento() {
      this.bloquearBtn = true;
      if (this.tituloForm === "Agregar Característica") {
        if (this.parametros.imagen1) {
          axios
            .post("/cepas/levadura/caract-micro", this.parametros)
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
          this.bloquearBtn = false;
          this.errors = { imagen: ["Favor elija al menos una imagen."] };
          this.toastr("Error!!", "", "error");
        }
      } else {
        axios
          .put(`/cepas/levadura/caract-micro/${this.info.id}`, this.parametros)
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
    },
    llenarInfo() {
      this.imagenes = [];
      this.parametros.hifas = this.info.hifas;
      this.parametros.capsula = this.info.capsula;
      this.parametros.pseudohifas = this.info.pseudohifas;
      this.parametros.balistoconidias = this.info.balistoconidias;
      this.parametros.produccion_tubo_germinativo = this.info.produccion_tubo_germinativo;
      this.parametros.blastoconidias = this.info.blastoconidias;
      this.parametros.produccion_clamidosporas = this.info.produccion_clamidosporas;
      this.parametros.artroconidias = this.info.artroconidias;
      this.parametros.induccion_filamentizacion = this.info.induccion_filamentizacion;
      this.parametros.formacion_asco_y_ascosporas = this.info.formacion_asco_y_ascosporas;
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
    if (this.$route.params.cepaLevaduraId) {
      this.parametros.cepaId = this.$route.params.cepaLevaduraId;
    } else {
      this.parametros.cepaId = this.$route.params.cepaId;
    }
  },
};
</script>