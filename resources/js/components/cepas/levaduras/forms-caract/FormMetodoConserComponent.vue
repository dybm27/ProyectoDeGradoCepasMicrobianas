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
                <div v-if="getInfoMetodoConserLevaduras" class="position-relative form-group">
                  <label for="forma" class>Método de Conservación</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="forma"
                      :class="['form-control', $v.parametros.tipo_metodo.$error? 'error-input-select':'']"
                      v-model.trim="$v.parametros.tipo_metodo.$model"
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
                        @click.prevent="showModal('tipo_metodo')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <em
                    v-if="$v.parametros.tipo_metodo.$error&&!$v.parametros.tipo_metodo.required"
                    class="text-error-select"
                  >{{mensajes.required}}</em>
                </div>
                <div class="form-row">
                  <div class="col-md-6">
                    <div class="container">
                      <div class="row">
                        <label for="fecha" class>Fecha</label>
                      </div>
                      <div class="row">
                        <date-picker
                          :lang="lang"
                          v-model.trim="$v.parametros.fecha.$model"
                          type="datetime"
                          value-type="format"
                          :class=" $v.parametros.fecha.$error? 'error-input-select':''"
                          placeholder="..."
                        ></date-picker>
                        <em
                          v-if="$v.parametros.fecha.$error&&!$v.parametros.fecha.required"
                          class="text-error-input"
                        >{{mensajes.required}}</em>
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
                          :class="['form-control', $v.parametros.tipo_metodo.$error? 'error-input-select':'']"
                          v-model.trim="$v.parametros.numero_replicas.$model"
                        />
                        <em
                          v-if="$v.parametros.numero_replicas.$error&&!$v.parametros.numero_replicas.required"
                          class="text-error-input"
                        >{{mensajes.required}}</em>
                        <em
                          v-if="$v.parametros.numero_replicas.$error&&!$v.parametros.numero_replicas.numeric"
                          class="text-error-input"
                        >{{mensajes.numeric}}</em>
                        <em
                          v-if="$v.parametros.numero_replicas.$error&&!$v.parametros.numero_replicas.between"
                          class="text-error-input"
                        >{{mensajes.between+$v.parametros.numero_replicas.$params.between.min+' a '+$v.parametros.numero_replicas.$params.between.max}}</em>
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
                          :class="['form-control', $v.parametros.tipo_metodo.$error? 'error-input-select':'']"
                          v-model.trim="$v.parametros.numero_pases.$model"
                        />
                        <em
                          v-if="$v.parametros.numero_pases.$error&&!$v.parametros.numero_pases.required"
                          class="text-error-input"
                        >{{mensajes.required}}</em>
                        <em
                          v-if="$v.parametros.numero_pases.$error&&!$v.parametros.numero_pases.numeric"
                          class="text-error-input"
                        >{{mensajes.numeric}}</em>
                        <em
                          v-if="$v.parametros.numero_pases.$error&&!$v.parametros.numero_pases.between"
                          class="text-error-input"
                        >{{mensajes.between+$v.parametros.numero_pases.$params.between.min+' a '+$v.parametros.numero_pases.$params.between.max}}</em>
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
                      :class="['form-control', $v.parametros.tipo_metodo.$error? 'error-input-select':'']"
                      v-model.trim="$v.parametros.recuento_microgota.$model"
                    />
                    <em
                      v-if="$v.parametros.recuento_microgota.$error&&!$v.parametros.recuento_microgota.required"
                      class="text-error-input"
                    >{{mensajes.required}}</em>
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
                      :class="['form-control', $v.parametros.tipo_metodo.$error? 'error-input-select':'']"
                      v-model.trim="$v.parametros.medio_cultivo.$model"
                    />
                    <em
                      v-if="$v.parametros.medio_cultivo.$error&&!$v.parametros.medio_cultivo.required"
                      class="text-error-input"
                    >{{mensajes.required}}</em>
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
                    :class="['form-control-file', $v.parametros.imagen.$error? 'error-input-select':'']"
                    ref="inputImagen"
                  />
                  <em v-if="imagenError" class="text-error-input">{{imagenError}}</em>
                  <em
                    v-if="$v.parametros.imagen.$error&&!$v.parametros.imagen.required"
                    class="text-error-input"
                  >{{mensajes.required}}</em>
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
                  :disabled="bloquearBtn"
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
    <ModalAgregarInfo
      :url="'info-caract-levaduras'"
      :tipo="tipoModal"
      :titulo="tituloModal"
      :tipoForm="'levadura'"
    />
  </div>
</template>

<script>
import vuex from "vuex";
import DatePicker from "vue2-datepicker";
import Lang from "vue2-datepicker/locale/es";

import Toastr from "../../../../mixins/toastr";
import obtenerImagenCroopieCepas from "../../../../mixins/obtenerImagenCroopieCepas";
import Croppie from "../../../CroppieComponent.vue";
import ModalAgregarInfo from "../../ModalAgregarInfoCaractComponent.vue";
import { required, numeric, between } from "vuelidate/lib/validators";
export default {
  props: ["idMetodo"],
  components: { Croppie, DatePicker, ModalAgregarInfo },
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
      tituloModal: "",
      tipoModal: "",
      tituloForm: "",
      nomBtn: "",
      errors: [],
      bloquearBtn: false,
      bloquearBtnModal: false,
      mensajes: {
        required: "El campo es requerido",
        numeric: "El campo debe ser un numero.",
        between: "Debe estar en el rango de ",
      },
    };
  },
  validations() {
    if (this.mostrarNumReplicas && this.mostrarRecuentoMicrogota) {
      return {
        parametros: {
          tipo_metodo: { required },
          fecha: { required },
          numero_replicas: { required, numeric, between: between(1, 10000) },
          recuento_microgota: { required },
          imagen: { required },
        },
      };
    } else if (this.mostrarNumReplicas && !this.mostrarRecuentoMicrogota) {
      return {
        parametros: {
          tipo_metodo: { required },
          fecha: { required },
          numero_replicas: { required, numeric, between: between(1, 10000) },
          medio_cultivo: { required },
          imagen: { required },
        },
      };
    } else if (!this.mostrarNumReplicas && this.mostrarRecuentoMicrogota) {
      return {
        parametros: {
          tipo_metodo: { required },
          fecha: { required },
          numero_pases: { required, numeric, between: between(1, 10000) },
          recuento_microgota: { required },
          imagen: { required },
        },
      };
    } else {
      return {
        parametros: {
          tipo_metodo: { required },
          fecha: { required },
          numero_pases: { required, numeric, between: between(1, 10000) },
          medio_cultivo: { required },
          imagen: { required },
        },
      };
    }
  },
  mixins: [obtenerImagenCroopieCepas, Toastr],
  methods: {
    ...vuex.mapActions("cepa", ["accionAgregarCaract", "accionEditarCaract"]),
    evento() {
      this.bloquearBtn = true;
      this.$v.parametros.$touch();
      if (!this.$v.$invalid) {
        this.parametros.fecha =
          this.parametros.fecha === null ? "" : this.parametros.fecha;
        if (this.tituloForm === "Agregar Método") {
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
          axios
            .put(
              `/cepas/levadura/metodo-conser/${this.info.id}`,
              this.parametros
            )
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
      this.tipoModal = tipo;
      if (tipo === "tipo_metodo") {
        this.tituloModal = "Agregar Nueva Tipo de Método";
      }
      this.$modal.show("modal_agregar_info_caract");
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
    validarTipoForm() {
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
