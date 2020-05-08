<template>
  <div>
    <form @submit.prevent="evento" class="mt-4 mr-4 ml-4">
      <div class="row justify-content-md-center">
        <div class="col-sm-6">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">{{ tituloForm }}</h5>
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
                      v-for="(f,index) in getInfoCaractMicroHongos.conidioforos"
                      :key="index"
                      :value="f.id"
                    >{{ f.nombre }}</option>
                  </select>
                  <div class="input-group-append">
                    <button
                      class="btn-icon btn-icon-only btn-pill btn btn-outline-info"
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
                      value="presencia"
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
                      value="ausencia"
                      v-model="parametros.fialides"
                    />
                    <label class="custom-control-label" for="fialides2">Ausencia</label>
                  </div>

                  <div
                    class="position-relative form-group"
                    v-show="parametros.fialides === 'presencia'"
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
                    <span
                      v-if="errors.fialides_forma"
                      class="text-danger"
                    >{{ errors.fialides_forma[0] }}</span>

                    <label for="fialides_otra_caracteristica" class>Otras características</label>
                    <input
                      name="fialides_otra_caracteristica"
                      id="fialides_otra_caracteristica"
                      placeholder="..."
                      type="text"
                      class="form-control"
                      v-model="parametros.fialides_otra_caracteristica"
                      required
                    />
                    <span
                      v-if="errors.fialides_otra_caracteristica"
                      class="text-danger"
                    >{{ errors.fialides_otra_caracteristica[0] }}</span>
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
                      value="presencia"
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
                      value="ausencia"
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
                      v-for="(b,index) in getInfoCaractMicroHongos.esporas_asexuales"
                      :key="index"
                      :value="b.id"
                    >{{ b.nombre }}</option>
                  </select>
                  <div class="input-group-append">
                    <button
                      class="btn-icon btn-icon-only btn-pill btn btn-outline-info"
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
                        value="grande"
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
                        value="mediano"
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
                        value="pequeño"
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
                  <span
                    v-if="errors.esporas_asexuales_conidios_color"
                    class="text-danger"
                  >{{ errors.esporas_asexuales_conidios_color[0] }}</span>

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
                  <span
                    v-if="errors.esporas_asexuales_conidios_forma"
                    class="text-danger"
                  >{{ errors.esporas_asexuales_conidios_forma[0] }}</span>
                  <label for="esporas_asexuales_conidios_otras" class>Otras características</label>
                  <input
                    name="esporas_asexuales_conidios_otras"
                    id="esporas_asexuales_conidios_otras"
                    placeholder="..."
                    type="text"
                    class="form-control"
                    v-model="parametros.esporas_asexuales_conidios_otras"
                    required
                  />
                  <span
                    v-if="errors.esporas_asexuales_conidios_otras"
                    class="text-danger"
                  >{{ errors.esporas_asexuales_conidios_otras[0] }}</span>
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
                      v-for="(b,index) in getInfoCaractMicroHongos.esporas_sexuales"
                      :key="index"
                      :value="b.id"
                    >{{ b.nombre }}</option>
                  </select>
                  <div class="input-group-append">
                    <button
                      class="btn-icon btn-icon-only btn-pill btn btn-outline-info"
                      @click.prevent="showModal('espora_sexual')"
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
                <div class="position-relative form-group">
                  <label for="otras_estructuras">Otras estructuras</label>
                  <textarea
                    name="text"
                    id="otras_estructuras"
                    class="form-control"
                    v-model="parametros.otras_estructuras"
                  ></textarea>
                </div>
              </template>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <template v-if="required">
                <div class="position-relative form-group">
                  <label for="imagen" class>Imágenes</label>
                  <input
                    name="imagen"
                    @change="obtenerImagenes"
                    id="imagen"
                    type="file"
                    accept="image/jpeg"
                    class="form-control-file"
                    ref="inputImagen"
                    multiple
                    :required="required"
                  />
                  <span v-if="erroresImagenes" class="text-danger">{{ erroresImagenes }}</span>
                  <!--  <small
                    class="form-text text-muted"
                  >Debe tener un tamaño ''px ''px y un peso de ''kbs.</small>-->
                </div>
              </template>
              <div class="position-relative form-group">
                <label for="imagenes_descripcion">Descripcion Imágenes</label>
                <textarea
                  name="text"
                  id="imagenes_descripcion"
                  class="form-control"
                  v-model="parametros.descripcion_imagenes"
                ></textarea>
              </div>
              <button class="mb-2 mr-2 btn btn-block" :class="btnClase">{{ nomBtn }}</button>
            </div>
          </div>

          <imagenes
            :required="required"
            :parametros="this.parametros"
            :tipoCepa="'hongo/caract-micro'"
            :imagenes="this.imagenes"
            :cepa="this.info"
            @accionImagen="accionImagen"
          ></imagenes>
        </div>
      </div>
    </form>

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
          <button type="button" class="btn btn-primary" @click="agregarInfo">Agregar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
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
        conidioforo: 1,
        fialides: "presencia",
        fialides_forma: "",
        fialides_otra_caracteristica: "",
        vesicula: "presencia",
        espora_asexual: 1,
        esporas_asexuales_conidios_tamano: "grande",
        esporas_asexuales_conidios_color: "",
        esporas_asexuales_conidios_forma: "",
        esporas_asexuales_conidios_otras: "",
        espora_sexual: 1,
        otras_estructuras: "",
        imagen1: "",
        imagen2: "",
        imagen3: "",
        descripcion_imagenes: ""
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
      imagenes: []
    };
  },
  methods: {
    ...vuex.mapActions(["accionAgregarTipoCaractHongo"]),
    evento() {
      if (this.parametros.fialides === "ausencia") {
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
        let formData = new FormData();
        this.appendInfo(formData);
        axios
          .post("/cepas/hongo/caract-micro", formData, {
            headers: { "Content-Type": "multipart/form-data" }
          })
          .then(res => {
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
          .catch(error => {
            if (error.response) {
              this.errors = [];
              this.errors = error.response.data.errors;
              this.toastr("Error!!", "", "error");
            }
          });
      } else {
        axios
          .put(`/cepas/hongo/caract-micro/${this.info.id}`, this.parametros)
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
    toastr(titulo, msg, tipo) {
      this.$toastr.Add({
        title: titulo,
        msg: msg,
        position: "toast-top-right",
        type: tipo,
        timeout: 5000,
        progressbar: true,
        //progressBarValue:"", // if you want set progressbar value
        style: {},
        classNames: ["animated", "zoomInUp"],
        closeOnHover: true,
        clickClose: true,
        onCreated: () => {},
        onClicked: () => {},
        onClosed: () => {},
        onMouseOver: () => {},
        onMouseOut: () => {}
      });
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
          nombre: { 0: "Favor llenar este campo" }
        };
      } else {
        let parametros = {
          tipo: this.modal.tipo,
          nombre: this.modal.input
        };
        axios
          .post("/info-caract-hongos/agregar", parametros)
          .then(res => {
            this.accionAgregarTipoCaractHongo({
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
    obtenerImagenes(e) {
      this.limpiar(0);
      let file = e.target.files[3];
      if (file) {
        this.erroresImagenes = "Solo puede subir max 3 imágenes.";
        this.limpiar(1);
      } else {
        let allowedExtensions = /(.jpg|.jpeg)$/i;
        let imagenes = [];
        for (let index = 0; index < 3; index++) {
          let imagen = e.target.files[index];
          if (imagen) {
            if (!allowedExtensions.exec(imagen.name) || imagen.size > 2000000) {
              this.limpiar(1);
              this.erroresImagenes =
                "Las imagenes deben ser en formato .jpeg/.jpg y menor a 2Mb.";
              imagenes = "";
              break;
            } else {
              this.erroresImagenes = "";
              imagenes.push(imagen);
            }
          } else {
            break;
          }
        }
        this.cargarImagenes(imagenes);
      }
    },
    cargarImagenes(imagenes) {
      if (imagenes) {
        for (let index = 0; index < imagenes.length; index++) {
          let reader = new FileReader();
          reader.onload = e => {
            switch (index) {
              case 0:
                this.parametros.imagen1 = imagenes[index];
                this.pushImagen(1, e.target.result, true);
                break;
              case 1:
                this.parametros.imagen2 = imagenes[index];
                this.pushImagen(2, e.target.result, false);
                break;
              case 2:
                this.parametros.imagen3 = imagenes[index];
                this.pushImagen(3, e.target.result, false);
                break;
            }
          };
          reader.readAsDataURL(imagenes[index]);
        }
      }
    },
    pushImagen(num, imagen, active) {
      this.imagenes.push({
        num: num,
        source: imagen,
        isActive: active
      });
    },
    llenarArregloImagenes() {
      if (this.parametros.imagen1) {
        this.pushImagen(1, this.info.imagenPublica1, true);
        if (this.parametros.imagen2) {
          this.pushImagen(2, this.info.imagenPublica2, false);
        }
        if (this.parametros.imagen3) {
          this.pushImagen(3, this.info.imagenPublica3, false);
        }
      } else if (this.parametros.imagen2) {
        this.pushImagen(2, this.info.imagenPublica2, true);
        if (this.parametros.imagen3) {
          this.pushImagen(3, this.info.imagenPublica3, false);
        }
      } else if (this.parametros.imagen3) {
        this.pushImagen(3, this.info.imagenPublica3, true);
      }
    },
    limpiar(num) {
      switch (num) {
        case 0:
          this.parametros.imagen1 = "";
          this.parametros.imagen2 = "";
          this.parametros.imagen3 = "";
          this.imagenes = [];
          break;
        case 1:
          this.$refs.inputImagen.value = "";
          break;
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
          ? "grande"
          : this.info.esporas_asexuales_conidios_tamano;
      this.parametros.esporas_asexuales_conidios_color = this.info.esporas_asexuales_conidios_color;
      this.parametros.esporas_asexuales_conidios_forma = this.info.esporas_asexuales_conidios_forma;
      this.parametros.esporas_asexuales_conidios_otras = this.info.esporas_asexuales_conidios_otras;
      this.parametros.espora_sexual = this.info.espora_sexual_id;
      this.parametros.otras_estructuras = this.info.otras_estructuras;
      this.parametros.imagen1 = this.info.imagen1;
      this.parametros.imagen2 = this.info.imagen2;
      this.parametros.imagen3 = this.info.imagen3;
      this.parametros.descripcion_imagenes = this.info.descripcion;
      this.llenarArregloImagenes();
    },
    appendInfo(formData) {
      if (this.$route.params.cepaHongoId) {
        formData.append("cepaId", this.$route.params.cepaHongoId);
      } else {
        formData.append("cepaId", this.$route.params.cepaId);
      }
      formData.append("conidioforo", this.parametros.conidioforo);
      formData.append("fialides", this.parametros.fialides);
      formData.append("fialides_forma", this.parametros.fialides_forma);
      formData.append(
        "fialides_otra_caracteristica",
        this.parametros.fialides_otra_caracteristica
      );
      formData.append("vesicula", this.parametros.vesicula);
      formData.append("espora_asexual", this.parametros.espora_asexual);
      formData.append(
        "esporas_asexuales_conidios_tamano",
        this.parametros.esporas_asexuales_conidios_tamano
      );
      formData.append(
        "esporas_asexuales_conidios_color",
        this.parametros.esporas_asexuales_conidios_color
      );
      formData.append(
        "esporas_asexuales_conidios_forma",
        this.parametros.esporas_asexuales_conidios_forma
      );
      formData.append(
        "esporas_asexuales_conidios_otras",
        this.parametros.esporas_asexuales_conidios_otras
      );

      formData.append("espora_sexual", this.parametros.espora_sexual);
      formData.append(
        "otras_estructuras",
        this.parametros.otras_estructuras === null
          ? ""
          : this.parametros.otras_estructuras
      );
      formData.append("imagen1", this.parametros.imagen1);
      formData.append("imagen2", this.parametros.imagen2);
      formData.append("imagen3", this.parametros.imagen3);
      formData.append(
        "descripcion_imagenes",
        this.parametros.descripcion_imagenes === null
          ? ""
          : this.parametros.descripcion_imagenes
      );
    },
    accionImagen(data) {
      this.$emit("editar", data);
    }
  },
  computed: {
    ...vuex.mapGetters(["getInfoCaractMicroHongos"]),

    required() {
      if (this.tituloForm === "Agregar Característica") {
        return true;
      } else {
        return false;
      }
    },
    btnClase() {
      if (this.tituloForm === "Agregar Característica") {
        return "btn-primary";
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
  }
};
</script>