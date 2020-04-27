<template>
  <div>
    <div class="container mt-3 ml-2 mr-2">
      <div class="row justify-content-md-center">
        <div class="col-sm-6">
          <div class="main-card mb-3 card">
            <form @submit.prevent="evento">
              <div class="card-body">
                <h5 class="card-title">{{titulo}}</h5>
                <template v-if="getInfoMetodoConserBacterias">
                  <label for="forma" class>Método de Conservación</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="forma"
                      class="form-control"
                      v-model.number="parametros.tipo_metodo"
                    >
                      <option
                        v-for="(m,index) in getInfoMetodoConserBacterias.tipo_metodo"
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
                <template v-if="mostrarAgar">
                  <label for="tipo_agar" class>Tipo Agar</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="tipo_agar"
                      class="form-control"
                      v-model.number="parametros.tipo_agar"
                    >
                      <option
                        v-for="(f,index) in getInfoMetodoConserBacterias.tipo_agar"
                        :key="index"
                        :value="f.id"
                      >{{f.nombre}}</option>
                    </select>
                    <div class="input-group-append">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-info"
                        @click.prevent="showModal('tipo_agar')"
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
                  </div>
                </div>
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
                <div class="position-relative form-group">
                  <label for="imagen" class>Imagen</label>
                  <input
                    name="imagen"
                    @change="obtenerImagen"
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
                <button class="mb-2 mr-2 btn btn-block" :class="btnClase">{{nomBtnComputed}}</button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">Imagen</h5>
              <template v-if="mostraImagen">
                <img :src="mostraImagen" class="d-block w-100" alt="Imagen Método de Conservación" />
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
        tipo_metodo: 1,
        tipo_agar: 2,
        fecha: "",
        numero_replicas: "",
        recuento_microgota: "",
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
      imageMiniatura: "",
      nomBtn: "",
      errors: [],
      imagenError: ""
    };
  },
  methods: {
    ...vuex.mapActions([
      "accionAgregarTipoCaractBacteria",
      "accionAgregarCaract",
      "accionEditarCaract"
    ]),
    evento() {
      this.parametros.tipo_agar =
        this.parametros.tipo_metodo === 4 ? this.parametros.tipo_agar : 1;
      this.parametros.fecha =
        this.parametros.fecha === null ? "" : this.parametros.fecha;
      if (this.tituloForm === "Agregar Método") {
        let formData = new FormData();
        this.appendInfo(formData);
        axios
          .post("/cepas/bacteria/metodo-conser", formData, {
            headers: { "Content-Type": "multipart/form-data" }
          })
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
        if (this.parametros.imagen === this.info.imagen) {
          axios
            .put(
              `/cepas/bacteria/metodo-conser/${this.info.id}`,
              this.parametros
            )
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
        } else {
          let formData = new FormData();
          this.appendInfo(formData);
          formData.append("_method", "PUT");
          axios
            .post(`/cepas/bacteria/metodo-conser/${this.info.id}`, formData, {
              headers: { "Content-Type": "multipart/form-data" }
            })
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
      }
    },
    redireccionar() {
      let ruta = window.location.pathname;
      if (ruta.includes("bacterias")) {
        this.$router.push({ name: "metodo-conser-bacteria" });
      } else {
        this.$router.push({ name: "metodo-conser-cepa-bacteria" });
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
      this.parametros.tipo_agar = this.info.tipo_agar_id;
      this.parametros.fecha = this.info.fecha;
      this.parametros.numero_replicas = this.info.numero_replicas;
      this.parametros.recuento_microgota = this.info.recuento_microgota;
      this.parametros.imagen = this.info.imagen;
      this.imageMiniatura = this.info.imagenPublica;
      this.parametros.descripcion = this.info.descripcion;
    },
    appendInfo(formData) {
      if (this.$route.params.cepaBacteriaId) {
        formData.append("cepaId", this.$route.params.cepaBacteriaId);
      } else {
        formData.append("cepaId", this.$route.params.cepaId);
      }
      formData.append("tipo_metodo", this.parametros.tipo_metodo);
      formData.append("tipo_agar", this.parametros.tipo_agar);
      formData.append("fecha", this.parametros.fecha);
      formData.append("numero_replicas", this.parametros.numero_replicas);
      formData.append("recuento_microgota", this.parametros.recuento_microgota);
      formData.append("imagen", this.parametros.imagen);
      formData.append(
        "descripcion",
        this.parametros.descripcion === null ? "" : this.parametros.descripcion
      );
    },
    obtenerImagen(e) {
      let file = e.target.files[0];
      this.parametros.imagen = file;
      let allowedExtensions = /(.jpg|.jpeg)$/i;

      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.imagenError =
            "La imagen debe ser en formato .jpeg/.jpg y menor a 2Mb.";
          this.imageMiniatura = this.info.imagenPublica;
          this.$refs.inputImagen.value = "";
          this.parametros.imagen = this.info.imagen;
        } else {
          this.imagenError = "";
          this.cargarImagen(file);
        }
      }
    },
    cargarImagen(file) {
      let reader = new FileReader();
      reader.onload = e => {
        this.imageMiniatura = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    showModal(tipo) {
      this.modal.input = "";
      this.modal.errors = [];
      this.modal.tipo = tipo;
      if (tipo === "metodo_conser") {
        this.modal.titulo = "Agregar Nueva Tipo de Método";
      } else {
        //tipo_agar
        this.modal.titulo = "Agregar Nuevo Tipo de Agar";
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
    }
  },
  computed: {
    ...vuex.mapGetters(["getInfoMetodoConserBacterias", "getMetodoConserById"]),
    mostrarAgar() {
      if (this.parametros.tipo_metodo === 4) {
        return true;
      } else {
        return false;
      }
    },
    mostraImagen() {
      return this.imageMiniatura;
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
    }
  },
  created() {
    this.$emit("cambiarVariable", "agregar_editar");
    if (!this.$route.params.metodoConserBacteriaId) {
      this.tituloForm = "Agregar Método";
      this.nomBtn = "Agregar";
    } else {
      this.info = this.getMetodoConserById(
        this.$route.params.metodoConserBacteriaId
      );
      this.llenarInfo();
      this.tituloForm = "Editar Método";
      this.nomBtn = "Editar";
    }
  }
};
</script>

<style  scoped>
</style>