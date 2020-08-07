<template>
  <div>
    <div class="container mt-3 ml-2 mr-2">
      <div class="row justify-content-md-center">
        <div class="col-sm-6">
          <div class="main-card mb-3 card">
            <form @submit.prevent="evento">
              <div class="card-body">
                <h5 class="card-title">{{titulo}}</h5>
                <template v-if="errors!=''">
                  <div class="alert alert-danger">
                    <p v-for="(item, index) in errors" :key="index">{{item[0]}}</p>
                  </div>
                </template>
                <template v-if="getInfoMetodoConserLevaduras">
                  <label for="forma" class>Método de Conservación</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="forma"
                      class="form-control"
                      v-model.number="parametros.tipo_metodo"
                    >
                      <option
                        v-for="(m,index) in obtenerMetodos"
                        :key="index"
                        :value="m.id"
                      >{{m.nombre}}</option>
                    </select>
                    <div class="input-group-append" v-if="getPermisoByNombre('agregar-otra')">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
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
                  <label for="imagen" class>Imagen</label>
                  <input
                    name="imagen"
                    @change="obtenerImagen"
                    id="imagen"
                    type="file"
                    accept="image/jpeg, image/png"
                    class="form-control-file"
                    ref="inputImagen"
                    :required="required"
                  />
                  <span v-if="imagenError" class="text-danger">{{imagenError}}</span>
                </div>
                <div class="position-relative form-group">
                  <label for="observaciones">Observaciones</label>
                  <textarea
                    name="text"
                    id="observaciones"
                    class="form-control"
                    v-model="parametros.observaciones"
                  ></textarea>
                </div>
                <button
                  class="mb-2 mr-2 btn btn-block"
                  :class="btnClase"
                  :disabled="validarBtn||bloquearBtn"
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
import DatePicker from "vue2-datepicker";
import Lang from "vue2-datepicker/locale/es";

import Toastr from "../../../../mixins/toastr";
import obtenerImagenCroopieCepas from "../../../../mixins/obtenerImagenCroopieCepas";
import Croppie from "../../../CroppieComponent.vue";
export default {
  props: ["idMetodo"],
  components: { Croppie, DatePicker },
  data() {
    return {
      lang: Lang,
      info: "",
      parametros: {
        cepaId: "",
        tipo_metodo: null,
        fecha: "",
        numero_replicas: "",
        recuento_microgota: "",
        medio_cultivo: "",
        numero_pases: "",
        observaciones: "",
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
    ...vuex.mapActions("cepa", ["accionAgregarCaract", "accionEditarCaract"]),
    ...vuex.mapActions("info_caract", ["accionAgregarTipoCaractLevadura"]),
    evento() {
      this.bloquearBtn = true;
      this.parametros.fecha =
        this.parametros.fecha === null ? "" : this.parametros.fecha;
      if (this.tituloForm === "Agregar Método") {
        if (this.parametros.imagen) {
          axios
            .post("/cepas/levadura/metodo-conser", this.parametros)
            .then((res) => {
              if (res.request.responseURL === process.env.MIX_LOGIN) {
                localStorage.setItem(
                  "mensajeLogin",
                  "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                );
                window.location.href = "/";
              } else {
                this.bloquearBtn = false;
                this.accionAgregarCaract({ tipo: "metodo", data: res.data });
                this.toastr(
                  "Agregar Método",
                  "Método agregado con exito!!",
                  "success"
                );
                this.$emit("cambiarVariable");
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
          this.errors = { imagen: ["Favor elija una imagen."] };
          this.toastr("Error!!", "", "error");
        }
      } else {
        axios
          .put(`/cepas/levadura/metodo-conser/${this.info.id}`, this.parametros)
          .then((res) => {
            this.bloquearBtn = false;
            this.accionEditarCaract({ tipo: "metodo", data: res.data });
            this.toastr(
              "Editar Método",
              "Método editado con exito!!",
              "success"
            );
            this.$emit("cambiarVariable");
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
      this.parametros.tipo_metodo = this.info.tipo_id;
      this.parametros.medio_cultivo = this.info.medio_cultivo;
      this.parametros.numero_pases = this.info.numero_pases;
      this.parametros.observaciones = this.info.observaciones;
      this.parametros.fecha = this.info.fecha;
      this.parametros.numero_replicas = this.info.numero_replicas;
      this.parametros.recuento_microgota = this.info.recuento_microgota;
      this.parametros.imagen = this.info.imagen;
      this.imagenMiniatura = this.info.imagenPublica;
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
        this.bloquearBtnModal = true;
        let parametros = {
          tipo: this.modal.tipo,
          nombre: this.modal.input,
        };
        axios
          .post("/info-caract-levaduras/agregar", parametros)
          .then((res) => {
            this.bloquearBtnModal = false;
            this.accionAgregarTipoCaractLevadura({
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
            if (error.response.status === 403) {
              this.$router.push("/sin-acceso");
            } else if (error.response.status === 405) {
              window.location.href = "/";
            } else {
              this.bloquearBtnModal = false;
              if (error.response.status === 422) {
                this.errors = [];
                this.modal.errors = error.response.data.errors;
              }
              this.toastr("Error!!", "", "error");
            }
          });
      }
    },
    verificarSelects() {
      if (this.obtenerMetodos.length > 0) {
        this.parametros.tipo_metodo = this.obtenerMetodos[0].id;
      } else {
        this.parametros.tipo_metodo = null;
      }
    },
  },
  computed: {
    ...vuex.mapGetters(["getPermisoByNombre"]),
    ...vuex.mapGetters("cepa", ["getMetodoConserById"]),
    ...vuex.mapGetters("info_caract", ["getInfoMetodoConserLevaduras"]),
    btnClase() {
      if (this.tituloForm === "Agregar Método") {
        return "btn-success";
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
    obtenerMetodos() {
      return this.getInfoMetodoConserLevaduras.tipo_metodo;
    },
  },
  created() {
    this.verificarSelects();
    if (this.idMetodo === 0) {
      this.tituloForm = "Agregar Método";
      this.nomBtn = "Agregar";
    } else {
      this.info = this.getMetodoConserById(this.idMetodo);
      this.llenarInfo();
      this.tituloForm = "Editar Método";
      this.nomBtn = "Editar";
    }
    if (this.$route.params.cepaLevaduraId) {
      this.parametros.cepaId = this.$route.params.cepaLevaduraId;
    } else {
      this.parametros.cepaId = this.$route.params.cepaId;
    }
  },
  watch: {
    obtenerMetodos() {
      if (this.obtenerMetodos.length > 0) {
        this.parametros.tipo_metodo = this.obtenerMetodos[0].id;
      } else {
        this.parametros.tipo_metodo = null;
      }
    },
  },
};
</script>
