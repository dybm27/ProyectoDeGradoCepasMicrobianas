<template>
  <div>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-sm-6">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">{{titulo}}</h5>
              <form @submit.prevent="evento">
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
                  <label for="textura" class>Textura</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="textura"
                      class="form-control"
                      v-model="parametros.textura"
                    >
                      <option
                        v-for="(e,index) in getInfoCaractMacroActinomicetos.texturas"
                        :key="index"
                        :value="e.id"
                      >{{e.nombre}}</option>
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
                  <label for="color" class>Color</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="color"
                      class="form-control"
                      v-model="parametros.color"
                    >
                      <option
                        v-for="(c,index) in getInfoCaractMacroActinomicetos.colors"
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
                  <label for="forma" class>Forma</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="forma"
                      class="form-control"
                      v-model="parametros.forma"
                    >
                      <option
                        v-for="(f,index) in getInfoCaractMacroActinomicetos.formas_macros"
                        :key="index"
                        :value="f.id"
                      >{{f.nombre}}</option>
                    </select>
                    <div class="input-group-append">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                        @click.prevent="showModal('forma_macro')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <label for="superficie" class>Superficie</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="superficie"
                      class="form-control"
                      v-model="parametros.superficie"
                    >
                      <option
                        v-for="(s,index) in getInfoCaractMacroActinomicetos.superficies"
                        :key="index"
                        :value="s.id"
                      >{{s.nombre}}</option>
                    </select>
                    <div class="input-group-append">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                        @click.prevent="showModal('superficie')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <label for="borde" class>Borde</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="borde"
                      class="form-control"
                      v-model="parametros.borde"
                    >
                      <option
                        v-for="(b,index) in getInfoCaractMacroActinomicetos.bordes"
                        :key="index"
                        :value="b.id"
                      >{{b.nombre}}</option>
                    </select>
                    <div class="input-group-append">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                        @click.prevent="showModal('borde')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <label for="pigmento" class>Pigmento</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="pigmento"
                      class="form-control"
                      v-model="parametros.pigmento"
                    >
                      <option
                        v-for="(d,index) in getInfoCaractMacroActinomicetos.pigmentos"
                        :key="index"
                        :value="d.id"
                      >{{d.nombre}}</option>
                    </select>
                    <div class="input-group-append">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                        @click.prevent="showModal('pigmento')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
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
                  :disabled="validarBtn"
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
                  <croppie
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
                  <croppie
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
    <modal name="agregar-caract-info-actinomiceto" classes="my_modal" :width="450" :height="450">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">{{modal.titulo}}</h5>
          <button
            type="button"
            class="close"
            @click="$modal.hide('agregar-caract-info-actinomiceto')"
          >
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
            @click="$modal.hide('agregar-caract-info-actinomiceto')"
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
import obtenerImagenCroopieCepasMixin from "../../../../mixins/obtenerImagenCroopieCepas";
export default {
  props: ["info", "modificarInfo"],
  data() {
    return {
      parametros: {
        cepaId: "",
        medio: "",
        forma: 1,
        borde: 1,
        textura: 1,
        color: 1,
        pigmento: 1,
        secrecion_geosminas: "",
        superficie: 1,
        otras_caract: "",
        imagen: "",
        imagen_descripcion: ""
      },
      modal: {
        titulo: "",
        input: "",
        tipo: "",
        errors: []
      },
      tituloForm: "",
      nomBtn: "",
      errors: []
    };
  },
  mixins: [Toastr, obtenerImagenCroopieCepasMixin],
  watch: {
    modificarInfo() {
      if (this.modificarInfo) {
        this.llenarInfo();
        this.$emit("cambiarVariable");
      }
    }
  },
  methods: {
    ...vuex.mapActions("info_caract", ["accionAgregarTipoCaractActinomiceto"]),
    evento() {
      if (this.tituloForm === "Agregar Medio") {
        axios
          .post("/cepas/actinomiceto/caract-macro", this.parametros)
          .then(res => {
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
          .put(
            `/cepas/actinomiceto/caract-macro/${this.info.id}`,
            this.parametros
          )
          .then(res => {
            this.errors = [];
            this.$refs.inputImagen.value = "";
            this.$emit("editar", res.data);
            this.toastr("Editar Medio", "Medio editado con exito!!", "success");
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
      this.modal.input = "";
      this.modal.errors = [];
      this.modal.tipo = tipo;
      if (tipo === "forma_macro") {
        this.modal.titulo = "Agregar Nueva Forma";
      } else if (tipo === "borde") {
        this.modal.titulo = "Agregar Nuevo Borde";
      } else if (tipo === "pigmento") {
        this.modal.titulo = "Agregar Nuevo Pigmento";
      } else if (tipo === "textura") {
        this.modal.titulo = "Agregar Nueva Textura";
      } else if (tipo === "color") {
        this.modal.titulo = "Agregar Nuevo Color";
      } else {
        this.modal.titulo = "Agregar Nueva Superficie";
      }
      this.$modal.show("agregar-caract-info-actinomiceto");
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
          .post("/info-caract-actinomicetos/agregar", parametros)
          .then(res => {
            this.accionAgregarTipoCaractActinomiceto({
              info: res.data,
              tipo: this.modal.tipo
            });
            this.$modal.hide("agregar-caract-info-actinomiceto");
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
    }
  },
  computed: {
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
    }
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
  }
};
</script>
