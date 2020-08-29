(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tablas-hongos"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/HongosComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/HongosComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_websocketsOtraInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/websocketsOtraInfo */ "./resources/js/mixins/websocketsOtraInfo.js");
/* harmony import */ var _tablas_hongos_ModalesComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tablas/hongos/ModalesComponent.vue */ "./resources/js/components/otra-info/tablas/hongos/ModalesComponent.vue");
/* harmony import */ var _tablas_hongos_tipos_metodos_TablaTiposMetodosComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tablas/hongos/tipos-metodos/TablaTiposMetodosComponent.vue */ "./resources/js/components/otra-info/tablas/hongos/tipos-metodos/TablaTiposMetodosComponent.vue");
/* harmony import */ var _tablas_hongos_colors_TablaColorsComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tablas/hongos/colors/TablaColorsComponent.vue */ "./resources/js/components/otra-info/tablas/hongos/colors/TablaColorsComponent.vue");
/* harmony import */ var _tablas_hongos_texturas_TablaTexturasComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tablas/hongos/texturas/TablaTexturasComponent.vue */ "./resources/js/components/otra-info/tablas/hongos/texturas/TablaTexturasComponent.vue");
/* harmony import */ var _tablas_hongos_conidioforos_TablaConidioforosComponent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tablas/hongos/conidioforos/TablaConidioforosComponent.vue */ "./resources/js/components/otra-info/tablas/hongos/conidioforos/TablaConidioforosComponent.vue");
/* harmony import */ var _tablas_hongos_esporas_sexual_TablaEsporasSexualComponent_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tablas/hongos/esporas-sexual/TablaEsporasSexualComponent.vue */ "./resources/js/components/otra-info/tablas/hongos/esporas-sexual/TablaEsporasSexualComponent.vue");
/* harmony import */ var _tablas_hongos_esporas_asexual_TablaEsporasAsexualComponent_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tablas/hongos/esporas-asexual/TablaEsporasAsexualComponent.vue */ "./resources/js/components/otra-info/tablas/hongos/esporas-asexual/TablaEsporasAsexualComponent.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ModalOtraInfoHongos: _tablas_hongos_ModalesComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TablaColors: _tablas_hongos_colors_TablaColorsComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    TablaTexturas: _tablas_hongos_texturas_TablaTexturasComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    TablaMetodos: _tablas_hongos_tipos_metodos_TablaTiposMetodosComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    TablaEsporasAsexuales: _tablas_hongos_esporas_asexual_TablaEsporasAsexualComponent_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    TablaEsporasSexuales: _tablas_hongos_esporas_sexual_TablaEsporasSexualComponent_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    TablaConidioforos: _tablas_hongos_conidioforos_TablaConidioforosComponent_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      tablasCaractMacro: false,
      tablasCaractMicro: false,
      tablasMetodos: false
    };
  },
  mixins: [Object(_mixins_websocketsOtraInfo__WEBPACK_IMPORTED_MODULE_0__["default"])("HongosInfo")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_8__["default"].mapState("info_caract", ["info_caract_hongos"])),
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_8__["default"].mapActions("info_caract", ["obtenerInfoCaractHongos"]), {
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

    this.obtenerInfoCaractHongos();
    this.$events.$on("verificarBloqueos-colors-hongo", function (e) {
      return _this.verificarBloqueos("color");
    });
    this.$events.$on("verificarBloqueos-conidioforos-hongo", function (e) {
      return _this.verificarBloqueos("conidioforo");
    });
    this.$events.$on("verificarBloqueos-esporasA-hongo", function (e) {
      return _this.verificarBloqueos("esporaA");
    });
    this.$events.$on("verificarBloqueos-esporasS-hongo", function (e) {
      return _this.verificarBloqueos("esporaS");
    });
    this.$events.$on("verificarBloqueos-texturas-hongo", function (e) {
      return _this.verificarBloqueos("textura");
    });
    this.$events.$on("verificarBloqueos-tipos-metodos-hongo", function (e) {
      return _this.verificarBloqueos("tipo_metodo");
    });
  },
  destroyed: function destroyed() {
    this.$events.$off("verificarBloqueos-colors-hongo");
    this.$events.$off("verificarBloqueos-conidioforos-hongo");
    this.$events.$off("verificarBloqueos-esporasA-hongo");
    this.$events.$off("verificarBloqueos-esporasS-hongo");
    this.$events.$off("verificarBloqueos-texturas-hongo");
    this.$events.$off("verificarBloqueos-tipos-metodos-hongo");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/ModalesComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/hongos/ModalesComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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
  mixins: [_mixins_toastr__WEBPACK_IMPORTED_MODULE_1__["default"], Object(_mixins_websocketsModalOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("HongosInfo")],
  methods: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapActions("info_caract", ["accionAgregarTipoCaractHongo", "accionEditarTipoCaractHongo", "accionEliminarTipoCaractHongo"]), {
    beforeOpenAgregar: function beforeOpenAgregar(data) {
      this.errors = "";
      this.modal.nombre = "";
      this.modal.tipo = data.params.tipo;
    },
    agregarTipo: function agregarTipo() {
      var _this = this;

      this.bloquearBtnModal = true;
      axios.post("/info-caract-hongos/agregar", this.modal).then(function (res) {
        if (res.request.responseURL === "http://127.0.0.1:8000/") {
          localStorage.setItem("mensajeLogin", "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente");
          window.location.href = "/";
        } else {
          _this.bloquearBtnModal = false;

          _this.accionAgregarTipoCaractHongo({
            info: res.data,
            tipo: _this.modal.tipo
          });

          _this.$events.fire("actualizartabla" + _this.modal.tipo);

          _this.$modal.hide("modal_agregar_tipo_hongo");

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
      axios.put("/info-caract-hongos/editar/".concat(this.id), this.modal).then(function (res) {
        _this2.bloquearBtnModal = false;

        _this2.accionEditarTipoCaractHongo({
          info: res.data,
          tipo: _this2.modal.tipo
        });

        _this2.$events.fire("actualizartabla" + _this2.modal.tipo);

        _this2.toastr("Editar ".concat(_this2.primeraMayus(_this2.modal.tipo)), "".concat(_this2.primeraMayus(_this2.modal.tipo), " editado/a con exito!!"), "success");

        _this2.$modal.hide("modal_editar_tipo_hongo");
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
      axios["delete"]("/info-caract-hongos/eliminar/".concat(this.id), {
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
          _this3.accionEliminarTipoCaractHongo({
            info: res.data,
            tipo: _this3.modal.tipo
          });

          _this3.$events.fire("actualizartabla" + _this3.modal.tipo);

          _this3.toastr("Eliminar ".concat(_this3.primeraMayus(_this3.modal.tipo)), "".concat(_this3.primeraMayus(_this3.modal.tipo), " eliminado/a con exito!!"), "success", 5000);
        }

        _this3.$modal.hide("modal_eliminar_tipo_hongo");
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/colors/TablaColorsComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/hongos/colors/TablaColorsComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/hongos/colors/columnas.js");
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
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoCaractMacroHongos"]), {
    siHayDatos: function siHayDatos() {
      if (this.getInfoCaractMacroHongos != "" && this.getInfoCaractMacroHongos != null) {
        if (this.getInfoCaractMacroHongos.colores.length > 0) {
          return true;
        }
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/conidioforos/TablaConidioforosComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/hongos/conidioforos/TablaConidioforosComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/hongos/conidioforos/columnas.js");
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
  mixins: [Object(_mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("conidioforo")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoCaractMicroHongos"]), {
    siHayDatos: function siHayDatos() {
      if (this.getInfoCaractMicroHongos != "" && this.getInfoCaractMicroHongos != null) {
        if (this.getInfoCaractMicroHongos.conidioforos.length > 0) {
          return true;
        }
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/esporas-asexual/TablaEsporasAsexualComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/hongos/esporas-asexual/TablaEsporasAsexualComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/hongos/esporas-asexual/columnas.js");
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
  mixins: [Object(_mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("esporaA")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoCaractMicroHongos"]), {
    siHayDatos: function siHayDatos() {
      if (this.getInfoCaractMicroHongos != "" && this.getInfoCaractMicroHongos != null) {
        if (this.getInfoCaractMicroHongos.esporas_asexuales.length > 0) {
          return true;
        }
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/esporas-sexual/TablaEsporasSexualComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/hongos/esporas-sexual/TablaEsporasSexualComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/hongos/esporas-sexual/columnas.js");
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
  mixins: [Object(_mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("esporaS")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoCaractMicroHongos"]), {
    siHayDatos: function siHayDatos() {
      if (this.getInfoCaractMicroHongos != "" && this.getInfoCaractMicroHongos != null) {
        if (this.getInfoCaractMicroHongos.esporas_sexuales.length > 0) {
          return true;
        }
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/texturas/TablaTexturasComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/hongos/texturas/TablaTexturasComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/hongos/texturas/columnas.js");
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
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoCaractMacroHongos"]), {
    siHayDatos: function siHayDatos() {
      if (this.getInfoCaractMacroHongos != "" && this.getInfoCaractMacroHongos != null) {
        if (this.getInfoCaractMacroHongos.texturas.length > 0) {
          return true;
        }
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/hongos/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _columnas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnas */ "./resources/js/components/otra-info/tablas/hongos/tipos-metodos/columnas.js");
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
  mixins: [Object(_mixins_websocketsTablaOtraInfo__WEBPACK_IMPORTED_MODULE_2__["default"])("tipo_metodo")],
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters("info_caract", ["getInfoMetodoConserHongos"]), {
    siHayDatos: function siHayDatos() {
      if (this.getInfoMetodoConserHongos != "" && this.getInfoMetodoConserHongos != null) {
        if (this.getInfoMetodoConserHongos.tipo_metodo.length > 0) {
          return true;
        }
      }

      return false;
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/HongosComponent.vue?vue&type=template&id=f20737d4&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/HongosComponent.vue?vue&type=template&id=f20737d4& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      _vm.info_caract_hongos != ""
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
                          staticClass: "mostrar-cursor",
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
                          staticClass: "mostrar-cursor",
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
                                [_c("TablaConidioforos")],
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
                                [_c("TablaEsporasAsexuales")],
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
                                [_c("TablaEsporasSexuales")],
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
                          staticClass: "mostrar-cursor",
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
        : [_vm._m(3)],
      _vm._v(" "),
      _c("ModalOtraInfoHongos")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/ModalesComponent.vue?vue&type=template&id=4b50748c&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/hongos/ModalesComponent.vue?vue&type=template&id=4b50748c& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
            name: "modal_agregar_tipo_hongo",
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
                      return _vm.$modal.hide("modal_agregar_tipo_hongo")
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
                      return _vm.$modal.hide("modal_agregar_tipo_hongo")
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
            name: "modal_editar_tipo_hongo",
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
                      return _vm.$modal.hide("modal_editar_tipo_hongo")
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
                      return _vm.$modal.hide("modal_editar_tipo_hongo")
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
            name: "modal_eliminar_tipo_hongo",
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
                      return _vm.$modal.hide("modal_eliminar_tipo_hongo")
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
                      return _vm.$modal.hide("modal_eliminar_tipo_hongo")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/colors/TablaColorsComponent.vue?vue&type=template&id=406b874c&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/hongos/colors/TablaColorsComponent.vue?vue&type=template&id=406b874c& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
              attrs: { tipoModal: "hongo", tipo: "color" },
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
                        "api-url": "/info-panel/colors-hongo",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "colors-hongo"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/conidioforos/TablaConidioforosComponent.vue?vue&type=template&id=774c1434&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/hongos/conidioforos/TablaConidioforosComponent.vue?vue&type=template&id=774c1434& ***!
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
              attrs: { tipoModal: "hongo", tipo: "conidioforo" },
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
                        "api-url": "/info-panel/conidioforos-hongo",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "conidioforos-hongo"
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
        _vm._v("\n        Tabla Dinámica Conidioforos\n      ")
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
            _vm._v("AÚN NO SE HAN AGREGADO CONIDIOFOROS")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/esporas-asexual/TablaEsporasAsexualComponent.vue?vue&type=template&id=644db531&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/hongos/esporas-asexual/TablaEsporasAsexualComponent.vue?vue&type=template&id=644db531& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
              attrs: { tipoModal: "hongo", tipo: "esporaA" },
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
                        "api-url": "/info-panel/esporasA-hongo",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "esporasA-hongo"
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
        _vm._v("\n        Tabla Dinámica Esporas Asexuales\n      ")
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
            _vm._v("AÚN NO SE HAN AGREGADO ESPORAS ASEXUALES")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/esporas-sexual/TablaEsporasSexualComponent.vue?vue&type=template&id=0b3bf6af&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/hongos/esporas-sexual/TablaEsporasSexualComponent.vue?vue&type=template&id=0b3bf6af& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
              attrs: { tipoModal: "hongo", tipo: "esporaS" },
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
                        "api-url": "/info-panel/esporasS-hongo",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "esporasS-hongo"
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
        _vm._v("\n        Tabla Dinámica Esporas Sexuales\n      ")
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
            _vm._v("AÚN NO SE HAN AGREGADO ESPORAS SEXUALES")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/texturas/TablaTexturasComponent.vue?vue&type=template&id=e43004fc&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/hongos/texturas/TablaTexturasComponent.vue?vue&type=template&id=e43004fc& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
              attrs: { tipoModal: "hongo", tipo: "textura" },
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
                        "api-url": "/info-panel/texturas-hongo",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "texturas-hongo"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=template&id=3342583d&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/otra-info/tablas/hongos/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=template&id=3342583d& ***!
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
              attrs: { tipoModal: "hongo", tipo: "tipo_metodo" },
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
                        "api-url": "/info-panel/tipos-metodos-hongo",
                        fields: _vm.fields,
                        "sort-order": _vm.sortOrder,
                        nameGet: "tipos-metodos-hongo"
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

/***/ "./resources/js/components/otra-info/HongosComponent.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/otra-info/HongosComponent.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HongosComponent_vue_vue_type_template_id_f20737d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HongosComponent.vue?vue&type=template&id=f20737d4& */ "./resources/js/components/otra-info/HongosComponent.vue?vue&type=template&id=f20737d4&");
/* harmony import */ var _HongosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HongosComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/HongosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HongosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HongosComponent_vue_vue_type_template_id_f20737d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HongosComponent_vue_vue_type_template_id_f20737d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/HongosComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/HongosComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/otra-info/HongosComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HongosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./HongosComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/HongosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HongosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/HongosComponent.vue?vue&type=template&id=f20737d4&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/otra-info/HongosComponent.vue?vue&type=template&id=f20737d4& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HongosComponent_vue_vue_type_template_id_f20737d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./HongosComponent.vue?vue&type=template&id=f20737d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/HongosComponent.vue?vue&type=template&id=f20737d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HongosComponent_vue_vue_type_template_id_f20737d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HongosComponent_vue_vue_type_template_id_f20737d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/ModalesComponent.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/ModalesComponent.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalesComponent_vue_vue_type_template_id_4b50748c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalesComponent.vue?vue&type=template&id=4b50748c& */ "./resources/js/components/otra-info/tablas/hongos/ModalesComponent.vue?vue&type=template&id=4b50748c&");
/* harmony import */ var _ModalesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/hongos/ModalesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalesComponent_vue_vue_type_template_id_4b50748c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalesComponent_vue_vue_type_template_id_4b50748c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/hongos/ModalesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/ModalesComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/ModalesComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/ModalesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/ModalesComponent.vue?vue&type=template&id=4b50748c&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/ModalesComponent.vue?vue&type=template&id=4b50748c& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalesComponent_vue_vue_type_template_id_4b50748c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalesComponent.vue?vue&type=template&id=4b50748c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/ModalesComponent.vue?vue&type=template&id=4b50748c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalesComponent_vue_vue_type_template_id_4b50748c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalesComponent_vue_vue_type_template_id_4b50748c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/colors/TablaColorsComponent.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/colors/TablaColorsComponent.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaColorsComponent_vue_vue_type_template_id_406b874c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaColorsComponent.vue?vue&type=template&id=406b874c& */ "./resources/js/components/otra-info/tablas/hongos/colors/TablaColorsComponent.vue?vue&type=template&id=406b874c&");
/* harmony import */ var _TablaColorsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaColorsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/hongos/colors/TablaColorsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaColorsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaColorsComponent_vue_vue_type_template_id_406b874c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaColorsComponent_vue_vue_type_template_id_406b874c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/hongos/colors/TablaColorsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/colors/TablaColorsComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/colors/TablaColorsComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaColorsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaColorsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/colors/TablaColorsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaColorsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/colors/TablaColorsComponent.vue?vue&type=template&id=406b874c&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/colors/TablaColorsComponent.vue?vue&type=template&id=406b874c& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaColorsComponent_vue_vue_type_template_id_406b874c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaColorsComponent.vue?vue&type=template&id=406b874c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/colors/TablaColorsComponent.vue?vue&type=template&id=406b874c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaColorsComponent_vue_vue_type_template_id_406b874c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaColorsComponent_vue_vue_type_template_id_406b874c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/colors/columnas.js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/colors/columnas.js ***!
  \****************************************************************************/
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
  name: "__component:acciones_colors_hongo",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/conidioforos/TablaConidioforosComponent.vue":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/conidioforos/TablaConidioforosComponent.vue ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaConidioforosComponent_vue_vue_type_template_id_774c1434___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaConidioforosComponent.vue?vue&type=template&id=774c1434& */ "./resources/js/components/otra-info/tablas/hongos/conidioforos/TablaConidioforosComponent.vue?vue&type=template&id=774c1434&");
/* harmony import */ var _TablaConidioforosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaConidioforosComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/hongos/conidioforos/TablaConidioforosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaConidioforosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaConidioforosComponent_vue_vue_type_template_id_774c1434___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaConidioforosComponent_vue_vue_type_template_id_774c1434___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/hongos/conidioforos/TablaConidioforosComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/conidioforos/TablaConidioforosComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/conidioforos/TablaConidioforosComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaConidioforosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaConidioforosComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/conidioforos/TablaConidioforosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaConidioforosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/conidioforos/TablaConidioforosComponent.vue?vue&type=template&id=774c1434&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/conidioforos/TablaConidioforosComponent.vue?vue&type=template&id=774c1434& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaConidioforosComponent_vue_vue_type_template_id_774c1434___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaConidioforosComponent.vue?vue&type=template&id=774c1434& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/conidioforos/TablaConidioforosComponent.vue?vue&type=template&id=774c1434&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaConidioforosComponent_vue_vue_type_template_id_774c1434___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaConidioforosComponent_vue_vue_type_template_id_774c1434___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/conidioforos/columnas.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/conidioforos/columnas.js ***!
  \**********************************************************************************/
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
  name: "__component:acciones_conidioforos_hongo",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/esporas-asexual/TablaEsporasAsexualComponent.vue":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/esporas-asexual/TablaEsporasAsexualComponent.vue ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaEsporasAsexualComponent_vue_vue_type_template_id_644db531___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaEsporasAsexualComponent.vue?vue&type=template&id=644db531& */ "./resources/js/components/otra-info/tablas/hongos/esporas-asexual/TablaEsporasAsexualComponent.vue?vue&type=template&id=644db531&");
/* harmony import */ var _TablaEsporasAsexualComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaEsporasAsexualComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/hongos/esporas-asexual/TablaEsporasAsexualComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaEsporasAsexualComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaEsporasAsexualComponent_vue_vue_type_template_id_644db531___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaEsporasAsexualComponent_vue_vue_type_template_id_644db531___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/hongos/esporas-asexual/TablaEsporasAsexualComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/esporas-asexual/TablaEsporasAsexualComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/esporas-asexual/TablaEsporasAsexualComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaEsporasAsexualComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaEsporasAsexualComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/esporas-asexual/TablaEsporasAsexualComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaEsporasAsexualComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/esporas-asexual/TablaEsporasAsexualComponent.vue?vue&type=template&id=644db531&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/esporas-asexual/TablaEsporasAsexualComponent.vue?vue&type=template&id=644db531& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaEsporasAsexualComponent_vue_vue_type_template_id_644db531___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaEsporasAsexualComponent.vue?vue&type=template&id=644db531& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/esporas-asexual/TablaEsporasAsexualComponent.vue?vue&type=template&id=644db531&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaEsporasAsexualComponent_vue_vue_type_template_id_644db531___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaEsporasAsexualComponent_vue_vue_type_template_id_644db531___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/esporas-asexual/columnas.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/esporas-asexual/columnas.js ***!
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
  name: "__component:acciones_esporas_asexual_hongo",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/esporas-sexual/TablaEsporasSexualComponent.vue":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/esporas-sexual/TablaEsporasSexualComponent.vue ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaEsporasSexualComponent_vue_vue_type_template_id_0b3bf6af___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaEsporasSexualComponent.vue?vue&type=template&id=0b3bf6af& */ "./resources/js/components/otra-info/tablas/hongos/esporas-sexual/TablaEsporasSexualComponent.vue?vue&type=template&id=0b3bf6af&");
/* harmony import */ var _TablaEsporasSexualComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaEsporasSexualComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/hongos/esporas-sexual/TablaEsporasSexualComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaEsporasSexualComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaEsporasSexualComponent_vue_vue_type_template_id_0b3bf6af___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaEsporasSexualComponent_vue_vue_type_template_id_0b3bf6af___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/hongos/esporas-sexual/TablaEsporasSexualComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/esporas-sexual/TablaEsporasSexualComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/esporas-sexual/TablaEsporasSexualComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaEsporasSexualComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaEsporasSexualComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/esporas-sexual/TablaEsporasSexualComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaEsporasSexualComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/esporas-sexual/TablaEsporasSexualComponent.vue?vue&type=template&id=0b3bf6af&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/esporas-sexual/TablaEsporasSexualComponent.vue?vue&type=template&id=0b3bf6af& ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaEsporasSexualComponent_vue_vue_type_template_id_0b3bf6af___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaEsporasSexualComponent.vue?vue&type=template&id=0b3bf6af& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/esporas-sexual/TablaEsporasSexualComponent.vue?vue&type=template&id=0b3bf6af&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaEsporasSexualComponent_vue_vue_type_template_id_0b3bf6af___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaEsporasSexualComponent_vue_vue_type_template_id_0b3bf6af___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/esporas-sexual/columnas.js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/esporas-sexual/columnas.js ***!
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
  name: "__component:acciones_esporas_sexual_hongo",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/texturas/TablaTexturasComponent.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/texturas/TablaTexturasComponent.vue ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaTexturasComponent_vue_vue_type_template_id_e43004fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaTexturasComponent.vue?vue&type=template&id=e43004fc& */ "./resources/js/components/otra-info/tablas/hongos/texturas/TablaTexturasComponent.vue?vue&type=template&id=e43004fc&");
/* harmony import */ var _TablaTexturasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaTexturasComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/hongos/texturas/TablaTexturasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaTexturasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaTexturasComponent_vue_vue_type_template_id_e43004fc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaTexturasComponent_vue_vue_type_template_id_e43004fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/hongos/texturas/TablaTexturasComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/texturas/TablaTexturasComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/texturas/TablaTexturasComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTexturasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaTexturasComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/texturas/TablaTexturasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTexturasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/texturas/TablaTexturasComponent.vue?vue&type=template&id=e43004fc&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/texturas/TablaTexturasComponent.vue?vue&type=template&id=e43004fc& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTexturasComponent_vue_vue_type_template_id_e43004fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaTexturasComponent.vue?vue&type=template&id=e43004fc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/texturas/TablaTexturasComponent.vue?vue&type=template&id=e43004fc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTexturasComponent_vue_vue_type_template_id_e43004fc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTexturasComponent_vue_vue_type_template_id_e43004fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/texturas/columnas.js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/texturas/columnas.js ***!
  \******************************************************************************/
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
  name: "__component:acciones_texturas_hongo",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/tipos-metodos/TablaTiposMetodosComponent.vue":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/tipos-metodos/TablaTiposMetodosComponent.vue ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablaTiposMetodosComponent_vue_vue_type_template_id_3342583d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablaTiposMetodosComponent.vue?vue&type=template&id=3342583d& */ "./resources/js/components/otra-info/tablas/hongos/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=template&id=3342583d&");
/* harmony import */ var _TablaTiposMetodosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaTiposMetodosComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/otra-info/tablas/hongos/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablaTiposMetodosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablaTiposMetodosComponent_vue_vue_type_template_id_3342583d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablaTiposMetodosComponent_vue_vue_type_template_id_3342583d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/otra-info/tablas/hongos/tipos-metodos/TablaTiposMetodosComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTiposMetodosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaTiposMetodosComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTiposMetodosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=template&id=3342583d&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=template&id=3342583d& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTiposMetodosComponent_vue_vue_type_template_id_3342583d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TablaTiposMetodosComponent.vue?vue&type=template&id=3342583d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/otra-info/tablas/hongos/tipos-metodos/TablaTiposMetodosComponent.vue?vue&type=template&id=3342583d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTiposMetodosComponent_vue_vue_type_template_id_3342583d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablaTiposMetodosComponent_vue_vue_type_template_id_3342583d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/otra-info/tablas/hongos/tipos-metodos/columnas.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/otra-info/tablas/hongos/tipos-metodos/columnas.js ***!
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
  name: "__component:acciones_tipos_metodos_hongo",
  title: "Acciones",
  titleClass: "text-center",
  dataClass: "text-center"
}]);

/***/ })

}]);