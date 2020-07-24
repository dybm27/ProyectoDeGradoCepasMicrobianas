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
              <div class="position-relative form-group">
                <label for="ureasa" class>Ureasa</label>
                <input
                  name="ureasa"
                  id="ureasa"
                  placeholder="..."
                  type="text"
                  class="form-control"
                  v-model="parametros.ureasa"
                  required
                />
              </div>
              <div class="position-relative form-group">
                <label for="fenol_oxidasa" class>Fenol Oxidasa</label>
                <input
                  name="fenol_oxidasa"
                  id="fenol_oxidasa"
                  placeholder="..."
                  type="text"
                  class="form-control"
                  v-model="parametros.fenol_oxidasa"
                  required
                />
              </div>
              <div class="position-relative form-group">
                <label for="produccion_acido" class>Producción de ácido a partir de algunos azúcares</label>
                <input
                  name="produccion_acido"
                  id="produccion_acido"
                  placeholder="..."
                  type="text"
                  class="form-control"
                  v-model="parametros.produccion_acido"
                  required
                />
              </div>
              <div class="position-relative form-group">
                <label for="fenol_oxidasa" class>Termotolerancia</label>
                <div class="input-group mb-1">
                  <div class="input-group-prepend">
                    <span class="input-group-text">37°C</span>
                  </div>
                  <input type="text" class="form-control" v-model="parametros.termotolerancia_37" />
                </div>
                <div class="input-group mb-1">
                  <div class="input-group-prepend">
                    <span class="input-group-text">42°C</span>
                  </div>
                  <input type="text" class="form-control" v-model="parametros.termotolerancia_42" />
                </div>
                <div class="input-group mb-1">
                  <div class="input-group-prepend">
                    <span class="input-group-text">45°C</span>
                  </div>
                  <input type="text" class="form-control" v-model="parametros.termotolerancia_45" />
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">otra°</span>
                  </div>
                  <input type="text" class="form-control" v-model="parametros.termotolerancia_otra" />
                </div>
                <span
                  v-if="termotolerancia"
                  class="text-danger"
                >Llenar al menos una de las diferentes temperaturas.</span>
              </div>
              <div class="position-relative form-group">
                <label>Crecimineto</label>
                <div>
                  <div class="custom-radio custom-control custom-control-inline">
                    <input
                      type="radio"
                      id="crecimiento1"
                      name="crecimiento"
                      class="custom-control-input"
                      value="Positivo"
                      v-model="parametros.crecimiento"
                    />
                    <label class="custom-control-label" for="crecimiento1">Positivo +</label>
                  </div>
                  <div class="custom-radio custom-control custom-control-inline">
                    <input
                      type="radio"
                      id="crecimiento2"
                      name="crecimiento"
                      class="custom-control-input"
                      value="Negativo"
                      v-model="parametros.crecimiento"
                    />
                    <label class="custom-control-label" for="crecimiento2">Negativo -</label>
                  </div>
                </div>
              </div>
              <div class="position-relative form-group">
                <label for="nitratos" class>Nitratos</label>
                <input
                  name="nitratos"
                  id="nitratos"
                  placeholder="..."
                  type="text"
                  class="form-control"
                  v-model="parametros.nitratos"
                  required
                />
              </div>
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
                :disabled="btnDisable||bloquearBtn||termotolerancia"
              >{{nomBtn}}</button>
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
                :tipoCepa="'levadura/caract-bioqui'"
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
        ureasa: "",
        fenol_oxidasa: "",
        produccion_acido: "",
        termotolerancia_37: "",
        termotolerancia_42: "",
        termotolerancia_45: "",
        termotolerancia_otra: "",
        crecimiento: "Positivo",
        nitratos: "",
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
            .post("/cepas/levadura/caract-bioqui", this.parametros)
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
                "Agregar Características Bioquímicas",
                "Característica Bioquímica agregada con exito!!",
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
          .put(`/cepas/levadura/caract-bioqui/${this.info.id}`, this.parametros)
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
              "Editar Características Bioquímicas",
              "Característica Bioquímica editada con exito!!",
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
    llenarInfo() {
      this.imagenes = [];
      this.parametros.crecimiento = this.info.crecimiento;
      this.parametros.ureasa = this.info.ureasa;
      this.parametros.fenol_oxidasa = this.info.fenol_oxidasa;
      this.parametros.produccion_acido = this.info.produccion_acido;
      this.parametros.termotolerancia_37 = this.info.termotolerancia_37;
      this.parametros.termotolerancia_42 = this.info.termotolerancia_42;
      this.parametros.termotolerancia_45 = this.info.termotolerancia_45;
      this.parametros.termotolerancia_otra = this.info.termotolerancia_otra;
      this.parametros.nitratos = this.info.nitratos;
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
    termotolerancia() {
      if (
        this.parametros.termotolerancia_37 ||
        this.parametros.termotolerancia_42 ||
        this.parametros.termotolerancia_45 ||
        this.parametros.termotolerancia_otra
      ) {
        return false;
      }
      return true;
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