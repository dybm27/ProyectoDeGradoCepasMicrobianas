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
                <template v-if="getInfoCaractMacroLevaduras">
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
                    <div class="input-group-append">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                        @click.prevent="showModal('color')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <label for="textura" class>Textura</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="textura"
                      class="form-control"
                      v-model="parametros.textura"
                    >
                      <option
                        v-for="(t,index) in obtenerTexturas"
                        :key="index"
                        :value="t.id"
                      >{{t.nombre}}</option>
                    </select>
                    <div class="input-group-append">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                        @click.prevent="showModal('textura')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </template>
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
                  <label for="topografia_superficie" class>Topografía de la Superficie</label>
                  <input
                    name="topografia_superficie"
                    id="topografia_superficie"
                    placeholder="..."
                    type="text"
                    class="form-control"
                    v-model="parametros.topografia_superficie"
                    required
                  />
                </div>
                <div class="position-relative form-group">
                  <label for="borde_colonia" class>Borde de la Colonia</label>
                  <input
                    name="borde_colonia"
                    id="borde_colonia"
                    placeholder="..."
                    type="text"
                    class="form-control"
                    v-model="parametros.borde_colonia"
                    required
                  />
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
    <modal name="agregar-caract-info-levadura" classes="my_modal" :width="450" :height="450">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">{{modal.titulo}}</h5>
          <button type="button" class="close" @click="$modal.hide('agregar-caract-info-levadura')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="position-relative form-group">
            <label for="nombre" class>Nombre</label>
            <input
              name="nombre"
              id="nombre"
              placeholder="..."
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
            @click="$modal.hide('agregar-caract-info-levadura')"
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
import obtenerImagenCroopieCepas from "../../../../mixins/obtenerImagenCroopieCepas";
import Croppie from "../../../CroppieComponent.vue";
export default {
  components: { Croppie },
  props: ["info", "modificarInfo"],
  data() {
    return {
      parametros: {
        cepaId: "",
        medio: "",
        color: null,
        textura: null,
        topografia_superficie: "",
        borde_colonia: "",
        imagen: "",
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
  mixins: [obtenerImagenCroopieCepas, Toastr],
  methods: {
    ...vuex.mapActions("info_caract", ["accionAgregarTipoCaractLevadura"]),
    evento() {
      this.bloquearBtn = true;
      if (this.tituloForm === "Agregar Medio") {
        if (this.parametros.imagen) {
          axios
            .post("/cepas/levadura/caract-macro", this.parametros)
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
              this.bloquearBtn = false;
              if (error.response.status === 422) {
                this.errors = [];
                this.errors = error.response.data.errors;
              }
              this.toastr("Error!!", "", "error");
            });
        } else {
          this.bloquearBtn = false;
          this.errors = { imagen: ["Favor elija una imagen."] };
          this.toastr("Error!!", "", "error");
        }
      } else {
        axios
          .put(`/cepas/levadura/caract-macro/${this.info.id}`, this.parametros)
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
              this.$emit("editar", res.data);
              this.toastr(
                "Editar Medio",
                "Medio editado con exito!!",
                "success"
              );
            }
          })
          .catch((error) => {
            this.bloquearBtn = false;
            if (error.response.status === 422) {
              this.errors = [];
              this.errors = error.response.data.errors;
            }
            this.toastr("Error!!", "", "error");
          });
      }
    },
    llenarInfo() {
      this.parametros.medio = this.info.medio;
      this.parametros.color = this.info.color_id;
      this.parametros.textura = this.info.textura_id;
      this.parametros.topografia_superficie = this.info.topografia_superficie;
      this.parametros.borde_colonia = this.info.borde_colonia;
      this.parametros.imagen = this.info.imagen;
      this.imagenMiniatura = this.info.imagenPublica;
    },
    showModal(tipo) {
      this.modal.input = "";
      this.modal.errors = [];
      this.modal.tipo = tipo;
      if (tipo === "color") {
        this.modal.titulo = "Agregar Nuevo Color";
      } else if (tipo === "textura") {
        this.modal.titulo = "Agregar Nueva Textura";
      }
      this.$modal.show("agregar-caract-info-levadura");
    },
    agregarInfo() {
      if (this.modal.input === "") {
        this.modal.errors = { nombre: { 0: "Favor llenar este campo" } };
      } else {
        this.modal.errors = [];
        let parametros = {
          tipo: this.modal.tipo,
          nombre: this.modal.input,
        };
        axios
          .post("/info-caract-levaduras/agregar", parametros)
          .then((res) => {
            if (res.request.responseURL === process.env.MIX_LOGIN) {
              localStorage.setItem(
                "mensajeLogin",
                "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
              );
              window.location.href = "/";
            } else {
              this.accionAgregarTipoCaractLevadura({
                info: res.data,
                tipo: this.modal.tipo,
              });
              this.$modal.hide("agregar-caract-info-levadura");
              this.toastr(
                "Agregar Informacion",
                `${this.modal.tipo} agregado/a con exito`,
                "success"
              );
            }
          })
          .catch((error) => {
            if (error.response.status === 422) {
              this.modal.errors = error.response.data.errors;
            }
            this.toastr("Error!!!!", "", "error");
          });
      }
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
    ...vuex.mapGetters("info_caract", ["getInfoCaractMacroLevaduras"]),
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
    obtenerColores() {
      return this.getInfoCaractMacroLevaduras.colors;
    },
    obtenerTexturas() {
      return this.getInfoCaractMacroLevaduras.texturas;
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
    if (this.$route.params.cepaLevaduraId) {
      this.parametros.cepaId = this.$route.params.cepaLevaduraId;
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