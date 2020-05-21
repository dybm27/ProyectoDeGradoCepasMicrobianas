<template>
  <div>
    <div class="container mt-3 ml-2 mr-2">
      <div class="row justify-content-md-center">
        <div class="col-sm-6">
          <div class="main-card mb-3 card">
            <form @submit.prevent="evento">
              <div class="card-body">
                <h5 class="card-title">{{titulo}}</h5>
                <template v-if="getInfoMetodoConserLevaduras">
                  <div class="position-relative form-group">
                    <label for="forma" class>Método de Conservación</label>
                    <select
                      name="select"
                      id="forma"
                      class="form-control"
                      v-model.number="parametros.tipo_metodo"
                    >
                      <option
                        v-for="(m,index) in getInfoMetodoConserLevaduras.tipo_metodo"
                        :key="index"
                        :value="m.id"
                      >{{m.nombre}}</option>
                    </select>
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
        fecha: "",
        numero_replicas: "",
        recuento_microgota: "",
        medio_cultivo: "",
        numero_pases: "",
        observaciones: "",
        imagen: "",
        descripcion: ""
      },
      tituloForm: "",
      imageMiniatura: "",
      nomBtn: "",
      errors: [],
      imagenError: ""
    };
  },
  methods: {
    ...vuex.mapActions(["accionAgregarCaract", "accionEditarCaract"]),
    evento() {
      this.parametros.fecha =
        this.parametros.fecha === null ? "" : this.parametros.fecha;
      if (this.tituloForm === "Agregar Método") {
        let formData = new FormData();
        this.appendInfo(formData);
        axios
          .post("/cepas/levadura/metodo-conser", formData, {
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
              `/cepas/levadura/metodo-conser/${this.info.id}`,
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
            .post(`/cepas/levadura/metodo-conser/${this.info.id}`, formData, {
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
      if (ruta.includes("levaduras")) {
        this.$router.push({ name: "metodo-conser-levadura" });
      } else {
        this.$router.push({ name: "metodo-conser-cepa-levadura" });
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
      this.imageMiniatura = this.info.imagenPublica;
      this.parametros.descripcion = this.info.descripcion;
    },
    appendInfo(formData) {
      if (this.$route.params.cepaLevaduraId) {
        formData.append("cepaId", this.$route.params.cepaLevaduraId);
      } else {
        formData.append("cepaId", this.$route.params.cepaId);
      }
      formData.append("tipo_metodo", this.parametros.tipo_metodo);
      formData.append("medio_cultivo", this.parametros.medio_cultivo);
      formData.append("numero_pases", this.parametros.numero_pases);
      formData.append(
        "observaciones",
        this.parametros.observaciones === null
          ? ""
          : this.parametros.observaciones
      );
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
    }
  },
  computed: {
    ...vuex.mapGetters(["getInfoMetodoConserLevaduras", "getMetodoConserById"]),
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
    }
  },
  created() {
    this.$emit("cambiarVariable", "agregar_editar");
    if (!this.$route.params.metodoConserLevaduraId) {
      this.tituloForm = "Agregar Método";
      this.nomBtn = "Agregar";
    } else {
      this.info = this.getMetodoConserById(
        this.$route.params.metodoConserLevaduraId
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