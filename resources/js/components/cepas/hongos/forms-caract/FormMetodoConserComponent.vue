<template>
  <div>
    <div class="container mt-3 ml-2 mr-2">
      <div class="row justify-content-md-center">
        <div class="col-sm-6">
          <div class="main-card mb-3 card">
            <form @submit.prevent="evento">
              <div class="card-body">
                <h5 class="card-title">{{titulo}}</h5>
                <template v-if="getInfoMetodoConserHongos">
                  <label for="forma" class>Método de Conservación</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="forma"
                      class="form-control"
                      v-model.number="parametros.tipo_metodo"
                    >
                      <option
                        v-for="(m,index) in getInfoMetodoConserHongos.tipo_metodo"
                        :key="index"
                        :value="m.id"
                      >{{m.nombre}}</option>
                    </select>
                    <div class="input-group-append">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-info"
                        @click.prevent="showModal('metodo_conser')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </template>
                <div class="form-row">
                  <div class="col-md-6">
                    <div class="container">
                      <div class="row">
                        <label for="fecha" class>Fecha</label>
                      </div>
                      <div class="row">
                        <date-picker
                          :lang="lang"
                          v-model="parametros.fecha"
                          type="datetime"
                          value-type="format"
                          placeholder="..."
                        ></date-picker>
                        <span v-if="errors.fecha" class="text-danger">{{errors.fecha[0]}}</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <template v-if="mostrarNumReplicas">
                      <div class="position-relative form-group">
                        <label for="numero_replicas" class>Número de Réplicas</label>
                        <input
                          name="numero_replicas"
                          id="numero_replicas"
                          placeholder="..."
                          type="text"
                          class="form-control"
                          v-model.number="parametros.numero_replicas"
                          required
                        />
                        <span
                          v-if="errors.numero_replicas"
                          class="text-danger"
                        >{{errors.numero_replicas[0]}}</span>
                      </div>
                    </template>
                    <template v-else>
                      <div class="position-relative form-group">
                        <label for="numero_pases" class>Número de Pases</label>
                        <input
                          name="numero_pases"
                          id="numero_pases"
                          placeholder="..."
                          type="text"
                          class="form-control"
                          v-model.number="parametros.numero_pases"
                          required
                        />
                        <span
                          v-if="errors.numero_pases"
                          class="text-danger"
                        >{{errors.numero_pases[0]}}</span>
                      </div>
                    </template>
                  </div>
                </div>
                <template v-if="mostrarRecuentoMicrogota">
                  <div class="position-relative form-group">
                    <label for="recuento_microgota" class>Recuento Microgota</label>
                    <input
                      name="recuento_microgota"
                      id="recuento_microgota"
                      placeholder="..."
                      type="text"
                      class="form-control"
                      v-model="parametros.recuento_microgota"
                      required
                    />
                  </div>
                </template>
                <template v-else>
                  <div class="position-relative form-group">
                    <label for="medio_cultivo" class>Medio de Cultivo</label>
                    <input
                      name="medio_cultivo"
                      id="medio_cultivo"
                      placeholder="..."
                      type="text"
                      class="form-control"
                      v-model="parametros.medio_cultivo"
                      required
                    />
                  </div>
                </template>
                <div class="position-relative form-group">
                  <label for="observaciones">Observaciones</label>
                  <textarea
                    name="text"
                    id="observaciones"
                    class="form-control"
                    v-model="parametros.observaciones"
                  ></textarea>
                </div>
                <div class="position-relative form-group">
                  <label for="imagen" class>Imagen</label>
                  <input
                    name="imagen"
                    @change="obtenerImagen"
                    accept="image/jpeg, image/png"
                    id="imagen"
                    type="file"
                    class="form-control-file"
                    ref="inputImagen"
                    :required="required"
                  />
                  <span v-if="imagenError" class="text-danger">{{imagenError}}</span>
                </div>
                <div class="position-relative form-group">
                  <label for="descripcion">Descripción</label>
                  <textarea
                    name="text"
                    id="descripcion"
                    class="form-control"
                    v-model="parametros.descripcion"
                  ></textarea>
                </div>
                <button
                  class="mb-2 mr-2 btn btn-block"
                  :class="btnClase"
                  :disabled="validarBtn"
                >{{nomBtnComputed}}</button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">Imagen</h5>
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
                      <b class="text-warning">SIN IMAGEN</b>
                    </span>
                  </h5>
                </div>
              </template>
            </div>
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
import DatePicker from "vue2-datepicker";
import Lang from "vue2-datepicker/locale/es";

export default {
  components: { DatePicker },
  data() {
    return {
      lang: Lang,
      info: "",
      parametros: {
        cepaId: "",
        tipo_metodo: 1,
        fecha: "",
        numero_replicas: "",
        recuento_microgota: "",
        medio_cultivo: "",
        numero_pases: "",
        observaciones: "",
        imagen: "",
        descripcion: ""
      },
      modal: {
        titulo: "",
        input: "",
        tipo: "",
        errors: []
      },
      tituloForm: "",
      imagenMiniatura: "",
      nomBtn: "",
      errors: [],
      imagenError: ""
    };
  },
  methods: {
    ...vuex.mapActions([
      "accionAgregarCaract",
      "accionEditarCaract",
      "accionAgregarTipoCaractHongo"
    ]),
    cambiarValorImagen(valor) {
      if (valor) {
        this.parametros.imagen = valor;
      } else {
        if (!this.required) {
          this.parametros.imagen = this.info.imagen;
          this.imagenMiniatura = this.info.imagenPublica;
          this.$refs.inputImagen.value = "";
        } else {
          this.parametros.imagen = "";
        }
      }
    },
    evento() {
      this.parametros.fecha =
        this.parametros.fecha === null ? "" : this.parametros.fecha;
      if (this.tituloForm === "Agregar Método") {
        axios
          .post("/cepas/hongo/metodo-conser", this.parametros)
          .then(res => {
            this.accionAgregarCaract({ tipo: "metodo", data: res.data });
            this.toastr(
              "Agregar Método",
              "Método agregado con exito!!",
              "success"
            );
            this.$emit("cambiarVariable", "tabla");
            this.redireccionar();
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
          .put(`/cepas/hongo/metodo-conser/${this.info.id}`, this.parametros)
          .then(res => {
            this.accionEditarCaract({ tipo: "metodo", data: res.data });
            this.toastr(
              "Editar Método",
              "Método editado con exito!!",
              "success"
            );
            this.$emit("cambiarVariable", "tabla");
            this.redireccionar();
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
    redireccionar() {
      let ruta = window.location.pathname;
      if (ruta.includes("hongos")) {
        this.$router.push({ name: "metodo-conser-hongo" });
      } else {
        this.$router.push({ name: "metodo-conser-cepa-hongo" });
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
    llenarInfo() {
      this.parametros.tipo_metodo = this.info.tipo_id;
      this.parametros.medio_cultivo = this.info.medio_cultivo;
      this.parametros.numero_pases = this.info.numero_pases;
      this.parametros.observaciones = this.info.observaciones;
      this.parametros.fecha = this.info.fecha;
      this.parametros.numero_replicas = this.info.numero_replicas;
      this.parametros.recuento_microgota = this.info.recuento_microgota;
      this.parametros.imagen = this.info.imagen;
      this.imagenMiniatura = this.info.imagenPublica;
      this.parametros.descripcion = this.info.descripcion;
    },

    obtenerImagen(e) {
      let file = e.target.files[0];
      this.parametros.imagen = file;
      let allowedExtensions = /(.jpg|.jpeg|.png)$/i;

      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError =
            "La imagen debe ser en formato .png .jpg y menor a 2Mb.";
          this.$refs.inputImagen.value = "";
          if (this.info) {
            this.imagenMiniatura = this.info.imagenPublica;
            this.parametros.imagen = this.info.imagen;
          } else {
            this.imagenMiniatura = "";
            this.parametros.imagen = "";
          }
        } else {
          this.imagenError = "";
          this.cargarImagen(file);
        }
      } else {
        if (this.info) {
          this.imagenMiniatura = this.info.imagenPublica;
          this.parametros.imagen = this.info.imagen;
        } else {
          this.parametros.imagen = "";
          this.imagenMiniatura = "";
        }
      }
    },
    cargarImagen(file) {
      let reader = new FileReader();
      reader.onload = e => {
        this.imagenMiniatura = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    showModal(tipo) {
      this.modal.input = "";
      this.modal.errors = [];
      this.modal.tipo = tipo;
      if (tipo === "metodo_conser") {
        this.modal.titulo = "Agregar Nueva Tipo de Método";
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
    }
  },
  computed: {
    ...vuex.mapGetters(["getInfoMetodoConserHongos", "getMetodoConserById"]),
    mostraImagen() {
      return this.imagenMiniatura;
    },
    btnClase() {
      if (this.tituloForm === "Agregar Método") {
        return "btn-primary";
      } else {
        return "btn-warning";
      }
    },
    required() {
      if (this.tituloForm === "Agregar Método") {
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
    mostrarNumReplicas() {
      if (this.parametros.tipo_metodo != 3) {
        this.parametros.numero_pases = "";
        return true;
      } else {
        this.parametros.numero_replicas = "";
        return false;
      }
    },
    mostrarRecuentoMicrogota() {
      if (
        this.parametros.tipo_metodo === 2 ||
        this.parametros.tipo_metodo === 3
      ) {
        this.parametros.recuento_microgota = "";
        return false;
      } else {
        this.parametros.medio_cultivo = "";
        return true;
      }
    },
    mostrarBtnCroppie() {
      if (this.info) {
        if (this.imagenMiniatura != this.info.imagenPublica) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
    validarCroppie() {
      if (this.info) {
        if (this.imagenMiniatura == this.info.imagenPublica) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    validarBtn() {
      if (!this.parametros.imagen) {
        return true;
      }
      return false;
    }
  },
  created() {
    this.$emit("cambiarVariable", "agregar_editar");
    if (!this.$route.params.metodoConserHongoId) {
      this.tituloForm = "Agregar Método";
      this.nomBtn = "Agregar";
    } else {
      this.info = this.getMetodoConserById(
        this.$route.params.metodoConserHongoId
      );
      this.llenarInfo();
      this.tituloForm = "Editar Método";
      this.nomBtn = "Editar";
    }
    if (this.$route.params.cepaHongoId) {
      this.parametros.cepaId = this.$route.params.cepaHongoId;
    } else {
      this.parametros.cepaId = this.$route.params.cepaId;
    }
  }
};
</script>
