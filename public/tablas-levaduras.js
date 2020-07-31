(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tablas-levaduras"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/LevadurasComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/LevadurasComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_websocketsOtraInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/websocketsOtraInfo */ "./resources/js/mixins/websocketsOtraInfo.js");
/* harmony import */ var _tablas_levaduras_ModalesComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tablas/levaduras/ModalesComponent.vue */ "./resources/js/components/otra-info/tablas/levaduras/ModalesComponent.vue");
/* harmony import */ var _tablas_levaduras_tipos_metodos_TablaTiposMetodosComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tablas/levaduras/tipos-metodos/TablaTiposMetodosComponent.vue */ "./resources/js/components/otra-info/tablas/levaduras/tipos-metodos/TablaTiposMetodosComponent.vue");
/* harmony import */ var _tablas_levaduras_colors_TablaColorsComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tablas/levaduras/colors/TablaColorsComponent.vue */ "./resources/js/components/otra-info/tablas/levaduras/colors/TablaColorsComponent.vue");
/* harmony import */ var _tablas_levaduras_texturas_TablaTexturasComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tablas/levaduras/texturas/TablaTexturasComponent.vue */ "./resources/js/components/otra-info/tablas/levaduras/texturas/TablaTexturasComponent.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ModalOtraInfoLevaduras: _tablas_levaduras_ModalesComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TablaColors: _tablas_levaduras_colors_TablaColorsComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    TablaTexturas: _tablas_levaduras_texturas_TablaTexturasComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    TablaMetodos: _tablas_levaduras_tipos_metodos_TablaTiposMetodosComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      tablasCaractMacro: false,
      tablasMetodos: false
    };
  },
  mixins: [Object(_mixins_websocketsOtraInfo__WEBPACK_IMPORTED_MODULE_0__["default"])("LevadurasInfo")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_5__["default"].mapState("info_caract", ["info_caract_levaduras"])),
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_5__["default"].mapActions("info_caract", ["obtenerInfoCaractLevaduras"]), {
    mostrarTablasCaractMacro: function mostrarTablasCaractMacro() {
      this.tablasCaractMacro = !this.tablasCaractMacro;
    },
    mostrarTablasMetodos: function mostrarTablasMetodos() {
      this.tablasMetodos = !this.tablasMetodos;
    }
  }),
  created: function created() {
    var _this = this;

    this.obtenerInfoCaractLevaduras();
    this.$events.$on("verificarBloqueos-colors-levadura", function (e) {
      return _this.verificarBloqueos("color");
    });
    this.$events.$on("verificarBloqueos-texturas-levadura", function (e) {
      return _this.verificarBloqueos("textura");
    });
    this.$events.$on("verificarBloqueos-tipos-metodos-levadura", function (e) {
      return _this.verificarBloqueos("tipo_metodo");
    });
  },
  destroyed: function destroyed() {
    this.$events.$off("verificarBloqueos-colors-levadura");
    this.$events.$off("verificarBloqueos-texturas-levadura");
    this.$events.$off("verificarBloqueos-tipos-metodos-levadura");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
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
  props: ["tipoModal", "tipo"],
  methods: {
    mostrarTabla: function mostrarTabla() {
      this.$emit("mostrarTabla");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/levaduras/ModalesComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/levaduras/ModalesComponent.vue?vue&type=script&lang=js& ***!
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
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"], Object(_mixins_websocketsModalOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("LevadurasInfo")],
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("info_caract", ["accionAgregarTipoCaractLevadura", "accionEditarTipoCaractLevadura", "accionEliminarTipoCaractLevadura"]), {
    beforeOpenAgregar: function beforeOpenAgregar(data) {
      this.modal.nombre = "";
      this.modal.tipo = data.params.tipo;
    },
    agregarTipo: function agregarTipo() {
      var _this = this;

      this.bloquearBtnModal = true;
      axios.post("/info-caract-levaduras/agregar", this.modal).then(function (res) {
        if (res.request.responseURL === "http://127.0.0.1:8000/") {
          localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
          window.location.href = "/";
        } else {
          _this.bloquearBtnModal = false;

          _this.accionAgregarTipoCaractLevadura({
            info: res.data,
            tipo: _this.modal.tipo
          });

          _this.$events.fire("actualizartabla" + _this.modal.tipo);

          _this.$modal.hide("modal_agregar_tipo_levadura");

          _this.toastr("Agregar ".concat(_this.primeraMayus(_this.modal.tipo)), "".concat(_this.primeraMayus(_this.modal.tipo), " agregado/a con exito"), "success");
        }
      })["catch"](function (error) {
        _this.bloquearBtnModal = false;

        if (error.response.status === 422) {
          _this.errors = error.response.data.errors;
        }

        _this.toastr("Error!!!!", "", "error");
      });
    },
    beforeOpenEditar: function beforeOpenEditar(data) {
      this.id = data.params.id;
      this.modal.nombre = data.params.nombre;
      this.modal.tipo = data.params.tipo;
    },
    editarTipo: function editarTipo() {
      var _this2 = this;

      this.bloquearBtnModal = true;
      axios.put("/info-caract-levaduras/editar/".concat(this.id), this.modal).then(function (res) {
        if (res.request.responseURL === "http://127.0.0.1:8000/") {
          localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
          window.location.href = "/";
        } else {
          _this2.bloquearBtnModal = false;

          _this2.accionEditarTipoCaractLevadura({
            info: res.data,
            tipo: _this2.modal.tipo
          });

          _this2.$events.fire("actualizartabla" + _this2.modal.tipo);

          _this2.toastr("Editar ".concat(_this2.primeraMayus(_this2.modal.tipo)), "".concat(_this2.primeraMayus(_this2.modal.tipo), " editado/a con exito!!"), "success", 5000);

          _this2.$modal.hide("modal_editar_tipo_levadura");
        }
      })["catch"](function (error) {
        _this2.bloquearBtnModal = false;

        if (error.response.status === 422) {
          _this2.errors = error.response.data.errors;
        }

        _this2.toastr("Error!!!", "", "error", 4000);
      });
    },
    beforeOpenEliminar: function beforeOpenEliminar(data) {
      this.id = data.params.id;
      this.modal.tipo = data.params.tipo;
    },
    eliminarTipo: function eliminarTipo() {
      var _this3 = this;

      this.bloquearBtnModal = true;
      axios["delete"]("/info-caract-levaduras/eliminar/".concat(this.id), {
        data: this.modal
      }).then(function (res) {
        if (res.request.responseURL === "http://127.0.0.1:8000/") {
          localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
          window.location.href = "/";
        } else {
          _this3.bloquearBtnModal = false;

          if (res.data === "macro") {
            _this3.toastr("Precaución!!", "El/La " + _this3.modal.tipo + " se encuentra vinculado/a a características macroscópicas, favor eliminarlas", "warning", 8000);
          } else if (res.data === "metodo") {
            _this3.toastr("Precaución!!", "El " + _this3.modal.tipo + " se encuentra vinculado a metodos de conservación, favor eliminarlos", "warning", 8000);
          } else {
            _this3.accionEliminarTipoCaractLevadura({
              info: res.data,
              tipo: _this3.modal.tipo
            });

            _this3.$events.fire("actualizartabla" + _this3.modal.tipo);

            _this3.toastr("Eliminar ".concat(_this3.primeraMayus(_this3.modal.tipo)), "".concat(_this3.primeraMayus(_this3.modal.tipo), " eliminado/a con exito!!"), "success", 5000);
          }

          _this3.$modal.hide("modal_eliminar_tipo_levadura");
        }
      })["catch"](function (error) {
        _this3.bloquearBtnModal = false;

        _this3.toastr("Error!!!", "", "error", 4000);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/levaduras/colors/TablaColorsComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/levaduras/colors/TablaColorsComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/levaduras/colors/columnas.js");
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
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoCaractMacroLevaduras"]), {
    siHayDatos: function siHayDatos() {
      if (this.getInfoCaractMacroLevaduras != "" && this.getInfoCaractMacroLevaduras != null) {
        if (this.getInfoCaractMacroLevaduras.colors.length > 0) {
          return true;
        }
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/levaduras/texturas/TablaTexturasComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/levaduras/texturas/TablaTexturasComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/levaduras/texturas/columnas.js");
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
  mixins: [Object(_mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("textura")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoCaractMacroLevaduras"]), {
    siHayDatos: function siHayDatos() {
      if (this.getInfoCaractMacroLevaduras != "" && this.getInfoCaractMacroLevaduras != null) {
        if (this.getInfoCaractMacroLevaduras.texturas.length > 0) {
          return true;
        }
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/levaduras/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/levaduras/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/levaduras/tipos-metodos/columnas.js");
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
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoMetodoConserLevaduras"]), {
    siHayDatos: function siHayDatos() {
      if (this.getInfoMetodoConserLevaduras != "" && this.getInfoMetodoConserLevaduras != null) {
        if (this.getInfoMetodoConserLevaduras.tipo_metodo.length > 0) {
          return true;
        }
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/LevadurasComponent.vue?vue&type=template&id=2fc4ddbe&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/LevadurasComponent.vue?vue&type=template&id=2fc4ddbe& ***!
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
      _vm.info_caract_levaduras != ""
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
                                [_c("TablaColors")],
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
                                [_c("TablaTexturas")],
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
                          )
                        ])
                      ])
                    : _vm._e()
                ])
              ])
            ])
          ]
        : [_vm._m(2)],
      _vm._v(" "),
      _c("ModalOtraInfoLevaduras")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=template&id=07821ea6&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=template&id=07821ea6& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    _c(
      "button",
      {
        staticClass:
          "btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm",
        on: {
          click: function($event) {
            return _vm.$modal.show("modal_agregar_tipo_" + _vm.tipoModal, {
              tipo: _vm.tipo
            })
          }
        }
      },
      [_vm._v("Agregar")]
    ),
    _vm._v(" "),
    _c("img", {
      attrs: {
        src:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAABmJLR0QA/wD/AP+gvaeTAAACOklEQVRYhe2XT2sTQRiHn9kNsUnblKoIooKXIhqTDaktagT9GP0MHrRbpNT24sFCq2gbBL+CfgTxoCi2hSataf540YuYQsV6aJuktunOeGgSwm7wsKERZZ/T8OzA+2PmZWYWPDz+R8KL5vFIdqK/kzW1VjKaMh/pfjbF/t5PI23OdCqMsIvw6pihS5VpdlJIIz+YzAJcWzQDFT9LCow26q7rmpb4GH/ytVk6VkZX8oTdaYiT9fGOJkMKLrYRBOCMsqyzdumzi0rIWghu+XJABEDAWjlkLdS/568mvxvLZlxq4pLrKJosZuLzS3bt2CaAcOF2j77rHwGwAvsvC+HnJdeFPTyOkJYNHEuN3lKCSQApxXRueO7dXwkzmB49XUV8BrprqmRJ30Bh+PEGAAoRTY9NCqHcH3qCYnCPqaXrc7vN2nHOVIUwUI0gAD0+fd8ANgDCK3fPIdRD5ToJoKB8jNfAqz+GsSxfRtcOSkBPTZWsKo3roTCY/BZdNaeEIuY6zOHKOLa+Zc9Els2baIc9gyanc/Hke9eFPTyOkJYNfOHDeK8/cDACILt+vejUre0Ic/7tg65Q79YytfcMkKv0HQx9GXi2V58TTd25rITP9QNLSdbzw08X7d5xzoT6thPIRhCASHBbTwBvAKJr905RtVYEyu82jNAglhq9kRmaX2j2jmenBZt2p5T4UR93l60d4JPbIDWKQteLjpCtZhppc0bBOICC2dyVufttFm+PSHaiv9P/TR4e/zS/AX4ptkIOwCnsAAAAAElFTkSuQmCC"
      },
      on: { click: _vm.mostrarTabla }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/levaduras/ModalesComponent.vue?vue&type=template&id=645464b6&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/levaduras/ModalesComponent.vue?vue&type=template&id=645464b6& ***!
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
            name: "modal_agregar_tipo_levadura",
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
                      return _vm.$modal.hide("modal_agregar_tipo_levadura")
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
                      return _vm.$modal.hide("modal_agregar_tipo_levadura")
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
            name: "modal_editar_tipo_levadura",
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
                      return _vm.$modal.hide("modal_editar_tipo_levadura")
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
                      return _vm.$modal.hide("modal_editar_tipo_levadura")
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
            name: "modal_eliminar_tipo_levadura",
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
                      return _vm.$modal.hide("modal_eliminar_tipo_levadura")
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
                      return _vm.$modal.hide("modal_eliminar_tipo_levadura")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/levaduras/colors/TablaColorsComponent.vue?vue&type=template&id=5d24a38f&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/levaduras/colors/TablaColorsComponent.vue?vue&type=template&id=5d24a38f& ***!
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
              attrs: { tipoModal: "levadura", tipo: "color" },
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
                        "api-url": "/info-panel/colors-levadura",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "colors-levadura"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/levaduras/texturas/TablaTexturasComponent.vue?vue&type=template&id=7ca1c237&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/levaduras/texturas/TablaTexturasComponent.vue?vue&type=template&id=7ca1c237& ***!
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
              attrs: { tipoModal: "levadura", tipo: "textura" },
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
                        "api-url": "/info-panel/texturas-levadura",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "texturas-levadura"
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
        _vm._v("\n        Tabla Dinámica Texturas\n      ")
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
            _vm._v("AÚN NO SE HAN AGREGADO TEXTURAS")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/levaduras/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=template&id=919be1b0&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/levaduras/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=template&id=919be1b0& ***!
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
              attrs: { tipoModal: "levadura", tipo: "tipo_metodo" },
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
                        "api-url": "/info-panel/tipos-metodos-levadura",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "tipos-metodos-levadura"
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
            _vm._v("AÚN NO SE HAN AGREGADO METODOS")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/otra-info/LevadurasComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/otra-info/LevadurasComponent.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LevadurasComponent_vue_vue_type_template_id_2fc4ddbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LevadurasComponent.vue?vue&type=template&id=2fc4ddbe& */ "./resources/js/components/otra-info/LevadurasComponent.vue?vue&type=template&id=2fc4ddbe&");
/* harmony import */ var _LevadurasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LevadurasComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/LevadurasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LevadurasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LevadurasComponent_vue_vue_type_template_id_2fc4ddbe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LevadurasComponent_vue_vue_type_template_id_2fc4ddbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/LevadurasComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/LevadurasComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/otra-info/LevadurasComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LevadurasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LevadurasComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/LevadurasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LevadurasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/LevadurasComponent.vue?vue&type=template&id=2fc4ddbe&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/LevadurasComponent.vue?vue&type=template&id=2fc4ddbe& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LevadurasComponent_vue_vue_type_template_id_2fc4ddbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LevadurasComponent.vue?vue&type=template&id=2fc4ddbe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/LevadurasComponent.vue?vue&type=template&id=2fc4ddbe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LevadurasComponent_vue_vue_type_template_id_2fc4ddbe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LevadurasComponent_vue_vue_type_template_id_2fc4ddbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/AccionMostrar.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/AccionMostrar.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccionMostrar_vue_vue_type_template_id_07821ea6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccionMostrar.vue?vue&type=template&id=07821ea6& */ "./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=template&id=07821ea6&");
/* harmony import */ var _AccionMostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccionMostrar.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccionMostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccionMostrar_vue_vue_type_template_id_07821ea6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccionMostrar_vue_vue_type_template_id_07821ea6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/AccionMostrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccionMostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccionMostrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccionMostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=template&id=07821ea6&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=template&id=07821ea6& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccionMostrar_vue_vue_type_template_id_07821ea6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccionMostrar.vue?vue&type=template&id=07821ea6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/AccionMostrar.vue?vue&type=template&id=07821ea6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccionMostrar_vue_vue_type_template_id_07821ea6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccionMostrar_vue_vue_type_template_id_07821ea6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/levaduras/ModalesComponent.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/levaduras/ModalesComponent.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalesComponent_vue_vue_type_template_id_645464b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalesComponent.vue?vue&type=template&id=645464b6& */ "./resources/js/components/otra-info/tablas/levaduras/ModalesComponent.vue?vue&type=template&id=645464b6&");
/* harmony import */ var _ModalesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/levaduras/ModalesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalesComponent_vue_vue_type_template_id_645464b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalesComponent_vue_vue_type_template_id_645464b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/levaduras/ModalesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/levaduras/ModalesComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/levaduras/ModalesComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/levaduras/ModalesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/levaduras/ModalesComponent.vue?vue&type=template&id=645464b6&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/levaduras/ModalesComponent.vue?vue&type=template&id=645464b6& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalesComponent_vue_vue_type_template_id_645464b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalesComponent.vue?vue&type=template&id=645464b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/levaduras/ModalesComponent.vue?vue&type=template&id=645464b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalesComponent_vue_vue_type_template_id_645464b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalesComponent_vue_vue_type_template_id_645464b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/levaduras/colors/TablaColorsComponent.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/levaduras/colors/TablaColorsComponent.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaColorsComponent_vue_vue_type_template_id_5d24a38f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaColorsComponent.vue?vue&type=template&id=5d24a38f& */ "./resources/js/components/otra-info/tablas/levaduras/colors/TablaColorsComponent.vue?vue&type=template&id=5d24a38f&");
/* harmony import */ var _TablaColorsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaColorsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/levaduras/colors/TablaColorsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaColorsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaColorsComponent_vue_vue_type_template_id_5d24a38f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaColorsComponent_vue_vue_type_template_id_5d24a38f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/levaduras/colors/TablaColorsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/levaduras/colors/TablaColorsComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/levaduras/colors/TablaColorsComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaColorsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaColorsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/levaduras/colors/TablaColorsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaColorsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/levaduras/colors/TablaColorsComponent.vue?vue&type=template&id=5d24a38f&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/levaduras/colors/TablaColorsComponent.vue?vue&type=template&id=5d24a38f& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaColorsComponent_vue_vue_type_template_id_5d24a38f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaColorsComponent.vue?vue&type=template&id=5d24a38f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/levaduras/colors/TablaColorsComponent.vue?vue&type=template&id=5d24a38f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaColorsComponent_vue_vue_type_template_id_5d24a38f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaColorsComponent_vue_vue_type_template_id_5d24a38f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/levaduras/colors/columnas.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/levaduras/colors/columnas.js ***!
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
  name: "__component:acciones_colors_levadura",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/levaduras/texturas/TablaTexturasComponent.vue":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/levaduras/texturas/TablaTexturasComponent.vue ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaTexturasComponent_vue_vue_type_template_id_7ca1c237___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaTexturasComponent.vue?vue&type=template&id=7ca1c237& */ "./resources/js/components/otra-info/tablas/levaduras/texturas/TablaTexturasComponent.vue?vue&type=template&id=7ca1c237&");
/* harmony import */ var _TablaTexturasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaTexturasComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/levaduras/texturas/TablaTexturasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaTexturasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaTexturasComponent_vue_vue_type_template_id_7ca1c237___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaTexturasComponent_vue_vue_type_template_id_7ca1c237___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/levaduras/texturas/TablaTexturasComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/levaduras/texturas/TablaTexturasComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/levaduras/texturas/TablaTexturasComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTexturasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaTexturasComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/levaduras/texturas/TablaTexturasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTexturasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/levaduras/texturas/TablaTexturasComponent.vue?vue&type=template&id=7ca1c237&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/levaduras/texturas/TablaTexturasComponent.vue?vue&type=template&id=7ca1c237& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTexturasComponent_vue_vue_type_template_id_7ca1c237___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaTexturasComponent.vue?vue&type=template&id=7ca1c237& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/levaduras/texturas/TablaTexturasComponent.vue?vue&type=template&id=7ca1c237&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTexturasComponent_vue_vue_type_template_id_7ca1c237___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTexturasComponent_vue_vue_type_template_id_7ca1c237___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/levaduras/texturas/columnas.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/levaduras/texturas/columnas.js ***!
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
  name: "__component:acciones_texturas_levadura",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/levaduras/tipos-metodos/TablaTiposMetodosComponent.vue":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/levaduras/tipos-metodos/TablaTiposMetodosComponent.vue ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaTiposMetodosComponent_vue_vue_type_template_id_919be1b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaTiposMetodosComponent.vue?vue&type=template&id=919be1b0& */ "./resources/js/components/otra-info/tablas/levaduras/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=template&id=919be1b0&");
/* harmony import */ var _TablaTiposMetodosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaTiposMetodosComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/levaduras/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaTiposMetodosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaTiposMetodosComponent_vue_vue_type_template_id_919be1b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaTiposMetodosComponent_vue_vue_type_template_id_919be1b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/levaduras/tipos-metodos/TablaTiposMetodosComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/levaduras/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/levaduras/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTiposMetodosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaTiposMetodosComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/levaduras/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTiposMetodosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/levaduras/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=template&id=919be1b0&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/levaduras/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=template&id=919be1b0& ***!
  \****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTiposMetodosComponent_vue_vue_type_template_id_919be1b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaTiposMetodosComponent.vue?vue&type=template&id=919be1b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/levaduras/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=template&id=919be1b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTiposMetodosComponent_vue_vue_type_template_id_919be1b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTiposMetodosComponent_vue_vue_type_template_id_919be1b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/levaduras/tipos-metodos/columnas.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/levaduras/tipos-metodos/columnas.js ***!
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
  name: "__component:acciones_tipos_metodos_levadura",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/mixins/websocketsModalOtraInfo.js":
/*!********************************************************!*\
  !*** ./resources/js/mixins/websocketsModalOtraInfo.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var websocketsModalOtraInfo = function websocketsModalOtraInfo(tipoInfo) {
  return {
    methods: {
      closeEditar: function closeEditar() {
        window.Echo["private"]("desbloquearBtns" + tipoInfo).whisper("desbloquearBtns" + tipoInfo, {
          id: this.id,
          tipo: this.modal.tipo
        });
        this.$events.fire("eliminarMiBloqueo" + tipoInfo, {
          id: this.id,
          tipo: this.modal.tipo
        });
      },
      closeEliminar: function closeEliminar() {
        window.Echo["private"]("desbloquearBtns" + tipoInfo).whisper("desbloquearBtns" + tipoInfo, {
          id: this.id,
          tipo: this.modal.tipo
        });
        this.$events.fire("eliminarMiBloqueo" + tipoInfo, {
          id: this.id,
          tipo: this.modal.tipo
        });
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (websocketsModalOtraInfo);

/***/ }),

/***/ "./resources/js/mixins/websocketsOtraInfo.js":
/*!***************************************************!*\
  !*** ./resources/js/mixins/websocketsOtraInfo.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var websocketsOtraInfoMixin = function websocketsOtraInfoMixin(tipoInfo) {
  return {
    data: function data() {
      return {
        bloqueos: [],
        miBloqueo: null
      };
    },
    methods: {
      // Bloquear Btns
      bloquearBtnsTabla: function bloquearBtnsTabla(e) {
        this.bloqueos.push({
          idUser: e.idUser,
          id: e.id,
          tipo: e.tipo
        });
        this.$events.fire(e.id + "-bloquearBtns-" + e.tipo);
      },
      desbloquearBtnsTabla: function desbloquearBtnsTabla(e) {
        this.bloqueos.splice(this.bloqueos.findIndex(function (data) {
          return data.id === e.id && data.tipo === e.tipo;
        }), 1);
        this.$events.fire(e.id + "-desbloquearBtns-" + e.tipo);
      },
      // guardar mis bloqueos
      agregarMiBloqueo: function agregarMiBloqueo(e) {
        this.miBloqueo = {
          idUser: e.idUser,
          id: e.id,
          tipo: e.tipo
        };
      },
      eliminarMiBloqueo: function eliminarMiBloqueo(e) {
        if (e.id != 0) {
          this.miBloqueo = null;
        }
      },
      //borrar bloqueos
      borrarBloqueos: function borrarBloqueos(e) {
        var data = this.bloqueos.find(function (data) {
          return data.idUser === e.id;
        });

        if (data) {
          this.desbloquearBtnsTabla(data);
        }
      },
      // verificar bloqueos existentes
      verificarBloqueos: function verificarBloqueos(tipo) {
        for (var index = 0; index < this.bloqueos.length; index++) {
          if (this.bloqueos[index].tipo == tipo) {
            this.$events.fire(this.bloqueos[index].id + "-bloquearBtns-" + tipo);
          }
        }
      },
      enviarBloqueos: function enviarBloqueos() {
        window.Echo["private"]("recibirBtns" + tipoInfo).whisper("recibirBtns" + tipoInfo, {
          miBloqueo: this.miBloqueo
        });
      }
    },
    mounted: function mounted() {
      var _this = this;

      window.Echo.join(tipoInfo).joining(function (data) {
        if (_this.miBloqueo) {
          _this.enviarBloqueos();
        }
      }).leaving(function (data) {
        _this.borrarBloqueos(data.user);
      });
      window.Echo["private"]("bloquearBtns" + tipoInfo).listenForWhisper("bloquearBtns" + tipoInfo, function (e) {
        _this.bloquearBtnsTabla(e);
      });
      window.Echo["private"]("desbloquearBtns" + tipoInfo).listenForWhisper("desbloquearBtns" + tipoInfo, function (e) {
        if (e.id != 0) {
          _this.desbloquearBtnsTabla(e);
        }
      });
    },
    created: function created() {
      var _this2 = this;

      this.$emit("rutaHijo", window.location.pathname);
      window.Echo["private"]("recibirBtns" + tipoInfo).listenForWhisper("recibirBtns" + tipoInfo, function (e) {
        if (e.miBloqueo) {
          _this2.bloquearBtnsTabla(e.miBloqueo);
        }
      });
      this.$events.$on("agregarMiBloqueo" + tipoInfo, function (e) {
        _this2.agregarMiBloqueo(e);
      });
      this.$events.$on("eliminarMiBloqueo" + tipoInfo, function (e) {
        _this2.eliminarMiBloqueo(e);
      });
    },
    destroyed: function destroyed() {
      this.$events.$off("agregarMiBloqueo" + tipoInfo);
      this.$events.$off("eliminarMiBloqueo" + tipoInfo);
    },
    beforeDestroy: function beforeDestroy() {
      window.Echo.leave(tipoInfo);
      window.Echo.leave("recibirBtns" + tipoInfo);
      window.Echo.leave("desbloquearBtns" + tipoInfo);
      window.Echo.leave("bloquearBtns" + tipoInfo);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (websocketsOtraInfoMixin);

/***/ }),

/***/ "./resources/js/mixins/websocketsTablaOtraInfo.js":
/*!********************************************************!*\
  !*** ./resources/js/mixins/websocketsTablaOtraInfo.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var websocketsTablaOtraInfo = function websocketsTablaOtraInfo(tipo) {
  return {
    data: function data() {
      return {
        tabla: false
      };
    },
    methods: {
      mostrarTabla: function mostrarTabla() {
        this.tabla = !this.tabla;
      },
      actualizarTabla: function actualizarTabla() {
        if (this.tabla) {
          if (this.$refs.tabla) {
            this.$refs.tabla.refreshDatos();
          }
        }
      }
    },
    created: function created() {
      var _this = this;

      this.$events.on("actualizartabla" + tipo, function (e) {
        return _this.actualizarTabla();
      });
    },
    destroyed: function destroyed() {
      this.$events.off("actualizartabla" + tipo);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (websocketsTablaOtraInfo);

/***/ })

}]);