(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otra-info-bacterias"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/BacteriasComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/BacteriasComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_websocketsOtraInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/websocketsOtraInfo */ "./resources/js/mixins/websocketsOtraInfo.js");
/* harmony import */ var _tablas_bacterias_ModalesComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tablas/bacterias/ModalesComponent.vue */ "./resources/js/components/otra-info/tablas/bacterias/ModalesComponent.vue");
/* harmony import */ var _tablas_bacterias_bordes_TablaBordesComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tablas/bacterias/bordes/TablaBordesComponent.vue */ "./resources/js/components/otra-info/tablas/bacterias/bordes/TablaBordesComponent.vue");
/* harmony import */ var _tablas_bacterias_colors_TablaColorsComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tablas/bacterias/colors/TablaColorsComponent.vue */ "./resources/js/components/otra-info/tablas/bacterias/colors/TablaColorsComponent.vue");
/* harmony import */ var _tablas_bacterias_detalles_TablaDetallesComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tablas/bacterias/detalles/TablaDetallesComponent.vue */ "./resources/js/components/otra-info/tablas/bacterias/detalles/TablaDetallesComponent.vue");
/* harmony import */ var _tablas_bacterias_elevacions_TablaElevacionsComponent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tablas/bacterias/elevacions/TablaElevacionsComponent.vue */ "./resources/js/components/otra-info/tablas/bacterias/elevacions/TablaElevacionsComponent.vue");
/* harmony import */ var _tablas_bacterias_formas_macro_TablaFormasMacroComponent_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tablas/bacterias/formas-macro/TablaFormasMacroComponent.vue */ "./resources/js/components/otra-info/tablas/bacterias/formas-macro/TablaFormasMacroComponent.vue");
/* harmony import */ var _tablas_bacterias_formas_micro_TablaFormasMicroComponent_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tablas/bacterias/formas-micro/TablaFormasMicroComponent.vue */ "./resources/js/components/otra-info/tablas/bacterias/formas-micro/TablaFormasMicroComponent.vue");
/* harmony import */ var _tablas_bacterias_superficies_TablaSuperficiesComponent_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tablas/bacterias/superficies/TablaSuperficiesComponent.vue */ "./resources/js/components/otra-info/tablas/bacterias/superficies/TablaSuperficiesComponent.vue");
/* harmony import */ var _tablas_bacterias_tipos_agars_TablaTiposAgarsComponent_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tablas/bacterias/tipos-agars/TablaTiposAgarsComponent.vue */ "./resources/js/components/otra-info/tablas/bacterias/tipos-agars/TablaTiposAgarsComponent.vue");
/* harmony import */ var _tablas_bacterias_tipos_metodos_TablaTiposMetodosComponent_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tablas/bacterias/tipos-metodos/TablaTiposMetodosComponent.vue */ "./resources/js/components/otra-info/tablas/bacterias/tipos-metodos/TablaTiposMetodosComponent.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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












/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ModalOtraInfoBacteria: _tablas_bacterias_ModalesComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TablaBordes: _tablas_bacterias_bordes_TablaBordesComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    TablaColors: _tablas_bacterias_colors_TablaColorsComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    TablaDetalles: _tablas_bacterias_detalles_TablaDetallesComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    TablaElevacions: _tablas_bacterias_elevacions_TablaElevacionsComponent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    TablaFormasMacro: _tablas_bacterias_formas_macro_TablaFormasMacroComponent_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    TablaFormasMicro: _tablas_bacterias_formas_micro_TablaFormasMicroComponent_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    TablaSuperficies: _tablas_bacterias_superficies_TablaSuperficiesComponent_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    TablaAgars: _tablas_bacterias_tipos_agars_TablaTiposAgarsComponent_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    TablaMetodos: _tablas_bacterias_tipos_metodos_TablaTiposMetodosComponent_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  data: function data() {
    return {
      tablasCaractMacro: false,
      tablasCaractMicro: false,
      tablasMetodos: false
    };
  },
  mixins: [Object(_mixins_websocketsOtraInfo__WEBPACK_IMPORTED_MODULE_0__["default"])("BacteriasInfo")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_11__["default"].mapState("info_caract", ["info_caract_bacterias"])),
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_11__["default"].mapActions("info_caract", ["obtenerInfoCaractBacterias"]), {
    mostrarTablasCaractMacro: function mostrarTablasCaractMacro() {
      this.tablasCaractMacro = !this.tablasCaractMacro;
    },
    mostrarTablasCaractMicro: function mostrarTablasCaractMicro() {
      this.tablasCaractMicro = !this.tablasCaractMicro;
    },
    mostrarTablasMetodos: function mostrarTablasMetodos() {
      this.tablasMetodos = !this.tablasMetodos;
    }
  }),
  created: function created() {
    var _this = this;

    this.obtenerInfoCaractBacterias();
    this.$events.$on("verificarBloqueos-bordes-bacteria", function (e) {
      return _this.verificarBloqueos("borde");
    });
    this.$events.$on("verificarBloqueos-colors-bacteria", function (e) {
      return _this.verificarBloqueos("color");
    });
    this.$events.$on("verificarBloqueos-detalles-bacteria", function (e) {
      return _this.verificarBloqueos("detalle");
    });
    this.$events.$on("verificarBloqueos-elevacions-bacteria", function (e) {
      return _this.verificarBloqueos("elevacion");
    });
    this.$events.$on("verificarBloqueos-formas-macro-bacteria", function (e) {
      return _this.verificarBloqueos("forma_macro");
    });
    this.$events.$on("verificarBloqueos-formas-micro-bacteria", function (e) {
      return _this.verificarBloqueos("forma_micro");
    });
    this.$events.$on("verificarBloqueos-superficies-bacteria", function (e) {
      return _this.verificarBloqueos("superficie");
    });
    this.$events.$on("verificarBloqueos-tipos-agars-bacteria", function (e) {
      return _this.verificarBloqueos("tipo_agar");
    });
    this.$events.$on("verificarBloqueos-tipos-metodos-bacteria", function (e) {
      return _this.verificarBloqueos("tipo_metodo");
    });
  },
  destroyed: function destroyed() {
    this.$events.$off("verificarBloqueos-bordes-bacteria");
    this.$events.$off("verificarBloqueos-colors-bacteria");
    this.$events.$off("verificarBloqueos-detalles-bacteria");
    this.$events.$off("verificarBloqueos-elevacions-bacteria");
    this.$events.$off("verificarBloqueos-formas-macro-bacteria");
    this.$events.$off("verificarBloqueos-formas-micro-bacteria");
    this.$events.$off("verificarBloqueos-superficies-bacteria");
    this.$events.$off("verificarBloqueos-tipos-agars-bacteria");
    this.$events.$off("verificarBloqueos-tipos-metodos-bacteria");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/ModalesComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/bacterias/ModalesComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/toastr */ "./resources/js/mixins/toastr.js");
/* harmony import */ var _mixins_websocketsModalOtraInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../mixins/websocketsModalOtraInfo */ "./resources/js/mixins/websocketsModalOtraInfo.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      id: "",
      modal: {
        nombre: "",
        tipo: ""
      },
      errors: "",
      bloquearBtnModal: false
    };
  },
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"], Object(_mixins_websocketsModalOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("BacteriasInfo")],
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("info_caract", ["accionAgregarTipoCaractBacteria", "accionEditarTipoCaractBacteria", "accionEliminarTipoCaractBacteria"]), {
    beforeOpenAgregar: function beforeOpenAgregar(data) {
      this.errors = "";
      this.modal.nombre = "";
      this.modal.tipo = data.params.tipo;
    },
    agregarTipo: function agregarTipo() {
      var _this = this;

      this.bloquearBtnModal = true;
      axios.post("/info-caract-bacterias/agregar", this.modal).then(function (res) {
        if (res.request.responseURL === "http://127.0.0.1:8000/") {
          localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
          window.location.href = "/";
        } else {
          _this.bloquearBtnModal = false;

          _this.accionAgregarTipoCaractBacteria({
            info: res.data,
            tipo: _this.modal.tipo
          });

          _this.$events.fire("actualizartabla" + _this.modal.tipo);

          _this.$modal.hide("modal_agregar_tipo_bacteria");

          _this.toastr("Agregar ".concat(_this.primeraMayus(_this.modal.tipo)), "".concat(_this.primeraMayus(_this.modal.tipo), " agregado/a con exito"), "success");
        }
      })["catch"](function (error) {
        if (error.response.status === 403) {
          _this.$router.push("/sin-acceso");
        } else {
          _this.bloquearBtnModal = false;

          if (error.response.status === 422) {
            _this.errors = error.response.data.errors;
          }

          _this.toastr("Error!!!!", "", "error");
        }
      });
    },
    beforeOpenEditar: function beforeOpenEditar(data) {
      this.errors = "";
      this.id = data.params.id;
      this.modal.nombre = data.params.nombre;
      this.modal.tipo = data.params.tipo;
    },
    editarTipo: function editarTipo() {
      var _this2 = this;

      this.bloquearBtnModal = true;
      axios.put("/info-caract-bacterias/editar/".concat(this.id), this.modal).then(function (res) {
        _this2.bloquearBtnModal = false;

        _this2.accionEditarTipoCaractBacteria({
          info: res.data,
          tipo: _this2.modal.tipo
        });

        _this2.$events.fire("actualizartabla" + _this2.modal.tipo);

        _this2.toastr("Editar ".concat(_this2.primeraMayus(_this2.modal.tipo)), "".concat(_this2.primeraMayus(_this2.modal.tipo), " editado/a con exito!!"), "success");

        _this2.$modal.hide("modal_editar_tipo_bacteria");
      })["catch"](function (error) {
        if (error.response.status === 403) {
          _this2.$router.push("/sin-acceso");
        } else if (error.response.status === 405) {
          window.location.href = "/";
        } else {
          _this2.bloquearBtnModal = false;

          if (error.response.status === 422) {
            _this2.errors = error.response.data.errors;
          }

          _this2.toastr("Error!!!", "", "error");
        }
      });
    },
    beforeOpenEliminar: function beforeOpenEliminar(data) {
      this.errors = "";
      this.id = data.params.id;
      this.modal.tipo = data.params.tipo;
    },
    eliminarTipo: function eliminarTipo() {
      var _this3 = this;

      this.bloquearBtnModal = true;
      axios["delete"]("/info-caract-bacterias/eliminar/".concat(this.id), {
        data: this.modal
      }).then(function (res) {
        _this3.bloquearBtnModal = false;

        if (res.data === "macro") {
          _this3.toastr("Precaución!!", "El/La " + _this3.modal.tipo + " se encuentra vinculado/a a características macroscópicas, favor eliminarlas", "warning");
        } else if (res.data === "micro") {
          _this3.toastr("Precaución!!", "La " + _this3.modal.tipo + " se encuentra vinculada a características microscópicas, favor eliminarlas", "warning");
        } else if (res.data === "metodo") {
          _this3.toastr("Precaución!!", "El " + _this3.modal.tipo + " se encuentra vinculado a metodos de conservación, favor eliminarlos", "warning");
        } else {
          _this3.accionEliminarTipoCaractBacteria({
            info: res.data,
            tipo: _this3.modal.tipo
          });

          _this3.$events.fire("actualizartabla" + _this3.modal.tipo);

          _this3.toastr("Eliminar ".concat(_this3.primeraMayus(_this3.modal.tipo)), "".concat(_this3.primeraMayus(_this3.modal.tipo), " eliminado/a con exito!!"), "success");
        }

        _this3.$modal.hide("modal_eliminar_tipo_bacteria");
      })["catch"](function (error) {
        if (error.response.status === 403) {
          _this3.$router.push("/sin-acceso");
        } else if (error.response.status === 405) {
          window.location.href = "/";
        } else {
          _this3.bloquearBtnModal = false;

          _this3.toastr("Error!!!", "", "error");
        }
      });
    },
    primeraMayus: function primeraMayus(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }),
  computed: {
    validarNombre: function validarNombre() {
      // solo numero /^([0-9])*$/ /^[A-Za-z\s]+$/
      var letters = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/;

      if (this.modal.nombre) {
        if (!letters.test(this.modal.nombre)) {
          this.errors = "Solo se admiten letras.";
          return true;
        } else {
          this.errors = "";
          return false;
        }
      }
    },
    validarBtn: function validarBtn() {
      if (this.validarNombre || !this.modal.nombre) {
        return true;
      }

      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/bordes/TablaBordesComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/bacterias/bordes/TablaBordesComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/bacterias/bordes/columnas.js");
/* harmony import */ var _mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../mixins/websocketsTablaOtraInfo */ "./resources/js/mixins/websocketsTablaOtraInfo.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
/* harmony import */ var _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AccionMostrar.vue */ "./resources/js/components/otra-info/tablas/AccionMostrar.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AccionMostrar: _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      fields: _columnas__WEBPACK_IMPORTED_MODULE_1__["default"],
      sortOrder: [{
        field: "nombre",
        direction: "asc"
      }]
    };
  },
  mixins: [Object(_mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("borde")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoCaractMacroBacterias"]), {
    siHayDatos: function siHayDatos() {
      if (this.getInfoCaractMacroBacterias != "" && this.getInfoCaractMacroBacterias != null) {
        if (this.getInfoCaractMacroBacterias.bordes.length > 0) {
          return true;
        }
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/colors/TablaColorsComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/bacterias/colors/TablaColorsComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/bacterias/colors/columnas.js");
/* harmony import */ var _mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../mixins/websocketsTablaOtraInfo */ "./resources/js/mixins/websocketsTablaOtraInfo.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
/* harmony import */ var _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AccionMostrar.vue */ "./resources/js/components/otra-info/tablas/AccionMostrar.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AccionMostrar: _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      fields: _columnas__WEBPACK_IMPORTED_MODULE_1__["default"],
      sortOrder: [{
        field: "nombre",
        direction: "asc"
      }]
    };
  },
  mixins: [Object(_mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("color")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoCaractMacroBacterias"]), {
    siHayDatos: function siHayDatos() {
      if (this.getInfoCaractMacroBacterias != "" && this.getInfoCaractMacroBacterias != null) {
        if (this.getInfoCaractMacroBacterias.colors.length > 0) {
          return true;
        }
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/detalles/TablaDetallesComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/bacterias/detalles/TablaDetallesComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/bacterias/detalles/columnas.js");
/* harmony import */ var _mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../mixins/websocketsTablaOtraInfo */ "./resources/js/mixins/websocketsTablaOtraInfo.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
/* harmony import */ var _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AccionMostrar.vue */ "./resources/js/components/otra-info/tablas/AccionMostrar.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AccionMostrar: _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      fields: _columnas__WEBPACK_IMPORTED_MODULE_1__["default"],
      sortOrder: [{
        field: "nombre",
        direction: "asc"
      }]
    };
  },
  mixins: [Object(_mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("detalle")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoCaractMacroBacterias"]), {
    siHayDatos: function siHayDatos() {
      if (this.getInfoCaractMacroBacterias != "" && this.getInfoCaractMacroBacterias != null) {
        if (this.getInfoCaractMacroBacterias.detalle_opticos.length > 0) {
          return true;
        }
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/elevacions/TablaElevacionsComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/bacterias/elevacions/TablaElevacionsComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/bacterias/elevacions/columnas.js");
/* harmony import */ var _mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../mixins/websocketsTablaOtraInfo */ "./resources/js/mixins/websocketsTablaOtraInfo.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
/* harmony import */ var _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AccionMostrar.vue */ "./resources/js/components/otra-info/tablas/AccionMostrar.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AccionMostrar: _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      fields: _columnas__WEBPACK_IMPORTED_MODULE_1__["default"],
      sortOrder: [{
        field: "nombre",
        direction: "asc"
      }]
    };
  },
  mixins: [Object(_mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("elevacion")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoCaractMacroBacterias"]), {
    siHayDatos: function siHayDatos() {
      if (this.getInfoCaractMacroBacterias != "" && this.getInfoCaractMacroBacterias != null) {
        if (this.getInfoCaractMacroBacterias.elevacions.length > 0) {
          return true;
        }
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/formas-macro/TablaFormasMacroComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/bacterias/formas-macro/TablaFormasMacroComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/bacterias/formas-macro/columnas.js");
/* harmony import */ var _mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../mixins/websocketsTablaOtraInfo */ "./resources/js/mixins/websocketsTablaOtraInfo.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
/* harmony import */ var _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AccionMostrar.vue */ "./resources/js/components/otra-info/tablas/AccionMostrar.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AccionMostrar: _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      fields: _columnas__WEBPACK_IMPORTED_MODULE_1__["default"],
      sortOrder: [{
        field: "nombre",
        direction: "asc"
      }]
    };
  },
  mixins: [Object(_mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("forma_macro")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoCaractMacroBacterias"]), {
    siHayDatos: function siHayDatos() {
      if (this.getInfoCaractMacroBacterias != "" && this.getInfoCaractMacroBacterias != null) {
        if (this.getInfoCaractMacroBacterias.formas_macros.length > 0) {
          return true;
        }
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/formas-micro/TablaFormasMicroComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/bacterias/formas-micro/TablaFormasMicroComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/bacterias/formas-micro/columnas.js");
/* harmony import */ var _mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../mixins/websocketsTablaOtraInfo */ "./resources/js/mixins/websocketsTablaOtraInfo.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
/* harmony import */ var _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AccionMostrar.vue */ "./resources/js/components/otra-info/tablas/AccionMostrar.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AccionMostrar: _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      fields: _columnas__WEBPACK_IMPORTED_MODULE_1__["default"],
      sortOrder: [{
        field: "nombre",
        direction: "asc"
      }]
    };
  },
  mixins: [Object(_mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("forma_micro")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoCaractMicroBacterias"]), {
    siHayDatos: function siHayDatos() {
      if (this.getInfoCaractMicroBacterias != "" && this.getInfoCaractMicroBacterias != null) {
        if (this.getInfoCaractMicroBacterias.formas_micros.length > 0) {
          return true;
        }
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/superficies/TablaSuperficiesComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/bacterias/superficies/TablaSuperficiesComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/bacterias/superficies/columnas.js");
/* harmony import */ var _mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../mixins/websocketsTablaOtraInfo */ "./resources/js/mixins/websocketsTablaOtraInfo.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
/* harmony import */ var _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AccionMostrar.vue */ "./resources/js/components/otra-info/tablas/AccionMostrar.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AccionMostrar: _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      fields: _columnas__WEBPACK_IMPORTED_MODULE_1__["default"],
      sortOrder: [{
        field: "nombre",
        direction: "asc"
      }]
    };
  },
  mixins: [Object(_mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("superficie")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoCaractMacroBacterias"]), {
    siHayDatos: function siHayDatos() {
      if (this.getInfoCaractMacroBacterias != "" && this.getInfoCaractMacroBacterias != null) {
        if (this.getInfoCaractMacroBacterias.superficies.length > 0) {
          return true;
        }
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/tipos-agars/TablaTiposAgarsComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/bacterias/tipos-agars/TablaTiposAgarsComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/bacterias/tipos-agars/columnas.js");
/* harmony import */ var _mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../mixins/websocketsTablaOtraInfo */ "./resources/js/mixins/websocketsTablaOtraInfo.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
/* harmony import */ var _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AccionMostrar.vue */ "./resources/js/components/otra-info/tablas/AccionMostrar.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AccionMostrar: _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      fields: _columnas__WEBPACK_IMPORTED_MODULE_1__["default"],
      sortOrder: [{
        field: "nombre",
        direction: "asc"
      }]
    };
  },
  mixins: [Object(_mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("tipo_agar")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoMetodoConserBacterias"]), {
    siHayDatos: function siHayDatos() {
      if (this.getInfoMetodoConserBacterias != "" && this.getInfoMetodoConserBacterias != null) {
        if (this.getInfoMetodoConserBacterias.tipo_agar.length > 0) {
          return true;
        }
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/bacterias/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/bacterias/tipos-metodos/columnas.js");
/* harmony import */ var _mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../mixins/websocketsTablaOtraInfo */ "./resources/js/mixins/websocketsTablaOtraInfo.js");
/* harmony import */ var _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vuetable/MyVuetableComponent.vue */ "./resources/js/components/vuetable/MyVuetableComponent.vue");
/* harmony import */ var _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AccionMostrar.vue */ "./resources/js/components/otra-info/tablas/AccionMostrar.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MyVuetable: _vuetable_MyVuetableComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AccionMostrar: _AccionMostrar_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      fields: _columnas__WEBPACK_IMPORTED_MODULE_1__["default"],
      sortOrder: [{
        field: "nombre",
        direction: "asc"
      }]
    };
  },
  mixins: [Object(_mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("tipo_metodo")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoMetodoConserBacterias"]), {
    siHayDatos: function siHayDatos() {
      if (this.getInfoMetodoConserBacterias != "" && this.getInfoMetodoConserBacterias != null) {
        if (this.getInfoMetodoConserBacterias.tipo_metodo.length > 0) {
          return true;
        }
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/BacteriasComponent.vue?vue&type=template&id=6b964472&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/BacteriasComponent.vue?vue&type=template&id=6b964472& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container" },
    [
      _vm.info_caract_bacterias != ""
        ? [
            _c("div", { staticClass: "row justify-content-md-center" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "main-card mb-3 card" }, [
                  _c("div", { staticClass: "card-header-tab card-header" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "btn-actions-pane-right actions-icon-btn"
                      },
                      [
                        _c("img", {
                          attrs: {
                            src:
                              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAABmJLR0QA/wD/AP+gvaeTAAACOklEQVRYhe2XT2sTQRiHn9kNsUnblKoIooKXIhqTDaktagT9GP0MHrRbpNT24sFCq2gbBL+CfgTxoCi2hSataf540YuYQsV6aJuktunOeGgSwm7wsKERZZ/T8OzA+2PmZWYWPDz+R8KL5vFIdqK/kzW1VjKaMh/pfjbF/t5PI23OdCqMsIvw6pihS5VpdlJIIz+YzAJcWzQDFT9LCow26q7rmpb4GH/ytVk6VkZX8oTdaYiT9fGOJkMKLrYRBOCMsqyzdumzi0rIWghu+XJABEDAWjlkLdS/568mvxvLZlxq4pLrKJosZuLzS3bt2CaAcOF2j77rHwGwAvsvC+HnJdeFPTyOkJYNHEuN3lKCSQApxXRueO7dXwkzmB49XUV8BrprqmRJ30Bh+PEGAAoRTY9NCqHcH3qCYnCPqaXrc7vN2nHOVIUwUI0gAD0+fd8ANgDCK3fPIdRD5ToJoKB8jNfAqz+GsSxfRtcOSkBPTZWsKo3roTCY/BZdNaeEIuY6zOHKOLa+Zc9Els2baIc9gyanc/Hke9eFPTyOkJYNfOHDeK8/cDACILt+vejUre0Ic/7tg65Q79YytfcMkKv0HQx9GXi2V58TTd25rITP9QNLSdbzw08X7d5xzoT6thPIRhCASHBbTwBvAKJr905RtVYEyu82jNAglhq9kRmaX2j2jmenBZt2p5T4UR93l60d4JPbIDWKQteLjpCtZhppc0bBOICC2dyVufttFm+PSHaiv9P/TR4e/zS/AX4ptkIOwCnsAAAAAElFTkSuQmCC"
                          },
                          on: { click: _vm.mostrarTablasCaractMacro }
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.tablasCaractMacro
                    ? _c("div", { staticClass: "card-body" }, [
                        _c("div", { staticClass: "container" }, [
                          _c(
                            "div",
                            { staticClass: "row justify-content-md-center" },
                            [
                              _c(
                                "div",
                                { staticClass: "col-md-10" },
                                [_c("TablaFormasMacro")],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "row justify-content-md-center" },
                            [
                              _c(
                                "div",
                                { staticClass: "col-md-10" },
                                [_c("TablaBordes")],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "row justify-content-md-center" },
                            [
                              _c(
                                "div",
                                { staticClass: "col-md-10" },
                                [_c("TablaDetalles")],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "row justify-content-md-center" },
                            [
                              _c(
                                "div",
                                { staticClass: "col-md-10" },
                                [_c("TablaElevacions")],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "row justify-content-md-center" },
                            [
                              _c(
                                "div",
                                { staticClass: "col-md-10" },
                                [_c("TablaSuperficies")],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "row justify-content-md-center" },
                            [
                              _c(
                                "div",
                                { staticClass: "col-md-10" },
                                [_c("TablaColors")],
                                1
                              )
                            ]
                          )
                        ])
                      ])
                    : _vm._e()
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row justify-content-md-center" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "main-card mb-3 card" }, [
                  _c("div", { staticClass: "card-header-tab card-header" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "btn-actions-pane-right actions-icon-btn"
                      },
                      [
                        _c("img", {
                          attrs: {
                            src:
                              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAABmJLR0QA/wD/AP+gvaeTAAACOklEQVRYhe2XT2sTQRiHn9kNsUnblKoIooKXIhqTDaktagT9GP0MHrRbpNT24sFCq2gbBL+CfgTxoCi2hSataf540YuYQsV6aJuktunOeGgSwm7wsKERZZ/T8OzA+2PmZWYWPDz+R8KL5vFIdqK/kzW1VjKaMh/pfjbF/t5PI23OdCqMsIvw6pihS5VpdlJIIz+YzAJcWzQDFT9LCow26q7rmpb4GH/ytVk6VkZX8oTdaYiT9fGOJkMKLrYRBOCMsqyzdumzi0rIWghu+XJABEDAWjlkLdS/568mvxvLZlxq4pLrKJosZuLzS3bt2CaAcOF2j77rHwGwAvsvC+HnJdeFPTyOkJYNHEuN3lKCSQApxXRueO7dXwkzmB49XUV8BrprqmRJ30Bh+PEGAAoRTY9NCqHcH3qCYnCPqaXrc7vN2nHOVIUwUI0gAD0+fd8ANgDCK3fPIdRD5ToJoKB8jNfAqz+GsSxfRtcOSkBPTZWsKo3roTCY/BZdNaeEIuY6zOHKOLa+Zc9Els2baIc9gyanc/Hke9eFPTyOkJYNfOHDeK8/cDACILt+vejUre0Ic/7tg65Q79YytfcMkKv0HQx9GXi2V58TTd25rITP9QNLSdbzw08X7d5xzoT6thPIRhCASHBbTwBvAKJr905RtVYEyu82jNAglhq9kRmaX2j2jmenBZt2p5T4UR93l60d4JPbIDWKQteLjpCtZhppc0bBOICC2dyVufttFm+PSHaiv9P/TR4e/zS/AX4ptkIOwCnsAAAAAElFTkSuQmCC"
                          },
                          on: { click: _vm.mostrarTablasCaractMicro }
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.tablasCaractMicro
                    ? _c("div", { staticClass: "card-body" }, [
                        _c("div", { staticClass: "container" }, [
                          _c(
                            "div",
                            { staticClass: "row justify-content-md-center" },
                            [
                              _c(
                                "div",
                                { staticClass: "col-md-10" },
                                [_c("TablaFormasMicro")],
                                1
                              )
                            ]
                          )
                        ])
                      ])
                    : _vm._e()
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row justify-content-md-center" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "main-card mb-3 card" }, [
                  _c("div", { staticClass: "card-header-tab card-header" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "btn-actions-pane-right actions-icon-btn"
                      },
                      [
                        _c("img", {
                          attrs: {
                            src:
                              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAABmJLR0QA/wD/AP+gvaeTAAACOklEQVRYhe2XT2sTQRiHn9kNsUnblKoIooKXIhqTDaktagT9GP0MHrRbpNT24sFCq2gbBL+CfgTxoCi2hSataf540YuYQsV6aJuktunOeGgSwm7wsKERZZ/T8OzA+2PmZWYWPDz+R8KL5vFIdqK/kzW1VjKaMh/pfjbF/t5PI23OdCqMsIvw6pihS5VpdlJIIz+YzAJcWzQDFT9LCow26q7rmpb4GH/ytVk6VkZX8oTdaYiT9fGOJkMKLrYRBOCMsqyzdumzi0rIWghu+XJABEDAWjlkLdS/568mvxvLZlxq4pLrKJosZuLzS3bt2CaAcOF2j77rHwGwAvsvC+HnJdeFPTyOkJYNHEuN3lKCSQApxXRueO7dXwkzmB49XUV8BrprqmRJ30Bh+PEGAAoRTY9NCqHcH3qCYnCPqaXrc7vN2nHOVIUwUI0gAD0+fd8ANgDCK3fPIdRD5ToJoKB8jNfAqz+GsSxfRtcOSkBPTZWsKo3roTCY/BZdNaeEIuY6zOHKOLa+Zc9Els2baIc9gyanc/Hke9eFPTyOkJYNfOHDeK8/cDACILt+vejUre0Ic/7tg65Q79YytfcMkKv0HQx9GXi2V58TTd25rITP9QNLSdbzw08X7d5xzoT6thPIRhCASHBbTwBvAKJr905RtVYEyu82jNAglhq9kRmaX2j2jmenBZt2p5T4UR93l60d4JPbIDWKQteLjpCtZhppc0bBOICC2dyVufttFm+PSHaiv9P/TR4e/zS/AX4ptkIOwCnsAAAAAElFTkSuQmCC"
                          },
                          on: { click: _vm.mostrarTablasMetodos }
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.tablasMetodos
                    ? _c("div", { staticClass: "card-body" }, [
                        _c("div", { staticClass: "container" }, [
                          _c(
                            "div",
                            { staticClass: "row justify-content-md-center" },
                            [
                              _c(
                                "div",
                                { staticClass: "col-md-10" },
                                [_c("TablaMetodos")],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "row justify-content-md-center" },
                            [
                              _c(
                                "div",
                                { staticClass: "col-md-10" },
                                [_c("TablaAgars")],
                                1
                              )
                            ]
                          )
                        ])
                      ])
                    : _vm._e()
                ])
              ])
            ])
          ]
        : [_vm._m(3)],
      _vm._v(" "),
      _c("ModalOtraInfoBacteria")
    ],
    2
  )
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
        _vm._v(
          "\n              Tablas Dinámicas Características Macroscópicas\n            "
        )
      ]
    )
  },
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
        _vm._v(
          "\n              Tablas Dinamicas Características Microscópicas\n            "
        )
      ]
    )
  },
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
        _vm._v(
          "\n              Tablas Dinamicas Métodos De Conservación\n            "
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-12 d-flex justify-content-center mt-5" },
        [
          _c("div", { staticClass: "loader mt-5" }, [
            _c("div", { staticClass: "ball-spin-fade-loader mt-5" }, [
              _c("div"),
              _vm._v(" "),
              _c("div"),
              _vm._v(" "),
              _c("div"),
              _vm._v(" "),
              _c("div"),
              _vm._v(" "),
              _c("div"),
              _vm._v(" "),
              _c("div"),
              _vm._v(" "),
              _c("div"),
              _vm._v(" "),
              _c("div")
            ])
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/ModalesComponent.vue?vue&type=template&id=1c929ff6&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/bacterias/ModalesComponent.vue?vue&type=template&id=1c929ff6& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "modal",
        {
          attrs: {
            name: "modal_agregar_tipo_bacteria",
            classes: "my_modal",
            width: 450,
            height: 450
          },
          on: { "before-open": _vm.beforeOpenAgregar }
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
                [_vm._v("Agregar " + _vm._s(_vm.primeraMayus(_vm.modal.tipo)))]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("modal_agregar_tipo_bacteria")
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
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "nombre" } }, [_vm._v("Nombre")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.modal.nombre,
                      expression: "modal.nombre"
                    }
                  ],
                  staticClass: "form-control",
                  class: [
                    "form-control",
                    _vm.validarNombre || _vm.errors ? "is-invalid" : ""
                  ],
                  attrs: {
                    name: "nombre",
                    id: "nombre",
                    placeholder: "...",
                    type: "text"
                  },
                  domProps: { value: _vm.modal.nombre },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.modal, "nombre", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.validarNombre || _vm.errors
                  ? _c("em", { staticClass: "error invalid-feedback" }, [
                      _vm._v(
                        _vm._s(
                          _vm.errors.nombre ? _vm.errors.nombre[0] : _vm.errors
                        )
                      )
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
                      return _vm.$modal.hide("modal_agregar_tipo_bacteria")
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
                    disabled: _vm.validarBtn || _vm.bloquearBtnModal
                  },
                  on: { click: _vm.agregarTipo }
                },
                [_vm._v("Agregar")]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            name: "modal_editar_tipo_bacteria",
            classes: "my_modal",
            width: 400,
            height: 450
          },
          on: { "before-open": _vm.beforeOpenEditar, closed: _vm.closeEditar }
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
                [_vm._v("Editar " + _vm._s(_vm.primeraMayus(_vm.modal.tipo)))]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("modal_editar_tipo_bacteria")
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
              _c("div", { staticClass: "position-relative form-group" }, [
                _c("label", { attrs: { for: "nombre" } }, [_vm._v("Nombre")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.modal.nombre,
                      expression: "modal.nombre"
                    }
                  ],
                  class: [
                    "form-control",
                    _vm.validarNombre || _vm.errors ? "is-invalid" : ""
                  ],
                  attrs: {
                    name: "nombre",
                    id: "nombre",
                    placeholder: "...",
                    type: "text"
                  },
                  domProps: { value: _vm.modal.nombre },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.modal, "nombre", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.validarNombre || _vm.errors
                  ? _c("em", { staticClass: "error invalid-feedback" }, [
                      _vm._v(
                        _vm._s(
                          _vm.errors.nombre ? _vm.errors.nombre[0] : _vm.errors
                        )
                      )
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
                      return _vm.$modal.hide("modal_editar_tipo_bacteria")
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
                    disabled: _vm.validarBtn || _vm.bloquearBtnModal
                  },
                  on: { click: _vm.editarTipo }
                },
                [_vm._v("Editar")]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            name: "modal_eliminar_tipo_bacteria",
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
                [_vm._v("Eliminar " + _vm._s(_vm.primeraMayus(_vm.modal.tipo)))]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$modal.hide("modal_eliminar_tipo_bacteria")
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
              _c("p", [
                _vm._v(
                  "Esta segura/o de eliminar el/la " +
                    _vm._s(_vm.primeraMayus(_vm.modal.tipo)) +
                    "?."
                )
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
                      return _vm.$modal.hide("modal_eliminar_tipo_bacteria")
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
                  attrs: { type: "button", disabled: _vm.bloquearBtnModal },
                  on: { click: _vm.eliminarTipo }
                },
                [_vm._v("Eliminar")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/bordes/TablaBordesComponent.vue?vue&type=template&id=5f8b30e4&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/bacterias/bordes/TablaBordesComponent.vue?vue&type=template&id=5f8b30e4& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "main-card mb-3 card" }, [
      _c("div", { staticClass: "card-header-tab card-header" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "btn-actions-pane-right actions-icon-btn" },
          [
            _c("AccionMostrar", {
              attrs: { tipoModal: "bacteria", tipo: "borde" },
              on: { mostrarTabla: _vm.mostrarTabla }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.tabla
        ? _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.siHayDatos
                ? [
                    _c("MyVuetable", {
                      ref: "tabla",
                      attrs: {
                        "api-url": "/info-panel/bordes-bacteria",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "bordes-bacteria"
                      }
                    })
                  ]
                : [_vm._m(1)]
            ],
            2
          )
        : _vm._e()
    ])
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
        _vm._v("\n        Tabla Dinámica Bordes\n      ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h5", { staticClass: "mt-5 mb-5" }, [
        _c("span", { staticClass: "pr-1" }, [
          _c("b", { staticClass: "text-success" }, [
            _vm._v("AÚN NO SE HAN AGREGADO BORDES")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/colors/TablaColorsComponent.vue?vue&type=template&id=2c7436c4&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/bacterias/colors/TablaColorsComponent.vue?vue&type=template&id=2c7436c4& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "main-card mb-3 card" }, [
      _c("div", { staticClass: "card-header-tab card-header" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "btn-actions-pane-right actions-icon-btn" },
          [
            _c("AccionMostrar", {
              attrs: { tipoModal: "bacteria", tipo: "color" },
              on: { mostrarTabla: _vm.mostrarTabla }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.tabla
        ? _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.siHayDatos
                ? [
                    _c("MyVuetable", {
                      ref: "tabla",
                      attrs: {
                        "api-url": "/info-panel/colors-bacteria",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "colors-bacteria"
                      }
                    })
                  ]
                : [_vm._m(1)]
            ],
            2
          )
        : _vm._e()
    ])
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
        _vm._v("\n        Tabla Dinámica Colores\n      ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h5", { staticClass: "mt-5 mb-5" }, [
        _c("span", { staticClass: "pr-1" }, [
          _c("b", { staticClass: "text-success" }, [
            _vm._v("AÚN NO SE HAN AGREGADO COLORES")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/detalles/TablaDetallesComponent.vue?vue&type=template&id=7b0fbc86&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/bacterias/detalles/TablaDetallesComponent.vue?vue&type=template&id=7b0fbc86& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "main-card mb-3 card" }, [
      _c("div", { staticClass: "card-header-tab card-header" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "btn-actions-pane-right actions-icon-btn" },
          [
            _c("AccionMostrar", {
              attrs: { tipoModal: "bacteria", tipo: "detalle" },
              on: { mostrarTabla: _vm.mostrarTabla }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.tabla
        ? _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.siHayDatos
                ? [
                    _c("MyVuetable", {
                      ref: "tabla",
                      attrs: {
                        "api-url": "/info-panel/detalles-bacteria",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "detalles-bacteria"
                      }
                    })
                  ]
                : [_vm._m(1)]
            ],
            2
          )
        : _vm._e()
    ])
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
        _vm._v("\n        Tabla Dinámica Detalles Ópticos\n      ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h5", { staticClass: "mt-5 mb-5" }, [
        _c("span", { staticClass: "pr-1" }, [
          _c("b", { staticClass: "text-success" }, [
            _vm._v("AÚN NO SE HAN AGREGADO DETALLES ÓPTICOS")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/elevacions/TablaElevacionsComponent.vue?vue&type=template&id=ed80ba18&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/bacterias/elevacions/TablaElevacionsComponent.vue?vue&type=template&id=ed80ba18& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "main-card mb-3 card" }, [
      _c("div", { staticClass: "card-header-tab card-header" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "btn-actions-pane-right actions-icon-btn" },
          [
            _c("AccionMostrar", {
              attrs: { tipoModal: "bacteria", tipo: "elevacion" },
              on: { mostrarTabla: _vm.mostrarTabla }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.tabla
        ? _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.siHayDatos
                ? [
                    _c("MyVuetable", {
                      ref: "tabla",
                      attrs: {
                        "api-url": "/info-panel/elevacions-bacteria",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "elevacions-bacteria"
                      }
                    })
                  ]
                : [_vm._m(1)]
            ],
            2
          )
        : _vm._e()
    ])
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
        _vm._v("\n        Tabla Dinámica Elevaciones\n      ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h5", { staticClass: "mt-5 mb-5" }, [
        _c("span", { staticClass: "pr-1" }, [
          _c("b", { staticClass: "text-success" }, [
            _vm._v("AÚN NO SE HAN AGREGADO ELEVACIONES")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/formas-macro/TablaFormasMacroComponent.vue?vue&type=template&id=40232dcb&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/bacterias/formas-macro/TablaFormasMacroComponent.vue?vue&type=template&id=40232dcb& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "main-card mb-3 card" }, [
      _c("div", { staticClass: "card-header-tab card-header" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "btn-actions-pane-right actions-icon-btn" },
          [
            _c("AccionMostrar", {
              attrs: { tipoModal: "bacteria", tipo: "forma_macro" },
              on: { mostrarTabla: _vm.mostrarTabla }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.tabla
        ? _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.siHayDatos
                ? [
                    _c("MyVuetable", {
                      ref: "tabla",
                      attrs: {
                        "api-url": "/info-panel/formas-macro-bacteria",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "formas-macro-bacteria"
                      }
                    })
                  ]
                : [_vm._m(1)]
            ],
            2
          )
        : _vm._e()
    ])
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
        _vm._v("\n        Tabla Dinámica Formas\n      ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h5", { staticClass: "mt-5 mb-5" }, [
        _c("span", { staticClass: "pr-1" }, [
          _c("b", { staticClass: "text-success" }, [
            _vm._v("AÚN NO SE HAN AGREGADO FORMAS")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/formas-micro/TablaFormasMicroComponent.vue?vue&type=template&id=a31f826a&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/bacterias/formas-micro/TablaFormasMicroComponent.vue?vue&type=template&id=a31f826a& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "main-card mb-3 card" }, [
      _c("div", { staticClass: "card-header-tab card-header" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "btn-actions-pane-right actions-icon-btn" },
          [
            _c("AccionMostrar", {
              attrs: { tipoModal: "bacteria", tipo: "forma_micro" },
              on: { mostrarTabla: _vm.mostrarTabla }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.tabla
        ? _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.siHayDatos
                ? [
                    _c("MyVuetable", {
                      ref: "tabla",
                      attrs: {
                        "api-url": "/info-panel/formas-micro-bacteria",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "formas-micro-bacteria"
                      }
                    })
                  ]
                : [_vm._m(1)]
            ],
            2
          )
        : _vm._e()
    ])
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
        _vm._v("\n        Tabla Dinámica Formas\n      ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h5", { staticClass: "mt-5 mb-5" }, [
        _c("span", { staticClass: "pr-1" }, [
          _c("b", { staticClass: "text-success" }, [
            _vm._v("AÚN NO SE HAN AGREGADO FORMAS")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/superficies/TablaSuperficiesComponent.vue?vue&type=template&id=45e41914&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/bacterias/superficies/TablaSuperficiesComponent.vue?vue&type=template&id=45e41914& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "main-card mb-3 card" }, [
      _c("div", { staticClass: "card-header-tab card-header" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "btn-actions-pane-right actions-icon-btn" },
          [
            _c("AccionMostrar", {
              attrs: { tipoModal: "bacteria", tipo: "superficie" },
              on: { mostrarTabla: _vm.mostrarTabla }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.tabla
        ? _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.siHayDatos
                ? [
                    _c("MyVuetable", {
                      ref: "tabla",
                      attrs: {
                        "api-url": "/info-panel/superficies-bacteria",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "superficies-bacteria"
                      }
                    })
                  ]
                : [_vm._m(1)]
            ],
            2
          )
        : _vm._e()
    ])
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
        _vm._v("\n        Tabla Dinámica Superficies\n      ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h5", { staticClass: "mt-5 mb-5" }, [
        _c("span", { staticClass: "pr-1" }, [
          _c("b", { staticClass: "text-success" }, [
            _vm._v("AÚN NO SE HAN AGREGADO SUPERFICIES")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/tipos-agars/TablaTiposAgarsComponent.vue?vue&type=template&id=3c6278aa&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/bacterias/tipos-agars/TablaTiposAgarsComponent.vue?vue&type=template&id=3c6278aa& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "main-card mb-3 card" }, [
      _c("div", { staticClass: "card-header-tab card-header" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "btn-actions-pane-right actions-icon-btn" },
          [
            _c("AccionMostrar", {
              attrs: { tipoModal: "bacteria", tipo: "tipo_agar" },
              on: { mostrarTabla: _vm.mostrarTabla }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.tabla
        ? _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.siHayDatos
                ? [
                    _c("MyVuetable", {
                      ref: "tabla",
                      attrs: {
                        "api-url": "/info-panel/tipos-agars-bacteria",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "tipos-agars-bacteria"
                      }
                    })
                  ]
                : [_vm._m(1)]
            ],
            2
          )
        : _vm._e()
    ])
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
        _vm._v("\n        Tabla Dinámica Tipos Agars\n      ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h5", { staticClass: "mt-5 mb-5" }, [
        _c("span", { staticClass: "pr-1" }, [
          _c("b", { staticClass: "text-success" }, [
            _vm._v("AÚN NO SE HAN AGREGADO TIPOS DE AGARS")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=template&id=04613e79&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/bacterias/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=template&id=04613e79& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "main-card mb-3 card" }, [
      _c("div", { staticClass: "card-header-tab card-header" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "btn-actions-pane-right actions-icon-btn" },
          [
            _c("AccionMostrar", {
              attrs: { tipoModal: "bacteria", tipo: "tipo_metodo" },
              on: { mostrarTabla: _vm.mostrarTabla }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.tabla
        ? _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.siHayDatos
                ? [
                    _c("MyVuetable", {
                      ref: "tabla",
                      attrs: {
                        "api-url": "/info-panel/tipos-metodos-bacteria",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "tipos-metodos-bacteria"
                      }
                    })
                  ]
                : [_vm._m(1)]
            ],
            2
          )
        : _vm._e()
    ])
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
        _vm._v("\n        Tabla Dinámica Tipos Metodos\n      ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h5", { staticClass: "mt-5 mb-5" }, [
        _c("span", { staticClass: "pr-1" }, [
          _c("b", { staticClass: "text-success" }, [
            _vm._v("AÚN NO SE HAN AGREGADO TIPOS DE METODOS")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/otra-info/BacteriasComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/otra-info/BacteriasComponent.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BacteriasComponent_vue_vue_type_template_id_6b964472___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BacteriasComponent.vue?vue&type=template&id=6b964472& */ "./resources/js/components/otra-info/BacteriasComponent.vue?vue&type=template&id=6b964472&");
/* harmony import */ var _BacteriasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BacteriasComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/BacteriasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BacteriasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BacteriasComponent_vue_vue_type_template_id_6b964472___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BacteriasComponent_vue_vue_type_template_id_6b964472___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/BacteriasComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/BacteriasComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/otra-info/BacteriasComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BacteriasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BacteriasComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/BacteriasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BacteriasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/BacteriasComponent.vue?vue&type=template&id=6b964472&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/BacteriasComponent.vue?vue&type=template&id=6b964472& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BacteriasComponent_vue_vue_type_template_id_6b964472___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BacteriasComponent.vue?vue&type=template&id=6b964472& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/BacteriasComponent.vue?vue&type=template&id=6b964472&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BacteriasComponent_vue_vue_type_template_id_6b964472___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BacteriasComponent_vue_vue_type_template_id_6b964472___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/ModalesComponent.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/ModalesComponent.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalesComponent_vue_vue_type_template_id_1c929ff6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalesComponent.vue?vue&type=template&id=1c929ff6& */ "./resources/js/components/otra-info/tablas/bacterias/ModalesComponent.vue?vue&type=template&id=1c929ff6&");
/* harmony import */ var _ModalesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/bacterias/ModalesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalesComponent_vue_vue_type_template_id_1c929ff6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalesComponent_vue_vue_type_template_id_1c929ff6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/bacterias/ModalesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/ModalesComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/ModalesComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/ModalesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/ModalesComponent.vue?vue&type=template&id=1c929ff6&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/ModalesComponent.vue?vue&type=template&id=1c929ff6& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalesComponent_vue_vue_type_template_id_1c929ff6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalesComponent.vue?vue&type=template&id=1c929ff6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/ModalesComponent.vue?vue&type=template&id=1c929ff6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalesComponent_vue_vue_type_template_id_1c929ff6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalesComponent_vue_vue_type_template_id_1c929ff6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/bordes/TablaBordesComponent.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/bordes/TablaBordesComponent.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaBordesComponent_vue_vue_type_template_id_5f8b30e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaBordesComponent.vue?vue&type=template&id=5f8b30e4& */ "./resources/js/components/otra-info/tablas/bacterias/bordes/TablaBordesComponent.vue?vue&type=template&id=5f8b30e4&");
/* harmony import */ var _TablaBordesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaBordesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/bacterias/bordes/TablaBordesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaBordesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaBordesComponent_vue_vue_type_template_id_5f8b30e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaBordesComponent_vue_vue_type_template_id_5f8b30e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/bacterias/bordes/TablaBordesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/bordes/TablaBordesComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/bordes/TablaBordesComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaBordesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaBordesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/bordes/TablaBordesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaBordesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/bordes/TablaBordesComponent.vue?vue&type=template&id=5f8b30e4&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/bordes/TablaBordesComponent.vue?vue&type=template&id=5f8b30e4& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaBordesComponent_vue_vue_type_template_id_5f8b30e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaBordesComponent.vue?vue&type=template&id=5f8b30e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/bordes/TablaBordesComponent.vue?vue&type=template&id=5f8b30e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaBordesComponent_vue_vue_type_template_id_5f8b30e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaBordesComponent_vue_vue_type_template_id_5f8b30e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/bordes/columnas.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/bordes/columnas.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "nombre",
  sortField: "nombre",
  title: "Nombre",
  titleClass: "text-center"
}, {
  name: "__component:acciones_bordes_bacteria",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/colors/TablaColorsComponent.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/colors/TablaColorsComponent.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaColorsComponent_vue_vue_type_template_id_2c7436c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaColorsComponent.vue?vue&type=template&id=2c7436c4& */ "./resources/js/components/otra-info/tablas/bacterias/colors/TablaColorsComponent.vue?vue&type=template&id=2c7436c4&");
/* harmony import */ var _TablaColorsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaColorsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/bacterias/colors/TablaColorsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaColorsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaColorsComponent_vue_vue_type_template_id_2c7436c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaColorsComponent_vue_vue_type_template_id_2c7436c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/bacterias/colors/TablaColorsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/colors/TablaColorsComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/colors/TablaColorsComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaColorsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaColorsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/colors/TablaColorsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaColorsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/colors/TablaColorsComponent.vue?vue&type=template&id=2c7436c4&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/colors/TablaColorsComponent.vue?vue&type=template&id=2c7436c4& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaColorsComponent_vue_vue_type_template_id_2c7436c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaColorsComponent.vue?vue&type=template&id=2c7436c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/colors/TablaColorsComponent.vue?vue&type=template&id=2c7436c4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaColorsComponent_vue_vue_type_template_id_2c7436c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaColorsComponent_vue_vue_type_template_id_2c7436c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/colors/columnas.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/colors/columnas.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "nombre",
  sortField: "nombre",
  title: "Nombre",
  titleClass: "text-center"
}, {
  name: "__component:acciones_colors_bacteria",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/detalles/TablaDetallesComponent.vue":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/detalles/TablaDetallesComponent.vue ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaDetallesComponent_vue_vue_type_template_id_7b0fbc86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaDetallesComponent.vue?vue&type=template&id=7b0fbc86& */ "./resources/js/components/otra-info/tablas/bacterias/detalles/TablaDetallesComponent.vue?vue&type=template&id=7b0fbc86&");
/* harmony import */ var _TablaDetallesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaDetallesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/bacterias/detalles/TablaDetallesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaDetallesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaDetallesComponent_vue_vue_type_template_id_7b0fbc86___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaDetallesComponent_vue_vue_type_template_id_7b0fbc86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/bacterias/detalles/TablaDetallesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/detalles/TablaDetallesComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/detalles/TablaDetallesComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaDetallesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaDetallesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/detalles/TablaDetallesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaDetallesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/detalles/TablaDetallesComponent.vue?vue&type=template&id=7b0fbc86&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/detalles/TablaDetallesComponent.vue?vue&type=template&id=7b0fbc86& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaDetallesComponent_vue_vue_type_template_id_7b0fbc86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaDetallesComponent.vue?vue&type=template&id=7b0fbc86& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/detalles/TablaDetallesComponent.vue?vue&type=template&id=7b0fbc86&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaDetallesComponent_vue_vue_type_template_id_7b0fbc86___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaDetallesComponent_vue_vue_type_template_id_7b0fbc86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/detalles/columnas.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/detalles/columnas.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "nombre",
  sortField: "nombre",
  title: "Nombre",
  titleClass: "text-center"
}, {
  name: "__component:acciones_detalles_bacteria",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/elevacions/TablaElevacionsComponent.vue":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/elevacions/TablaElevacionsComponent.vue ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaElevacionsComponent_vue_vue_type_template_id_ed80ba18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaElevacionsComponent.vue?vue&type=template&id=ed80ba18& */ "./resources/js/components/otra-info/tablas/bacterias/elevacions/TablaElevacionsComponent.vue?vue&type=template&id=ed80ba18&");
/* harmony import */ var _TablaElevacionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaElevacionsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/bacterias/elevacions/TablaElevacionsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaElevacionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaElevacionsComponent_vue_vue_type_template_id_ed80ba18___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaElevacionsComponent_vue_vue_type_template_id_ed80ba18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/bacterias/elevacions/TablaElevacionsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/elevacions/TablaElevacionsComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/elevacions/TablaElevacionsComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaElevacionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaElevacionsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/elevacions/TablaElevacionsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaElevacionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/elevacions/TablaElevacionsComponent.vue?vue&type=template&id=ed80ba18&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/elevacions/TablaElevacionsComponent.vue?vue&type=template&id=ed80ba18& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaElevacionsComponent_vue_vue_type_template_id_ed80ba18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaElevacionsComponent.vue?vue&type=template&id=ed80ba18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/elevacions/TablaElevacionsComponent.vue?vue&type=template&id=ed80ba18&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaElevacionsComponent_vue_vue_type_template_id_ed80ba18___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaElevacionsComponent_vue_vue_type_template_id_ed80ba18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/elevacions/columnas.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/elevacions/columnas.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "nombre",
  sortField: "nombre",
  title: "Nombre",
  titleClass: "text-center"
}, {
  name: "__component:acciones_elevacions_bacteria",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/formas-macro/TablaFormasMacroComponent.vue":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/formas-macro/TablaFormasMacroComponent.vue ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaFormasMacroComponent_vue_vue_type_template_id_40232dcb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaFormasMacroComponent.vue?vue&type=template&id=40232dcb& */ "./resources/js/components/otra-info/tablas/bacterias/formas-macro/TablaFormasMacroComponent.vue?vue&type=template&id=40232dcb&");
/* harmony import */ var _TablaFormasMacroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaFormasMacroComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/bacterias/formas-macro/TablaFormasMacroComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaFormasMacroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaFormasMacroComponent_vue_vue_type_template_id_40232dcb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaFormasMacroComponent_vue_vue_type_template_id_40232dcb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/bacterias/formas-macro/TablaFormasMacroComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/formas-macro/TablaFormasMacroComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/formas-macro/TablaFormasMacroComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaFormasMacroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaFormasMacroComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/formas-macro/TablaFormasMacroComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaFormasMacroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/formas-macro/TablaFormasMacroComponent.vue?vue&type=template&id=40232dcb&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/formas-macro/TablaFormasMacroComponent.vue?vue&type=template&id=40232dcb& ***!
  \**************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaFormasMacroComponent_vue_vue_type_template_id_40232dcb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaFormasMacroComponent.vue?vue&type=template&id=40232dcb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/formas-macro/TablaFormasMacroComponent.vue?vue&type=template&id=40232dcb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaFormasMacroComponent_vue_vue_type_template_id_40232dcb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaFormasMacroComponent_vue_vue_type_template_id_40232dcb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/formas-macro/columnas.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/formas-macro/columnas.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "nombre",
  sortField: "nombre",
  title: "Nombre",
  titleClass: "text-center"
}, {
  name: "__component:acciones_formas_macro_bacteria",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/formas-micro/TablaFormasMicroComponent.vue":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/formas-micro/TablaFormasMicroComponent.vue ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaFormasMicroComponent_vue_vue_type_template_id_a31f826a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaFormasMicroComponent.vue?vue&type=template&id=a31f826a& */ "./resources/js/components/otra-info/tablas/bacterias/formas-micro/TablaFormasMicroComponent.vue?vue&type=template&id=a31f826a&");
/* harmony import */ var _TablaFormasMicroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaFormasMicroComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/bacterias/formas-micro/TablaFormasMicroComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaFormasMicroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaFormasMicroComponent_vue_vue_type_template_id_a31f826a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaFormasMicroComponent_vue_vue_type_template_id_a31f826a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/bacterias/formas-micro/TablaFormasMicroComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/formas-micro/TablaFormasMicroComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/formas-micro/TablaFormasMicroComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaFormasMicroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaFormasMicroComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/formas-micro/TablaFormasMicroComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaFormasMicroComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/formas-micro/TablaFormasMicroComponent.vue?vue&type=template&id=a31f826a&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/formas-micro/TablaFormasMicroComponent.vue?vue&type=template&id=a31f826a& ***!
  \**************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaFormasMicroComponent_vue_vue_type_template_id_a31f826a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaFormasMicroComponent.vue?vue&type=template&id=a31f826a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/formas-micro/TablaFormasMicroComponent.vue?vue&type=template&id=a31f826a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaFormasMicroComponent_vue_vue_type_template_id_a31f826a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaFormasMicroComponent_vue_vue_type_template_id_a31f826a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/formas-micro/columnas.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/formas-micro/columnas.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "nombre",
  sortField: "nombre",
  title: "Nombre",
  titleClass: "text-center"
}, {
  name: "__component:acciones_formas_micro_bacteria",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/superficies/TablaSuperficiesComponent.vue":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/superficies/TablaSuperficiesComponent.vue ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaSuperficiesComponent_vue_vue_type_template_id_45e41914___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaSuperficiesComponent.vue?vue&type=template&id=45e41914& */ "./resources/js/components/otra-info/tablas/bacterias/superficies/TablaSuperficiesComponent.vue?vue&type=template&id=45e41914&");
/* harmony import */ var _TablaSuperficiesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaSuperficiesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/bacterias/superficies/TablaSuperficiesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaSuperficiesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaSuperficiesComponent_vue_vue_type_template_id_45e41914___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaSuperficiesComponent_vue_vue_type_template_id_45e41914___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/bacterias/superficies/TablaSuperficiesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/superficies/TablaSuperficiesComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/superficies/TablaSuperficiesComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaSuperficiesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaSuperficiesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/superficies/TablaSuperficiesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaSuperficiesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/superficies/TablaSuperficiesComponent.vue?vue&type=template&id=45e41914&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/superficies/TablaSuperficiesComponent.vue?vue&type=template&id=45e41914& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaSuperficiesComponent_vue_vue_type_template_id_45e41914___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaSuperficiesComponent.vue?vue&type=template&id=45e41914& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/superficies/TablaSuperficiesComponent.vue?vue&type=template&id=45e41914&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaSuperficiesComponent_vue_vue_type_template_id_45e41914___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaSuperficiesComponent_vue_vue_type_template_id_45e41914___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/superficies/columnas.js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/superficies/columnas.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "nombre",
  sortField: "nombre",
  title: "Nombre",
  titleClass: "text-center"
}, {
  name: "__component:acciones_superficies_bacteria",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/tipos-agars/TablaTiposAgarsComponent.vue":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/tipos-agars/TablaTiposAgarsComponent.vue ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaTiposAgarsComponent_vue_vue_type_template_id_3c6278aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaTiposAgarsComponent.vue?vue&type=template&id=3c6278aa& */ "./resources/js/components/otra-info/tablas/bacterias/tipos-agars/TablaTiposAgarsComponent.vue?vue&type=template&id=3c6278aa&");
/* harmony import */ var _TablaTiposAgarsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaTiposAgarsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/bacterias/tipos-agars/TablaTiposAgarsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaTiposAgarsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaTiposAgarsComponent_vue_vue_type_template_id_3c6278aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaTiposAgarsComponent_vue_vue_type_template_id_3c6278aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/bacterias/tipos-agars/TablaTiposAgarsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/tipos-agars/TablaTiposAgarsComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/tipos-agars/TablaTiposAgarsComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTiposAgarsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaTiposAgarsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/tipos-agars/TablaTiposAgarsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTiposAgarsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/tipos-agars/TablaTiposAgarsComponent.vue?vue&type=template&id=3c6278aa&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/tipos-agars/TablaTiposAgarsComponent.vue?vue&type=template&id=3c6278aa& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTiposAgarsComponent_vue_vue_type_template_id_3c6278aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaTiposAgarsComponent.vue?vue&type=template&id=3c6278aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/tipos-agars/TablaTiposAgarsComponent.vue?vue&type=template&id=3c6278aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTiposAgarsComponent_vue_vue_type_template_id_3c6278aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTiposAgarsComponent_vue_vue_type_template_id_3c6278aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/tipos-agars/columnas.js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/tipos-agars/columnas.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "nombre",
  sortField: "nombre",
  title: "Nombre",
  titleClass: "text-center"
}, {
  name: "__component:acciones_tipos_agars_bacteria",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/tipos-metodos/TablaTiposMetodosComponent.vue":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/tipos-metodos/TablaTiposMetodosComponent.vue ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaTiposMetodosComponent_vue_vue_type_template_id_04613e79___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaTiposMetodosComponent.vue?vue&type=template&id=04613e79& */ "./resources/js/components/otra-info/tablas/bacterias/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=template&id=04613e79&");
/* harmony import */ var _TablaTiposMetodosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaTiposMetodosComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/bacterias/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaTiposMetodosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaTiposMetodosComponent_vue_vue_type_template_id_04613e79___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaTiposMetodosComponent_vue_vue_type_template_id_04613e79___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/bacterias/tipos-metodos/TablaTiposMetodosComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTiposMetodosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaTiposMetodosComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTiposMetodosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=template&id=04613e79&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=template&id=04613e79& ***!
  \****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTiposMetodosComponent_vue_vue_type_template_id_04613e79___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaTiposMetodosComponent.vue?vue&type=template&id=04613e79& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/bacterias/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=template&id=04613e79&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTiposMetodosComponent_vue_vue_type_template_id_04613e79___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTiposMetodosComponent_vue_vue_type_template_id_04613e79___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/bacterias/tipos-metodos/columnas.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/bacterias/tipos-metodos/columnas.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "nombre",
  sortField: "nombre",
  title: "Nombre",
  titleClass: "text-center"
}, {
  name: "__component:acciones_tipos_metodos_bacteria",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ })

}]);