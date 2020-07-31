(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cepas-tabla"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/ContainerCepasComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/ContainerCepasComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_websockets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/websockets */ "./resources/js/mixins/websockets.js");
/* harmony import */ var _mixins_abrirCerrarFormulario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/abrirCerrarFormulario */ "./resources/js/mixins/abrirCerrarFormulario.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _TablaComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TablaComponent.vue */ "./resources/js/components/cepas/TablaComponent.vue");
/* harmony import */ var _FormComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormComponent.vue */ "./resources/js/components/cepas/FormComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Tabla: _TablaComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Form: _FormComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: ["tipoG"],
  mixins: [Object(_mixins_websockets__WEBPACK_IMPORTED_MODULE_0__["default"])("Cepa", "cepas"), Object(_mixins_abrirCerrarFormulario__WEBPACK_IMPORTED_MODULE_1__["default"])("Cepa")],
  methods: {
    cambiarTipo: function cambiarTipo(tipo) {
      this.$emit("cambiarTipo", tipo);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/FormComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/FormComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/toastr */ "./resources/js/mixins/toastr.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["tipoG", "idCepa"],
  data: function data() {
    return {
      info: "",
      parametros: {
        codigo: "",
        grupo_microbiano: null,
        genero: null,
        especie: null,
        phylum: null,
        clase: null,
        orden: null,
        reino: null,
        division: null,
        familia: null,
        estado: "",
        origen: "Donación",
        publicar: false,
        otras_caracteristicas: ""
      },
      modal: {
        titulo: "",
        input: "",
        tipo: "",
        grupo_microbiano: 1,
        genero: 1,
        errors: []
      },
      errors: [],
      mostrarGrupos: true,
      disabled: false,
      nombre: "",
      nombreBtn: "",
      classBtn: "",
      bloquearBtn: false,
      bloquearBtnModal: false
    };
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"]],
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("info_cepas", ["accionAgregarTipoCepa"]), {
    evento: function evento() {
      var _this = this;

      this.bloquearBtn = true;

      if (this.nombre === "Editar Cepa") {
        axios.put("/cepas/editar/".concat(this.$route.params.cepaId), this.parametros).then(function (res) {
          _this.bloquearBtn = false;

          if (res.request.responseURL === "http://127.0.0.1:8000/") {
            _this.$ls.set("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");

            window.location.href = "/";
          }

          _this.errors = [];

          _this.toastr("Editar Cepa", "Cepa editada con exito!!", "success");
        })["catch"](function (error) {
          _this.bloquearBtn = false;

          if (error.response.status === 422) {
            _this.errors = [];
            _this.errors = error.response.data.errors;
          }

          _this.toastr("Error!!", "", "error");
        });
      } else {
        axios.post("/cepas/agregar", this.parametros).then(function (res) {
          _this.bloquearBtn = false;

          if (res.request.responseURL === "http://127.0.0.1:8000/") {
            _this.$ls.set("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");

            window.location.href = "/";
          }

          _this.errors = [];

          _this.toastr("Agregar Cepa", "Cepa agregada con exito!!", "success");
        })["catch"](function (error) {
          _this.bloquearBtn = false;

          if (error.response.status === 422) {
            _this.errors = [];
            _this.errors = error.response.data.errors;
          }

          _this.toastr("Error!!", "", "error");
        });
      }
    },
    llenarParametros: function llenarParametros(cepa) {
      this.parametros.codigo = this.info.codigo;
      this.parametros.grupo_microbiano = this.info.grupo_microbiano_id;
      this.modal.grupo_microbiano = this.info.grupo_microbiano_id;
      this.parametros.genero = this.info.genero_id;
      this.modal.genero = this.info.genero_id;
      this.parametros.especie = this.info.especie_id;
      this.parametros.estado = this.info.estado;
      this.parametros.origen = this.info.origen;
      this.parametros.otras_caracteristicas = this.info.otras_caract;

      switch (this.info.grupo_microbiano_id) {
        case 1:
          break;

        case 2:
          this.parametros.phylum = this.info.hongo.phylum_id;
          this.parametros.clase = this.info.hongo.clase_id;
          this.parametros.orden = this.info.hongo.orden_id;
          this.parametros.familia = this.info.hongo.familia_id;
          break;

        case 3:
          this.parametros.division = this.info.levadura.division_id;
          this.parametros.clase = this.info.levadura.clase_id;
          this.parametros.orden = this.info.levadura.orden_id;
          this.parametros.familia = this.info.levadura.familia_id;
          break;

        case 4:
          this.parametros.reino = this.info.actinomiceto.reino_id;
          this.parametros.phylum = this.info.actinomiceto.phylum_id;
          this.parametros.clase = this.info.actinomiceto.clase_id;
          this.parametros.orden = this.info.actinomiceto.orden_id;
          break;
      }

      if (this.info.publicar == 1) {
        this.parametros.publicar = true;
      }
    },
    ocultarGrupoMicrobiano: function ocultarGrupoMicrobiano() {
      if (this.tipoG === 0) {
        this.mostrarGrupos = true;
      } else {
        this.parametros.grupo_microbiano = this.tipoG;
        this.mostrarGrupos = false;
        this.cambiarGeneroEspecie();
      }
    },
    cambiarGeneroEspecie: function cambiarGeneroEspecie() {
      this.parametros.genero = this.getGenerosId(this.parametros.grupo_microbiano)[0].id;
      this.parametros.especie = this.getEspeciesId(this.parametros.genero)[0].id;
      this.modal.genero = this.getGenerosId(this.parametros.grupo_microbiano)[0].id;
    },
    cambiarEspecie: function cambiarEspecie() {
      this.parametros.especie = this.getEspeciesId(this.parametros.genero)[0].id;
    },
    showModal: function showModal(tipo) {
      this.modal.input = "";
      this.modal.errors = [];
      this.modal.tipo = tipo;

      if (tipo === "genero") {
        this.modal.titulo = "Agregar Nuevo Género";
      } else if (tipo === "especie") {
        this.modal.titulo = "Agregar Nueva Especie";
      } else if (tipo === "familia") {
        this.modal.titulo = "Agregar Nueva Familia";
      } else if (tipo === "orden") {
        this.modal.titulo = "Agregar Nuevo Orden";
      } else if (tipo === "clase") {
        this.modal.titulo = "Agregar Nueva Clase";
      } else if (tipo === "phylum") {
        this.modal.titulo = "Agregar Nuevo Phylum";
      } else if (tipo === "reino") {
        this.modal.titulo = "Agregar Nuevo Reino";
      } else {
        this.modal.titulo = "Agregar Nueva Division";
      }

      this.$modal.show("agregar-otra-info");
    },
    agregarInfo: function agregarInfo() {
      var _this2 = this;

      if (this.modal.input === "") {
        this.modal.errors = {
          nombre: {
            0: "Favor llenar este campo"
          }
        };
      } else {
        this.bloquearBtnModal = true;
        var parametros = {
          tipo: this.modal.tipo,
          nombre: this.modal.input,
          genero: this.modal.genero,
          grupo_microbiano: this.modal.grupo_microbiano
        };
        axios.post("/info-cepas/agregar", parametros).then(function (res) {
          _this2.bloquearBtnModal = false;

          if (res.request.responseURL === "http://127.0.0.1:8000/") {
            _this2.$ls.set("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");

            window.location.href = "/";
          }

          _this2.accionAgregarTipoCepa({
            info: res.data,
            tipo: _this2.modal.tipo
          });

          _this2.$modal.hide("agregar-otra-info");

          _this2.toastr("Agregar Info", "".concat(_this2.modal.tipo, " agregado/a con exito"), "success");
        })["catch"](function (error) {
          _this2.bloquearBtnModal = false;

          if (error.response.status === 422) {
            _this2.modal.errors = error.response.data.errors;
          }

          _this2.toastr("Error!!", "", "error");
        });
      }
    },
    verificarSelects: function verificarSelects() {
      if (this.getGrupos.length > 0) {
        this.parametros.grupo_microbiano = this.getGrupos[0].id;
      } else {
        this.parametros.grupo_microbiano = null;
      }

      if (this.getGeneros.length > 0) {
        this.parametros.genero = this.getGeneros[0].id;
      } else {
        this.parametros.genero = null;
      }

      if (this.getEspecies.length > 0) {
        this.parametros.especie = this.getEspecies[0].id;
      } else {
        this.parametros.especie = null;
      }

      if (this.getPhylums.length > 0) {
        this.parametros.phylum = this.getPhylums[0].id;
      } else {
        this.parametros.phylum = null;
      }

      if (this.getOrdens.length > 0) {
        this.parametros.orden = this.getOrdens[0].id;
      } else {
        this.parametros.orden = null;
      }

      if (this.getReinos.length > 0) {
        this.parametros.reino = this.getReinos[0].id;
      } else {
        this.parametros.reino = null;
      }

      if (this.getDivisiones.length > 0) {
        this.parametros.division = this.getDivisiones[0].id;
      } else {
        this.parametros.division = null;
      }

      if (this.getClases.length > 0) {
        this.parametros.clase = this.getClases[0].id;
      } else {
        this.parametros.clase = null;
      }

      if (this.getFamilias.length > 0) {
        this.parametros.familia = this.getFamilias[0].id;
      } else {
        this.parametros.familia = null;
      }
    }
  }),
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("cepas", ["getCepaById"]), {}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_cepas", ["getGrupos", "getGeneros", "getEspecies", "getPhylums", "getOrdens", "getReinos", "getDivisiones", "getClases", "getFamilias", "getGenerosId", "getEspeciesId", "getGeneroByNombre", "getEspecieByNombre", "getPhylumByNombre", "getOrdenByNombre", "getReinoByNombre", "getDivisionByNombre", "getClaseByNombre", "getFamiliaByNombre"]), {
    validarNombreUnico: function validarNombreUnico() {
      if (this.modal.input) {
        switch (this.modal.tipo) {
          case "genero":
            if (this.getGeneroByNombre(this.modal.input)) {
              return true;
            }

            break;

          case "especie":
            if (this.getEspecieByNombre(this.modal.input)) {
              return true;
            }

            break;

          case "familia":
            if (this.getFamiliaByNombre(this.modal.input)) {
              return true;
            }

            break;

          case "orden":
            if (this.getOrdenByNombre(this.modal.input)) {
              return true;
            }

            break;

          case "clase":
            if (this.getClaseByNombre(this.modal.input)) {
              return true;
            }

            break;

          case "phylum":
            if (this.getPhylumByNombre(this.modal.input)) {
              return true;
            }

            break;

          case "reino":
            if (this.getReinoByNombre(this.modal.input)) {
              return true;
            }

            break;

          case "division":
            if (this.getDivisionByNombre(this.modal.input)) {
              return true;
            }

            break;
        }
      }

      return false;
    }
  }),
  created: function created() {
    this.verificarSelects();
    this.ocultarGrupoMicrobiano();
    this.$emit("rutaHijo", window.location.pathname);

    if (this.idCepa === 0) {
      this.nombre = "Agregar Nueva Cepa";
      this.classBtn = "btn-success";
      this.nombreBtn = "Guardar";
      this.$emit("cambiarTipo", "agregar");
    } else {
      this.info = this.getCepaById(this.idCepa);
      this.disabled = true;
      this.nombre = "Editar Cepa";
      this.classBtn = "btn-warning";
      this.nombreBtn = "Editar";
      this.$emit("cambiarTipo", "editar");
      this.llenarParametros();
    }
  },
  watch: {
    getGrupos: function getGrupos() {
      if (this.getGrupos.length > 0) {
        this.parametros.grupo_microbiano = this.getGrupos[0].id;
      } else {
        this.parametros.grupo_microbiano = null;
      }
    },
    getGeneros: function getGeneros() {
      if (this.getGeneros.length > 0) {
        this.parametros.genero = this.getGeneros[0].id;
      } else {
        this.parametros.genero = null;
      }
    },
    getEspecies: function getEspecies() {
      if (this.getEspecies.length > 0) {
        this.parametros.especie = this.getEspecies[0].id;
      } else {
        this.parametros.especie = null;
      }
    },
    getPhylums: function getPhylums() {
      if (this.getPhylums.length > 0) {
        this.parametros.phylum = this.getPhylums[0].id;
      } else {
        this.parametros.phylum = null;
      }
    },
    getOrdens: function getOrdens() {
      if (this.getOrdens.length > 0) {
        this.parametros.orden = this.getOrdens[0].id;
      } else {
        this.parametros.orden = null;
      }
    },
    getReinos: function getReinos() {
      if (this.getReinos.length > 0) {
        this.parametros.reino = this.getReinos[0].id;
      } else {
        this.parametros.reino = null;
      }
    },
    getDivisiones: function getDivisiones() {
      if (this.getDivisiones.length > 0) {
        this.parametros.division = this.getDivisiones[0].id;
      } else {
        this.parametros.division = null;
      }
    },
    getClases: function getClases() {
      if (this.getClases.length > 0) {
        this.parametros.clase = this.getClases[0].id;
      } else {
        this.parametros.clase = null;
      }
    },
    getFamilias: function getFamilias() {
      if (this.getFamilias.length > 0) {
        this.parametros.familia = this.getFamilias[0].id;
      } else {
        this.parametros.familia = null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/TablaComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/TablaComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _columnas_columnas_cepas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./columnas/columnas-cepas */ "./resources/js/components/cepas/columnas/columnas-cepas.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_websocketsTabla__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/websocketsTabla */ "./resources/js/mixins/websocketsTabla.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      id: "",
      fields: _columnas_columnas_cepas__WEBPACK_IMPORTED_MODULE_0__["default"],
      sortOrder: [{
        field: "codigo",
        direction: "asc"
      }],
      bloquearBtnModal: false
    };
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_mixins_websocketsTabla__WEBPACK_IMPORTED_MODULE_3__["default"])("Cepa")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_4__["default"].mapState("cepas", ["cepas"]), {
    mostrarTabla: function mostrarTabla() {
      if (this.cepas != "" && this.cepas != null) {
        return true;
      }

      return false;
    }
  }),
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_4__["default"].mapActions("cepas", ["accionEquipamiento"]), {
    beforeOpenEliminar: function beforeOpenEliminar(data) {
      this.id = data.params.id;
    },
    eliminarCepa: function eliminarCepa() {
      var _this = this;

      this.bloquearBtnModal = true;
      axios["delete"]("/cepas/eliminar/".concat(this.id)).then(function (res) {
        _this.bloquearBtnModal = false;

        if (res.request.responseURL === "http://127.0.0.1:8000/") {
          _this.$ls.set("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");

          window.location.href = "/";
        }

        if (res.data === "negativo") {
          _this.toastr("Precaución!!", "La cepa cuenta con caracteristicas registradas, favor eliminarlas", "warning", 8000);
        } else {
          _this.refrescarTabla = true;

          _this.toastr("Eliminar Cepa", "Cepa eliminada con exito!!", "success", 5000);
        }

        _this.$modal.hide("modal_eliminar_cepa");
      })["catch"](function (error) {
        _this.bloquearBtnModal = false;

        _this.toastr("Error!!", "", "error");
      });
    }
  }),
  created: function created() {
    this.$emit("cambiarTipo", "tabla");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/ContainerCepasComponent.vue?vue&type=template&id=9f25d658&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/ContainerCepasComponent.vue?vue&type=template&id=9f25d658& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main-card mb-3 card" }, [
    _c("div", { staticClass: "card-header-tab card-header" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "btn-actions-pane-right actions-icon-btn" },
        [
          !_vm.formulario
            ? [
                _c(
                  "button",
                  {
                    staticClass:
                      "btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm",
                    on: {
                      click: function($event) {
                        return _vm.abrirFormulario(0)
                      }
                    }
                  },
                  [_vm._v("Agregar")]
                )
              ]
            : [
                _c(
                  "button",
                  {
                    staticClass:
                      "btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm",
                    on: { click: _vm.cerrarFormulario }
                  },
                  [_vm._v("Cancelar")]
                )
              ]
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body" },
      [
        !_vm.formulario
          ? [_c("Tabla", { on: { cambiarTipo: _vm.cambiarTipo } })]
          : [
              _c("Form", {
                attrs: { tipoG: _vm.tipoG, idCepa: _vm.id },
                on: {
                  cambiarTipo: _vm.cambiarTipo,
                  cambiarVariableFormulario: _vm.cambiarVariableFormulario
                }
              })
            ]
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "card-header-title font-size-lg text-capitalize font-weight-normal"
      },
      [
        _c("i", {
          staticClass: "header-icon lnr-laptop-phone mr-3 text-muted opacity-6"
        }),
        _vm._v("\n      Tabla Dinámica Cepas Microbianas\n    ")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/FormComponent.vue?vue&type=template&id=796fdaa2&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/FormComponent.vue?vue&type=template&id=796fdaa2& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row justify-content-md-center" }, [
          _c("div", { staticClass: "col col-sm-8" }, [
            _c("div", { staticClass: "main-card mb-3 card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [
                  _vm._v(_vm._s(_vm.nombre))
                ]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.evento($event)
                      }
                    }
                  },
                  [
                    _vm.errors != ""
                      ? [
                          _c(
                            "div",
                            { staticClass: "alert alert-danger" },
                            _vm._l(_vm.errors, function(item, index) {
                              return _c("p", { key: index }, [
                                _vm._v(_vm._s(item[0]))
                              ])
                            }),
                            0
                          )
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("label", { attrs: { for: "codigo" } }, [
                        _vm._v("Código")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.parametros.codigo,
                            expression: "parametros.codigo"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "codigo",
                          id: "codigo",
                          placeholder: "...",
                          type: "text",
                          required: ""
                        },
                        domProps: { value: _vm.parametros.codigo },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.parametros,
                              "codigo",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _vm.mostrarGrupos
                      ? _c(
                          "div",
                          { staticClass: "position-relative form-group" },
                          [
                            _c(
                              "label",
                              { attrs: { for: "grupo_microbiano" } },
                              [_vm._v("Grupo Microbiano")]
                            ),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.parametros.grupo_microbiano,
                                    expression: "parametros.grupo_microbiano"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  name: "select",
                                  id: "grupo_microbiano",
                                  disabled: _vm.disabled
                                },
                                on: {
                                  change: [
                                    function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.parametros,
                                        "grupo_microbiano",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                    _vm.cambiarGeneroEspecie
                                  ]
                                }
                              },
                              _vm._l(_vm.getGrupos, function(gm, index) {
                                return _c(
                                  "option",
                                  { key: index, domProps: { value: gm.id } },
                                  [_vm._v(_vm._s(gm.nombre))]
                                )
                              }),
                              0
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "genero" } }, [
                      _vm._v("Género")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group mb-3" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.parametros.genero,
                              expression: "parametros.genero"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { name: "select", id: "genero" },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.parametros,
                                  "genero",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              _vm.cambiarEspecie
                            ]
                          }
                        },
                        _vm._l(
                          _vm.getGenerosId(_vm.parametros.grupo_microbiano),
                          function(g, index) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: g.id } },
                              [_vm._v(_vm._s(g.nombre))]
                            )
                          }
                        ),
                        0
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group-append" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn-icon btn-icon-only btn-pill btn btn-outline-success",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.showModal("genero")
                              }
                            }
                          },
                          [_c("i", { staticClass: "fas fa-plus" })]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "especie" } }, [
                      _vm._v("Especie")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group mb-3" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.parametros.especie,
                              expression: "parametros.especie"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { name: "select", id: "especie" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.parametros,
                                "especie",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(
                          _vm.getEspeciesId(_vm.parametros.genero),
                          function(e, index) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: e.id } },
                              [_vm._v(_vm._s(e.nombre))]
                            )
                          }
                        ),
                        0
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group-append" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn-icon btn-icon-only btn-pill btn btn-outline-success",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.showModal("especie")
                              }
                            }
                          },
                          [_c("i", { staticClass: "fas fa-plus" })]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.parametros.grupo_microbiano === 3
                      ? _c("div", [
                          _c("label", { attrs: { for: "division" } }, [
                            _vm._v("Division")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-group mb-3" }, [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.parametros.division,
                                    expression: "parametros.division"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { name: "select", id: "division" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.parametros,
                                      "division",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              _vm._l(_vm.getDivisiones, function(d, index) {
                                return _c(
                                  "option",
                                  { key: index, domProps: { value: d.id } },
                                  [_vm._v(_vm._s(d.nombre))]
                                )
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "input-group-append" }, [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn-icon btn-icon-only btn-pill btn btn-outline-success",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.showModal("division")
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-plus" })]
                              )
                            ])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.parametros.grupo_microbiano === 4
                      ? _c("div", [
                          _c("label", { attrs: { for: "reino" } }, [
                            _vm._v("Reino")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-group mb-3" }, [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.parametros.reino,
                                    expression: "parametros.reino"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { name: "select", id: "reino" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.parametros,
                                      "reino",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              _vm._l(_vm.getReinos, function(r, index) {
                                return _c(
                                  "option",
                                  { key: index, domProps: { value: r.id } },
                                  [_vm._v(_vm._s(r.nombre))]
                                )
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "input-group-append" }, [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn-icon btn-icon-only btn-pill btn btn-outline-success",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.showModal("reino")
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-plus" })]
                              )
                            ])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.parametros.grupo_microbiano === 2 ||
                    _vm.parametros.grupo_microbiano === 4
                      ? _c("div", [
                          _c("label", { attrs: { for: "phylum" } }, [
                            _vm._v("Phylum")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-group mb-3" }, [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.parametros.phylum,
                                    expression: "parametros.phylum"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { name: "select", id: "phylum" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.parametros,
                                      "phylum",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              _vm._l(_vm.getPhylums, function(p, index) {
                                return _c(
                                  "option",
                                  { key: index, domProps: { value: p.id } },
                                  [_vm._v(_vm._s(p.nombre))]
                                )
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "input-group-append" }, [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn-icon btn-icon-only btn-pill btn btn-outline-success",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.showModal("phylum")
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-plus" })]
                              )
                            ])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.parametros.grupo_microbiano === 2 ||
                    _vm.parametros.grupo_microbiano === 3 ||
                    _vm.parametros.grupo_microbiano === 4
                      ? _c("div", [
                          _c("label", { attrs: { for: "clase" } }, [
                            _vm._v("Clase")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-group mb-3" }, [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.parametros.clase,
                                    expression: "parametros.clase"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { name: "select", id: "clase" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.parametros,
                                      "clase",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              _vm._l(_vm.getClases, function(c, index) {
                                return _c(
                                  "option",
                                  { key: index, domProps: { value: c.id } },
                                  [_vm._v(_vm._s(c.nombre))]
                                )
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "input-group-append" }, [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn-icon btn-icon-only btn-pill btn btn-outline-success",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.showModal("clase")
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-plus" })]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "orden" } }, [
                            _vm._v("Orden")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-group mb-3" }, [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.parametros.orden,
                                    expression: "parametros.orden"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { name: "select", id: "orden" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.parametros,
                                      "orden",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              _vm._l(_vm.getOrdens, function(o, index) {
                                return _c(
                                  "option",
                                  { key: index, domProps: { value: o.id } },
                                  [_vm._v(_vm._s(o.nombre))]
                                )
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "input-group-append" }, [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn-icon btn-icon-only btn-pill btn btn-outline-success",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.showModal("orden")
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-plus" })]
                              )
                            ])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.parametros.grupo_microbiano === 2 ||
                    _vm.parametros.grupo_microbiano === 3
                      ? _c("div", [
                          _c("label", { attrs: { for: "familia" } }, [
                            _vm._v("Familia")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-group mb-3" }, [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.parametros.familia,
                                    expression: "parametros.familia"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { name: "select", id: "familia" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.parametros,
                                      "familia",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              _vm._l(_vm.getFamilias, function(f, index) {
                                return _c(
                                  "option",
                                  { key: index, domProps: { value: f.id } },
                                  [_vm._v(_vm._s(f.nombre))]
                                )
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "input-group-append" }, [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn-icon btn-icon-only btn-pill btn btn-outline-success",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.showModal("familia")
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-plus" })]
                              )
                            ])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("label", { attrs: { for: "estado" } }, [
                        _vm._v("Estado")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.parametros.estado,
                            expression: "parametros.estado"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "estado",
                          id: "estado",
                          placeholder: "...",
                          type: "text",
                          required: ""
                        },
                        domProps: { value: _vm.parametros.estado },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.parametros,
                              "estado",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("label", { attrs: { for: "origen" } }, [
                        _vm._v("Origen")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.parametros.origen,
                              expression: "parametros.origen"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { name: "select", id: "origen" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.parametros,
                                "origen",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "Donación" } }, [
                            _vm._v("Donación")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Compra" } }, [
                            _vm._v("Compra")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Proyecto" } }, [
                            _vm._v("Proyecto")
                          ]),
                          _vm._v(" "),
                          _c(
                            "option",
                            { attrs: { value: "Aislamiento del Laboratorio" } },
                            [_vm._v("Aislamiento del Laboratorio")]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "position-relative form-group" }, [
                      _c("label", { attrs: { for: "otras_caracteristicas" } }, [
                        _vm._v("Otras Caracteristicas")
                      ]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.parametros.otras_caracteristicas,
                            expression: "parametros.otras_caracteristicas"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "text", id: "otras_caracteristicas" },
                        domProps: {
                          value: _vm.parametros.otras_caracteristicas
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.parametros,
                              "otras_caracteristicas",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "custom-checkbox custom-control mb-2" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.parametros.publicar,
                              expression: "parametros.publicar"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "publicar" },
                          domProps: {
                            checked: Array.isArray(_vm.parametros.publicar)
                              ? _vm._i(_vm.parametros.publicar, null) > -1
                              : _vm.parametros.publicar
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.parametros.publicar,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.parametros,
                                      "publicar",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.parametros,
                                      "publicar",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.parametros, "publicar", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "publicar" }
                          },
                          [_vm._v("Desea publicar la cepa?")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "mt-1 btn",
                        class: _vm.classBtn,
                        attrs: { disabled: _vm.bloquearBtn }
                      },
                      [_vm._v(_vm._s(_vm.nombreBtn))]
                    )
                  ],
                  2
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            name: "agregar-otra-info",
            classes: "my_modal",
            width: 450,
            height: 450
          }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "h5",
                {
                  staticClass: "modal-title",
                  attrs: { id: "exampleModalLongTitle" }
                },
                [_vm._v(_vm._s(_vm.modal.titulo))]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("agregar-otra-info")
                    }
                  }
                },
                [
                  _c("span", { attrs: { "aria-hidden": "true" } }, [
                    _vm._v("×")
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _vm.modal.tipo === "genero"
                ? _c("div", { staticClass: "position-relative form-group" }, [
                    _c("label", { attrs: { for: "grupo_microbiano-modal" } }, [
                      _vm._v("Grupo Microbiano")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.modal.grupo_microbiano,
                            expression: "modal.grupo_microbiano"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "select",
                          id: "grupo_microbiano-modal",
                          disabled: _vm.disabled
                        },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.modal,
                              "grupo_microbiano",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.getGrupos, function(gm, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: gm.id } },
                          [_vm._v(_vm._s(gm.nombre))]
                        )
                      }),
                      0
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.modal.tipo === "especie"
                ? _c("div", { staticClass: "position-relative form-group" }, [
                    _c("label", { attrs: { for: "genero-modal" } }, [
                      _vm._v("Genero")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.modal.genero,
                            expression: "modal.genero"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "select", id: "genero-modal" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.modal,
                              "genero",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(
                        _vm.getGenerosId(_vm.parametros.grupo_microbiano),
                        function(g, index) {
                          return _c(
                            "option",
                            { key: index, domProps: { value: g.id } },
                            [_vm._v(_vm._s(g.nombre))]
                          )
                        }
                      ),
                      0
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "nombre" } }, [_vm._v("Nombre")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.modal.input,
                      expression: "modal.input"
                    }
                  ],
                  class: [
                    "form-control",
                    _vm.validarNombreUnico ? "is-invalid" : ""
                  ],
                  attrs: {
                    name: "nombre",
                    id: "nombre",
                    placeholder: "...",
                    type: "text",
                    required: ""
                  },
                  domProps: { value: _vm.modal.input },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.modal, "input", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.validarNombreUnico
                  ? _c("em", { staticClass: "error invalid-feedback" }, [
                      _vm._v("Ya Existe un registro con ese nombre")
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("agregar-otra-info")
                    }
                  }
                },
                [_vm._v("Cancelar")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  attrs: {
                    type: "button",
                    disabled: _vm.bloquearBtnModal || _vm.validarNombreUnico
                  },
                  on: { click: _vm.agregarInfo }
                },
                [_vm._v("Agregar")]
              )
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/TablaComponent.vue?vue&type=template&id=bf0825a6&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/TablaComponent.vue?vue&type=template&id=bf0825a6& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.mostrarTabla
        ? [
            _c("MyVuetable", {
              ref: "tabla",
              attrs: {
                "api-url": "/info-panel/cepas-tabla",
                fields: _vm.fields,
                "sort-order": _vm.sortOrder,
                "detail-row-component": "my-detail-row-cepas",
                nameGet: "cepas"
              }
            })
          ]
        : [_vm._m(0)],
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            name: "modal_eliminar_cepa",
            classes: "my_modal",
            width: 400,
            height: 300
          },
          on: {
            "before-open": _vm.beforeOpenEliminar,
            closed: _vm.closeEliminar
          }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "h5",
                {
                  staticClass: "modal-title",
                  attrs: { id: "exampleModalLongTitle" }
                },
                [_vm._v("Eliminar Cepa Microbiana")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("modal_eliminar_cepa")
                    }
                  }
                },
                [
                  _c("span", { attrs: { "aria-hidden": "true" } }, [
                    _vm._v("×")
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("p", [_vm._v("Esta segura/o de eliminar la Cepa?.")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("modal_eliminar_cepa")
                    }
                  }
                },
                [_vm._v("Cancelar")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button", disabled: _vm.bloquearBtnModal },
                  on: { click: _vm.eliminarCepa }
                },
                [_vm._v("Eliminar")]
              )
            ])
          ])
        ]
      )
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h5", { staticClass: "mt-5 mb-5" }, [
        _c("span", { staticClass: "pr-1" }, [
          _c("b", { staticClass: "text-success" }, [
            _vm._v("AÚN NO SE HAN AGREGADO CEPAS")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/cepas/ContainerCepasComponent.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/cepas/ContainerCepasComponent.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContainerCepasComponent_vue_vue_type_template_id_9f25d658___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContainerCepasComponent.vue?vue&type=template&id=9f25d658& */ "./resources/js/components/cepas/ContainerCepasComponent.vue?vue&type=template&id=9f25d658&");
/* harmony import */ var _ContainerCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContainerCepasComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/ContainerCepasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContainerCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContainerCepasComponent_vue_vue_type_template_id_9f25d658___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContainerCepasComponent_vue_vue_type_template_id_9f25d658___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/ContainerCepasComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/ContainerCepasComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/cepas/ContainerCepasComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContainerCepasComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/ContainerCepasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/ContainerCepasComponent.vue?vue&type=template&id=9f25d658&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/cepas/ContainerCepasComponent.vue?vue&type=template&id=9f25d658& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerCepasComponent_vue_vue_type_template_id_9f25d658___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContainerCepasComponent.vue?vue&type=template&id=9f25d658& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/ContainerCepasComponent.vue?vue&type=template&id=9f25d658&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerCepasComponent_vue_vue_type_template_id_9f25d658___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContainerCepasComponent_vue_vue_type_template_id_9f25d658___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/FormComponent.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/cepas/FormComponent.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormComponent_vue_vue_type_template_id_796fdaa2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormComponent.vue?vue&type=template&id=796fdaa2& */ "./resources/js/components/cepas/FormComponent.vue?vue&type=template&id=796fdaa2&");
/* harmony import */ var _FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/FormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormComponent_vue_vue_type_template_id_796fdaa2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormComponent_vue_vue_type_template_id_796fdaa2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/FormComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/FormComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/cepas/FormComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/FormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/FormComponent.vue?vue&type=template&id=796fdaa2&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/cepas/FormComponent.vue?vue&type=template&id=796fdaa2& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_template_id_796fdaa2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormComponent.vue?vue&type=template&id=796fdaa2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/FormComponent.vue?vue&type=template&id=796fdaa2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_template_id_796fdaa2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_template_id_796fdaa2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/TablaComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/cepas/TablaComponent.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaComponent_vue_vue_type_template_id_bf0825a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaComponent.vue?vue&type=template&id=bf0825a6& */ "./resources/js/components/cepas/TablaComponent.vue?vue&type=template&id=bf0825a6&");
/* harmony import */ var _TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/TablaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaComponent_vue_vue_type_template_id_bf0825a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaComponent_vue_vue_type_template_id_bf0825a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/TablaComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/TablaComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/cepas/TablaComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/TablaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/TablaComponent.vue?vue&type=template&id=bf0825a6&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/cepas/TablaComponent.vue?vue&type=template&id=bf0825a6& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_template_id_bf0825a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaComponent.vue?vue&type=template&id=bf0825a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/TablaComponent.vue?vue&type=template&id=bf0825a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_template_id_bf0825a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaComponent_vue_vue_type_template_id_bf0825a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cepas/columnas/columnas-cepas.js":
/*!******************************************************************!*\
  !*** ./resources/js/components/cepas/columnas/columnas-cepas.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "codigo",
  sortField: "codigo",
  title: "Código",
  titleClass: "text-center"
}, {
  name: "nombre_grupo",
  sortField: "grupo_microbiano_id",
  title: "Grupo Microbiano",
  titleClass: "text-center"
}, {
  name: "nombre_genero",
  sortField: "genero_id",
  title: "Género",
  titleClass: "text-center"
}, {
  name: "nombre_especie",
  sortField: "especie_id",
  title: "Especie",
  titleClass: "text-center"
}, {
  name: "estado",
  sortField: "estado",
  titleClass: "text-center"
}, {
  name: "origen",
  sortField: "origen",
  titleClass: "text-center"
},, {
  name: "__component:checkboxs-publicar",
  title: "Publicar",
  titleClass: "text-center",
  dataClass: "text-center"
}, {
  name: "__component:acciones_cepas",
  title: "Acciones",
  titleClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/mixins/abrirCerrarFormulario.js":
/*!******************************************************!*\
  !*** ./resources/js/mixins/abrirCerrarFormulario.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var abrirCerrarFormualrio = function abrirCerrarFormualrio(tipoM) {
  return {
    data: function data() {
      return {
        formulario: false,
        id: 0
      };
    },
    methods: {
      abrirFormulario: function abrirFormulario(id) {
        if (id != 0) {
          this.id = id;
        } else {
          this.id = 0;
        }

        this.formulario = !this.formulario;
      },
      cerrarFormulario: function cerrarFormulario() {
        window.Echo["private"]("desbloquearBtns" + tipoM).whisper("desbloquearBtns" + tipoM, {
          id: this.id
        });
        window.Echo["private"]("desbloquearCheck" + tipoM).whisper("desbloquearCheck" + tipoM, {
          id: this.id
        });
        this.$events.fire("spliceMisBloqueos" + tipoM, {
          id: this.id
        });
        this.id = 0;
        this.formulario = !this.formulario;
      },
      cambiarVariableFormulario: function cambiarVariableFormulario() {
        this.formulario = !this.formulario;
      }
    },
    created: function created() {
      var _this = this;

      this.$events.$on("abrirFormulario" + tipoM, function (e) {
        return _this.abrirFormulario(e);
      });
    },
    beforeDestroy: function beforeDestroy() {
      this.$events.$off("abrirFormulario" + tipoM);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (abrirCerrarFormualrio);

/***/ }),

/***/ "./resources/js/mixins/websockets.js":
/*!*******************************************!*\
  !*** ./resources/js/mixins/websockets.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var websocketsMixin = function websocketsMixin(tipoM, tipoP) {
  return {
    data: function data() {
      return {
        bloqueos: [],
        misBloqueos: []
      };
    },
    methods: {
      // Bloquear Btns
      bloquearBtnsTabla: function bloquearBtnsTabla(e) {
        this.bloqueos.push({
          idUser: e.idUser,
          id: e.id
        });
        this.$events.fire(e.id + "-bloquearBtns" + tipoM);
      },
      desbloquearBtnsTabla: function desbloquearBtnsTabla(e) {
        this.bloqueos.splice(this.bloqueos.findIndex(function (data) {
          return data.id === e.id;
        }), 1);
        this.$events.fire(e.id + "-desbloquearBtns" + tipoM);
      },
      // Bloquear Check
      bloquearCheckTabla: function bloquearCheckTabla(e) {
        this.bloqueos.push({
          idUser: e.idUser,
          id: e.id
        });
        this.$events.fire(e.id + "-bloquearCheck" + tipoM);
      },
      desbloquearCheckTabla: function desbloquearCheckTabla(e) {
        this.bloqueos.splice(this.bloqueos.findIndex(function (data) {
          return data.id === e.id;
        }), 1);
        this.$events.fire(e.id + "-desbloquearCheck" + tipoM);
      },
      // guardar mis bloqueos
      pushMisBloqueos: function pushMisBloqueos(e) {
        this.misBloqueos.push({
          idUser: e.idUser,
          id: e.id
        });
      },
      spliceMisBloqueos: function spliceMisBloqueos(e) {
        if (e.id != 0) {
          this.misBloqueos.splice(this.misBloqueos.findIndex(function (data) {
            return data.id === e.id;
          }), 1);
        }
      },
      //borrar bloqueos
      borrarBloqueos: function borrarBloqueos(e) {
        var data = this.bloqueos.find(function (data) {
          return data.idUser === e.id;
        });

        if (data) {
          this.desbloquearBtnsTabla(data);
          this.desbloquearCheckTabla(data);
        }
      },
      // verificar bloqueos existentes
      verificarBloqueos: function verificarBloqueos() {
        for (var index = 0; index < this.bloqueos.length; index++) {
          this.$events.fire(this.bloqueos[index].id + "-bloquearBtns" + tipoM);
          this.$events.fire(this.bloqueos[index].id + "-bloquearCheck" + tipoM);
        }
      },
      enviarBloqueos: function enviarBloqueos() {
        window.Echo["private"]("recibirBtnsCheck" + tipoM).whisper("recibirBtnsCheck" + tipoM, {
          bloqueos: this.misBloqueos
        });
      }
    },
    mounted: function mounted() {
      var _this = this;

      window.Echo.join(tipoP).joining(function (data) {
        if (_this.misBloqueos.length > 0) {
          _this.enviarBloqueos();
        }
      }).leaving(function (data) {
        _this.borrarBloqueos(data.user);
      });
      window.Echo["private"]("bloquearBtns" + tipoM).listenForWhisper("bloquearBtns" + tipoM, function (e) {
        _this.bloquearBtnsTabla(e);
      });
      window.Echo["private"]("desbloquearBtns" + tipoM).listenForWhisper("desbloquearBtns" + tipoM, function (e) {
        if (e.id != 0) {
          _this.desbloquearBtnsTabla(e);
        }
      });
      window.Echo["private"]("bloquearCheck" + tipoM).listenForWhisper("bloquearCheck" + tipoM, function (e) {
        _this.bloquearCheckTabla(e);
      });
      window.Echo["private"]("desbloquearCheck" + tipoM).listenForWhisper("desbloquearCheck" + tipoM, function (e) {
        if (e.id != 0) {
          _this.desbloquearCheckTabla(e);
        }
      });
    },
    created: function created() {
      var _this2 = this;

      window.Echo["private"]("recibirBtnsCheck" + tipoM).listenForWhisper("recibirBtnsCheck" + tipoM, function (e) {
        if (e.bloqueos.length > 0) {
          _this2.bloquearBtnsTabla(e.bloqueos[0]);

          _this2.bloquearCheckTabla(e.bloqueos[0]);
        }
      });
      this.$events.$on("pushMisBloqueos" + tipoM, function (e) {
        return _this2.pushMisBloqueos(e);
      });
      this.$events.$on("spliceMisBloqueos" + tipoM, function (e) {
        return _this2.spliceMisBloqueos(e);
      });
      this.$events.$on("verificarBloqueos-" + tipoP, function (e) {
        return _this2.verificarBloqueos();
      });
    },
    destroyed: function destroyed() {
      this.$events.$off("pushMisBloqueos" + tipoM);
      this.$events.$off("spliceMisBloqueos" + tipoM);
      this.$events.$off("verificarBloqueos-" + tipoP);
    },
    beforeDestroy: function beforeDestroy() {
      window.Echo.leave(tipoP);
      window.Echo.leave("recibirBtnsCheck" + tipoM);
      window.Echo.leave("bloquearCheck" + tipoM);
      window.Echo.leave("desbloquearCheck" + tipoM);
      window.Echo.leave("desbloquearBtns" + tipoM);
      window.Echo.leave("bloquearBtns" + tipoM);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (websocketsMixin);

/***/ }),

/***/ "./resources/js/mixins/websocketsTabla.js":
/*!************************************************!*\
  !*** ./resources/js/mixins/websocketsTabla.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var websocketsTabla = function websocketsTabla(tipoM) {
  return {
    methods: {
      closeEliminar: function closeEliminar() {
        window.Echo["private"]("desbloquearBtns" + tipoM).whisper("desbloquearBtns" + tipoM, {
          id: this.id
        });
        window.Echo["private"]("desbloquearCheck" + tipoM).whisper("desbloquearCheck" + tipoM, {
          id: this.id
        });
        this.$events.fire("spliceMisBloqueos" + tipoM, {
          id: this.id
        });
      },
      actualizarTabla: function actualizarTabla() {
        if (this.mostrarTabla) {
          if (this.$refs.tabla) {
            this.$refs.tabla.refreshDatos();
          }
        }
      }
    },
    created: function created() {
      var _this = this;

      this.$events.on("actualizartabla" + tipoM, function (e) {
        return _this.actualizarTabla();
      });
    },
    destroyed: function destroyed() {
      this.$events.off("actualizartabla" + tipoM);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (websocketsTabla);

/***/ })

}]);